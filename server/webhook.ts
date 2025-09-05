// TaskMagic Webhook Service
interface WebhookData {
  form_type: string;
  timestamp: string;
  page_url?: string;
  affiliate_id?: string;
  // Common fields
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  // Service specific fields
  service?: string;
  industry?: string;
  revenue?: string;
  rd_spend?: string;
  experience?: string;
  interest?: string;
  background?: string;
  // Booking fields  
  date?: string;
  time?: string;
  // Event fields
  event_type?: string;
  event_date?: string;
  event_location?: string;
  guest_count?: string;
  budget?: string;
  description?: string;
  // Additional metadata
  user_agent?: string;
  ip_address?: string;
}

const WEBHOOK_URL = "https://apps.taskmagic.com/api/v1/webhooks/iQoCHsafkioxWwnstavtF";

export async function sendToWebhook(data: WebhookData): Promise<boolean> {
  try {
    const webhookPayload = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'LIV8-Website/1.0'
      },
      body: JSON.stringify(webhookPayload)
    });

    if (response.ok) {
      console.log('Webhook sent successfully:', data.form_type);
      return true;
    } else {
      const errorText = await response.text();
      console.error('Webhook failed:', response.status, errorText);
      return false;
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return false;
  }
}

// Helper functions to format data for different form types
export function formatContactWebhook(formData: any, affiliateId?: string): WebhookData {
  return {
    form_type: 'contact',
    timestamp: new Date().toISOString(),
    affiliate_id: affiliateId,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    service: formData.service,
    message: formData.message
  };
}

export function formatBookingWebhook(formData: any, affiliateId?: string): WebhookData {
  return {
    form_type: 'booking',
    timestamp: new Date().toISOString(),
    affiliate_id: affiliateId,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    service: formData.service,
    date: formData.date,
    time: formData.time,
    message: formData.message
  };
}

export function formatRDCreditsWebhook(formData: any, affiliateId?: string): WebhookData {
  return {
    form_type: 'rd_credits',
    timestamp: new Date().toISOString(),
    affiliate_id: affiliateId,
    company: formData.company,
    industry: formData.industry,
    revenue: formData.revenue,
    rd_spend: formData.rd_spend,
    name: formData.name,
    email: formData.email,
    phone: formData.phone
  };
}

export function formatJoinWebhook(formData: any, affiliateId?: string): WebhookData {
  return {
    form_type: 'join_application',
    timestamp: new Date().toISOString(),
    affiliate_id: affiliateId,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    experience: formData.experience,
    interest: formData.interest,
    background: formData.background
  };
}

export function formatEventWebhook(formData: any, affiliateId?: string): WebhookData {
  return {
    form_type: 'event_request',
    timestamp: new Date().toISOString(),
    affiliate_id: affiliateId,
    event_type: formData.eventType,
    event_date: formData.eventDate,
    event_location: formData.eventLocation,
    guest_count: formData.guestCount,
    budget: formData.budget,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    description: formData.description
  };
}