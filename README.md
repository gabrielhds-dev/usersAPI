# USERS API
API REST para gerenciamento de usuários.

## Objetivo da API
API feita para cadastrar nome, email e senha de usuários com capacidade de se conectar com banco de dados postegreSQL, realizar opeações básicas HTTP como get, post, put e delete.
sistema construído utilizando arquitetura em camadas, divididas em categorias como repositories, services, controllers e routes. 

## Tecnologias
- Node.js
- Express
- Prisma
- PostgreSQL
- Render

## Funcionalidades
- Criar usuário
- Listar usuários
- Buscar usuário por ID
- Atualizar usuário
- Deletar usuário

<img width="780" height="463" alt="image" src="https://github.com/user-attachments/assets/41d2c18d-1aad-4985-9421-d325a7666dfa" />

## EndPoints Utilizados
- POST   /users
- GET    /users
- GET    /users/:id
- PUT    /users/:id
- DELETE /users/:id

## Deploy

o deploy da api foi feito utilizando o serviço de numvem (Render) https://render.com/

URL da api criada: https://usersapi-a0aq.onrender.com/users

buildCommand: npm install && npm run prisma:generate && npm run prisma:deploy

StartCommand: npm run server:init

variaveis de ambiente: DATABASE_URL="" E PORT=3000


