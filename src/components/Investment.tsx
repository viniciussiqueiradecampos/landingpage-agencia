import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    subtitle: 'Ideal para pequenas empresas',
    investment: 'R$ 3.500/mês',
    description: 'Gestão de até 2 canais',
    features: [
      'Google Ads OU Meta Ads',
      'Até 3 campanhas simultâneas',
      'Dashboard básico',
      'Report mensal',
      'Suporte via email',
    ],
    highlight: false,
  },
  {
    name: 'GROWTH',
    subtitle: 'Para empresas em expansão',
    investment: 'R$ 7.500/mês',
    description: 'Estratégia multicanal completa',
    features: [
      'Google Ads + Meta Ads + LinkedIn',
      'Até 8 campanhas simultâneas',
      'Dashboard em tempo real',
      'Reports semanais',
      'Consultoria estratégica mensal',
      'A/B testing avançado',
      'Suporte prioritário',
    ],
    highlight: true,
    popular: true,
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'Solução personalizada',
    investment: 'A partir de R$ 15.000',
    description: 'Ecossistema completo de marketing',
    features: [
      'Todos os canais disponíveis',
      'Campanhas ilimitadas',
      'BI personalizado',
      'Reports em tempo real',
      'Gestor dedicado',
      'Automação completa',
      'Integração com CRM',
      'Suporte 24/7',
    ],
    highlight: false,
  },
];

const budgetExamples = [
  {
    title: 'Budget "MAIS POPULAR": O Sucesso Middle Ground',
    description:
      'Aplicação Budget Médio: Empresa com orçamento de mídia R$ 20k, MÊS (Nosso Consultor do mês R$ 5.8)',
    details: [
      'Contexto: E-commerce, vendendo itens a tickets de 3 salas especiais.',
      'Budget Base: R$ 20k aplicados corretamente (com nosso cálculo eficiente).',
    ],
    note: 'Resultado REAL: Faturamento de 120k - ROI de 6x - CLIENTE mês 6-8.',
  },
];

const forCompanies = [
  'Empresas entre R$ 100 milhões-2M',
  'Negócios que já investem em marketing',
  'Times que precisam escalar com dados reais.',
];

export function Investment() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-[#ff3416]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-4">
              <span className="text-[#ff3416]">SEÇÃO 4:</span> INVESTIMENTO
            </h2>
            <p className="text-xl text-white/80">VERSÃO ATUAL (A):</p>
            <p className="text-lg text-white/60 mt-4">HQ:</p>
          </div>

          {/* Investment Cards */}
          <div className="mb-16">
            <h3 className="text-3xl text-white mb-8 text-center">3 Cards Lado a Lado</h3>
            <p className="text-center text-white/60 mb-8">CASO 1: STARTER</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-2xl p-8 transition-all flex flex-col ${
                    plan.highlight
                      ? 'bg-gradient-to-b from-[#ff3416]/20 to-[#2a2a28] border-2 border-[#ff3416]'
                      : 'bg-[#2a2a28] border border-[#ff3416]/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff3416] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      MAIS POPULAR
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="text-2xl text-[#ff3416] font-bold mb-2">{plan.name}</h4>
                    <p className="text-white/60 text-sm mb-4">{plan.subtitle}</p>
                    <div className="text-4xl text-white font-bold mb-2">{plan.investment}</div>
                    <p className="text-white/70 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ff3416] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 rounded-full font-medium transition-colors mt-auto ${
                      plan.highlight
                        ? 'bg-[#ff3416] text-white hover:bg-[#ff3416]/90'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Quero Este Plano
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Budget Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {budgetExamples.map((example, index) => (
              <div
                key={index}
                className="bg-[#2a2a28] border border-[#ff3416]/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl text-[#ff3416] font-bold mb-4">{example.title}</h3>
                <p className="text-white/80 mb-6">{example.description}</p>
                <div className="space-y-3 mb-6">
                  {example.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#ff3416]">•</span>
                      <p className="text-white/70">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1d1d1b] border border-[#ff3416]/20 rounded-xl p-6">
                  <p className="text-white/90 font-medium">{example.note}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* For Companies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#ff3416]/10 to-transparent border border-[#ff3416]/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6 text-center">Para empresas médias:</h3>
            <div className="max-w-2xl mx-auto space-y-4">
              {forCompanies.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#ff3416] flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-white/60 text-sm mt-8">
              [100% FAZER uma segmentação]
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}