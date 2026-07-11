export function FlagBR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="3" fill="#009C3B" />
      <path d="M12 4 L21 12 L12 20 L3 12 Z" fill="#FFDF00" />
      <circle cx="12" cy="12" r="4" fill="#002776" />
    </svg>
  );
}

export function FlagUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="3" fill="#B22234" />
      <rect y="1.85" width="24" height="1.85" fill="#fff" />
      <rect y="5.54" width="24" height="1.85" fill="#fff" />
      <rect y="9.23" width="24" height="1.85" fill="#fff" />
      <rect y="12.92" width="24" height="1.85" fill="#fff" />
      <rect y="16.6" width="24" height="1.85" fill="#fff" />
      <rect y="20.3" width="24" height="1.85" fill="#fff" />
      <rect width="11" height="13" fill="#3C3B6E" />
    </svg>
  );
}
