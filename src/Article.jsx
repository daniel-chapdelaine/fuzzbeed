import './Article.css'

function Section({ index, title, text, imgUrl }) {
  return (
    <div className='section-container'>
      <h2>#{index}. {title}</h2>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <img className='section-img' src={imgUrl} />
    </div>
  )
}

function Article() {
  const sections = [
    {
      title: "Dead of Night Disco Drop",
      text: "Though they've always been known to light up a room, Obie's tactical deployment of a Duergar-esque lighting fixture for a dead of night dance really took things to a whole new level. 💃🪩🕺",
      imgUrl: ""
    }, 
    {
      title: "Obie Rocks the Night Cap",
      text: "Though we feel certain Mx. Diggles could pull off an actual night cap just as well (<a>Guuey Vitton's official #15FashionFaves of Brum, 2 P.C.</a>), we're actually referring to when they acted as stabilizer and conduit for a trusted colleague - later ID'd as Mina Florafallow - in a stunning new piece of divinatory tech. Cutting through the nonsense of dreams to pull the scoop from your own subconscious mind?? Yes please!! Look forward to our review dropping this upcoming Vern!",
      imgUrl: ""
    },
    {
      title: "Deep Debut",
      text: "Could it ever have been  anyone else 😍? Seeing Obie delve into their mind (and pockets) to awaken as the latest Diva of the Deep reminded us just a bit of the last icon to hold the title… (#HelTodayGoneTomorrow 🥹)",
      imgUrl: ""
    },
    {
      title: "Dinner with Dum'tek",
      text: "Known to the world as <strong>the</strong> go-to jeweler for Guuey Vitton, and to regular readers as the contributor of <a>No, But What Gemstone Am I Really</a>, the dinners of Bakas Dum'tek are in👏fa👏mous👏 for tea spilling, (no, honey, we don't mean the drink 😏) and we have it on good authority that one Obie Diggles is now on the list. Our second by second breakdown of a previous dinner is still the most popular article we've ever done, so please look forward to all the sordid details of this one, coming Q3 P.C. 25!",
      imgUrl: ""
    },
    {
      title: "A Midbrum Tale",
      text: "Never one to forget their roots, Obie was overheard sharing the tale of the Tinkerer's Inheritance with some new friends last Brum while they huddled by the hearth. See <a>5 Reasons the Tinkerer's Inheritance Isn't the Classic You Remember - and Only Two Are Jako</a>, for more coverage of the beloved gnomish parable.",
      imgUrl: ""
    },
    {
      title: "HCC You There",
      text: "What's <em>hotter</em> than the surface sun mid Estiv but can <em>quench</em> our thirst for culture like the purest crystal spring waters?? The Annual (we hope 🤞) Gourd Poggers Gallery Event, showcasing the best of tradecraft, traditional fine arts, couture, and performance pieces that will keep you cool, refreshed and coming back for more! Enjoy a piece by piece review with local <em>artiste</em> Mobie Giggles here <a>Ceci n'est pas une Deep</a>",
      imgUrl: ""
    },
    {
      title: "We Built This Outpost on Rock (and Dough?)",
      text: " In the Beginning there was Dirt, but in the beginning of Gourd Poggers there was ?!?!!? Obie Diggles?! We love to see one of our own recognized for their foundational (<a>112 Rock Jokes We Gnome You've Heard Before<a/>) contributions to their home above their home 🕳️🏡.",
      imgUrl: ""
    },
    {
      title: "Innside, Outside, Obside Down",
      text: "Who among us, dear readers, can't relate to that crazy feeling of having to meet an entire group of people who already all know each other? If you're ever feeling overwhelmed remembering every name in town, we recommend taking a page out of Obie's book and sneaking out to enjoy your food in peace.",
      imgUrl: ""
    },
    {
      title: "Just Hangin' 😏",
      text: "In a scene straight out of Lend Me a Tarrasque, Obie's hilarious first ever social encounter with the people of GourdPoggers involved a snare trap and one pissed off Salamander. For a more detailed write up, see #37 of <a>50 More Hilarious Trap Fails to Leave You Rolling On the Caltrops</a> 🤣",
      imgUrl: "/fuzzbeed/first_meeting.png"
    },
    {
      title: "Fancy Meeting 👻BOO! Here",
      text: "Moments after being called in to collab on casting out a restless spirit haunting the local chef's kitchen, Obie was visited be a second unexpected presence- none other than new newcomer Big Sister (<a>6 Times A Poggerton Almost Learned Big Sister's Personal Name and How to Keep Secrets Like a Thicketer</a>). Trust our dearest Deep Delver topside to make fast friends with the freshly awakened Family 💎. ",
      imgUrl: ""
    },
    {
      title: "Many Légère de Mage Hand Make Light Work",
      text: "Surprise!? Magic in the mines inspires impish incantations?? Yes, please! With a new naughty caster in town, the Ashkeepers are sure to have their (mage) hands full 🤭.",
      imgUrl: ""
    },
    {
      title: "Bartering Beyond Basics",
      text: " No one knows value like us Low Livers, and we say hats off (<a>33 Poggers Fusions: Caught Mid-Hat Swap</a>) to the titanic team effort that may have brought us the Trade of the Year ( #TotY3PC ). Immortal goat Badger and griffin's egg come out, transplanar hive mind seed goes in, only great things can come of this (catch them all on #GourdPoggersLiveCam )!",
      imgUrl: ""
    },
  ];

  return (
    <div className='article-container'>
      <p dangerouslySetInnerHTML={{ __html: "For those out of the loop, Obie Diggles (yes, <strong>THAT</strong> Obie Diggles 😱‼️) recently took the plunge and got in on the new #SurfaceLiving trend (<a>7 #SurfaceLiving Hacks We CANT Live Without, 12 Reasons Why Superterranian Life Might be the Future?</a>) by moving to a charming above-ground settlement known as GourdPoggers. To celebrate, we're recounting twelve of the most certified #oboments since their arrival which really Obie our Diggles."}}/>
      { sections.map((section, i) => <Section key={i} index={i + 1} {...section} />) }
    </div>
  )
}

export default Article