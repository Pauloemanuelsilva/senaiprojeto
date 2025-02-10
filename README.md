# Manual de utilização do sistema/site.
## Passo 1: Verificando se o Git já está instalado

### 1.1: Abrir o terminal (ou prompt de comando)

<p>No Windows: Use o Git Bash ou o Prompt de Comando (cmd).</p>

### 1.2: Verificar se o Git está instalado

```
git --version
```
### O que isso faz:
<p>Esse comando verifica se o Git está instalado no computador e exibe a versão do Git instalada. Se o Git não estiver instalado, o terminal informará um erro.</p>

### Resultado esperado:
<p>git version 2.xxx</p>

## Passo 2: Caso o camando de erro basta Instalar o Git.
<p>Se o comando anterior não mostrou a versão do Git, significa que ele não está instalado no seu computador. Vou te mostrar como instalar.</p>

### 2.1: Instalando o Git no Windows.
<p>Acesse o site oficial: Git Downloads.</p>

<p>Baixe o instalador para Windows.</p>

<p>Durante a instalação, marque as opções padrão recomendadas (incluindo a opção de adicionar o Git ao PATH). Isso facilita o uso do Git no terminal.</p>

<p>Após a instalação, reinicie o terminal ou prompt de comando e digite git --version novamente para verificar se foi instalado corretamente.</p>

## Passo 3: Criando uma Conta no GitHub

<p>Antes de começar a usar o Git com repositórios remotos, é necessário ter uma conta no GitHub, um dos serviços mais populares para hospedar repositórios Git.</p>.

### 3.1: Criando uma conta no GitHub.

<p>1. Acesse o site GitHub.</p>

<p>2. Clique em Sign up no canto superior direito.</p>
<p align="center">
    <a>
    <img src="/content/images/Branch 5.png" width="800">
    </a>
</p>

<p>3 .Preencha as informações solicitadas</p>
<p align="center">
    <a>
    <img src="/content/images/Branch 5.png" width="800">
    </a>
</p>

- Username: Escolha um nome de usuário único. 
- Email: Insira seu e-mail (pode ser o mesmo que você usa para configurar o Git). 
- Password: Crie uma senha forte. 

<p>4. Depois, confirme o e-mail no link que será enviado para sua caixa de entrada. </p>
<p>5. Complete a configuração básica, incluindo algumas verificações de segurança. </p>

<p>Agora, você tem uma conta no GitHub! Vamos para a próxima etapa. </p>

## Passo 4: Configurando o Git (Nome e E-mail).
<p>Agora, vamos configurar o Git com seu nome e e-mail para que suas alterações sejam registradas corretamente.</p>

<p>Agora, volte para o terminal e digite os seguintes comandos, substituindo as informações pelo seu nome e e-mail:</p>

### 4.1: Configurar seu nome e e-mail no Git.
<p align="center">
    <a>
    <img src="/content/images/Branch 5.png" width="800">
    </a>
</p>

```
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"

```

### O que isso faz:

- O primeiro comando configura seu nome de usuário no Git. 
- O segundo comando configura o e-mail no Git, que será associado aos commits que você fizer.

### 4.2: Verificar as configurações feitas.
<p>Agora, vá para o terminal novamente e execute o comando abaixo para verificar se as configurações foram feitas corretamente:</p>

```
git config --list

```

### O que isso faz:
<p>Esse comando exibe todas as configurações do Git, como o nome de usuário e o e-mail que você acabou de configurar.</p>

### Passo 5: Instalando o (vs code)
<p>Agora vamos instalr o VS CODE, que um editor de codigo  poderoso que tem suporte nativo para o GIT.</p>

<p> Agora vamos instalar o (VS Code), que é um editor de código poderoso que tem suporte nativo para o Git.</p>

#### **5.1: Instalando o VS Code**

1. Acesse o site do **Visual Studio Code**: [Visual Studio Code](https://code.visualstudio.com/).
<p align="center">
    <a>
    <img src="/content/images/Branch 5.png" width="800">
    </a>
</p>

2. Baixe o instalador para **Windows**.
3. Execute o instalador e siga as instruções. Durante o processo de instalação, marque a opção para **adicionar o VS Code ao PATH**. Isso facilita a abertura do VS Code diretamente do terminal.
4. Após a instalação, você pode abrir o **VS Code** através do menu Iniciar ou digitando `code` no terminal.

---

## **Passo 6: Usando o Git no VS Code**

Agora que o **Git** está instalado e configurado, vamos integrar o Git ao **VS Code** e aprender como usá-lo para versionar o código.

#### **6.1: Abrindo o terminal no VS Code**

**Agora, vá para o VS Code**. Abra o VS Code e, em seguida, abra o terminal integrado pressionando ``Ctrl + ` `` ou vá até o menu **Terminal > New Terminal**.
<p align="center">
    <a>
    <img src="/content/images/Branch 5.png" width="800">
    </a>
</p>

#### **6.2: Inicializando um repositório Git**

1. Crie uma nova pasta para o seu projeto ou abra uma pasta existente no VS Code.
2. **No terminal do VS Code**, inicialize um repositório Git com o seguinte comando:

```
git init
```

**O que isso faz:**  
Esse comando cria um novo repositório Git na pasta onde você está trabalhando. Agora, o Git irá controlar as versões dos arquivos dessa pasta.

---

## **Passo 7: Comandos Básicos do Git**

Agora que você tem um repositório Git, vamos aprender a fazer operações básicas com o Git, como adicionar arquivos e comitar mudanças.

#### **7.1: Adicionando arquivos ao repositório**

1. **Crie um arquivo**. No VS Code, crie um arquivo de exemplo como `README.md`.
2. **Adicionar o arquivo ao Git**:

**Agora, volte para o terminal do VS Code** e execute o seguinte comando:

```bash
git add README.md
```

**O que isso faz:**  
O comando `git add` adiciona o arquivo `README.md` ao **staging area**, ou seja, prepara o arquivo para ser comitado.

#### **7.2: Comitando as alterações**

Agora, vamos salvar as alterações no repositório com o commit.

**No terminal do VS Code**, digite o comando:

```bash
git commit -m "Adicionando o README inicial"
```

**O que isso faz:**  
O comando `git commit` registra as alterações no repositório. A opção `-m` permite adicionar uma mensagem que descreve o que foi feito (no caso, "Adicionando o README inicial").

#### **7.3: Verificando o status do repositório**

Para verificar o status do repositório e ver se há alterações pendentes, execute:

**Agora, vá para o terminal do VS Code** e execute:

```bash
git status
```

**O que isso faz:**  
Mostra o status atual do repositório, indicando arquivos que foram modificados ou adicionados ao Git, e se estão prontos para o commit.

---

## **Passo 8: Enviando para um Repositório Remoto (GitHub)**

Agora que você tem um repositório local, vamos enviar os arquivos para o **GitHub**.

#### **8.1: Criando um Repositório no GitHub**

1. **Agora, vá para o GitHub**. Acesse [GitHub](https://github.com) e faça login com a sua conta.
2. Clique em **New Repository** (Novo Repositório).
3. Escolha um nome para o repositório (não marque a opção de adicionar arquivos iniciais, como README ou .gitignore).
4. Crie o repositório.

#### **8.2: Conectando o repositório local ao GitHub**

**Agora, volte para o terminal do VS Code** e adicione o repositório remoto do GitHub com o seguinte comando. Substitua a URL abaixo pela URL do seu repositório GitHub:

```bash
git remote add origin https://github.com/seunome/nomedorepositorio.git
```

#### **8.3: Enviando as alterações para o GitHub**

**No terminal do VS Code**, envie os arquivos para o GitHub com o comando:

```bash
git push -u origin master
```

**O que isso faz:**  
- O primeiro comando adiciona o repositório remoto com o nome `origin`.
- O segundo comando envia os commits locais para o repositório remoto no GitHub.

---

## Passo 9: Usando o Git com o VS Code (Interface Gráfica)

O **VS Code** tem uma interface gráfica muito útil para trabalhar com o Git, sem precisar digitar comandos no terminal.

1. **Agora, vá para o VS Code** e clique no ícone de **controle de versão** (ícone de ramificação) na barra lateral esquerda.
2. Você verá uma lista de alterações feitas no seu repositório. A partir daí, você pode adicionar, comitar e até enviar as alterações para o GitHub usando os botões na interface gráfica do VS Code.

---

### Resumo dos Comandos Usados:

- **Verificar a versão do Git:**
  ```
  git --version
  ```

- **Configuração do nome e e-mail no Git:**
  ```        
  git config --global user.name "Seu Nome"
  git config --global user.email "seuemail@exemplo.com"
  ```

- **Verificar as configurações do Git:**
  ```
  git config --list
  ```

- **Inicializar um repositório Git:**
  ```
  git init
  ```

- **Adicionar um arquivo ao repositório:**
  ```
  git add nome_do_arquivo
  ```

- **Comitar as alterações:**
  ```
  git commit -m "Mensagem do commit"
  ```

- **Verificar o status do repositório:**
  ```bash
  git status
  ```

- **Adicionar repositório remoto e enviar para o GitHub:**
  ```
  git remote add origin https://github.com/seunome/nomedorepositorio.git
  git push -u origin master

  ```

### Conclusão

<p>Agora você tem o Git configurado no Windows, uma conta no GitHub, e integrou o Git ao VS Code! Você aprendeu a criar repositórios locais e remotos, a fazer commits, a enviar alterações para o GitHub e a usar a interface gráfica do VS Code para controlar o versionamento de código.</p>



