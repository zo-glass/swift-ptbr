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

## Funções com vários valores de retorno

## Rótulos de Argumentos de Função e Nomes de Parâmetros

## Valores de Parâmetro Padrão
