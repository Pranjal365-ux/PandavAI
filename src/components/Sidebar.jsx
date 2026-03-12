import React from 'react'
import { AGENTS } from '../config/agents'
import { AVATAR_MAP } from '../config/avatars'

export default function Sidebar({ selectedAgent, onSelect, isOpen, onNewChat, sessions, onLoadSession }) {
  return (
    <aside style={{
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      padding: isOpen ? '12px 0 0' : '0',
      overflow: 'hidden',
      transition: 'padding 0.25s ease',
      minWidth: 0, height: '100%',
    }}>
      {isOpen && (
        <>
          {/* New Chat button */}
          <div style={{ padding: '0 12px 12px' }}>
            <button
              onClick={onNewChat}
              style={{
                width: '100%', padding: '9px 14px',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '2px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'var(--gold)', transition: 'all 0.2s',
                fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '1px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,146,42,0.08)'; e.currentTarget.style.borderColor = 'var(--gold-dim)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              New Chat
            </button>
          </div>

          {/* Pandavas label */}
          <div style={{
            fontFamily: 'Cinzel, serif', fontSize: '9px', letterSpacing: '2.5px',
            color: 'var(--text-dim)', textTransform: 'uppercase',
            padding: '0 14px 10px',
            borderBottom: '1px solid var(--border2)',
            marginBottom: '6px', whiteSpace: 'nowrap',
          }}>
            The Pandavas
          </div>

          {/* Agent buttons */}
          <div style={{ flexShrink: 0 }}>
            {Object.entries(AGENTS).map(([key, agent]) => {
              const Avatar = AVATAR_MAP[key]
              return (
                <AgentButton
                  key={key}
                  agentKey={key}
                  agent={agent}
                  isActive={selectedAgent === key}
                  onSelect={onSelect}
                  Avatar={Avatar}
                />
              )
            })}
          </div>

          {/* Chat history */}
          {sessions.length > 0 && (
            <>
              <div style={{
                fontFamily: 'Cinzel, serif', fontSize: '9px', letterSpacing: '2.5px',
                color: 'var(--text-dim)', textTransform: 'uppercase',
                padding: '12px 14px 8px',
                borderTop: '1px solid var(--border2)',
                whiteSpace: 'nowrap',
              }}>
                Recent Chats
              </div>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {sessions.map(session => (
                  <button
                    key={session.id}
                    onClick={() => onLoadSession(session)}
                    style={{
                      width: '100%', padding: '9px 14px',
                      background: 'none', border: 'none',
                      borderBottom: '1px solid var(--border2)',
                      cursor: 'pointer', textAlign: 'left',
                      display: 'flex', flexDirection: 'column', gap: '3px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,146,42,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    <span style={{
                      fontSize: '12px', color: 'var(--text)',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      display: 'block', maxWidth: '180px',
                    }}>
                      {session.title}
                    </span>
                    <span style={{ fontSize: '10px', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                      {formatTime(session.timestamp)}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Footer */}
          <div style={{
            padding: '12px 14px', marginTop: sessions.length > 0 ? '0' : 'auto',
            borderTop: '1px solid var(--border2)',
            fontSize: '11px', fontStyle: 'italic',
            color: 'var(--text-dim)', textAlign: 'center', lineHeight: 1.6,
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            "धर्मो रक्षति रक्षितः"<br/>
            <span style={{ fontSize: '10px', opacity: 0.7 }}>Dharma protects those who protect it</span>
          </div>
        </>
      )}
    </aside>
  )
}

function formatTime(date) {
  const now = new Date()
  const diff = now - date
  if (diff < 60000)  return 'Just now'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
  return date.toLocaleDateString()
}

function AgentButton({ agentKey, agent, isActive, onSelect, Avatar }) {
  const activeColors = {
    bhima:    { border: 'var(--bhima)',    bg: 'rgba(192,80,32,0.08)' },
    sahadeva: { border: 'var(--sahadeva)', bg: 'rgba(32,96,160,0.08)' },
    arjuna:   { border: 'var(--arjuna)',   bg: 'rgba(32,128,80,0.08)' },
    yudhi:    { border: 'var(--yudhi)',    bg: 'rgba(144,96,32,0.08)' },
    nakula:   { border: 'var(--nakula)',   bg: 'rgba(112,32,128,0.08)' },
  }
  const ac = activeColors[agentKey]

  return (
    <button
      onClick={() => onSelect(agentKey)}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 14px', width: '100%', border: 'none',
        background: isActive ? ac.bg : 'none',
        cursor: 'pointer', textAlign: 'left', position: 'relative',
        borderLeft: `3px solid ${isActive ? ac.border : 'transparent'}`,
        borderBottom: '1px solid var(--border2)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(200,146,42,0.05)' }}
      onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'none' }}
    >
      <div style={{
        width: '38px', height: '38px', flexShrink: 0, borderRadius: '50%',
        overflow: 'hidden',
        border: `1.5px solid ${isActive ? ac.border : 'var(--border)'}`,
        transition: 'border-color 0.2s',
        background: 'var(--surface2)',
      }}>
        <Avatar size={38} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '12px',
          color: 'var(--text)', lineHeight: 1.2, display: 'block',
        }}>
          {agent.name}
        </span>
        <span style={{
          fontSize: '11px', fontStyle: 'italic', color: 'var(--text-dim)',
          display: 'block', marginTop: '1px',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {agent.title}
        </span>
      </div>
    </button>
  )
}
