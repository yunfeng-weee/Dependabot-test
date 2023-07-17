const componentGenerator = require('./plop-templates/components/prompt.js');
const newMenuGenerator = require('./plop-templates/newMenu/prompt.js');
const newTabPageGenerator = require('./plop-templates/newTabPage/prompt.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('newMenu', newMenuGenerator);
  plop.setGenerator('newTabPage', newTabPageGenerator);
};
