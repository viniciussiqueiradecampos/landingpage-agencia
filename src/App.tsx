import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { SocialProof } from './components/SocialProof';
import { Investment } from './components/Investment';
import { FinalCTA } from './components/FinalCTA';
import { StickyHeader } from './components/StickyHeader';

export default function App() {
  return (
    <div className="bg-[#1d1d1b] min-h-screen">
      <StickyHeader />
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <Investment />
      <FinalCTA />
    </div>
  );
}
