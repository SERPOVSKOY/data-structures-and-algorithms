const array = [0, 0, 5, 7, 6, 8, 23, 6, 4, 1, 7,-1, -5, 23, 6, 2, 7,-1, -5, 23,];

/**
 * Функция(алгоритм) сортировки пузырьком.
 * Детерменированная, не чистая функция!!!
 *
 * @param {Array<number>} array - массив для сортировки
 * @returns {Array<number>} - возвращает отсортированный массив
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

console.log('Отсортированный массив(пузырьком) - ', bubbleSort(array));
