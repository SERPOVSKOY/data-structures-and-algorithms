const array = [1, 11, 4, 8, 9, 12, 24, 3, 2, 7];
let count = 0;

/**
 * Функция(алгоритм) линейного поиска элемента в массиве.
 * Она работает как с неотсортированными массивами, так и отсортированными, 
 * но для вторых существуют алгоритмы эффективнее линейного поиска.
 * 
 * @param {Array} array массив поиска
 * @param {number} sought искомы элемент
 * @return {number|null} если значение найдено возвращает индекс элемента массива, иначе null 
 */
function linearSearch(array, sought) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === sought) {
            return i;
        }
    }
    return null;
}

console.log('Индекс', linearSearch(array, 2));
console.log('Колличество операций', count);