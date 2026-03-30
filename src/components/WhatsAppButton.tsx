import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/447897020840"
    target="_blank"
    rel="noopener noreferrer"
    title="WhatsApp us now"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform group"
  >
    <img src={whatsappIcon} alt="WhatsApp us now" className="w-full h-full rounded-full" />
    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-forest-green text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      WhatsApp us now
    </span>
  </a>
);

export default WhatsAppButton;
