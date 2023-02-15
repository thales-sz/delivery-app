# Projeto App Delivery!

O `App Delivery` é uma plataforma de delivery de cerveja! <br/>

<br/>

## Descricao do Projeto

Projeto final do Modulo de Backend.

Nessa aplicação, o objetivo é criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 

O projeto não é só codar, mas também é trabalhar em equipe, aprender e se divertir muito! 

### Contexto para criação da aplicação:

A distribuidora de cervejas da dona Tereza está se informatizando! 
Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a sua equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. 

A ideia da sua equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

<br/>

## Desenvolvimento

### Deverá ter os seguintes fluxos:

- **Fluxo Comum** que compreende: 
  - (1) Tela de Login; 
  - (2) Tela de Registro.

- **Fluxo do Cliente** que compreende: : 
  - (3) Tela de Produtos; 
  - (4) Tela de Checkout; 
  - (5) Tela de Pedidos; 
  - (6) Tela de Detalhes do Pedido.

- **Fluxo da Pessoa Vendedora** que compreende: 
  - (7) Tela de Pedidos; 
  - (8) Tela de Detalhes/Controle do Pedido.

- **Validação do Status do Pedido** que compreende: 
  - (9) Teste de status; 

- **Fluxo da Pessoa Administradora** que compreende: 
  - (10) Tela de gerenciamento de usuários.

### A plataforma precisa:

- Acesso via login para clientes, pessoas vendedoras e administrador do sistema:
  - (1) A pessoa cliente, que compra da lista de produtos;
  - (2) A pessoa vendedora, que aprova, prepara e entrega;
  - (3) A pessoa administradora, que gerencia quem usa o aplicativo.

- Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos.

- Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega.

### Faz-se necessário:

- Integrar front-end e back-end.

- Construir banco de dados MySQL, através do Sequelize, bem como associar as tabelas quando for conveniente.

- Construir as páginas e componentes no front-end.

- Gerar _token_ para autenticação dos usuários;

- O back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

<br/>

## Habilidades desenvolvidas

- A criação de `components` e `pages` usando React, Hooks e Context.
- A estilização do front-end com CSS.
- A modelagem do banco de dados com MySQL através do Sequelize;
- A criação e associação de tabelas;
- A construção de uma API REST;
- A construção de um CRUD, utilizando ORM Sequelize;
- Uso de Metodologias ágeis: Kanban;
- SoftSkills:
  - Colaboração;
  - Liderança;
  - Resolução de problemas e conflitos;
  - Comunicação;
  - Gerenciamento do Tempo;
  - Auto-liderança.

<br/>

## Tecnologias utilizadas

- Node.js;
- Sequelize;
- Mysql;
- JsonWebToken;
- Criptografia com md5;
- Nodemon;
- Eslint;
- Tailwind;
- React: Hooks, Alert e Context API;
- Axios;
- Trello;
- Slack;
- Discord;
- Zoom.

<br/>

## Colaboradores

Desenvolvido em grupo por:

Thales Chagas <br/>
Luiz Gabriel <br/>
Aiezer Santos <br/>
Fernanda Grein <br/>
Tiago Eberhardt <br/>


<br/>

