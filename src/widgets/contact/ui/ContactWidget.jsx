import { Container } from '@/shared/ui';
// Thay đổi đường dẫn import AnimateOnScroll cho phù hợp với dự án của bạn
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll'; 
import { useTranslation } from '@/shared/hooks/useTranslation';
import {
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi';

const iconMap = {
  Email: <FiMail size={18} />,
  Phone: <FiPhone size={18} />,
  GitHub: <FiGithub size={18} />,
  Location: <FiMapPin size={18} />,
};

export function ContactWidget() {
  const t = useTranslation();
  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container className="max-w-[1500px]">
        <div className="mx-auto max-w-[1280px]">
          {/* Eyebrow */}
          <AnimateOnScroll delay={0} y={20}>
            <div
              className="
                mx-auto
                mb-8
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--panel)]/60
                px-5
                py-2.5
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-[var(--muted)]
                shadow-sm
              "
            >
              <FiSend size={16} />
              {t.contact.eyebrow}
            </div>
          </AnimateOnScroll>

          {/* Headline */}
          <AnimateOnScroll delay={0.1} y={20}>
            <h2
              className="
                mx-auto
                mb-3
                max-w-[760px]
                text-center
                text-3xl
                font-black
                leading-tight
                tracking-[-0.02em]
                text-[var(--text)]
                md:text-4xl
              "
            >
              {t.contact.heading}
            </h2>
          </AnimateOnScroll>

          {/* Subline */}
          <AnimateOnScroll delay={0.2} y={20}>
            <p
              className="
                mx-auto
                mb-10
                max-w-[720px]
                text-center
                text-base
                leading-relaxed
                text-[var(--muted)]
              "
            >
              {t.contact.subline}
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left CTA card */}
            <AnimateOnScroll delay={0.3} x={-30} y={0} className="h-full">
              <article
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[var(--border)]
                  bg-[var(--page-bg)]
                  p-6
                  shadow-sm
                  transition
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-[var(--accent)]
                  hover:bg-[var(--panel)]
                  hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]
                  md:p-8
                "
              >
                <IconBox className="mb-5">
                  <FiMail size={18} />
                </IconBox>

                <p
                  className="
                    mb-2
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--muted)]
                    transition
                    duration-300
                    ease-out
                    group-hover:text-[var(--accent)]
                  "
                >
                  {t.contact.cta.label}
                </p>

                <h3
                  className="
                    max-w-xl
                    text-2xl
                    font-black
                    leading-tight
                    text-[var(--text)]
                    transition
                    duration-300
                    ease-out
                    group-hover:translate-x-1
                    md:text-3xl
                  "
                >
                  {t.contact.cta.title}
                </h3>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[var(--muted)]">
                  {t.contact.cta.body}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:hoangsang998@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Hoang%20Sang,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[var(--accent)]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-[var(--button-text)]
                      shadow-sm
                      transition
                      duration-300
                      ease-out
                      hover:-translate-y-0.5
                      hover:bg-[var(--accent-hover)]
                      hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]
                    "
                  >
                    <FiSend size={15} />
                    {t.common.sendEmail}
                  </a>
                </div>
              </article>
            </AnimateOnScroll>

            {/* Right contact list */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.contact.items.map((item, index) => (
                <AnimateOnScroll
                  key={item.label}
                  delay={0.4 + index * 0.1} // Hiệu ứng delay bậc thang
                  y={30}
                  className="h-full"
                >
                  <ContactItem item={item} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactItem({ item }) {
  const { label, value, href } = item;
  const icon = iconMap[label];
  const content = (
    <article
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-[20px]
        border
        border-[var(--border)]
        bg-[var(--page-bg)]
        p-6
        shadow-sm
        transition
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-[var(--accent)]
        hover:bg-[var(--panel)]
        hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]
      "
    >
      <IconBox className="mb-4">
        {icon}
      </IconBox>

      <p
        className="
          mb-1
          text-[11px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-[var(--muted)]
          transition
          duration-300
          ease-out
          group-hover:text-[var(--accent)]
        "
      >
        {label}
      </p>

      <h3
        className="
          break-words
          text-base
          font-black
          text-[var(--text)]
          transition
          duration-300
          ease-out
          group-hover:translate-x-1
          md:text-lg
        "
      >
        {value}
      </h3>
    </article>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block h-full">
      {content}
    </a>
  );
}

function IconBox({ children, className = '' }) {
  return (
    <div
      className={`
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--panel)]
        text-[var(--accent)]
        shadow-sm
        transition
        duration-300
        ease-out
        group-hover:rotate-6
        group-hover:scale-110
        group-hover:border-transparent
        group-hover:bg-[var(--accent)]
        group-hover:text-[var(--button-text)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}