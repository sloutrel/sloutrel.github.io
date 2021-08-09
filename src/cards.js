"use strict";
const AppRender = () => {
  const appData = [
    {
      id: 1,
      alt: "Magic the gathering img",
      title: "Magic the Gathering Score Keeper - React",
      text: "New and enhanced. Fight all the Josh's until only you survive. Still without that pesky 20 sided die.",
      aRef: "https://sloutrel.github.io/magic-react",
      button: "Enter the battlefield",
      image:
        "https://www.cruiseplanners.com/static/imago/5556/magic_banner-1000x2821.jpg",
    },
    {
      id: 2,
      alt: "magic the gathering img",
      title: "Magic the Gathering Score Keeper",
      text: "Choose your life count and keep score easily without that pesky 20 sided die.",
      aRef: "https://sloutrel.github.io/magic",
      button: "Go keep some scores",
      image:
        "https://seller.tcgplayer.com/media/2439/magic_media_slider_042018-2x.jpg",
    },
    {
      id: 3,
      alt: "expense-list img",
      title: "Basic Expense List using React",
      text: "Have you spent your hard earned money on too much rent? Is your boba habit getting out of control?",
      aRef: "https://sloutrel.github.io/expense-list",
      button: "See the damage.",
      image:
        "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    },
    {
      id: 4,
      alt: "task list img",
      title: "Vanilla JS/CSS Task List",
      text: "Is life getting too crazy to keep up? Don't worry about it! Just add it to a list and everything will be okay.",
      aRef: "https://sloutrel.github.io/todo",
      button: "Let's get to Listin'",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    },
    {
      id: 5,
      alt: "task list img",
      title: "Simple React Task List",
      text: "Have you always wanted to be a Taskmaster? Unleash your inner type-A, micromanger self today!",
      aRef: "https://sloutrel.github.io/task-list",
      button: "Task me up, baby!",
      image:
        "https://images.unsplash.com/photo-1536860484431-7615d914eac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 6,
      alt: "cat img",
      title: "Museum Of Cats",
      text: "Come look at some meowsterpieces at the meowseum.",
      aRef: "https://sloutrel.github.io/museum-of-cats",
      button: "Meow",
      image:
        "https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    },
    {
      id: 7,
      alt: "blocks img",
      title: "Colorful block grid for passing time",
      text: "It's kinda like a fidgit spinner, but with any number of multi-colored blocks. Click to change the colors.",
      aRef: "https://sloutrel.github.io/colored-blocks",
      button: "Click at you own risk.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/001/857/157/small/abstract-background-of-multi-colored-cubes-vector.jpg",
    },
    {
      id: 8,
      alt: "coin flip img",
      title: "Test your luck - flip a cat coin",
      text: "Do you relate to Two Face and let lady luck make your decisions? Are cat's also you entire personality?",
      aRef: "https://sloutrel.github.io/cat-coin",
      button: "Do you feel lucky, punk?",
      image:
        "https://www.vertica.com/wp-content/uploads/2019/07/Coin_Flip_183981489-2160.jpg",
    },
    {
      id: 9,
      alt: "dice img",
      title: "Two dice - no more, no less",
      text: "Dice are so heeeeaavy! Save your arm from a lifetime of pain with this handy tool.",
      aRef: "https://sloutrel.github.io/dice",
      button: "Roll baby, roll",
      image:
        "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 10,
      alt: "andom img",
      title: "Styles Generator",
      text: "Don't know how to pair styles? Neither does this app. Generate random style combos here.",
      aRef: "https://sloutrel.github.io/style_randomizer",
      button: "Randomize",
      image: "https://miro.medium.com/max/6000/1*9KGea1STTglY4ZqVHvTAfg.png",
    },
  ];
  console.log(appData[0].title);
  let allApps = appData.map((app) => {
    return (
      <AppCard
        id={app.id}
        key={app.id}
        title={app.title}
        alt={app.src}
        image={app.image}
        aRef={app.aRef}
        text={app.text}
        button={app.button}
      />
    );
  });
  return allApps;
};

const AppCard = (props) => {
  return (
    <div className="col-sm">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <div className="card-footer">
            <a href={props.aRef} target="_blank" className="btn card-btn mtg">
              {props.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

let domContainer = document.querySelector("#card_container");
ReactDOM.render(<AppRender />, domContainer);
