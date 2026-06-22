import { useTranslation } from '@/shared/hooks/useTranslation';

export function DeveloperIdCard() {
    const t = useTranslation();

    return (
        <div className="relative mx-auto w-full max-w-[360px] [perspective:1000px]">
            {/* Back layer tạo cảm giác 3D */}
            <div
                className="
          absolute
          inset-0
          translate-x-3
          translate-y-4
          rounded-[28px]
          bg-[var(--accent)]/30
          blur-[1px]
        "
            />

            {/* Main card */}
            <article
                className="
                relative
                overflow-visible
                    rounded-[28px]
                    border
                    border-[var(--border)]
                    bg-[var(--panel)]
                    p-5
                    shadow-[0_24px_60px_rgba(0,0,0,0.22)]
                    transition
                    duration-500
                    ease-out
                    md:hover:-translate-y-1
                    md:hover:scale-[1.02]
                    "
            >
                {/* Slot lỗ đeo thẻ */}
                <div className="mb-4 flex justify-center">
                    <div
                        className="
              h-3
              w-20
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--page-bg)]/35
              shadow-inner
            "
                    />
                </div>

                {/* Header strip */}
                <div
                    className="
            rounded-2xl
            bg-[var(--accent)]
            px-4
            py-3
            text-center
            text-[var(--button-text)]
          "
                >
                    <p className="text-xs font-bold uppercase tracking-wider">{t.developerIdCard.smallLabel}</p>
                    <h3 className="mt-1 text-lg font-black uppercase tracking-wide">
                        {t.developerIdCard.title}
                    </h3>
                </div>

                {/* Profile image */}
<div className="relative mt-5">
  <div
    className="
      relative
      h-[250px]
      overflow-visible
      rounded-3xl
      border
      border-[var(--border)]
      bg-[var(--panel-soft)]/70
      shadow-inner
    "
  >
    <img
      src="/images/profile.png"
      alt={t.developerIdCard.name}
      className="
        absolute
        left-1/2
        bottom-0
        z-20
        h-[300px]
        w-[120%]
        max-w-none
        -translate-x-1/2
        object-contain
        object-bottom
        drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)]
      "
    />

    <div
      className="
        absolute
        inset-x-0
        bottom-0
        z-10
        h-24
        rounded-b-3xl
        bg-gradient-to-t
        from-black/35
        to-transparent
      "
    />
  </div>
</div>

                {/* Info area */}
                <div className="mt-9 space-y-3 text-sm">
                    <InfoRow label={t.developerIdCard.nameLabel} value={t.developerIdCard.name} />
                    <InfoRow label={t.developerIdCard.roleLabel} value={t.developerIdCard.role} />
                    <InfoRow label={t.developerIdCard.focusLabel} value={t.developerIdCard.focus} />
                </div>

                {/* Serial */}
                <p className="mt-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                    {t.developerIdCard.id}
                </p>
            </article>
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="grid grid-cols-[72px_1fr] gap-3">
            <span className="font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                {label}
            </span>
            <span className="font-semibold text-[var(--text)]">{value}</span>
        </div>
    );
}