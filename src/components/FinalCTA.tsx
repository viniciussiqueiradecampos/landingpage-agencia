import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const benefits = [
    'Análise GRATUITA do seu cenário atual',
    'Estratégia personalizada para seu negócio',
    'Projeção de ROI baseada em dados reais',
    'Consultoria inicial de 30 minutos',
    'Plano de ação detalhado',
    'Dashboard de exemplo',
    'Sem compromisso',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff3416]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff3416]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-white mb-4">
              <span className="text-[#ff3416]">SEÇÃO 5:</span> CTA FINAL + FORMULÁRIO
            </h2>
            <p className="text-xl text-white/80">VERSÃO ATUAL (A):</p>
            <p className="text-lg text-white/60 mt-4">HQ:</p>
            <p className="text-white/80 text-xl mt-4">
              AGORA, OS CURSOS REDES MARKETING CLARO COM SUCESSO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2a2a28] border border-[#ff3416]/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl text-white mb-6">Fale com a gente</h3>
              <p className="text-white/60 mb-8">
                Ir à sua competitividade e ROI de 10x
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Nome completo:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-4 py-3 text-white focus:border-[#ff3416] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm">Email profissional:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-4 py-3 text-white focus:border-[#ff3416] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm">
                    Telefone/WhatsApp:
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-4 py-3 text-white focus:border-[#ff3416] focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm">Empresa:</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-4 py-3 text-white focus:border-[#ff3416] focus:outline-none transition-colors"
                    placeholder="Nome da sua empresa"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm">
                    Budget mensal aproximado:
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-4 py-3 text-white focus:border-[#ff3416] focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="5k-10k">R$ 5k - R$ 10k</option>
                    <option value="10k-25k">R$ 10k - R$ 25k</option>
                    <option value="25k-50k">R$ 25k - R$ 50k</option>
                    <option value="50k+">R$ 50k+</option>
                  </select>
                </div>

                <p className="text-xs text-white/40">
                  (ACEITO LIGAÇÃO + TELE LIGAÇÕES + EMAIL + CALL CLICADO)
                  Apenas para contato com interessados. Sem spams/vendas.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className="w-full bg-[#ff3416] text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#ff3416]/90 transition-colors disabled:opacity-50"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Mensagem Enviada!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar e Começar
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-white mb-6">Badge Confiança</h3>
              <p className="text-white/60 mb-8">
                (Vamos, LICENCIADOS Esse processo pode vir Anuseios, SÃO, RÃO)
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-[#ff3416]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff3416]" />
                    </div>
                    <p className="text-white/80">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#ff3416]/10 to-transparent border border-[#ff3416]/30 rounded-xl p-6">
                <h4 className="text-white font-bold mb-2">Sua "CX" que acontece depois:</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <span className="text-[#ff3416]">1.</span> E SÃO APROVANTE CRÍTICA SUA GUIÁ
                    ANÁLISE
                  </li>
                  <li>
                    <span className="text-[#ff3416]">2.</span> IR Proposta FOCAL Estratégia SUA de
                    crescimento
                  </li>
                  <li>
                    <span className="text-[#ff3416]">3.</span> IR Consultoria de base (IR CRM ou
                    não)
                  </li>
                  <li>
                    <span className="text-[#ff3416]">4.</span> IR Resultado de CRM/Vendas/Sales (IR
                    base ROI)
                  </li>
                  <li>
                    <span className="text-[#ff3416]">5.</span> IR sua decisão.
                  </li>
                </ul>
              </div>

              <p className="text-center text-white/60 text-sm mt-8">
                SEM pressão. SEM ligação. SEM compromisso.
              </p>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2a2a28] border border-[#ff3416]/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-3xl text-white mb-4">Microvisão USPS</h3>
            <p className="text-white/70 mb-6">
              OU FARÁ SEM OUTRA COISA MÚSICA SÃO FRUTÍFICOS SÃO no resultado
              <br />
              FARÁ SUA resultados. SEM mais SEM futilidade.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-6 py-3">
                <span className="text-[#ff3416] font-bold">✓</span>{' '}
                <span className="text-white/80">ROI Transparente</span>
              </div>
              <div className="bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-6 py-3">
                <span className="text-[#ff3416] font-bold">✓</span>{' '}
                <span className="text-white/80">Dados em Tempo Real</span>
              </div>
              <div className="bg-[#1d1d1b] border border-[#ff3416]/20 rounded-lg px-6 py-3">
                <span className="text-[#ff3416] font-bold">✓</span>{' '}
                <span className="text-white/80">Resultados Garantidos</span>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="text-center mt-12 text-white/40 text-sm">
            <p>© 2026 Marketing Pro - Agência de Marketing Digital</p>
            <p className="mt-2">Transformando dados em resultados reais.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
