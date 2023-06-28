---
sidebar_position: 3
---

# Strings e caracteres

## Armazene e manipule texto.

Uma *string* é uma série de caracteres, como `"olá, mundo"` ou `"albatroz"`. As *strings* em Swift são representadas pelo tipo `String`. O conteúdo de uma `String` pode ser acessado de várias maneiras, inclusive como uma coleção de valores de `Character`.

Os tipos `String` e `Character` do Swift fornecem uma maneira rápida, compatível com Unicode de trabalhar com texto em seu código. A sintaxe para criação e manipulação de strings é leve e legível, com uma sintaxe literal de *string* semelhante à linguagem C. A concatenação de *strings* é tão simples quanto combinar duas *strings* com o operador `+`, e a mutabilidade de *strings* é gerenciada escolhendo entre uma constante ou uma variável, assim como qualquer outro valor em Swift. Você também pode usar *strings* para inserir constantes, variáveis, literais e expressões em *strings* mais longas, em um processo conhecido como interpolação de *strings*. Isso facilita a criação de valores de *string* personalizados para exibição, armazenamento, e impressão.

Apesar dessa simplicidade de sintaxe, o tipo `String` do Swift é uma implementação de *string* rápida e moderna. Cada *string* é composta por caracteres Unicode independentes de codificação e oferece suporte para acessar esses caracteres em várias representações Unicode.

> **Nota**
>
> O tipo `String` do Swift é interligado com a classe `NSString` do Foundation. O Foundation também estende o `String` para expor os métodos definidos pela `NSString`. Isso significa que, se você importar o Foundation, poderá acessar esses métodos do `NSString` no `String` sem a necessidade de fazer uma conversão explícita.
>
> Para obter mais informações sobre o uso de `String` com Foundation e Cocoa, consulte [Bridging Between String and NSString](https://developer.apple.com/documentation/swift/string#2919514).

## Literais de String

Você pode incluir valores de `String` predefinidos em seu código como literais de *string*. Um literal de *string* é uma sequência de caracteres cercada por aspas duplas (`"`).

Use um literal de *string* como valor inicial para uma constante ou variável:

```swift
let algumaString = "Algum valor literal de string"
```

Observe que o Swift infere um tipo de `String `para a constante `algumaString` porque ela é inicializada com um valor literal de string.

### Literais de String Multilinhas

Se você precisa de uma *string* que abrange várias linhas, use um literal de *string* multilinhas - uma sequência de caracteres cercada por três aspas duplas:

```swift
let citação = """
O Coelho Branco colocou seus óculos. "Por onde devo começar,
por favor, Majestade?" ele perguntou.

"Comece pelo começo", disse o Rei gravemente, "e continue
até chegar ao fim; então pare."
"""
```

Um literal de *string* multilinhas inclui todas as linhas entre suas aspas de abertura e fechamento. A *string* começa na primeira linha após as aspas de abertura (`"""`) e termina na linha anterior às aspas de fechamento, o que significa que nenhuma das *strings* abaixo começa ou termina com uma quebra de linha:

```swift
let stringEmUmaLinha = "Estas são as mesmas."
let stringMultilinhas = """
Estas são as mesmas.
"""
```

Quando seu código-fonte inclui uma quebra de linha dentro de um literal de *string* multilinhas, essa quebra de linha também aparece no valor da *string*. Se você quiser usar quebras de linha para tornar seu código-fonte mais legível, mas não quiser que as quebras de linha façam parte do valor da *string*, escreva uma barra invertida (`\`) no final dessas linhas:

```swift
let citaçãoComQuebrasSuaves = """
O Coelho Branco colocou seus óculos. "Por onde devo começar, \
por favor, Majestade?" ele perguntou.

"Comece pelo começo", disse o Rei gravemente, "e continue \
até chegar ao fim; então pare."
"""
```

Para criar um literal de *string* multilinhas que começa ou termina com uma alimentação de linha, escreva uma linha em branco como a primeira ou última linha. Por exemplo:

```swift
let quebraDeLinha = """

Esta string começa com uma quebra de linha.
Ela também termina com uma quebra de linha.

"""
```

Uma *string* multilinhas pode ser recuada para combinar com o código circundante. O espaço em branco antes das aspas de fechamento (`"""`) informa ao Swift qual espaço em branco ignorar antes de todas as outras linhas. No entanto, se você escrever espaço em branco no início de uma linha, além do que está antes das aspas de fechamento, esse espaço em branco será incluído.

![multilineStringWhitespace~dark@2x.png (1038×258)](https://docs.swift.org/swift-book/images/multilineStringWhitespace~dark@2x.png)

No exemplo acima, mesmo que todo o literal de *string* multilinhas esteja recuado, as primeiras e últimas linhas da *string* não começam com nenhum espaço em branco. A linha do meio tem mais recuo do que as aspas de fechamento, então ela começa com esse recuo extra de quatro espaços.

### Caracteres Especiais em Literais de String

Literais de *string* podem incluir os seguintes caracteres especiais:

- Os caracteres especiais escapados `\0` (caractere nulo), `\\` (barra invertida), `\t` (tabulação horizontal), `\n` (quebra de linha), `\r` (retorno de carro), `\"` (aspas duplas) e `\'` (aspas simples)
- Um valor escalar Unicode arbitrário, escrito como `\u{`*n*`}`, onde *n* é um número hexadecimal de 1 a 8 dígitos (Unicode é discutido em [Unicode](#unicode) abaixo)

O código abaixo mostra quatro exemplos desses caracteres especiais. A constante `palavrasSabias` contém duas aspas duplas escapadas. As constantes dollarSign, blackHeart e sparklingHeart demonstram o formato escalar Unicode:

```swift
let palavrasSabias = "\"A imaginação é mais importante que o conhecimento\" - Einstein"
// "A imaginação é mais importante que o conhecimento" - Einstein
let cifrao = "\u{24}" // $, Escalar Unicode U+0024
let coracaoPreto = "\u{2665}" // ♥, Escalar Unicode U+2665
let coracaoBrilhante = "\u{1F496}" // 💖, Escalar Unicode U+1F496
```

Como literais de *string* multilinha usam três aspas duplas em vez de apenas uma, você pode incluir uma aspa dupla (`"`) dentro de um literal de *string* multilinha sem escapá-la. Para incluir o texto `"""` em uma *string* multilinha, escape pelo menos uma das aspas. Por exemplo:

```swift
let tresAspasDuplas = """
Escapando a primeira aspa dupla \"""
Escapando todas as três aspas duplas \"\"\"
"""
```

### Delimitadores Estendidos de String

Você pode colocar uma *string* literal dentro de delimitadores estendidos para incluir caracteres especiais em uma *string* sem invocar seu efeito. Você coloca sua *string* entre aspas (`"`) e envolve isso com sinais de número (`#`). Por exemplo, imprimir a *string* literal `#"Linha 1\nLinha 2"#` imprime a sequência de escape de quebra de linha (`\n`) em vez de imprimir a *string* em duas linhas.

Se você precisar dos efeitos especiais de um caractere em uma *string* literal, combine o número de sinais de número dentro da *string* seguindo o caractere de escape (`\`). Por exemplo, se sua *string* for `#"Linha 1\nLinha 2"#` e você quiser quebrar a linha, você pode usar `#"Linha 1\#nLinha 2"#` em vez disso. Da mesma forma, `###"Linha1\###nLinha2"###` também quebra a linha.

As literais de *string* criadas usando delimitadores estendidos também podem ser literais de *string* de várias linhas. Você pode usar delimitadores estendidos para incluir o texto `"""` em uma *string* de várias linhas, substituindo o comportamento padrão que encerra a literal. Por exemplo:

```swift
let tresAspasDuplasAdicionais = #"""
Aqui estão mais três aspas duplas: """
"""#
```

## Inicializando uma String Vazia

Para criar um valor de `String` vazio como ponto de partida para construir uma *string* mais longa, você pode atribuir uma *string* vazia a uma variável ou inicializar uma nova instância de `String` com a sintaxe de inicializador:

```swift
var stringVazia = ""               // literal de string vazia
var outraStringVazia = String()  // sintaxe de inicializador
// essas duas strings estão ambas vazias e são equivalentes uma à outra
```

Descubra se um valor de `String` está vazio verificando sua propriedade Booleana `isEmpty`:

```swift
if stringVazia.isEmpty {
    print("Nada para ver aqui")
}
// Imprime "Nada para ver aqui"
```

## Interpolação de String

## Unicode
