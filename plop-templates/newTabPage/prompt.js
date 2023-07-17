const { notEmpty, isInBlocks } = require('../utils.js');

module.exports = {
  description: '新建一个Tab组件页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '页面名称',
      validate: notEmpty('name'),
    },
  ],
  actions: () => {
    const name = '{{camelCase name}}';
    const actions = [
      {
        type: 'add',
        path: `src/pages/${name}/index.tsx`,
        templateFile: 'plop-templates/newTabPage/template/tabIndex.hbs',
        data: {
          name,
        },
      },
      {
        type: 'add',
        path: `src/pages/${name}/style.less`,
        templateFile: 'plop-templates/newTabPage/template/tabStyle.hbs',
      },
      {
        type: 'add',
        path: `src/pages/${name}/tab1/index.tsx`,
        templateFile: 'plop-templates/newTabPage/template/tabPage.hbs',
        data: {
          tabName: 'tab1',
        },
      },
      {
        type: 'add',
        path: `src/pages/${name}/tab2/index.tsx`,
        templateFile: 'plop-templates/newTabPage/template/tabPage.hbs',
        data: {
          tabName: 'tab2',
        },
      },
    ];

    return actions;
  },
};
