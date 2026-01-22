import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const stats = [
  { number: '300%', label: 'Aumento médio de ROI', icon: TrendingUp },
  { number: '87', label: 'Clientes ativos', icon: Users },
  { number: '24/7', label: 'Monitoramento', icon: Zap },
  { number: '4.9/5', label: 'Avaliação média', icon: Award },
];

const testimonials = [
  {
    company: 'TechStart Solutions',
    result: '+450% em 6 meses',
    quote: 'Transformaram completamente nossa estratégia de marketing digital.',
    metrics: ['ROI: 4.5x', 'CPA: -60%', 'Conversões: +380%'],
  },
  {
    company: 'E-commerce Premium',
    result: 'R$ 2.3M em vendas',
    quote: 'Finalmente temos clareza total sobre onde cada real investido está indo.',
    metrics: ['ROAS: 6.2x', 'Ticket médio: +45%', 'Retenção: 89%'],
  },
  {
    company: 'Serviços Corporativos',
    result: '215 leads qualificados/mês',
    quote: 'A diferença entre métricas de vaidade e resultados reais é impressionante.',
    metrics: ['CPL: R$ 47', 'Taxa conversão: 34%', 'LTV: R$ 12.5k'],
  },
];

const caseDetails = [
  {
    title: 'CASO 1 - E-commerce de Moda',
    challenge: 'Alto investimento em tráfego, mas baixa conversão',
    solution: 'Reestruturação completa do funil + otimização de campanhas',
    results: [
      'ROI: de 1.2x para 5.8x',
      'CPA: redução de 68%',
      'Ticket médio: aumento de 42%',
      'Faturamento: +320% em 4 meses',
    ],
  },
  {
    title: 'CASO 2 - SaaS B2B',
    challenge: 'Leads sem qualificação, vendas estagnadas',
    solution: 'Implementação de estratégia de conteúdo + automação inteligente',
    results: [
      'Leads qualificados: +280%',
      'Ciclo de venda: redução de 40%',
      'Taxa de fechamento: de 8% para 27%',
      'MRR: crescimento de 190%',
    ],
  },
];

export function SocialProof() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-[#ff3416]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-4">
              <span className="text-[#ff3416]">SEÇÃO 3:</span> PROVA SOCIAL
            </h2>
            <p className="text-xl text-white/80">VERSÃO ATUAL (A) - Com dados REAIS:</p>
            <p className="text-lg text-white/60 mt-4">HQ:</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#2a2a28] border border-[#ff3416]/20 rounded-xl p-6 text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff3416]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-[#ff3416] mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl text-white mb-8 text-center">
              O Que Nossos Clientes Dizem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-[#2a2a28] border border-[#ff3416]/20 rounded-xl p-6 hover:border-[#ff3416]/40 transition-colors"
                >
                  <div className="text-[#ff3416] font-bold text-xl mb-2">
                    {testimonial.company}
                  </div>
                  <div className="text-white text-2xl font-bold mb-4">
                    {testimonial.result}
                  </div>
                  <p className="text-white/70 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="space-y-2 pt-4 border-t border-[#ff3416]/20">
                    {testimonial.metrics.map((metric, i) => (
                      <div key={i} className="text-sm text-white/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#ff3416] rounded-full" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Cases */}
          <div className="space-y-8">
            <h3 className="text-3xl text-white mb-8 text-center">Casos de Sucesso Detalhados</h3>
            {caseDetails.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#2a2a28] to-[#2a2a28]/50 border border-[#ff3416]/30 rounded-2xl p-8"
              >
                <h4 className="text-2xl text-[#ff3416] font-bold mb-4">{caseItem.title}</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-white/60 mb-2">Desafio:</div>
                    <p className="text-white/80">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-2">Solução:</div>
                    <p className="text-white/80">{caseItem.solution}</p>
                  </div>
                </div>
                <div className="bg-[#1d1d1b] rounded-xl p-6">
                  <div className="text-sm text-white/60 mb-3">Resultados:</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caseItem.results.map((result, i) => (
                      <div key={i} className="text-white/90 text-sm">
                        <span className="text-[#ff3416]">✓</span> {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#2a2a28] border border-[#ff3416]/20 rounded-xl p-6 text-center"
          >
            <p className="text-white/70">
              <span className="text-[#ff3416] font-bold">CTA Disclaimers:</span>
            </p>
            <p className="text-white/60 text-sm mt-2">
              *Resultados podem variar. Cases reais de clientes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
