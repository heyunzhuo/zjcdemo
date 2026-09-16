/**
 * 归并排序 (Merge Sort)
 *
 * 时间复杂度：平均/最好/最坏均为 O(n log n)
 * 空间复杂度：O(n log n)（每次递归用 slice 复制子数组，累计的临时空间）
 * 稳定性：稳定
 * 说明：仅支持数字数组。
 *
 * 思路：分治。先把数组不断对半拆分直到只剩一个元素，
 *       再两两合并成有序区间，最终得到完整有序数组。
 */

function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("mergeSort 期望一个数字数组");
  }
  if (arr.length <= 1) return arr.slice();

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// 合并两个已排序的数组为一个有序数组
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // 把剩余部分直接追加（其中一边可能还有元素）
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// 仅在直接运行本文件时执行演示与自检
if (require.main === module) {
  const input = [38, 27, 43, 3, 9, 82, 10];
  const output = mergeSort(input);

  console.log("原始数组:", input);
  console.log("排序结果:", output);

  const expected = [3, 9, 10, 27, 38, 43, 82];
  const passed = JSON.stringify(output) === JSON.stringify(expected);
  console.log(passed ? "✓ 排序正确" : "✗ 排序错误");
}

module.exports = { mergeSort };
