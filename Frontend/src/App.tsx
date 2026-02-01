import '@mantine/core/styles.css';
import { MantineProvider, AppShell } from '@mantine/core';
import { HeaderSimple } from './components/HeaderSimple';
import ExperienceSection, { ContactUs, FeaturesCards, HeroBullets, HeroTitle } from './pages/Home';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      {/* 1. You MUST set the height prop here for the header to show */}
      <AppShell header={{ height: 60 }} padding="md">

        {/* 2. Wrap your component in AppShell.Header */}
        <AppShell.Header>
          <HeaderSimple />
        </AppShell.Header>



        <AppShell.Main>
          <HeroBullets />

        </AppShell.Main>
        <AppShell>
          <ExperienceSection />


          <AppShell>
            <FeaturesCards />
          </AppShell>
        </AppShell>
        <HeroTitle />
      </AppShell>
      <AppShell>
        <ContactUs />
      </AppShell>





    </MantineProvider>
  );
}