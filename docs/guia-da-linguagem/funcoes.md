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

Cada parâmetro de função possui tanto um rótulo de argumento quanto um nome de parâmetro. O rótulo de argumento é usado ao chamar a função; cada argumento é escrito na chamada da função com seu rótulo de argumento antes dele. O nome do parâmetro é usado na implementação da função. Por padrão, os parâmetros usam seu nome de parâmetro como seu rótulo de argumento.

```swift
func algumaFuncao(primeiroNomeDoParametro: Int, segundoNomeDoParametro: Int) {
    // No corpo da função, primeiroNomeDoParametro e segundoNomeDoParametro
    // referem-se aos valores dos argumentos para o primeiro e segundo parâmetros.
}
algumaFuncao(primeiroNomeDoParametro: 1, segundoNomeDoParametro: 2)
```

Todos os parâmetros devem ter nomes únicos. Embora seja possível para vários parâmetros terem o mesmo rótulo de argumento, rótulos de argumento únicos ajudam a tornar seu código mais legível.

### Especificando Rótulos de Argumento

Você escreve um rótulo de argumento antes do nome do parâmetro, separado por um espaço:

```swift
func algumaFuncao(rotuloDeArgumento nomeDoParametro: Int) {
    // No corpo da função, nomeDoParametro se refere ao valor do argumento
    // para esse parâmetro.
}
```

Aqui está uma variação da função `saudar(pessoa:)` que recebe o nome e a cidade natal de uma pessoa e retorna uma saudação:

```swift
func saudar(pessoa: String, de cidadeNatal: String) -> String {
    return "Olá \(pessoa)! Que bom que você pode visitar de \(cidadeNatal)."
}
print(saudar(pessoa: "Bill", de: "Cupertino"))
// Imprime "Olá Bill! Que bom que você pode visitar de Cupertino."
```

O uso de rótulos de argumento pode permitir que uma função seja chamada de maneira expressiva, semelhante a uma frase, ao mesmo tempo em que fornece um corpo de função que é legível e claro em sua intenção.

### Omitindo Rótulos de Argumento

Se você não quiser um rótulo de argumento para um parâmetro, escreva um sublinhado (`_`) em vez de um rótulo de argumento explícito para esse parâmetro.

```swift
func algumaFuncao(_ primeiroNomeDoParametro: Int, segundoNomeDoParametro: Int) {
    // No corpo da função, primeiroNomeDoParametro e segundoNomeDoParametro
    // referem-se aos valores de argumento para o primeiro e segundo parâmetros.
}
algumaFuncao(1, segundoNomeDoParametro: 2)
```

Se um parâmetro tiver um rótulo de argumento, o argumento deve ser rotulado quando você chama a função.

## Valores de Parâmetro Padrão

Você pode definir um valor padrão para qualquer parâmetro em uma função atribuindo um valor ao parâmetro após o tipo desse parâmetro. Se um valor padrão for definido, você pode omitir esse parâmetro ao chamar a função.

```swift
func algumaFuncao(parametroSemPadrao: Int, parametroComPadrao: Int = 12) {
    // Se você omitir o segundo argumento ao chamar esta função, então
    // o valor de parametroComPadrao é 12 dentro do corpo da função.
}
algumaFuncao(parametroSemPadrao: 3, parametroComPadrao: 6) // parametroComPadrao é 6
algumaFuncao(parametroSemPadrao: 4) // parametroComPadrao é 12
```

Coloque os parâmetros que não têm valores padrão no início da lista de parâmetros de uma função, antes dos parâmetros que têm valores padrão. Parâmetros que não têm valores padrão geralmente são mais importantes para o significado da função - escrevê-los primeiro torna mais fácil reconhecer que a mesma função está sendo chamada, independentemente de quaisquer parâmetros padrão serem omitidos.

### Parâmetros Variádicos

Um parâmetro variádico aceita zero ou mais valores de um tipo especificado. Você utiliza um parâmetro variádico para especificar que o parâmetro pode receber um número variável de valores de entrada quando a função é chamada. Escreva parâmetros variádicos inserindo três pontos (`...`) após o nome do tipo do parâmetro.

Os valores passados a um parâmetro variádico são disponibilizados dentro do corpo da função como um *array* do tipo apropriado. Por exemplo, um parâmetro variádico com o nome de `numeros` e tipo `Double...` fica disponível dentro do corpo da função como um *array* constante chamado `numeros` do tipo `[Double]`.

O exemplo abaixo calcula a média aritmética (também conhecida como média) para uma lista de números de qualquer comprimento:

```swift
func mediaAritmetica(_ numeros: Double...) -> Double {
    var total: Double = 0
    for numero in numeros {
        total += numero
    }
    return total / Double(numeros.count)
}
mediaAritmetica(1, 2, 3, 4, 5)
// retorna 3.0, que é a média aritmética desses cinco números
mediaAritmetica(3, 8.25, 18.75)
// retorna 10.0, que é a média aritmética desses três números
```

Uma função pode ter múltiplos parâmetros variádicos. O primeiro parâmetro que vem após um parâmetro variádico deve ter um rótulo de argumento. O rótulo de argumento torna inequívoco quais argumentos são passados para o parâmetro variádico e quais argumentos são passados para os parâmetros que vêm após o parâmetro variádico.
