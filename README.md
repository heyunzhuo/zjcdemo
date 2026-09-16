# zjcdemo

个人技术博客 + 排序算法示例项目，纯 HTML5 + CSS + JavaScript 实现，无任何外部依赖。

## 项目结构

```
index.html       博客页面（语义化 HTML5）
style.css        样式与深色/浅色主题
script.js        博客数据与交互（搜索、标签筛选、深色模式）
bubble-sort.js   冒泡排序
quick-sort.js    快速排序（三数取中 + 插入排序优化）
merge-sort.js    归并排序
```

## 运行方式

- **博客**：直接用浏览器打开 `index.html` 即可，无需服务器
- **排序程序**：
  ```bash
  node bubble-sort.js
  node quick-sort.js
  node merge-sort.js
  ```

## 排序算法

| 文件 | 算法 | 时间复杂度 | 稳定性 |
|---|---|---|---|
| `bubble-sort.js` | 冒泡排序 | O(n²)，最好 O(n) | 稳定 |
| `quick-sort.js` | 快速排序 | 平均 O(n log n) | 不稳定 |
| `merge-sort.js` | 归并排序 | O(n log n) | 稳定 |

## 分支

- `main`：博客站点
- `dev`：新增排序算法
