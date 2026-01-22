import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, X, HelpCircle, BarChart3 } from 'lucide-react';
import metricsImage from 'figma:asset/c5c56229a3e373fd7010857aa9c9050a0ae0d273.png';

const painCards = [
  {
    icon: X,
    title: 'CAC?',
    description: 'Você não sabe seu CAC real',
  },
  {
    icon: HelpCircle,
    title: 'ROAS?',
    description: 'Você não calcula retorno por canal',
  },
  {
    icon: BarChart3,
    title: 'ROI?',
    description: 'Você não mede resultado real',
  },
];

const benefits = [
  '90 minutos ao vivo (Zoom/Meet)',
  'R$ 0,00 | Zero compromisso',
  'Resposta em 24h',
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff3416]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff3416]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-white mb-8 text-center leading-tight"
          >
            VOCÊ INVESTE EM MARKETING<br />
            MAS NÃO SABE QUANTO CUSTA{' '}
            <span className="text-[#ff3416]">CADA CLIENTE?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl text-white mb-3">
              Consultoria estratégica gratuita de{' '}
              <span className="text-[#ff3416]">90 minutos</span>
            </h2>
            <p className="text-xl text-white/80">
              Descubra seu CAC real e onde seu marketing está vazando
            </p>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 bg-[#2a2a28] border border-[#ff3416]/30 rounded-2xl p-6 md:p-8"
          >
            <p className="text-white/60 text-sm mb-4 text-center">
              Screenshot dashboard real (Fast Charger ou similar MR3)
            </p>
            <div className="flex justify-center">
              <img 
                src={metricsImage} 
                alt="Métricas visíveis: CPL R$ 40,03 | ROAS 11,29x | ROI 1.029%" 
                className="rounded-lg max-w-full h-auto border border-[#ff3416]/20"
              />
            </div>
            <p className="text-[#ff3416] text-sm mt-4 text-center font-medium">
              Métricas visíveis: CPL R$ 40,03 | ROAS 11,29x | ROI 1.029%
            </p>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8"
          >
            <button className="bg-[#ff3416] text-white px-12 py-6 rounded-full text-xl md:text-2xl font-bold inline-flex items-center gap-3 hover:bg-[#ff3416]/90 transition-all hover:scale-105 shadow-lg shadow-[#ff3416]/20">
              AGENDAR MINHA CONSULTORIA GRATUITA
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Microcopy Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff3416]" />
                <span className="text-white/80">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Pain Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {painCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(255, 52, 22, 0.5)' }}
                  className="bg-[#2a2a28] border-2 border-[#ff3416]/20 rounded-xl p-6 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#ff3416]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#ff3416]" />
                    </div>
                    <h3 className="text-xl text-[#ff3416] font-bold">{card.title}</h3>
                  </div>
                  <p className="text-white/70">{card.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}