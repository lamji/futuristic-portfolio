import PwaInstallPromptWrapper from '@/components/pwa/PwaInstallPromptWrapper';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  const showPromptes: boolean = false;
  return (
    <main>
      {/* PWA Install Prompt */}
      {showPromptes && (
        <PwaInstallPromptWrapper appName="PWA App" appIcon="/icons/apple-touch-icon.png" />
      )}
      <Portfolio />
    </main>
  );
}
