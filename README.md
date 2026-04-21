# Hello World 飘带动画网站

一个简单而美观的静态网站，点击按钮后会显示飘带效果的"Hello World!"文字动画。

## ✨ 功能特点

- 🎨 现代简洁的UI设计
- 🎭 流畅的飘带动画效果
- 📱 响应式布局，适配不同屏幕尺寸
- 🚀 已部署到GitHub Pages

## 🚀 访问网站

网站已成功部署到GitHub Pages，您可以通过以下链接访问：

[https://slowdown87.github.io/hello-world](https://slowdown87.github.io/hello-world)

## 💡 使用方法

1. 打开网站
2. 点击页面中央的"点击我"按钮
3. 观看"Hello World!"文字在页面中像飘带一样飘动
4. 动画结束后可再次点击按钮

## 🛠️ 技术栈

- **React 18** - 用户界面库
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的CSS框架
- **gh-pages** - GitHub Pages部署工具

## 📦 本地开发

1. 克隆仓库
   ```bash
   git clone https://github.com/slowdown87/hello-world.git
   cd hello-world
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   npm run dev
   ```

4. 构建生产版本
   ```bash
   npm run build
   ```

5. 部署到GitHub Pages
   ```bash
   npm run deploy
   ```

## 📁 项目结构

```
/
├── public/              # 静态资源
├── src/
│   ├── components/      # React组件
│   │   └── RibbonAnimation.tsx  # 飘带动画组件
│   ├── App.tsx          # 主应用组件
│   ├── main.tsx         # 应用入口
│   └── index.css        # 全局样式
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 设计特点

- **主色调**：靛蓝色 (#6366f1) 和玫瑰红 (#f43f5e)
- **按钮样式**：圆角按钮，带有悬停效果和轻微阴影
- **动画效果**：文字会沿着圆形路径移动，带有旋转和缩放效果
- **渐变背景**：从浅灰到稍深的灰色，营造现代感

## 📝 许可证

MIT License
