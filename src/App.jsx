import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ChatTopbar from './components/ChatTopbar'
import MessageList from './components/MessageList'
import InputArea from './components/InputArea'
import { useChat } from './hooks/useChat'

export default function App() {
  const {
    messages, sessions, selectedAgent, activeAgent,
    isLoading, isRouted, selectAgent, sendMessage, newChat, loadSession,
  } = useChat()

  const [isMobile, setIsMobile]       = useState(window.innerWidth < 768)
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setSidebarOpen(true)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSelectAgent = (key) => {
    selectAgent(key)
    if (isMobile) setSidebarOpen(false)
  }

  const handleLoadSession = (session) => {
    loadSession(session)
    if (isMobile) setSidebarOpen(false)
  }

  const sidebarProps = {
    selectedAgent,
    onSelect: handleSelectAgent,
    isOpen: true,
    onNewChat: newChat,
    sessions,
    onLoadSession: handleLoadSession,
  }

  return (
    <div style={{ position: 'relative', zIndex: 1, height: '100svh', overflow: 'hidden' }}>

      {/* DESKTOP */}
      {!isMobile && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: sidebarOpen ? '220px 1fr' : '0px 1fr',
          gridTemplateRows: '58px 1fr',
          height: '100svh',
          transition: 'grid-template-columns 0.25s ease',
        }}>
          <Header activeAgent={activeAgent} sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(o => !o)} />
          <Sidebar {...sidebarProps} isOpen={sidebarOpen} />
          <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg)' }}>
            <ChatTopbar activeAgent={activeAgent} isRouted={isRouted} />
            <MessageList messages={messages} isLoading={isLoading} activeAgent={activeAgent} onSelectAgent={handleSelectAgent} />
            <InputArea onSend={sendMessage} isLoading={isLoading} />
          </div>
        </div>
      )}

      {/* MOBILE */}
      {isMobile && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100svh', width: '100%', position: 'relative' }}>
          <div style={{ flexShrink: 0 }}>
            <Header activeAgent={activeAgent} sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(o => !o)} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg)', minHeight: 0 }}>
            <ChatTopbar activeAgent={activeAgent} isRouted={isRouted} />
            <MessageList messages={messages} isLoading={isLoading} activeAgent={activeAgent} onSelectAgent={handleSelectAgent} />
            <InputArea onSend={sendMessage} isLoading={isLoading} />
          </div>

          {sidebarOpen && (
            <>
              <div onClick={() => setSidebarOpen(false)} style={{
                position: 'fixed', inset: 0, zIndex: 50,
                background: 'rgba(0,0,0,0.65)',
              }}/>
              <div style={{
                position: 'fixed', top: 0, left: 0, bottom: 0,
                width: '75vw', maxWidth: '300px', zIndex: 51,
                animation: 'slideIn 0.25s ease',
                display: 'flex', flexDirection: 'column',
              }}>
                <Sidebar {...sidebarProps} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
