const array = [1, 2, 5, 4, 4, 8, 6, 1];

/**
 * Функция которая переставляет элементы массива относительно точки вращения
 * влево те что меньше, а вправо те что больше.
 * Детерменированная, не чистая функция!!!
 *
 * @param {Array<number>} arr - массив для сортировки
 * @param {number} low - нижняя точка массива
 * @param {number} hi - верхняя точка массива
 * @returns {number} - возвращает нижний указатель относительно которого будет дальнейшая сортировка
 */
const partition = (arr, low, hi) => {
    const pivotPosition = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotPosition];
    while (hi >= low) {
        while (arr[hi] > pivot) {
            hi--;
        }
        while (arr[low] < pivot) {
            low++;
        }
        if (hi >= low) {
            [arr[low], arr[hi]] = [arr[hi], arr[low]];
            hi--;
            low++;
        }
    }

    return low;
};

/**
 * Функция(алгоритм) быстрой сортировки. Сортирует массив по принципу "Разделяй и влавствуй".
 * Детерменированная, не чистая функция!!!
 *
 * @param {Array<number>} array - массив для сортировки
 * @param {number} low - нижняя точка массива
 * @param {number} hi - верхняя точка массива
 * @returns {Array<number>} - возвращает отсортированный массив
 */
function quickSort(array, low = 0, hi = array.length - 1) {
    if (low < hi) {
        const index = partition(array, low, hi);
        quickSort(array, low, index - 1);
        quickSort(array, index, hi);
    }

    return array;
}

console.log('Отсортированный массив(быстрой сортировкой) - ', quickSort(array));
