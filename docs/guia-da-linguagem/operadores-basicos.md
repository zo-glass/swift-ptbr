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
