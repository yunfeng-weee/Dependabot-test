# 本地环境
添加config/config.local.ts文件
``` javascript
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    API_HOST: 'https://api.tb1.sayweee.net',
    SSO_HOST: 'https://cas.tb1.sayweee.net',
    SSO_CLIENT_ID: 'LocalTest',
    CS_URL: 'https://cs.tb1.sayweee.net'
  },
});
```
node版本v14.18.1

#Plop使用说明
```
Plop是自动生成格式化代码的工具，在本项目中配置在plopfile.js中，生成模板在plop-templates中
常用命名转换如下：
camelCase(驼峰命名): changeFormatToThis
snakeCase(下划线分隔): change_format_to_this
dashCase/kebabCase(短横线分隔): change-format-to-this
dotCase(点分隔): change.format.to.this
pathCase(斜杠分隔): change/format/to/this
properCase/pascalCase(帕斯卡命名(每个单词的首字母大写)): ChangeFormatToThis
lowerCase(转换为全小写): change format to this
sentenceCase(首字母大写,句末添加逗号): Change format to this,
constantCase(常量形式，全大写，使用下划线分隔): CHANGE_FORMAT_TO_THIS
titleCase(标题形式): Change Format To This
```
* components为组件生成模板，使用之后直接生成一个组件模板。
* newMenu为新页面生成模板，可选择是否同步生成service文件（默认查询接口的接口地址需要手动填入），再手动配置一下路由，即可使用。
* newTabPage为页面需要带tab切换的模板，同时生成两个页面模板，如果页面也需要表格可以使用newMenu模板再生成组件进行替换。

# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

## 分支说明
master分支为线上发布分支
test&tb2&dev为tb1、tb2、dev三个测试环境分支
old-master-backup为angluar版本旧central备份分支