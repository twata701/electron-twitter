(() => {
  require('babel-register')(
    {plugins: 'transform-react-jsx'}
  );
  const React = require('react');
  const ReactDom = require('react-dom');
  const MainContent = require('./components/main');

  const root = document.getElementById('root');
  ReactDom.render(React.createElement(MainContent), root);
})();
