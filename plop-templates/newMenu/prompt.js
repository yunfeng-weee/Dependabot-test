const { notEmpty, isInBlocks } = require('../utils.js');

module.exports = {
  description: '新建一个菜单页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '页面名称',
      validate: notEmpty('name'),
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: '是否需要:',
      choices: [
        {
          name: '列表排序',
          value: 'sort',
          checked: false,
        },
        {
          name: 'Service文件',
          value: 'service',
          checked: true,
        },
      ],
    },
    {
      type: 'input',
      name: 'sortName',
      message: '排序名称',
      validate: notEmpty('sortName'),
      when: (data) => {
        return isInBlocks(data, 'sort');
      },
    },
  ],
  actions: (data) => {
    const name = '{{camelCase name}}';
    const sortName = '{{sortName}}';
    const blocks = data.blocks || [];
    const actions = [
      {
        type: 'add',
        path: `src/pages/${name}/index.tsx`,
        templateFile: 'plop-templates/newMenu/template/menuIndex.hbs',
        data: {
          name,
          sort: blocks.includes('sort'),
          service: blocks.includes('service'),
          sortName,
        },
      },
      {
        type: 'add',
        path: `src/pages/${name}/data.d.ts`,
        templateFile: 'plop-templates/newMenu/template/menuData.hbs',
      },
      {
        type: 'add',
        path: `src/pages/${name}/style.less`,
        templateFile: 'plop-templates/newMenu/template/menuStyle.hbs',
      },
    ];

    if (blocks.includes('service')) {
      actions.push({
        type: 'add',
        path: `src/services/${name}API.ts`,
        templateFile: 'plop-templates/newMenu/template/menuApi.hbs',
        data: {
          sort: blocks.includes('sort'),
        },
      });
    }

    return actions;
  },
};
