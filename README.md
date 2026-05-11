# **💧Hidra Face - Sistema de Gestão para Clínica de Estética**

Bem-vindo ao repositório oficial do sistema **Hidra Face** – uma plataforma web completa para gerenciamento de clínicas de estética, desenvolvida para otimizar o atendimento ao cliente, controle financeiro, estoque, agendamentos e gestão de profissionais.

---

## **🎯 Sobre o Projeto**

O **Hidra Face** nasceu da necessidade de uma solução simples, intuitiva e acessível para clínicas de estética que desejam organizar seus processos internos sem depender de sistemas caros ou complexos. Com telas desenvolvidas a partir de protótipos no Figma, o sistema oferece uma experiência fluida tanto para administradores quanto para profissionais da área.

---

## **🚀 Funcionalidades Principais**

| **Módulo** | **Funcionalidades** |
| --- | --- |
| 🔐 **Login / Cadastro** | Autenticação de usuários, cadastro com e-mail, senha e foto de perfil |
| 📊 **Dashboard** | Visão geral com indicadores: total de clientes, agendamentos do dia, serviços realizados e receita do mês |
| 👥 **Clientes** | Cadastro completo, histórico de atendimentos, anamnese e fotos de antes/depois |
| 📅 **Agendamentos** | Agenda com escolha de data, horário, serviço, cliente e observações |
| 💰 **Financeiro** | Relatórios financeiros, fluxo de caixa, formas de pagamento e emissão de recibos |
| 🛍️ **Serviços** | Cadastro de serviços com preço, tempo de duração e profissional responsável |
| 👩‍⚕️ **Profissionais** | Perfil de cada profissional com especialidades, agenda, contato e formação |
| 📦 **Estoque** | Controle de produtos (entrada, saída), alertas de estoque baixo e categorias |
| 📈 **Relatórios** | Acesso a relatórios gerenciais |
| 🧾 **Vendas** | Registro de vendas de produtos ou serviços avulsos |

---

## **🛠️ Tecnologias Utilizadas**

| **Categoria** | **Tecnologia** |
| --- | --- |
| **Editor de Código** | VS Code |
| **Versionamento** | Git e GitHub |
| **Prototipagem** | Figma |
| **Ícones** | Flaticon |
| **Estrutura do Site** | HTML5 |
| **Estilização** | CSS3 (Flexbox, Grid, Media Queries para responsividade) |
| **Interatividade** | JavaScript (Vanilla JS) |
| **Controle de versão** | Git Flow básico |

> ℹ️ **Observação:** O projeto foi desenvolvido com foco em **HTML5, CSS e JavaScript puro**, sem frameworks front-end, pois ainda não estamos focando nessa parte do projeto.
> 

---

## **📱 Responsividade**

O sistema foi totalmente desenvolvido pensando em **diferentes dispositivos**, utilizando **Media Queries** no CSS para adaptar as telas:

| **Dispositivo** | **Largura** | **Comportamento** |
| --- | --- | --- |
| 💻 **Desktop** | ≥ 1024px | Menu lateral fixo, conteúdo expansivo |
| 📟 **Tablet** | 768px – 1023px | Menu hambúrguer, cards se reorganizam |
| 📱 **Smartphone** | ≤ 767px | Menu hambúrguer, blocos empilhados verticalmente |

### **Exemplos de adaptação nas telas do sistema:**

- **Dashboard:** Cards de métricas se reorganizam em coluna única no mobile
- **Agendamentos:** Formulário em tela cheia com campos empilhados
- **Estoque:** Tabela se transforma em cards para dispositivos menores
- **Profissionais:** Perfil com informações e especialidades em blocos verticais

---

## **🗂️ Estrutura de Pastas do Projeto**

```
hidra-face/
│
├── assets/
│   └── imagens/              # Todas as imagens do sistema
│       ├── logo.png
│       ├── avatar-padrao.png
│       ├── foto-perfil/
│       ├── antes-depois/
│     
│
│── style.css             # Estilos importados (@import)
│ 
├── css/                # CSS específico de cada página
│   │   ├── login.css
│   │   ├── cadastro.css
│   │   ├── dashboard.css
│   │   ├── clientes.css
│   │   ├── agendamentos.css
│   │   ├── servicos.css
│   │   ├── financeiro.css
│   │   ├── profissionais.css
│   │   ├── estoque.css
│   │   ├── global.css
│   │   ├── vendas.css
│   │   └── relatorios.css
│   │
│        # Responsividade separada por página
│       ├── login-responsive.css
│       ├── cadastro-responsive.css
│       ├── dashboard-responsive.css
│       ├── clientes-responsive.css
│       ├── agendamentos-responsive.css
│       ├── servicos-responsive.css
│       ├── financeiro-responsive.css
│       ├── profissionais-responsive.css
│       ├── estoque-responsive.css
│       ├── vendas-responsive.css
│       └── relatorios-responsive.css
│
├── js/
│   ├──layout.js              # Funções auxiliares (menu hamburguer)
│
├ # Arquivos HTML de cada tela
│   ├── login.html
│   ├── cadastro.html
│   ├── dashboard.html
│   ├── clientes.html
│   ├── agendamentos.html
│   ├── servicos.html
│   ├── financeiro.html
│   ├── profissionais.html
│   ├── estoque.html
│   ├── vendas.html
│   ├──relatorios.html
│   └── index.html                        # Página inicial
│                
├── README.md                             #README
```

### **📌 Detalhamento da Estrutura:**

| **Pasta** | **Finalidade** |
| --- | --- |
| **assets/imagens/** | Armazena todas as imagens do sistema (logos, fotos de perfil,etc.) |
| **css/style.css** | Estilos globais que foram importados da pagina css/ |
| **css/** | Arquivos CSS específicos para a estilização única de cada página |
| **css/** | Arquivos separados de media queries para cada página, garantindo responsividade individual |
| **js/** | Scripts JavaScript separados por página, mais um arquivo `utils.js` com funções reutilizáveis |
| .html | Todos os arquivos HTML  |

---

## **🎨 Prototipagem no Figma**

Todo o layout do sistema foi previamente desenhado no **Figma**, garantindo que a experiência do usuário fosse pensada antes mesmo da codificação. As telas foram validadas com os stakeholders e serviram como guia fiel para o desenvolvimento em HTML/CSS/JS.

https://www.figma.com/design/4npG7IZV9NBkMqkGyUxomY/Clinica-estetica?node-id=0-1&t=x9rcDHE0J46PJpnm-1

---

## **🔧 Como Executar o Projeto Localmente**

1. **Clone o repositório:**
    
    ```bash
    git clone https://github.com/seu-usuario/hidra-face.git
    ```
    
2. **Acesse a pasta do projeto:**
    
    ```bash
    cd hidra-face
    ```
    
3. **Abra com o VS Code:**
    
    ```bash
    code .
    ```
    
4. **Execute com Live Server** (extensão do VS Code) ou abra o arquivo `index.html` diretamente no navegador.

---

## **📌 Status do Projeto**

✅ **Concluído** – versão 1.0 entregue com base nos protótipos do Figma.

---

## **👥 Autores**

Desenvolvido com 💙 pela equipe **Hidra Face**.
