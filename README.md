# Tarefas Inteligentes

Aplicação de gerenciamento de tarefas construída com React, TypeScript e Redux Toolkit para demonstrar uma arquitetura frontend moderna, tipada e modular.

## Visão geral

Tarefas Inteligentes é uma aplicação web para organizar atividades de forma simples: criar tarefas, acompanhar o status de conclusão, editar conteúdos, remover itens e filtrar a lista em tempo real.

O projeto existe como uma peça de portfólio focada em desenvolvimento frontend com gerenciamento de estado global, componentes reutilizáveis, persistência local e uma estrutura preparada para evolução incremental.

## Problema

Listas de tarefas são um ótimo contexto para demonstrar fluxos comuns de aplicações reais: entrada de dados pelo usuário, atualização de estado, renderização condicional, persistência no navegador e organização de regras de negócio em módulos independentes.

Este projeto concentra esses fluxos em uma interface objetiva, permitindo validar decisões técnicas importantes sem adicionar complexidade desnecessária ao produto.

## Solução

A aplicação oferece uma experiência direta para gerenciar tarefas no navegador. O estado principal é centralizado com Redux Toolkit, separado por domínios como tarefas, filtro e tema. A interface é composta por componentes reutilizáveis e estilizada com TailwindCSS.

As tarefas são persistidas localmente, permitindo que a lista continue disponível entre sessões no mesmo navegador. O Vite fornece um ambiente de desenvolvimento rápido e uma configuração enxuta para build de produção.

## Funcionalidades

- Cadastro de novas tarefas.
- Listagem de tarefas cadastradas.
- Marcação de tarefa como concluída ou pendente.
- Edição do nome de uma tarefa.
- Remoção de tarefas.
- Filtro textual em tempo real.
- Persistência das tarefas no `localStorage`.
- Alternância de tema controlada pelo estado global.
- Componentes reutilizáveis para botão, campo de entrada e card.

## Stack

- React
- TypeScript
- Redux Toolkit
- React Redux
- TailwindCSS
- Vite
- Vitest
- Testing Library
- ESLint

## Arquitetura

A estrutura do projeto organiza responsabilidades por camadas e domínios:

```txt
src/
├── components/          # Componentes reutilizáveis de interface
├── components/__tests__/# Testes de componentes
├── features/            # Slices Redux separados por domínio
│   ├── counter/
│   ├── filter/
│   ├── tasks/
│   └── theme/
├── middleware/          # Middlewares customizados do Redux
├── pages/               # Páginas da aplicação
├── utils/               # Funções utilitárias
├── App.tsx              # Composição principal da aplicação
├── main.tsx             # Ponto de entrada do React
└── store.ts             # Configuração central da store Redux
```

O gerenciamento de estado fica concentrado na store Redux, configurada com reducers por domínio e middlewares para observabilidade e persistência. A página principal consome esse estado por meio de hooks do React Redux e despacha ações tipadas definidas nos slices.

## Como rodar

Pré-requisitos:

- Node.js instalado.
- npm instalado.

Passo a passo:

```bash
git clone https://github.com/seu-usuario/redux-toolkit-tasks-demo.git
cd redux-toolkit-tasks-demo
npm install
npm run dev
```

Para gerar uma build de produção:

```bash
npm run build
```

Para executar a verificação de lint:

```bash
npm run lint
```

## Configuração

Este projeto não exige variáveis de ambiente para execução local.

A persistência das tarefas é feita no navegador por meio de `localStorage`, sem necessidade de credenciais, tokens ou serviços externos.

## Decisões técnicas

- **Redux Toolkit para estado global:** reduz boilerplate e mantém as regras de atualização de estado organizadas em slices.
- **Slices por domínio:** separa responsabilidades de tarefas, filtro, tema e contador, facilitando leitura e manutenção.
- **TypeScript:** adiciona tipagem estática aos componentes, ações, dispatch e estado global.
- **Middlewares customizados:** centralizam comportamentos transversais, como logs e persistência de tarefas.
- **Componentização da UI:** botões, inputs e cards foram isolados para favorecer reaproveitamento e consistência visual.
- **Vite como ferramenta de build:** oferece um fluxo de desenvolvimento rápido e simples para aplicações React modernas.
- **TailwindCSS:** permite estilização produtiva diretamente na camada de interface, mantendo o layout objetivo e responsivo.

## Status

O projeto está funcional como aplicação frontend de portfólio, com os principais fluxos de gerenciamento de tarefas implementados e organizados em uma base React moderna.

A versão atual prioriza clareza arquitetural, gerenciamento de estado, tipagem e experiência local no navegador.

## Roadmap

Evoluções planejadas com foco em produto e experiência de uso:

- Adicionar categorias ou etiquetas para organizar tarefas.
- Incluir ordenação por status, data de criação ou prioridade.
- Expandir a cobertura de testes automatizados.
- Adicionar feedback visual para ações do usuário.
- Criar uma experiência visual mais completa para temas claro e escuro.
- Preparar integração futura com uma API para sincronização entre dispositivos.

## O que este projeto demonstra

Este projeto evidencia competências importantes para desenvolvimento frontend profissional:

- Construção de aplicações React com TypeScript.
- Modelagem de estado global com Redux Toolkit.
- Criação de reducers, actions e slices por domínio.
- Uso de hooks do React Redux para leitura e atualização de estado.
- Organização modular de componentes e páginas.
- Implementação de persistência local no navegador.
- Separação de responsabilidades entre UI, estado, middlewares e utilitários.
- Configuração de ambiente moderno com Vite, ESLint e TailwindCSS.
- Escrita de código simples, legível e preparado para evolução.
