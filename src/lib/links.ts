export function buildWhatsAppLink(base: string, message: string) {
  return `${base}?text=${encodeURIComponent(message)}`;
}
