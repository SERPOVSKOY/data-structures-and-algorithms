const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Функция(алгоритм) бинарного поиска элемента в массиве.
 * Данныая функция работает с отсортированными массивами.
 *
 * @param {Array<number>} array массив поиска
 * @param {number} value искомый элемент
 * @return {number} если значение найдено возвращает индекс элемента массива, иначе -1
 */
function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (array[mid] === value) {
            return mid;
        } else if (value < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log('Индекс', binarySearch(array, 5));
