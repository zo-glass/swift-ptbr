---
sidebar_position: 3
---

# Um passeio pelo Swift

## Explore os recursos e a sintaxe do Swift.

A tradição sugere que o primeiro programa em uma nova linguagem deve imprimir as palavras "Olá, mundo!" na tela. No Swift, isso pode ser feito em uma única linha:

```swift
print("Olá, mundo!")
// Imprime "Olá, mundo!"
```

Se você já escreveu código em C ou Objective-C, esta sintaxe parecerá familiar para você — em Swift, esta linha de código é um programa completo. Você não precisa importar uma biblioteca separada para funcionalidades como *input*/*output* ou manipulação de *strings*. O código escrito no escopo global é usado como ponto de entrada para o programa, então você não precisa de uma função `main()`. Você também não precisa escrever ponto e vírgula no final de cada instrução.

Este tour fornece informações suficientes para você começar a escrever código em Swift, mostrando como realizar uma variedade de tarefas de programação. Não se preocupe se você não entender algo — tudo o que foi apresentado neste passeio é explicado em detalhes no restante deste livro.

### Valores Simples

Use `let` para criar uma constante e `var` para criar uma variável. O valor de uma constante não precisa ser conhecido em tempo de compilação, mas você deve atribuir um valor exatamente uma vez. Isso significa que você pode usar constantes para nomear um valor que você determina uma vez, mas usa em muitos lugares.

```swift
var minhaVariavel = 42
minhaVariavel = 50
let minhaConstante = 42
```

Uma constante ou variável deve ter o mesmo tipo do valor que você deseja atribuir a ela. No entanto, você nem sempre precisa escrever o tipo explicitamente. Fornecer um valor ao criar uma constante ou variável permite que o compilador infira seu tipo. No exemplo acima, o compilador infere que `minhaVariavel` é um inteiro porque seu valor inicial é um inteiro.

Se o valor inicial não fornecer informações suficientes (ou se não houver um valor inicial), especifique o tipo escrevendo-o após a variável, separado por dois pontos.

```swift
let inteiroImplicito = 70
let doubleImplicito = 70.0
let doubleExplicito: Double = 70
````

> **Experimento**
>
> Crie uma constante com um tipo explícito de `float` e um valor de 4.

Os valores nunca são convertidos implicitamente em outro tipo. Se você precisar converter um valor em um tipo diferente, crie explicitamente uma instância do tipo desejado.

```swift
let rotulo = "A largura é "
let largura = 94
let rotuloELargura = rotulo + String(largura)
```

> **Experimento**
>
> Tente remover a conversão para `String` da última linha. Que erro você recebe?

Existe uma maneira ainda mais simples de incluir valores em strings: Escreva o valor entre parênteses e escreva uma barra invertida (`\`) antes dos parênteses. Por exemplo:

```swift
let macas = 3
let laranjas = 5
let resumoMacas = "Eu tenho \(macas) maçãs."
let resumoFrutas = "Eu tenho \(macas + laranhas) frutas."
``` 

> **Experimento**
>
> Use `\()` para incluir um cálculo de ponto flutuante em uma *string* e para incluir o nome de alguém em uma saudação.

Use três aspas duplas (`"""`) para *strings* que ocupam várias linhas. A identação no início de cada linha entre aspas é removida, desde que corresponda a identação das aspas de fechamento. Por exemplo:

```swift
let citacao = """
Eu disse "Eu tenho \(macas) maçãs."
E então eu disse "Eu tenho \(macas + laranjas) frutas."
"""
```

Crie *arrays* e dicionários usando colchetes (`[]`) e acesse seus elementos escrevendo o índice ou a chave entre colchetes. Uma vírgula é permitida após o último elemento.

```swift
var frutas = ["morangos", "limões", "tangerinas"]
frutas[1] = "uvas"

var ocupacoes = [
    "Malcolm": "Capitão",
    "Kaylee": "Mecânico",
 ]
ocupacoes["Jayne"] = "Relações Públicas"
```

Os *arrays* crescem automaticamente à medida que você adiciona elementos.

```swift
frutas.append("mirtilos")
print(frutas)
// Imprime "["morangos", "uvas", "tangerinas", "mirtilos"]"
```

Você também usa colchetes para criar um *array* ou dicionário vazio. Para um *array*, escreva `[]`, e para um dicionário, escreva `[:]`.

```swift
frutas = []
ocupacoes = [:]
```

Se você estiver atribuindo um array ou dicionário vazio a uma nova variável, ou outro lugar onde não há nenhuma informação de tipo, você precisa especificar o tipo.

```swift
let arrayVazio: [String] = []
let dicionarioVazio: [String: Float] = [:]
```

### Controle de fluxo

Use `if` e `switch` para criar condicionais e use `for-in`, `while` e `repeat-while` para criar *loops*. Parênteses ao redor da condição ou variável de *loop* são opcionais. Colchetes ao redor do escopo são obrigatórios.

```swift
let pontuacoesIndividuais = [75, 43, 103, 87, 12]
var pontuacaoTime = 0
for ponto in pontuacoesIndividuais {
    if ponto > 50 {
        pontuacaoTime += 3
    } else {
        pontuacaoTime += 1
    }
}
print(pontuacaoTime)
// Imprime "11"
```

Em uma instrução `if`, a condicional deve ser uma expressão Booleana — isso significa que o código como `if ponto { ... }` é um erro, não uma comparação implícita com zero.

Você pode usar `if` e `let` junto para trabalhar com valores que podem conter nada. Esses valores são representados como opcionais. Um valor opcional contém um valor ou contém `nil` para indicar que um valor está vazio. Escreva um ponto de interrogação (`?`) após o tipo de valor para marcar o valor como opcional.

```swift
var stringOpcional: String? = "Olá"
print(stringOpcional == nil)
// Imprime "false"

var nomeOpcional: String? = "John Appleseed"
var saudacao = "Olá!"
if let nome = nomeOpcional {
    saudacao = "Olá, \(nome)"
}
```

> **Experimento**
>
> Mude `nomeOpcional` para `nil`. Que saudação você recebe? Adicione uma cláusula `else` que defina uma saudação diferente se `nomeOpcional` for `nil`.

Se o valor opcional for `nil`, o condicional será `false` e o código entre chaves será pulado. Caso contrário, o valor opcional é desembrulhado e atribuído à constante após `let`, o que torna o valor desembrulhado disponível dentro do bloco de código.

Outra maneira de lidar com valores opcionais é fornecer um valor padrão usando o operador `??`. Se o valor opcional estiver nulo, o valor padrão será usado.

```swift
let apelido: String? = nil
let nomeCompleto: String = "John Appleseed"
let saudacaoInformal = "Oi \(apelido ?? nomeCompleto)"
```

Você pode usar uma escrita mais curta para desembrulhar um valor, usando o mesmo nome para esse valor desembrulhado.

```swift
if let apelido {
    print("Eai, \(apelido)")
}
// Não imprime nada, porque o apelido é nulo.
```

As instruções *switch* suportam qualquer tipo de dados e uma ampla variedade de operações de comparação — eles não estão limitados a inteiros e testes de igualdade.

```swift
let vegetal = "pimentão vermelho"
switch vegetal {
case "salsão":
    print("Adicione algumas passas e crie formigas em um tronco.")
case "pepino", "agrião":
    print("Isso daria um bom sanduíche de chá.")
case let x where x.hasSuffix("pimentão"):
    print("É um \(x) picante?")
default:
    print("Tudo fica gostoso na sopa.")
}
// Imprime "É um pimentão vermelho picante?"
```

> **Experimento**
>
> Tente remover o caso *default*. Que erro você recebe?

Observe como `let` pode ser usado em um padrão para atribuir o valor que corresponde ao padrão a uma constante.

Depois de executar o código dentro do *switch case* correspondente, o programa sai da instrução *switch*. A execução não continua para o próximo caso, portanto, você não precisa encerrar explicitamente o *switch* no final do código de cada caso.

Você usa `for-in` para iterar sobre itens em um dicionário, fornecendo um par de nomes para usar para cada par chave-valor. Os dicionários são uma coleção não ordenada, portanto, suas chaves e valores são iterados em uma ordem arbitrária.

```swift
let numerosInteressantes = [
    "Primos": [2, 3, 5, 7, 11, 13],
    "Fibonacci": [1, 1, 2, 3, 5, 8],
    "Quadrados": [1, 4, 9, 16, 25],
]
var maior = 0
for (_, numeros) in numerosInteressantes {
    for numero in numeros {
        if numero > maior {
            maior = numero
        }
    }
}
print(maior)
// Imprime "25"
```

> **Experimento**
>
> Substitua o `_` por um nome de variável e acompanhe qual tipo de número era o maior.

Use `while` para repetir um bloco de código até que uma condição mude. A condição de um loop pode estar no final, garantindo que o loop seja executado pelo menos uma vez.

```swift
var n = 2
while n < 100 {
    n *= 2
}
print(n)
// Imprime "128"

var m = 2
repeat {
    m *= 2
} while m < 100
print(m)
// Imprime "128"
```

Você pode manter um índice em um *loop* usando `..<` para criar um intervalo de índices.

```swift
var total = 0
for i in 0..<4 {
    total += i
}
print(total)
// Imprime "6"
```

Use `..<` para criar um intervalo que omita seu valor superior e use `...` para criar um intervalo que inclua ambos os valores.
