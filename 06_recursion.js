/**
 * Функция(алгоритм) рекурсивного поиска факториала числа
 * Детерменированная, чистая функция!!!
 *
 * @param n {number} - число, факториал которого хотим найти
 * @returns {number} - факториал числа
 */
function fact(n) {
    if (n === 0 || n === 1) return 1;
    return n * fact(n - 1);
}

/**
 * Функция(алгоритм) итеративного поиска факториала числа
 * Детерменированная, чистая функция!!!
 *
 * @param n {number} - число, факториал которого хотим найти
 * @returns {number} - факториал числа
 */
function foo2(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Поиск максимального размера стека вызовов (меняется в зависимости от браузера)

let counter = 0;

function foo() {
    counter++;
    foo();
}

try {
    foo();
} catch(e) {
    console.log(counter); // ~15703
}
