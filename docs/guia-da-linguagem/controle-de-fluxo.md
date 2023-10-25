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

O conteúdo de um `Dictionary` é inerentemente desordenado, e iterar sobre eles não garante a ordem em que serão recuperados. Em particular, a ordem em que você insere itens em um `Dictionary` não define a ordem em que são iterados. Para obter mais informações sobre *arrays* e dicionários, consulte [Tipos de Coleção](./tipos-de-colecao.md).

Você também pode usar *loops* `for-in` com intervalos numéricos. Este exemplo imprime as primeiras entradas na tabuada do cinco:

```swift
for indice in 1...5 {
    print("\(indice) vezes 5 é \(indice * 5)")
}
// 1 vezes 5 é 5
// 2 vezes 5 é 10
// 3 vezes 5 é 15
// 4 vezes 5 é 20
// 5 vezes 5 é 25
```

A sequência sendo iterada é um intervalo de números de `1` a `5`, inclusivos, conforme indicado pelo uso do operador de intervalo fechado (`...`). O valor do `indice` é definido como o primeiro número no intervalo (`1`), e as declarações dentro do *loop* são executadas. Neste caso, o *loop* contém apenas uma declaração, que imprime uma entrada da tabuada do cinco para o valor atual do `indice`. Após a execução da declaração, o valor do `índice` é atualizado para conter o segundo valor no intervalo (`2`), e a função `print(_:separator:terminator:)` é chamada novamente. Esse processo continua até o final do intervalo ser alcançado.

No exemplo acima, o `indice` é uma constante cujo valor é automaticamente definido no início de cada iteração do *loop*. Como tal, o `indice` não precisa ser declarado antes de ser usado. Ele é implicitamente declarado apenas por sua inclusão na declaração do *loop*, sem a necessidade de uma palavra-chave de declaração `let`.

Se você não precisa de cada valor de uma sequência, pode ignorar os valores usando um sublinhado no lugar de um nome de variável.

```swift
let base = 3
let potencia = 10
var resposta = 1
for _ in 1...potencia {
    resposta *= base
}
print("\(base) elevado à potência de \(potencia) é \(resposta)")
// Imprime "3 elevado à potência de 10 é 59049"
```

O exemplo acima calcula o valor de um número elevado à potência de outro (neste caso, `3` elevado à `10`). Ele multiplica um valor inicial de `1` (ou seja, `3` elevado à potência de `0`) por `3`, dez vezes, usando um intervalo fechado que começa em `1` e termina em `10`. Para esse cálculo, os valores individuais do contador a cada passagem pelo *loop* são desnecessários - o código simplesmente executa o *loop* o número correto de vezes. O caractere sublinhado (`_`) usado no lugar de uma variável de *loop* faz com que os valores individuais sejam ignorados e não fornece acesso ao valor atual durante cada iteração do *loop*.

Em algumas situações, você pode não querer usar intervalos fechados, que incluem ambos os pontos finais. Considere desenhar as marcações de minutos em um mostrador de relógio. Você deseja desenhar `60` marcações de minutos, começando com o minuto `0`. Use o operador de intervalo semiaberto (`..<`) para incluir o limite inferior, mas não o superior. Para obter mais informações sobre intervalos, consulte [Operadores de Intervalo](./operadores-basicos.md/#operadores-de-intervalo).

```swift
let minutos = 60
for marcacao in 0..<minutos {
    // renderizar a marcação de minuto (60 vezes)
}
```

Alguns usuários podem preferir menos marcas em sua UI (interface de usuário). Eles podem preferir uma marca a cada `5` minutos, em vez disso. Use a função `stride(from:to:by:)` para pular as marcas indesejadas.

```swift
let intervaloDeMinutos = 5
for marcacao in stride(from: 0, to: minutos, by: intervaloDeMinutos) {
    // renderize a marca de tempo a cada 5 minutos (0, 5, 10, 15 ... 45, 50, 55)
}
```

## Estruture código com ramificações, loops e saídas antecipadas.

## Saída Antecipada
