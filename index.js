const formatter = require('pretty-components-formatter');

module.exports = function (source) {
  const { componentName, style } = formatter.parsePSS(source);

  let componentNameArgument = '';
  if (componentName) {
    componentNameArgument = `'${componentName}',`;
  }

  const styleArgument = JSON.stringify(style);

  return `
    const formatter = require('pretty-components-formatter');
    module.exports = formatter.stylesheet(${componentNameArgument}${styleArgument});
  `;
}
