---
sidebar_position: 2
---

# Operadores Básicos

## Execute operações como atribuição, aritmética e comparação.

Um operador é um símbolo ou frase especial que você usa para verificar, alterar ou combinar valores. Por exemplo, o operador de adição (`+`) adiciona dois números, como em `let i = 1 + 2`, e o operador lógico AND (`&&`) combina dois valores booleanos, como em `if codigoDaPortaDigitado && passouNaVarreduraDeRetina`.

O Swift oferece suporte aos operadores que você já conhece de linguagens como C, e melhora vários recursos para eliminar erros comuns de codificação. O operador de atribuição (`=`) não retorna um valor, para evitar que seja usado erroneamente quando o operador igual a (==) for pretendido. Os operadores aritméticos (`+`, `-`, `*` , `/`, `%`, e assim por diante) detectam e não permitem o estouro de valor, para evitar resultados inesperados ao trabalhar com números que se tornam maiores ou menores do que o intervalo de valores permitido do tipo que os armazena. Você pode aceitar o comportamento de estouro de valor usando os operadores de estouro do Swift, conforme descrito em [Operadores de Estouro](./operadores-avancados.md/#operadores-de-estouro).

O Swift também fornece operadores de intervalo que não são encontrados em C, como `a..<b` e `a...b`, como uma redução para expressar um intervalo de valores.

Este capítulo descreve os operadores comuns no Swift. [Operadores Avançados](./operadores-avancados.md) cobrem os operadores avançados do Swift, e descrevem como definir seus próprios operadores personalizados e implementar os operadores padrão para seus próprios tipos personalizados.
