# POSTS CONTENT GUIDE

## OVERVIEW
`source/_posts/` 存放正式文章。当前内容模式是中文技术长文，带清晰 frontmatter、标签分类和较强复盘叙事。

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| 参考 frontmatter 写法 | `Predicting Irrigation Need.md` | 已包含 `title/date/categories/tags` |
| 调整新文章默认字段 | `../../scaffolds/post.md` | 默认模板只给 `title/date/tags` |
| 站点级 permalink / 更新时间逻辑 | `../../_config.yml` | 影响所有文章输出 URL 与更新时间 |

## CONVENTIONS
- 文章文件是 Markdown，默认放在 `source/_posts/` 根下。
- frontmatter 至少保证 `title`、`date`；现有文章还使用 `categories` 与 `tags`。
- `scaffolds/post.md` 默认不含 `categories`，如果文章需要分类，应手动补上。
- 当前文章正文以中文为主，可混用英文术语、外链、列表、标题层级与数学公式。
- 数学公式通过 `../../_config.yml` 中的 markdown-it 插件链渲染，额外样式注入在 `../../scripts/katex.js`。
- 现有文章标题与文件名不必完全一致；对外展示以 frontmatter `title` 为准。

## ANTI-PATTERNS
- 不要省略 frontmatter 再把元信息写进正文开头；Hexo 依赖 frontmatter 生成索引与归档。
- 不要随意改旧文文件名或日期而不考虑 permalink；当前 URL 含年月日与标题。
- 不要假设 scaffold 已包含全部字段；`categories` 目前需要按文章主题手动添加。
- 不要把目录当成资产仓随意堆放无关文件；这里应以可发布文章为中心。

## STYLE SIGNALS
- 现有样文是“比赛回顾/技术复盘”写法：先背景，再方法，再结果，再反思。
- 标签与分类可用中文；样文中分类为 `技术`，标签混合学习主题与平台名。
- 正文允许使用 `$...$` 与 `$$...$$` 数学公式写法；中文紧邻公式的场景也应保持这种写法，不必强行插入空格。

## NOTES
- 当前目录只有 1 篇文章，规范以现有样文和 scaffold 共同定义。
- 若未来开始为单篇文章配图或附件，需先统一约定资产放置方式，再扩写本文件。
