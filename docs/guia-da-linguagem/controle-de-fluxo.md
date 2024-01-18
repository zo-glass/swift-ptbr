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

#### Break em uma Declaração de Loop

Quando usado dentro de uma declaração de *loop*, `break` encerra imediatamente a execução do *loop* e transfere o controle para o código após a chave de fechamento do *loop* (`}`). Nenhum código adicional da iteração atual do *loop* é executado, e nenhuma iteração adicional do *loop* é iniciada.

#### Break em uma Declaração Switch

Quando usado dentro de uma declaração `switch`, `break` faz com que a declaração `switch` encerre sua execução imediatamente e transfira o controle para o código após o fechamento da chave (`}`) da declaração `switch`.

Esse comportamento pode ser utilizado para corresponder e ignorar um ou mais casos em uma declaração `switch`. Como a declaração `switch` do Swift é exaustiva e não permite casos vazios, às vezes é necessário corresponder e explicitamente ignorar um caso para deixar suas intenções claras. Isso é feito escrevendo a declaração `break` como o corpo inteiro do caso que você deseja ignorar. Quando esse caso é correspondido pela declaração `switch`, a declaração `break` dentro do caso encerra imediatamente a execução da declaração `switch`.

> **Nota**
>
> Um caso `switch` que contém apenas um comentário é reportado como um erro de compilação. Comentários não são declarações e não fazem com que um caso `switch` seja ignorado. Sempre utilize uma declaração `break` para ignorar um caso `switch`.

O exemplo a seguir faz um `switch` em um valor `Character` e determina se ele representa um símbolo numérico em um dos quatro idiomas. Para brevidade, múltiplos valores são tratados em um único caso `switch`.

```swift
let simboloNumerico: Character = "三"  // Símbolo chinês para o número 3
var possivelValorInteiro: Int?
switch simboloNumerico {
case "1", "١", "一", "๑":
    possivelValorInteiro = 1
case "2", "٢", "二", "๒":
    possivelValorInteiro = 2
case "3", "٣", "三", "๓":
    possivelValorInteiro = 3
case "4", "٤", "四", "๔":
    possivelValorInteiro = 4
default:
    break
}
if let valorInteiro = possivelValorInteiro {
    print("O valor inteiro de \(simboloNumerico) é \(valorInteiro).")
} else {
    print("Não foi possível encontrar um valor inteiro para \(simboloNumerico).")
}
// Imprime "O valor inteiro de 三 é 3."
```

Este exemplo verifica o `simboloNumerico` para determinar se é um símbolo latino, árabe, chinês ou tailandês para os números de `1` a `4`. Se uma correspondência for encontrada, um dos casos da declaração `switch` define uma variável `Int?` opcional chamada `possivelValorInteiro` para um valor inteiro apropriado.

Após a conclusão da execução da declaração `switch`, o exemplo utiliza o *optional binding* para determinar se um valor foi encontrado. A variável `possivelValorInteiro` possui um valor inicial implícito de `nil` por ser um tipo opcional, portanto, o *optional binding* terá sucesso apenas se `possivelValorInteiro` foi definido como um valor real por um dos primeiros quatro casos da declaração `switch`.

Por não ser prático listar todos os possíveis valores de `Character` no exemplo acima, um caso `default` trata quaisquer caracteres que não sejam correspondidos. Este caso `default` não precisa executar nenhuma ação e, portanto, é escrito com uma única declaração `break` como seu corpo. Assim que o caso `default` é correspondido, a declaração `break` encerra a execução da declaração `switch`, e a execução do código continua a partir da declaração `if let`.

### Fallthrough

Em Swift, declarações `switch` não caem pelo final de cada caso e passam para o próximo. Ou seja, a declaração `switch` completa sua execução assim que o primeiro caso correspondente é concluído. Em contraste, em C, é necessário inserir uma declaração explícita de `break` ao final de cada caso `switch` para evitar a passagem automática para o próximo caso. Evitar a passagem automática padrão significa que as declarações `switch` em Swift são muito mais concisas e previsíveis do que suas contrapartes em C, e, portanto, evitam a execução por engano de múltiplos casos `switch`.

Se você precisa do comportamento de passagem automática no estilo C, pode optar por esse comportamento caso a caso com a palavra-chave `fallthrough`. O exemplo abaixo usa `fallthrough` para criar uma descrição textual de um número.

```swift
let inteiroParaDescrever = 5
var descricao = "O número \(inteiroParaDescrever) é"
switch inteiroParaDescrever {
case 2, 3, 5, 7, 11, 13, 17, 19:
    descricao += " um número primo, e também"
    fallthrough
default:
    descricao += " um inteiro."
}
print(descricao)
// Imprime "O número 5 é um número primo, e também um inteiro."
```

Este exemplo declara uma nova variável `String` chamada `descricao` e atribui a ela um valor inicial. A função então considera o valor de `inteiroParaDescrever` usando uma declaração `switch`. Se o valor de `inteiroParaDescrever` for um dos números primos na lista, a função acrescenta texto ao final de `descricao`, para indicar que o número é primo. Em seguida, usa a palavra-chave `fallthrough` para "cair" no caso `default` também. O caso `default` adiciona algum texto extra ao final da descrição, e a declaração `switch` está completa.

A menos que o valor de `inteiroParaDescrever` esteja na lista de números primos conhecidos, ele não é correspondido pelo primeiro caso `switch` de forma alguma. Como não há outros casos específicos, `inteiroParaDescrever` é correspondido pelo caso `default`.

Depois que a declaração `switch` termina de executar, a descrição do número é impressa usando a função `print(_:separator:terminator:)`. Neste exemplo, o número `5` é corretamente identificado como um número primo.

> **Nota**
>
> A palavra-chave `fallthrough` não verifica as condições do caso de `switch` em que causa a execução de cair. A palavra-chave `fallthrough` simplesmente faz com que a execução do código se mova diretamente para as instruções dentro do próximo caso (ou caso `default`), como no comportamento padrão da instrução `switch` em C.

### Declarações Rotuladas

Em Swift, é possível aninhar *loops* e declarações condicionais dentro de outros *loops* e declarações condicionais para criar estruturas complexas de fluxo de controle. No entanto, tanto *loops* quanto declarações condicionais podem utilizar a declaração `break` para encerrar prematuramente sua execução. Portanto, às vezes é útil ser explícito sobre qual *loop* ou declaração condicional você deseja que a declaração `break` termine. Da mesma forma, se você tiver vários *loops* aninhados, pode ser útil ser explícito sobre qual *loop* a declaração `continue` deve afetar.

Para alcançar esses objetivos, é possível marcar uma declaração de *loop* ou declaração condicional com um rótulo de declaração. Com uma declaração condicional, você pode usar um rótulo de declaração com a declaração `break` para encerrar a execução da declaração rotulada. Com uma declaração de *loop*, é possível usar um rótulo de declaração com a declaração `break` ou `continue` para encerrar ou continuar a execução da declaração rotulada.

Uma declaração rotulada é indicada ao colocar um rótulo na mesma linha que a palavra-chave introdutória da declaração, seguido por dois pontos. Aqui está um exemplo dessa sintaxe para um *loop* `while`, embora o princípio seja o mesmo para todos os *loops* e declarações `switch`:

```swift
<#label name#>: while <#condition#> {
   <#statements#>
}
```

O seguinte exemplo utiliza as declarações `break` e `continue` com um *loop* `while` rotulado para uma versão adaptada do jogo *Snakes and Ladders* que você viu anteriormente neste capítulo. Desta vez, o jogo possui uma regra extra:

- Para vencer, você deve pousar exatamente na casa 25.

Se uma jogada de dado específica o levar além da casa 25, você deve jogar novamente até obter o número exato necessário para pousar na casa 25.

O tabuleiro do jogo é o mesmo que antes.

![snakesAndLadders](https://docs.swift.org/swift-book/images/snakesAndLadders~dark@2x.png)

Os valores de `casaFinal`, `tabuleiro`, `casa` e `resultadoDoDado` são inicializados da mesma forma que anteriormente:

```swift
let casaFinal = 25
var tabuleiro = [Int](repeating: 0, count: casaFinal + 1)
tabuleiro[03] = +08; tabuleiro[06] = +11; tabuleiro[09] = +09; tabuleiro[10] = +02
tabuleiro[14] = -10; tabuleiro[19] = -11; tabuleiro[22] = -02; tabuleiro[24] = -08
var casa = 0
var resultadoDoDado = 0
```

Esta versão do jogo utiliza um *loop* `while` e uma declaração `switch` para implementar a lógica do jogo. O *loop* `while` possui um rótulo de declaração chamado `loopDoJogo` para indicar que é o *loop* principal do jogo `Snakes and Ladders`.

A condição do *loop* `while` é `while casa != casaFinal`, para refletir que é necessário pousar exatamente no quadrado 25.

```swift
loopDoJogo: while casa != casaFinal {
    resultadoDoDado += 1
    if resultadoDoDado == 7 { resultadoDoDado = 1 }
    switch casa + resultadoDoDado {
    case casaFinal:
        // resultadoDoDado nos levará ao quadrado final, então o jogo acabou
        break loopDoJogo
    case let novaCasa where novaCasa > casaFinal:
        // resultadoDoDado nos levará além do quadrado final, então role novamente
        continue loopDoJogo
    default:
        // esta é uma jogada válida, então descubra o seu efeito
        casa += resultadoDoDado
        casa += tabuleiro[casa]
    }
}
print("Fim do jogo!")
```

O dado é lançado no início de cada *loop*. Em vez de mover imediatamente o jogador, o *loop* utiliza uma declaração `switch` para considerar o resultado do movimento e determinar se o movimento é permitido:

- Se o resultado do dado mover o jogador para a última casa, o jogo acaba. A declaração `break loopDoJogo` transfere o controle para a primeira linha de código fora do *loop* `while`, encerrando o jogo.
- Se o resultado do dado mover o jogador além da última casa, o movimento é inválido e o jogador precisa lançar o dado novamente. A declaração `continue loopDoJogo` encerra a iteração atual do *loop* `while` e inicia a próxima iteração do *loop*.
- Em todos os outros casos, o resultado do dado representa um movimento válido. O jogador avança pelo número de casas indicado por `resultadoDoDado`, e a lógica do jogo verifica a presença de cobras e escadas. O *loop* então termina, e o controle retorna à condição do `while` para decidir se é necessário mais uma rodada.

> **Nota**
>
> Se a declaração `break` acima não utilizasse o rótulo `loopDoJogo`, ela interromperia a declaração `switch`, e não a declaração `while`. Usar o rótulo `loopDoJogo` torna claro qual declaração de controle deve ser encerrada.
>
> Não é estritamente necessário usar o rótulo `loopDoJogo` ao chamar `continue loopDoJogo` para pular para a próxima iteração do *loop*. Há apenas um *loop* no jogo, e, portanto, não há ambiguidade sobre qual *loop* a declaração continue afetará. No entanto, não há problema em usar o rótulo `loopDoJogo` com a declaração `continue`. Fazê-lo é consistente com o uso do rótulo junto com a declaração `break` e ajuda a tornar a lógica do jogo mais clara para ser lida e compreendida.

## Saída Antecipada

Uma declaração `guard`, assim como uma declaração `if`, executa declarações dependendo do valor booleano de uma expressão. Você utiliza uma declaração `guard` para exigir que uma condição seja verdadeira para que o código após a declaração `guard` seja executado. Ao contrário de uma declaração `if`, uma declaração `guard` sempre possui uma cláusula `else` — o código dentro da cláusula `else` é executado se a condição não for verdadeira.

```swift
func saudar(pessoa: [String: String]) {
    guard let nome = pessoa["nome"] else {
        return
    }

    print("Olá \(nome)!")

    guard let localizacao = pessoa["localizacao"] else {
        print("Espero que o clima esteja agradável perto de você.")
        return
    }

    print("Espero que o clima esteja agradável em \(localizacao).")
}

saudar(pessoa: ["nome": "John"])
// Imprime "Olá John!"
// Imprime "Espero que o clima esteja agradável perto de você."
saudar(pessoa: ["nome": "Jane", "localizacao": "Cupertino"])
// Imprime "Olá Jane!"
// Imprime "Espero que o clima esteja agradável em Cupertino."
```

## Estruture código com ramificações, loops e saídas antecipadas.

## Saída Antecipada
