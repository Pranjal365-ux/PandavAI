import React from 'react'
import ReactMarkdown from 'react-markdown'
import { AGENTS } from '../config/agents'
import { AVATAR_MAP } from '../config/avatars'

export default function MessageBubble({ message }) {
  const { role, content, agent } = message

  if (role === 'error') {
    return (
      <div style={{
        textAlign: 'center', padding: '8px', fontSize: '12px',
        color: 'var(--maroon2)', fontStyle: 'italic',
      }}>
        ⚠ {content}
      </div>
    )
  }

  const agentInfo = agent ? AGENTS[agent] : null
  const Avatar    = agent ? AVATAR_MAP[agent] : null
  const isUser    = role === 'user'

  const accentColors = {
    bhima:    'var(--bhima)',
    sahadeva: 'var(--sahadeva)',
    arjuna:   'var(--arjuna)',
    yudhi:    'var(--yudhi)',
    nakula:   'var(--nakula)',
  }

  return (
    <div style={{
      display: 'flex', gap: '12px', animation: 'fadeUp 0.25s ease',
      maxWidth: '820px',
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignSelf: isUser ? 'flex-end' : 'flex-start',
    }}>
      {/* Avatar */}
      <div style={{
        width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0,
        overflow: 'hidden', border: '1px solid var(--border)',
        alignSelf: 'flex-end', background: isUser ? 'var(--maroon)' : 'var(--surface2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {isUser ? (
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', fontWeight: 700, color: '#fff' }}>
            You
          </span>
        ) : (
          Avatar && <Avatar size={34} />
        )}
      </div>

      {/* Body */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '3px',
        alignItems: isUser ? 'flex-end' : 'flex-start',
      }}>
        {!isUser && agentInfo && (
          <div style={{
            fontFamily: 'Cinzel, serif', fontSize: '9px', letterSpacing: '2px',
            color: agentInfo.color, padding: '0 2px',
          }}>
            {agentInfo.name.toUpperCase()}
          </div>
        )}

        <div style={{
          padding: '11px 15px', fontSize: '15px', lineHeight: 1.75,
          borderRadius: isUser ? '2px 2px 0 2px' : '0 2px 2px 2px',
          position: 'relative', maxWidth: '640px',
          background: isUser ? 'var(--maroon)' : 'var(--surface)',
          border: isUser ? 'none' : '1px solid var(--border)',
          color: isUser ? '#f5e8d8' : 'var(--text)',
          ...((!isUser && agent) ? {
            borderLeft: `3px solid ${accentColors[agent] || 'var(--gold)'}`,
          } : {}),
        }}>
          <div className={`bubble-content${isUser ? ' user' : ''}`}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
