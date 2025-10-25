export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone } = req.body;

  // Эти переменные нужно будет добавить в Vercel (Project -> Settings -> Environment Variables)
  const BOT_TOKEN = process.env.BOT_TOKEN; 
  const CHAT_ID = process.env.CHAT_ID;
    debugger
  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ ok: false, message: "Bot configuration missing" });
  }

  const text = `📩 Новая заявка (vihlopnaya.01)!\n\nИмя: ${name}\nТелефон: ${phone}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ ok: true });
    } else {
      res.status(500).json({ ok: false, message: data.description });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to send message' });
  }
}