---
sidebar_position: 2
---

# Operadores Básicos

## Execute operações como atribuição, aritmética e comparação.

Um operador é um símbolo ou frase especial que você usa para verificar, alterar ou combinar valores. Por exemplo, o operador de adição (`+`) adiciona dois números, como em `let i = 1 + 2`, e o operador lógico AND (`&&`) combina dois valores booleanos, como em `if codigoDaPortaDigitado && passouNaVarreduraDeRetina`.

O Swift oferece suporte aos operadores que você já conhece de linguagens como C, e melhora vários recursos para eliminar erros comuns de codificação. O operador de atribuição (`=`) não retorna um valor, para evitar que seja usado erroneamente quando o operador igual a (==) for pretendido. Os operadores aritméticos (`+`, `-`, `*` , `/`, `%`, e assim por diante) detectam e não permitem o estouro de valor, para evitar resultados inesperados ao trabalhar com números que se tornam maiores ou menores do que o intervalo de valores permitido do tipo que os armazena. Você pode aceitar o comportamento de estouro de valor usando os operadores de estouro do Swift, conforme descrito em [Operadores de Estouro](./operadores-avancados.md/#operadores-de-estouro).

O Swift também fornece operadores de intervalo que não são encontrados em C, como `a..<b` e `a...b`, como uma redução para expressar um intervalo de valores.

Este capítulo descreve os operadores comuns no Swift. [Operadores Avançados](./operadores-avancados.md) cobrem os operadores avançados do Swift, e descrevem como definir seus próprios operadores personalizados e implementar os operadores padrão para seus próprios tipos personalizados.

## Terminologia

Os operadores são unários, binários ou ternários:

- Os operadores unários operam em um único alvo (como `-a`). Os operadores de prefixo unário aparecem imediatamente antes do alvo (como `!b`) e os operadores de pós-fixo unário aparecem imediatamente após o alvo (como `c!`).

- Operadores binários operam em dois alvos (como `2 + 3`) e são infixos porque aparecem entre seus dois alvos.

- Os operadores ternários operam em três alvos. Como em C, o Swift tem apenas um operador ternário, o operador condicional ternário (`a ? b : c`).

Os valores que os operadores afetam são operandos. Na expressão `1 + 2`, o símbolo `+` é um operador infixo e seus dois operandos são os valores `1` e `2`.

## Operador de Atribuição

O operador de atribuição (`a = b`) inicializa ou atualiza o valor de `a` com o valor de `b`:

```swift
let b = 10
var a = 5
a = b
// a agora é igual a 10
```

Se o lado direito da atribuição for uma tupla com vários valores, seus elementos podem ser decompostos em várias constantes ou variáveis ​​de uma só vez:

```swift
let (x, y) = (1, 2)
// x é igual a 1, e y é igual a 2
```

Ao contrário do operador de atribuição em C e Objective-C, o operador de atribuição em Swift não retorna um valor. A seguinte declaração não é válida:

```swift
if x = y {
    // Isso não é válido, porque x = y não retorna um valor.
}
```

Esse recurso evita que o operador de atribuição (`=`) seja usado acidentalmente quando o operador igual a (`==`) é realmente pretendido. Ao tornar `if x = y` inválido, o Swift ajuda você a evitar esses tipos de erros em seu código.

## Operadores Aritméticos

O Swift suporta os quatro operadores aritméticos padrão para todos os tipos de números:

- Adição (`+`)
- Subtração (`-`)
- Multiplicação (`*`)
- Divisão (`/`)

```swift
1 + 2       // é igual a 3
5 - 3       // é igual a 2
2 * 3       // é igual a 6
10.0 / 2.5  // é igual a 4.0
```

Ao contrário dos operadores aritméticos em C e Objective-C, os operadores aritméticos Swift não permitem que os valores estourem por padrão. Você pode aceitar o comportamento de estouro de valor usando os operadores de estouro do Swift (como `a &+ b`). Consulte [Operadores de Estouro](./operadores-avancados.md/#operadores-de-estouro).

O operador de adição também é suportado para Stringconcatenação:

```swift
"olá, " + "mundo"  // é igual a "olá, mundo"
```

### Operador de Resto

O operador de resto (`a % b`) calcula quantos múltiplos de `b` cabem dentro de `a` e retorna o valor que sobrou (conhecido como resto).

> **Nota**
>
> O operador de resto (`%`) também é conhecido como operador de módulo em outras linguagens. No entanto, seu comportamento no Swift para números negativos significa que, estritamente falando, é um resto em vez de uma operação de módulo.

Veja como funciona o operador de resto. Para calcular `9 % 4`, você primeiro calcula quantos `4` caberão dentro de `9`:

<div align="center">
    <img src="https://docs.swift.org/swift-book/images/remainderInteger~dark@2x.png" alt="" width="273" />
</div>

Você pode colocar dois `4` dentro de `9`, e o restante é `1` (mostrado em laranja).

Em Swift, isso seria escrito como:

```swift
9 % 4    // é igual a 1
```

Para determinar a resposta para `a % b`, o operador `%` calcula a seguinte equação e retorna `resto` como saída:

$a = (b \cdot algum\ multiplicador) + resto$

onde `algum multiplicador` é o maior número de múltiplos de `b` que caberá dentro `a`.

Inserindo `9` e `4` nesta equação, obtém-se:

$9 = (4 \cdot 2) + 1$

O mesmo método é aplicado ao calcular o restante para um valor negativo de `a`:

```swift
-9 % 4   // é igual a -1
```

Inserindo `-9` e `4` na equação resulta:

$-9 = (4 \cdot -2) + -1$

dando um valor restante de `-1`.

O sinal de `b` é ignorado para valores negativos de `b`. Isso significa que `a % b` e `a % -b` sempre dá a mesma resposta.

### Operador unário de menos

O sinal de um valor numérico pode ser alternado usando um prefixo `-`, conhecido como operador unário de menos:

```swift
let tres = 3
let menosTres = -tres       // menosTres é igual a -3
let maisTres = -menosTres   // maisTres é igual a 3, ou "menos menos três"
```

O Operador unário de menos (`-`) é anexado diretamente antes do valor em que opera, sem nenhum espaço em branco.

### Operador unário de mais

O operador unário de mais (`+`) simplesmente retorna o valor sobre o qual opera, sem qualquer alteração:

```swift
let menosSeis = -6
let tambemMenosSeis = +menosSeis  // tambemMenosSeis é igual a -6
```

Embora o operador unário de mais não faça nada, você pode usá-lo para fornecer simetria em seu código para números positivos ao usar também o operador unário menos para números negativos.

## Operadores de atribuição compostos

Como em C, o Swift fornece operadores de atribuição compostos que combinam atribuição (`=`) com outra operação. Um exemplo é o operador de atribuição de adição (`+=`):

```swift
var a = 1
a += 2
// a agora é igual a 3
```

A expressão `a += 2` é uma abreviação de `a = a + 2`. Efetivamente, a adição e a atribuição são combinadas em um operador que executa as duas tarefas ao mesmo tempo.

> **Nota**
>
> Os operadores de atribuição compostos não retornam um valor. Por exemplo, você não pode escrever `let b = a += 2`.

Para obter informações sobre os operadores fornecidos pela biblioteca padrão do Swift, consulte [Declarações do Operador](https://developer.apple.com/documentation/swift/operator_declarations).

## Operadores de Comparação

Swift suporta os seguintes operadores de comparação:

- Igual a (`a == b`)
- Diferente de (`a != b`)
- Maior que (`a > b`)
- Menor que (`a < b`)
- Maior ou igual a (`a >= b`)
- Menor ou igual a (`a <= b`)

> **Nota**
>
> O Swift também fornece dois operadores de identidade (`===` e `!==`), que você usa para testar se duas referências de objeto se referem à mesma instância de objeto. Para obter mais informações, consulte [Operadores de Identidade](./estruturas-e-classes.md/#operadores-de-identidade).

Cada um dos operadores de comparação retorna um valor `Bool` para indicar se a afirmação é verdadeira ou não:

```swift
1 == 1   // (true) verdadeiro porque 1 é igual a 1
2 != 1   // (true) verdadeiro porque 2 não é igual a 1
2 > 1    // (true) verdadeiro porque 2 é maior que 1
1 < 2    // (true) verdadeiro porque 1 é menor que 2
1 >= 1   // (true) verdadeiro porque 1 é maior ou igual a 1
2 <= 1   // (false) falso porque 2 não é menor ou igual a 1
```

Operadores de comparação são frequentemente usados em instruções condicionais, como a instrução `if`:

```swift
let nome = "mundo"
if nome == "mundo" {
    print("olá, mundo")
} else {
    print("Desculpa \(nome), mas não te reconheço")
}
// Imprime "olá, mundo", porque nome é de fato igual a "mundo".
```

Para obter mais informações sobre a instrução `if`, consulte [Controle de Fluxo](./controle-de-fluxo.md).

Você pode comparar duas tuplas se elas tiverem o mesmo tipo e o mesmo número de valores. As tuplas são comparadas da esquerda para a direita, um valor por vez, até que a comparação encontre dois valores que não sejam iguais. Esses dois valores são comparados e o resultado dessa comparação determina o resultado geral da comparação de tupla. Se todos os elementos forem iguais, as próprias tuplas serão iguais. Por exemplo:

```swift
(1, "zebra") < (2, "apple")   // (true) verdadeiro porque 1 é menor que 2, "zebra" e "apple" não são comparadas
(3, "apple") < (3, "bird")    // (true) verdadeiro porque 3 é igual a 3, e "apple" é menor que "bird"
(4, "dog") == (4, "dog")      // (true) verdadeiro porque 4 é igual a 4, e "dog" é igual a "dog"
```

No exemplo acima, você pode ver o comportamento de comparação da esquerda para a direita na primeira linha. Porque `1` é menor que `2`, `(1, "zebra")` é considerado menor que `(2, "apple")`, independentemente de quaisquer outros valores nas tuplas. Não importa que `"zebra"` não seja menor que `"apple"`, pois a comparação já está determinada pelos primeiros elementos das tuplas. Porém, quando os primeiros elementos das tuplas são iguais, seus segundos elementos são comparados — é o que acontece na segunda e na terceira linha.

As tuplas podem ser comparadas com um determinado operador somente se o operador puder ser aplicado a cada valor nas respectivas tuplas. Por exemplo, conforme demonstrado no código abaixo, você pode comparar duas tuplas do tipo `(String, Int)` porque ambos os valores `String` e `Int` podem ser comparados usando o operador `<`. Em contraste, duas tuplas do tipo `(String, Bool)` não podem ser comparadas com o operador `<` porque o operador `<` não pode ser aplicado a valores `Bool`.

```swift
("blue", -1) < ("purple", 1)        // Certo, avalia como verdadeiro
("blue", false) < ("purple", true)  // Erro porque < não pode comparar valores booleanos
```

> **Nota**
>
> A biblioteca padrão Swift inclui operadores de comparação de tuplas para tuplas com menos de sete elementos. Para comparar tuplas com sete ou mais elementos, você mesmo deve implementar os operadores de comparação.

### Operador Condicional Ternário

O operador condicional ternário é um operador especial com três partes, que assume a forma `pergunta ? resposta1 : resposta2`. É um atalho para avaliar uma das duas expressões com base em se `pergunta` é `true` ou `false`. Se `pergunta` for verdadeiro, avalia `resposta1` e retorna seu valor; caso contrário, avalia `resposta2` e retorna seu valor.

O operador condicional ternário é um atalho para o código abaixo:

```swift
if pergunta {
    resposta1
} else {
    resposta2
}
```

Aqui está um exemplo, que calcula a altura de uma linha da tabela. A altura da linha deve ser 50 pontos mais alta que a altura do conteúdo se a linha tiver um cabeçalho, e 20 pontos mais alta se a linha não tiver um cabeçalho:

```swift
let alturaDoConteudo = 40
let temCabecalho = true
let alturaDaLinha = alturaDoConteudo + (temCabecalho ? 50 : 20)
// alturaDaLinha é igual a 90
```

O exemplo acima é uma abreviação do código abaixo:

```swift
let alturaDoConteudo = 40
let temCabecalho = true
let alturaDaLinha: Int
if temCabecalho {
    alturaDaLinha = alturaDoConteudo + 50
} else {
    alturaDaLinha = alturaDoConteudo + 20
}
// alturaDaLinha é igual a 90
```

O uso do primeiro exemplo do operador condicional ternário significa que `alturaDaLinha` pode ser definido com o valor correto em uma única linha de código, que é mais conciso do que o código usado no segundo exemplo.

O operador condicional ternário fornece uma abreviação eficiente para decidir qual das duas expressões considerar. No entanto, use o operador condicional ternário com cuidado. Sua concisão pode levar a um código difícil de ler se usado em excesso. Evite combinar várias instâncias do operador condicional ternário em uma instrução composta.

## Nil-Coalescing Operator

O *nil-coalescing operator* (`a ?? b`) desembrulha um opcional `a` se ele contiver um valor, ou retornará um valor padrão `b` se `a` for `nil`. A expressão `a` é sempre de um tipo opcional. A expressão `b` deve corresponder ao tipo armazenado dentro de `a`.

O *nil-coalescing operator* é um atalho para o código abaixo:

```swift
a != nil ? a! : bs
```

O código acima usa o operador condicional ternário e o desembrulho forçado (`a!`) para acessar o valor agrupado dentro de `a` quando não `a` é `nil`, e para retornar `b` caso contrário. O *nil-coalescing operator* fornece uma maneira mais elegante de encapsular essa verificação e desembrulho condicional em uma forma concisa e legível.

> **Nota**
>
> Se o valor de `a` não for `nil`, o valor de `b` não será avaliado. Isso é conhecido como *short-circuit evaluation*.

O exemplo abaixo usa o *nil-coalescing operator* para escolher entre um nome de cor padrão e um nome de cor opcional definido pelo usuário:

```swift
let nomeDaCorPadrao = "vermelho"
var nomeDaCorDefinidaPeloUsuário: String?   // o padrão é nil

var nomeDaCorParaUsar = nomeDaCorDefinidaPeloUsuário ?? nomeDaCorPadrao
// nomeDaCorDefinidaPeloUsuário é nil, então nomeDaCorParaUsar é definido como o padrão de "vermelho"
```

A variável `nomeDaCorDefinidaPeloUsuário` é definida como uma `String` opcional, com um valor padrão de `nil`. Como `nomeDaCorDefinidaPeloUsuário` é de um tipo opcional, você pode usar o *nil-coalescing operator* para considerar seu valor. No exemplo acima, o operador é usado para determinar um valor inicial para uma variável `String` chamada `nomeDaCorParaUsar`. Como `nomeDaCorDefinidaPeloUsuário` é `nil`, a expressão `nomeDaCorDefinidaPeloUsuário ?? nomeDaCorPadrao` retorna o valor de `nomeDaCorPadrao`, ou `"vermelho"`.

Se você atribuir um valor não nulo (`nil`) a `nomeDaCorDefinidaPeloUsuário` e executar a verificação do *nil-coalescing operator* novamente, o valor agrupado dentro de `nomeDaCorDefinidaPeloUsuário` será usado em vez do padrão:

```swift
nomeDaCorDefinidaPeloUsuário = "verde"
nomeDaCorParaUsar = nomeDaCorDefinidaPeloUsuário ?? nomeDaCorPadrao
// nomeDaCorDefinidaPeloUsuário não é nil, então nomeDaCorParaUsar é definido como "verde"
```

## Operadores de Intervalo

O Swift inclui vários operadores de intervalo, que são atalhos para expressar um intervalo de valores.

### Operador de Intervalo Fechado

O operador de intervalo fechado (`a...b`) define um intervalo que vai de `a` a `b`, e inclui os valores `a` e `b`. O valor de `a` não deve ser maior que `b`.

O operador de intervalo fechado é útil ao iterar em um intervalo no qual você deseja que todos os valores sejam usados, como com um loop `for-in`:

```swift
for indice in 1...5 {
    print("\(indice) vezes 5 é \(indice * 5)")
}
// 1 vezes 5 é 5
// 2 vezes 5 é 10
// 3 vezes 5 é 15
// 4 vezes 5 é 20
// 5 vezes 5 é 25
```

Para obter mais informações sobre loops `for-in`, consulte [Controle de Fluxo](./controle-de-fluxo.md).

### Operador de Intervalo Semi-Aberto

O operador de intervalo semi-aberto (`a..<b`) define um intervalo que vai de `a` a `b`, mas não inclui `b`. Diz-se que está meio aberto porque contém seu primeiro valor, mas não seu valor final. Como no operador de intervalo fechado, o valor de `a` não deve ser maior que `b`. Se o valor de `a` for igual a `b`, o intervalo resultante ficará vazio.

Intervalos entreabertos são particularmente úteis quando você trabalha com *arrays* baseadas em zero, como *arrays*, onde é útil contar até (mas não incluir) o comprimento do *array*:

```swift
let nomes = ["Anna", "Alex", "Brian", "Jack"]
let contagem = nomes.count
for i in 0..<contagem {
    print("A pessoa \(i + 1) se chama \(nomes[i])")
}
// A pessoa 1 se chama Anna
// A pessoa 2 se chama Alex
// A pessoa 3 se chama Brian
// A pessoa 4 se chama Jack
```

Observe que a matriz contém quatro itens, mas `0..<contagem` conta apenas até `3` (o índice do último item do *array*), porque é um intervalo semiaberto. Para saber mais sobre *arrays*, consulte [Arrays](./tipos-de-colecao.md/#arrays).

### Intervalos Unilaterais

O operador de intervalo fechado tem uma forma alternativa para intervalos que continuam o mais longe possível em uma direção — por exemplo, um intervalo que inclui todos os elementos de um *array* do índice 2 até o final do *array*. Nesses casos, você pode omitir o valor de um lado do operador de intervalo. Esse tipo de intervalo é chamado de *one-sided range* porque o operador tem um valor em apenas um lado. Por exemplo:

```swift
for nome in nomes[2...] {
    print(nome)
}
// Brian
// Jack

for nome in nomes[...2] {
    print(nome)
}
// Anna
// Alex
// Brian
```

O operador de intervalo semi-aberto também possui uma forma unilateral que é escrita apenas com seu valor final. Assim como quando você inclui um valor em ambos os lados, o valor final não faz parte do intervalo. Por exemplo:

```swift
for nome in nomes[..<2] {
    print(nome)
}
// Anna
// Alex
```

Intervalos unilaterais podem ser usados ​​em outros contextos, não apenas em *subscripts*. Você não pode iterar em um intervalo unilateral que omite um primeiro valor, porque não está claro onde a iteração deve começar. Você pode iterar em um intervalo unilateral que omite seu valor final; no entanto, como o intervalo continua indefinidamente, certifique-se de adicionar uma condição final explícita para o *loop*. Você também pode verificar se um intervalo unilateral contém um valor específico, conforme mostrado no código abaixo.

```swift
let intervalo = ...5
intervalo.contains(7)   // false (falso)
intervalo.contains(4)   // true (verdadeiro)
intervalo.contains(-1)  // true (verdadeiro)
```
