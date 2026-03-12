import { useState, useCallback } from 'react'
import { routeQuery, askAgent } from '../api/groq'

export function useChat() {
  const [sessions,      setSessions]      = useState([])         // past conversations
  const [messages,      setMessages]      = useState([])         // current conversation
  const [selectedAgent, setSelectedAgent] = useState('auto')
  const [activeAgent,   setActiveAgent]   = useState(null)
  const [isLoading,     setIsLoading]     = useState(false)
  const [isRouted,      setIsRouted]      = useState(false)

  const selectAgent = useCallback((key) => {
    setSelectedAgent(key)
    if (key !== 'auto') {
      setActiveAgent(key)
      setIsRouted(false)
    }
  }, [])

  // Save current messages as a session and start fresh
  const newChat = useCallback(() => {
    if (messages.length > 0) {
      const firstUserMsg = messages.find(m => m.role === 'user')
      setSessions(prev => [
        {
          id: Date.now(),
          title: firstUserMsg ? firstUserMsg.content.slice(0, 40) + (firstUserMsg.content.length > 40 ? '…' : '') : 'Conversation',
          messages,
          timestamp: new Date(),
        },
        ...prev,
      ].slice(0, 20)) // keep last 20 sessions
    }
    setMessages([])
    setActiveAgent(null)
    setIsRouted(false)
    setSelectedAgent('auto')
  }, [messages])

  // Restore a past session
  const loadSession = useCallback((session) => {
    // Save current if non-empty
    if (messages.length > 0) {
      const firstUserMsg = messages.find(m => m.role === 'user')
      setSessions(prev => {
        const filtered = prev.filter(s => s.id !== session.id)
        return [
          {
            id: Date.now(),
            title: firstUserMsg ? firstUserMsg.content.slice(0, 40) + (firstUserMsg.content.length > 40 ? '…' : '') : 'Conversation',
            messages,
            timestamp: new Date(),
          },
          ...filtered,
        ].slice(0, 20)
      })
    }
    setMessages(session.messages)
    const lastAgent = [...session.messages].reverse().find(m => m.role === 'assistant')
    setActiveAgent(lastAgent?.agent || null)
    setIsRouted(false)
  }, [messages])

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isLoading) return

    const userMsg = { id: Date.now(), role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setIsLoading(true)

    const history = [...messages, userMsg]

    try {
      let agentKey = selectedAgent
      if (agentKey === 'auto') {
        agentKey = await routeQuery(text)
        setIsRouted(true)
      } else {
        setIsRouted(false)
      }
      setActiveAgent(agentKey)

      const reply = await askAgent(agentKey, history)

      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: reply, agent: agentKey },
      ])
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'error', content: err.message },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [messages, selectedAgent, isLoading])

  return {
    messages,
    sessions,
    selectedAgent,
    activeAgent,
    isLoading,
    isRouted,
    selectAgent,
    sendMessage,
    newChat,
    loadSession,
  }
}
