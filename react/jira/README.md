# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 起步

### 初始化项目

> 创建一个`TypeScript`语言模板的`React`项目。

```shell
npx create-react-app xxx --template typescipt
```

### 全局配置

#### 设置全局相对路径

- 在项目根目录`txconfig.json`文件中添加：

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

#### 配置项目格式插件

- `prettier`插件，官网：`https://prettier.io/docs/en/install.html`

```shell
npm i --save-dev --save-exact prettier
yarn add --dev --exact prettier
```

- 在根目录新建`.prettierrc.json`文件，配置需要格式化的文件。

```json

```

- 在根目录新建`.prettierignore`文件，配置不需要格式化的文件。

```json
build
coverage
```

#### 配置调试服务器

- `json-server`

```shell
npm i json-server -D
yarn add json-server -D
```

- 根目录新建文件夹`__json_server_mock__`并在文件夹中新建`db.json`文件

```json
{
  "users": []
}
```

- 在`package.json`添加`scripts`脚本：`"server": "json-server __json_server_mock__/db.json --watch"`

- 根目录新建`.env`文件并配置生产环境请求服务器地址

```text
REACT_APP_API_URL = http://online.com
```

- 根目录新建`.env.development`文件并配置开发环境请求服务器地址

```text
REACT_APP_API_URL = http://localhost:3001
```

- 使用：

> `package`会自动判断当前运行环境，当`npm start`时，会从`.env.development`中获取开发环境`Ulr`，而当`npm build`打包时会从`.evn`生产环境中读取`Url`。

```javascript
const Url = process.env.REACT_APP_API_URL
```

#### 强类型

> 使用`JS`过程中，大部分错误都是`runtime`（运行时）的时候发现的。
> 而希望在静态代码中就能找到其中的一些错误时，就需要使用强类型语言 => `TypeScript`。
