/**
 * 快速排序 (Quick Sort)
 *
 * 时间复杂度：平均 O(n log n)，最坏 O(n²)（每次选到极值作基准时）
 * 空间复杂度：O(log n)（递归调用栈）
 * 稳定性：不稳定
 *
 * 思路：分治。每次选一个「基准」(pivot)，把小于它的放左边、
 *       大于它的放右边，再对左右两部分递归排序。
 */

function quickSort(arr) {
  const a = arr.slice(); // 拷贝一份，避免修改原数组
  sortInPlace(a, 0, a.length - 1);
  return a;
}

function sortInPlace(a, left, right) {
  if (left >= right) return; // 区间为空或只有一个元素，无需排序

  const pivotIndex = partition(a, left, right);
  sortInPlace(a, left, pivotIndex - 1);
  sortInPlace(a, pivotIndex + 1, right);
}

// 以最右元素为基准，把小于基准的移到左侧，返回基准最终位置
function partition(a, left, right) {
  const pivot = a[right];
  let i = left; // 指向「下一个小于 pivot 的元素该放的位置」

  for (let j = left; j < right; j++) {
    if (a[j] < pivot) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }

  // 把基准放到正确位置
  [a[i], a[right]] = [a[right], a[i]];
  return i;
}

// ---- 演示与自检 ----
const input = [33, 10, 59, 26, 41, 16, 78];
const output = quickSort(input);

console.log("原始数组:", input);
console.log("排序结果:", output);

const expected = [10, 16, 26, 33, 41, 59, 78];
const passed = JSON.stringify(output) === JSON.stringify(expected);
console.log(passed ? "✓ 排序正确" : "✗ 排序错误");
