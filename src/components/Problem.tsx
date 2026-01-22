import { motion } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import metricsImage from 'figma:asset/c5c56229a3e373fd7010857aa9c9050a0ae0d273.png';

const problems = [
  'Campanhas estratégicas genéricas ou de sucesso?',
  'Mensagens sem ROI claro e nem marketing real resolvem',
  'Métricas de vaidade',
];

const realData = [
  'Documento apontou que Real Designer ou Adobe MIRb',
  'MIRContas usadas CPT 52 REAIS (RESULTADO R$5.11,980)',
  'CPA Principal',
  'Identif. Usadas Crescente',
  'acelerator criador Creative MARKETINg',
];

const cards = [
  { title: 'CPC ?', desc: 'Você não sabe nem CPC certo!' },
  { title: 'ROAS?', desc: 'Você não sabe se estratégia realmente tem ROAS RENTÁVEL?' },
  { title: 'ROI ?', desc: 'Você não sabe RESULTADOS REAIS!' },
];

export function Problem() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl text-white mb-8">
            HQ <span className="text-[#ff3416]">Realidade:</span>
          </h2>

          <div className="mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 mb-4"
              >
                <X className="w-6 h-6 text-[#ff3416] flex-shrink-0 mt-1" />
                <p className="text-white/80 text-lg">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2a2a28] border border-[#ff3416]/20 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl text-white mb-6">Métricas Reais</h3>
            <div className="flex justify-center mb-6">
              <img 
                src={metricsImage} 
                alt="Métricas visíveis: CPL R$ 40,03 | ROAS 11,29x | ROI 1.029%" 
                className="rounded-lg max-w-full h-auto"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBtZXRyaWNzfGVufDF8fHx8MTc2OTA0ODU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Dashboard de Analytics" 
                className="rounded-lg max-w-full h-auto border-2 border-[#ff3416]/30"
              />
            </div>
          </motion.div>

          <div className="mb-12">
            <h3 className="text-2xl text-white mb-6">Microvisão (Fundo do Funil):</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(255, 52, 22, 0.5)' }}
                  className="bg-[#2a2a28] border border-[#ff3416]/20 rounded-xl p-6 transition-all"
                >
                  <h4 className="text-[#ff3416] text-xl font-bold mb-2">{card.title}</h4>
                  <p className="text-white/70 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#2a2a28] border border-[#ff3416]/30 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-4">Citação e Inspiração</h3>
            <blockquote className="text-white/80 text-lg italic border-l-4 border-[#ff3416] pl-6">
              "Se você não mede, você não gerencia"
              <footer className="text-[#ff3416] mt-2 text-sm not-italic">— Peter Drucker</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}