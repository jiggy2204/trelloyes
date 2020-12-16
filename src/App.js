import React, { Component } from "react";
import List from "./List.js";

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  };
  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((l, idx) => {
            return (
              <List
                key={idx}
                id={l.id}
                header={l.header}
                cards={l.cardIds.map((id) => store.allCards[id])}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
