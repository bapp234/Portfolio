import { useScrollReveal } from '@/shared/hooks/useScrollReveal';

export function ScrollReveal({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition
        duration-700
        ease-out
        ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}