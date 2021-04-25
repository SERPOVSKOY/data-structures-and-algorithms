const array = [1, 11, 4, 8, 9, 12, 24, 3, 2, 7];

/**
 * Функция(алгоритм) линейного поиска элемента в массиве.
 * Она работает как с неотсортированными массивами, так и отсортированными,
 * но для вторых существуют алгоритмы эффективнее линейного поиска.
 *
 * @param {Array<number>} array массив поиска
 * @param {number} value искомы элемент
 * @return {number} если значение найдено возвращает индекс элемента массива, иначе -1
 */
function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log('Индекс', linearSearch(array, 2));
