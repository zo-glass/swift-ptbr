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

### Funções e Closures

Use  `func` para declarar uma função. Chame uma função usando seu nome com uma lista de argumentos entre parênteses. Use `->` para separar os nomes e tipos de parâmetros do tipo de retorno da função.

```swift
func saudar(pessoa: String, dia: String) -> String {
    return "Olá \(pessoa), hoje é \(dia)."
}
saudar(pessoa: "Bob", dia: "Terça-feira")
```

> **Experimento**
>
> Remova o parâmetro `dia`. Adicione um parâmetro para incluir o almoço especial de hoje na saudação.

Por padrão, as funções usam seus nomes de parâmetro como rótulos para seus argumentos. Escreva um rótulo de argumento personalizado antes do nome do parâmetro ou escreva `_` para não usar nenhum rótulo de argumento.

```swift
func saudar(_ pessoa: String, no dia: String) -> String {
    return "Olá \(pessoa), hoje é \(dia)."
}
saudar("John", no: "Sábado")
```

Use uma tupla para criar um valor composto — por exemplo, para retornar vários valores de uma função. Os elementos de uma tupla podem ser referênciados por nome ou por número.

```swift
func calculaEstatisticas(pontuacoes: [Int]) -> (menor: Int, maior: Int, soma: Int) {
    var menor = pontuacoes[0]
    var maior = pontuacoes[0]
    var soma = 0

    for ponto in pontuacoes {
        if ponto > maior {
            maior = ponto
        } else if ponto < menor {
            menor = ponto
        }
        soma += ponto
    }

    return (menor, maior, soma)
}
let estatisticas = calculaEstatisticas(pontuacoes: [5, 3, 100, 3, 9])
print(estatisticas.soma)
// Imprime "120"
print(estatisticas.2)
// Imprime "120"
```

As funções podem ser aninhadas. Funções aninhadas (*Nested functions*) têm acesso a variáveis ​​que foram declaradas na função externa. Você pode usar funções aninhadas para organizar o código em uma função longa ou complexa.

```swift
func retornaQuinze() -> Int {
    var y = 10
    func adiciona() {
        y += 5
    }
    adiciona()
    return y
}
retornaQuinze()
```

Funções são um tipo de primeira classe (*first-class type*). Isso significa que uma função pode retornar outra função como seu valor.

```swift
func criarIncrementador() -> ((Int) -> Int) {
    func adicionaUm(numero: Int) -> Int {
        return 1 + numero
    }
    return adicionaUm
}
var incremento = criarIncrementador()
incremento(7)
```

Uma função pode receber outra função como um de seus argumentos.

```swift
func possuiQualquerCorrespondencia(lista: [Int], condicao: (Int) -> Bool) -> Bool {
    for item in lista { 
        if condicao(item) {
            return true 
        }
    }
    return false
}
func menorQueDez(numero: Int) -> Bool {
    return numero < 10
}
var numeros = [20, 19, 7, 12]
possuiQualquerCorrespondencia(lista: numeros, condicao: menorQueDez)
```

As funções são, na verdade, um caso especial de *closures*: blocos de código que podem ser chamados posteriormente. O código em uma *closure* tem acesso a coisas como variáveis ​​e funções que estavam disponíveis no escopo onde a *closure* foi criada, mesmo que a *closure* esteja em um escopo diferente quando for executado — você já viu um exemplo disso com funções aninhadas (*nested functions*). Você pode escrever uma *closure* sem um nome colocando o código entre chaves (`{}`). Use `in` para separar os argumentos e o tipo de retorno do corpo.

```swift
numeros.map({ (numero: Int) -> Int in
    let resultado = 3 * numero
    return resultado
})
```

> **Experimento**
>
> Reescreva a *closure* para retornar zero para todos os números ímpares.

Você possui várias opções para escrever *closures* de forma mais concisa. Quando o tipo de uma *closures* já é conhecido, como o *callback* para um *delegate*, você pode omitir o tipo de seus parâmetros, seu tipo de retorno ou ambos. *Closures* de instrução única retornam implicitamente o valor de sua única instrução.

```swift
let numerosMapeados = numeros.map({ numero in 3 * numero })
print(numerosMapeados)
// Imprime "[60, 57, 21, 36]"
```

Você pode se referir a parâmetros por número em vez de por nome — essa abordagem é especialmente útil em *closures* muito curtas. Uma *closure* passada como o último argumento para uma função pode aparecer imediatamente após os parênteses. Quando a *closure* é o único argumento para uma função, você pode omitir totalmente os parênteses.

```swift
let numerosOrdenados = nunmeros.sorted { $0 > $1 }
print(numerosOrdenados)
// Imprime "[20, 19, 12, 7]"
```

### Objetos e Classes

Use `class` seguido pelo nome da classe para criar uma classe. Uma declaração de propriedade em uma classe é escrita da mesma forma que uma declaração de constante ou variável, exceto que está no contexto de uma classe. Da mesma forma, as declarações de método e função são escritas da mesma maneira.

```swift
class Figura {
    var numeroDeLados = 0
    func descricaoSimples() -> String {
        return "Uma figura com \(numeroDeLados) lados."
    }
}
```

> **Experimento**
>
> Adicione uma propriedade constante com `let` e adicione outro método que receba um argumento.

Crie uma instância de uma classe colocando parênteses após o nome da classe. Use a sintaxe de ponto para acessar as propriedades e métodos da instância.

```swift
var figura = Figura()
figura.numeroDeLados = 7
var descricaoDaFigura = figura.descricaoSimples()
```

Esta versão da classe `Figura` está faltando algo importante: um inicializador para configurar a classe quando uma instância é criada. Use `init` para criar um.

```swift
class FiguraNomeada {
    var numeroDeLados: Int = 0
    var nome: String

    init(nome: String) {
       self.nome = nome
    }

    func descricaoSimples() -> String {
       return "Uma figura com \(numeroDeLados) lados."
    }
}
```

Observe como `self` é usado para distinguir a propriedade `nome` do argumento `nome` para o inicializador. Os argumentos para o inicializador são passados ​​como uma chamada de função quando você cria uma instância da classe. Cada propriedade precisa de um valor atribuído — seja em sua declaração (como em `numeroDeLados`) ou no inicializador (como em `nome`).

Use `deinit` para criar um deinicializador se precisar executar alguma limpeza antes que o objeto seja desalocado.

As subclasses incluem o nome da superclasse após o nome da classe, separados por dois pontos. Não há nenhum requisito para que as classes sejam subclasses de qualquer classe raiz padrão, portanto, você pode incluir ou omitir uma superclasse conforme necessário.

Os métodos em uma subclasse que substituem a implementação da superclasse são marcados com `override` — substituir um método por acidente, sem o `override`, é detectado pelo compilador como um erro. O compilador também detecta métodos `override` que não substituem nenhum método na superclasse.

```swift
class Quadrado: FiguraNomeada {
    var comprimentoDoLado: Double

    init(comprimentoDoLado: Double, nome: String) {
        self.comprimentoDoLado = comprimentoDoLado
        super.init(nome: nome)
        numeroDeLados = 4
    }

    func area() -> Double {
        return comprimentoDoLado * comprimentoDoLado
    }

    override func descricaoSimples() -> String {
        return "Um quadrado com lados de comprimento \(sideLength)."
    }
}
let teste = Quadrado(comprimentoDoLado: 5.2, nome: "meu quadrado de teste")
teste.area()
teste.descricaoSimples()
```

> **Experimento**
>
> Crie outra subclasse de `FiguraNomeada` chamada `Circulo` que receba um raio e um nome como argumentos para seu inicializador. Implemente um método `area()` e `descricaoSimples()` na classe `Circulo`.

Além das propriedades simples que são armazenadas, as propriedades podem ter um *getter* e um *setter*.

```swift
class TrianguloEquilatero: FiguraNomeada {
    var comprimentoDoLado: Double = 0.0

    init(comprimentoDoLado: Double, nome: String) {
        self.comprimentoDoLado = comprimentoDoLado
        super.init(nome: nome)
        numeroDeLados = 3
    }

    var perimetro: Double {
        get {
             return 3.0 * comprimentoDoLado
        }
        set {
            comprimentoDoLado = newValue / 3.0
        }
    }

    override func descricaoSimples() -> String {
        return "Um triângulo equilátero com lados de comprimento \(comprimentoDoLado)."
    }
}
var triangulo = TrianguloEquilatero(comprimentoDoLado: 3.1, nome: "um triangulo")
print(triangulo.perimetro)
// Imprime "9.3"
triangulo.perimetro = 9.9
print(triangulo.comprimentoDoLado)
// Imprime "3.3000000000000003"
```

No *setter* para `perimetro`, o novo valor tem o nome implícito `newValue`. Você pode fornecer um nome explícito entre parênteses após `set`.

Observe que o inicializador da classe `TrianguloEquilatero` tem três etapas diferentes:

1. Configurando o valor das propriedades que a subclasse declara.

2. Chamando o inicializador da superclasse.

3. Alterar o valor das propriedades definidas pela superclasse. Qualquer trabalho de configuração adicional que use métodos, getters ou setters também pode ser feito neste ponto.

Se você não precisar calcular a propriedade, mas ainda precisar fornecer um código executado antes e depois de definir um novo valor, use `willSet` e `didSet`. O código que você fornece é executado sempre que o valor é alterado fora de um inicializador. Por exemplo, a classe abaixo garante que o comprimento do lado de seu triângulo seja sempre igual ao comprimento do lado de seu quadrado.

```swift
class TrianguloEQuadrado {
    var Triangulo: TrianguloEquilatero {
        willSet {
            quadrado.comprimentoDoLado = newValue.comprimentoDoLado
        }
    }
    var quadrado: Quadrado {
        willSet {
            triangulo.comprimentoDoLado = newValue.comprimentoDoLado
        }
    }
    init(tamanho: Double, nome: String) {
        quadrado = Quadrado(comprimentoDoLado: tamanho, nome: name)
        triangulo = EquilateralTriangle(comprimentoDoLado: tamanho, nome: nome)
    }
}
var trianguloEQuadrado = TrianguloEQuadrado(tamanho: 10, nome: "outra figura de teste")
print(trianguloEQuadrado.quadrado.comprimentoDoLado)
// Imprime "10.0"
print(trianguloEQuadrado.triangulo.comprimentoDoLado)
// Imprime "10.0"
trianguloEQuadrado.quadrado = Quadrado(comprimentoDoLado: 50, nome: "quadrado maior")
print(trianguloEQuadrado.triangulo.comprimentoDoLado)
// Imprime "50.0"
```

Ao trabalhar com valores opcionais, você pode escrever `?` antes de operações como métodos, propriedades e *subscriptings*. Se o valor antes de `?` for `nil`, tudo depois de `?` é ignorado e o valor de toda a expressão é `nil`. Caso contrário, o valor opcional é desembrulhado e tudo depois do `?` atua no valor desembrulhado. Em ambos os casos, o valor da expressão inteira é um valor opcional.

```swift
let quadadroOpcional: Quadado? = Quadrado(comprimentoDoLado: 2.5, nome: "quadrado opcional")
let comprimentoDoLado = quadadroOpcional?.comprimentoDoLado
```

### Enumerações e Estruturas

Use `enum` para criar uma enumeração. Como as classes e todos os outros tipos nomeados, as enumerações podem ter métodos associados a elas.

```swift
enum Valor: Int {
    case as = 1
    case dois, tres, quatro, cinco, seis, sete, oito, nove, dez
    case valete, rainha, rei

    func descricaoSimples() -> String {
        switch self {
        case .as:
            return "Ás"
        case .valete:
            return "Valete"
        case .rainha:
            return "Rainha"
        case .rei:
            return "Rei"
        default:
            return String(self.rawValue)
        }
    }
}
let as = Valor.as
let valorBrutoDoAs = as.rawValue
```

> **Experimento**
>
> Escreva uma função que compare dois valores `Valor` comparando seus valores brutos.

Por padrão, o Swift atribui os valores brutos começando em zero e incrementando em um a cada vez, mas você pode alterar esse comportamento especificando explicitamente os valores. No exemplo acima, `As` é atribuido explicitamente um valor bruto de `1`, e o resto dos valores brutos são atribuídos em ordem. Você também pode usar *strings* ou números de ponto flutuante como o tipo bruto de uma enumeração. Use a propriedade `rawValue` para acessar o valor bruto de um caso de enumeração.

Use o inicializador `init?(rawValue:)` para criar uma instância de uma enumeração a partir de um valor bruto. Ele retorna o caso de enumeração correspondente ao valor bruto ou `nil` se não houver `Valor` correspondente.

```swift
if let valorConvertido = Valor(rawValue: 3) {
    let descicaoTres = valorConvertido.descricaoSimples()
}
```

Os valores *case* de uma enumeração são valores reais, não apenas outra maneira de escrever seus valores brutos. Na verdade, nos casos em que não há um valor bruto significativo, você não precisa fornecer um.

```swift
enum Naipe {
    case espadas, copas, ouros, paus

    func descricaoSimples() -> String {
        switch self {
        case .espadas:
            return "espadas"
        case .copas:
            return "copas"
        case .ouros:
            return "ouros"
        case .paus:
            return "paus"
        }
    }
}
let copas = Naipe.copas
let descricaoCopas = copas.descricaoSimples()
```

> **Experimento**
>
> Adicione um método `cor()` que retorne “preto” para espadas e paus, e retorne “vermelho” para copas e ouros.

Observe as duas maneiras como o *case* da enumeração `copas` é referido acima: Ao atribuir um valor à constante `copas`, o *case* `Naipe.copas` da enumeração é referido por seu nome completo porque a constante não tem um tipo explícito especificado. Dentro do switch, o *case* de enumeração é referido pela forma abreviada `.copas` porque o valor de `self` já é conhecido por ser um naipe. Você pode usar a forma abreviada sempre que o tipo do valor já for conhecido.

Se uma enumeração tiver valores brutos, esses valores serão determinados como parte da declaração, o que significa que cada instância de um determinado *case* de enumeração sempre terá o mesmo valor bruto. Outra opção para *cases* de enumeração é ter valores associados ao *case* — esses valores são determinados quando você cria a instância e podem ser diferentes para cada instância de um *case* de enumeração. Você pode pensar nos valores associados como se comportando como propriedades armazenadas da instância de *case* de enumeração. Por exemplo, considere o *case* de solicitar os horários do nascer e do pôr do sol de um servidor. O servidor responde com as informações solicitadas ou com uma descrição do que deu errado.

```swift
enum RespostaDoServidor {
    case resultado(String, String)
    case falha(String)
}

let sucesso = RespostaDoServidor.resultado("06:00", "20:09")
let falha = RespostaDoServidor.falha("Sem queijo.")

switch sucesso {
case let .resultado(nascerDoSol, porDoSol):
    print("O nascer do sol é às \(nascerDoSol) e o pôr do sol é às \(porDoSol).")
case let .falha(mensagem):
    print("Falha...  \(mensagem)")
}
// Imprime "O nascer do sol é às 06:00 e o pôr do sol é às 20:09"
```

> **Experimento**
>
> Adicione um terceiro *case* para o `RespostaDoServidor` e para o *switch*

Observe como os horários do nascer e do pôr do sol são extraídos do valor `RespostaDoServidor` como parte da comparação do valor com *switch cases*.

Use `struct` para criar uma estrutura. As estruturas suportam muitos dos mesmos comportamentos das classes, incluindo métodos e inicializadores. Uma das diferenças mais importantes entre estruturas e classes é que as estruturas sempre são copiadas quando são passadas em seu código, mas as classes são passadas por referência.

```swift
struct Carta {
    var valor: Valor
    var naipe: Naipe
    func descricaoSimples() -> String {
        return "O \(valor.descricaoSimples()) de \(naipe.descricaoSimples())"
    }
}
let tresDeEspadas = Carta(valor: .tres, naipe: .espadas)
let descricaoDoTresDeEspadas = tresDeEspadas.descricaoSimples()
```

> **Experimento**
>
> Escreva uma função que retorne um *array* contendo um baralho completo de cartas, com uma carta de cada combinação de valor e naipe.

### Concorrência

Use `async` para marcar uma função que é executada de forma assíncrona.

```swift
func busqueIDUsuario(do servidor: String) async -> Int {
    if servidor == "primário" {
        return 97
    }
    return 501
}
```

Você marca uma chamada para uma função assíncrona escrevendo `await` na frente dela.

```swift
func busqueNomeUsuario(do servidor: String) async -> String {
    let idUsuario = await busqueIDUsuario(do: servidor)
    if idUsuario == 501 {
        return "John Appleseed"
    }
    return "Convidado"
}
```

Use `async let` para chamar uma função assíncrona, permitindo que ela seja executada em paralelo com outro código assíncrono. Ao usar o valor que ele retorna, escreva `await`.

```swift
func conectarUsuario(ao servidor: String) async {
    async let idUsuario = busqueIDUsuario(do: servidor)
    async let nomeUsuario = busqueNomeUsuario(do: servidor)
    let saudacao = await "Olá \(nomeUsuario), ID de usuário \(idUsuario)"
    print(saudacao)
}
```

Use `Task` para chamar funções assíncronas do código síncrono, sem esperar que elas retornem.

```swift
Task {
    await conectarUsuario(ao: "primário")
}
// Imprime "Olá Convidadeo, ID de usuário 97"
```

### Protocolos e Extensões

Use `protocol` para declarar um protocolo.

```swift
protocol ProtocoloExemplo {
    var descricaoSimples: String { get }
    mutating func ajustar()
}
```

Classes, enumerações e estruturas podem adotar protocolos.

```swift
class ClasseSimples: ProtocoloExemplo {
    var descricaoSimples: String = "Uma classe bem simples."
    var outraPropriedade: Int = 69105
    func ajustar() {
        descricaoSimples += "  Agora 100% ajustado."
    }
}
var a = ClasseSimples()
a.ajustar()
let descricaoA = a.descricaoSimples

struct EstruturaSimples: ProtocoloExemplo {
    var descricaoSimples: String = "Uma estrutura simples"
    mutating func ajustar() {
        descricaoSimples += " (ajustado)"
    }
}
var b = EstruturaSimples()
b.ajustar()
let descricaoB = b.descricaoSimples
```

> **Experimento**
>
> Adicione outro requisito a `ProtocoloExemplo`. Quais alterações você precisa fazer em `ClasseSimples` e `EstruturaSimples` para que ainda estejam em conformidade com o protocolo?

Observe o uso da palavra-chave `mutating` na declaração de `EstruturaSimples` para marcar um método que modifica a estrutura. A declaração de `ClasseSimples` não precisa de nenhum de seus métodos marcados como *mutating* porque os métodos em uma classe sempre podem modificar a classe.

Use `extension` para adicionar funcionalidade a um tipo existente, como novos métodos e propriedades computadas. Você pode usar uma extensão para adicionar conformidade de protocolo a um tipo declarado em outro lugar ou até mesmo a um tipo que você importou de uma biblioteca ou *framework*.

```swift
extension Int: ProtocoloExemplo {
    var descricaoSimples: String {
        return "O número \(self)"
    }
    mutating func ajustar() {
        self += 42
    }
 }
print(7.descricaoSimples)
// Imprime "O número 7"
```

> **Experimento**
>
> Escreva uma extensão para o tipo `Double` que adiciona uma propriedade `valorAbsoluto`.

Você pode usar um nome de protocolo como qualquer outro tipo nomeado — por exemplo, para criar uma coleção de objetos que têm tipos diferentes, mas todos estão de acordo com um único protocolo. Quando você trabalha com valores cujo tipo é um tipo de protocolo, os métodos fora da definição do protocolo não estão disponíveis.

```swift
let valorProtoclo: ProtocoloExemplo = a
print(valorProtoclo.descricaoSimples)
// Imprime "Uma classe bem simples. Agora 100% ajustado."
// print(valorProtoclo.outraPropriedade)    // Descomente para ver o erro
```

Mesmo que a variável `valorProtoclo` tenha um tipo em *runtime* de `ClasseSimples`, o compilador a trata como o tipo fornecido de `ProtocoloExemplo`. Isso significa que você não pode acessar acidentalmente métodos ou propriedades que a classe implementa além de sua conformidade de protocolo.

### Tratamento de erro

Você representa erros usando qualquer tipo que adote o protocolo `Error`.

```swift
enum ErroImpressora: Error {
    case semPapel
    case semToner
    case emChamas
}
```

Use `throw` para lançar um erro e `throws` para marcar uma função que pode gerar um erro. Se você lançar um erro em uma função, a função retornará imediatamente e o código que chamou a função manipulará o erro.

```swift
func enviar(trabalho: Int, paraImpressora nomeImpressora: String) throws -> String {
    if nomeImpressora == "Nunca Tem Toner" {
        throw ErroImpressora.semToner
    }
    return "Trabalho enviado"
}
```

Existem várias maneiras de manipular erros. Uma maneira é usar `do`-`catch`. Dentro do bloco `do`, você marca o código que pode lançar um erro escrevendo `try` na frente dele. Dentro do bloco `catch`, o erro recebe automaticamente o nome `error`, a menos que você dê um nome diferente.

```swift
do {
    let respostaImpressora = try enviar(trabalho: 1040, paraImpressora: "Bi Sheng")
    print(respostaImpressora)
} catch {
    print(error)
}
// Imprime "Trabalho enviado"
```

> **Experimento**
>
> Altere o nome da impressora para `"Nunca Tem Toner"`, para que a função `enviar(trabalho:paraImpressora:)` lance um erro.

Você pode fornecer vários blocos `catch` que manipulam erros específicos. Você escreve um padrão depois do `catch` da mesma forma que faz após o `case` em um *switch*.

```swift
do {
    let respostaImpressora = try enviar(trabalho: 1440, paraImpressora: "Gutenberg")
    print(respostaImpressora)
} catch ErroImpressora.emChamas {
    print("Vou colocar isso aqui, com o resto do fogo.")
} catch let erroImpressora as ErroImpressora {
    print("Erro da impressora: \(erroImpressora).")
} catch {
    print(error)
}
// Imprime "Trabalho enviado"
```

> **Experimento**
>
> Adicione código para lançar um erro dentro do bloco `do`. Que tipo de erro você precisa lançar para que o erro seja tratado pelo primeiro bloco `catch`? E quanto ao segundo e terceiro blocos?

Outra maneira de manipular erros é usar `try?` para converter o resultado em opcional. Se a função gerar um erro, o erro específico será descartado e o resultado será `nil`. Caso contrário, o resultado é um opcional contendo o valor que a função retornou.

```swift
let sucessoImpressora = try? enviar(trabalho: 1884, paraImpressora: "Mergenthaler")
let falhaImpressora = try? enviar(trabalho: 1885, paraImpressora: "Nunca Tem Toner")
```

Use `defer` para escrever um bloco de código que é executado depois de todos os outros códigos na função, logo antes do retorno da função. O código é executado independentemente de a função lançar um erro. Você pode usar `defer` para escrever códigos de configuração e limpeza um ao lado do outro, mesmo que precisem ser executados em momentos diferentes.

```swift
var geladeiraAberta = false
let conteudoGeladeira = ["leite", "ovos", "sobras"]

func geladeiraContem(_ comida: String) -> Bool {
    geladeiraAberta = true
    defer {
        geladeiraAberta = false
    }

    let resultado = conteudoGeladeira.contains(comida)
    return resultado
}
geladeiraContem("banana")
print(geladeiraAberta)
// Imprime "false"
```

### Genéricos

Escreva um nome entre parênteses angulares [ `<`  `>` ] para criar uma função ou tipo genérico.

```swift
func criarArray<Item>(repetindo item: Item, numeroDeVezes: Int) -> [Item] {
    var resultado: [Item] = []
    for _ in 0..<numeroDeVezes {
         resultado.append(item)
    }
    return resultado
}
criarArray(repetindo: "toc", numeroDeVezes: 4)
```

Você pode criar formas genéricas de funções e métodos, bem como classes, enumerações e estruturas.

```swift
// Reimplemente o tipo opcional da biblioteca padrão Swift
enum OptionalValue<Wrapped> {
    case none
    case some(Wrapped)
}
var inteiroPossivel: OptionalValue<Int> = .none
inteiroPossivel = .some(100)
```

Use `where`logo antes do corpo para especificar uma lista de requisitos — por exemplo, para exigir que o tipo implemente um protocolo, para exigir que dois tipos sejam iguais ou para exigir que uma classe tenha uma superclasse específica.

```swift
func quaisquerElementosComuns<T: Sequence, U: Sequence>(_ esquerda: T, _ direita: U) -> Bool
    where T.Element: Equatable, T.Element == U.Element
{
    for itemEsq in esquerda {
        for itemDir in direita {
            if itemEsq == itemDir {
                return true
            }
        }
    }
   return false
}

quaisquerElementosComuns([1, 2, 3], [3])
```

> **Experimento**
>
> Modifique a função `quaisquerElementosComuns(_:_:)` para fazer uma função que retorne uma matriz dos elementos que quaisquer duas sequências têm em comum.

Escrever `<T: Equatable>` é o mesmo que escrever `<T> ... where T: Equatable`.
