/* ===== 文章数据 ===== */
const POSTS = [
  {
    id: 1,
    title: "从零搭建一个静态技术博客",
    date: "2026-09-12",
    tags: ["前端", "HTML"],
    excerpt: "不依赖任何框架，只用 HTML + CSS + JS 就能搭出一个清爽的个人博客。",
    content: `
      <p>很多人在搭博客时第一时间想到 Hexo、Hugo 或 Next.js，但对于一个简单的个人博客，纯静态的三件套反而更直接。</p>
      <h2>为什么选择纯静态</h2>
      <ul>
        <li>零依赖、零构建，打开浏览器就能跑</li>
        <li>部署简单，扔到任意静态托管即可</li>
        <li>完全掌控，没有框架升级的负担</li>
      </ul>
      <h2>核心思路</h2>
      <p>把文章放在一个 JS 数组里，用 <code>innerHTML</code> 渲染成卡片列表，再配合一个详情视图完成阅读。</p>
      <pre><code>const POSTS = [
  { id: 1, title: "...", tags: ["前端"], content: "..." }
];

function renderPosts(list) {
  grid.innerHTML = list.map(postToCard).join("");
}</code></pre>
      <p>深色模式用 <code>data-theme</code> 属性配合 CSS 变量实现，切换后写入 <code>localStorage</code> 持久化。</p>
    `,
  },
  {
    id: 2,
    title: "深入理解 JavaScript 闭包",
    date: "2026-08-28",
    tags: ["JavaScript"],
    excerpt: "闭包是 JS 最核心的概念之一，也是面试高频考点，本文用一个计数器带你彻底搞懂它。",
    content: `
      <p>闭包（Closure）指的是：一个函数能够「记住」并访问其词法作用域中的变量，即使这个函数在其词法作用域之外被执行。</p>
      <h2>一个经典例子</h2>
      <pre><code>function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2</code></pre>
      <p>这里内部函数引用外层的 <code>count</code>，即便 <code>createCounter</code> 已经返回，<code>count</code> 依然被保留在内存中。</p>
      <h2>常见应用</h2>
      <ul>
        <li>实现私有变量，隐藏内部状态</li>
        <li>函数柯里化与偏函数</li>
        <li>防抖、节流等工具函数</li>
      </ul>
      <p>需要注意的是，闭包会持有外部变量引用，滥用可能导致内存占用过高，应及时释放不再使用的闭包。</p>
    `,
  },
  {
    id: 3,
    title: "CSS Grid 布局完全指南",
    date: "2026-08-10",
    tags: ["CSS", "前端"],
    excerpt: "还在用浮动和定位硬凑布局？Grid 一行代码搞定响应式网格，从此布局不再是难题。",
    content: `
      <p>CSS Grid 是二维布局方案，能同时控制行和列，非常适合卡片网格、整体页面骨架等场景。</p>
      <h2>基础用法</h2>
      <pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}</code></pre>
      <p>上面的代码会创建一个自适应网格：每列最小 280px，容器越宽列数越多，窄屏自动变成单列。</p>
      <h2>常用属性速查</h2>
      <ul>
        <li><code>grid-template-columns</code> / <code>grid-template-rows</code>：定义行列尺寸</li>
        <li><code>gap</code>：行列间距</li>
        <li><code>grid-area</code>：将元素放置到指定区域</li>
        <li><code>align-items</code> / <code>justify-items</code>：对齐方式</li>
      </ul>
      <p>配合 Flexbox 使用：Grid 负责宏观骨架，Flexbox 负责局部组件内的排列，两者相得益彰。</p>
    `,
  },
  {
    id: 4,
    title: "Git 常用工作流备忘",
    date: "2026-07-22",
    tags: ["Git", "工具"],
    excerpt: "分支、合并、回滚，一份写给自己的 Git 速查笔记，覆盖日常开发 90% 的场景。",
    content: `
      <p>熟练使用 Git 是每个开发者的基本功。这里整理日常开发中最常用的命令与场景。</p>
      <h2>分支管理</h2>
      <pre><code>git checkout -b feature/xxx   # 新建并切换分支
git branch -d feature/xxx     # 删除本地分支
git push -u origin feature/xxx</code></pre>
      <h2>合并与变基</h2>
      <ul>
        <li><code>git merge</code>：保留完整提交历史，适合团队协作</li>
        <li><code>git rebase</code>：线性历史更干净，但会改写提交</li>
      </ul>
      <h2>回滚</h2>
      <pre><code>git reset --soft HEAD~1   # 撤销提交，保留改动
git revert &lt;commit&gt;       # 生成反向提交，安全回滚</code></pre>
      <p>记住一条铁律：<strong>不要 force push 已经推送过的历史</strong>。</p>
    `,
  },
  {
    id: 5,
    title: "浅谈浏览器事件循环",
    date: "2026-06-30",
    tags: ["JavaScript", "浏览器"],
    excerpt: "宏任务、微任务、渲染时机，一次讲清 JS 单线程下的事件循环机制。",
    content: `
      <p>JavaScript 是单线程语言，却能做到「非阻塞」的异步，靠的就是事件循环（Event Loop）。</p>
      <h2>执行顺序</h2>
      <ol>
        <li>执行同步代码</li>
        <li>清空所有微任务（microtask）</li>
        <li>渲染更新（可能）</li>
        <li>取出一个宏任务（macrotask）执行</li>
      </ol>
      <pre><code>console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// 输出顺序：1 4 3 2</code></pre>
      <p>微任务包括 <code>Promise.then</code>、<code>queueMicrotask</code>；宏任务包括 <code>setTimeout</code>、<code>setInterval</code>、事件回调等。</p>
    `,
  },
];

/* ===== DOM 引用 ===== */
const grid = document.getElementById("post-grid");
const listView = document.getElementById("list-view");
const postView = document.getElementById("post-view");
const postDetail = document.getElementById("post-detail");
const tagList = document.getElementById("tag-list");
const searchInput = document.getElementById("search-input");
const emptyState = document.getElementById("empty-state");
const backBtn = document.getElementById("back-btn");
const brandLink = document.getElementById("brand-link");

let activeTag = "全部";
let searchTerm = "";

/* ===== 工具函数 ===== */
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// 允许保留的 HTML 标签白名单
const ALLOWED_TAGS = new Set([
  "P", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "LI",
  "STRONG", "EM", "B", "I", "A", "CODE", "PRE", "BLOCKQUOTE",
  "BR", "HR", "SPAN", "DIV", "TABLE", "THEAD", "TBODY", "TR", "TH", "TD", "IMG",
]);
// 需要整节点移除的危险标签
const REMOVE_TAGS = new Set([
  "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "FORM", "INPUT",
  "BUTTON", "SELECT", "TEXTAREA", "LINK", "META", "BASE", "NOSCRIPT",
  "TEMPLATE", "SVG", "MATH", "VIDEO", "AUDIO", "TRACK", "SOURCE",
]);
const ALLOWED_ATTRS = new Set(["href", "title", "src", "alt", "class", "datetime"]);

// 白名单式 HTML 净化：过滤脚本与危险标签/属性，防止 XSS
function sanitizeHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html; // template 内容为惰性，不会执行脚本

  // 自底向上：先清理子节点，再决定当前节点去留
  const clean = (parent) => {
    for (const el of Array.from(parent.children)) {
      clean(el);
      const tag = el.tagName;
      if (REMOVE_TAGS.has(tag)) {
        el.remove();
      } else if (!ALLOWED_TAGS.has(tag)) {
        el.replaceWith(...el.childNodes); // unwrap：保留已清理的子节点
      } else {
        for (const attr of Array.from(el.attributes)) {
          const name = attr.name.toLowerCase();
          if (!ALLOWED_ATTRS.has(name) || name.startsWith("on")) {
            el.removeAttribute(name);
          } else if (name === "href" || name === "src") {
            const value = attr.value.trim().toLowerCase();
            if (value.startsWith("javascript:") || value.startsWith("data:")) {
              el.removeAttribute(name);
            }
          }
        }
      }
    }
  };
  clean(template.content);
  return template.innerHTML;
}

// 去除 HTML 标签，仅保留纯文本（用于搜索匹配）
function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || "";
}

/* ===== 渲染 ===== */
function getAllTags() {
  const tags = new Set();
  POSTS.forEach((post) => post.tags.forEach((t) => tags.add(t)));
  return ["全部", ...tags];
}

function renderTags() {
  const tags = getAllTags();
  tagList.innerHTML = tags
    .map(
      (tag) =>
        `<button class="tag-chip${tag === activeTag ? " active" : ""}" data-tag="${escapeHtml(
          tag
        )}">${escapeHtml(tag)}</button>`
    )
    .join("");
}

function getFilteredPosts() {
  return POSTS.filter((post) => {
    const matchTag = activeTag === "全部" || post.tags.includes(activeTag);
    const matchSearch =
      !searchTerm ||
      [post.title, post.excerpt, post.tags.join(" "), stripHtml(post.content)]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return matchTag && matchSearch;
  });
}

function renderPosts() {
  const list = getFilteredPosts();
  emptyState.hidden = list.length > 0;

  grid.innerHTML = list
    .map(
      (post) => `
      <article class="post-card" data-id="${post.id}">
        <div class="card-tags">
          ${post.tags
            .map((t) => `<span class="card-tag">${escapeHtml(t)}</span>`)
            .join("")}
        </div>
        <h2>${escapeHtml(post.title)}</h2>
        <p class="card-excerpt">${escapeHtml(post.excerpt)}</p>
        <div class="card-meta">
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          <span>·</span>
          <span>阅读全文 →</span>
        </div>
      </article>`
    )
    .join("");
}

function renderPostDetail(post) {
  postDetail.innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <div class="detail-meta">
      <time datetime="${post.date}">${formatDate(post.date)}</time>
      ${post.tags
        .map((t) => `<span class="card-tag">${escapeHtml(t)}</span>`)
        .join("")}
    </div>
    <div class="detail-content">${sanitizeHtml(post.content)}</div>
  `;
  window.scrollTo({ top: 0 });
}

function openPost(id) {
  const post = POSTS.find((p) => p.id === id);
  if (!post) return;
  renderPostDetail(post);
  listView.hidden = true;
  postView.hidden = false;
}

function closePost() {
  postView.hidden = true;
  listView.hidden = false;
}

/* ===== 事件绑定 ===== */
tagList.addEventListener("click", (e) => {
  const chip = e.target.closest(".tag-chip");
  if (!chip) return;
  activeTag = chip.dataset.tag;
  renderTags();
  renderPosts();
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim();
  renderPosts();
});

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".post-card");
  if (card) openPost(Number(card.dataset.id));
});

backBtn.addEventListener("click", closePost);
brandLink.addEventListener("click", (e) => {
  e.preventDefault();
  closePost();
});

document.getElementById("year").textContent = new Date().getFullYear();

/* ===== 深色模式 ===== */
const themeToggle = document.getElementById("theme-toggle");
const STORAGE_KEY = "blog-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// 初始化：读取本地存储的主题，否则跟随系统偏好
const savedTheme = localStorage.getItem(STORAGE_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

/* ===== 初始化 ===== */
renderTags();
renderPosts();
