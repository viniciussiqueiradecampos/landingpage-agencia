import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1b] border-b border-[#ff3416]/20"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#ff3416]" />
          <span className="text-white font-bold">Marketing Pro</span>
        </div>
        <button className="bg-[#ff3416] text-white px-6 py-2 rounded-full hover:bg-[#ff3416]/90 transition-colors">
          Quero Crescer Agora
        </button>
      </div>
    </motion.header>
  );
}
