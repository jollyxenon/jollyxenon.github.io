# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-11 01:10:00 +08:00  
**Commit:** fbc3231  
**Branch:** main

## OVERVIEW
Hexo 8 静态博客仓库。内容以 `source/_posts/` 下的中文技术文章为主，构建与部署依赖 npm 脚本和 GitHub Pages workflow。

## STRUCTURE
```text
./
├── _config.yml                 # Hexo 主配置
├── _config.next.yml            # NexT 主题覆盖配置（推荐在此做主题定制）
├── package.json                # Hexo 依赖与 npm scripts
├── .github/                    # Pages 部署与 Dependabot
├── scaffolds/                  # 新文章/页面/草稿模板
├── source/about/index.md       # About 页面内容
├── source/_data/               # NexT 自定义覆盖文件（按需创建）
├── source/tags/index.md        # 标签聚合页
├── source/categories/index.md  # 分类聚合页
├── source/_posts/              # 已发布文章正文与 frontmatter
├── themes/                     # 预留主题目录；当前仅 .gitkeep
└── db.json                     # Hexo 缓存文件，已忽略
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| 修改站点标题、URL、语言、永久链接 | `_config.yml` | 已配置为 GitHub Pages 站点地址与中文语言 |
| 调整主题行为 | `_config.next.yml` | NexT 主题主要配置入口；应优先在此覆盖默认主题配置 |
| 覆盖少量主题样式/局部模板 | `source/_data/` | 配合 `_config.next.yml > custom_file_path` 使用 |
| 修改 About 页面内容 | `source/about/index.md` | 当前用于展示站点简介 |
| 修复标签/分类聚合页 | `source/tags/index.md`, `source/categories/index.md` | 这两个页缺失时，菜单会出现 `Cannot GET /tags/` / `/categories/` |
| 调整数学公式渲染 | `_config.yml`, `scripts/katex.js` | 站点使用 markdown-it + KaTeX，并额外处理 CJK 混排 |
| 本地开发 / 构建命令 | `package.json` | 仅 `build/clean/deploy/server` 四个脚本 |
| GitHub Pages 部署 | `.github/workflows/pages.yml` | push 到 `main` 后构建并发布 `public/` |
| 自动依赖更新 | `.github/dependabot.yml` | 只检查根目录 npm 依赖 |
| 新文章模板 | `scaffolds/post.md` | 默认包含 `title/date/categories/tags/description` 与 `<!-- more -->` |
| 文章内容规范 | `source/_posts/` | 参考 `source/_posts/AGENTS.md` |

## CONVENTIONS
- 包管理器是 **npm**；仓库中没有 yarn / pnpm / pixi 项目配置。
- Hexo 主流程固定为：`npm run server` 本地预览，`npm run build` 生成静态站点。
- 本地 `npm run deploy` 目前不可依赖：`_config.yml` 里的 `deploy.type` 为空，实际发布走 GitHub Actions。
- 主题当前使用 **hexo-theme-next**，通过 npm 依赖安装，并在根目录 `_config.next.yml` 做升级友好的覆盖配置。
- NexT 本地搜索依赖 **hexo-generator-searchdb**；启用 `local_search` 时需要同时保留该生成器依赖。
- NexT 本地搜索使用弹窗 UI；如果保留 `local_search.enable: true`，通常不应再额外配置指向 `/search/` 的菜单项。
- 当前没有测试、lint、formatter、TypeScript 配置；变更验证以 Hexo 构建通过为主。
- Markdown 渲染器使用 **hexo-renderer-markdown-it**；数学公式由 `@renbaoshuo/markdown-it-katex` 处理。
- `scripts/` 用于 Hexo injector 等轻量自定义逻辑；当前 `scripts/katex.js` 负责注入 KaTeX 资源与少量 CJK 兼容样式。
- Git 历史很轻量，提交信息普遍较短直接，例如 `init hexo blog`、`add pages workflow`。

## ANTI-PATTERNS (THIS PROJECT)
- 不要把 `db.json`、`public/`、`.deploy*/` 这类构建产物当作源码修改。
- 不要假设本地 `deploy` 可用；未补齐 deploy 配置前，应以 `.github/workflows/pages.yml` 为准。
- 不要把主题自定义写进根目录的随意文件；若开始做主题定制，应显式落到 `themes/` 或主题配置中。
- 不要只在 NexT 菜单里添加 `tags/categories/search` 路由就以为页面会自动存在；聚合页与搜索行为要分别核对源文件和主题模式。
- 不要为不存在的测试/格式化体系编写“配套说明”；先承认仓库当前是最小 Hexo 内容仓。

## UNIQUE STYLES
- 现有文章以中文技术复盘为主，混用英文专有名词、Markdown 标题层级、列表与数学公式。
- 行文里允许直接写 `$...$` / `$$...$$`；在中文语境下依赖 `skipDelimitersCheck: true` 保证公式能被正确识别。
- `updated_option: 'mtime'` 已启用；文件修改时间会影响文章更新时间显示。
- `permalink` 采用 `:year/:month/:day/:title/`，内容迁移时需考虑 URL 稳定性。

## COMMANDS
```bash
npm run server   # 本地启动 Hexo 开发服务器
npm run build    # 生成静态站点到 public/
npm run clean    # 清空 public/ 与 Hexo 缓存
npx hexo new post "标题"   # 按 scaffolds/post.md 创建新文章
```

## NOTES
- 根目录当前没有现成 `AGENTS.md` 之外的项目规范文档；这里就是主入口。
- 若需要自定义 NexT，优先修改根目录 `_config.next.yml` 与 `source/_data/` 覆盖文件；不要直接改 `node_modules/hexo-theme-next/`。
- 当前已存在 `source/about/index.md`，若修改侧边栏简介或 About 展示文案，应同步考虑站点 `description` 与该页面内容是否一致。
- 首页长文预览优先依赖文章 frontmatter `description` 或正文内 `<!-- more -->`；若两者都没有，NexT 可能在首页输出过长正文。
- `.github/` 与 `source/_posts/` 已各自补充子级 AGENTS；进入这些目录时以更近一级规则为准。
