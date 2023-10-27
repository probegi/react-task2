import { useState } from "react";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState();
  const [yItem, setYItem] = useState();
  const [zItem, setZItem] = useState();
  const [name, setName] = useState(""); //値保持
  const [showName, setShowName] = useState(""); //表示
  const [weight, setWeight] = useState("300 pounds");
  const [temp, setTemp] = useState("94 fahrenheit");
  const [ukus, setukus] = useState("us");

  const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const insertY = ["the soup kitchen", "Disneyland", "the White House"];
  const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  function set(insert) {
    const setItem = randomValueFromArray(insert);
    return setItem;
  }

  function handleClick() {
    const setStory = true;
    setShowStory(setStory);
    setXItem(set(insertX));
    setYItem(set(insertY));
    setZItem(set(insertZ));
    if (name == "") {
      setShowName("Bob");
    } else {
      setShowName(name);
    }
    if (ukus == "us") {
      setWeight("300 pounds");
      setTemp("94 fahrenheit");
    } else {
      setWeight("21 stone");
      setTemp("34 centigrade");
    }
  }

  const handleOptionChange = (event) => {
    setukus(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          value="us"
          checked={ukus === "us"}
          onChange={handleOptionChange}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          value="uk"
          checked={ukus === "uk"}
          onChange={handleOptionChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temp} outside, so {xItem} went for a walk. When they got to{" "}
          {yItem}, they stared in horror for a few moments, then {zItem}.
          {showName} saw the whole thing, but was not surprised —{xItem} weighs{" "}
          {weight}, and it was a hot day.
        </p>
      )}
    </>
  );
}
