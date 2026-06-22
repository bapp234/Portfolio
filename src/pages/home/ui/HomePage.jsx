import { HeaderWidget } from '@/widgets/header';
import { HeroWidget } from '@/widgets/hero';
import { AboutWidget } from '@/widgets/about';
import { SkillsWidget } from '@/widgets/skills';
import { ProjectsWidget } from '@/widgets/projects';
import { ContactWidget } from '@/widgets/contact';
import { FooterWidget } from '@/widgets/footer';
import { ScrollProgress } from '@/shared/ui/ScrollProgress';
export function HomePage() {
  return (
    <div className="min-h-screen text-[var(--text)]">
      <ScrollProgress />

      <HeaderWidget />

      <main>
        <HeroWidget />
        <AboutWidget />
        <SkillsWidget />
        <ProjectsWidget />
        <ContactWidget />
      </main>

      <FooterWidget />
    </div>
  );
}