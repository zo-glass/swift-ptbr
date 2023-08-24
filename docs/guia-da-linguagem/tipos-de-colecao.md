---
sidebar_position: 4
---

# Tipos de Coleção

## Organize dados usando arrays, sets, e dicionários.

O Swift fornece três principais tipos de coleção, conhecidos como *arrays*, *sets* e dicionários, para armazenar coleções de valores. *Arrays* são coleções ordenadas de valores. *Sets* são coleções não ordenadas de valores únicos. Dicionários são coleções não ordenadas de associações chave-valor.

![CollectionTypes_intro](https://docs.swift.org/swift-book/images/CollectionTypes_intro~dark@2x.png)

*Arrays*, *sets* e dicionários em Swift sempre deixam claro os tipos de valores e chaves que podem armazenar. Isso significa que você não pode inserir um valor do tipo errado em uma coleção por engano. Também significa que você pode ter confiança sobre o tipo de valores que irá recuperar de uma coleção.

> **Nota**
>
> Os tipos de *array*, *sets* e dicionário do Swift são implementados como coleções genéricas. Para saber mais sobre tipos genéricos e coleções, consulte [Genéricos](./genericos.md).

## Mutabilidade de Coleções

Se você cria um *array*, um *set* ou um dicionário, e o atribui a uma variável, a coleção que é criada será mutável. Isso significa que você pode alterar (ou mutar) a coleção depois de criá-la, adicionando, removendo ou alterando itens na coleção. Se você atribuir um *array*, um *set* ou um dicionário a uma constante, essa coleção será imutável, e seu tamanho e conteúdo não poderão ser alterados.

> **Nota**
>
> É uma boa prática criar coleções imutáveis em todos os casos em que a coleção não precisa ser alterada. Fazer isso torna mais fácil para você entender o seu código e permite que o compilador Swift otimize o desempenho das coleções que você cria.

## Arrays

Um *array* armazena valores do mesmo tipo em uma lista ordenada. O mesmo valor pode aparecer várias vezes em um *array* em posições diferentes.

> **Nota**
>
> O tipo `Array` do Swift é conectado à classe `NSArray` da Foundation.
>
> Para obter mais informações sobre o uso de `Array` com a Foundation e o Cocoa, consulte a seção [Ponte entre Array e NSArray](https://developer.apple.com/documentation/swift/array#2846730).

### Sintaxe abreviada do tipo Array

O tipo de um *array* em Swift é escrito completamente como `Array<Element>`, onde `Element` é o tipo de valores que o *array* pode armazenar. Você também pode escrever o tipo de um *array* de forma abreviada como `[Element]`. Embora as duas formas sejam funcionalmente idênticas, a forma abreviada é preferida e é utilizada ao longo deste guia ao se referir ao tipo de um *array*.

### Criando um Array Vazio

Você pode criar um *array* vazio de um certo tipo usando a sintaxe do inicializador:

```swift
var algunsInts: [Int] = []
print("algunsInts é do tipo [Int] com \(algunsInts.count) itens.")
// Imprime "algunsInts é do tipo [Int] com 0 itens."
```

Note que o tipo da variável `algunsInts` é inferido como `[Int]` a partir do tipo do inicializador.

Alternativamente, se o contexto já fornecer informações de tipo, como um argumento de função ou uma variável ou constante já tipada, você pode criar um *array* vazio com um literal de *array* vazio, que é escrito como `[]` (um par de colchetes vazios):

```swift
algunsInts.append(3)
// algunsInts agora contém 1 valor do tipo Int
algunsInts = []
// algunsInts agora é um array vazio, mas ainda é do tipo [Int]
```

### Criando um Array com um Valor Padrão

O tipo `Array` em Swift também oferece um inicializador para criar um *array* de um determinado tamanho com todos os seus valores definidos para o mesmo valor padrão. Você passa para esse inicializador um valor padrão do tipo apropriado (chamado de `repeating`): e o número de vezes que esse valor se repete no novo *array* (chamado de `count`):

```swift
var tresDoubles = Array(repeating: 0.0, count: 3)
// tresDoubles é do tipo [Double], e é igual a [0.0, 0.0, 0.0]
```

### Criando um Array ao Adicionar Dois Arrays Juntos

Você pode criar um novo *array* ao adicionar dois *arrays* existentes com tipos compatíveis usando o operador de adição (`+`). O tipo do novo *array* é inferido a partir do tipo dos dois *arrays* que você adiciona juntos:

```swift
var outroTresDoubles = Array(repeating: 2.5, count: 3)
// outroTresDoubles é do tipo [Double] e igual a [2.5, 2.5, 2.5]

var seisDoubles = tresDoubles + outroTresDoubles
// seisDoubles é inferido como [Double] e igual a [0.0, 0.0, 0.0, 2.5, 2.5, 2.5]
```

### Criando um Array com um Literal de Array

Você também pode inicializar um *array* com um literal de *array*, que é uma forma abreviada de escrever um ou mais valores como uma coleção de *array*. Um literal de *array* é escrito como uma lista de valores, separados por vírgulas, cercados por um par de colchetes:

```swift
[<#value 1#>, <#value 2#>, <#value 3#>]
```

O exemplo abaixo cria um *array* chamado `listaDeCompras` para armazenar valores do tipo `String`:

```swift
var listaDeCompras: [String] = ["Ovos", "Leite"]
// listaDeCompras foi inicializada com dois itens iniciais
```

A variável `listaDeCompras` é declarada como "um *array* de valores de string", escrito como `[String]`. Como este *array* específico especificou um tipo de valor como `String`, ele só pode armazenar valores do tipo `String`. Aqui, o array `listaDeCompras` é inicializado com dois valores de `String` (`"Eggs"` e `"Milk"`), escritos dentro de um literal de *array*.

> **Nota**
>
> O *array* `listaDeCompras` é declarado como uma variável (com o introduzido `var`) e não como uma constante (com o introduzido `let`), pois mais itens são adicionados à lista de compras nos exemplos a seguir.

Neste caso, o literal de *array* contém dois valores do tipo `String` e nada mais. Isso corresponde ao tipo declarado da variável `listaDeCompras` (um *array* que só pode conter valores do tipo `String`), e, portanto, a atribuição do literal de *array* é permitida como uma maneira de inicializar `listaDeCompras` com dois itens iniciais.

Graças à inferência de tipo do Swift, você não precisa escrever o tipo do *array* se estiver inicializando-o com um literal de *array* contendo valores do mesmo tipo. A inicialização de `listaDeCompras` poderia ter sido escrita de forma mais curta:

```swift
var listaDeCompras = ["Ovos", "Leite"]
```

Como todos os valores no literal de *array* são do mesmo tipo, o Swift pode inferir que `[String]` é o tipo correto a ser usado para a variável `listaDeCompras`.
