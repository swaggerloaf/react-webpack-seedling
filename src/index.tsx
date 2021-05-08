import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from  './style.css';

const App = ({ message }: any) => <div className={styles.hello}>{message}</div>;

ReactDOM.render(
  <App message={'Hi Fred'}></App>,
  document.getElementById('root')
);