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
