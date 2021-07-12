# FichaDELAS

## Projeto Final {reprograma} - BackEnd

# **PROBLEMA**

### Qual o problema que eu quero resolver?

O Fichamento é uma das fases da Pesquisa Bibliográfica, seu objetivo é facilitar o desenvolvimento das atividades acadêmicas e profissionais. Porém ele também é muito utilizado por pessoas que gostam muito de ler e guardar as principais ideias dos textos, seja para consultar depois, para usar em um roteiro de um vídeo, para utilizar em uma plano de aula, para escrever em um blog ou jornal etc. 

Existem muitos sistemas que auxiliam a desenvolver cada fase de um projeto acadêmico. A questão é tais sistemas são sempre focados em usuários que desejam criar projetos mais robustos e a maioria que diz ter o serviço grátis acaba forçando o usuário a mudar para o plano pago para ter acesso a algumas funcionalidades ou por conta do volume de dados.  

A ideia aqui é simplificar os processos de fichamento para pessoas que precisam fazer o registro de suas leituras, oferecendo ao usuário um sistema simples, exclusivamente para fichamentos. O sistema deverá ser simples, porém com todos os recursos necessários para o cadastros dos fichamentos. De que serve uma calculadora cientifica se eu só quero somar 2 + 2? 

### Número que comprovem que o seu problema

Eu não tenho um número exato, em minha pesquisa percebi que existe um número considerável de sistemas de apoio a construção das fases de um projeto, apenas um dos que eu encontrei foca exclusivamente no fichamento. 

### Quem sofre com esse problema? (gênero, classe social, renda, cor)

Jornalistas, blogueiras, professoras e qualquer pessoa que queira fazer um fichamento simples e precise organizar seus textos para utiliza-los posteriormente para embasar os seus textos, vídeos, roteiros, aulas etc. 

### Como eles estão resolvendo o seu problema hoje?

Existem sistemas de gerenciamento de textos acadêmicos que auxiliam na construção e organização de pré-projetos e projetos.  

### Como posso resolver isso com tech?

Criar uma API publica que ajude os usuários a cadastrar e organizar seus fichamentos. Ao invés de ter tudo num arquivão do Word, ou em papéis espalhados, você vai escrever e organizar tudo em um sistema onde será possível pesquisar facilmente depois sem precisar ler um a um até encontrar o que você procura. 

### Qual o mínimo que posso entregar? (MVP - mínimo produto viável)

Inicialmente, nesta versão, foi entregue a funcionalidade de cadastrar um fichamento com todas as informações necessárias para um fichamento, bem como, listar, atualizar, apagar e deletar. 

### O que tem disponível gratuitamente online para o desenvolvimento?

[Minhas Citações](http://www.minhascitacoes.com.br/login.php)

# **SOLUÇÃO**

### Defina em uma frase sua solução

A FichaDELAS é uma API para cadastro e organização de organização de fichas de leituras de forma rápida e que possibilita que as fichas sejam mais encontradas facilmente independente da quantidade de fichas.  

### Qual a diferença entre a minha solução e o que já existe?

Esta API tem o objetivo de ser simples de usar, gratuita e acessível para qualquer pessoa. Além disso ela é focada apenas no fichamento, diferente dos sistemas que já existem que costumam ser mais complexos   

### A minha solução é melhor do que a que já existe?

Os sistemas de fichamentos são voltados para pessoas acadêmicas que estão escrevendo algum documento cientifico e por isso em geral eles trazem uma complexidade e um volume de informações que não interessa as pessoas que desejam fazer um fichamento simples.   

## Features

- Cadastrar uma ficha
    - Cadastrar uma ficha através de fichaId

- Atualizar uma ficha
    - Atualizar uma ficha através de fichaId

- Pesquisa todas as fichas
    - Pesquisar uma ficha através de fichaId

- Deletar uma ficha
    - Remover/Apagar uma ficha através de fichaId

[BackEnd Requirements](FichaDELAS%2081bcdd93ae5c44b9b7e6fc44f6c0eeb8/BackEnd%20Requirements%2082bf6a1fe215482cabed64e09d410b06.csv)

## Mínimo técnico

- [ ]  CRUD
- [ ]  MONGO - tipos de banco de dados que requer menos infraestrutura...

### Instalação

Essa API foi desenvolvida em Node.js, com utilização do banco de dados MongoDB.

1. Clonar o projeto
    - npm install
    - npm install -D nodemon
    - npm install mongoose
2. Abrir a pasta pelo prompt de comando
3. Instalar as dependências e bibliotecas
    - nodemon server.js

## **Implementações futuras**

- Poder exportar em PDF, Microsoft Word e Excel
- Formatação nas normas da ABNT de forma completamente automática
- Exportação de referências para ABNT
- Identificar registros duplicados
- Criação de um ambiente colaborativo onde as pessoas compartilham seus fichamentos por tema