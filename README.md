# Fernanda
Fernanda é meu site pessoal aonde eu coloco qualquer coisa que eu quiser, no site tem informações mais detalhadas
 mas basicamente é um lugar para facilitar o acesso das minhas coisas, onde escrevo pra mim mesma sem pretenção

# Funcionamento
Fernanda é um site estático, sem uso de nenhuma **framework**, o que me deixava muito confusa com as páginas,
 levando a bugs e páginas feias, então, descobri o [`Showdown`](https://github.com/showdownjs/showdown), uma ferramenta que deixa converter `Markdown`
 para `HTML`

As páginas principais possuem um arquivo `Markdown` separado, onde fica o conteúdo, quando a página é carregada
 a função `addDefaultPage` (`assets/scripts/defaultPage.js`) é acionada, ela lê o conteúdo do arquivo `Markdown`,
 converte para `HTML` e adiciona na página *(As vezes junto com o header e o footer)*, é quase uma **framework** própria

### Github pages
Por causa do jeito ruim que o github pages funciona, fui obrigada a mudar todo o meus paths

