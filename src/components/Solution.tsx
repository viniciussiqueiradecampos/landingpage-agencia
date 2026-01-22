import { motion } from 'motion/react';
import { Target, Rocket, BarChart3, CheckCircle2, X } from 'lucide-react';

const diagrams = [
  {
    title: 'DISCOVERY',
    icon: Target,
    items: ['Análise completa', 'Auditoria 360º', 'Oportunidades ocultas', 'Estratégia clara'],
  },
  {
    title: 'DIAGNOSTIC',
    icon: BarChart3,
    items: ['Analise', 'KPIs detalhados', 'Gargalos reais', 'Projeções precisas'],
  },
  {
    title: 'PLANO AÇÃO',
    icon: Rocket,
    items: ['ROI claro', 'Campanhas objetivas', 'Funis otimizados', 'Resultados Garantidos'],
  },
];

const comparisons = [
  {
    wrong: 'Análise manual (ou automática incomp.)',
    right: 'Dashboard 24/7 com IA atualização',
  },
  {
    wrong: '"Tráfego que não gera vendas" mas não tem ROI ou funis ruins',
    right: 'Campanhas reais otimizadas ROI, não só tráfego (mas tráfego real)',
  },
  {
    wrong: 'CPC, CPT mas sem olhar (ou resultados)',
    right: 'CPC, IR de 4x já otimizado mais (vendas reais e comissões confirmadas)',
  },
  {
    wrong: 'Relatório genérico ou sem dados (muitas estatísticas inúteis)',
    right: 'IR problemas de 100% crescimento de temas (na venda real)',
  },
];

export function Solution() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#ff3416]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-4">
              <span className="text-[#ff3416]">SEÇÃO 2:</span> SOLUÇÃO + DIFERENCIAL
            </h2>
            <p className="text-xl text-white/80">VERSÃO ATUAL (A):</p>
            <p className="text-lg text-white/60 mt-4">HQ:</p>
            <p className="text-white/80 text-lg mt-2">
              COMO RESOLVEMOS ESSE PROBLEMA DE 360 FUNIRIS
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl text-white mb-8 text-center">
              Diagrama 3 Circulos Principais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {diagrams.map((diagram, index) => {
                const Icon = diagram.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#2a2a28] border-2 border-[#ff3416]/30 rounded-2xl p-8 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3416]/5 rounded-full blur-2xl group-hover:bg-[#ff3416]/10 transition-colors" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-[#ff3416]/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-[#ff3416]" />
                      </div>
                      <h4 className="text-2xl text-[#ff3416] font-bold mb-4">
                        {diagram.title}
                      </h4>
                      <ul className="space-y-2">
                        {diagram.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#ff3416] flex-shrink-0 mt-0.5" />
                            <span className="text-white/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl text-white mb-8 text-center">
              Comparação Lado a Lado
            </h3>
            <div className="space-y-6">
              {comparisons.map((comp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="bg-[#2a2a28]/50 border border-red-500/30 rounded-xl p-6 flex items-start gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-white/70">{comp.wrong}</p>
                  </div>
                  <div className="bg-[#2a2a28] border border-[#ff3416]/30 rounded-xl p-6 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff3416] flex-shrink-0 mt-1" />
                    <p className="text-white/80">{comp.right}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#ff3416]/10 to-transparent border border-[#ff3416]/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl text-white mb-4">Destaque Uma Fórmula</h3>
            <p className="text-white/70 text-lg">
              ROI REAL = Campanha Estratégica + Análise 360° + KPIs em tempo real
            </p>
            <p className="text-[#ff3416] text-sm mt-4">
              Transparência total. Resultados reais. Sem mais relatórios.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
