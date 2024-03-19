---
sidebar_position: 6
---

# Funções

## Defina e chame funções, rotule seus argumentos e use seus valores de retorno.

Funções são pedaços de código autocontidos que realizam uma tarefa específica. Você atribui um nome a uma função que identifica o que ela faz, e esse nome é usado para "chamar" a função e realizar sua tarefa quando necessário.

A sintaxe unificada de funções do Swift é flexível o suficiente para expressar desde uma função simples no estilo C, sem nomes de parâmetros, até um método complexo no estilo Objective-C, com nomes e rótulos de argumentos para cada parâmetro. Os parâmetros podem fornecer valores padrão para simplificar as chamadas de função e podem ser passados como parâmetros *in-out*, modificando uma variável passada uma vez que a função tenha concluído sua execução.

Cada função no Swift tem um tipo, composto pelos tipos de parâmetros da função e pelo tipo de retorno. Você pode usar esse tipo como qualquer outro tipo no Swift, o que facilita passar funções como parâmetros para outras funções e retornar funções de funções. As funções também podem ser escritas dentro de outras funções para encapsular funcionalidades úteis dentro de um escopo de função aninhado.

## Definindo e Chamando Funções

Ao definir uma função, você pode opcionalmente definir um ou mais valores nomeados e tipados que a função recebe como entrada, conhecidos como parâmetros. Você também pode opcionalmente definir um tipo de valor que a função retornará como saída quando estiver concluída, conhecido como seu tipo de retorno.

Cada função possui um nome, que descreve a tarefa que a função executa. Para usar uma função, você "chama" essa função pelo seu nome e passa valores de entrada (conhecidos como argumentos) que correspondem aos tipos dos parâmetros da função. Os argumentos de uma função sempre devem ser fornecidos na mesma ordem que a lista de parâmetros da função.

A função no exemplo abaixo é chamada de `saudar(pessoa:)`, porque é isso que ela faz - ela recebe o nome de uma pessoa como entrada e retorna uma saudação para essa pessoa. Para realizar isso, você define um parâmetro de entrada - um valor `String` chamado `pessoa` - e um tipo de retorno `String`, que conterá uma saudação para essa pessoa:

```swift
func saudar(pessoa: String) -> String {
    let saudacao = "Olá, " + pessoa + "!"
    return saudacao
}
```

Toda essa informação está consolidada na definição da função, que é prefixada com a palavra-chave `func`. Você indica o tipo de retorno da função com a seta de retorno `->` (um hífen seguido por um sinal de maior), seguido pelo nome do tipo a ser retornado.

A definição descreve o que a função faz, o que ela espera receber e o que ela retorna quando conclui sua execução. A definição facilita a chamada da função de forma inequívoca de outras partes do seu código:

```swift
print(saudar(pessoa: "Anna"))
// Imprime "Olá, Anna!"
print(saudar(pessoa: "Brian"))
// Imprime "Olá, Brian!"
```

Você chama a função `saudar(pessoa:)` passando a ela um valor de `String` após o rótulo do argumento `pessoa`, como `saudar(pessoa: "Anna")`. Como a função retorna um valor de `String`, `saudar(pessoa:)` pode ser envolvida em uma chamada à função `print(_:separator:terminator:)` para imprimir essa *string* e ver seu valor de retorno, como mostrado acima.

> **Nota**
>
> A função `print(_:separator:terminator:)` não possui um rótulo para seu primeiro argumento, e seus outros argumentos são opcionais, pois têm um valor padrão. Essas variações na sintaxe de função são discutidas abaixo em [Rótulos de Argumentos de Função e Nomes de Parâmetros](#rótulos-de-argumentos-de-função-e-nomes-de-parâmetros) e [Valores de Parâmetro Padrão](#valores-de-parâmetro-padrão).

O corpo da função `saudar(pessoa:)` começa definindo uma nova constante do tipo `String` chamada `saudacao` e atribuindo a ela uma mensagem simples de saudação. Em seguida, essa saudação é passada para fora da função usando a palavra-chave `return`. Na linha de código que contém `return saudacao`, a função conclui sua execução e retorna o valor atual de `saudacao`.

Você pode chamar a função `saudar(pessoa:)` várias vezes com valores de entrada diferentes. O exemplo acima mostra o que acontece quando é chamada com um valor de entrada `"Anna"` e um valor de entrada `"Brian"`. A função retorna uma saudação personalizada em cada caso.

Para tornar o corpo desta função mais curto, é possível combinar a criação da mensagem e a declaração de retorno em uma única linha:

```swift
func saudarNovamente(pessoa: String) -> String {
    return "Olá novamente, " + pessoa + "!"
}
print(saudarNovamente(pessoa: "Anna"))
// Imprime "Olá novamente, Anna!"
```

## Parâmetros e Valores de Retorno de Função

Os parâmetros e valores de retorno de função são extremamente flexíveis em Swift. Você pode definir desde uma função de utilidade simples com um único parâmetro sem nome até uma função complexa com nomes expressivos para os parâmetros e diferentes opções de parâmetro.

### Funções Sem Parâmetros

As funções não são obrigadas a definir parâmetros de entrada. Aqui está uma função sem parâmetros de entrada, que sempre retorna a mesma mensagem de `String` sempre que é chamada:

```swift
func digaOlaMundo() -> String {
    return "olá, mundo"
}
print(digaOlaMundo())
// Imprime "olá, mundo"
```

A definição da função ainda precisa de parênteses após o nome da função, mesmo que ela não receba nenhum parâmetro. O nome da função também é seguido por um par de parênteses vazios quando a função é chamada.

### Funções com Múltiplos Parâmetros

As funções podem ter múltiplos parâmetros de entrada, os quais são escritos dentro dos parênteses da função, separados por vírgulas.

Esta função recebe o nome de uma pessoa e se ela já foi cumprimentada como entrada e retorna uma saudação apropriada para essa pessoa:

```swift
func saudar(pessoa: String, jaCumprimentada: Bool) -> String {
    if jaCumprimentada {
        return saudarNovamente(pessoa: pessoa)
    } else {
        return saudar(pessoa: pessoa)
    }
}

print(saudar(pessoa: "Tim", jaCumprimentada: true))
// Imprime "Olá novamente, Tim!"
```

Você chama a função `saudar(pessoa:jaCumprimentada:)` passando a ela tanto um valor de argumento `String` rotulado como `pessoa` quanto um valor de argumento `Bool` rotulado como `jaCumprimentada` entre parênteses, separados por vírgulas. Observe que esta função é distinta da função `saudar(pessoa:)` mostrada em uma seção anterior. Embora ambas as funções tenham nomes que começam com `saudar`, a função `saudar(pessoa:jaCumprimentada:)` recebe dois argumentos, enquanto a função `saudar(pessoa:)` recebe apenas um.

### Funções Sem Valores de Retorno

Não é necessário que as funções definam um tipo de retorno. Aqui está uma versão da função saudar(pessoa:), que imprime seu próprio valor de `String` em vez de retorná-lo:

```swift
func saudar(pessoa: String) {
    print("Olá, \(pessoa)!")
}
saudar(pessoa: "Dave")
// Imprime "Olá, Dave!"
```

Porque não precisa retornar um valor, a definição da função não inclui a seta de retorno (`->`) nem um tipo de retorno.

> **Nota**
>
> Estritamente falando, esta versão da função `saudar(pessoa:)` ainda retorna um valor, mesmo que nenhum valor de retorno seja definido. Funções sem um tipo de retorno definido retornam um valor especial do tipo `Void`. Isso é simplesmente uma tupla vazia, escrita como `()`.

O valor de retorno de uma função pode ser ignorado quando ela é chamada:

```swift
func imprimirEContar(string: String) -> Int {
    print(string)
    return string.count
}

func imprimirSemContar(string: String) {
    let _ = imprimirEContar(string: string)
}

imprimirEContar(string: "Olá, mundo")
// imprime "Olá, mundo" e retorna um valor de 12

imprimirSemContar(string: "Olá, mundo")
// imprime "Olá, mundo" mas não retorna um valor
```

A primeira função, `imprimirEContar(string:)`, imprime uma string e, em seguida, retorna a contagem de caracteres dela como um `Int`. A segunda função, `imprimirSemContar(string:)`, chama a primeira função, mas ignora o valor retornado. Quando a segunda função é chamada, a mensagem ainda é impressa pela primeira função, mas o valor retornado não é utilizado.

> **Nota**
>
> Valores de retorno podem ser ignorados, mas uma função que indica que retornará um valor deve sempre fazê-lo. Uma função com um tipo de retorno definido não pode permitir que o controle saia do final da função sem retornar um valor, e tentar fazê-lo resultará em um erro de compilação.

## Funções com Múltiplos Valores de Retorno

Você pode usar um tipo de tupla como o tipo de retorno para uma função para retornar múltiplos valores como parte de um valor de retorno composto.

O exemplo abaixo define uma função chamada minMax(array:), que encontra os números menor e maior em um *array* de valores `Int`:

```swift
func minMax(array: [Int]) -> (min: Int, max: Int) {
    var atualMin = array[0]
    var atualMax = array[0]
    for valor in array[1..<array.count] {
        if valor < atualMin {
            atualMin = valor
        } else if valor > atualMax {
            atualMax = valor
        }
    }
    return (atualMin, atualMax)
}
```

A função `minMax(array:)` retorna uma tupla contendo dois valores `Int`. Esses valores são rotulados como `min` e `max` para que possam ser acessados pelo nome ao consultar o valor de retorno da função.

O corpo da função `minMax(array:)` começa definindo duas variáveis de trabalho chamadas `atualMin` e `atualMax` com o valor do primeiro inteiro no *array*. A função então itera sobre os valores restantes no *array* e verifica cada valor para ver se é menor ou maior do que os valores de `atualMin` e `atualMax`, respectivamente. Por fim, os valores mínimos e máximos globais são retornados como uma tupla de dois valores `Int`.

Como os valores dos membros da tupla são nomeados como parte do tipo de retorno da função, eles podem ser acessados com a sintaxe de ponto para recuperar os valores mínimos e máximos encontrados:

```swift
let limites = minMax(array: [8, -6, 2, 109, 3, 71])
print("O mínimo é \(limites.min) e o máximo é \(limites.max)")
// Imprime "O mínimo é -6 e o máximo é 109"
```

Observe que os membros da tupla não precisam ser nomeados no momento em que a tupla é retornada da função, pois seus nomes já estão especificados como parte do tipo de retorno da função.

### Funções com Retorno Implícito

Se todo o corpo da função for uma única expressão, a função retorna implicitamente essa expressão. Por exemplo, ambas as funções abaixo têm o mesmo comportamento:

```swift
func saudacao(para pessoa: String) -> String {
    "Olá, " + pessoa + "!"
}
print(saudacao(para: "Dave"))
// Imprime "Olá, Dave!"

func outraSaudacao(para pessoa: String) -> String {
    return "Olá, " + pessoa + "!"
}
print(outraSaudacao(para: "Dave"))
// Imprime "Olá, Dave!"
```

A definição completa da função `saudacao(para:)` é a mensagem de saudação que ela retorna, o que significa que pode usar esta forma mais curta. A função `outraSaudacao(para:)` retorna a mesma mensagem de saudação, utilizando a palavra-chave `return` como em uma função mais longa. Qualquer função que você escreva com apenas uma linha de retorno pode omitir o `return`.

Como você verá na [Declaração de Getter Abreviada](./propriedades.md/#declaração-de-getter-abreviada), os getters de propriedades também podem usar um retorno implícito.

> **Nota**
>
> O código que você escreve como um valor de retorno implícito precisa retornar algum valor. Por exemplo, você não pode usar `print(13)` como um valor de retorno implícito. No entanto, você pode usar uma função que nunca retorna, como `fatalError("Oh no!")`, como um valor de retorno implícito, porque o Swift sabe que o retorno implícito não ocorre.

## Rótulos de Argumentos de Função e Nomes de Parâmetros

## Valores de Parâmetro Padrão
