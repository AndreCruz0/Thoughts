# 🧠 Mini Projeto Full Stack - Autenticação + CRUD

![Status](https://img.shields.io/badge/status-concluído-success?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=flat-square)
![Express](https://img.shields.io/badge/Express.js-black?style=flat-square)

## 📚 Sobre o Projeto

Este é um mini projeto full stack desenvolvido para fins de **estudo prático**. Ele tem como foco o **treinamento de autenticação de usuários** e operações de **CRUD** completas, incluindo:

- ✅ Login e cadastro com sessões seguras (`req.session`)
- ✅ Criação, edição e exclusão de "pensamentos"
- ✅ Filtros por data (mais recentes ou mais antigos)
- ✅ Campo de busca para encontrar pensamentos específicos
- ✅ Relacionamento 1:N entre usuários e posts (usando banco de dados relacional)

> Desenvolver esse projeto do zero foi essencial para reforçar meus conhecimentos em **Node.js, Express, sessões de usuário, banco de dados relacional** e **organização de dados**. 🚀

---

## 🔧 Tecnologias Utilizadas

- **Back-end:**
  - Node.js
  - Express
  - Express-Session
  - Sequelize (ORM)
  - SQLite ou MySQL (dependendo da config)

- **Front-end:**
  - HTML + CSS
  - Handlebars (template engine)

---

## 🖼️ Screenshots

> 🧩 Abaixo, você pode inserir as capturas de tela das principais páginas do projeto:

### 🏠 Tela Inicial

<img src="/screenshots/home.png" alt="Home" width="700"/>

---

### 📋 Dashboard

<img src="/screenshots/dashboard.png" alt="Dashboard" width="700"/>

---

### 🔐 Tela de Login

<img src="/screenshots/login.png" alt="Login" width="700"/>

---

### 🧾 Tela de Registro

<img src="/screenshots/register.png" alt="Registro" width="700"/>

---

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Renomeie o arquivo `.env.example` para `.env`
   - Configure as variáveis de ambiente (porta, sessão, DB, etc.)

4. **Rode as migrations e inicie o projeto:**
   ```bash
   npm start
   ```

5. **Acesse o navegador:**
   ```
   http://localhost:3001
   ```

---

## 📁 Estrutura de Pastas

```bash
├── public/
├── views/
├── models/
├── controllers/
├── routes/
├── config/
├── .env
├── server.js
```

---

## 🧪 Funcionalidades

- Autenticação de usuários com sessões
- CRUD completo de pensamentos
- Busca por palavras-chave
- Filtros por data
- Relacionamento 1:N entre usuários e posts

---

## 📌 Observações

- Projeto desenvolvido exclusivamente para fins **educacionais**
- Estrutura modular e de fácil expansão
- Pode ser usado como base para projetos maiores

---

## 📜 Licença

Este projeto está sob licença **MIT**. Sinta-se à vontade para usar e modificar como quiser.

---

## 💬 Contato

Feito  por Andre  
📧 dev.andrecruz@gmail.com  
🔗 [LinkedIn]( https://www.linkedin.com/in/andre-cruz0/)