import { AGENTS, ROUTER_PROMPT } from '../config/agents'

// ── PASTE YOUR GROQ API KEY HERE ──
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY
// ─────────────────────────────────

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL    = 'llama-3.3-70b-versatile'

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${GROQ_API_KEY}`,
}

/**
 * Classifies the user query and returns the best agent key.
 */
export async function routeQuery(query) {
  try {
    const res = await fetch(GROQ_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: ROUTER_PROMPT },
          { role: 'user',   content: query },
        ],
        max_tokens: 40,
        temperature: 0.1,
      }),
    })
    const data = await res.json()
    const raw  = data.choices?.[0]?.message?.content || '{}'
    const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim())
    return parsed.agent in AGENTS ? parsed.agent : 'yudhi'
  } catch {
    return 'yudhi'
  }
}

/**
 * Sends the user message to the chosen Pandava agent and returns the reply.
 * Only passes history belonging to this specific agent so threads stay isolated.
 */
export async function askAgent(agentKey, history) {
  const agent = AGENTS[agentKey]

  // Filter history: keep all user messages but only this agent's replies
  const agentHistory = []
  for (const m of history.slice(-24)) {
    
    if (m.role === 'user') {
      agentHistory.push({ role: 'user', content: m.content })
    } else if (m.role === 'assistant' && m.agent === agentKey) {
      agentHistory.push({ role: 'assistant', content: m.content })
    }
  }

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: agent.system },
        ...agentHistory.slice(-12),
      ],
      max_tokens: 1024,
      temperature: 0.75,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error?.message || `API error ${res.status}`)
  }

  const data = await res.json()
  return data.choices?.[0]?.message?.content || 'No response received.'
}
