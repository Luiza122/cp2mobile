# Aplicativo de Cadastro de Produtos

## Integrante

- Luiza Macena Dantas — RM 556237

## Descrição do Projeto

Este projeto consiste em um aplicativo mobile para cadastro de produtos. A aplicação permite informar o nome do produto, o preço e o código de barras, além de disponibilizar uma funcionalidade para leitura do código de barras.

O aplicativo possui uma tela inicial simples e objetiva, com mensagem de boas-vindas, formulário de cadastro, listagem dos produtos cadastrados e botão para sair.

## Funcionalidades

- Tela Home com mensagem de boas-vindas.
- Cadastro de produto com nome, preço e código de barras.
- Botão para leitura de código de barras.
- Exibição dos produtos cadastrados.
- Botão para sair do aplicativo.
- Interface visual personalizada com paleta rosa e fundo claro.

## Tecnologias Utilizadas

- React Native
- Expo
- Visual Studio Code
- Android Emulator

## Como Executar o Projeto

1. Abrir o projeto no Visual Studio Code.
2. Instalar as dependências:





## 1. Clonar o repositório

```bash
https://github.com/Luiza122/cp2mobile.git
```

## 2. Acessar a pasta

```bash
cd fiap-auth-app-luiza-macena
```

## 3. Instalar dependências

```bash
npm install
```

## 4. Rodar o projeto

```bash
npx expo start
```

---

#  Instalação manual (caso necessário)

Se precisar recriar o projeto do zero:

```bash
npx create-expo-app fiap-auth-app-luiza-macena --template blank@54
```

Instalar navegação:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens@4.16.0 --save-exact
npx expo install react-native-safe-area-context
```

---

# Estrutura do projeto

```text
src/
  components/
  navigation/
    AppNavigator.js
  screens/
    LoginScreen.js
    RegisterScreen.js
    ForgotPasswordScreen.js
    HomeScreen.js
```

---

# Fluxo de navegação

* Login → Home
* Login → Cadastro
* Login → Esqueci minha senha
* Cadastro → Voltar
* Esqueci senha → Voltar
* Home → Login

---

# Telas do app

* Login
* Cadastro
* Recuperação de senha
* Home

---

# Conceitos abordados

* `View`, `Text`, `TextInput`, `Button`
* `TouchableOpacity`
* `StyleSheet`
* Navegação com Stack
* Props e navegação (`navigation.navigate`)
* Organização de projeto
* Componentização básica

---

#  Problemas comuns

## Erro: "expected dynamic type 'boolean', but had type 'string'"

Solução aplicada:

* Fixar versão:

```bash
npm install react-native-screens@4.16.0 --save-exact
```

---

#  Próximos passos

* Melhorar layout (UI/UX)
* Criar componentes reutilizáveis
* Adicionar validação de formulário
* Integrar com Firebase (login real)
* Persistência de usuário

---

#  Observação final

Este projeto tem fins educacionais e foi construído passo a passo em aula para facilitar o aprendizado dos alunos.

---

#  Aluna

Projeto adaptado por **Luiza Macena Dantas — RM556237**.

Este repositório deriva do exemplo de aula da FIAP e mantém o mesmo objetivo educativo, mas foi personalizado para a aluna indicada.

---
