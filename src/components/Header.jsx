import React from 'react'
import { AGENTS } from '../config/agents'

const ChakraLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="16" stroke="#c8922a" strokeWidth="1.2" opacity="0.6"/>
    <circle cx="18" cy="18" r="10" stroke="#c8922a" strokeWidth="1"   opacity="0.4"/>
    <circle cx="18" cy="18" r="3"  fill="#c8922a"   opacity="0.9"/>
    <g stroke="#c8922a" strokeWidth="0.8" opacity="0.5">
      <line x1="18" y1="2"  x2="18" y2="8"/>  <line x1="18" y1="28" x2="18" y2="34"/>
      <line x1="2"  y1="18" x2="8"  y2="18"/> <line x1="28" y1="18" x2="34" y2="18"/>
      <line x1="6.1"  y1="6.1"  x2="10.3" y2="10.3"/>
      <line x1="25.7" y1="25.7" x2="29.9" y2="29.9"/>
      <line x1="29.9" y1="6.1"  x2="25.7" y2="10.3"/>
      <line x1="10.3" y1="25.7" x2="6.1"  y2="29.9"/>
      <line x1="12.5" y1="2.5"  x2="13.8" y2="8.1"/>
      <line x1="22.2" y1="27.9" x2="23.5" y2="33.5"/>
      <line x1="2.5"  y1="23.5" x2="8.1"  y2="22.2"/>
      <line x1="27.9" y1="13.8" x2="33.5" y2="12.5"/>
      <line x1="23.5" y1="2.5"  x2="22.2" y2="8.1"/>
      <line x1="13.8" y1="27.9" x2="12.5" y2="33.5"/>
      <line x1="2.5"  y1="12.5" x2="8.1"  y2="13.8"/>
      <line x1="27.9" y1="22.2" x2="33.5" y2="23.5"/>
    </g>
  </svg>
)

export default function Header({ activeAgent, sidebarOpen, onToggleSidebar }) {
  const agent = activeAgent ? AGENTS[activeAgent] : null

  return (
    <header style={{
      gridColumn: '1 / -1',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', padding: '0 12px', gap: '10px', flexShrink: 0, minHeight: '58px',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold) 70%, transparent 100%)',
        opacity: 0.3,
      }}/>

      {/* Sidebar toggle */}
      <button
        onClick={onToggleSidebar}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text-mid)', padding: '6px', borderRadius: '2px',
          display: 'flex', flexDirection: 'column', gap: '4px',
          flexShrink: 0, transition: 'color 0.2s',
        }}
        title={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <span style={{ display: 'block', width: '18px', height: '2px', background: 'currentColor', borderRadius: '1px' }}/>
        <span style={{ display: 'block', width: '18px', height: '2px', background: 'currentColor', borderRadius: '1px' }}/>
        <span style={{ display: 'block', width: '18px', height: '2px', background: 'currentColor', borderRadius: '1px' }}/>
      </button>

      <ChakraLogo />

      <div>
        <div style={{
          fontFamily: 'Cinzel, serif', fontWeight: 900, fontSize: '18px',
          letterSpacing: '4px', color: 'var(--gold-light)',
        }}>
          PANDAVA AI
        </div>
        <div style={{
          fontSize: '11px', fontStyle: 'italic', color: 'var(--text-dim)',
          letterSpacing: '1.5px',
        }}>
          Five Sages · One Wisdom
        </div>
      </div>

      <div style={{ marginLeft: 'auto' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'var(--surface2)', border: '1px solid var(--border)',
          padding: '5px 12px', borderRadius: '2px',
          fontFamily: 'Cinzel, serif', fontSize: '11px',
          letterSpacing: '1px', color: 'var(--text-mid)',
        }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: agent ? agent.color : 'var(--gold)',
            transition: 'background 0.3s',
          }}/>
          {agent ? agent.name : 'Awaiting query'}
        </div>
      </div>
    </header>
  )
}
