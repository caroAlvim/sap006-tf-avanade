

# FACE SCAN - Squad AVANADE

### Talent Fest < Laboratória >

Face Scan é uma aplicação web desenvolvida para realizar reconhecimento facial, identificar se uma pessoa está utilizando uma máscara corretamente.  

Desenvolvido para o Talent Fest - Squad Avanade. Turma SAP006

## Índice

- [1. Desafio](#1-desafio)
- [2. Histórias de usuário](#2-histórias-de-usuário)
- [3. Protótipo](#3-protótipo)
- [4. A aplicação](#4-a-aplicação)
- [5. tecnologias utilizadas](#5-tecnologias-utilizadas)
- [Desenvolvedoras](#desenvolvedoras)

---

## 1. Desafio

Com a COVID-19 fica cada vez mais difícil para os estabelecimentos terem controle sobre as pessoas que entram utilizando máscara e principalmente se estão com o programa vacinal completo. Pensando nisso precisamos desenvolver um aplicativo onde seja possível identificar se as pessoas estão utilizando a máscara e caso estejam utilizando precisamos identificar se elas estão com seus comprovantes de vacinação, dadas as limitações para validar o comprovante vacinal de forma automatizada, o comprovante será armazenado em uma base de dados (firebase) e o usuário será liberado em regime de contingência. Uma vez que a liberação foi feita o usuário passa a ter acesso
NORMAL.

### Product Backlog
1 – Interface com integração com câmera para exibir ao usuário o que fazer;
2 – Reconhecimento facial com identificação de máscara no rosto (restringir acesso de pessoas
com máscara no queixo ou nariz de fora)
3 –App com câmera
4 – Leitura de QR Code do comprovante de vacinação
5 – Consultar QR Code na nossa base de dados, se o QR Code estiver válido ele deixa passar com
status liberado, se não estiver presente devemos deixar passar, mas com status de pendente validação
manual, caso o QR Code não seja aprovado devemos barrar o acesso do usuário.

### Face API (Validar se é esse mesmo o serviço)
Uso do serviço cognitivo do Azure para reconhecer um rosto e o elemento máscara devidamente posicionado.
Site/App. Para a criação de uma autorização é necessário o desenvolvimento de um site ou app com câmera para
validar se a pessoa está usando a máscara corretamente, e posteriormente se a vacinação está em dia
através do QRCode.


## 3. Histórias de usuário

#### [Historia de usuario 1] Verificação de uso correto da máscara de proteção

- Eu, como usuário da aplicação, gostaria de verificar se minha máscara cobre nariz e boca adequadamente usando o reconhecimento facial.

##### Critérios de aceitação

- Acessar uma tela de inicial;
- Reconhecer uso adequado da mascara, cobrindo totalmente boca e nariz;
- Apresentar mensagem de erro caso o uso esteja inadequado;
- Apresentar mensagem de sucesso, caso a mascara esteja cobrindo totalmenteo boca e nariz;


#### [Historia de usuario 2] Verificação de QR Code do Certificado Nacional de Vacinação Covid-19

- Eu, como usuário da aplicação, gostaria de verificar se o QR Code está válido para acessar estabelecimento.

##### Critérios de aceitação

- Acessar uma tela para escaneamento de QR COde;
- Acessar banco de dados e verificar se registro do certificado está validado;
- Apresentar mensagem de erro, caso não encontre o certificado;
- Apresentar mensagem de sucesso, caso a certificado seja encontrado;


---

## 4. Protótipo

### Paleta de cores escolhida

![paleta-de-cores](./src/assets/paleta-de-cores.png)

### Protótipo desenvolvido usando Figma

![prototipo](./src/assets/prototipo.png)


## 5. A aplicação

<div align='center'>

### Reconhecimento facial do uso correto da máscara
![face-scan](./src/assets/gif-com-mascara.gif)


### Leitura do QR Code do certificado de vacinação
![face-scan](./src/assets/gif-com-qr.gif)

</div>

## 6. tecnologias utilizadas

<div align="inline_block">
  <a href="https://github.com/caroAlvim">
</div>
  
<div style="display: inline_block"><br>
  <img align="center" alt="Azure" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="github" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
  
</div><br>

## 
<div align='center'>

![stay-safe](./src/img/safety-first.gif)

</div>
