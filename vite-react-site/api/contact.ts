export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, message } = request.body ?? {}

    if (!name || !email || !message) {
      return response.status(400).json({ error: 'Missing required fields' })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.FROM_EMAIL || 'no-reply@atrivextech.com'
    const toEmails = (process.env.CONTACT_TO_EMAILS || 'sales@atrivextech.com,support@atrivextech.com')
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)

    if (!resendApiKey) {
      return response.status(500).json({ error: 'Missing RESEND_API_KEY environment variable' })
    }

    const subject = `New contact request from ${name}`
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmails,
        subject,
        reply_to: email,
        html,
      }),
    })

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text()
      return response.status(502).json({ error: 'Email provider rejected request', details: errorBody })
    }

    return response.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    return response.status(500).json({ error: 'Internal server error' })
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
