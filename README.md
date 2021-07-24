O programa está dividido em 3 arquivos .html

Index.html

É o arquivo correspondente a primeira pagina do site, a classe logo contém o logo da marca, a classe "btn", é onde está logalizado os botões que encaminham para a página de cadastro de cliente e cadastro de produto. E por ultimo contém um comando footer para dar nome ao desenvolvedor.

cliente.html

É a página onde está o cadastro dos clientes, nela temos uma classe container que possui o formulário de cadastro solicitando os dados do nome,endereço,email e telefone. Possui uma classe "btn" para que os dados sejam enviados para o localstorage e um botão de voltar para a página index.html.
Por ultimo ele chama o arquivo main.js, onde está localizado o comando que cria o arquivo de cliente no localstorage.

produto.html

É a pagina onde está localizado o cadastro de código, quantidade e valor do produto. Possui tmabém a classe "btn" onde temos a opção de enviar os dados para o localstorage e a opção de voltar para a tela inicial. No final ele chama o arquivo main1.js, onde está localizado o comando de criação do arquivo produto no LocalStorage.

Main1.js e Main.js

Arquivo de programa que armazena os dados dos clientes e produtos no LocalStorage.
document.getElementById = recebe os dados do formulário
getItem = captura os elementos da LocalStorage caso existir

Style.css

Contém toda a estilização do nosso site de maneira simples, usando os comandos básicos para configuração de cor, tamanho, margem.