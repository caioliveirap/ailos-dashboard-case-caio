# Projeto para o Processo Seletivo da GFT

Este é um projeto para o processo seletivo da Empresa GFT. O projeto foi desenvolvido utilizando Angular 15.2.1 e Node v16.19.1. O objetivo do projeto é criar uma aplicação web que permite a gestão de tarefas de uma equipe.

## Instalação

- Rode o projeto utilizando `npm install`
- Execute utilizando `npm start`
- Acesse em [http://localhost:4200/](http://localhost:4200/)
- A URL do projeto pode ser acessada de qualquer icone na sidenav ou em [http://localhost:4200/cadastro/admissao-cooperado/nova-admissao-cooperado](http://localhost:4200/cadastro/admissao-cooperado/nova-admissao-cooperado)

## Descritivo do projeto

Há dois caminhos possíveis, o primeiro sendo de CPF válido, e outro de CPF inválido (tanto em formatação quanto CPF não encontrado na database). A fim de simular uma situação real de requisição, coloquei um timeout na função junto a um loading, além disso, há os seguintes dados de mockup:

```
Nome: Mariane de Sousa Oliveira,
CPF do Cooperado: 11122233344,
CPF regular: true,
Número da conta de aplicação: 557932-4,
Número da conta corrente: 778461-8,

Nome: Ana Luiza da Silva Santos
CPF do Cooperado: 44455566677
CPF regular: false
Número da conta de aplicação: 111222-3
Número da conta corrente: 444444-1

Nome: Pedro Henrique Alves Costa
CPF do Cooperado: 88899900011
CPF Regular: true
Número da conta de aplicação: 777888-2
Número da conta corrente: 222111-9

Nome: Gabriela Lima Santos
CPF do Cooperado: 33344455566
CPF Regular: true
Número da conta de aplicação: 123456-7
Número da conta corrente: 987654-3

Nome: Lucas Oliveira Rodrigues
CPF do Cooperado: 66677788899
CPF Regular: true
Número da conta de aplicação: 444555-6
Número da conta corrente: 333222-0

Nome: Isabela Fernandes Souza
CPF do Cooperado: 11122233344
CPF Regular: true
Número da conta de aplicação: 555444-3
Número da conta corrente: 666777-5
```

## Funcionalidades

- Sidenav responsiva
- Breadcrumbs responsivos de acordo com a URL.
- Sidenav da checklist funcional
- Busca por CPF, e feedback de erro de formatação e não encontrado
- Página de erro 404s
