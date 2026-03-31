// GA4 event tracking utility
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const track = (eventName: string, params?: Record<string, string>) => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export const trackCtaPlanClick = (label?: string) =>
  track("cta_plan_click", { cta_label: label || "Start My Journey" });

export const trackLeadFormSubmit = () =>
  track("lead_form_submit");

export const trackWhatsAppClick = (location: string) =>
  track("whatsapp_click", { click_location: location });

export const trackEmailClick = (location: string) =>
  track("email_click", { click_location: location });

export const trackPassportWarningShown = () =>
  track("passport_warning_shown");

export const trackPassportWarningProceed = () =>
  track("passport_warning_proceed");
