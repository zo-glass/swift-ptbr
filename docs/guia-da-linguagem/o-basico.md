---
sidebar_position: 1
---

# O Básico

## Trabalhe com tipos comuns de dados e escreva a sintaxe básica.

Swift é uma linguagem de programação para desenvolvimento de aplicativos iOS, macOS, watchOS e tvOS. Se você tem experiência em desenvolvimento em C ou Objective-C, muitas partes do Swift serão familiares para você.

O Swift fornece suas próprias versões de todos os tipos fundamentais de C e Objective-C, inclusive `Int` para números inteiros, `Double` e `Float` para valores de ponto flutuante, `Bool` para valores booleanos e `String` para dados textuais. O Swift também fornece versões poderosas dos três tipos principais de coleção, `Array`, `Set` e `Dictionary`, conforme descrito em [Tipos de Coleção](tipos-de-colecao.md).

Como em C, Swift usa variáveis ​​para armazenar e referir-se a valores por um nome identificador. O Swift também faz uso extensivo de variáveis ​​cujos valores não podem ser alterados. Elas são conhecidas como constantes e são muito mais poderosas do que as constantes em C. As constantes são usadas em todo o Swift para tornar o código mais seguro e mais claro na intenção quando você trabalha com valores que não precisam ser alterados.

Além dos tipos familiares, o Swift apresenta tipos avançados não encontrados em Objective-C, como tuplas. As tuplas permitem que você crie e transmita agrupamentos de valores. Você pode usar uma tupla para retornar vários valores de uma função como um único valor composto.

Swift também apresenta tipos opcionais, que lidam com a ausência de um valor. Os opcionais dizem “existe um valor e é igual a x ” ou “ não existe nenhum valor”. O uso de opcionais é semelhante ao uso de ponteiros nulos em Objective-C, mas eles funcionam para qualquer tipo, não apenas para classes. Os opcionais não são apenas mais seguros e expressivos do que ponteiros nulos em Objective-C, mas também estão no centro de muitos dos recursos mais poderosos do Swift.

Swift é uma linguagem *type-safe*, o que significa que a linguagem ajuda você a ser claro sobre os tipos de valores com os quais seu código pode trabalhar. Se parte do seu código exigir uma `String`, o segurança de tipos impedirá que você passe um `Int` por engano. Da mesma forma, o segurança de tipos evita que você passe acidentalmente uma `String` opcional para um trecho de código que requer uma `String` não opcional. O segurança de tipos ajuda a detectar e corrigir erros o mais cedo possível no processo de desenvolvimento.
