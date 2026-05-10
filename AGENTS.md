# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-10 18:26:35 +08:00  
**Commit:** fbc3231  
**Branch:** main

## OVERVIEW
Hexo 8 静态博客仓库。内容以 `source/_posts/` 下的中文技术文章为主，构建与部署依赖 npm 脚本和 GitHub Pages workflow。

## STRUCTURE
```text
./
├── _config.yml                 # Hexo 主配置
├── _config.landscape.yml       # Landscape 主题覆盖配置；当前为空
├── package.json                # Hexo 依赖与 npm scripts
├── .github/                    # Pages 部署与 Dependabot
├── scaffolds/                  # 新文章/页面/草稿模板
├── source/_posts/              # 已发布文章正文与 frontmatter
├── themes/                     # 预留主题目录；当前仅 .gitkeep
└── db.json                     # Hexo 缓存文件，已忽略
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| 修改站点标题、URL、语言、永久链接 | `_config.yml` | 已配置为 GitHub Pages 站点地址与中文语言 |
| 调整主题行为 | `_config.landscape.yml` | 文件存在但为空；未做任何主题覆盖 |
| 本地开发 / 构建命令 | `package.json` | 仅 `build/clean/deploy/server` 四个脚本 |
| GitHub Pages 部署 | `.github/workflows/pages.yml` | push 到 `main` 后构建并发布 `public/` |
| 自动依赖更新 | `.github/dependabot.yml` | 只检查根目录 npm 依赖 |
| 新文章模板 | `scaffolds/post.md` | 默认只包含 `title/date/tags` |
| 文章内容规范 | `source/_posts/` | 参考 `source/_posts/AGENTS.md` |

## CONVENTIONS
- 包管理器是 **npm**；仓库中没有 yarn / pnpm / pixi 项目配置。
- Hexo 主流程固定为：`npm run server` 本地预览，`npm run build` 生成静态站点。
- 本地 `npm run deploy` 目前不可依赖：`_config.yml` 里的 `deploy.type` 为空，实际发布走 GitHub Actions。
- 主题使用 `hexo-theme-landscape`，但仓库内没有本地主题副本；`themes/` 目前不承载实际逻辑。
- 当前没有测试、lint、formatter、TypeScript 配置；变更验证以 Hexo 构建通过为主。
- Git 历史很轻量，提交信息普遍较短直接，例如 `init hexo blog`、`add pages workflow`。

## ANTI-PATTERNS (THIS PROJECT)
- 不要把 `db.json`、`public/`、`.deploy*/` 这类构建产物当作源码修改。
- 不要假设本地 `deploy` 可用；未补齐 deploy 配置前，应以 `.github/workflows/pages.yml` 为准。
- 不要把主题自定义写进根目录的随意文件；若开始做主题定制，应显式落到 `themes/` 或主题配置中。
- 不要为不存在的测试/格式化体系编写“配套说明”；先承认仓库当前是最小 Hexo 内容仓。

## UNIQUE STYLES
- 现有文章以中文技术复盘为主，混用英文专有名词、Markdown 标题层级、列表与数学公式。
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
- 若需要自定义主题，优先评估是否要把 npm 主题复制到 `themes/landscape/` 再改。
- `.github/` 与 `source/_posts/` 已各自补充子级 AGENTS；进入这些目录时以更近一级规则为准。
