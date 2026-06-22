import { Container } from './Container';
import { WireBox } from './WireBox';

export function SectionFrame({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container>
        <WireBox className="min-h-[320px]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em]">
            Section
          </p>

          <h2 className="mb-8 text-3xl font-black text-zinc-700">
            {title}
          </h2>

          {children}
        </WireBox>
      </Container>
    </section>
  );
}