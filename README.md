# Manual de utilização do sistema/site.
## CAPITULO 1 - configuração do git no computador.
### Instalação do GIT.
 ### Comandos para navegar áte àrea o seu PROJETO.
<p align="justify">
Ralize a busca no navegador para a realização [Instalar GIT](ttps://git-scm.com/book/pt-pt/v2/Come%C3%A7ando-Instalar-o-Git)</p>
<p align="center"> <a href ="https://git-scm.com/book/pt-pt/v2/Come%C3%A7ando-Instalar-o-Git" target ="black">
   <img src="docs/imagen/Captura de tela.png" width= "400">
   </a>
</p>
   `git --version` ### Comandos para navegar áte àrea o seu PROJETO.

   ### Comandos para navegar áte àrea o seu PROJETO.
   ```
   cd documents // Caso o arquivo esteja da pasta esteja oculto, pasta digita o mesmo codigo adcionado espaço e um ponto final ex: "cd documents ."
   cd workspace// o mesmo nesse caso ex: "cd workspace"
   cd projeto // O nome do Projeto e de sua escolha
   cd css
   
   ```

### CRIE UMA CONTA no GITHUB.
<p>Depois de criar uma conta vc precisa conecta ela ao projeto seguindo os comandos abaixo atraveis do terminal do seu computador</p>

### Comandos para configura o git.
    ```
    git config --global user.name "Digite seu nome"
    git config --global user.email "Digite seu email"
    ```
 <p>logo depois disso e nescessaio cria uma chave atraves do comando abaixo, so que antes disso e necessario navegar ate o ssh</p>

### Codigo para gerar a chave
   ```
   cd ssh
   ssh-keygem
   ls
   cat
   ```
<p>Depois disso e necessario entra no GITHUB para conecta a chave ao repositorio atraves das ilustrações abaixo</p>

 ### Entre em usuario e click em configurações

<p align="center"> 
   <img src="docs/imagen/tela1.png" width= "400">
</p>

### Depois disso click ssh gps

<p align="center"> 
   <img src="docs/imagen/tela2.png" width= "400">
   
### Agora use a chave

</p>
<p align="center"> 
   <img src="docs/imagen/tela3.png" width= "400">
   </a>
</p>
<p>Dê um nome para o repositório (pode ser público ou privado, conforme preferir).</p>

### CODIGO para verificar se as informações estão corretas
  ```
  git config list
  ```
  <p>Depois de veificar os comandos use o codigo abaixo para se conetar ao VSCODE /OBS: VSCODE e apenas uma ferramenta</p>

  ### CODIGO para se conetar ao VSCODE
  ```
  code .
  ```

## Capitulo 2 - criando repositorio no git
<p>Acesse GitHub, e crie um novo repositório,</p> 
// Clique no botão New para criar um novo repositório.

<p align="center"> 
   <img src="docs/imagen/new.png" width= "400">
   </a>
</p>

 <p>Dê um nome para o repositório.</p>

 <p align="center"> 
   <img src="docs/imagen/repositorio.png" width= "400">
   </a>
</p>


 ### Codigo adicionar arquivos ao repositório local
 ```
 git add index.html or git add.
```
### Codigo para adcionar comentarios do desenvolvedor
```
 git commit -m "Mensagem do desenvolvedor" ex: "Updat file README"
```
### Codigo para adcionar informações.
```
 git add.
```
### Codigo para enviar informações
```
 git push -u origin master
```