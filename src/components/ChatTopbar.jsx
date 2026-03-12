import React from 'react'
import { AGENTS } from '../config/agents'
import { AVATAR_MAP } from '../config/avatars'
import { AvatarKrishna } from '../config/avatars'

export default function ChatTopbar({ activeAgent, isRouted }) {
  const agent = activeAgent ? AGENTS[activeAgent] : null
  const Avatar = activeAgent ? AVATAR_MAP[activeAgent] : null

  return (
    <div style={{
      padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '12px',
      borderBottom: '1px solid var(--border2)', flexShrink: 0,
      background: 'var(--surface)', minHeight: '50px',
    }}>
      <div style={{
        width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden',
        background: 'var(--surface2)', border: '1px solid var(--border)', flexShrink: 0,
      }}>
        {Avatar ? <Avatar size={32} /> : <AvatarKrishna size={32} />}
      </div>

      <div>
        <div style={{
          fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '14px',
          color: agent ? agent.color : 'var(--gold)',
        }}>
          {agent ? agent.name : 'Krishna'}
        </div>
        <div style={{ fontSize: '12px', fontStyle: 'italic', color: 'var(--text-dim)' }}>
          {agent ? agent.desc : 'Guide & Charioteer of Wisdom'}
        </div>
      </div>

      {isRouted && agent && (
        <div style={{
          marginLeft: 'auto',
          fontFamily: 'Cinzel, serif', fontSize: '9px', letterSpacing: '1.5px',
          padding: '3px 10px',
          border: '1px solid var(--gold-dim)', color: 'var(--gold)',
        }}>
          Auto-routed
        </div>
      )}
    </div>
  )
}
