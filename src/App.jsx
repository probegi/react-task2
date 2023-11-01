import { useState } from "react";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [weight, setWeight] = useState("");
  const [xItem, setXItem] = useState();
  const [yItem, setYItem] = useState();
  const [zItem, setZItem] = useState();

  const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const insertY = ["the soup kitchen", "Disneyland", "the White House"];
  const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  function handleSubmit(event) {
    event.preventDefault();
    setShowStory(true);
    setXItem(randomValueFromArray(insertX));
    setYItem(randomValueFromArray(insertY));
    setZItem(randomValueFromArray(insertZ));

    if (event.target.elements.customname.value == "") {
      setName("Bob");
    } else {
      setName(event.target.elements.customname.value);
    }

    if (event.target.elements.country.value == "us") {
      setTemp("94 fahrenheit");
      setWeight("300 pounds");
    } else {
      setTemp("34 centigrade");
      setWeight("21 stone");
    }
  }

  return (
    <>
      <div class="form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="customname">Enter custom name:</label>
            <input
              type="text"
              name="customname"
              class="customname"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="us">US</label>
            <input type="radio" value="us" name="country" defaultChecked />
            <label htmlFor="uk">UK</label>
            <input type="radio" value="uk" name="country" />
          </div>

          <div>
            <button type="submit">Generate random story</button>
          </div>
        </form>
      </div>

      {showStory && (
        <p>
          It was {temp} outside, so {xItem} went for a walk. When they got to{" "}
          {yItem}, they stared in horror for a few moments, then {zItem}. {name}{" "}
          saw the whole thing, but was not surprised — {xItem} weighs {weight},
          and it was a hot day.
        </p>
      )}
    </>
  );
}
