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

Intervalos fechados também estão disponíveis, usando `stride(from:through:by:)` em vez disso:

```swift
let horas = 12
let intervaloDeHoras = 3

for marcacao in stride(from: 3, through: horas, by: intervaloDeHoras) {
    // Renderize a marca de tempo a cada 3 horas (3, 6, 9, 12)
}
```

Os exemplos acima usam um *loop* `for-in` para iterar em intervalos, *arrays*, dicionários e *strings*. No entanto, você pode usar essa sintaxe para iterar em qualquer coleção, incluindo suas próprias classes e tipos de coleção, contanto que esses tipos estejam em conformidade com o protocolo [Sequence](https://developer.apple.com/documentation/swift/sequence).

## Loops While

Um *loop* `while` executa um conjunto de instruções até que uma condição se torne `false`. Esses tipos de *loops* são mais bem utilizados quando o número de iterações não é conhecido antes do início da primeira iteração. O Swift oferece dois tipos de *loops* `while`:

- O `while` avalia sua condição no início de cada passagem pelo *loop*.
- O `repeat-while` avalia sua condição no final de cada passagem pelo *loop*.

### While

Um *loop* `while` começa avaliando uma única condição. Se a condição for `true`, um conjunto de instruções é repetido até que a condição se torne `false`.

Aqui está a forma geral de um *loop* `while`:

```swift
while <#condition#> {
   <#statements#>
}
```

Este exemplo joga um jogo simples de *Snakes and Ladders* (também conhecido como *Chutes and Ladders*):

![snakesAndLadders](https://docs.swift.org/swift-book/images/snakesAndLadders~dark@2x.png)

As regras do jogo são as seguintes:

- O tabuleiro possui 25 casas, e o objetivo é pousar na casa 25 ou além dela.
- A casa de início do jogador é a "casa zero", que fica logo abaixo do canto inferior esquerdo do tabuleiro.
- A cada turno, você rola um dado de seis faces e se move pelo número de casas indicado, seguindo o caminho horizontal indicado pela seta pontilhada acima.
- Se o seu turno terminar na base de uma escada, você sobe por ela.
- Se o seu turno terminar na cabeça de uma cobra, você desce por ela.

O tabuleiro de jogo é representado por um *array* de valores `Int`. Seu tamanho é baseado em uma constante chamada `finalSquare`, que é usada para inicializar o *array* e também para verificar a condição de vitória mais tarde no exemplo. Como os jogadores começam fora do tabuleiro, na "casa zero", o tabuleiro é inicializado com 26 valores `Int` zeros, e não 25.

```swift
let casaFinal = 25
var tabuleiro = [Int](repeating: 0, count: casaFinal + 1)
```

Algumas casas são então designadas com valores mais específicos para as cobras e escadas. As casas com uma base de escada têm um número positivo para fazer você subir no tabuleiro, enquanto as casas com uma cabeça de cobra têm um número negativo para fazer você descer no tabuleiro.

```swift
tabuleiro[03] = +08; tabuleiro[06] = +11; tabuleiro[09] = +09; tabuleiro[10] = +02
tabuleiro[14] = -10; tabuleiro[19] = -11; tabuleiro[22] = -02; tabuleiro[24] = -08
```

A casa 3 contém a base de uma escada que o move para a casa 11. Para representar isso, `tabuleiro[03]` é igual a `+08`, o que é equivalente a um valor inteiro de `8` (a diferença entre `3` e `11`). Para alinhar os valores e instruções, o operador unário de mais (`+i`) é explicitamente usado com o operador unário de menos (`-i`) e os números menores que `10` são preenchidos com zeros. (Nenhuma dessas técnicas de estilo é estritamente necessária, mas levam a um código mais organizado.)

```swift
var casa = 0
var resultadoDoDado = 0
while casa < casaFinal {
    // lançar o dado
    resultadoDoDado += 1
    if resultadoDoDado == 7 { resultadoDoDado = 1 }
    // mover-se pela quantidade obtida no dado
    casa += resultadoDoDado
    if casa < tabuleiro.count {
        // se ainda estivermos no tabuleiro, mover-se para cima ou para baixo por uma cobra ou uma escada
        casa += tabuleiro[casa]
    }
}
print("Fim do jogo!")
```

O exemplo acima usa uma abordagem muito simples para a rolagem de dados. Em vez de gerar um número aleatório, ele começa com um valor de `resultadoDoDado` de `0`. A cada iteração do *loop while*, `resultadoDoDado` é incrementado em um e, em seguida, é verificado se ele se tornou muito grande. Sempre que esse valor se iguala a `7`, a rolagem de dados se tornou muito grande e é redefinida para um valor de `1`. O resultado é uma sequência de valores de `resultadoDoDado` que sempre são `1`, `2`, `3`, `4`, `5`, `6`, `1`, `2` e assim por diante.

Depois de rolar o dado, o jogador avança o número de casas igual ao valor de `resultadoDoDado`. É possível que a rolagem do dado tenha movido o jogador além da casa 25, nesse caso, o jogo acaba. Para lidar com esse cenário, o código verifica se a `casa` é menor que a propriedade `count` do *array* `tabuleiro`. Se a `casa` for válida, o valor armazenado em `tabuleiro[casa]` é adicionado ao valor atual da `casa` para mover o jogador para cima ou para baixo em escadas ou cobras.

> **Nota**
>
> Se essa verificação não for realizada, `tabuleiro[casa]` poderá tentar acessar um valor fora dos limites do *array* `tabuleiro`, o que desencadearia um erro em tempo de execução.

## Estruture código com ramificações, loops e saídas antecipadas.

## Saída Antecipada
