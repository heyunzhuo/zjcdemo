/**
 * 快速排序 (Quick Sort)
 *
 * 时间复杂度：平均 O(n log n)，最坏 O(n²)
 * 空间复杂度：O(log n)（递归调用栈）
 * 稳定性：不稳定
 * 说明：仅支持数字数组。
 *
 * 思路：分治。每次选一个「基准」(pivot)，把小于它的放左边、大于它的放右边，
 *       再对左右两部分递归排序。
 * 优化：基准用「三数取中」避免已有序输入退化为 O(n²)；
 *       小规模区间改用插入排序；只对较短的半边递归，把递归深度控制在 O(log n)。
 */

const INSERTION_THRESHOLD = 16;

function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("quickSort 期望一个数字数组");
  }
  const a = arr.slice(); // 拷贝一份，避免修改原数组
  sortInPlace(a, 0, a.length - 1);
  return a;
}

function sortInPlace(a, left, right) {
  while (left < right) {
    // 小规模区间直接插入排序，减少递归开销
    if (right - left + 1 <= INSERTION_THRESHOLD) {
      insertionSort(a, left, right);
      return;
    }
    const pivotIndex = partition(a, left, right);
    // 递归处理较短的半边，较长半边继续循环，控制递归深度
    if (pivotIndex - left < right - pivotIndex) {
      sortInPlace(a, left, pivotIndex - 1);
      left = pivotIndex + 1;
    } else {
      sortInPlace(a, pivotIndex + 1, right);
      right = pivotIndex - 1;
    }
  }
}

// 三数取中选基准，避免已有序数组退化
function partition(a, left, right) {
  const mid = (left + right) >> 1;
  // 调整首/中/尾三者，使 a[left] <= a[mid] <= a[right]
  if (a[mid] < a[left]) [a[mid], a[left]] = [a[left], a[mid]];
  if (a[right] < a[left]) [a[right], a[left]] = [a[left], a[right]];
  if (a[right] < a[mid]) [a[right], a[mid]] = [a[mid], a[right]];
  // 中位数 a[mid] 作为基准，移到最右
  [a[mid], a[right]] = [a[right], a[mid]];

  const pivot = a[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (a[j] < pivot) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }
  [a[i], a[right]] = [a[right], a[i]];
  return i;
}

function insertionSort(a, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= left && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
}

// 仅在直接运行本文件时执行演示与自检
if (require.main === module) {
  const input = [17, 3, 15, 8, 20, 1, 12, 6, 19, 4, 10, 14, 2, 9, 18, 5, 11, 7, 16, 13];
  const output = quickSort(input);
  const expected = Array.from({ length: 20 }, (_, i) => i + 1);

  console.log("原始数组:", input);
  console.log("排序结果:", output);

  const passed = JSON.stringify(output) === JSON.stringify(expected);
  console.log(passed ? "✓ 排序正确" : "✗ 排序错误");
}

module.exports = { quickSort };
