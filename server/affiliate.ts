// PushLap Affiliate API Service
interface ReferralData {
  affiliateId?: string;
  name: string;
  email: string;
  referredUserExternalId?: string;
  plan?: string;
  status?: string;
}

interface SaleData {
  referralId: string;
  externalId?: string;
  externalInvoiceId?: string;
  totalEarned: number;
  commissionRate?: number;
}

export async function trackReferral(data: ReferralData): Promise<boolean> {
  try {
    const apiKey = process.env.PUSHLAP_API_KEY;
    if (!apiKey) {
      console.error("PUSHLAP_API_KEY environment variable not set");
      return false;
    }

    const body = {
      affiliateId: data.affiliateId || "direct", // Default to "direct" if no affiliate
      name: data.name,
      email: data.email,
      referredUserExternalId: data.referredUserExternalId,
      plan: data.plan,
      status: data.status || "lead"
    };

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await fetch('https://www.pushlapgrowth.com/api/v1/referrals', options);
    
    if (response.ok) {
      const result = await response.json();
      console.log('PushLap referral tracked:', result);
      return true;
    } else {
      const error = await response.text();
      console.error('PushLap referral tracking failed:', response.status, error);
      return false;
    }
  } catch (error) {
    console.error('PushLap referral tracking error:', error);
    return false;
  }
}

export async function trackSale(data: SaleData): Promise<boolean> {
  try {
    const apiKey = process.env.PUSHLAP_API_KEY;
    if (!apiKey) {
      console.error("PUSHLAP_API_KEY environment variable not set");
      return false;
    }

    const body = {
      referralId: data.referralId,
      externalId: data.externalId,
      externalInvoiceId: data.externalInvoiceId,
      totalEarned: data.totalEarned,
      commissionRate: data.commissionRate
    };

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await fetch('https://www.pushlapgrowth.com/api/v1/sales', options);
    
    if (response.ok) {
      const result = await response.json();
      console.log('PushLap sale tracked:', result);
      return true;
    } else {
      const error = await response.text();
      console.error('PushLap sale tracking failed:', response.status, error);
      return false;
    }
  } catch (error) {
    console.error('PushLap sale tracking error:', error);
    return false;
  }
}

// Helper function to extract affiliate ID from client-side if available
export function getAffiliateIdFromRequest(req: any): string | undefined {
  // Check if affiliate ID is passed in request body or headers
  return req.body.affiliateId || req.headers['x-affiliate-id'] || undefined;
}