# 小小跑步王 🏃‍♂️

一个有趣的跑步游戏，支持双人对战，包含可爱的小猪和小龙角色。

## 🎮 游戏特色

- **双人对战**：支持键盘控制（A键和L键）
- **可爱角色**：小猪和小龙角色设计
- **排行榜系统**：实时显示胜负统计
- **重开功能**：一键重新开始游戏
- **响应式设计**：适配不同屏幕尺寸

## 🎯 游戏玩法

1. **玩家1**：使用A键或点击"玩家1 跑步"按钮控制小猪
2. **玩家2**：使用L键或点击"玩家2 跑步"按钮控制小龙
3. **获胜条件**：第一个到达终点线的玩家获胜
4. **重开游戏**：点击"重开一局"按钮或双击胜利区域

## 📊 Google Analytics 4 (GA4) 数据监控

本项目已集成Google Analytics 4进行用户行为数据收集和分析。

### 🔧 配置信息

- **Measurement ID**: `G-ERJQSXTBGE`
- **Data Stream ID**: `11553452819`
- **Property**: GA4 Property

### 📈 跟踪事件

#### 1. 页面浏览 (Page Views)
- **事件名称**: `page_view`
- **触发条件**: 页面加载时自动触发
- **数据字段**: 
  - `page_title`: 页面标题
  - `page_location`: 页面URL

#### 2. 游戏操作事件 (Game Actions)

##### 按钮点击
- **玩家1跑步按钮**: `player1_click`
- **玩家2跑步按钮**: `player2_click`
- **重开一局按钮**: `reset_game`
- **排行榜交互**: `leaderboard_interaction`

##### 键盘控制
- **玩家1键盘控制(A键)**: `keyboard_action`
- **玩家2键盘控制(L键)**: `keyboard_action`

##### 游戏结果
- **游戏胜利**: `game_win`
  - 数据字段: `event_label` (获胜者名称)
- **游戏重置**: `game_reset`

#### 3. 用户参与度事件 (Engagement)

##### 点击事件
- **通用点击**: `click`
  - 数据字段: `event_label` (点击元素标签名)

##### 滚动事件
- **滚动到底部**: `scroll_to_bottom`
  - 触发条件: 用户滚动到页面90%位置
  - 数据字段: `value` (滚动百分比)

### 📊 数据字段说明

所有事件都包含以下标准字段：
- `event_category`: 事件分类
- `event_label`: 事件标签
- `value`: 数值（通常为1）

### 🔍 在GA4中查看数据

1. **实时报告**: 查看当前活跃用户和实时事件
2. **事件报告**: 在"报告 > 参与度 > 事件"中查看所有跟踪事件
3. **自定义报告**: 创建自定义报告分析游戏数据

### 📋 事件分类

- **game_action**: 游戏操作相关事件
- **game_result**: 游戏结果相关事件  
- **engagement**: 用户参与度相关事件

### 🛠️ 技术实现

- 使用原生JavaScript实现
- 通过`gtag()`函数发送事件
- 支持自定义事件参数
- 兼容所有现代浏览器

### 🔒 隐私说明

- 仅收集匿名用户行为数据
- 不收集个人身份信息
- 符合GDPR和CCPA隐私法规
- 用户可通过浏览器设置禁用跟踪

## 🚀 快速开始

1. 克隆仓库
```bash
git clone https://github.com/bluelyw/running-game.git
cd running-game
```

2. 启动本地服务器
```bash
python3 -m http.server 8000
```

3. 打开浏览器访问
```
http://localhost:8000
```

## 📁 项目结构

```
running-game/
├── index.html          # 主页面
├── script.js           # 游戏逻辑
├── style.css           # 样式文件
├── images/             # 图片资源
│   ├── pig.svg         # 小猪头像
│   ├── dragon.svg      # 小龙头像
│   └── trophy.svg      # 奖杯图标
└── README.md           # 项目说明
```

## 🎨 技术栈

- **HTML5**: 页面结构
- **CSS3**: 样式和动画
- **JavaScript**: 游戏逻辑和交互
- **SVG**: 矢量图形图标
- **Google Analytics 4**: 数据监控

## 📈 版本历史

- **v0.1-initial-icons**: 初始版本，包含基础游戏功能和图标

## 🤝 贡献

欢迎提交Issue和Pull Request来改进游戏！

## 📄 许可证

MIT License

---

**享受游戏，数据驱动改进！** 🎮📊 