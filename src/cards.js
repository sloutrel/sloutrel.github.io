'use strict';
const AppRender = () => {
  const appData = [
    {
      id: 12,
      alt: 'Animal img',
      title: 'YelpCat - ExpressJS w/Authentication',
      text: 'Need that 6th cat AND despise kitty mills? Join YelpCat, a Yelp-like clone for pet adoption!',
      aRef: 'https://secret-tor-03211.herokuapp.com/',
      button: 'Adopt a fur baby today!',
      image:
        'https://images.unsplash.com/photo-1508675801627-066ac4346a61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80',
    },
    {
      id: 11,
      alt: 'Plant img',
      title: 'Saplants Landing Page - Pure CSS/SASS',
      text: 'Channel your inner plant daddy and order your box of plants today! No delivery guarantees.',
      aRef: 'https://sloutrel.github.io/saplants',
      button: 'For the environment!',
      image:
        'https://images.unsplash.com/photo-1599060114289-1f072c1e9b79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      id: 10,
      alt: 'Magic the gathering img',
      title: 'Magic the Gathering Score Keeper - React',
      text: 'New and enhanced. Fight until only you survive. Still without that pesky 20 sided die.',
      aRef: 'https://sloutrel.github.io/magic-react',
      button: 'Enter the battlefield',
      image:
        'https://www.cruiseplanners.com/static/imago/5556/magic_banner-1000x2821.jpg',
    },
    {
      id: 9,
      alt: 'magic the gathering img',
      title: 'Magic the Gathering Score Keeper - VanillaJS',
      text: 'Choose your life count and keep score easily without that pesky 20 sided die.',
      aRef: 'https://sloutrel.github.io/magic',
      button: 'Go keep some scores',
      image:
        'https://seller.tcgplayer.com/media/2439/magic_media_slider_042018-2x.jpg',
    },
    {
      id: 8.5,
      alt: 'space invaders img',
      title: 'Space Invaders Clone - Kaboom.js',
      text: 'Only two levels stand between you and an alien invasion that would destroy earth...',
      aRef: 'https://spaceinvade.sarahloulou.repl.co/',
      button: 'Shoot the invaders',
      image:
        'https://cdn.pixabay.com/photo/2013/07/13/11/48/pixelgrafic-158720_960_720.png',
    },
    {
      id: 8,
      alt: 'task list img',
      title: 'Task List - React',
      text: 'Have you always wanted to be a Taskmaster? Unleash your inner type-A, micromanger self today!',
      aRef: 'https://sloutrel.github.io/task-list',
      button: 'Task me up, baby!',
      image:
        'https://images.unsplash.com/photo-1536860484431-7615d914eac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      id: 7,
      alt: 'task list img',
      title: 'Task List - VanillaJS / CSS',
      text: "Is life getting too crazy? Don't worry about it! Just add it to a list & everything will be okay.",
      aRef: 'https://sloutrel.github.io/todo',
      button: "Let's get to Listin'",
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
    },
    {
      id: 6.5,
      alt: 'space img',
      title: 'Particle Push - Canvas.API',
      text: 'Take a trip with to the cosmos & watch the "stars" repel from you only to return when you leave.',
      aRef: 'https://sloutrel.github.io/canvas',
      button: 'To the moon!',
      image:
        'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80',
    },
    {
      id: 6,
      alt: 'expense-list img',
      title: 'Basic Expense List - React',
      text: 'Have you spent your money on too much rent? Is your boba habit getting out of control?',
      aRef: 'https://sloutrel.github.io/expense-list',
      button: 'See the damage.',
      image:
        'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    },
    {
      id: 5,
      alt: 'cat img',
      title: 'Museum of Cats - Bootstrap',
      text: 'Come look at some meow-sterpieces at the meow-seum.',
      aRef: 'https://sloutrel.github.io/museum-of-cats',
      button: 'Meow',
      image:
        'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    },
    {
      id: 4,
      alt: 'blocks img',
      title: 'Colorful Block Grid - React',
      text: "It's kinda like a fidgit spinner, but with multi-colored blocks. Click to change the colors.",
      aRef: 'https://sloutrel.github.io/colored-blocks',
      button: 'Click at you own risk.',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/001/857/157/small/abstract-background-of-multi-colored-cubes-vector.jpg',
    },
    {
      id: 3,
      alt: 'coin flip img',
      title: 'Test your luck - flip a cat coin - React',
      text: "Are you like Two Face & lady luck makes your decisions? Are cat's also your entire personality?",
      aRef: 'https://sloutrel.github.io/cat-coin',
      button: 'Do you feel lucky, punk?',
      image:
        'https://www.vertica.com/wp-content/uploads/2019/07/Coin_Flip_183981489-2160.jpg',
    },
    {
      id: 2,
      alt: 'dice img',
      title: 'Two dice - no more, no less - React',
      text: 'Dice are so heeeeaavy! Save your arm from a lifetime of pain with this handy tool.',
      aRef: 'https://sloutrel.github.io/dice',
      button: 'Roll baby, roll',
      image:
        'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 1,
      alt: 'random img',
      title: 'Styles Generator - VanillaJS',
      text: "Don't know how to pair styles? Neither does this app. Generate random style combos here.",
      aRef: 'https://sloutrel.github.io/style_randomizer',
      button: 'Randomize',
      image: 'https://miro.medium.com/max/6000/1*9KGea1STTglY4ZqVHvTAfg.png',
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
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <img src={props.image} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <div className="card-footer">
            <a href={props.aRef} target="_blank" className="btn card-btn">
              {props.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

let domContainer = document.querySelector('#card_container');
ReactDOM.render(<AppRender />, domContainer);
