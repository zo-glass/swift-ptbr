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

A execução atual do *loop* `while` então termina, e a condição do *loop* é verificada para ver se o *loop* deve ser executado novamente. Se o jogador tiver avançado ou além da casa `25`, a condição do *loop* avalia para `false` e o jogo termina.

Um *loop* `while` é apropriado neste caso, porque o comprimento do jogo não está claro no início do *loop* `while`. Em vez disso, o *loop* é executado até que uma condição específica seja satisfeita.

### Repeat-While

A outra variação do *loop* `while`, conhecida como o *loop* `repeat-while`, realiza uma única passagem pelo bloco do *loop* primeiro, antes de considerar a condição do *loop*. Em seguida, continua a repetir o *loop* até que a condição seja falsa.

> **Nota**
>
> O *loop* `repeat-while` em Swift é análogo a um *loop* `do-while` em outras linguagens.

Aqui está a forma geral de um *loop* `repeat-while`:

```swift
repeat {
   <#statements#>
} while <#condition#>
```

Aqui está o exemplo de *Snakes and Ladders* novamente, escrito como um *loop* `repeat-while` em vez de um *loop* `while`. Os valores de `casaFinal`, `tabuleiro`, `casa` e `resultadoDoDado` são inicializados exatamente da mesma forma que em um *loop* `while`.

```swift
let casaFinal = 25
var tabuleiro = [Int](repeating: 0, count: casaFinal + 1)
tabuleiro[03] = +08; tabuleiro[06] = +11; tabuleiro[09] = +09; tabuleiro[10] = +02
tabuleiro[14] = -10; tabuleiro[19] = -11; tabuleiro[22] = -02; tabuleiro[24] = -08
var casa = 0
var resultadoDoDado = 0
```

Nesta versão do jogo, a primeira ação no *loop* é verificar se há uma escada ou uma cobra. Não há escada no tabuleiro que leve o jogador diretamente para a casa 25, então não é possível vencer o jogo subindo por uma escada. Portanto, é seguro verificar se há uma cobra ou uma escada como a primeira ação no *loop*.

No início do jogo, o jogador está na "casa zero". `board[0]` sempre é igual a `0` e não tem efeito.

```swift
repeat {
    // mover para cima ou para baixo por uma cobra ou escada
    casa += tabuleiro[casa]
    // rolar o dado
    resultadoDoDado += 1
    if resultadoDoDado == 7 { resultadoDoDado = 1 }
    // mover pela quantidade rolada
    casa += resultadoDoDado
} while casa < casaFinal
print("Fim do jogo!")
```

Após o código verificar cobras e escadas, o dado é lançado e o jogador avança um número de casas equivalente ao `resultadoDoDado`. A execução atual do *loop* então termina.

A condição do *loop* (`while casa < casaFinal`) é a mesma de antes, mas desta vez não é avaliada até o final da primeira passagem pelo *loop*. A estrutura do *loop* `repeat`-`while` é mais adequada a este jogo do que o *loop* `while` na versão anterior. No *loop* `repeat`-`while` acima, `casa += tabuleiro[casa]` é sempre executado imediatamente após a condição do *loop* `while` confirmar que `casa` ainda está no tabuleiro. Esse comportamento elimina a necessidade da verificação dos limites do *array* vista na versão do jogo com o *loop* `while` descrito anteriormente.

## Instruções Condicionais

É frequentemente útil executar diferentes trechos de código com base em certas condições. Você pode querer executar um código extra quando ocorre um erro, ou exibir uma mensagem quando um valor se torna muito alto ou muito baixo. Para fazer isso, você torna partes do seu código condicionais.

O Swift oferece duas maneiras de adicionar ramos condicionais ao seu código: a instrução `if` e a instrução `switch`. Normalmente, você usa a instrução `if` para avaliar condições simples com apenas algumas possíveis saídas. A instrução `switch` é mais adequada para condições mais complexas com múltiplas permutações possíveis e é útil em situações onde a correspondência de padrões pode ajudar a selecionar um ramo de código apropriado para executar.

### If

Em sua forma mais simples, a instrução `if` possui uma única condição `if`. Ela executa um conjunto de instruções somente se essa condição for verdadeira.

```swift
var temperaturaEmFahrenheit = 30
if temperaturaEmFahrenheit <= 32 {
    print("Está muito frio. Considere usar um cachecol.")
}
// Imprime "Está muito frio. Considere usar um cachecol."
```

O exemplo acima verifica se a temperatura é menor ou igual a 32 graus Fahrenheit (o ponto de congelamento da água). Se for, uma mensagem é impressa. Caso contrário, nenhuma mensagem é impressa, e a execução do código continua após o fechamento do bloco `if`.

A instrução `if` pode fornecer um conjunto alternativo de instruções, conhecido como cláusula `else`, para situações em que a condição do `if` é `false`. Essas instruções são indicadas pela palavra-chave `else`.

```swift
let temperaturaEmFahrenheit = 40
if temperaturaEmFahrenheit <= 32 {
    print("Está muito frio. Considere usar um cachecol.")
} else {
    print("Não está tão frio. Use uma camiseta.")
}
// Imprime "Não está tão frio. Use uma camiseta."
```

Um desses dois ramos é sempre executado. Como a temperatura aumentou para `40` graus Fahrenheit, não está mais frio o suficiente para aconselhar o uso de cachecol, então o ramo `else` é acionado em vez disso.

Você pode encadear múltiplas instruções `if` para considerar cláusulas adicionais.

```swift
let temperaturaEmFahrenheit = 90
if temperaturaEmFahrenheit <= 32 {
    print("Está muito frio. Considere usar um cachecol.")
} else if temperaturaEmFahrenheit >= 86 {
    print("Está realmente quente. Não se esqueça de usar protetor solar.")
} else {
    print("Não está tão frio. Use uma camiseta.")
}
// Imprime "Está realmente quente. Não se esqueça de usar protetor solar."
```

Aqui, foi adicionada uma instrução `if` adicional para responder a temperaturas particularmente altas. A cláusula `else` final permanece e imprime uma resposta para quaisquer temperaturas que não sejam muito altas ou muito baixas.

Entretanto, a cláusula `else` final é opcional e pode ser excluída se o conjunto de condições não precisar ser completo.

```swift
var temperaturaEmFahrenheit = 72
if temperaturaEmFahrenheit <= 32 {
    print("Está muito frio. Considere usar um cachecol.")
} else if temperaturaEmFahrenheit >= 86 {
    print("Está realmente quente. Não se esqueça de usar protetor solar.")
}
```

Porque a temperatura não está fria o suficiente para acionar a condição `if` ou quente o suficiente para acionar a condição `else if`, nenhuma mensagem é impressa.

Swift fornece uma grafia abreviada do `if` que você pode usar ao definir valores. Por exemplo, considere o seguinte código:

```swift
let temperaturaEmCelsius = 25
var conselhoMeteorologico: String

if temperaturaEmCelsius <= 0 {
    conselhoMeteorologico = "Está muito frio. Considere usar um cachecol."
} else if temperaturaEmCelsius >= 30 {
    conselhoMeteorologico = "Está realmente quente. Não se esqueça de usar protetor solar."
} else {
    conselhoMeteorologico = "Não está tão frio. Use uma camiseta."
}

print(conselhoMeteorologico)
// Imprime "Não está tão frio. Use uma camiseta."
```

Aqui, cada um dos ramos define um valor para a constante `conselhoMeteorologico`, que é impressa após a instrução `if`.

Utilizando a sintaxe alternativa, conhecida como expressão `if`, você pode escrever este código de forma mais concisa:

```swift
let conselhoMeteorologico: String

if temperaturaEmCelsius <= 0 {
    conselhoMeteorologico = "Está muito frio. Considere usar cachecol."
} else if temperaturaEmCelsius >= 30 {
    conselhoMeteorologico = "Está realmente quente. Não se esqueça de usar protetor solar."
} else {
    conselhoMeteorologico = "Não está tão frio. Use uma camiseta."
}

print(conselhoMeteorologico)
// Imprime "Não está tão frio. Use uma camiseta."
```

Nesta versão da expressão `if`, cada ramo contém um único valor. Se a condição de um ramo for verdadeira, então o valor desse ramo é usado como o valor para toda a expressão `if` na atribuição de `conselhoMeteorologico`. Cada ramo `if` possui um correspondente ramo `else if` ou `else`, garantindo que um dos ramos sempre seja correspondido e que a expressão `if` sempre produza um valor, independentemente de quais condições sejam verdadeiras.

Devido à sintaxe da atribuição começar fora da expressão `if`, não há necessidade de repetir `conselhoMeteorologico =` dentro de cada ramo. Em vez disso, cada ramo da expressão `if` produz um dos três possíveis valores para `conselhoMeteorologico`, e a atribuição usa esse valor.

Todos os ramos de uma expressão `if` precisam conter valores do mesmo tipo. Como o Swift verifica o tipo de cada ramo separadamente, valores como `nil` que podem ser usados com mais de um tipo impedem o Swift de determinar automaticamente o tipo da expressão `if`. Em vez disso, é necessário especificar o tipo explicitamente - por exemplo:

```swift
let avisoDeCongelamento: String? = if temperaturaEmCelsius <= 0 {
    "Está abaixo de zero. Cuidado com o gelo!"
} else {
    nil
}
```

No código acima, um dos ramos da expressão `if` possui um valor de *string* e o outro ramo possui um valor `nil`. O valor `nil` pode ser usado como valor para qualquer tipo opcional, então você precisa explicitamente escrever que `avisoDeCongelamento` é uma *string* opcional, conforme descrito em [Type Annotations](./o-basico.md/#type-annotations).

Uma forma alternativa de fornecer essa informação de tipo é fornecer um tipo explícito para `nil`, em vez de fornecer um tipo explícito para `avisoDeCongelamento`:

```swift
let avisoDeCongelamento = if temperaturaEmCelsius <= 0 {
    "Está abaixo de zero. Cuidado com o gelo!"
} else {
    nil as String?
}
```

Uma expressão `if` pode reagir a falhas inesperadas lançando um erro ou chamando uma função como `fatalError(_:file:line:)` que nunca retorna. Por exemplo:

```swift
let conselhoMeteorologico = if temperaturaEmCelsius > 100 {
    throw ErroTemperatura.ebulicao
} else {
    "É uma temperatura razoável."
}
```

Neste exemplo, a expressão `if` verifica se a temperatura prevista está mais quente do que 100°C - o ponto de ebulição da água. Uma temperatura tão alta faz com que a expressão `if` lance um erro de `.ebulicao` em vez de retornar um resumo textual. Mesmo que essa expressão `if` possa gerar um erro, você não escreve um `try` antes dela. Para informações sobre como lidar com erros, consulte o [Tratamento de Erros](./tratamento-de-erros.md).

Além de usar expressões `if` no lado direito de uma atribuição, como mostrado nos exemplos acima, você também pode usá-las como o valor retornado por uma função ou *closure*.

### Switch

Uma declaração `switch` considera um valor e o compara com vários padrões correspondentes possíveis. Em seguida, executa um bloco de código apropriado, com base no primeiro padrão que corresponde com sucesso. Uma declaração `switch` oferece uma alternativa à declaração `if` para responder a múltiplos estados potenciais.

Em sua forma mais simples, uma declaração `switch` compara um valor com um ou mais valores do mesmo tipo.

```swift
switch <#some value to consider#> {
case <#value 1#>:
    <#respond to value 1#>
case <#value 2#>,
    <#value 3#>:
    <#respond to value 2 or 3#>
default:
    <#otherwise, do something else#>
}
```

Cada declaração `switch` consiste em vários casos possíveis, cada um dos quais começa com a palavra-chave `case`. Além de comparar valores específicos, o Swift oferece várias maneiras para cada caso especificar padrões de correspondência mais complexos. Essas opções são descritas mais adiante neste capítulo.

Assim como o corpo de uma declaração `if`, cada `case` é um ramo separado de execução de código. A declaração `switch` determina qual ramo deve ser selecionado. Esse procedimento é conhecido como *switching* no valor que está sendo considerado.

Toda declaração `switch` deve ser exaustiva. Ou seja, todo valor possível do tipo sendo considerado deve ser correspondido por um dos casos `switch`. Se não for apropriado fornecer um caso para cada valor possível, você pode definir um caso padrão para cobrir quaisquer valores que não sejam abordados explicitamente. Esse caso padrão é indicado pela palavra-chave `default` e sempre deve aparecer por último.

Este exemplo usa uma declaração `switch` para considerar um único caractere minúsculo chamado `algumCaractere`:

```swift
let algumCaractere: Character = "z"
switch algumCaractere {
case "a":
    print("A primeira letra do alfabeto latino")
case "z":
    print("A última letra do alfabeto latino")
default:
    print("Algum outro caractere")
}
// Imprime "A última letra do alfabeto latino"
```

O primeiro caso da instrução `switch` corresponde à primeira letra do alfabeto inglês, `a`, e o segundo caso corresponde à última letra, `z`. Como o `switch` precisa ter um caso para cada caractere possível, não apenas para cada caractere alfabético, esta instrução `switch` utiliza um caso `default` para corresponder a todos os caracteres que não são `a` e `z`. Essa disposição garante que a instrução `switch` seja abrangente.

Assim como as instruções `if`, as instruções `switch` também têm uma forma de expressão:

```swift
let outroCaractere: Character = "a"
let mensagem = switch outroCaractere {
    case "a":
        "A primeira letra do alfabeto latino"
    case "z":
        "A última letra do alfabeto latino"
    default:
        "Algum outro caractere"
}

print(message)
// Imprime "A primeira letra do alfabeto latino"
```

Neste exemplo, cada caso na expressão `switch` contém o valor de `mensagem` a ser usada quando esse caso corresponde a `outroCaractere`. Como o `switch` é sempre exaustivo, há sempre um valor a atribuir.

Assim como nas expressões `if`, você pode lançar um erro ou chamar uma função como `fatalError(_:file:line:)` que nunca retorna, em vez de fornecer um valor para um caso específico. Você pode usar expressões `switch` no lado direito de uma atribuição, como mostrado no exemplo acima, e como valor que uma função ou *closure* retorna.

## Declarações de Transferência de Controle

Declarações de transferência de controle alteram a ordem na qual seu código é executado, transferindo o controle de uma parte do código para outra. Swift possui cinco declarações de transferência de controle:

- `continue`
- `break`
- `fallthrough`
- `return`
- `throw`

As declarações `continue`, `break` e `fallthrough` são descritas abaixo. A declaração `return` é descrita em [Funções](./funcoes.md), e a declaração `throw` é descrita em [Propagação de Erros usando Throwing Functions](./tratamento-de-erros.md/#propagação-de-erros-usando-throwing-functions).

### Continue

A instrução `continue` indica a um *loop* que pare o que está fazendo e comece novamente no início da próxima iteração através do *loop*. Ela diz "Terminei a iteração atual do *loop*" sem sair completamente do *loop*.

O exemplo a seguir remove todas as vogais e espaços de uma *string* em minúsculas para criar uma frase enigmática:

```swift
let entradaEnigma = "grandes mentes pensam igual"
var saidaEnigma = ""
let caracteresParaRemover: [Character] = ["a", "e", "i", "o", "u", " "]

for caractere in entradaEnigma {
    if caracteresParaRemover.contains(caractere) {
        continue
    }
    saidaEnigma.append(caractere)
}

print(saidaEnigma) // Imprime "grndsmntspnsmgl"
```

O código acima utiliza a instrução `continue` sempre que encontra uma vogal ou um espaço, fazendo com que a iteração atual do *loop* termine imediatamente e pule diretamente para o início da próxima iteração.

### Break

A declaração `break` encerra imediatamente a execução de toda uma declaração de fluxo de controle. A declaração `break` pode ser usada dentro de um `switch` ou declaração de *loop* quando você deseja encerrar a execução do `switch` ou declaração de *loop* mais cedo do que seria o caso de outra forma.

## Estruture código com ramificações, loops e saídas antecipadas.

## Saída Antecipada
