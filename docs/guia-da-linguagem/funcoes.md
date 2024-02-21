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

## Funções com vários valores de retorno

## Valores de Parâmetro Padrão
