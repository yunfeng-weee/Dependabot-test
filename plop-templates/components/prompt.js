const { notEmpty } = require('../utils.js');

module.exports = {
  description: '新建一个组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '组件名称',
      validate: notEmpty('name'),
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: '是否需要:',
      choices: [
        {
          name: 'style',
          value: 'style',
          checked: true,
        },
      ],
    },
  ],

  actions: (data) => {
    const name = '{{properCase name}}';
    const blocks = data.blocks || [];
    const actions = [
      {
        type: 'add',
        path: `src/components/${name}/index.tsx`,
        templateFile: 'plop-templates/components/template/index.hbs',
        data: {
          name,
          style: blocks.includes('style'),
        },
      },
    ];

    if (blocks.includes('style')) {
      actions.push({
        type: 'add',
        path: `src/components/${name}/index.less`,
        templateFile: 'plop-templates/components/template/style.hbs',
        data: { name },
      });
    }
    return actions;
  },
};
