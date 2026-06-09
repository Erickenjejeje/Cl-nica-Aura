/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <InfoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
