# FUNCTION SYNTAX
## VARIABLES
`x`, `y`, `y'`

## OPERATORS
- `+` - Adição
- `-` - Subtração
- `/` - Divisão
- `*` - Multiplicação
- `^` - Potenciação

## a<name="functions">FUNCTIONS</a>
Clique no link de cada item para ver um exemplo de seu uso

- `sqrt()` - [Raiz Quadrada](https://s5.static.brasilescola.uol.com.br/be/2021/12/representacao-grafico-raiz-quadrada.jpg)
- `log()` - [Logaritmo](https://static.todamateria.com.br/upload/gr/af/graficofuncaolog2.jpg)
- `ln()` - [Logaritmo Natural](https://www.researchgate.net/publication/45890568/figure/fig1/AS:394183517982720@1470992082219/s-a-graph-illustrating-the-logarithmic-growth-of-1-t-2-log-PH-Sp-t.png)
- `abs()` - O valor vai ser sempre positivo
- `sin()` - [Seno](https://www.dicasdecalculo.com.br/wp-content/uploads/2017/02/gr%C3%A1ficos-de-fun%C3%A7%C3%B5es-trigonom%C3%A9tricas-seno-1.jpg)
- `cos()` - [Cosseno](https://s1.static.brasilescola.uol.com.br/be/2021/04/funcao-cosseno.jpg)
- `tan()` - [Tangente](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaWEbZthjOhGlMaBg9HtdGr91BO5Y2BhxcRGTaSDuT7Qkm6OGZw-rGCTcVI0HMucoz2Q&usqp=CAU)
- `exp()` - [Função Exponensial](https://static.todamateria.com.br/upload/ex/po/expoencialgrafico3.jpg)



# NOÇÕES BÁSICAS

## VARIÁVEIS
Ao ver algumas funções prontas você vai se deparar com algumas variáveis (Para burros: Letras pra mudar depois), aqui está alguns exemplos de como lidar com cada uma<br><br>

(Lembre-se do básico de matemática, duas letras juntas como `sin(ax)` é o mesmo que `sin(a*x)`)

- `h` - Altura (Se você quer que vá para cima ou baixo, use positivo para ir pra cima e negativo para ir para baixo)
- Exemplo:
	+ Se vocẽ está em `-5` e você quer ir para cima em `10`, então `h=10` e se você está em `10` e quer ir para baixo em `-2`, então `h=-12`
- Normalmente você pode adicionar um `+` para combinar várias funções de uma vez
- Ao adicionar um `-` no começo da função, faz com que a linha dê um flip (Ao invés de ir para cima, então vai para baixo e vice-versa)

## GAMEPLAY
Caso não tenha notado, seu soldado sempre via estar na parte negativa do gráfico, o que acontece é que ao trocar de turno, o mapa da um flip (Eu demorei pra perceber isso), tente imaginar no gráfico diversos quadradinhos que delimitam o valor de cada coordenada, como em um plano cartesiano comum (Ao usar algumas das funções você vai começar a notar melhor onde cada quadrado começa e termina, mas pelo que percebi eles possuem o tamanho aproximado de um ponteiro de mouse)<br><br>

A arena vai de `-25` a `25` na horizontal (Eixo X) e `-15` a `15` na vertical (Eixo Y), sendo o ponto central o `0`. Analise essa [imagem](https://sites.google.com/site/skophysics/_/rsrc/1472854165970/home/geometria-analitica/plano%202.png) para ter uma noção básica de como um plano cartesiano funciona<br><br>

Vamos usar a função `7/(1+exp(-100*(x-5)))` (`h/(1+exp(-a*(x-b)))`) como exemplo, que tem como objetivo formar [isso](https://cdn.discordapp.com/attachments/996210289592782889/1005294338181447771/unknown.png)<br>
Vamos por partes, olhando no `x-5`, percebemos que estou mandando a linha ir 5 quadrados para a direita, o `h` mostra que depois disso é para subir 7 quadrados num ângulo de `-100` (olhe em [STEP FUNCTION](#stepfunction))<br><br>

Obviamente essa é uma das funções mais simples e nem todas vão seguir exatamente o mesmo padrão, só usei a fins de exemplficar como se deve usar as funções e como funciona a gameplay do jogo



# STEAMLISTS
Esse tutorial foi pego do site [steamlists](https://steamlists.com/graphwar-useful-formulas-game-basics/), algumas informações foram alteradas

## MANIPULANDO FÓRMULAS
O segredo é usar as formulas e não se importar com o valor de `x` de seus soldados<br>
As duas melhoras formas são `2^x` e `tanh(x)` e combinando elas<br>

É difícil mirar uma parabola quando você não sabe a posição do seu `x`. Seno e Cosseno vão se morrer estranho dependendo do valor de seu `b` e `c`<br>

Se a função for exponensial, nós podemos ajustar `a`, `b`, `c` e a base para direita a para cima ou baixo para acertar o alvo

## ab^(x+c) + sin(40x)\*de^(x+f)
![Imagem](https://steamlists.com/wp-content/uploads/2022/07/Graphwar-Useful-Formulas-Game-Basics-My-Favorite-Combinations-5AB83FF-steamlists-com.png)

Ex: `(1/5)*2^((x-2)/3) + sin(40x)*(1/2)*2^(x/2.5-4)`


## a\*e^(-(x+c)^2\*sin(20x)
![Imagem](https://steamlists.com/wp-content/uploads/2022/07/Graphwar-Useful-Formulas-Game-Basics-My-Favorite-Combinations-FAE500A-steamlists-com.jpg)

Como eu mencionei antes nós usamos `a`, `b` e `c` em nossa função (`af(bx+c)`) e funções específicas ignorama a posição do `x` de nossos soldados. Para os dois soldados, a ação acontece em relativo ao `c` e apenas a altura muda entre os soldados<br><br>

Nós podemos usar apenas o `sin`, `x^2` ou etc

## tanh
Infelizmente graphwar não possui funçõe trig hiperbólico, então nós escrevemos ela por inteiro<br>
`tanh(x) = (e^(x)-e^(-x))/(e^(x)+e^(-x))`<br>

![Imagem](https://steamlists.com/wp-content/uploads/2022/07/Graphwar-Useful-Formulas-Game-Basics-My-Favorite-Combinations-7F854A6-steamlists-com.png)

<br>

`tanh(x+c) = (e^(x+c)-e^(-(x+c)))/(e^(x+c)+e^(-(x+c)))`<br>

Ex: `5*tanh(x-4) = 5*(e^(x-4)-e^(-(x-4)))/(e^(x-4)+e^(-(x-4)))`



# DISCORD
Esse tutorial foi tirado do discord oficial do graphwar, algumas coisas podem ter sido alteradas

## <a name="stepfunction">STEP FUNCTION</a>
- `h/(1+exp(-a*(x-b)))`

![Imagem](https://cdn.discordapp.com/attachments/996210289592782889/1005294338181447771/unknown.png)

- `h` - Altura (Se você quer que vá para cima ou baixo, use positivo para ir pra cima e negativo para ir para baixo)
- Exemplo:
	* Se vocẽ está em `-5` e você quer ir para cima em `10`, então `h=10` e se você está em `10` e quer ir para baixo em `-2`, então `h=-12`

- `x-b` é onde você quer que a curva aconteceça em `x` se você usar `x-2` a curva vai acontecer em `x=2`, se você digitar `x+10`, a curva vai acontecer em `x=-10`
	+ Se você usar `x+a`, a curva acontece antes de `x=0`, os soldados estão sempre no ponto negativo do quadro, se você usar `x+a` a curva agora acontece no ponto negativo `x-a` no ponto positivo, por exemplo, se você usar `x+5` a curva acontece em `x=-5`

- `a` é o ângulo da curva, se você usar `-1` vai fazer uma onda, melhor usar `a=-100` para fazer uma curva perfeita


## DOUBLE ABSOLUTE
- ` aabs(x-b)-aabs(x-c)`

![Imagem](https://cdn.discordapp.com/attachments/996210289592782889/1005294981608652840/unknown.png)

Nessa função nós vamos ter que usar ângulo, o ângulo se aplica ao `a`<br>
As medidas de ângulos são `0.5=22.5` e `1=45º`<br>
Depois de `1`, o ângulo começa a ter diferentes progreções e não tem como alcançar 90º<br>

- `b` e `c`, se você entende de ângulo, você vai entender facilmente
	+ `b` - É onde o ângulo começa, vamos dizer que você usou `a=1` então a linha vai 45º para `c`

- `aabs(x-b)-aabs(x-c)`

Bem, no caso de absoluto, para ir para baixo você tem que reverter os dois lanes, porque na primeira parte você está dizendo que ocê quer ir para cim acom o `+` ou para baixo com o `-`, e na segundo parte você está cancelando a prmeira, para a linha parar de ir para cima ou para baixo, as duas lanes precisam ser opostas, então `a` tem que ser igual

- `-aabs(x-b)+aabs(x-c)`

## LORENTZ
- `h/(1+(X-a)^2)`
![Imagem](https://cdn.discordapp.com/attachments/996210289592782889/1005295595067539456/unknown.png)

- `h` - É a altura na qual o "lore" vai subir, `x-a` ou `x+a` é para onde não vai ter o pico do "lore", se você usar negativo no começo, o "lore" vai para baixo


## SPIKE
- `b/(((50(x-a))^2)+1)`
![Imagem](https://cdn.discordapp.com/attachments/996210289592782889/1005295662797176842/unknown.png)

É litralmente o **lerentz** mas com um diferencial que é multiplicado por **50**, você pode mudar esse número pra qualquer um que quiser, mas números altos não interferem em nada<br><br>

Mesma regra pro **lorentz**, `h` é a altura, `x-a` ou `x+a` é onde acontece, se você usar negativo e `h` vai para baixo

## SPAWN WAVES
- `hsin(bx)/(1+exp(-100(x-a)))`

![Imagem](https://cdn.discordapp.com/attachments/996210289592782889/1005295883983782018/unknown.png)

Isso é básicamente `sin+exp`, sua seta para um **sin** aparecer onde você escolheu em **exp**, se você já notou a função básica do `exp` isso vai ser fácil, o **sin** vai aparecer no `x` que você escolher em `x-a` ou `x+a`, `h` é o tamanho da onde e `b` a frequência das ondas

![Imagem2](https://cdn.discordapp.com/attachments/996210289592782889/1005296059372810310/unknown.png)



# YOUTUBE
Esse tutorial foi tirado desse [vídeo](https://youtu.be/EHuQe7SKwkA) do youtube

## sin(x)
Ondas simultâneas

- Adicionando um número no começo (Ex: `2sin(x)`), muda o tamanho das ondas
- Adicionando um número à esquerda do `x` muda a frequência das ondas (Ex: `sin(5x)`) quanto maior o número, menor o intervalo entre uma onda e outra

# SPIKE
Uma linha com um espinho

```
			^   <- H
			||
			||
			/\
___________/  \__________
```

- `h/(1+(-a*(x+b))^2)`
	+ `h` - Altura (Adicione `-` para ir para baixo)
	+ `b` - Largura do espinho (`14`)
	+ `a` - Distância até o espinho aparecer (`69` é um espinho bem fino e sem curvatura na base)

# DOUBLE ABS
Cria uma linha diagonal

```
			  C
			  |
			  v
	A/2 ------ _____________
	|		  /
	|		 /
	|		/
------------  <- B
```


- `h(abs(x+b)-abs(x+c))`
	+ `h` - Altura da linha dividido por dois (`h/2`)
	+ `b` - Início da diagonal
	+ `c` - Final da diagonal
- Caso queira fazer um flip (Adicionar `-` ao início), perceba que o `b` e `c` irão "inverter"

# SIN
Usando apenas o `sin(x)`, a linha sairá como uma onda (Como já mostrado [aqui](#functions))<br>
Com `sin(ax)`, a frequência da onda será alterada (Quanto maior o número, menor a frequência)
Você também pode usar `hsin(x)` (ou combinar com `sin(ax)`) para aumentar a altura da onda<br><br>

Combinando com **[STEP FUNCTION](#stepfunction)** (`h/(1+exp(-a*(x-b)))`) nós temos o **WIDE LINE**

# WIDE LINE
Uma linha reta com um **SIN**

- `sin(hx)/(1+exp(-a*(x+c)))` ou `d*sin(x*h)/(1+exp(-a*(x+c))) `
	+ `c` - Onde o seno começa