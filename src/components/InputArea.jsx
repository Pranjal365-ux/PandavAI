import React, { useState, useRef } from 'react'

export default function InputArea({ onSend, isLoading }) {
  const [text, setText] = useState('')
  const textareaRef = useRef(null)

  const handleSend = () => {
    if (!text.trim() || isLoading) return
    onSend(text)
    setText('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleInput = (e) => {
    setText(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 110) + 'px'
  }

  return (
    <div style={{
      padding: '12px 20px 16px',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
        <div style={{
          flex: 1, background: 'var(--bg)',
          border: '1px solid var(--border)', borderRadius: '2px',
          outline: 'none', transition: 'border-color 0.2s',
        }}>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Speak your query…"
            rows={1}
            style={{
              width: '100%', padding: '10px 14px',
              background: 'none', border: 'none', outline: 'none',
              fontFamily: 'Crimson Pro, serif', fontSize: '16px',
              color: 'var(--text)', resize: 'none',
              minHeight: '42px', maxHeight: '110px', lineHeight: 1.5,
            }}
          />
        </div>

        <button
          onClick={handleSend}
          disabled={isLoading || !text.trim()}
          style={{
            width: '42px', height: '42px', flexShrink: 0,
            border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer',
            background: isLoading ? 'var(--surface3)' : 'var(--gold)',
            color: isLoading ? 'var(--text-dim)' : 'var(--bg)',
            borderRadius: '2px', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
          </svg>
        </button>
      </div>

      <div style={{
        marginTop: '6px', fontSize: '11px', fontStyle: 'italic',
        color: 'var(--text-dim)', textAlign: 'center',
      }}>
        Enter to send · Shift+Enter for new line
      </div>
    </div>
  )
}
