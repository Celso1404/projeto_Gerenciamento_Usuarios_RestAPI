# 🌐 Painel Administrativo MVC - Cliente / Servidor

Esta é a aplicação cliente (Frontend) de um sistema completo de gestão de utilizadores. O projeto utiliza o Node.js e o Express para servir uma interface construída com o template AdminLTE. O grande diferencial desta aplicação é a sua arquitetura: o Frontend não comunica diretamente com a base de dados, mas sim com o servidor Node.js intermediário, que por sua vez utiliza a biblioteca `restify-clients` para consumir uma API RESTful externa.

## ✨ Funcionalidades

* **Arquitetura Proxy:** O frontend faz requisições (AJAX) para o próprio servidor Express (`/users`), que atua como um intermediário seguro, redirecionando as chamadas para a verdadeira API RESTful no backend.
* **Renderização com EJS:** As views (`index.ejs` e `error.ejs`) são processadas no servidor para facilitar a injeção de dados e manter o HTML organizado.
* **Classes de Requisição HTTP (OOP):** O projeto abstrai chamadas AJAX através de duas abordagens orientadas a objetos, permitindo trocar facilmente a tecnologia subjacente:
  * `HttpRequest.js`: Utiliza o clássico `XMLHttpRequest` encapsulado em Promises.
  * `Fetch.js`: Utiliza a moderna `Fetch API` padrão do navegador.
* **CRUD Completo e Assíncrono:** Criação, leitura, atualização e exclusão de utilizadores executadas dinamicamente na página, sem necessidade de *reloads* (Single Page Application via Vanilla JS).
* **Upload Base64:** Conversão das imagens de perfil para formato `Data URL` antes do envio, facilitando o transporte através das requisições JSON.

## 🛠️ Tecnologias e Dependências

**Backend (Servidor Intermediário):**
* **Node.js (v18+):** Ambiente de execução.
* **Express (v5.2.1):** Framework web para criação das rotas e servidor.
* **NeDB:** Base de dados NoSQL orientada a documentos (embutida localmente).
* **Consign:** Ferramenta para autoload de módulos (rotas, utilitários, etc.) para a aplicação Express.
* **Express Validator:** Middleware para validação das requisições HTTP.
* **Cors:** Middleware para habilitar requisições Cross-Origin.
* **Nodemon:** Utilitário para reiniciar o servidor automaticamente durante o ambiente de desenvolvimento.
* **EJS** (View Engine)
* **Restify Clients** (Cliente HTTP para comunicar com a API principal)
* **Morgan** (Logger de desenvolvimento)
* **Cookie-parser & Body-parser** (Middlewares para parsear requisições)

**Frontend:**
* **JavaScript Vanilla (ES6+)** (Classes, Promises, Fetch API, Arrow Functions)
* **HTML5 & CSS3**
* **Bootstrap & AdminLTE** (Frameworks visuais de interface)

## 📁 Estrutura do Projeto

```text
/
├── app.js                       # Configurações do Express, middlewares e view engine
├── package.json                 # Dependências do projeto (nome: client-server)
├── bin/
│   └── www                      # Script de inicialização do servidor (npm start)
├── routes/
│   ├── index.js                 # Rota principal para a view EJS
│   └── users.js                 # Rotas proxy usando restify-client para localhost:4000
├── views/
│   ├── index.ejs                # Dashboard principal (HTML base)
│   └── error.ejs                # Template para exibição de erros (stack trace)
└── public/
    ├── classes/
    │   ├── HttpRequest.js       # Utilitário de AJAX com XMLHttpRequest + Promises
    │   ├── Fetch.js             # Utilitário de AJAX com a Fetch API + Promises
    │   └── Utils.js             # Métodos estáticos (ex: formatação de datas)
    ├── models/
    │   └── User.js              # Modelo com atributos, parser de JSON e métodos save/remove
    ├── controllers/
    │   └── UserController.js    # Controlador para manipulação do DOM e eventos
    └── script.js                # Arquivo que instancia o UserController