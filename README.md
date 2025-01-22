# Manual de utilização do sistema/site.
## CAPITULO 1 - configuração do git no computador.
### Instalação do GIT.

<p align="justify">
Ralize a busca no navegador para a realização [Instalar GIT](ttps://git-scm.com/book/pt-pt/v2/Come%C3%A7ando-Instalar-o-Git)</p>
<p align="center"> <a href ="https://git-scm.com/book/pt-pt/v2/Come%C3%A7ando-Instalar-o-Git" target ="black">
   <img src="docs/image.png![alt text](image-1.png)" width= "400">
   </a>
</p>
   - `git --version`

### Comandos para configura o git.
    ```
    git config --global user.name "Digite seu nome"
    git config --global user.email "Digite seu email"
    ```

### CODIGO para verificar se as informações estão corretas
  ```
  git config list
  ```

### Comandos para navegar áte àrea o seu PROJETO.
   ```
   cd documents // Caso o arquivo esteja da pasta esteja oculto, pasta digita o mesmo codigo adcionado espaço e um ponto final ex: "cd documents ."
   cd workspace// o mesmo nesse caso ex: "cd worksspace"
   cd projeto // O nome do Projeto e de sua escolha
   ```

## CAPITULO 2 - criando repositorio no git
<p>Acesse GitHub, crie uma conta (se ainda não tiver) e crie um novo repositório,</p> // Na hora de criar o repertorio e de sua escolha se ele sera Publico ou Privado

### Codigo para gerar a chave
```
ssh-keygem
```

 ### Codigo adicionar arquivos ao repositório local
 ```
 git add index.html or git add.
```
### Codigo para adcionar comentarios do desenvolvedor
```
 git commit -m "Mensagem do desenvolvedor" ex: "Updat file README"
```
