export function WireBox({ children, className = '' }) {
  return (
    <div
      className={`
        border border-dashed border-[var(--border)]
        bg-[var(--panel)]/20
        p-6
        text-[var(--text)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}