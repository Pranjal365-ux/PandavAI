import React from 'react'
import { AVATAR_MAP } from '../config/avatars'

export default function TypingIndicator({ agentKey = 'yudhi' }) {
  const Avatar = AVATAR_MAP[agentKey]
  return (
    <div style={{
      display: 'flex', gap: '12px', alignSelf: 'flex-start',
      animation: 'fadeUp 0.2s ease',
    }}>
      <div style={{
        width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0,
        overflow: 'hidden', border: '1px solid var(--border)',
        alignSelf: 'flex-end', background: 'var(--surface2)',
      }}>
        {Avatar && <Avatar size={34} />}
      </div>
      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '0 2px 2px 2px', padding: '14px 16px',
        display: 'flex', gap: '5px', alignItems: 'center',
      }}>
        {[0, 0.2, 0.4].map((delay, i) => (
          <span key={i} style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--gold)', opacity: 0.3,
            animation: `dotBounce 1.3s ease-in-out ${delay}s infinite`,
            display: 'inline-block',
          }}/>
        ))}
      </div>
    </div>
  )
}
