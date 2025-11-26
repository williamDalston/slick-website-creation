/**
 * Email service configuration
 * 
 * To set up email collection:
 * 1. Go to https://web3forms.com and get a free access key
 * 2. Replace 'YOUR_WEB3FORMS_ACCESS_KEY' in Waitlist.tsx and Footer.tsx
 * 
 * Alternative services:
 * - Formspree: https://formspree.io (free tier available)
 * - EmailJS: https://www.emailjs.com (free tier available)
 * - SendGrid: https://sendgrid.com (free tier available)
 */

const EMAIL_SERVICE_CONFIG = {
  web3forms: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
  },
  recipient: 'faradaybach@gmail.com',
}

export async function sendEmailNotification(
  email: string,
  source: 'waitlist' | 'footer'
) {
  const subject = source === 'waitlist' 
    ? 'New Waitlist Signup - ClarityGrid' 
    : 'New Product Update Signup - ClarityGrid'
  
  const message = `New email signup:\n\nEmail: ${email}\nSource: ${source}\nDate: ${new Date().toISOString()}`

  try {
    const response = await fetch(EMAIL_SERVICE_CONFIG.web3forms.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: EMAIL_SERVICE_CONFIG.web3forms.accessKey,
        subject,
        from_name: 'ClarityGrid Website',
        email: EMAIL_SERVICE_CONFIG.recipient,
        message,
      }),
    })

    return { success: response.ok }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}

