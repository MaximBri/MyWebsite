import { NextResponse } from 'next/server'

const TELEGRAM_TOKEN = process.env.TG_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TG_CHAT_ID

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const text = body?.text
  const chatId = TELEGRAM_CHAT_ID

  if (!text || typeof text !== 'string')
    return NextResponse.json({ error: 'Missing text' }, { status: 400 })
  if (!TELEGRAM_TOKEN || !chatId)
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    )
    await tgRes.json()
    if (!tgRes.ok)
      return NextResponse.json({ error: 'Telegram API error' }, { status: 502 })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('TG send error', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
