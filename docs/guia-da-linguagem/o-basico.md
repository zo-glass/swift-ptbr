---
sidebar_position: 1
---

# O Básico

## Trabalhe com tipos comuns de dados e escreva a sintaxe básica.

Swift é uma linguagem de programação para desenvolvimento de aplicativos iOS, macOS, watchOS e tvOS. Se você tem experiência em desenvolvimento em C ou Objective-C, muitas partes do Swift serão familiares para você.

O Swift fornece suas próprias versões de todos os tipos fundamentais de C e Objective-C, inclusive `Int` para números inteiros, `Double` e `Float` para valores de ponto flutuante, `Bool` para valores booleanos e `String` para dados textuais. O Swift também fornece versões poderosas dos três tipos principais de coleção, `Array`, `Set` e `Dictionary`, conforme descrito em [Tipos de Coleção](tipos-de-colecao.md).

Como em C, Swift usa variáveis ​​para armazenar e referir-se a valores por um nome identificador. O Swift também faz uso extensivo de variáveis ​​cujos valores não podem ser alterados. Elas são conhecidas como constantes e são muito mais poderosas do que as constantes em C. As constantes são usadas em todo o Swift para tornar o código mais seguro e mais claro na intenção quando você trabalha com valores que não precisam ser alterados.

Além dos tipos familiares, o Swift apresenta tipos avançados não encontrados em Objective-C, como tuplas. As tuplas permitem que você crie e transmita agrupamentos de valores. Você pode usar uma tupla para retornar vários valores de uma função como um único valor composto.

Swift também apresenta tipos opcionais, que lidam com a ausência de um valor. Os opcionais dizem "existe um valor e é igual a x " ou " não existe nenhum valor". O uso de opcionais é semelhante ao uso de ponteiros nulos em Objective-C, mas eles funcionam para qualquer tipo, não apenas para classes. Os opcionais não são apenas mais seguros e expressivos do que ponteiros nulos em Objective-C, mas também estão no centro de muitos dos recursos mais poderosos do Swift.

Swift é uma linguagem *type-safe*, o que significa que a linguagem ajuda você a ser claro sobre os tipos de valores com os quais seu código pode trabalhar. Se parte do seu código exigir uma `String`, o segurança de tipos impedirá que você passe um `Int` por engano. Da mesma forma, o segurança de tipos evita que você passe acidentalmente uma `String` opcional para um trecho de código que requer uma `String` não opcional. O segurança de tipos ajuda a detectar e corrigir erros o mais cedo possível no processo de desenvolvimento.

## Constantes e Variáveis

Constantes e variáveis ​​associam um nome (como `numeroMaximoDeTentativasDeLogin` ou `mensagemDeBoasVindas`) a um valor de um tipo específico (como o número `10` ou a *string* `"Olá"` ). O valor de uma constante não pode ser alterado depois de definido, enquanto uma variável pode ser definida com um valor diferente no futuro.

### Declarando Constantes e Variáveis

Constantes e variáveis ​​devem ser declaradas antes de serem usadas. Você declara constantes com a palavra-chave `let` e variáveis ​​com a palavra-chave `var`. Aqui está um exemplo de como constantes e variáveis ​​podem ser usadas para rastrear o número de tentativas de login feitas por um usuário:

```swift
let numeroMaximoDeTentativasDeLogin = 10
var tentativaDeLoginAtual = 0
```

Este código pode ser lido como:

"Declare uma nova constante chamada `numeroMaximoDeTentativasDeLogin`, e dê a ela um valor de `10`. Em seguida, declare uma nova variável chamada `tentativaDeLoginAtual`, e dê a ela um valor inicial de `0`."

Neste exemplo, o número máximo de tentativas de login permitidas é declarado como uma constante, porque o valor máximo nunca muda. O contador de tentativas de login atual é declarado como uma variável, porque esse valor deve ser incrementado após cada tentativa de login com falha.

Você pode declarar várias constantes ou várias variáveis ​​em uma única linha, separando-as por vírgulas:

```swift
var x = 0.0, y = 0.0, z = 0.0
```

> **Nota**
>
> Se um valor armazenado em seu código não mudar, sempre declare-o como uma constante com a palavra-chave `let`. Use variáveis ​​apenas para armazenar valores que precisam poder mudar.

### Type Annotations

Você pode fornecer uma *type annotation* ao declarar uma constante ou variável, para ser claro sobre o tipo de valores que a constante ou variável pode armazenar. Escreva uma *type annotation* colocando dois pontos após o nome da constante ou variável, seguido de um espaço, seguido do nome do tipo a ser usado.

Este exemplo fornece uma *type annotation* para uma variável chamada `mensagemDeBoasVindas`, para indicar que a variável pode armazenar valores do tipo `String`:

```swift
var mensagemDeBoasVindas: String
```

Os dois pontos na declaração significam "…do tipo…", então o código acima pode ser lido como:

"Declare uma variável chamada `mensagemDeBoasVindas` que é do tipo `Sting`."

A frase "do tipo `String`" significa "pode armazenar qualquer valor do tipo `String`". Pense nisso como significando "o tipo de coisa" (ou "a classe de coisa") que pode ser armazenado.

A variável `mensagemDeBoasVindas` agora pode ser definida para qualquer valor do tipo *string* sem erro:

```swift
mensagemDeBoasVindas = "Olá"
```

Você pode definir várias variáveis ​​relacionadas do mesmo tipo em uma única linha, separando-as por vírgulas, com uma única anotação de tipo após o nome da variável final:

```swift
var vermelho, verde, azul: Double
```

> **Nota**
>
> É raro precisar escrever *type annotations* na prática. Se você fornecer um valor inicial para uma constante ou variável no ponto em que é definido, o Swift quase sempre pode inferir o tipo a ser usado para essa constante ou variável, conforme descrito em [Segurança de tipo e Inferência de tipo](#segurança-de-tipo-e-inferência-de-tipo) . No exemplo `mensagemDeBoasVindas` acima, nenhum valor inicial é fornecido e, portanto, o tipo da variável `mensagemDeBoasVindas` é especificado com uma *type annotation* em vez de ser inferido de um valor inicial.

### Nomeando Constantes e Variáveis

Os nomes de constantes e variáveis ​​podem conter praticamente qualquer caractere, incluindo caracteres *Unicode*:

```swift
let π = 3.14159
let 你好 = "你好世界"
let 🐶🐮 = "cachorrovaca"
```

Os nomes de constantes e variáveis ​​não podem conter caracteres de espaço em branco, símbolos matemáticos, setas, valores escalares Unicode de uso privado ou caracteres *line-drawing* e *box-drawing*. Também não podem começar com um número, embora os números possam ser incluídos em outra parte do nome.

Depois de declarar uma constante ou variável de um determinado tipo, você não pode declará-la novamente com o mesmo nome ou alterá-la para armazenar valores de um tipo diferente. Nem você pode transformar uma constante em uma variável ou uma variável em uma constante.

> **Nota**
>
> Se você precisar dar a uma constante ou variável o mesmo nome de uma palavra-chave reservada do Swift, coloque a palavra-chave entre crases (```) ao usá-la como um nome. No entanto, evite usar palavras-chave como nomes, a menos que você não tenha escolha.

Você pode alterar o valor de uma variável existente para outro valor de tipo compatível. Neste exemplo, o valor de `boasVindasAmigaveis` é alterado de `Olá!` para `Bonjour!`:

```swift
var boasVindasAmigaveis = "Olá!"
boasVindasAmigaveis = "Bonjour!"
// boasVindasAmigaveis agora é "Bonjour!"
```

Ao contrário de uma variável, o valor de uma constante não pode ser alterado depois de definido. Tentar fazer isso é relatado como um erro quando seu código é compilado:

```swift
let nomeDaLinguagem = "Swift"
nomeDaLinguagem = "Swift++"
// Este é um erro de compilação: nomeDaLinguagem não pode ser alterado.
```

### Imprimindo Constantes e Variáveis

Você pode imprimir o valor atual de uma constante ou variável com a função `print(_:separator:terminator:)`:

```swift
print(boasVindasAmigaveis)
// Imprime "Bonjour!"
```

A função `print(_:separator:terminator:)` é uma função global que imprime um ou mais valores em uma saída apropriada. No Xcode, por exemplo, a função `print(_:separator:terminator:)` imprime sua saída no painel “console” do Xcode. O parâmetro `separator` e o `terminator` possuem valores padrão, portanto, você pode omiti-los ao chamar essa função. Por padrão, a função termina a linha que imprime adicionando uma quebra de linha. Para imprimir um valor sem uma quebra de linha depois dele, passe uma string vazia como *terminador* — por exemplo, `print(algumValor, terminator: "")`. Para obter informações sobre parâmetros com valores padrão, consulte [Valores de Parâmetro Padrão](./funcoes.md/#valores-de-parâmetro-padrão).

O Swift usa a interpolação de strings para incluir o nome de uma constante ou variável como um marcador de posição em uma string mais longa, e para solicitar que o Swift o substitua pelo valor atual dessa constante ou variável. Coloque o nome entre parênteses e escape com uma barra invertida antes do parêntese de abertura:

```swift
print("O valor atual de boasVindasAmigaveis é \(boasVindasAmigaveis)")
// Imprime "O valor atual de boasVindasAmigaveis é Bonjour!"
```

> **Nota**
>
> Todas as opções que você pode usar com a interpolação de strings são descritas em [Interpolação de Strings](./strings-e-caracteres.md/#interpolação-de-string).

## Comentários

Use comentários para incluir texto não executável em seu código, como uma nota ou lembrete para você mesmo. Comentários são ignorados pelo compilador Swift quando seu código é compilado.

Os comentários em Swift são muito semelhantes aos comentários em C. Os comentários de uma linha começam com duas barras (`//`):

```swift
// Este é um comentário.
```

Os comentários de várias linhas começam com uma barra seguida de um asterisco (`/*`) e terminam com um asterisco seguido de uma barra (`*/`):

```swift
/* Isso também é um comentário
mas é escrito em várias linhas. */
```

Ao contrário dos comentários multilinha em C, os comentários multilinha em Swift podem ser aninhados dentro de outros comentários multilinha. Você escreve comentários aninhados iniciando um bloco de comentário multilinha e, em seguida, iniciando um segundo comentário multilinha dentro do primeiro bloco. O segundo bloco é então fechado, seguido pelo primeiro bloco:

```swift
/* Este é o início do primeiro comentário multilinha.
    /* Este é o segundo comentário multilinha aninhado. */
Este é o fim do primeiro comentário multilinha. */
```

Os comentários multilinha aninhados permitem que você comente grandes blocos de código de forma rápida e fácil, mesmo que o código já contenha comentários multilinha.

## Segurança de tipo e Inferência de tipo
