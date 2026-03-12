import React, { useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import KrishnaIntro from './KrishnaIntro'

export default function MessageList({ messages, isLoading, activeAgent, onSelectAgent }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const showWelcome = messages.length === 0

  return (
    <div style={{
      flex: 1, overflowY: 'auto', padding: '24px 28px',
      display: 'flex', flexDirection: 'column', gap: '18px',
    }}>
      {showWelcome ? (
        <KrishnaIntro onSelectAgent={onSelectAgent} />
      ) : (
        messages.map((msg, idx) => {
          const showDivider = idx > 0 && idx % 8 === 0
          return (
            <React.Fragment key={msg.id}>
              {showDivider && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  opacity: 0.3, padding: '4px 0',
                }}>
                  <div style={{ flex: 1, height: '1px', background: 'var(--gold)' }}/>
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)' }}>
                    · · ·
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--gold)' }}/>
                </div>
              )}
              <MessageBubble message={msg} />
            </React.Fragment>
          )
        })
      )}

      {isLoading && <TypingIndicator agentKey={activeAgent || 'yudhi'} />}
      <div ref={bottomRef} />
    </div>
  )
}
