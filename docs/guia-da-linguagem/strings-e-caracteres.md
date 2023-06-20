---
sidebar_position: 3
---

# Strings e caracteres

Uma *string* é uma série de caracteres, como `"olá, mundo"` ou `"albatroz"`. As *strings* em Swift são representadas pelo tipo `String`. O conteúdo de uma `String` pode ser acessado de várias maneiras, inclusive como uma coleção de valores de `Character`.

Os tipos `String` e `Character` do Swift fornecem uma maneira rápida, compatível com Unicode de trabalhar com texto em seu código. A sintaxe para criação e manipulação de strings é leve e legível, com uma sintaxe literal de *string* semelhante à linguagem C. A concatenação de *strings* é tão simples quanto combinar duas *strings* com o operador `+`, e a mutabilidade de *strings* é gerenciada escolhendo entre uma constante ou uma variável, assim como qualquer outro valor em Swift. Você também pode usar *strings* para inserir constantes, variáveis, literais e expressões em *strings* mais longas, em um processo conhecido como interpolação de *strings*. Isso facilita a criação de valores de *string* personalizados para exibição, armazenamento, e impressão.

Apesar dessa simplicidade de sintaxe, o tipo `String` do Swift é uma implementação de *string* rápida e moderna. Cada *string* é composta por caracteres Unicode independentes de codificação e oferece suporte para acessar esses caracteres em várias representações Unicode.

> **Nota**
>
> O tipo `String` do Swift é interligado com a classe `NSString` do Foundation. O Foundation também estende o `String` para expor os métodos definidos pela `NSString`. Isso significa que, se você importar o Foundation, poderá acessar esses métodos do `NSString` no `String` sem a necessidade de fazer uma conversão explícita.
>
> Para obter mais informações sobre o uso de `String` com Foundation e Cocoa, consulte [Bridging Between String and NSString](https://developer.apple.com/documentation/swift/string#2919514).

## Literais de String

Você pode incluir valores de `String` predefinidos em seu código como literais de *string*. Um literal de *string* é uma sequência de caracteres cercada por aspas duplas (`"`).

Use um literal de *string* como valor inicial para uma constante ou variável:

```swift
let algumaString = "Algum valor literal de string"
```

Observe que o Swift infere um tipo de `String `para a constante `algumaString` porque ela é inicializada com um valor literal de string.

## Armazene e manipule texto.

## Interpolação de String
