// Affiliate tracking utilities for client-side

// Get affiliate ID from window object (set by PushLap tracking script)
export function getClientAffiliateId(): string | undefined {
  return (window as any).affiliateId;
}

// Get affiliate ID from URL parameters  
export function getAffiliateIdFromUrl(): string | undefined {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('ref') || urlParams.get('affiliate') || undefined;
}

// Get stored affiliate ID from localStorage
export function getStoredAffiliateId(): string | undefined {
  try {
    return localStorage.getItem('affiliateId') || undefined;
  } catch {
    return undefined;
  }
}

// Get the best available affiliate ID
export function getBestAffiliateId(): string | undefined {
  return getClientAffiliateId() || getAffiliateIdFromUrl() || getStoredAffiliateId();
}

// Add affiliate ID to form data before submission
export function addAffiliateToFormData(formData: any): any {
  const affiliateId = getBestAffiliateId();
  if (affiliateId) {
    return { ...formData, affiliateId };
  }
  return formData;
}