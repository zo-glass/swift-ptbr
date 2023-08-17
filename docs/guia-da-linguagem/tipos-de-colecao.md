---
sidebar_position: 4
---

# Tipos de Coleção

## Organize dados usando arrays, sets, e dicionários.

O Swift fornece três principais tipos de coleção, conhecidos como *arrays*, *sets* e dicionários, para armazenar coleções de valores. *Arrays* são coleções ordenadas de valores. *Sets* são coleções não ordenadas de valores únicos. Dicionários são coleções não ordenadas de associações chave-valor.

![CollectionTypes_intro](https://docs.swift.org/swift-book/images/CollectionTypes_intro~dark@2x.png)

*Arrays*, *sets* e dicionários em Swift sempre deixam claro os tipos de valores e chaves que podem armazenar. Isso significa que você não pode inserir um valor do tipo errado em uma coleção por engano. Também significa que você pode ter confiança sobre o tipo de valores que irá recuperar de uma coleção.

> **Nota**
>
> Os tipos de *array*, *sets* e dicionário do Swift são implementados como coleções genéricas. Para saber mais sobre tipos genéricos e coleções, consulte [Genéricos](./genericos.md).

## Mutabilidade de Coleções

Se você cria um *array*, um *set* ou um dicionário, e o atribui a uma variável, a coleção que é criada será mutável. Isso significa que você pode alterar (ou mutar) a coleção depois de criá-la, adicionando, removendo ou alterando itens na coleção. Se você atribuir um *array*, um *set* ou um dicionário a uma constante, essa coleção será imutável, e seu tamanho e conteúdo não poderão ser alterados.

> **Nota**
>
> É uma boa prática criar coleções imutáveis em todos os casos em que a coleção não precisa ser alterada. Fazer isso torna mais fácil para você entender o seu código e permite que o compilador Swift otimize o desempenho das coleções que você cria.

## Arrays

Um *array* armazena valores do mesmo tipo em uma lista ordenada. O mesmo valor pode aparecer várias vezes em um *array* em posições diferentes.

> **Nota**
>
> O tipo `Array` do Swift é conectado à classe `NSArray` da Foundation.
>
> Para obter mais informações sobre o uso de `Array` com a Foundation e o Cocoa, consulte a seção [Ponte entre Array e NSArray](https://developer.apple.com/documentation/swift/array#2846730).

### Sintaxe abreviada do tipo Array

O tipo de um *array* em Swift é escrito completamente como `Array<Element>`, onde `Element` é o tipo de valores que o *array* pode armazenar. Você também pode escrever o tipo de um *array* de forma abreviada como `[Element]`. Embora as duas formas sejam funcionalmente idênticas, a forma abreviada é preferida e é utilizada ao longo deste guia ao se referir ao tipo de um *array*.
