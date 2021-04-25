const array = [10, 3, 2, 5, 6, 8, 1, 9, 4, 2, 7, 12];

/**
 * Функция(алгоритм) сортировки выбором.
 *
 * @param {Array<number>} array - массив для сортировки
 * @returns {Array<number>} - возвращает отсортированный массив
 */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }
    return array;
}

console.log('Отсортированный массив(выбором) - ', selectionSort(array));

