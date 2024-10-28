import React from "react";

import Card from "./Card";

import emojipedia from "../emojipedia";

function CreateCard(emojipedias) {
  return (
    <Card
      emoji={emojipedias.emoji}
      name={emojipedias.name}
      meaning={emojipedias.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(CreateCard)}
    </div>
  );
}

export default App;
