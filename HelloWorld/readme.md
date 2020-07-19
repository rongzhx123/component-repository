# Document

## 组件路由生成

```jsx
import * as AllComponent from
```

导入进来后，其结构是

```jsx
{name:component}
```

，将其```name```作为```path```

## 遇到的问题

1，```extract-text-webpack-plugin```不支持```webpack4```，需要用```extract-text-webpack-plugin@next```

## .npmignore文件

用户安装了包之后，如果有哪些文件不想让其看到，可以在这里注明。由于最终打包成```lib/main.js```，所以可将源码忽略掉
