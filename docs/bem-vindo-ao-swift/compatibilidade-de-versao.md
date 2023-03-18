---
sidebar_position: 2
---

# Compatibilidade de versão

## Saiba quais funcionalidades estão disponíveis em modos de linguagens mais antigas.

Este livro descreve o Swift 5.8, a versão padrão do Swift incluída no Xcode 14. Você pode usar o Xcode 14 para compilar *targets* desenvolvidos em Swift 5.8, Swift 4.2 ou Swift 4.

Quando você usa o Xcode 14 para compilar código no Swift 4 e Swift 4.2, a maioria das funcionalidades do Swift 5.8 está disponível. Dito isso, as seguintes alterações estão disponíveis apenas para códigos que usam Swift 5.8 ou posterior:

- As funções que retornam um tipo opaco requerem o *runtime* do Swift 5.1.
- A expressão `try?` não introduz um nível extra de opcionalidade para expressões que já retornam opcionais.
- Expressões de inicialização de inteiro literal grande são inferidas como sendo do tipo de inteiro correto. Por exemplo, `UInt64(0xffff_ffff_ffff_ffff)` resulta no valor correto em vez de transbordar (*overflowing*).

A concorrência requer o Swift 5.8 ou posterior e uma versão da biblioteca padrão Swift que forneça os tipos de concorrência correspondentes. Nas plataformas Apple, defina um *target* de implementação de pelo menos iOS 13, macOS 10.15, tvOS 13 ou watchOS 6.

Um *target* escrito em Swift 5.8 pode depender de um *target* escrito em Swift 4.2 ou Swift 4, e vice-versa. Isso significa que, se você tiver um projeto grande dividido em vários *frameworks*, poderá migrar seu código do Swift 4 para o Swift 5.8, uma *framework* por vez.
