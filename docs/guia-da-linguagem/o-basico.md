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
> É raro precisar escrever *type annotations* na prática. Se você fornecer um valor inicial para uma constante ou variável no ponto em que é definido, o Swift quase sempre pode inferir o tipo a ser usado para essa constante ou variável, conforme descrito em [Segurança de tipo e Inferência de tipo](#segurança-de-tipo-e-inferência-de-tipo). No exemplo `mensagemDeBoasVindas` acima, nenhum valor inicial é fornecido e, portanto, o tipo da variável `mensagemDeBoasVindas` é especificado com uma *type annotation* em vez de ser inferido de um valor inicial.

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

## Ponto e vírgula

Ao contrário de muitas outras linguagens, o Swift não exige que você escreva um ponto e vírgula (`;`) após cada instrução em seu código, embora você possa fazê-lo se desejar. No entanto, o Ponto e vírgula é necessário se você quiser escrever várias instruções separadas em uma única linha:

```swift
let gato = "🐱"; print(gato)
// Imprime "🐱"
```

## Inteiros

Inteiros são números inteiros sem componente fracionário, como `42` e `-23`. Os inteiros são sinalizados (positivo, zero ou negativo) ou não sinalizados (positivo ou zero).

O *Swift* fornece números inteiros sinalizados e não sinalizados em formatos de 8, 16, 32 e 64 bits. Esses inteiros seguem uma convenção de nomenclatura semelhante ao C, em que um inteiro sem sinal de 8 bits é do tipo `UInt8`, e um inteiro com sinal de 32 bits é do tipo `Int32`. Como todos os tipos no *Swift*, esses tipos inteiros têm nomes em letras maiúsculas.

### Limites Inteiros

Você pode acessar os valores mínimo e máximo de cada tipo inteiro com suas propriedades `min` e `max`:

```swift
let valorMinimo = UInt8.min  // valorMinimo é igual a 0, e é do tipo UInt8
let valorMaximo = UInt8.max  // valorMaximo é igual a 255, e é do tipo UInt8
```

Os valores dessas propriedades são do tipo de número de tamanho apropriado (como `UInt8` no exemplo acima) e podem, portanto, ser usados ​​em expressões junto com outros valores do mesmo tipo.

### Int

Na maioria dos casos, você não precisa escolher um tamanho inteiro específico para usar em seu código. O Swift fornece um tipo inteiro adicional, `Int`, que tem o mesmo tamanho que o tamanho da palavra nativa da plataforma atual:

- Em uma plataforma de 32 bits, `Int`é do mesmo tamanho que `Int32`.
- Em uma plataforma de 64 bits, `Int` é do mesmo tamanho que `Int64`.

A menos que você precise trabalhar com um tamanho específico de número inteiro, sempre use `Int` para valores inteiros em seu código. Isso ajuda na consistência e interoperabilidade do código. Mesmo em plataformas de 32 bits, `Int` pode armazenar qualquer valor entre `-2,147,483,648` e `2,147,483,647`, e é grande o suficiente para muitos intervalos inteiros.

### UInt

O Swift também fornece um tipo inteiro sem sinal, `UInt`, que tem o mesmo tamanho que o tamanho da palavra nativa da plataforma atual:

- Em uma plataforma de 32 bits, `UInt` é do mesmo tamanho que `UInt32`.
- Em uma plataforma de 64 bits, `UInt` é do mesmo tamanho que `UInt64`.

> **Nota**
>
> Use `UInt` somente quando precisar especificamente de um tipo inteiro sem sinal com o mesmo tamanho que o tamanho da palavra nativa da plataforma. Se não for o caso, `Int` é preferível, mesmo quando os valores a serem armazenados são conhecidos como não negativos. Um uso consistente de `Int` para valores inteiros ajuda na interoperabilidade do código, evita a necessidade de converter entre diferentes tipos de números e corresponde à inferência de tipo inteiro, conforme descrito em [Segurança de tipo e Inferência de tipo](#segurança-de-tipo-e-inferência-de-tipo).

## Números de ponto flutuante

Números de ponto flutuante são números com um componente fracionário, como `3.14159`, `0.1` e `-273.15`.

Os tipos de ponto flutuante podem representar um intervalo muito maior de valores do que os tipos inteiros e podem armazenar números muito maiores ou menores do que podem ser armazenados em um Int. O Swift fornece dois tipos de números de ponto flutuante sinalizados:

- `Double` representa um número de ponto flutuante de 64 bits.
- `Float` representa um número de ponto flutuante de 32 bits.

> **Nota**
>
> `Double` tem uma precisão de pelo menos 15 dígitos decimais, enquanto a precisão do `Float` pode ser de até 6 dígitos decimais. O tipo de ponto flutuante apropriado a ser usado depende da natureza e do intervalo de valores com os quais você precisa trabalhar em seu código. Em situações em que qualquer tipo seria apropriado, `Double` é preferível.

## Segurança de tipo e Inferência de tipo

Swift é uma linguagem *type-safe*. Uma linguagem de tipo seguro encoraja você a ser claro sobre os tipos de valores com os quais seu código pode trabalhar. Se parte do seu código exigir uma `String`, você não pode passar um `Int` por engano.

Como o Swift é do tipo seguro, ele executa verificações de tipo ao compilar seu código e sinaliza qualquer tipo incompatível como erro. Isso permite detectar e corrigir erros o mais cedo possível no processo de desenvolvimento.

A verificação de tipo ajuda a evitar erros ao trabalhar com diferentes tipos de valores. No entanto, isso não significa que você precisa especificar o tipo de cada constante e variável declarada. Se você não especificar o tipo de valor que precisa, o Swift usa inferência de tipo para descobrir o tipo apropriado. A inferência de tipo permite que um compilador deduza o tipo de uma determinada expressão automaticamente ao compilar seu código, simplesmente examinando os valores fornecidos.

Por causa da inferência de tipo, o Swift requer muito menos declarações de tipo do que linguagens como C ou Objective-C. Constantes e variáveis ​​ainda são digitadas explicitamente, mas muito do trabalho de especificar seu tipo é feito para você.

A inferência de tipo é particularmente útil quando você declara uma constante ou variável com um valor inicial. Isso geralmente é feito atribuindo um valor literal (ou literal) à constante ou variável no ponto em que você a declara. (Um valor literal é um valor que aparece diretamente em seu código-fonte, como `42` e `3.14159` nos exemplos abaixo.)

Por exemplo, se você atribuir um valor literal de `42` a uma nova constante sem dizer de que tipo é, o Swift infere que você deseja que a constante seja um `Int` , porque você a inicializou com um número que se parece com um inteiro:

```swift
let significadoDaVida = 42
// significadoDaVida é inferido como sendo do tipo Int
```

Da mesma forma, se você não especificar um tipo para um literal de ponto flutuante, o Swift inferirá que você deseja criar um `Double`:

```swift
let pi = 3.14159
// pi é inferido como sendo do tipo Double
```

Swift sempre escolhe `Double` (em vez de `Float`) ao inferir o tipo de números de ponto flutuante.

Se você combinar literais inteiros e de ponto flutuante em uma expressão, um tipo de `Double` será inferido a partir do contexto:

```swift
let outroPi = 3.14159
// outroPi é inferido como sendo do tipo Double
```

O valor literal de `3` não tem um tipo explícito em si e, portanto, um tipo de saída apropriado `Double` é inferido da presença de um literal de ponto flutuante como parte da adição.

## Literais Numéricos

Os literais inteiros podem ser escritos como:

- Um número decimal, sem prefixo
- Um número binário, com o prefixo `0b`
- Um número octal, com o prefixo `0o`
- Um número hexadecimal, com o prefixo `0x`

Todos esses literais inteiros têm um valor decimal de `17`:

```swift
let inteiroDecimal = 17
let inteiroBinario = 0b10001       // 17 em notação binária
let inteiroOctal = 0o21           // 17 em notação octal
let inteiroHexadecimal = 0x11     // 17 em notação hexadecimal
```

Os literais de ponto flutuante podem ser decimais (sem prefixo) ou hexadecimais (com o prefixo `0x`). Devem sempre ter um número (ou número hexadecimal) em ambos os lados do ponto decimal. Os *floats* decimais também podem ter um expoente opcional, indicado por um `e` maiúsculo ou minúsculo; *floats* hexadecimais devem ter um expoente, indicado por um `p` maiúsculo ou minúsculo.

Para números decimais com um expoente de `x`, o número base é multiplicado por $10^x$:

- `1.25e2` significa $1,25 \cdot 10^2$, ou `125.0`.
- `1.25e-2` significa $1,25 \cdot 10^{-2}$, ou `0.0125`.

Para números hexadecimais com um expoente de `x`, o número base é multiplicado por $2^x$:

- `0xFp2` significa $15 \cdot 2^2$, ou `60.0`.
- `0xFp-2` significa $15 \cdot 2^{-2}$ , ou `3.75`.

Todos esses literais de ponto flutuante têm um valor decimal de `12.1875`:

```swift
let doubleDecimal = 12.1875
let doubleExpoente = 1.21875e1
let doubleHexadecimal = 0xC.3p0
```

Os literais numéricos podem conter formatação extra para facilitar a leitura. Tanto inteiros quanto *floats* podem ser preenchidos com zeros extras e podem conter sublinhados para facilitar a leitura. Nenhum tipo de formatação afeta o valor subjacente do literal:

```swift
let doubleTrabalhado = 000123.456
let umMilhao = 1_000_000
let poucoMaisDeUmMilhao = 1_000_000.000_000_1
```

## Conversão de tipo numérico

Use o tipo `Int` para todas as constantes e variáveis ​​inteiras de uso geral em seu código, mesmo que sejam conhecidas como não negativas. Usar o tipo inteiro padrão em situações cotidianas significa que constantes e variáveis ​​inteiras são imediatamente interoperáveis ​​em seu código e corresponderão ao tipo inferido para valores literais inteiros.

Use outros tipos inteiros somente quando forem especificamente necessários para a tarefa em questão, devido a dados dimensionados explicitamente de uma fonte externa ou para desempenho, uso de memória ou outra otimização necessária. O uso de tipos dimensionados explicitamente nessas situações ajuda a capturar qualquer estouro de valor acidental e documenta implicitamente a natureza dos dados que estão sendo usados.

### Conversão de Inteiros

O intervalo de números que pode ser armazenado em uma constante ou variável inteira é diferente para cada tipo numérico. Uma constante ou variável `Int8` pode armazenar números entre `-128` e `127`, enquanto uma constante ou variável `UInt8` pode armazenar números entre `0` e `255`. Um número que não cabe em uma constante ou variável de um tipo inteiro dimensionado é relatado como um erro quando seu código é compilado:

```swift
let naoPodeSerNegativo: UInt8 = -1
// O UInt8 não pode armazenar números negativos, e isso irá relatar um erro
let muitoGrande: Int8 = Int8.max + 1
// Int8 não pode armazenar um número maior que seu valor máximo,
// e isso também irá relatar um erro
```

Como cada tipo numérico pode armazenar um intervalo diferente de valores, você deve aceitar a conversão de tipo numérico caso a caso. Essa abordagem opcional evita erros de conversão ocultos e ajuda a explicitar as intenções de conversão de tipo em seu código.

Para converter um tipo de número específico em outro, você inicializa um novo número do tipo desejado com o valor existente. No exemplo abaixo, a constante `doisMil` é do tipo `UInt16`, enquanto a constante `um` é do tipo `UInt8`. Eles não podem ser somados diretamente, porque não são do mesmo tipo. Em vez disso, este exemplo chama `UInt16(um)` para criar um novo `UInt16` inicializado com o valor de `um` e usa esse valor no lugar do original:

```swift
let doisMil: UInt16 = 2_000
let um: UInt8 = 1
let doisMilEUm = doisMil + UInt16(um)
```

Como ambos os lados da adição agora são do tipo `UInt16`, a adição é permitida. A constante de saída (`doisMilEUm`) é inferida como sendo do tipo `UInt16`, porque é a soma de dois valores `UInt16`.

`AlgumTipo(deValorInicial)` é a maneira padrão de chamar o inicializador de um tipo Swift e passar um valor inicial. Nos bastidores, `UInt16` tem um inicializador que aceita um valor `UInt8` e, portanto, esse inicializador é usado para criar um novo `UInt16` a partir de um `UInt8` existente. No entanto, você não pode passar nenhum tipo aqui — deve ser um tipo para o qual `UInt16` forneça um inicializador. A extensão de tipos existentes para fornecer inicializadores que aceitam novos tipos (incluindo suas próprias definições de tipo) é abordada em [Extensões](extensoes.md).

### Conversão de número inteiro e ponto flutuante

As conversões entre tipos numéricos inteiros e de ponto flutuante devem ser explicitadas:

```swift
let tres = 3
let pontoUmQuatroUmCincoNove = 0.14159
let pi = Double(tres) + pontoUmQuatroUmCincoNove
// pi é igual a 3.14159 e é inferido como sendo do tipo Double
```

Aqui, o valor da constante `tres` é usado para criar um novo valor do tipo `Double`, de modo que ambos os lados da adição sejam do mesmo tipo. Sem essa conversão, a adição não seria permitida.

A conversão de ponto flutuante para número inteiro também deve ser explícita. Um tipo inteiro pode ser inicializado com um valor `Double` ou `Float`:

```swift
let piInteiro = Int(pi)
// piInteiro é igual a 3 e é inferido como sendo do tipo Int
```

Os valores de ponto flutuante são sempre truncados quando usados ​​para inicializar um novo valor inteiro dessa maneira. Isso significa que `4.75` se torna `4`, e `-3.9` se torna `-3`.

> **Nota**
>
> As regras para combinar constantes e variáveis ​​numéricas são diferentes das regras para literais numéricos. O valor literal `3` pode ser adicionado diretamente ao valor literal `0.14159`, porque os literais numéricos não têm um tipo explícito em si mesmos. Seu tipo é inferido apenas no ponto em que são avaliados pelo compilador.

## Type Aliases

Os *type aliases* definem um nome alternativo para um tipo existente. Você define *aliases* de tipo com a palavra-chave `typealias`.

Os *type aliases* são úteis quando você deseja se referir a um tipo existente por um nome contextualmente mais apropriado, como ao trabalhar com dados de um tamanho específico de uma fonte externa:

```swift
typealias AmostraDeAudio = UInt16
```

Depois de definir um *type alias*, você pode usar o *alias* em qualquer lugar em que possa usar o nome original:

```swift
var amplitudeMaximaEncontrada = AmostraDeAudio.min
// amplitudeMaximaEncontrada agora é 0
```

Aqui, `AmostraDeAudio` é definido como um *alias* para `UInt16`. Por ser um *alias*, a chamada para `AmostraDeAudio.min` realmente chama `UInt16.min`, que fornece um valor inicial de `0` para a variável `amplitudeMaximaEncontrada`.
