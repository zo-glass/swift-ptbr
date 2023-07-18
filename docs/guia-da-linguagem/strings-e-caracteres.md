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

## Mutabilidade de Strings

Você indica se uma determinada `String` pode ser modificada (ou mutada) atribuindo-a a uma variável (nesse caso, ela pode ser modificada) ou a uma constante (nesse caso, ela não pode ser modificada):

```swift
var stringVariavel = "Cavalo"
stringVariavel += " e carruagem"
// stringVariavel agora é "Cavalo e carruagem"

let stringConstante = "Highlander"
stringConstante += " e outro Highlander"
// isso gera um erro de compilação - uma string constante não pode ser modificada
```

> **Nota**
>
> Essa abordagem é diferente da mutação de *strings* em Objective-C e Cocoa, onde você escolhe entre duas classes (`NSString` e `NSMutableString`) para indicar se uma string pode ser mutada.

## As Strings são tipos de valor

O tipo `String` do Swift é um tipo de valor. Se você criar um novo valor de `String`, esse valor de `String` será copiado quando for passado para uma função ou método, ou quando for atribuído a uma constante ou variável. Em cada caso, uma nova cópia do valor de `String` existente é criada e a nova cópia é passada ou atribuída, não a versão original. Tipos de valor são descritos em [Estruturas e Enumerações São Tipos de Valor](./estruturas-e-classes.md/#estruturas-e-enumerações-são-tipos-de-valor).

O comportamento padrão de cópia de `String` do Swift garante que, quando uma função ou método lhe passa um valor de `String`, fica claro que você possui exatamente aquele valor de `String`, independentemente de onde ele tenha vindo. Você pode ter a certeza de que a *string* passada não será modificada a menos que você a modifique.

Nos bastidores, o compilador do Swift otimiza o uso de *strings* para que a cópia real ocorra apenas quando absolutamente necessário. Isso significa que você sempre obtém um ótimo desempenho ao trabalhar com *strings* como tipos de valor.

## Trabalhando com caracteres

Você pode acessar os valores individuais de `Character` de uma `string` iterando sobre a *string* com um loop for-in:

```swift
for caractere in "Cão!🐶" {
    print(caractere)
}
// C
// ã
// o
// !
// 🐶
```

O loop for-in é descrito em [Loops For-In](./controle-de-fluxo.md/#loops-for-in).

Alternativamente, você pode criar uma constante ou variável autônoma do tipo `Character` a partir de um literal de *string* de um único caractere, fornecendo uma anotação de tipo `Character`:

```swift
let pontoDeExclamacao: Character = "!"
```

Valores de `String` podem ser construídos passando um *array* de valores de `Character` como argumento para seu inicializador:

```swift
let caracteresDeGato: [Character] = ["G", "a", "t", "o", "!", "🐱"]
let stringDeGato = String(caracteresDeGato)
print(stringDeGato)
// Imprime "Gato!🐱"
```

## Concatenando Strings e Caracteres

Valores de `String` podem ser adicionados juntos (ou concatenados) usando o operador de adição (`+`) para criar um novo valor de `String`:

```swift
let string1 = "olá"
let string2 = " pessoal"
var bemVindo = string1 + string2
// bemVindo agora é igual a "olá pessoal"
```

Você também pode anexar um valor de `String` a uma variável de `String` existente usando o operador de atribuição de adição (`+=`):

```swift
var instrucao = "Olhem para cima"
instrucao += string2
// instrucao agora é igual a "Olhem para cima pessoal"
```

Você pode anexar um valor de `Caractere` a uma variável de `String` usando o método `append()` do tipo `String`:

```swift
let pontoDeExclamacao: Character = "!"
bemVindo.append(pontoDeExclamacao)
// bemVindo agora é igual a "olá pessoal!"
```

> **Nota**
>
> Você não pode anexar uma `String` ou `Character` a uma variável de `Character` existente, pois um valor de `Character` deve conter apenas um único caractere.

Se você estiver usando literais de *string* em várias linhas para construir as linhas de uma *string* mais longa, você deseja que cada linha na *string* termine com uma quebra de linha, incluindo a última linha. Por exemplo:

```swift
let mauComeco = """
    um
    dois
    """
let fim = """
    três
    """
print(mauComeco + fim)
// Imprime duas linhas:
// um
// doistrês


let bomComeco = """
    um
    dois

    """
print(bomComeco + fim)
// Imprime três linhas:
// um
// dois
// três
```

No código acima, a concatenação de `mauComeco` com `fim` produz uma *string* de duas linhas, o que não é o resultado desejado. Como a última linha de `mauComeco` não termina com uma quebra de linha, essa linha é combinada com a primeira linha de `fim`. Em contraste, ambas as linhas de `bomComeco` terminam com uma quebra de linha, portanto, quando ela é combinada com `fim`, o resultado possui três linhas, conforme esperado.

## Interpolação de String

A interpolação de *string* é uma maneira de construir um novo valor de `String` a partir de uma mistura de constantes, variáveis, literais e expressões, incluindo seus valores dentro de um literal de *string*. Você pode usar a interpolação de *string* tanto em literais de *string* de uma linha quanto em várias linhas. Cada item que você insere no literal de *string* é envolto em um par de parênteses, prefixado por uma barra invertida (`\`):

```swift
let multiplicador = 3
let mensagem = "\(multiplicador) vezes 2.5 é \(Double(multiplicador) * 2.5)"
// mensagem é "3 vezes 2.5 é 7.5"
```

No exemplo acima, o valor de `multiplicador` é inserido em um literal de *string* como `\(multiplicador)`. Esse marcador de posição é substituído pelo valor real de `multiplicador` quando a interpolação de *string* é avaliada para criar uma *string* real.

O valor de `multiplicador` também faz parte de uma expressão maior posteriormente na *string*. Essa expressão calcula o valor de `Double(multiplicador) * 2.5` e insere o resultado (`7.5`) na *string*. Nesse caso, a expressão é escrita como `\(Double(multiplicador) * 2.5)` quando ela é incluída dentro do literal de *string*.

Você pode usar delimitadores de *string* estendidos para criar *strings* contendo caracteres que, de outra forma, seriam tratados como uma interpolação de *string*. Por exemplo:

```swift
print(#"Escreva uma string interpolada em Swift usando \(multiplicador)."#)
// Imprime "Escreva uma string interpolada em Swift usando \(multiplicador)."
```

Para usar interpolação de *string* dentro de uma *string* que usa delimitadores estendidos, faça com que o número de sinais de número após a barra invertida corresponda ao número de sinais de número no início e no final da *string*. Por exemplo:

```swift
print(#"6 vezes 7 é \#(6 * 7)."#)
// Imprime "6 vezes 7 é 42."
```

> **Nota**
>
> As expressões que você escreve entre parênteses dentro de uma *string* interpolada não podem conter uma barra invertida (`\`), um retorno de carro ou uma quebra de linha não escapados. No entanto, elas podem conter outros literais de *string*.

## Unicode

O Unicode é um padrão internacional para codificar, representar e processar texto em diferentes sistemas de escrita. Ele permite representar quase qualquer caractere de qualquer idioma em uma forma padronizada, além de ler e escrever esses caracteres a partir de uma fonte externa, como um arquivo de texto ou página da *web*. Os tipos `String` e `Character` do Swift são totalmente compatíveis com o Unicode, conforme descrito nesta seção.

### Valores Escalares Unicode

Nos bastidores, o tipo `String` nativo do Swift é construído a partir de valores escalares Unicode. Um valor escalar Unicode é um número de 21 *bits* exclusivo para um caractere ou modificador, como `U+0061` para `LATIN SMALL LETTER A` (`"a"`), ou `U+1F425` para `FRONT-FACING BABY CHICK` (`"🐥"`).

Observe que nem todos os valores escalares Unicode de 21 bits são atribuídos a um caractere - alguns escalares são reservados para atribuições futuras ou para uso na codificação UTF-16. Valores escalares que foram atribuídos a um caractere geralmente também possuem um nome, como `LATIN SMALL LETTER A` e `FRONT-FACING BABY CHICK` nos exemplos acima.

### Conjuntos de Grafemas Estendidos

Cada instância do tipo `Character` em Swift representa um único conjunto de grafemas estendidos. Um conjunto de grafemas estendidos é uma sequência de um ou mais escalares Unicode que, quando combinados, produzem um único caractere legível por humanos.

Aqui está um exemplo. A letra `é` pode ser representada pelo único escalar Unicode `é`(`LATIN SMALL LETTER E WITH ACUTE`, ou `U+00E9`). No entanto, a mesma letra também pode ser representada por um par de escalares - uma letra `e` padrão (`LATIN SMALL LETTER E`, ou `U+0065`), seguida pelo escalar `COMBINING ACUTE ACCENT` (`U+0301`). O escalar `COMBINING ACUTE ACCENT` é aplicado graficamente ao escalar que o precede, transformando um `e` em um `é` quando é renderizado por um sistema de renderização de texto com suporte a Unicode.

Em ambos os casos, a letra `é` é representada como um único valor `Character` em Swift que representa um conjunto de grafemas estendidos. No primeiro caso, o conjunto contém um único escalar; no segundo caso, é um conjunto de dois escalares:

```swift
let eAgudo: Character = "\u{E9}" // é
let eAgudoCombinado: Character = "\u{65}\u{301}" // e seguido por  ́
// eAgudo é é, eAgudoCombinado é é
```

Conjuntos de grafemas estendidos são uma forma flexível de representar muitos caracteres complexos de scripts como um único valor `Character`. Por exemplo, sílabas Hangul do alfabeto coreano podem ser representadas como uma sequência pré-composta ou decomposta. Ambas essas representações se qualificam como um único valor `Character` em Swift:

```swift
let pré-composto: Character = "\u{D55C}"                  // 한
let descomposto: Character = "\u{1112}\u{1161}\u{11AB}"   // ᄒ, ᅡ, ᆫ
// pré-composto é 한, descomposto é 한
```

Conjuntos de grafemas estendidos permitem que escalares de marcas de fechamento (como `COMBINING ENCLOSING CIRCLE`, ou `U+20DD`) fechem outros escalares Unicode como parte de um único valor `Character`:

```swift
let eAgudoEnclausurado: Character = "\u{E9}\u{20DD}"
// eAgudoEnclausurado é é⃝
```

Escalares Unicode para símbolos indicadores regionais podem ser combinados em pares para formar um único valor `Character`, como essa combinação de `REGIONAL INDICATOR SYMBOL LETTER U` (`U+1F1FA`) e `REGIONAL INDICATOR SYMBOL LETTER S` (`U+1F1F8`):

```swift
let indicadorRegionalParaEUA: Character = "\u{1F1FA}\u{1F1F8}"
// indicadorRegionalParaEUA é 🇺🇸
```

## Contando Caracteres

Para obter a contagem dos valores de `Character` em uma *string*, use a propriedade "count" da *string*:

```swift
let menagerieIncomum = "Koala 🐨, Snail 🐌, Penguin 🐧, Dromedary 🐪"
print("menagerieIncomum tem \(menagerieIncomum.count) caracteres")
// Imprime "unusualMenagerie tem 40 caracteres"
```

Observe que o uso de agrupamentos de grafemas estendidos do Swift para valores de `Character` significa que a concatenação e a modificação de *strings* nem sempre afetam a contagem de caracteres da *string*.

Por exemplo, se você inicializar uma nova *string* com a palavra `cafe` de quatro caracteres e, em seguida, anexar um `COMBINING ACUTE ACCENT` (`U+0301`) ao final da *string*, a *string* resultante ainda terá uma contagem de caracteres de 4, com o quarto caractere sendo `é`, não `e`:

```swift
var palavra = "cafe"
print("o número de caracteres em \(palavra) é \(palavra.count)")
// Imprime "o número de caracteres em cafe é 4"

palavra += "\u{301}"    // COMBINING ACUTE ACCENT, U+0301

print("o número de caracteres em \(palavra) é \(palavra.count)")
// Imprime "o número de caracteres em café é 4"
```

> **Nota**
>
> Os agrupamentos de grafemas estendidos podem ser compostos por vários escalares Unicode. Isso significa que diferentes caracteres - e diferentes representações do mesmo caractere - podem exigir quantidades diferentes de memória para armazenar. Por causa disso, os caracteres no Swift não ocupam cada um a mesma quantidade de memória dentro da representação de uma *string*. Como resultado, o número de caracteres em uma *string* não pode ser calculado sem iterar pela *string* para determinar os limites dos agrupamentos de grafemas estendidos. Se você estiver trabalhando com valores de *string* especialmente longos, esteja ciente de que a propriedade `count` deve iterar sobre os escalares Unicode em toda a *string* para determinar os caracteres dessa *string*.
>
> A contagem dos caracteres retornada pela propriedade `count` nem sempre é a mesma que a propriedade `length` de um `NSString` que contém os mesmos caracteres. O comprimento de um `NSString` é baseado no número de unidades de código de 16 bits na representação UTF-16 da *string* e não no número de agrupamentos de grafemas estendidos Unicode na *string*.

## Acessando e Modificando uma String

Você acessa e modifica uma string por meio de seus métodos e propriedades, ou usando a sintaxe de subscrito.
