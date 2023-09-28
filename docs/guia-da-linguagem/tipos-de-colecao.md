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

A variável `listaDeCompras` é declarada como "um *array* de valores de string", escrito como `[String]`. Como este *array* específico especificou um tipo de valor como `String`, ele só pode armazenar valores do tipo `String`. Aqui, o array `listaDeCompras` é inicializado com dois valores de `String` (`"Ovos"` e `"Leite"`), escritos dentro de um literal de *array*.

> **Nota**
>
> O *array* `listaDeCompras` é declarado como uma variável (com o introduzido `var`) e não como uma constante (com o introduzido `let`), pois mais itens são adicionados à lista de compras nos exemplos a seguir.

Neste caso, o literal de *array* contém dois valores do tipo `String` e nada mais. Isso corresponde ao tipo declarado da variável `listaDeCompras` (um *array* que só pode conter valores do tipo `String`), e, portanto, a atribuição do literal de *array* é permitida como uma maneira de inicializar `listaDeCompras` com dois itens iniciais.

Graças à inferência de tipo do Swift, você não precisa escrever o tipo do *array* se estiver inicializando-o com um literal de *array* contendo valores do mesmo tipo. A inicialização de `listaDeCompras` poderia ter sido escrita de forma mais curta:

```swift
var listaDeCompras = ["Ovos", "Leite"]
```

Como todos os valores no literal de *array* são do mesmo tipo, o Swift pode inferir que `[String]` é o tipo correto a ser usado para a variável `listaDeCompras`.

### Acessando e Modificando um Array

Você acessa e modifica um *array* através de seus métodos e propriedades, ou usando a sintaxe de subscrito.

Para descobrir o número de itens em um *array*, verifique sua propriedade de contagem somente leitura:

```swift
print("A lista de compras contém \(listaDeCompras.count) itens.")
// Imprime "A lista de compras contém 2 itens."
```

Use a propriedade Booleana `isEmpty` como atalho para verificar se a propriedade `count` é igual a `0`:

```swift
if listaDeCompras.isEmpty {
    print("A lista de compras está vazia.")
} else {
    print("A lista de compras não está vazia.")
}
// Imprime "A lista de compras não está vazia."
```

Você pode adicionar um novo item ao final de um *array* chamando o método `append(_:)` do array:

```swift
listaDeCompras.append("Farinha")
// Agora a lista de compras contém 3 itens, e alguém está fazendo panquecas
```

Alternativamente, adicione um *array* de um ou mais itens compatíveis usando o operador de atribuição de adição (`+=`):

```swift
listaDeCompras += ["Fermento em Pó"]
// Agora a lista de compras contém 4 itens
listaDeCompras += ["Creme de Chocolate", "Queijo", "Manteiga"]
// Agora a lista de compras contém 7 itens
```

Recupere um valor do *array* usando a sintaxe de subscrito, passando o índice do valor que você deseja obter dentro de colchetes imediatamente após o nome do *array*:

```swift
var primeiroItem = listaDeCompras[0]
// primeiroItem é igual a "Ovos"
```

> **Nota**
>
> O primeiro item no *array* tem um índice `0`, não `1`. *Arrays* em Swift sempre têm índices começando em zero.

Você pode usar a sintaxe de subscrito para alterar um valor existente em um índice específico:

```swift
listaDeCompras[0] = "Seis ovos"
// o primeiro item na lista agora é igual a "Seis ovos" em vez de "Ovos"
```

Quando você usa a sintaxe de subscrito, o índice que você especifica precisa ser válido. Por exemplo, escrever `listaDeCompras[listaDeCompras.count] = "Sal"` para tentar adicionar um item ao final do *array* resulta em um erro de tempo de execução.

Você também pode usar a sintaxe de subscrito para alterar um intervalo de valores de uma vez, mesmo que o conjunto de valores de substituição tenha um comprimento diferente do intervalo que você está substituindo. O exemplo a seguir substitui `"Creme de Chocolate"`, `"Queijo"` e `"Manteiga"` por `"Bananas"` e `"Maçãs"`:

```swift
listaDeCompras[4...6] = ["Bananas", "Maçãs"]
// Agora a lista de compras contém 6 itens
```

Para inserir um item no *array* em um índice especificado, chame o método `insert(_:at:)` do *array*:

```swift
listaDeCompras.insert("Xarope de Bordo", at: 0)
// Agora a lista de compras contém 7 itens
// "Xarope de Bordo" agora é o primeiro item na lista
```

Essa chamada ao método `insert(_:at:)` insere um novo item com o valor `"Xarope de Bordo"` no início da lista de compras, indicado por um índice `0`.

Da mesma forma, você remove um item do *array* com o método `remove(at:)`. Esse método remove o item no índice especificado e retorna o item removido (embora você possa ignorar o valor retornado se não precisar dele):

```swift
let xaropeDeBordo = listaDeCompras.remove(at: 0)
// o item que estava no índice 0 acabou de ser removido
// agora a lista de compras contém 6 itens, e nenhum Xarope de Bordo
// a constante xaropeDeBordo agora é igual à string "Xarope de Bordo" removida
```

> **Nota**
>
> Se você tentar acessar ou modificar um valor de um índice que está fora dos limites existentes de um *array*, você irá provocar um erro de tempo de execução. Você pode verificar se um índice é válido antes de usá-lo comparando-o com a propriedade `count` do *array*. O maior índice válido em um *array* é `count - 1` porque os *arrays* têm índices a partir de zero - no entanto, quando count é `0` (significando que o *array* está vazio), não existem índices válidos.


Quaisquer lacunas em um *array* são fechadas quando um item é removido, e assim o valor no índice `0` mais uma vez é igual a `"Seis ovos"`:

```swift
primeiroItem = listaDeCompras[0]
// primeiroItem agora é igual a "Seis ovos"
```

Se você quiser remover o último item de um *array*, use o método `removeLast()` em vez do método `remove(at:)` para evitar a necessidade de consultar a propriedade `count` do *array*. Assim como o método `remove(at:)`, o `removeLast()` retorna o item removido:

```swift
let macas = listaDeCompras.removeLast()
// o último item no array acabou de ser removido
// agora a lista de compras contém 5 itens, e nenhuma maçã
// a constante macas agora é igual à string "Maçãs" removida
```

### Iterando sobre um Array

Você pode iterar sobre o conjunto completo de valores em um *array* com o *loop* `for-in`:

```swift
for item in listaDeCompras {
    print(item)
}
// Seis ovos
// Leite
// Farinha
// Fermento em pó
// Bananas
```

Se você precisa do índice inteiro de cada elemento, bem como o seu valor, utilize o método `enumerated()` para iterar sobre o *array*. Para cada elemento no *array*, o método `enumerated()` retorna uma tupla composta por um inteiro e o elemento. Os inteiros começam em zero e contam de um em um para cada elemento; se você percorrer todo o *array*, esses inteiros correspondem aos índices dos elementos. Você pode decompor a tupla em constantes ou variáveis temporárias como parte da iteração:

```swift
for (indice, valor) in listaDeCompras.enumerated() {
    print("Item \(indice + 1): \(valor)")
}
// Item 1: Seis ovos
// Item 2: Leite
// Item 3: Farinha
// Item 4: Fermento em pó
// Item 5: Bananas
```

Para mais informações sobre o *loop* `for-in`, consulte [Loops For-In](./controle-de-fluxo.md/#loops-for-in).

## Sets

Um *set* armazena valores distintos do mesmo tipo em uma coleção sem uma ordem definida. Você pode usar um *set* em vez de um *array* quando a ordem dos itens não é importante, ou quando você precisa garantir que um item apareça apenas uma vez.

> **Nota**
>
> O tipo `Set` em Swift é conectado à classe `NSSet` da Foundation.
>
> Para mais informações sobre como usar `Set` com a Foundation e o Cocoa, consulte [Bridging Between Set and NSSet](https://developer.apple.com/documentation/swift/set#2845530).

### Valores de Hash para Tipos de Set

Um tipo precisa ser *hashable* para ser armazenado em um *set* — ou seja, o tipo deve fornecer uma maneira de calcular um valor de *hash* para si mesmo. Um valor de *hash* é um valor `Int` que é o mesmo para todos os objetos que se comparam de maneira igual, de forma que se `a == b`, o valor de *hash* de `a` é igual ao valor de *hash* de `b`.

Todos os tipos básicos de Swift (como `String`, `Int`, `Double` e `Bool`) são *hashable* por padrão, e podem ser usados como tipos de valor de *set* ou tipos de chave de dicionário. *Enumeration case values* sem valores associados (conforme descrito em [Enumerações](./enumeracoes.md)) também são *hashable* por padrão.

> **Nota**
>
> Você pode usar seus próprios tipos personalizados como tipos de valor de *set* ou tipos de chave de dicionário ao fazê-los seguir o protocolo `Hashable` da biblioteca padrão do Swift. Para obter informações sobre a implementação do método exigido `hash(into:)`, consulte [Hashable](https://developer.apple.com/documentation/swift/hashable). Para informações sobre como conformar-se a protocolos, consulte [Protocols](./protocolos.md).

### Sintaxe de Tipo de Set

O tipo de um *set* em Swift é escrito como `Set<Element>`, onde `Element` é o tipo que o *set* está autorizado a armazenar. Ao contrário de *arrays*, *sets* não possuem uma forma abreviada equivalente.

### Criando e Inicializando um Set Vazio

Você pode criar um *set* vazio de um certo tipo usando a sintaxe de inicialização:

```swift
var letras = Set<Character>()
print("letras é do tipo Set<Character> com \(letras.count) itens.")
// Imprime "letras é do tipo Set<Character> com 0 itens."
```

> **Nota**
>
> O tipo da variável `letras` é inferido como `Set<Character>`, a partir do tipo do inicializador.

Alternativamente, se o contexto já fornecer informações de tipo, como um argumento de função ou uma variável ou constante já tipada, você pode criar um *set* vazio com um literal de *array* vazio:

```swift
letras.insert("a")
// letras agora contém 1 valor do tipo Character
letras = []
// letras agora é um set vazio, mas ainda é do tipo Set<Character>
```

### Criando um Set com um Literal de Array

Você também pode inicializar um *set* com um literal de *array*, como uma forma abreviada de escrever um ou mais valores como uma coleção de *set*.

O exemplo abaixo cria um *set* chamado `generosFavoritos` para armazenar valores do tipo `String`:

```swift
var generosFavoritos: Set<String> = ["Rock", "Clássica", "Hip hop"]
// generosFavoritos foi inicializado com três itens iniciais
```

A variável `generosFavoritos` é declarada como "um *set* de valores `String`", escrito como `Set<String>`. Porque este *set* específico especificou um tipo de valor de `String`, ele só pode armazenar valores do tipo `String`. Aqui, o *set* `generosFavoritos` é inicializado com três valores do tipo `String` (`"Rock"`, `"Clássica"` e `"Hip hop"`), escritos dentro de um literal de *array*.

> **Nota**
>
> O *set* `generosFavoritos` é declarado como uma variável (usando o introduzidor `var`) e não como uma constante (usando o introduzidor `let`) porque itens são adicionados e removidos nos exemplos a seguir.

O tipo de *set* não pode ser inferido apenas a partir de um literal de *array*, portanto, o tipo `Set` deve ser explicitamente declarado. No entanto, devido à inferência de tipo do Swift, você não precisa escrever o tipo dos elementos do *set* se estiver inicializando-o com um literal de *array* que contém valores de apenas um tipo. A inicialização de `generosFavoritos` poderia ter sido escrita de forma mais curta em vez disso:

```swift
var generosFavoritos: Set = ["Rock", "Clássica", "Hip hop"]
```

Como todos os valores no literal da *array* são do mesmo tipo, o Swift pode inferir que `Set<String>` é o tipo correto a ser usado para a variável `generosFavoritos`.

### Acessando e Modificando um Set

Você acessa e modifica um *set* por meio de seus métodos e propriedades.

Para descobrir o número de itens em um *set*, verifique sua propriedade de somente leitura `count`:

```swift
print("Eu tenho \(generosFavoritos.count) gêneros de música favoritos.")
// Imprime "Eu tenho 3 gêneros de música favoritos."
```

Utilize a propriedade booleana `isEmpty` como um atalho para verificar se a propriedade `count` é igual a `0`:

```swift
if generosFavoritos.isEmpty {
    print("No que diz respeito à música, eu não sou exigente.")
} else {
    print("Eu tenho preferências musicais específicas.")
}
// Imprime "Eu tenho preferências musicais específicas."
```

Você pode adicionar um novo item a um *set* chamando o método `insert(_:)` do *set*:

```swift
generosFavoritos.insert("Jazz")
// generosFavoritos agora contém 4 itens
```

Você pode remover um item de um *set* chamando o método `remove(_:)` do *set*, que remove o item se ele for um membro do *set* e retorna o valor removido, ou retorna `nil` se o *set* não o continha. Alternativamente, todos os itens em um *set* podem ser removidos com o método `removeAll()`.

```swift
if let generoRemovido = generosFavoritos.remove("Rock") {
    print("\(generoRemovido)? Já superei.")
} else {
    print("Nunca liguei muito para isso.")
}
// Imprime "Rock? Já superei."
```

Para verificar se um *set* contém um item específico, utilize o método `contains(_:)`.

```swift
if generosFavoritos.contains("Funk") {
    print("Eu me animo com o bom ritmo.")
} else {
    print("Está muito animado aqui.")
}
// Imprime "Está muito animado aqui."
```

### Iterando sobre um Set

Você pode iterar sobre os valores em um *set* com um *loop* `for`-`in`.

```swift
for genero in generosFavoritos {
print("\(genero)")
}
// Clássico
// Jazz
// Hip hop
```

Para obter mais informações sobre o *loop* `for`-`in`, consulte [Loops For-In](./controle-de-fluxo.md/#loops-for-in).

O tipo `Set` do Swift não possui uma ordenação definida. Para iterar sobre os valores de um *set* em uma ordem específica, utilize o método `sorted()`, que retorna os elementos do *set* como um *array* ordenado usando o operador `<`.

```swift
for genero in generosFavoritos.sorted() {
print("\(genero)")
}
// Clássico
// Hip hop
// Jazz
```

## Realizando Operações de Set

Você pode realizar eficientemente operações fundamentais de *set*, como combinar dois *sets*, determinar quais valores dois *sets* têm em comum ou determinar se dois *sets* contêm todos, alguns ou nenhum dos mesmos valores.

### Operações Fundamentais de Set

A ilustração abaixo representa dois *sets* - `a` e `b` - com os resultados de várias operações de *sets* representadas pelas regiões sombreadas.

![setVennDiagram](https://docs.swift.org/swift-book/images/setVennDiagram~dark@2x.png)

- Utilize o método `intersection(_:)` para criar um novo *set* com apenas os valores comuns a ambos os *sets*.
- Utilize o método `symmetricDifference(_:)` para criar um novo *set* com valores em qualquer um dos *sets*, mas não em ambos.
- Utilize o método `union(_:)` para criar um novo *set* com todos os valores em ambos os *sets*.
- Utilize o método `subtracting(_:)` para criar um novo *set* com valores que não estão no *set* especificado.

```swift
let digitosImpares: Set = [1, 3, 5, 7, 9]
let digitosPares: Set = [0, 2, 4, 6, 8]
let numerosPrimosDeUmDigito: Set = [2, 3, 5, 7]

digitosImpares.union(digitosPares).sorted()
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
digitosImpares.intersection(digitosPares).sorted()
// []
digitosImpares.subtracting(numerosPrimosDeUmDigito).sorted()
// [1, 9]
digitosImpares.symmetricDifference(numerosPrimosDeUmDigito).sorted()
// [1, 2, 9]
```

### Pertinência a Sets e Igualdade

A ilustração abaixo representa três *sets* - `a`, `b` e `c` - com regiões sobrepostas representando elementos compartilhados entre *sets*. O *set* `a` é um *superset* do *set* `b`, pois `a` contém todos os elementos de `b`. Inversamente, o *set* `b` é um *subset* do *set* `a`, porque todos os elementos em `b` também estão contidos em `a`. O *set* `b` e o *set* `c` são disjuntos entre si, porque não compartilham elementos em comum.

![setEulerDiagram](https://docs.swift.org/swift-book/images/setEulerDiagram~dark@2x.png)

- Utilize o operador "é igual" (`==`) para determinar se dois *sets* contêm todos os mesmos valores.
- Utilize o método `isSubset(of:)` para determinar se todos os valores de um *set* estão contidos no *set* especificado.
- Utilize o método `isSuperset(of:)` para determinar se um *set* contém todos os valores de um *set* especificado.
- Utilize os métodos `isStrictSubset(of:)` ou `isStrictSuperset(of:)` para determinar se um *set* é um *subset* ou *superset*, mas não é igual a um *set* especificado.
- Utilize o método `isDisjoint(with:)` para determinar se dois *sets* não têm valores em comum.

```swift
let animaisDeCasa: Set = ["🐶", "🐱"]
let animaisDaFazenda: Set = ["🐮", "🐔", "🐑", "🐶", "🐱"]
let animaisDaCidade: Set = ["🐦", "🐭"]

animaisDeCasa.isSubset(of: animaisDaFazenda)
// true
animaisDaFazenda.isSuperset(of: animaisDeCasa)
// true
animaisDaFazenda.isDisjoint(with: animaisDaCidade)
// true
```

## Dicionários

Um dicionário armazena associações entre chaves do mesmo tipo e valores do mesmo tipo em uma coleção sem ordenação definida. Cada valor está associado a uma chave única, que atua como um identificador para esse valor dentro do dicionário. Ao contrário dos itens em um *array*, os itens em um dicionário não têm uma ordem especificada. Você usa um dicionário quando precisa procurar valores com base em seu identificador, de maneira semelhante à forma como um dicionário do mundo real é usado para procurar a definição de uma palavra específica.

> **Nota**
>
> O tipo `Dictionary` do Swift é conectado à classe `NSDictionary` da Foundation.
>
> Para obter mais informações sobre o uso de `Dictionary` com Foundation e Cocoa, consulte a seção [Ponte entre Dictionary e NSDictionary](https://developer.apple.com/documentation/swift/dictionary#2846239).

### Sintaxe Abreviada de Tipo de Dicionário

O tipo de um dicionário em Swift é escrito por completo como `Dictionary<Key, Value>`, onde `Key` é o tipo de valor que pode ser usado como chave do dicionário, e `Value` é o tipo de valor que o dicionário armazena para essas chaves.

> **Nota**
>
> O tipo de `Key` de um dicionário deve estar em conformidade com o protocolo `Hashable`, assim como o tipo de valor de um *set*.

Você também pode escrever o tipo de um dicionário na forma abreviada como `[Key: Value]`. Embora as duas formas sejam funcionalmente idênticas, a forma abreviada é preferida e é usada em todo este guia ao se referir ao tipo de um dicionário.

### Criando um Dicionário Vazio

Assim como com *arrays*, você pode criar um `Dictionary` vazio de um determinado tipo usando a sintaxe de inicialização:

```swift
var nomesDeInteiros: [Int: String] = [:]
// nomesDeInteiros é um dicionário vazio do tipo [Int: String]
```

Este exemplo cria um dicionário vazio do tipo `[Int: String]` para armazenar nomes legíveis por humanos de valores inteiros. Suas chaves são do tipo `Int` e seus valores são do tipo `String`.

Se o contexto já fornece informações sobre o tipo, você pode criar um dicionário vazio com um literal de dicionário vazio, que é escrito como `[:]` (dois pontos dentro de um par de colchetes):

```swift
nomesDeInteiros[16] = "dezesseis"
// nomesDeInteiros agora contém 1 par chave-valor
nomesDeInteiros = [:]
// nomesDeInteiros é novamente um dicionário vazio do tipo [Int: String]
```

### Criando um Dicionário com um Literal de Dicionário

Você também pode inicializar um dicionário com um literal de dicionário, que tem uma sintaxe semelhante ao literal de *array* visto anteriormente. Um literal de dicionário é uma forma abreviada de escrever um ou mais pares chave-valor como uma coleção de `Dictionary`.

Um par chave-valor é uma combinação de uma chave e um valor. Em um literal de dicionário, a chave e o valor em cada par chave-valor são separados por dois pontos. Os pares chave-valor são escritos como uma lista, separados por vírgulas, cercados por um par de colchetes:

```swift
[<#key 1#>: <#value 1#>, <#key 2#>: <#value 2#>, <#key 3#>: <#value 3#>]
```

O exemplo abaixo cria um dicionário para armazenar os nomes de aeroportos internacionais. Neste dicionário, as chaves são códigos de três letras da Associação Internacional de Transporte Aéreo e os valores são os nomes dos aeroportos:

```swift
var aeroportos: [String: String] = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
```

O dicionário `aeroportos` é declarado como tendo o tipo `[String: String]`, o que significa "um `Dictionary` cujas chaves são do tipo `String` e cujos valores também são do tipo `String`".

> **Nota**
>
> O dicionário `aeroportos` é declarado como uma variável (com o *introducer* `var`) e não como uma constante (com o *introducer* `let`) porque mais aeroportos são adicionados ao dicionário nos exemplos a seguir.

O dicionário `aeroportos` é inicializado com um literal de dicionário contendo dois pares chave-valor. O primeiro par tem uma chave `"YYZ"` e um valor `"Toronto Pearson"`. O segundo par tem uma chave `"DUB"` e um valor `"Dublin"`.

Este literal de dicionário contém dois pares de tipo `String: String`. Esse tipo chave-valor corresponde ao tipo declarado da variável `aeroportos` (um dicionário com chaves do tipo `String` e valores do tipo `String`), portanto, a atribuição do literal de dicionário é permitida como uma maneira de inicializar o dicionário `aeroportos` com dois itens iniciais.

Assim como com *arrays*, você não precisa escrever o tipo do dicionário se estiver inicializando-o com um literal de dicionário cujas chaves e valores tenham tipos consistentes. A inicialização de `aeroportos` poderia ter sido escrita de forma mais concisa da seguinte maneira:

```swift
var aeroportos = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
```

Como todas as chaves no literal são do mesmo tipo entre si, e da mesma forma todos os valores são do mesmo tipo entre si, o Swift pode inferir que `[String: String]` é o tipo correto a ser usado para o dicionário `aeroportos`.

### Acessando e Modificando um Dicionário

Você acessa e modifica um dicionário por meio de seus métodos e propriedades ou utilizando a sintaxe de subscrito.

Assim como em um *array*, você descobre o número de itens em um `Dictionary` verificando sua propriedade de somente leitura `count`:

```swift
print("O dicionário de aeroportos contém \(aeroportos.count) itens.")
// Imprime "O dicionário de aeroportos contém 2 itens."
```

Utilize a propriedade booleana `isEmpty` como atalho para verificar se a propriedade `count` é igual a `0`:

```swift
if aeroportos.isEmpty {
    print("O dicionário de aeroportos está vazio.")
} else {
    print("O dicionário de aeroportos não está vazio.")
}
// Imprime "O dicionário de aeroportos não está vazio."
```

Você pode adicionar um novo item a um dicionário com a sintaxe de subscrito. Utilize uma nova chave do tipo apropriado como índice do subscrito e atribua um novo valor do tipo apropriado:

```swift
aeroportos["LHR"] = "Londres"
// Agora o dicionário de aeroportos contém 3 itens
```

Você também pode usar a sintaxe de subscrito para alterar o valor associado a uma chave específica:

```swift
aeroportos["LHR"] = "London Heathrow"
// O valor para "LHR" foi alterado para "London Heathrow"
```

Como alternativa à subscrita, utilize o método `updateValue(_:forKey:)` de um dicionário para definir ou atualizar o valor de uma chave específica. Assim como nos exemplos de subscrita acima, o método `updateValue(_:forKey:)` define um valor para uma chave se ela não existir, ou atualiza o valor se a chave já existir. No entanto, ao contrário de uma subscrita, o método `updateValue(_:forKey:)` retorna o valor antigo após realizar a atualização. Isso permite verificar se uma atualização ocorreu.

O método `updateValue(_:forKey:)` retorna um valor opcional do tipo de valor do dicionário. Por exemplo, para um dicionário que armazena valores do tipo `String`, o método retorna um valor do tipo `String?`, ou seja, "String opcional". Esse valor opcional contém o valor antigo para aquela chave, se existia antes da atualização, ou `nil` se nenhum valor existia:

```swift
if let valorAntigo = aeroportos.updateValue("Aeroporto de Dublin", forKey: "DUB") {
    print("O valor antigo para DUB era \(valorAntigo).")
}
// Imprime "O valor antigo para DUB era Dublin."
```

Você também pode usar a sintaxe de subscrito para recuperar um valor do dicionário para uma chave específica. Como é possível solicitar uma chave para a qual não existe valor, o subscrito de um dicionário retorna um valor opcional do tipo de valor do dicionário. Se o dicionário contiver um valor para a chave solicitada, o subscrito retorna um valor opcional contendo o valor existente para essa chave. Caso contrário, o subscrito retorna `nil`:

```swift
if let nomeDoAeroporto = aeroportos["DUB"] {
    print("O nome do aeroporto é \(nomeDoAeroporto).")
} else {
    print("Esse aeroporto não está no dicionário de aeroportos.")
}
// Imprime "O nome do aeroporto é Aeroporto de Dublin."
```

Você pode usar a sintaxe de subscrito para remover um par chave-valor de um dicionário atribuindo um valor de `nil` para essa chave:

```swift
aeroportos["APL"] = "Apple Internacional"
// "Apple Internacional" não é o aeroporto real para APL, então remova-o
aeroportos["APL"] = nil
// APL foi removido do dicionário
```

Alternativamente, remova um par chave-valor de um dicionário com o método `removeValue(forKey:)`. Este método remove o par chave-valor se ele existir e retorna o valor removido, ou retorna `nil` se nenhum valor existia:

```swift
if let valorRemovido = aeroportos.removeValue(forKey: "DUB") {
    print("O nome do aeroporto removido é \(valorRemovido).")
} else {
    print("O dicionário de aeroportos não contém um valor para DUB.")
}
// Imprime "O nome do aeroporto removido é Aeroporto de Dublin."
```
