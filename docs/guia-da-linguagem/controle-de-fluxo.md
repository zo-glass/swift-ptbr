---
sidebar_position: 5
---

# Controle de fluxo

O Swift oferece uma variedade de instruções de fluxo de controle. Estas incluem *loops* `while` para realizar uma tarefa várias vezes; instruções `if`, `guard` e `switch` para executar diferentes ramos de código com base em determinadas condições; e instruções como `break` e `continue` para transferir o fluxo de execução para outro ponto no seu código. O Swift fornece um *loop* `for-in` que facilita a iteração sobre *arrays*, dicionários, intervalos, strings e outras sequências. O Swift também fornece instruções `defer`, que encapsulam código a ser executado ao sair do escopo atual.

A instrução `switch` do Swift é consideravelmente mais poderosa do que sua contraparte em muitas linguagens semelhantes a C. Os *cases* podem corresponder a muitos padrões diferentes, incluindo correspondências de intervalo, tuplas e conversões para um tipo específico. Valores correspondentes em um `switch` *case* podem ser vinculados a constantes ou variáveis temporárias para uso dentro do corpo do caso, e condições de correspondência complexas podem ser expressas com uma cláusula `where` para cada *case*.

## Loops For-In

Você usa o *loop* `for-in` para iterar sobre uma sequência, como itens em um *array*, intervalos de números ou caracteres em uma *string*.

Este exemplo usa um *loop* `for-in` para iterar sobre os itens em um *array*:

```swift
let nomes = ["Anna", "Alex", "Brian", "Jack"]
for nome in nomes {
    print("Olá, \(nome)!")
}
// Olá, Anna!
// Olá, Alex!
// Olá, Brian!
// Olá, Jack!
```

Você também pode iterar sobre um dicionário para acessar seus pares de chave e valor. Cada item no dicionário é retornado como uma tupla `(key, value)` quando o dicionário é iterado, e você pode decompor os membros da tupla `(key, value)` como constantes explicitamente nomeadas para uso dentro do corpo do *loop* `for-in`. No exemplo de código abaixo, as chaves do dicionário são decompostas em uma constante chamada `nomeDoAnimal`, e os valores do dicionário são decompostos em uma constante chamada `contagemDePernas`.

```swift
let numeroDePernas = ["aranha": 8, "formiga": 6, "gato": 4]
for (nomeDoAnimal, contagemDePernas) in numeroDePernas {
    print("\(nomeDoAnimal)s têm \(contagemDePernas) pernas")
}
// gatos têm 4 pernas
// formigas têm 6 pernas
// aranhas têm 8 pernas
```

## Estruture código com ramificações, loops e saídas antecipadas.

## Saída Antecipada
