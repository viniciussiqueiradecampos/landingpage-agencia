# Landing Page – Agência de Marketing (WordPress + Elementor Pro)

## 1. Visão Geral do Projeto

### Objetivo do site
Criar uma landing page de alta conversão para captação de leads qualificados interessados em melhorar métricas de marketing (CAC, ROAS e ROI), oferecendo uma consultoria estratégica gratuita de 90 minutos.

### Público-alvo
- Empresários
- Gestores de marketing
- Donos de e-commerce
- Prestadores de serviço que investem em tráfego pago

### Principal conversão
👉 Clique no botão “Agendar minha consultoria gratuita”, levando para formulário ou link externo (Calendly / WhatsApp / CRM).

## 2. Stack Técnica
- **CMS:** WordPress
- **Construtor:** Elementor Pro
- **Tema base:** Hello Elementor
- **Plugins adicionais recomendados:**
  - WP Rocket (performance)
  - Rank Math SEO
  - Elementor Pro (Forms + Popups)
  - PixelYourSite (Meta / Google)
  - FluentSMTP (emails)
  - Calendly Embed (opcional)

## 3. Estrutura da Página (Seções)

### 3.1 Hero Section (Above the Fold)
- **Objetivo:** Impacto imediato + dor clara + proposta de valor
- **Elementor:**
  - Section (Full Width / Altura mínima 100vh)
  - Background: Preto (#000)
- **Conteúdo:**
  - **Heading H1 (Uppercase):**
    VOCÊ INVESTE EM MARKETING
    MAS NÃO SABE QUANTO CUSTA
    CADA CLIENTE?
    *“CADA CLIENTE?” em vermelho (cor primária)*
  - **Texto de apoio (H2 / Text):** Consultoria estratégica gratuita de 90 minutos
  - **Texto secundário:** Descubra seu CAC real e onde seu marketing está vazando
- **Boas práticas:**
  - Tipografia forte (sans-serif bold)
  - Espaçamento amplo
  - Contraste máximo

### 3.2 Seção de Prova Visual (Dashboard)
- **Objetivo:** Prova de autoridade + números reais
- **Elementor:**
  - Container com bordas arredondadas
  - Fundo cinza escuro (#111 / #1A1A1A)
  - Sombra suave
- **Conteúdo:**
  - **Imagem (screenshot real ou mockup):** Dashboard de resultados (Fast Charger, MR3 ou similar)
  - **Lista textual (Bullet points):**
    - Documento real (Real Designer / Adobe)
    - CPT usado (ex: R$ 52)
    - CPA principal
    - Identificação de criativos vencedores
    - Estrutura de Creative Marketing
  - **Rodapé da seção (texto em vermelho):** Métricas visíveis: CPL R$ 40,03 | ROAS 11,29x | ROI 1.029%

### 3.3 CTA Principal (Call To Action)
- **Objetivo:** Conversão direta
- **Elemento:** Button Elementor Pro
- **Configuração:**
  - Texto: AGENDAR MINHA CONSULTORIA GRATUITA →
  - Cor de fundo: Vermelho forte
  - Texto branco
  - Borda totalmente arredondada (pill)
  - Hover: leve escurecimento
- **Ação do botão:** Link para Calendly, WhatsApp ou Popup com formulário Elementor Pro.

### 3.4 Microprovas abaixo do CTA
- **Objetivo:** Reduzir objeções
- **Layout:** 3 colunas (desktop) / empilhado (mobile)
- **Itens com ícone + texto:**
  - ⏱️ 90 minutos ao vivo (Zoom / Meet)
  - 💰 R$ 0,00 | Zero compromisso
  - ⚡ Resposta em até 24h

### 3.5 Seção de Dores (CAC / ROAS / ROI)
- **Objetivo:** Conectar com a dor real do lead
- **Layout:** 3 cards horizontais, fundo cinza escuro, bordas arredondadas
- **Cards:**
  - **Card 1 – CAC:** Título: CAC? | Texto: Você não sabe seu CAC real
  - **Card 2 – ROAS:** Título: ROAS? | Texto: Você não calcula retorno por canal
  - **Card 3 – ROI:** Título: ROI? | Texto: Você não mede resultado real
- **Destaques:** Ícones vermelhos, texto curto, direto, agressivo.

## 4. Responsividade
- **Desktop (≥1024px):** Layout em múltiplas colunas, Hero 100vh, cards lado a lado.
- **Tablet (641px – 1023px):** Redução de espaçamentos, cards em 2 colunas.
- **Mobile (≤640px):** Layout 100% vertical, botão CTA largura total, tipografia ajustada.

## 5. SEO & Performance
- H1 único na página
- Uso correto de H2 e H3
- Lazy load de imagens
- Compressão de imagens (WebP)
- PageSpeed > 85

## 6. Tracking e Conversão
- **Eventos obrigatórios:** ViewContent (Hero), Click CTA, Submit formulário / Calendly, Lead.
- **Ferramentas:** Meta Pixel, Google Tag Manager, GA4.

## 7. Checklist de Entrega
- [ ] Página criada no Elementor
- [ ] Responsividade validada
- [ ] CTA funcionando
- [ ] Formulário / Calendly integrado
- [ ] Pixel configurado
- [ ] SEO básico aplicado
- [ ] Performance otimizada
