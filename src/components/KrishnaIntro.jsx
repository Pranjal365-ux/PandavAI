import React from 'react'
import { AGENTS } from '../config/agents'
import { AVATAR_MAP, AvatarKrishna } from '../config/avatars'

export default function KrishnaIntro({ onSelectAgent }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      margin: 'auto 0', animation: 'fadeUp 0.8s ease',
    }}>
      <div style={{
        width: '100%', maxWidth: '560px', margin: '0 auto',
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '2px', overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0800 0%, #1a1408 50%, #0e0c06 100%)',
          padding: '28px 32px 20px', position: 'relative', textAlign: 'center',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(200,146,42,0.12) 0%, transparent 65%)',
          }}/>
          <div style={{
            width: '80px', height: '80px', margin: '0 auto 14px',
            borderRadius: '50%', overflow: 'hidden',
            border: '2px solid var(--gold-dim)',
            boxShadow: '0 0 24px rgba(200,146,42,0.2)',
            position: 'relative', zIndex: 1,
          }}>
            <AvatarKrishna size={80} />
          </div>
          <div style={{
            fontFamily: 'Cinzel, serif', fontWeight: 900, fontSize: '20px',
            letterSpacing: '4px', color: 'var(--gold-light)',
            position: 'relative', zIndex: 1,
          }}>
            KRISHNA
          </div>
          <div style={{
            fontSize: '12px', fontStyle: 'italic', color: 'var(--text-dim)',
            marginTop: '4px', letterSpacing: '1px', position: 'relative', zIndex: 1,
          }}>
            Charioteer · Guide · The Eternal Witness
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 32px' }}>
          <div style={{
            fontSize: '16px', lineHeight: 1.85, color: 'var(--text)',
            fontStyle: 'italic', borderLeft: '2px solid var(--gold-dim)',
            paddingLeft: '18px', marginBottom: '20px',
          }}>
            "Arjuna, and all who seek — I am the charioteer of your questions.
            Before you stands the court of the five Pandavas, each a master of their realm.
            Speak freely, and the right brother shall answer. Or choose one yourself."
          </div>

          <div style={{
            display: 'flex', gap: '10px', justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: '20px',
          }}>
            {Object.entries(AGENTS).map(([key, agent]) => {
              const Avatar = AVATAR_MAP[key]
              return (
                <div
                  key={key}
                  onClick={() => onSelectAgent(key)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 14px', border: '1px solid var(--border)',
                    background: 'var(--surface2)', cursor: 'pointer',
                    transition: 'all 0.2s', borderRadius: '2px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold-dim)'
                    e.currentTarget.style.background  = 'var(--surface3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background  = 'var(--surface2)'
                  }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Avatar size={28} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', color: 'var(--text)', letterSpacing: '0.5px' }}>
                      {agent.name}
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                      {agent.title}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{
            textAlign: 'center', fontSize: '12px', fontStyle: 'italic',
            color: 'var(--text-dim)', borderTop: '1px solid var(--border2)',
            paddingTop: '16px',
          }}>
            Ask anything below, or select a sage from the left to speak with them directly.
          </div>
        </div>
      </div>
    </div>
  )
}
