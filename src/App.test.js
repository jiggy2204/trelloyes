import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Card from "./Card";
import List from "./List";

import renderer from "react-test-renderer";

const store = {
  lists: [
    {
      id: "1",
      header: "First list",
      cardIds: ["a", "b", "c", "d"],
    },
    {
      id: "2",
      header: "Second list",
      cardIds: ["f", "i", "m"],
    },
  ],

  allCards: {
    a: { id: "a", title: "First card", content: "lorem ipsum" },
    b: { id: "b", title: "Second card", content: "lorem ipsum" },
    c: { id: "c", title: "Third card", content: "lorem ipsum" },
    d: { id: "d", title: "Fourth card", content: "lorem ipsum" },
    f: { id: "f", title: "Sixth card", content: "lorem ipsum" },
    i: { id: "i", title: "Ninth card", content: "lorem ipsum" },
    m: { id: "m", title: "Thirteenth card", content: "lorem ipsum" },
  },
};

describe("App Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<App store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("List Component", () => {
  let listKey = "",
    listHeader = "",
    listCards = [];

  const mapping = function () {
    store.lists.map((list) => {
      listKey = list.id;
      listHeader = list.header;
      listCards = list.cardIds.map((id) => store.allCards[id]);
    });
  };

  mapping();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <List key={listKey} header={listHeader} cards={listCards} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    let listKey = "",
      listHeader = "",
      listCards = [];

    const mapping = function () {
      store.lists.map((list) => {
        listKey = list.id;
        listHeader = list.header;
        listCards = list.cardIds.map((id) => store.allCards[id]);
      });
    };

    mapping();

    const tree = renderer
      .create(<List key={listKey} header={listHeader} cards={listCards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Card Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Card
        key={store.allCards.id}
        title={store.allCards.title}
        content={store.allCards.content}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    let cardKey = "",
      cardTitle = "",
      cardContent = "";

    function mapping(key, title, content) {
      for (let i = 0; i < store.allCards.length; i++) {
        key = store.allCards[i].id;
        title = store.allCards[i].title;
        content = store.allCards[i].content;
      }

      return key, title, content;
    }

    mapping(cardKey, cardTitle, cardContent);

    const tree = renderer
      .create(<Card key={cardKey} title={cardTitle} content={cardContent} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
