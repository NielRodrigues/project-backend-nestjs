# Desafio do desenvolvedor backend

## Descrição do projeto

Esta é uma API desenvolvida em NodeJS com NestJS. Essa aplicação simples para criar e autenticar um usuário e criação de .



## Desenvolvimento

Para o desenvolvimento desse projeto foi utilizado algumas bibliotecas e frameworks para um melhor desenvolvimento, listei algumas delas abaixo

- **nest**: NestJS é uma framework para realizar protocólos HTTP.
- **prisma**: Nesse projeto foi utilizado o ORM Prisma para a integração com o Banco de Dados (PotgreSQL).
- **bcrypt**: O bcrypt é uma biblioteca do javascript para fazer a criptografia de dados. Nesse projeto ela foi utilizada para criptografar a senha do usuário.

Para esse projeto, também foi utilizada uma arquitetura de código limpa, com pastas e estruturas organizadas para melhor desenvolvimento. 



## Instruções para instalação

Para usar a aplicação, primeiramente deve criar um novo banco de dados no PGAdmin do PostgreSQL com o nome _places_

```
CREATE DATABSE places
```


Depois você precisa realizar as migrations para o banco de dados com o sequelize, para isso vá na raiz do projeto e use o comando:

```
yarn prisma migrate dev
```
ou
```
npx prisma migrate dev
```


Agora para rodar a aplicação utilize 
```
yarn start
```
ou
```
npm run start
```


## Como usar

1. Para se criar um usuário, deve-se usar o método _POST_ em algumas das rotas de registro e passar os seguintes parâmetros no body via JSON.
  - _name_: _string_
  - _email_: _string_
  - _password_hash_: _string_

A senha do usuário será criptografada pelo _bcrypt_

<img src="/assets/images/1.png">


2. Para criar um novo lugar, você deve acessar a rota _/places_ via _POST_ e passar os seguintes parâmetros:
  - _name_: _string_
  - _city_: _string_
  - _state_: _string_

<img src="/assets/images/2.png">

Você poderá alterar, visulizar ou deletar os lugares pelas rotas _PUT_, _GET_ (passando o id) e _DELETE_ respectivamente

<img src="/assets/images/6.png">


3. Para verificar lugares específicos, deve acessar a rota de lugares (PLACES) e fornecer o ID do local. _/places/:id_.

<img src="/assets/images/3.png">

4. Você também pode filtrar os lugares por nome, cidade ou estado. Basta passar a QUERY na url: _?name=_, _?city=_ ou _?state=_

<img src="/assets/images/4.png">

<img src="/assets/images/5.png">

