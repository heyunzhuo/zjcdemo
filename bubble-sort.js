/**
 * 冒泡排序 (Bubble Sort)
 *
 * 时间复杂度：平均/最坏 O(n²)，最好 O(n)（已有序时）
 * 空间复杂度：O(1)
 * 稳定性：稳定
 *
 * 思路：反复比较相邻两个元素，若顺序错误则交换，
 *       每轮都会把当前未排序区间里的最大元素「冒泡」到末尾。
 */

function bubbleSort(arr) {
  const a = arr.slice(); // 拷贝一份，避免修改原数组
  const n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // 标记本轮是否发生过交换
    for (let j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    // 本轮没有任何交换，说明数组已经有序，可以提前结束
    if (!swapped) break;
  }

  return a;
}

// ---- 演示与自检 ----
const input = [64, 34, 25, 12, 22, 11, 90];
const output = bubbleSort(input);

console.log("原始数组:", input);
console.log("排序结果:", output);

// 简单校验：结果应与期望一致
const expected = [11, 12, 22, 25, 34, 64, 90];
const passed = JSON.stringify(output) === JSON.stringify(expected);
console.log(passed ? "✓ 排序正确" : "✗ 排序错误");
