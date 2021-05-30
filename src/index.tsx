import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from  './style.css';

const App = ({ message }: any) => <div className={styles.hello}>{message}</div>;

type SquareProps = {
  value: number
};
type SquareState = {
};

class Square extends React.Component<SquareProps>{
  render() {
    return (
      <button className={styles.square} 
      onClick={() => {
        console.warn('dude!!!!!!!!!!!!!!!!!!!!!!');
      }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i: number) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board />
        </div>
        <div className={styles.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game></Game>,
  document.getElementById('root')
);