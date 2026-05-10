# GITHUB OPERATIONS GUIDE

## OVERVIEW
`.github/` 只承载自动化运维配置：GitHub Pages 部署与 Dependabot 依赖更新。

## STRUCTURE
```text
.github/
├── dependabot.yml
└── workflows/
    └── pages.yml
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| 修改 Pages 构建流程 | `workflows/pages.yml` | 当前唯一 workflow |
| 修改自动依赖更新频率 | `dependabot.yml` | 仅 npm，目录固定为 `/` |
| 调整部署分支触发条件 | `workflows/pages.yml` | 现在只监听 `main` push |

## CONVENTIONS
- CI 目标单一：构建 Hexo 站点并部署到 GitHub Pages。
- `pages.yml` 使用 Node 20、`npm install`、`npx hexo generate`、`actions/deploy-pages@v4`。
- workflow 默认把 `./public` 作为 Pages artifact 上传；若改输出目录，必须同步更新 workflow。
- 这里没有测试、lint、preview 或 matrix job；不要在文档里假设这些环节存在。

## ANTI-PATTERNS
- 不要把本地 deploy 流程和 Actions deploy 混为一谈；线上发布当前完全依赖 workflow。
- 不要修改 `public/` 作为发布输入；它应始终由 `hexo generate` 产出。
- 不要增加与当前仓库规模不匹配的复杂 CI 结构；这里只有内容构建需求。

## NOTES
- Dependabot 每日检查一次根目录 npm 依赖，最多开 20 个 PR。
- 若未来增加测试或校验步骤，应在 `build` job 中先验证再上传 Pages artifact。
