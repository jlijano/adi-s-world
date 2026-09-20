const STORAGE_KEY = "adis-world-progress-v1";
const SOUND_KEY = "adis-world-sound-v1";
const BLESSING_VOICE_KEY = "adis-world-blessing-voice-v1";
const BLESSING_GENDER_KEY = "adis-world-blessing-gender-v1";
const BLESSING_PITCH_KEY = "adis-world-blessing-pitch-v1";
const BLESSING_RATE_KEY = "adis-world-blessing-rate-v1";
const BLESSING_SYSTEM_VOICE_KEY = "adis-world-blessing-system-voice-v1";
const BLESSING_PROFILE_VERSION_KEY = "adis-world-blessing-profile-version";
const ADI_HOME_IDLE_IMAGE = "assets/character/idle-front.webp";
const ADI_HOME_HI_IMAGE = "assets/character/hi-wave.webp";

const worlds = [
  { id: "home", name: "Adi's Home", icon: "🏠", note: "Routines & life skills", status: "open" },
  { id: "word", name: "Word Forest", icon: "🌳", note: "Letters, sounds & words", status: "open" },
  { id: "number", name: "Number Island", icon: "🏝️", note: "Counting & early math", status: "open" },
  { id: "drawing", name: "Drawing Garden", icon: "🎨", note: "Tracing & creativity", status: "open" },
  { id: "discovery", name: "Discovery Lab", icon: "🔬", note: "Science & curiosity", status: "open" },
  { id: "blessing", name: "Blessing Garden", icon: "🕊️", note: "Bible verses, stories & faith questions", status: "open" },
  { id: "robot", name: "Robot Road", icon: "🤖", note: "Sequences & coding", status: "soon" },
  { id: "puzzle", name: "Puzzle Mountain", icon: "🧩", note: "Logic & problem-solving", status: "open" },
  { id: "memory", name: "Memory Castle", icon: "🏰", note: "Memory & attention", status: "soon" },
  { id: "feelings", name: "Feelings Town", icon: "💛", note: "Emotions & kindness", status: "soon" },
  { id: "adventure", name: "Adventure World", icon: "🌎", note: "Mixed learning missions", status: "soon" }
];

const GIDEON_ANSWER_BANK = [
  { letter: "A", text: "mountains" },
  { letter: "B", text: "Angel" },
  { letter: "C", text: "Robbers" },
  { letter: "D", text: "God" },
  { letter: "E", text: "Midianites" },
  { letter: "F", text: "fleece" },
  { letter: "G", text: "No" },
  { letter: "H", text: "Yes" },
  { letter: "I", text: "food" },
  { letter: "J", text: "afraid" }
];

const activities = {
  home: [
    {
      id: "outfit-check",
      title: "Outfit Check",
      icon: "👗",
      description: "Dress Adi in different tops, bottoms, accessories, watches, and shoes. Your outfit is saved on this device.",
      rounds: [],
      customActivity: true
    }
  ],
  word: [
    {
      id: "letter-find",
      title: "Find the Letter",
      icon: "🔤",
      description: "10 randomized rounds using letters from A to Z.",
      rounds: []
    },
    {
      id: "first-sound",
      title: "First Sound",
      icon: "🐻",
      description: "10 randomized rounds covering beginning sounds from A to Z.",
      rounds: []
    },
    {
      id: "picture-word",
      title: "Picture Match",
      icon: "🖼️",
      description: "10 randomized A–Z picture-word rounds. Tap the picture to hear its name.",
      rounds: []
    },
    {
      id: "build-word",
      title: "Build the Word",
      icon: "🧱",
      description: "Build 10 picture words by tapping letters in order. Words are 3–7 letters.",
      rounds: []
    },
    {
      id: "rhyme-time",
      title: "Rhyme Time",
      icon: "🎵",
      description: "Listen, compare, and find the word that rhymes.",
      rounds: []
    },
    {
      id: "start-word",
      title: "Start the Word",
      icon: "🌱",
      description: "Choose a letter and 5, 10, 15, or 20 rounds. Add the beginning letter to complete each picture word.",
      rounds: []
    },
    {
      id: "sound-hunt",
      title: "Sound Hunt",
      icon: "🎨",
      description: "Choose a letter and 5, 10, 15, or 20 rounds. Find every black-and-white picture that begins with that sound and bring it to colour.",
      rounds: []
    },
    {
      id: "sound-match",
      title: "Match the Sound",
      icon: "🔗",
      description: "10 rounds. Tap a picture, then match it to the letter that begins its name.",
      rounds: []
    }
  ],
  discovery: [
    {
      id: "plant-food-sort",
      title: "Plant Food Sort",
      icon: "🌱",
      description: "10 randomized rounds. Listen to each plant food and decide whether we usually call it a fruit or a vegetable.",
      rounds: []
    }
  ],
  blessing: [
    {
      id: "verse-time",
      title: "Verse Time",
      icon: "📖",
      description: "Listen, look, and complete 5 short Bible verses.",
      rounds: [
        { prompt: "Complete the Bible verse.", stage: "God is ___. — 1 John 4:8", choices: ["love", "rain", "stone"], answer: "love", speak: "God is blank. First John chapter four, verse eight. Which word completes the verse?" },
        { prompt: "Complete the Bible verse.", stage: "The LORD is my ___. — Psalm 23:1", choices: ["shepherd", "boat", "house"], answer: "shepherd", speak: "The Lord is my blank. Psalm twenty three, verse one. Which word completes the verse?" },
        { prompt: "Complete the Bible verse.", stage: "Be ye ___ one to another. — Ephesians 4:32", choices: ["kind", "loud", "fast"], answer: "kind", speak: "Be ye blank one to another. Ephesians chapter four, verse thirty two. Which word completes the verse?" },
        { prompt: "Complete the Bible verse.", stage: "In the beginning God ___. — Genesis 1:1", choices: ["created", "slept", "hid"], answer: "created", speak: "In the beginning God blank. Genesis chapter one, verse one. Which word completes the verse?" },
        { prompt: "Complete the Bible verse.", stage: "We love him, because he first ___ us. — 1 John 4:19", choices: ["loved", "called", "found"], answer: "loved", speak: "We love him, because he first blank us. First John chapter four, verse nineteen. Which word completes the verse?" }
      ]
    },
    {
      id: "story-garden",
      title: "Bible Stories",
      icon: "📚",
      description: "Read and listen to 6 Bible stories with picture scenes. No quiz.",
      reader: true,
      rounds: []
    },
    {
      id: "bible-questions",
      title: "Bible Questions",
      icon: "❓",
      description: "Answer 5 simple questions based on Bible verses and stories.",
      rounds: [
        { prompt: "According to 1 John 4:8, what is God?", stage: "📖 God is love.", choices: ["Love", "A mountain", "A boat"], answer: "Love", speak: "According to First John chapter four, verse eight, what is God?" },
        { prompt: "Who built the ark?", stage: "🌧️  🚢  🐘  🌈", choices: ["Noah", "David", "Daniel"], answer: "Noah", speak: "Who built the ark?" },
        { prompt: "What did David use when he faced Goliath?", stage: "👦  🪨  🛡️", choices: ["A stone", "A crown", "A boat"], answer: "A stone", speak: "What did David use when he faced Goliath?" },
        { prompt: "Who was in the lions' den?", stage: "🦁  🦁  🙏", choices: ["Daniel", "Jonah", "Noah"], answer: "Daniel", speak: "Who was in the lions den?" },
        { prompt: "Ephesians 4:32 tells us to be what to one another?", stage: "📖 Be ye kind one to another.", choices: ["Kind", "Angry", "Rough"], answer: "Kind", speak: "Ephesians chapter four, verse thirty two tells us to be what to one another?" }
      ]
    },
    {
      id: "gideon-activity",
      title: "The Call of Gideon Activity",
      icon: "✍️",
      description: "10 questions from Judges 6. Look in the answer box and choose the letter of the correct answer.",
      rounds: [
        { prompt: "1. The Israelites were afraid of the ________.", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "E", speak: "The Israelites were afraid of the blank. Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "2. The Midianites were ________.", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "C", speak: "The Midianites were blank. Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "3. The Israelites hid in ________.", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "A", speak: "The Israelites hid in blank. Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "4. Who talked to Gideon?", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "B", speak: "Who talked to Gideon? Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "5. Who chose Gideon?", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "D", speak: "Who chose Gideon? Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "6. What did the angel touch?", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "I", speak: "What did the angel touch? Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "7. Gideon was ________.", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "J", speak: "Gideon was blank. Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "8. What did Gideon put in the field?", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "F", speak: "What did Gideon put in the field? Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "9. Did the angel eat the food?", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "G", speak: "Did the angel eat the food? Look in the answer box and choose the correct letter.", gideonActivityRound: true },
        { prompt: "10. Was Gideon's prayer answered?", stage: "Look for the answer in the box.", choices: GIDEON_ANSWER_BANK.map((item) => item.letter), answer: "H", speak: "Was Gideon's prayer answered? Look in the answer box and choose the correct letter.", gideonActivityRound: true }
      ]
    }
  ],
  number: [
    {
      id: "count-stars",
      title: "Let's Count!",
      icon: "🔢",
      description: "10 randomized rounds. Tap each object to count, then choose and confirm the matching number.",
      rounds: []
    },
    {
      id: "more-or-less",
      title: "Which Has More?",
      icon: "⚖️",
      description: "10 randomized rounds. Compare two groups, hear your choice, then confirm it.",
      rounds: []
    },
    {
      id: "number-order",
      title: "What Comes Next?",
      icon: "➡️",
      description: "10 randomized rounds. Find the one number that comes next, hear it, then confirm.",
      rounds: []
    },
    {
      id: "count-match",
      title: "Count & Match",
      icon: "🧮",
      description: "30 randomized rounds. Count the objects, choose the numeral, then match the number word.",
      rounds: []
    }
  ],
  puzzle: [
    {
      id: "odd-one-out",
      title: "Odd One Out",
      icon: "🔎",
      description: "Find the one that is different.",
      rounds: [
        { prompt: "Which one is different?", stage: "Look carefully!", choices: ["🍎", "🍎", "🍌"], answer: "🍌", speak: "Which one is different?" },
        { prompt: "Which one is different?", stage: "Look carefully!", choices: ["🐶", "🐱", "🐶"], answer: "🐱", speak: "Which one is different?" },
        { prompt: "Which one is different?", stage: "Look carefully!", choices: ["🔵", "🔵", "🟡"], answer: "🟡", speak: "Which one is different?" }
      ]
    },
    {
      id: "pattern",
      title: "Finish the Pattern",
      icon: "🧠",
      description: "Choose what comes next.",
      rounds: [
        { prompt: "What comes next?", stage: "🔴 🔵 🔴 🔵 ?", choices: ["🔴", "🔵", "🟢"], answer: "🔴", speak: "What comes next in the pattern?" },
        { prompt: "What comes next?", stage: "⭐ 🌙 ⭐ 🌙 ?", choices: ["☀️", "⭐", "🌙"], answer: "⭐", speak: "What comes next in the pattern?" },
        { prompt: "What comes next?", stage: "🍎 🍌 🍎 🍌 ?", choices: ["🍌", "🍎", "🍐"], answer: "🍎", speak: "What comes next in the pattern?" }
      ]
    },
    {
      id: "shape-match",
      title: "Shape Match",
      icon: "🔺",
      description: "Match the shape Adi shows you.",
      rounds: [
        { prompt: "Can you find the circle?", stage: "⚪", choices: ["⚪", "🔺", "⬛"], answer: "⚪", speak: "Can you find the circle?" },
        { prompt: "Can you find the triangle?", stage: "🔺", choices: ["⬛", "🔺", "⚪"], answer: "🔺", speak: "Can you find the triangle?" },
        { prompt: "Can you find the square?", stage: "⬛", choices: ["🔺", "⚪", "⬛"], answer: "⬛", speak: "Can you find the square?" }
      ]
    }
  ]
};

const BIBLE_STORIES = [
  {
    id: "creation",
    title: "God Creates the World",
    reference: "Genesis 1",
    summary: "God makes the world, the sky, plants, animals, and people.",
    maxStars: 5,
    coverImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figures_001_In_the_beginning_God_Created_the_Heaven_and_the_Earth.jpg",
    coverAlt: "Child-friendly Bible illustration representing God's creation of the world.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Figures_001_In_the_beginning_God_Created_the_Heaven_and_the_Earth.jpg",
    credits: "Bible illustration via Wikimedia Commons",
    license: "Public Domain",
    scenes: [
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figures_001_In_the_beginning_God_Created_the_Heaven_and_the_Earth.jpg",
        title: "In the Beginning",
        text: "In the beginning, God made the heavens and the earth. Everything began because God created it.",
        alt: "Bible illustration representing the beginning of God's creation."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figures_001_In_the_beginning_God_Created_the_Heaven_and_the_Earth.jpg",
        title: "Light and Darkness",
        text: "God made light. He called the light day, and He called the darkness night.",
        alt: "Bible illustration representing light and darkness in the creation story."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figures_001_In_the_beginning_God_Created_the_Heaven_and_the_Earth.jpg",
        title: "Sky, Land, and Plants",
        text: "God made the sky, the seas, and dry land. He made plants and trees grow on the land.",
        alt: "Bible illustration representing the sky, land, seas, and plants God created."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figures_001_In_the_beginning_God_Created_the_Heaven_and_the_Earth.jpg",
        title: "Sun, Moon, and Stars",
        text: "God made the sun for the day. He made the moon and stars to shine at night.",
        alt: "Bible illustration representing the sun, moon, and stars in the creation story."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figures_001_In_the_beginning_God_Created_the_Heaven_and_the_Earth.jpg",
        title: "Animals and People",
        text: "God made fish, birds, and animals. Then God made people. God saw that His creation was very good.",
        alt: "Bible illustration representing animals and people as part of God's creation."
      }
    ]
  },
  {
    id: "noah",
    title: "Noah and the Ark",
    reference: "Genesis 6–9",
    summary: "Noah obeys God, builds the ark, and sees God's rainbow promise.",
    maxStars: 5,
    coverImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/New_pictorial_Bible_%281%29_-_Noah_entering_the_ark.png",
    coverAlt: "Bible illustration of Noah and his family entering the ark.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:New_pictorial_Bible_(1)_-_Noah_entering_the_ark.png",
    credits: "New Pictorial Bible illustration via Wikimedia Commons",
    license: "Public Domain",
    scenes: [
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/New_pictorial_Bible_%281%29_-_Noah_entering_the_ark.png",
        title: "God Speaks to Noah",
        text: "God told Noah to build a very large ark. Noah trusted God and listened carefully.",
        alt: "Bible illustration representing God telling Noah to prepare the ark."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/New_pictorial_Bible_%281%29_-_Noah_entering_the_ark.png",
        title: "Noah Builds the Ark",
        text: "Noah worked hard and built the ark just as God told him to do.",
        alt: "Bible illustration representing Noah preparing the ark."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/New_pictorial_Bible_%281%29_-_Noah_entering_the_ark.png",
        title: "Animals Enter the Ark",
        text: "Animals came to the ark, and Noah's family went inside too. God kept them together and safe.",
        alt: "Bible illustration of Noah, his family, and animals entering the ark."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/New_pictorial_Bible_%281%29_-_Noah_entering_the_ark.png",
        title: "The Rain",
        text: "Rain fell for many days. Noah, his family, and the animals stayed safe inside the ark.",
        alt: "Bible illustration representing Noah and the animals safe inside the ark during the rain."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/New_pictorial_Bible_%281%29_-_Noah_entering_the_ark.png",
        title: "The Rainbow Promise",
        text: "When the water went down, God put a rainbow in the sky as a sign of His promise.",
        alt: "Bible illustration representing Noah's family after the flood and God's promise."
      }
    ]
  },
  {
    id: "david-goliath",
    title: "David and Goliath",
    reference: "1 Samuel 17",
    summary: "David trusts God when he faces the giant Goliath.",
    maxStars: 5,
    coverImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tissot_Drawing_266_Goliath_addresses_David_1_Samuel_17_43_for_Brunoff_254_Goliath_s%27adresse_%C3%A0_David.jpg",
    coverAlt: "Bible illustration of David standing before Goliath.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tissot_Drawing_266_Goliath_addresses_David_1_Samuel_17_43_for_Brunoff_254_Goliath_s%27adresse_%C3%A0_David.jpg",
    credits: "James Tissot Bible illustration via Wikimedia Commons",
    license: "Public Domain",
    scenes: [
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tissot_Drawing_266_Goliath_addresses_David_1_Samuel_17_43_for_Brunoff_254_Goliath_s%27adresse_%C3%A0_David.jpg",
        title: "A Giant Challenge",
        text: "A giant named Goliath challenged the people of Israel. The soldiers were afraid of him.",
        alt: "Bible illustration of Goliath speaking to David without graphic violence."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tissot_Drawing_266_Goliath_addresses_David_1_Samuel_17_43_for_Brunoff_254_Goliath_s%27adresse_%C3%A0_David.jpg",
        title: "David Trusts God",
        text: "David remembered how God had helped him before. He trusted that God would be with him again.",
        alt: "Bible illustration of young David courageously facing Goliath."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tissot_Drawing_266_Goliath_addresses_David_1_Samuel_17_43_for_Brunoff_254_Goliath_s%27adresse_%C3%A0_David.jpg",
        title: "Five Smooth Stones",
        text: "David chose five smooth stones from a stream. He carried his sling and went forward with courage.",
        alt: "Bible illustration representing David preparing to face Goliath."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tissot_Drawing_266_Goliath_addresses_David_1_Samuel_17_43_for_Brunoff_254_Goliath_s%27adresse_%C3%A0_David.jpg",
        title: "David Faces Goliath",
        text: "David trusted God and used his sling. Goliath fell, and the danger was over.",
        alt: "Bible illustration of David facing Goliath, shown without graphic detail."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tissot_Drawing_266_Goliath_addresses_David_1_Samuel_17_43_for_Brunoff_254_Goliath_s%27adresse_%C3%A0_David.jpg",
        title: "The People Rejoice",
        text: "The people were glad and no longer afraid. David knew that God had helped him.",
        alt: "Bible illustration representing David's courage and the people's relief."
      }
    ]
  },
  {
    id: "daniel-lions",
    title: "Daniel and the Lions",
    reference: "Daniel 6",
    summary: "Daniel keeps praying to God, and God protects him.",
    maxStars: 5,
    coverImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daniel%27s_Answer_to_the_King%2C_by_Briton_Riviere%2C_GMIII_MCAG_1937_123-001.jpg",
    coverAlt: "Bible illustration of Daniel safely sitting near calm lions.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daniel%27s_Answer_to_the_King%2C_by_Briton_Riviere%2C_GMIII_MCAG_1937_123-001.jpg",
    credits: "Briton Rivière, Daniel's Answer to the King, via Wikimedia Commons",
    license: "Public Domain",
    scenes: [
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daniel%27s_Answer_to_the_King%2C_by_Briton_Riviere%2C_GMIII_MCAG_1937_123-001.jpg",
        title: "Daniel Prays",
        text: "Daniel loved God and prayed every day. Prayer was an important part of his life.",
        alt: "Bible illustration representing Daniel faithfully praying to God."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daniel%27s_Answer_to_the_King%2C_by_Briton_Riviere%2C_GMIII_MCAG_1937_123-001.jpg",
        title: "A Law Against Prayer",
        text: "A new law said Daniel should not pray to God. Daniel still chose to pray faithfully.",
        alt: "Bible illustration representing Daniel continuing to pray despite the new law."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daniel%27s_Answer_to_the_King%2C_by_Briton_Riviere%2C_GMIII_MCAG_1937_123-001.jpg",
        title: "Daniel and the Lions",
        text: "Daniel was placed in a lions' den. God stayed with Daniel through the night.",
        alt: "Child-friendly Bible illustration of Daniel safely sitting near lions."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daniel%27s_Answer_to_the_King%2C_by_Briton_Riviere%2C_GMIII_MCAG_1937_123-001.jpg",
        title: "God Protects Daniel",
        text: "God sent an angel and kept the lions from hurting Daniel. Daniel was safe.",
        alt: "Bible illustration of Daniel protected by God among calm lions."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daniel%27s_Answer_to_the_King%2C_by_Briton_Riviere%2C_GMIII_MCAG_1937_123-001.jpg",
        title: "Daniel Is Safe",
        text: "In the morning, the king was very happy to find Daniel safe. Daniel kept trusting God.",
        alt: "Bible illustration of Daniel safe after spending the night near the lions."
      }
    ]
  },
  {
    id: "jesus-children",
    title: "Jesus Welcomes the Children",
    reference: "Mark 10:13–16",
    summary: "Jesus welcomes children and shows that they are important to Him.",
    maxStars: 5,
    coverImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jesus_Blessing_the_Children.jpg",
    coverAlt: "Bible illustration of Jesus warmly welcoming children.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jesus_Blessing_the_Children.jpg",
    credits: "Bernard Plockhorst, Christ Blessing the Children, via Wikimedia Commons",
    license: "Public Domain",
    scenes: [
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jesus_Blessing_the_Children.jpg",
        title: "Families Come to Jesus",
        text: "Families brought their children to Jesus. They wanted Jesus to bless them.",
        alt: "Bible illustration of families bringing children to Jesus."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jesus_Blessing_the_Children.jpg",
        title: "The Disciples Try to Stop Them",
        text: "Some disciples tried to send the families away. Jesus wanted the children to come to Him.",
        alt: "Bible illustration representing children coming to Jesus."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jesus_Blessing_the_Children.jpg",
        title: "Jesus Says Come",
        text: "Jesus said, \"Let the little children come to me.\" He welcomed them with love.",
        alt: "Bible illustration of Jesus inviting children to come close."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jesus_Blessing_the_Children.jpg",
        title: "Jesus Welcomes the Children",
        text: "The children came close to Jesus. He showed everyone that children are important to God.",
        alt: "Bible illustration of Jesus warmly welcoming children."
      },
      {
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jesus_Blessing_the_Children.jpg",
        title: "Jesus Blesses Them",
        text: "Jesus took the children in His arms and blessed them. He showed them kindness and love.",
        alt: "Bible illustration of Jesus blessing children."
      }
    ]
  },
  {
    id: "gideon-call",
    title: "The Call of Gideon",
    reference: "Judges 6",
    summary: "God hears His people, calls Gideon, and patiently gives him signs.",
    maxStars: 5,
    memoryVerseReference: "Judges 6:17",
    memoryVerse: "If now I have found favor in your eyes, give me a sign.",
    memoryVerseImage: "assets/blessing-garden/gideon/gideon-call.jpg",
    memoryVerseImageAlt: "Child-friendly illustration of an angel and Gideon beside the stone altar.",
    coverImage: "assets/blessing-garden/gideon/gideon-call.jpg",
    coverAlt: "Colorful child-friendly illustration of an angel and Gideon beside a stone altar with a small flame.",
    sourceUrl: "assets/blessing-garden/gideon/gideon-call.jpg",
    credits: "Colorized child-friendly adaptation based on the workbook illustration provided by the user",
    license: "User-provided reference, adapted for this Adi's World lesson",
    scenes: [
      {
        image: "assets/blessing-garden/gideon/gideon-call.jpg",
        title: "The Israelites Ask for Help",
        text: "The Israelites had forgotten God. The Midianites came and took their animals and crops, so the people became poor and afraid. They remembered God and cried to Him for help.",
        alt: "Colorful Bible story illustration representing God's help for the Israelites in the time of Gideon."
      },
      {
        image: "assets/blessing-garden/gideon/gideon-call.jpg",
        title: "God Chooses Gideon",
        text: "God heard their prayers and chose a man named Gideon to lead His people. An angel came to Gideon while he was hiding and threshing grain.",
        alt: "Colorful child-friendly illustration of an angel speaking to Gideon."
      },
      {
        image: "assets/blessing-garden/gideon/gideon-call.jpg",
        title: "Gideon Asks for a Sign",
        text: "Gideon was afraid and wanted to know that God was really calling him. He brought food, and the angel touched it on the rock. A flame rose up as a sign.",
        alt: "Colorful child-friendly illustration of an angel, Gideon, a stone altar, food, and a gentle flame."
      },
      {
        image: "assets/blessing-garden/gideon/gideon-call.jpg",
        title: "The Fleece",
        text: "Gideon asked God for more assurance. He placed a fleece in the field and prayed that the fleece would be wet while the ground stayed dry.",
        alt: "Child-friendly Gideon story illustration accompanying the story of the fleece."
      },
      {
        image: "assets/blessing-garden/gideon/gideon-call.jpg",
        title: "God Answers Gideon",
        text: "God answered Gideon's prayer. Gideon asked once more for the ground to be wet and the fleece to be dry, and God answered again. Gideon learned that God would help him.",
        alt: "Colorful child-friendly Gideon story illustration representing God's patient answer to Gideon."
      }
    ]
  }
];

const GAME_INSTRUCTIONS = {
  "word:letter-find": {
    intro: "Listen for the letter Adi asks you to find.",
    steps: ["Look at the target letter.", "Tap the matching letter from the choices.", "If you miss, try again until you find it."],
    spoken: "Look at the target letter, then tap the same letter from the choices. If you miss, try again."
  },
  "word:first-sound": {
    intro: "Listen to the picture word and find its beginning sound.",
    steps: ["Look at the picture and word.", "Tap a letter to hear its sound.", "Confirm the letter that starts the word."],
    spoken: "Look at the picture and word. Tap a letter to hear its sound, then confirm the letter that starts the word."
  },
  "word:picture-word": {
    intro: "Match each picture to the correct written word.",
    steps: ["Tap the picture if you want to hear its name.", "Tap a written word to hear it.", "Confirm the word that matches the picture."],
    spoken: "Tap the picture to hear its name. Choose a written word, listen to it, then confirm the word that matches."
  },
  "word:build-word": {
    intro: "Build the picture word one letter at a time.",
    steps: ["Tap the picture to hear the word.", "Tap the letters in the correct order.", "Correct letters stay locked in place. Use reset only if you want to start the word again."],
    spoken: "Tap the picture to hear the word, then tap the letters in order. Correct letters stay in place."
  },
  "word:rhyme-time": {
    intro: "Find the word that rhymes with the picture word.",
    steps: ["Tap the picture to hear the first word.", "Tap an answer to hear it.", "Confirm the word that sounds like it rhymes."],
    spoken: "Listen to the picture word, then choose and confirm the word that rhymes with it."
  },
  "word:start-word": {
    intro: "Choose a letter to practise, then complete words that begin with it.",
    steps: ["First choose the letter you want to practise and the number of rounds.", "Look at the picture and the word with its first letter missing.", "Tap the correct beginning letter to complete the word."],
    spoken: "First choose a letter and how many rounds to play. Then complete each picture word by tapping its missing beginning letter."
  },
  "word:sound-hunt": {
    intro: "Choose one letter, then find every picture that begins with that sound.",
    steps: ["Choose the letter you want to practise and how many rounds to play.", "Each round starts with at least five black-and-white pictures.", "Tap the pictures that begin with your letter. Correct pictures turn colourful and stay locked."],
    spoken: "Choose one letter and how many rounds to play. Then tap every black and white picture that begins with your letter. Correct pictures turn colourful and stay locked."
  },
  "word:sound-match": {
    intro: "Match each picture to the letter that begins its name.",
    steps: ["Tap a picture to select it and hear its name.", "Tap the beginning letter that matches the picture.", "Correct matches stay locked. Match every picture to finish the round."],
    spoken: "Tap a picture to hear its name, then tap the letter that begins that word. Correct matches stay locked. Match every picture to finish the round."
  },
  "discovery:plant-food-sort": {
    intro: "Plants give us lots of food. Sort each food into the group we usually call fruit or vegetable.",
    steps: ["Look at the food picture and name.", "Tap the food to hear its name.", "Choose Fruit or Vegetable. If you miss, try again."],
    spoken: "Plants give us lots of food. Look at each food, tap it to hear its name, then choose whether we usually call it a fruit or a vegetable. If you miss, try again."
  },
  "blessing:verse-time": {
    intro: "Listen to a short Bible verse and choose the missing word.",
    steps: ["Listen to the verse.", "Look at the missing word.", "Tap the word that completes the verse."],
    spoken: "Listen to the Bible verse, then tap the word that completes it."
  },
  "blessing:story-garden": {
    intro: "Choose a Bible story, then read or listen one picture scene at a time.",
    steps: ["Choose a story from the story shelf.", "Look at each picture scene while Adi reads the story.", "Use Back and Next to move through the story. There are no quiz questions."],
    spoken: "Choose a Bible story, then enjoy each picture scene. You can listen, go back, or go to the next page. There is no quiz."
  },
  "blessing:bible-questions": {
    intro: "Answer simple questions about Bible verses and stories.",
    steps: ["Listen to the question.", "Look at the verse or picture clue.", "Tap the correct answer."],
    spoken: "Listen to the Bible question, look at the clue, then tap the correct answer."
  },
  "blessing:gideon-activity": {
    intro: "Use the answer box from the Gideon lesson to answer ten questions.",
    steps: ["Read or listen to the question.", "Look through the answer box for the matching word.", "Tap the letter beside that answer. If you miss, try again."],
    spoken: "Read the question, look in the answer box, and tap the letter beside the correct answer. There are ten questions."
  },
  "number:count-stars": {
    intro: "Count the objects, then choose the matching number.",
    steps: ["Tap each object once to count it.", "Tap a number to hear your choice.", "Confirm the number that matches how many objects you counted."],
    spoken: "Tap each object once to count. Then choose and confirm the number that matches."
  },
  "number:more-or-less": {
    intro: "Compare two groups and find which side has more.",
    steps: ["Look at the objects on the left and right.", "Tap Left or Right to hear your choice.", "Confirm the side with more objects."],
    spoken: "Compare the left and right groups. Choose and confirm the side that has more objects."
  },
  "number:number-order": {
    intro: "Look at the number pattern and find what comes next.",
    steps: ["Read or listen to the number sequence.", "Tap a number to hear it.", "Confirm the number that should come next."],
    spoken: "Look at the number sequence, then choose and confirm the number that comes next."
  },
  "number:count-match": {
    intro: "Count, choose the numeral, then match its number word.",
    steps: ["Tap each object once to count it.", "Choose and confirm the matching numeral.", "Then choose and confirm the written number word."],
    spoken: "Count the objects, choose the matching number, then match that number to its written number word."
  },
  "puzzle:odd-one-out": {
    intro: "Find the one item that is different from the others.",
    steps: ["Look carefully at all the choices.", "Find the one that does not match.", "Tap it to answer."],
    spoken: "Look carefully and tap the one item that is different from the others."
  },
  "puzzle:pattern": {
    intro: "Work out the pattern and choose what comes next.",
    steps: ["Look at the order of the pictures or shapes.", "Notice what repeats.", "Tap the choice that should come next."],
    spoken: "Look at the pattern, notice what repeats, then tap what should come next."
  },
  "puzzle:shape-match": {
    intro: "Find the shape Adi asks you to match.",
    steps: ["Look at the target shape.", "Compare it with the choices.", "Tap the matching shape."],
    spoken: "Look at the target shape, compare the choices, then tap the matching shape."
  }
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LETTER_FIND_LEVELS = [
  { choiceCount: 3, label: "Warm-up", reward: "⭐" },
  { choiceCount: 3, label: "Warm-up", reward: "⭐" },
  { choiceCount: 3, label: "Warm-up", reward: "⭐" },
  { choiceCount: 4, label: "Explorer", reward: "⭐ ⭐" },
  { choiceCount: 4, label: "Explorer", reward: "⭐ ⭐" },
  { choiceCount: 4, label: "Explorer", reward: "⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" }
];

const PLANT_FOOD_POOL = [
  { name: "Mango", spokenName: "mango", image: "./assets/discovery/plant-foods/mango.jpg", category: "Fruit", difficulty: 1 },
  { name: "Banana", spokenName: "banana", image: "./assets/discovery/plant-foods/banana-photo.jpg", category: "Fruit", difficulty: 1 },
  { name: "Pineapple", spokenName: "pineapple", image: "./assets/discovery/plant-foods/pineapple.jpg", category: "Fruit", difficulty: 1 },
  { name: "Carrot", spokenName: "carrot", image: "./assets/discovery/plant-foods/carrot.jpg", category: "Vegetable", difficulty: 1 },
  { name: "Broccoli", spokenName: "broccoli", image: "./assets/discovery/plant-foods/broccoli.jpg", category: "Vegetable", difficulty: 1 },
  { name: "Papaya", spokenName: "papaya", image: "./assets/discovery/plant-foods/papaya.jpg", category: "Fruit", difficulty: 2 },
  { name: "Guava", spokenName: "guava", image: "./assets/discovery/plant-foods/guava.jpg", category: "Fruit", difficulty: 2 },
  { name: "Coconut", spokenName: "coconut", image: "./assets/discovery/plant-foods/coconut.jpg", category: "Fruit", difficulty: 2 },
  { name: "Eggplant", spokenName: "eggplant", image: "./assets/discovery/plant-foods/eggplant.jpg", category: "Vegetable", difficulty: 2, culinaryGroup: true },
  { name: "Squash", spokenName: "squash", image: "./assets/discovery/plant-foods/squash.jpg", category: "Vegetable", difficulty: 2, culinaryGroup: true },
  { name: "Cucumber", spokenName: "cucumber", image: "./assets/discovery/plant-foods/cucumber.jpg", category: "Vegetable", difficulty: 2, culinaryGroup: true },
  { name: "Chico", spokenName: "chico", image: "./assets/discovery/plant-foods/chico.jpg", category: "Fruit", difficulty: 3 },
  { name: "Calamansi", spokenName: "calamansi", image: "./assets/discovery/plant-foods/calamansi.jpg", category: "Fruit", difficulty: 3 },
  { name: "Lanzones", spokenName: "lanzones", image: "./assets/discovery/plant-foods/lanzones.jpg", category: "Fruit", difficulty: 3 },
  { name: "Jackfruit", spokenName: "jackfruit", image: "./assets/discovery/plant-foods/jackfruit.jpg", category: "Fruit", difficulty: 3 },
  { name: "Ampalaya", spokenName: "ampalaya, or bitter melon", image: "./assets/discovery/plant-foods/ampalaya.jpg", category: "Vegetable", difficulty: 3, culinaryGroup: true },
  { name: "Malunggay", spokenName: "malunggay", image: "./assets/discovery/plant-foods/malunggay.jpg", category: "Vegetable", difficulty: 3 },
  { name: "Patola", spokenName: "patola", image: "./assets/discovery/plant-foods/patola.jpg", category: "Vegetable", difficulty: 3, culinaryGroup: true },
  { name: "Kangkong", spokenName: "kangkong", image: "./assets/discovery/plant-foods/kangkong.jpg", category: "Vegetable", difficulty: 3 },
  { name: "String Beans", spokenName: "string beans", image: "./assets/discovery/plant-foods/string-beans.jpg", category: "Vegetable", difficulty: 3, culinaryGroup: true }
];

function buildPlantFoodRounds() {
  const choose = (difficulty, category, count) =>
    shuffle(PLANT_FOOD_POOL.filter((food) => food.difficulty === difficulty && food.category === category)).slice(0, count);

  const foods = [
    ...shuffle([...choose(1, "Fruit", 2), ...choose(1, "Vegetable", 1)]),
    ...shuffle([...choose(2, "Fruit", 2), ...choose(2, "Vegetable", 2)]),
    ...shuffle([...choose(3, "Fruit", 1), ...choose(3, "Vegetable", 2)])
  ];

  return foods.map((food, index) => {
    const difficultyLabel = index < 3 ? "Warm-up" : index < 7 ? "Explorer" : "Super Search";
    const correctFeedback = food.culinaryGroup
      ? `Yes! We usually call ${food.name} a vegetable when we eat or cook it. ⭐`
      : `Yes! ${food.name} is a ${food.category.toLowerCase()}! ⭐`;
    const correctSpeak = food.culinaryGroup
      ? `Yes. We usually call ${food.spokenName} a vegetable when we eat or cook it.`
      : `Yes! ${food.spokenName} is a ${food.category.toLowerCase()}!`;

    return {
      prompt: `Is ${food.name} a fruit or a vegetable?`,
      stage: "",
      choices: shuffle(["Fruit", "Vegetable"]),
      answer: food.category,
      speak: `Is ${food.spokenName} a fruit or a vegetable?`,
      difficultyLabel,
      choiceCount: 2,
      plantFoodRound: true,
      foodName: food.name,
      foodSpokenName: food.spokenName,
      foodImage: food.image,
      correctFeedback,
      correctSpeak
    };
  });
}

const LETTER_SOUND_CUES = {
  A: "A. ah. ah.",
  B: "B. buh. buh.",
  C: "C. kuh. kuh.",
  D: "D. duh. duh.",
  E: "E. eh. eh.",
  F: "F. fff. fff.",
  G: "G. guh. guh.",
  H: "H. huh. huh.",
  I: "I. ih. ih.",
  J: "J. juh. juh.",
  K: "K. kuh. kuh.",
  L: "L. lll. lll.",
  M: "M. mmm. mmm.",
  N: "N. nnn. nnn.",
  O: "O. o. o.",
  P: "P. puh. puh.",
  Q: "Q. kwuh. kwuh.",
  R: "R. rrr. rrr.",
  S: "S. sss. sss.",
  T: "T. tuh. tuh.",
  U: "U. uh. uh.",
  V: "V. vvv. vvv.",
  W: "W. wuh. wuh.",
  X: "X. ks. ks.",
  Y: "Y. yuh. yuh.",
  Z: "Zed. zzz. zzz."
};

const BUILD_WORD_POOL = [
  { word: "Cat", emoji: "🐱" },
  { word: "Dog", emoji: "🐶" },
  { word: "Sun", emoji: "☀️" },
  { word: "Hat", emoji: "🎩" },
  { word: "Pig", emoji: "🐷" },
  { word: "Van", emoji: "🚐" },
  { word: "Fish", emoji: "🐟" },
  { word: "Goat", emoji: "🐐" },
  { word: "Kite", emoji: "🪁" },
  { word: "Lion", emoji: "🦁" },
  { word: "Moon", emoji: "🌙" },
  { word: "Nest", emoji: "🪺" },
  { word: "Apple", emoji: "🍎" },
  { word: "Queen", emoji: "👑" },
  { word: "Tiger", emoji: "🐯" },
  { word: "Whale", emoji: "🐋" },
  { word: "Zebra", emoji: "🦓" },
  { word: "Rabbit", emoji: "🐰" },
  { word: "Orange", emoji: "🍊" },
  { word: "Banana", emoji: "🍌" },
  { word: "Flower", emoji: "🌼" },
  { word: "Rocket", emoji: "🚀" },
  { word: "Turtle", emoji: "🐢" },
  { word: "Planet", emoji: "🪐" },
  { word: "Rainbow", emoji: "🌈" }
];

const RHYME_ITEMS = [
  { word: "Cat", emoji: "🐱", rhyme: "Hat" },
  { word: "Dog", emoji: "🐶", rhyme: "Frog" },
  { word: "Sun", emoji: "☀️", rhyme: "Fun" },
  { word: "Bee", emoji: "🐝", rhyme: "Tree" },
  { word: "Star", emoji: "⭐", rhyme: "Car" },
  { word: "Cake", emoji: "🎂", rhyme: "Snake" },
  { word: "Moon", emoji: "🌙", rhyme: "Spoon" },
  { word: "Fox", emoji: "🦊", rhyme: "Box" },
  { word: "Light", emoji: "💡", rhyme: "Kite" },
  { word: "Bear", emoji: "🐻", rhyme: "Chair" },
  { word: "Boat", emoji: "⛵", rhyme: "Goat" },
  { word: "Ring", emoji: "💍", rhyme: "King" },
  { word: "Mouse", emoji: "🐭", rhyme: "House" },
  { word: "Duck", emoji: "🦆", rhyme: "Truck" },
  { word: "Snail", emoji: "🐌", rhyme: "Whale" }
];

const RHYME_DISTRACTORS = ["Dog","Sun","Fish","Moon","Pig","Ball","Nest","Lion","Van","Apple","Tiger","Rabbit","Queen","Star","Boat","Cake","Mouse","Duck","Bee","Fox"];


const START_WORD_POOL = {
  A: [
    { word: "Apple", emoji: "🍎" }, { word: "Ant", emoji: "🐜" }, { word: "Arrow", emoji: "➡️" }, { word: "Axe", emoji: "🪓" },
    { word: "Angel", emoji: "😇" }, { word: "Anchor", emoji: "⚓" }, { word: "Avocado", emoji: "🥑" }, { word: "Airplane", emoji: "✈️" }
  ],
  B: [
    { word: "Ball", emoji: "⚽" }, { word: "Bear", emoji: "🐻" }, { word: "Bee", emoji: "🐝" }, { word: "Boat", emoji: "⛵" },
    { word: "Book", emoji: "📘" }, { word: "Bus", emoji: "🚌" }, { word: "Banana", emoji: "🍌" }, { word: "Butterfly", emoji: "🦋" }
  ],
  C: [
    { word: "Cat", emoji: "🐱" }, { word: "Car", emoji: "🚗" }, { word: "Cake", emoji: "🎂" }, { word: "Cow", emoji: "🐄" },
    { word: "Cup", emoji: "🥤" }, { word: "Cookie", emoji: "🍪" }, { word: "Crown", emoji: "👑" }, { word: "Cloud", emoji: "☁️" }
  ],
  D: [
    { word: "Dog", emoji: "🐶" }, { word: "Duck", emoji: "🦆" }, { word: "Door", emoji: "🚪" }, { word: "Drum", emoji: "🥁" },
    { word: "Dolphin", emoji: "🐬" }, { word: "Donut", emoji: "🍩" }, { word: "Dragon", emoji: "🐉" }, { word: "Dice", emoji: "🎲" }
  ],
  E: [
    { word: "Egg", emoji: "🥚" }, { word: "Elephant", emoji: "🐘" }, { word: "Ear", emoji: "👂" }, { word: "Eye", emoji: "👁️" },
    { word: "Eagle", emoji: "🦅" }, { word: "Earth", emoji: "🌍" }, { word: "Envelope", emoji: "✉️" }, { word: "Elf", emoji: "🧝" }
  ],
  F: [
    { word: "Fish", emoji: "🐟" }, { word: "Frog", emoji: "🐸" }, { word: "Flower", emoji: "🌼" }, { word: "Fox", emoji: "🦊" },
    { word: "Fire", emoji: "🔥" }, { word: "Flag", emoji: "🚩" }, { word: "Foot", emoji: "🦶" }, { word: "Fries", emoji: "🍟" }
  ],
  G: [
    { word: "Goat", emoji: "🐐" }, { word: "Grapes", emoji: "🍇" }, { word: "Gift", emoji: "🎁" }, { word: "Ghost", emoji: "👻" },
    { word: "Glove", emoji: "🧤" }, { word: "Guitar", emoji: "🎸" }, { word: "Gorilla", emoji: "🦍" }, { word: "Game", emoji: "🎮" }
  ],
  H: [
    { word: "Hat", emoji: "🎩" }, { word: "House", emoji: "🏠" }, { word: "Horse", emoji: "🐴" }, { word: "Heart", emoji: "❤️" },
    { word: "Hammer", emoji: "🔨" }, { word: "Hamburger", emoji: "🍔" }, { word: "Helicopter", emoji: "🚁" }, { word: "Honey", emoji: "🍯" }
  ],
  I: [
    { word: "Ice", emoji: "🧊" }, { word: "Igloo", emoji: "🧊" }, { word: "Island", emoji: "🏝️" }, { word: "Insect", emoji: "🐞" },
    { word: "Icecream", emoji: "🍦" }, { word: "Ink", emoji: "🖋️" }, { word: "Iron", emoji: "♨️" }, { word: "Iguana", emoji: "🦎" }
  ],
  J: [
    { word: "Jar", emoji: "🫙" }, { word: "Jaguar", emoji: "🐆" }, { word: "Jackfruit", emoji: "🍈" }, { word: "Jacket", emoji: "🧥" },
    { word: "Jam", emoji: "🍓" }, { word: "Juice", emoji: "🧃" }, { word: "Jet", emoji: "✈️" }, { word: "Jeepney", emoji: "🚌" },
    { word: "Jeep", emoji: "🚙" }, { word: "Jelly", emoji: "🍮" }, { word: "Jellyfish", emoji: "🪼" }, { word: "Jigsaw", emoji: "🧩" },
    { word: "Joker", emoji: "🃏" }, { word: "Joystick", emoji: "🕹️" }, { word: "Jumper", emoji: "👕" }, { word: "Jungle", emoji: "🌴" },
    { word: "Jewel", emoji: "💎" }, { word: "Jug", emoji: "🏺" }, { word: "Judo", emoji: "🥋" }, { word: "Journal", emoji: "📔" }
  ],
  K: [
    { word: "Kite", emoji: "🪁" }, { word: "Key", emoji: "🔑" }, { word: "King", emoji: "🤴" }, { word: "Koala", emoji: "🐨" },
    { word: "Kiwi", emoji: "🥝" }, { word: "Kitten", emoji: "🐱" }, { word: "Kangaroo", emoji: "🦘" }, { word: "Keyboard", emoji: "⌨️" }
  ],
  L: [
    { word: "Lion", emoji: "🦁" }, { word: "Leaf", emoji: "🍃" }, { word: "Lamp", emoji: "💡" }, { word: "Lemon", emoji: "🍋" },
    { word: "Ladybug", emoji: "🐞" }, { word: "Lollipop", emoji: "🍭" }, { word: "Lock", emoji: "🔒" }, { word: "Ladder", emoji: "🪜" }
  ],
  M: [
    { word: "Moon", emoji: "🌙" }, { word: "Mouse", emoji: "🐭" }, { word: "Monkey", emoji: "🐒" }, { word: "Milk", emoji: "🥛" },
    { word: "Mango", emoji: "🥭" }, { word: "Map", emoji: "🗺️" }, { word: "Medal", emoji: "🏅" }, { word: "Mushroom", emoji: "🍄" }
  ],
  N: [
    { word: "Nest", emoji: "🪺" }, { word: "Nose", emoji: "👃" }, { word: "Nail", emoji: "🔩" }, { word: "Net", emoji: "🥅" },
    { word: "Notebook", emoji: "📓" }, { word: "Nurse", emoji: "🧑‍⚕️" }, { word: "Noodle", emoji: "🍜" }, { word: "Nut", emoji: "🥜" }
  ],
  O: [
    { word: "Orange", emoji: "🍊" }, { word: "Owl", emoji: "🦉" }, { word: "Octopus", emoji: "🐙" }, { word: "Onion", emoji: "🧅" },
    { word: "Ocean", emoji: "🌊" }, { word: "Otter", emoji: "🦦" }, { word: "Ox", emoji: "🐂" }, { word: "Oyster", emoji: "🦪" }
  ],
  P: [
    { word: "Pig", emoji: "🐷" }, { word: "Pen", emoji: "🖊️" }, { word: "Pizza", emoji: "🍕" }, { word: "Panda", emoji: "🐼" },
    { word: "Pear", emoji: "🍐" }, { word: "Plane", emoji: "✈️" }, { word: "Penguin", emoji: "🐧" }, { word: "Present", emoji: "🎁" }
  ],
  Q: [
    { word: "Queen", emoji: "👑" }, { word: "Quail", emoji: "🐦" }, { word: "Quilt", emoji: "🛏️" }, { word: "Quarter", emoji: "🪙" },
    { word: "Question", emoji: "❓" }, { word: "Queue", emoji: "🧍" }, { word: "Quack", emoji: "🦆" }, { word: "Quiet", emoji: "🤫" }
  ],
  R: [
    { word: "Rabbit", emoji: "🐰" }, { word: "Rain", emoji: "🌧️" }, { word: "Rainbow", emoji: "🌈" }, { word: "Rocket", emoji: "🚀" },
    { word: "Robot", emoji: "🤖" }, { word: "Ring", emoji: "💍" }, { word: "Rose", emoji: "🌹" }, { word: "Radio", emoji: "📻" }
  ],
  S: [
    { word: "Sun", emoji: "☀️" }, { word: "Star", emoji: "⭐" }, { word: "Snake", emoji: "🐍" }, { word: "Sock", emoji: "🧦" },
    { word: "Spoon", emoji: "🥄" }, { word: "Sheep", emoji: "🐑" }, { word: "Strawberry", emoji: "🍓" }, { word: "Snowman", emoji: "⛄" }
  ],
  T: [
    { word: "Tiger", emoji: "🐯" }, { word: "Tree", emoji: "🌳" }, { word: "Train", emoji: "🚆" }, { word: "Turtle", emoji: "🐢" },
    { word: "Tomato", emoji: "🍅" }, { word: "Tent", emoji: "⛺" }, { word: "Truck", emoji: "🚚" }, { word: "Tooth", emoji: "🦷" }
  ],
  U: [
    { word: "Umbrella", emoji: "☂️" }, { word: "Unicorn", emoji: "🦄" }, { word: "Uniform", emoji: "👕" }, { word: "Up", emoji: "⬆️" },
    { word: "UFO", emoji: "🛸" }, { word: "Ukulele", emoji: "🎸" }, { word: "Urchin", emoji: "🦔" }, { word: "Utensil", emoji: "🍴" }
  ],
  V: [
    { word: "Van", emoji: "🚐" }, { word: "Violin", emoji: "🎻" }, { word: "Volcano", emoji: "🌋" }, { word: "Vase", emoji: "🏺" },
    { word: "Vest", emoji: "🦺" }, { word: "Vegetable", emoji: "🥦" }, { word: "Video", emoji: "📹" }, { word: "Village", emoji: "🏘️" }
  ],
  W: [
    { word: "Whale", emoji: "🐋" }, { word: "Watch", emoji: "⌚" }, { word: "Watermelon", emoji: "🍉" }, { word: "Window", emoji: "🪟" },
    { word: "Wolf", emoji: "🐺" }, { word: "Worm", emoji: "🪱" }, { word: "Wheel", emoji: "🛞" }, { word: "Water", emoji: "💧" }
  ],
  X: [
    { word: "Xylophone", emoji: "🎵" }, { word: "Xray", emoji: "🩻" }, { word: "Xerus", emoji: "🐿️" }, { word: "Xenops", emoji: "🐦" }
  ],
  Y: [
    { word: "Yoyo", emoji: "🪀" }, { word: "Yak", emoji: "🐂" }, { word: "Yarn", emoji: "🧶" }, { word: "Yacht", emoji: "⛵" },
    { word: "Yam", emoji: "🍠" }, { word: "Yolk", emoji: "🍳" }, { word: "Yellow", emoji: "🟡" }, { word: "Yogurt", emoji: "🥣" }
  ],
  Z: [
    { word: "Zebra", emoji: "🦓" }, { word: "Zoo", emoji: "🦁" }, { word: "Zero", emoji: "0️⃣" }, { word: "Zipper", emoji: "🤐" },
    { word: "Zucchini", emoji: "🥒" }, { word: "Zigzag", emoji: "〰️" }, { word: "Zombie", emoji: "🧟" }, { word: "Zebu", emoji: "🐂" }
  ]
};

const START_WORD_ROUND_OPTIONS = [5, 10, 15, 20];
const SOUND_HUNT_ROUND_OPTIONS = [5, 10, 15, 20];

function getSoundHuntChoiceCount(roundIndex, totalRounds) {
  return (roundIndex + 1) / totalRounds <= 0.5 ? 5 : 6;
}

function getSoundHuntCorrectCount(roundIndex, totalRounds) {
  return (roundIndex + 1) / totalRounds <= 0.45 ? 2 : 3;
}

function buildSoundHuntRounds(letter, totalRounds) {
  const correctPool = START_WORD_POOL[letter] || [];
  if (!correctPool.length) return [];

  const distractorPool = Object.entries(START_WORD_POOL)
    .filter(([candidateLetter]) => candidateLetter !== letter)
    .flatMap(([candidateLetter, items]) => items.map((item) => ({ ...item, letter: candidateLetter })));
  let previousSignature = "";

  return Array.from({ length: totalRounds }, (_, roundIndex) => {
    const choiceCount = getSoundHuntChoiceCount(roundIndex, totalRounds);
    const uniqueCorrectPool = [];
    const seenCorrectEmojis = new Set();
    for (const item of shuffle(correctPool)) {
      if (seenCorrectEmojis.has(item.emoji)) continue;
      uniqueCorrectPool.push(item);
      seenCorrectEmojis.add(item.emoji);
    }
    const requestedCorrectCount = Math.min(getSoundHuntCorrectCount(roundIndex, totalRounds), uniqueCorrectPool.length);

    let selectedCorrect = [];
    let attempts = 0;
    do {
      selectedCorrect = shuffle(uniqueCorrectPool).slice(0, requestedCorrectCount);
      attempts += 1;
    } while (
      selectedCorrect.map((item) => item.word).sort().join("|") === previousSignature &&
      attempts < 12 &&
      uniqueCorrectPool.length > requestedCorrectCount
    );

    previousSignature = selectedCorrect.map((item) => item.word).sort().join("|");
    const usedWords = new Set(selectedCorrect.map((item) => item.word.toLowerCase()));
    const usedEmojis = new Set(selectedCorrect.map((item) => item.emoji));
    const distractors = [];

    for (const candidate of shuffle(distractorPool)) {
      if (distractors.length >= choiceCount - selectedCorrect.length) break;
      const wordKey = candidate.word.toLowerCase();
      if (usedWords.has(wordKey) || usedEmojis.has(candidate.emoji)) continue;
      distractors.push(candidate);
      usedWords.add(wordKey);
      usedEmojis.add(candidate.emoji);
    }

    const choices = shuffle([
      ...selectedCorrect.map((item) => ({ ...item, isCorrect: true, letter })),
      ...distractors.map((item) => ({ ...item, isCorrect: false }))
    ]);

    return {
      prompt: `Find all the pictures that start with ${letter}.`,
      stage: letter,
      choices,
      answer: letter,
      speak: `Find all the pictures that start with ${letter}. ${LETTER_SOUND_CUES[letter] || letter}`,
      difficultyLabel: roundIndex < Math.ceil(totalRounds * 0.5) ? "Sound Scout" : "Super Listener",
      choiceCount: choices.length,
      alphabetRound: true,
      soundHuntRound: true,
      targetLetter: letter,
      correctCount: selectedCorrect.length
    };
  });
}


function getSoundMatchLayout(roundIndex) {
  if (roundIndex < 3) return { pictureCount: 3, letterCount: 3, label: "Warm-up" };
  if (roundIndex < 6) return { pictureCount: 4, letterCount: 4, label: "Sound Matcher" };
  return { pictureCount: 5, letterCount: 4, label: "Super Matcher" };
}

function buildSoundMatchRounds() {
  const eligible = Object.entries(START_WORD_POOL).filter(([, items]) => Array.isArray(items) && items.length >= 2);

  return Array.from({ length: 10 }, (_, roundIndex) => {
    const layout = getSoundMatchLayout(roundIndex);
    const selectedEntries = shuffle(eligible).slice(0, layout.letterCount);
    const letters = selectedEntries.map(([letter]) => letter);
    const pictures = [];
    const usedWords = new Set();
    const usedEmojis = new Set();

    selectedEntries.forEach(([letter, items]) => {
      const candidate = shuffle(items).find((item) =>
        !usedWords.has(item.word.toLowerCase()) && !usedEmojis.has(item.emoji)
      ) || shuffle(items)[0];

      if (candidate) {
        pictures.push({ ...candidate, letter });
        usedWords.add(candidate.word.toLowerCase());
        usedEmojis.add(candidate.emoji);
      }
    });

    if (layout.pictureCount > layout.letterCount) {
      for (const [letter, items] of shuffle(selectedEntries)) {
        if (pictures.length >= layout.pictureCount) break;
        const candidate = shuffle(items).find((item) =>
          !usedWords.has(item.word.toLowerCase()) && !usedEmojis.has(item.emoji)
        );
        if (candidate) {
          pictures.push({ ...candidate, letter });
          usedWords.add(candidate.word.toLowerCase());
          usedEmojis.add(candidate.emoji);
        }
      }
    }

    return {
      prompt: "Match each picture to its beginning sound.",
      stage: "",
      choices: [],
      answer: "",
      speak: "Tap a picture to hear its name. Then tap the letter that begins that word.",
      difficultyLabel: layout.label,
      choiceCount: letters.length,
      soundMatchRound: true,
      soundMatchPictures: shuffle(pictures.slice(0, layout.pictureCount)),
      soundMatchLetters: shuffle(letters)
    };
  });
}

function getStartWordChoiceCount(roundIndex, totalRounds) {
  const progress = (roundIndex + 1) / totalRounds;
  if (progress <= 0.3) return 3;
  if (progress <= 0.65) return 4;
  return 5;
}

function getStartWordDifficulty(roundIndex, totalRounds) {
  const progress = (roundIndex + 1) / totalRounds;
  if (progress <= 0.3) return "Warm-up";
  if (progress <= 0.65) return "Explorer";
  return "Super Search";
}

function buildStartWordRounds(letter, totalRounds) {
  const source = START_WORD_POOL[letter] || [];
  if (!source.length) return [];

  const selected = [];
  let previousWord = "";

  while (selected.length < totalRounds) {
    const cycle = shuffle(source).filter((item, index, items) => {
      if (selected.length === 0 || index !== 0) return true;
      return item.word !== previousWord || items.length === 1;
    });
    for (const item of cycle) {
      if (selected.length >= totalRounds) break;
      if (item.word === previousWord && source.length > 1) continue;
      selected.push(item);
      previousWord = item.word;
    }
  }

  return selected.map((target, index) => {
    const choiceCount = getStartWordChoiceCount(index, totalRounds);
    const distractors = shuffle(ALPHABET.filter((candidate) => candidate !== letter)).slice(0, choiceCount - 1);
    return {
      prompt: `What letter starts ${target.word}?`,
      stage: target.emoji,
      choices: shuffle([letter, ...distractors]),
      answer: letter,
      speak: `Look at the picture. ${target.word}. What letter starts ${target.word}?`,
      difficultyLabel: getStartWordDifficulty(index, totalRounds),
      choiceCount,
      rewardLabel: "⭐",
      alphabetRound: true,
      startWordRound: true,
      spokenWord: target.word,
      word: target.word,
      incompleteWord: "_" + target.word.slice(1).toUpperCase()
    };
  });
}


const COUNTING_OBJECTS = [
  { emoji: "⭐", singular: "star", plural: "stars" },
  { emoji: "🍎", singular: "apple", plural: "apples" },
  { emoji: "🦆", singular: "duck", plural: "ducks" },
  { emoji: "🐟", singular: "fish", plural: "fish" },
  { emoji: "🌼", singular: "flower", plural: "flowers" },
  { emoji: "🎈", singular: "balloon", plural: "balloons" },
  { emoji: "🐞", singular: "ladybug", plural: "ladybugs" },
  { emoji: "🍓", singular: "strawberry", plural: "strawberries" },
  { emoji: "🐸", singular: "frog", plural: "frogs" },
  { emoji: "🚗", singular: "car", plural: "cars" },
  { emoji: "🦋", singular: "butterfly", plural: "butterflies" },
  { emoji: "🍪", singular: "cookie", plural: "cookies" }
];

const NUMBER_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
  "Twenty-one", "Twenty-two", "Twenty-three", "Twenty-four", "Twenty-five", "Twenty-six", "Twenty-seven", "Twenty-eight", "Twenty-nine", "Thirty"
];

const FIRST_SOUND_WORDS = [
  { letter: "A", word: "Apple", emoji: "🍎" },
  { letter: "B", word: "Ball", emoji: "⚽" },
  { letter: "C", word: "Cat", emoji: "🐱" },
  { letter: "D", word: "Dog", emoji: "🐶" },
  { letter: "E", word: "Egg", emoji: "🥚" },
  { letter: "F", word: "Fish", emoji: "🐟" },
  { letter: "G", word: "Goat", emoji: "🐐" },
  { letter: "H", word: "Hat", emoji: "🎩" },
  { letter: "I", word: "Ice cream", emoji: "🍦" },
  { letter: "J", word: "Jam", emoji: "🍓" },
  { letter: "K", word: "Kite", emoji: "🪁" },
  { letter: "L", word: "Lion", emoji: "🦁" },
  { letter: "M", word: "Moon", emoji: "🌙" },
  { letter: "N", word: "Nest", emoji: "🪺" },
  { letter: "O", word: "Orange", emoji: "🍊" },
  { letter: "P", word: "Pig", emoji: "🐷" },
  { letter: "Q", word: "Queen", emoji: "👑" },
  { letter: "R", word: "Rabbit", emoji: "🐰" },
  { letter: "S", word: "Sun", emoji: "☀️" },
  { letter: "T", word: "Tiger", emoji: "🐯" },
  { letter: "U", word: "Umbrella", emoji: "☂️" },
  { letter: "V", word: "Van", emoji: "🚐" },
  { letter: "W", word: "Whale", emoji: "🐋" },
  { letter: "X", word: "Xylophone", emoji: "🎵" },
  { letter: "Y", word: "Yo-yo", emoji: "🪀" },
  { letter: "Z", word: "Zebra", emoji: "🦓" }
];

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildCountingChoices(answer, choiceCount) {
  const nearOffsets = shuffle([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]);
  const distractors = [];

  nearOffsets.forEach((offset) => {
    const candidate = answer + offset;
    if (candidate >= 1 && candidate <= 10 && candidate !== answer && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
  });

  if (distractors.length < choiceCount - 1) {
    shuffle(Array.from({ length: 10 }, (_, index) => index + 1))
      .filter((candidate) => candidate !== answer && !distractors.includes(candidate))
      .forEach((candidate) => distractors.push(candidate));
  }

  return shuffle([answer, ...distractors.slice(0, choiceCount - 1)]).map(String);
}

function buildCountStarsRounds() {
  const usedCombinations = new Set();
  const firstRoundObjects = shuffle(COUNTING_OBJECTS.filter((item) => item.emoji !== "⭐"));
  let previousObject = null;

  return LETTER_FIND_LEVELS.map((level, index) => {
    const range = index < 3 ? [1, 4] : index < 6 ? [3, 7] : [5, 10];
    let object;
    let quantity;
    let key;
    let attempts = 0;

    do {
      const basePool = index === 0 ? firstRoundObjects : COUNTING_OBJECTS;
      const objectPool = basePool.filter((item) => item.emoji !== previousObject);
      object = shuffle(objectPool.length ? objectPool : basePool)[0];
      quantity = range[0] + Math.floor(Math.random() * (range[1] - range[0] + 1));
      key = object.emoji + ":" + quantity;
      attempts += 1;
    } while (usedCombinations.has(key) && attempts < 30);

    usedCombinations.add(key);
    previousObject = object.emoji;

    return {
      prompt: `How many ${object.plural} do you see? Tap each one to count.`,
      stage: object.emoji,
      choices: buildCountingChoices(quantity, level.choiceCount),
      answer: String(quantity),
      speak: `How many ${object.plural} do you see? Tap each one to count.`,
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      countingRound: true,
      quantity,
      objectEmoji: object.emoji,
      objectSingular: object.singular,
      objectPlural: object.plural
    };
  });
}

function buildCountMatchChoices(answer, choiceCount) {
  const offsets = shuffle([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]);
  const distractors = [];

  offsets.forEach((offset) => {
    const candidate = answer + offset;
    if (candidate >= 1 && candidate <= 30 && candidate !== answer && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
  });

  if (distractors.length < choiceCount - 1) {
    shuffle(Array.from({ length: 30 }, (_, index) => index + 1))
      .filter((candidate) => candidate !== answer && !distractors.includes(candidate))
      .forEach((candidate) => distractors.push(candidate));
  }

  return shuffle([answer, ...distractors.slice(0, choiceCount - 1)]).map(String);
}

function buildCountMatchRounds() {
  const quantities = [
    ...shuffle(Array.from({ length: 10 }, (_, index) => index + 1)),
    ...shuffle(Array.from({ length: 10 }, (_, index) => index + 11)),
    ...shuffle(Array.from({ length: 10 }, (_, index) => index + 21))
  ];
  let previousObject = null;

  return quantities.map((quantity, index) => {
    const choiceCount = index < 10 ? 3 : index < 20 ? 4 : 5;
    const difficultyLabel = index < 10 ? "Warm-up" : index < 20 ? "Explorer" : "Super Search";
    const objectPool = COUNTING_OBJECTS.filter((item) => item.emoji !== previousObject);
    const object = shuffle(objectPool.length ? objectPool : COUNTING_OBJECTS)[0];
    previousObject = object.emoji;

    const numericChoices = buildCountMatchChoices(quantity, choiceCount);
    const wordChoices = buildCountMatchChoices(quantity, choiceCount)
      .map((value) => numberWord(Number(value)).toLowerCase());

    return {
      prompt: `Count the ${object.plural}. Which number matches?`,
      stage: object.emoji,
      choices: numericChoices,
      wordChoices,
      answer: String(quantity),
      wordAnswer: numberWord(quantity).toLowerCase(),
      speak: `Count the ${object.plural}. Which number matches?`,
      difficultyLabel,
      choiceCount,
      countMatchRound: true,
      quantity,
      objectEmoji: object.emoji,
      objectSingular: object.singular,
      objectPlural: object.plural
    };
  });
}

function buildCompareRounds() {
  const used = new Set();
  let previousObject = null;

  return LETTER_FIND_LEVELS.map((level, index) => {
    const range = index < 3 ? [1, 4] : index < 6 ? [2, 7] : [4, 10];
    const objectPool = COUNTING_OBJECTS.filter((item) => item.emoji !== previousObject);
    const object = shuffle(objectPool.length ? objectPool : COUNTING_OBJECTS)[0];
    let leftQuantity;
    let rightQuantity;
    let key;
    let attempts = 0;

    do {
      leftQuantity = range[0] + Math.floor(Math.random() * (range[1] - range[0] + 1));
      rightQuantity = range[0] + Math.floor(Math.random() * (range[1] - range[0] + 1));
      key = `${object.emoji}:${leftQuantity}:${rightQuantity}`;
      attempts += 1;
    } while ((leftQuantity === rightQuantity || used.has(key)) && attempts < 40);

    if (leftQuantity === rightQuantity) {
      rightQuantity = leftQuantity === range[1] ? leftQuantity - 1 : leftQuantity + 1;
      key = `${object.emoji}:${leftQuantity}:${rightQuantity}`;
    }

    used.add(key);
    previousObject = object.emoji;

    return {
      prompt: "Which group has more?",
      stage: "",
      choices: ["Left", "Right"],
      answer: leftQuantity > rightQuantity ? "Left" : "Right",
      speak: "Which group has more?",
      difficultyLabel: level.label,
      choiceCount: 2,
      compareRound: true,
      leftQuantity,
      rightQuantity,
      objectEmoji: object.emoji,
      objectPlural: object.plural
    };
  });
}

function buildSequenceChoices(answer, choiceCount) {
  const offsets = shuffle([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]);
  const distractors = [];

  offsets.forEach((offset) => {
    const candidate = answer + offset;
    if (candidate >= 1 && candidate <= 30 && candidate !== answer && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
  });

  if (distractors.length < choiceCount - 1) {
    shuffle(Array.from({ length: 30 }, (_, index) => index + 1))
      .filter((candidate) => candidate !== answer && !distractors.includes(candidate))
      .forEach((candidate) => distractors.push(candidate));
  }

  return shuffle([answer, ...distractors.slice(0, choiceCount - 1)]).map(String);
}

function buildNumberOrderRounds() {
  const candidates = [];
  [2, 3].forEach((shownCount) => {
    for (let answer = shownCount + 1; answer <= 30; answer += 1) {
      const sequence = Array.from({ length: shownCount }, (_, offset) => answer - shownCount + offset);
      candidates.push({ answer, sequence });
    }
  });

  const ordered = shuffle(candidates).slice(0, LETTER_FIND_LEVELS.length);

  return LETTER_FIND_LEVELS.map((level, index) => {
    const item = ordered[index] || shuffle(candidates)[0];
    const spokenSequence = item.sequence.map((value) => numberWord(value).toLowerCase()).join(", ");

    return {
      prompt: "What number comes next?",
      stage: item.sequence.join(" "),
      choices: buildSequenceChoices(item.answer, level.choiceCount),
      answer: String(item.answer),
      speak: `What number comes next? ${spokenSequence}.`,
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      numberSequenceRound: true,
      sequenceNumbers: item.sequence
    };
  });
}

function buildLetterFindRounds() {
  const targets = shuffle(ALPHABET).slice(0, LETTER_FIND_LEVELS.length);

  return LETTER_FIND_LEVELS.map((level, index) => {
    const answer = targets[index];
    const distractors = shuffle(ALPHABET.filter((letter) => letter !== answer))
      .slice(0, level.choiceCount - 1);

    return {
      prompt: `Can you find the letter ${answer}?`,
      stage: answer,
      choices: shuffle([answer, ...distractors]),
      answer,
      speak: `Can you find the letter ${answer}?`,
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true
    };
  });
}

function buildFirstSoundRounds() {
  const targets = shuffle(FIRST_SOUND_WORDS).slice(0, LETTER_FIND_LEVELS.length);

  return LETTER_FIND_LEVELS.map((level, index) => {
    const target = targets[index];
    const distractors = shuffle(ALPHABET.filter((letter) => letter !== target.letter))
      .slice(0, level.choiceCount - 1);

    return {
      prompt: `${target.word} starts with which letter?`,
      stage: target.emoji,
      choices: shuffle([target.letter, ...distractors]),
      answer: target.letter,
      speak: `${target.word} starts with which letter?`,
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true,
      phonicsRound: true,
      letterSoundRound: true,
      word: target.word,
      spelling: target.word
    };
  });
}

function buildPictureMatchRounds() {
  const targets = shuffle(FIRST_SOUND_WORDS).slice(0, LETTER_FIND_LEVELS.length);

  return LETTER_FIND_LEVELS.map((level, index) => {
    const target = targets[index];
    const distractors = shuffle(FIRST_SOUND_WORDS.filter((item) => item.word !== target.word))
      .slice(0, level.choiceCount - 1)
      .map((item) => item.word);

    return {
      prompt: "Which word matches this picture? Tap the picture to hear its name.",
      stage: target.emoji,
      choices: shuffle([target.word, ...distractors]),
      answer: target.word,
      speak: "Which word matches this picture? Tap the picture to hear its name.",
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true,
      pictureMatchRound: true,
      spokenWord: target.word,
      word: target.word,
      letter: target.letter
    };
  });
}

function buildBuildWordRounds() {
  const picked = [];
  return LETTER_FIND_LEVELS.map((level, index) => {
    const pool = BUILD_WORD_POOL.filter((item) => {
      const length = item.word.length;
      if (index < 3) return length >= 3 && length <= 4;
      if (index < 6) return length >= 4 && length <= 5;
      return length >= 5 && length <= 7;
    });
    const available = pool.filter((item) => !picked.some((chosen) => chosen.word === item.word));
    const fallback = BUILD_WORD_POOL.filter((item) => !picked.some((chosen) => chosen.word === item.word));
    const target = shuffle(available.length ? available : fallback)[0];
    picked.push(target);
    const answer = target.word.toUpperCase();
    const letters = answer.split("").map((letter, tileId) => ({ letter, tileId }));
    return {
      prompt: "Build the word. Tap the picture to hear it, then tap the letters in order.",
      stage: target.emoji,
      answer,
      speak: "Build the word. Tap the picture to hear it, then tap the letters in order.",
      difficultyLabel: level.label,
      rewardLabel: level.reward,
      alphabetRound: true,
      buildWordRound: true,
      spokenWord: target.word,
      word: target.word,
      letters: shuffle(letters),
      choiceCount: answer.length
    };
  });
}

function buildRhymeRounds() {
  const targets = shuffle(RHYME_ITEMS).slice(0, LETTER_FIND_LEVELS.length);
  return LETTER_FIND_LEVELS.map((level, index) => {
    const target = targets[index];
    const blocked = new Set([target.word.toLowerCase(), target.rhyme.toLowerCase()]);
    const distractors = shuffle(RHYME_DISTRACTORS.filter((word) => !blocked.has(word.toLowerCase())))
      .slice(0, level.choiceCount - 1);
    return {
      prompt: "Which word rhymes with " + target.word + "? Tap the picture to hear it.",
      stage: target.emoji,
      choices: shuffle([target.rhyme, ...distractors]),
      answer: target.rhyme,
      speak: "Which word rhymes with " + target.word + "?",
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true,
      pictureMatchRound: true,
      rhymeRound: true,
      spokenWord: target.word,
      displayWord: target.word
    };
  });
}

function prepareActivityForPlay(worldId, activityId) {
  const activity = (activities[worldId] || []).find((item) => item.id === activityId);
  if (!activity) return;

  if (activityId === "letter-find") {
    activity.rounds = buildLetterFindRounds();
  }

  if (activityId === "first-sound") {
    activity.rounds = buildFirstSoundRounds();
  }

  if (activityId === "picture-word") {
    activity.rounds = buildPictureMatchRounds();
  }

  if (activityId === "build-word") {
    activity.rounds = buildBuildWordRounds();
  }

  if (activityId === "rhyme-time") {
    activity.rounds = buildRhymeRounds();
  }

  if (activityId === "sound-match") {
    activity.rounds = buildSoundMatchRounds();
  }

  if (activityId === "plant-food-sort") {
    activity.rounds = buildPlantFoodRounds();
  }

  if (activityId === "count-stars") {
    activity.rounds = buildCountStarsRounds();
  }

  if (activityId === "more-or-less") {
    activity.rounds = buildCompareRounds();
  }

  if (activityId === "number-order") {
    activity.rounds = buildNumberOrderRounds();
  }

  if (activityId === "count-match") {
    activity.rounds = buildCountMatchRounds();
  }
}

function startGameSession(worldId, activityId) {
  gameSession = {
    worldId,
    activityId,
    correctAnswers: 0,
    mistakes: 0,
    score: 0
  };
}

function updateSessionScore(delta) {
  if (!gameSession) return;

  if (delta > 0) {
    gameSession.correctAnswers += 1;
  } else if (delta < 0) {
    gameSession.mistakes += 1;
  }

  gameSession.score = Math.max(0, gameSession.correctAnswers - gameSession.mistakes);
}

let progress = loadProgress();
let soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
let blessingVoiceMode = "standard";
let blessingVoiceGender = "neutral";
let blessingVoicePitch = 1.0;
let blessingVoiceRate = 0.90;
let blessingSystemVoiceId = "";
[
  BLESSING_VOICE_KEY,
  BLESSING_GENDER_KEY,
  BLESSING_PITCH_KEY,
  BLESSING_RATE_KEY,
  BLESSING_SYSTEM_VOICE_KEY,
  BLESSING_PROFILE_VERSION_KEY
].forEach((key) => localStorage.removeItem(key));
let currentView = { type: "home" };
let activeGame = null;
let gameSession = null;
let pendingPictureChoice = null;
let pendingFirstSoundChoice = null;
let pendingNumberChoice = null;
let pendingCompareChoice = null;
let pendingCountMatchWordChoice = null;
let startWordSetup = { letter: null, rounds: 10 };
let soundHuntSetup = { letter: null, rounds: 10 };
let instructionSpeechTimer = null;
let instructionSpeechText = "";
let instructionTransitionPending = false;

const screen = document.getElementById("screen");
const starCount = document.getElementById("star-count");
const soundButton = document.getElementById("sound-button");
const celebration = document.getElementById("celebration");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { stars: 0, completed: {} };
  } catch {
    return { stars: 0, completed: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateStarCount();
}

function ensureStoryProgressStore() {
  if (!progress.storyProgress || typeof progress.storyProgress !== "object") {
    progress.storyProgress = {};
  }
  return progress.storyProgress;
}

function getStoryProgress(storyId) {
  const store = ensureStoryProgressStore();
  const current = store[storyId];

  if (!current || typeof current !== "object") {
    return { seenScenes: [], stars: 0, completed: false };
  }

  const story = BIBLE_STORIES.find((item) => item.id === storyId);
  const maxStars = story?.maxStars || 5;
  const seenScenes = Array.isArray(current.seenScenes)
    ? [...new Set(current.seenScenes.filter((index) => Number.isInteger(index) && index >= 0 && index < maxStars))].sort((a, b) => a - b)
    : [];

  return {
    ...current,
    seenScenes,
    stars: Math.min(maxStars, seenScenes.length),
    completed: seenScenes.length >= maxStars
  };
}

function markStorySceneSeen(storyId, sceneIndex) {
  const story = BIBLE_STORIES.find((item) => item.id === storyId);
  if (!story || !Number.isInteger(sceneIndex) || sceneIndex < 0 || sceneIndex >= story.scenes.length) {
    return getStoryProgress(storyId);
  }

  const store = ensureStoryProgressStore();
  const current = getStoryProgress(storyId);

  if (!current.seenScenes.includes(sceneIndex)) {
    current.seenScenes.push(sceneIndex);
    current.seenScenes.sort((a, b) => a - b);
    current.stars = Math.min(story.maxStars || 5, current.seenScenes.length);
    current.completed = current.stars >= (story.maxStars || 5);
    store[storyId] = current;
    progress.stars = (progress.stars || 0) + 1;
    saveProgress();
  } else {
    store[storyId] = current;
  }

  return current;
}

function getStoryStars(storyId) {
  return getStoryProgress(storyId).stars;
}

function isStoryComplete(storyId) {
  return getStoryProgress(storyId).completed;
}

function renderStoryStars(stars, maxStars = 5) {
  return Array.from({ length: maxStars }, (_, index) => index < stars ? "⭐" : "☆").join("");
}

function stopStorySpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function afterCurrentStorySpeech(callback) {
  if (typeof callback !== "function") return;
  if (!soundEnabled || !("speechSynthesis" in window) || !window.speechSynthesis.speaking) {
    callback();
    return;
  }

  const waitUntilDone = () => {
    if (window.speechSynthesis.speaking) {
      window.setTimeout(waitUntilDone, 60);
      return;
    }
    callback();
  };

  waitUntilDone();
}

function updateStarCount() {
  starCount.textContent = progress.stars || 0;
}

let preferredBritishVoice = null;
let preferredSacredVoice = null;

function scoreBritishVoice(voice) {
  const name = (voice.name || "").toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang === "en" || lang.startsWith("en-")) score += 30;
  if (name.includes("natural")) score += 120;
  if (name.includes("neural")) score += 115;
  if (name.includes("enhanced")) score += 105;
  if (name.includes("premium")) score += 100;
  if (name.includes("high quality")) score += 95;
  if (name.includes("google")) score += 25;
  if (name.includes("microsoft")) score += 25;
  if (voice.localService) score += 10;
  if (name.includes("whisper") || name.includes("novelty") || name.includes("compact")) score -= 100;

  return score;
}

const SACRED_DEEP_VOICE_HINTS = [
  "baritone",
  "bass",
  "deep",
  "low",
  "narrator",
  "mature"
];

const SACRED_MALE_VOICE_HINTS = [
  "male",
  "daniel",
  "ryan",
  "george",
  "arthur",
  "james",
  "david",
  "mark",
  "alex",
  "fred",
  "ralph",
  "bruce",
  "oliver",
  "thomas",
  "aaron",
  "guy"
];

const SACRED_FEMALE_VOICE_HINTS = [
  "female",
  "sonia",
  "serena",
  "samantha",
  "victoria",
  "karen",
  "moira",
  "fiona",
  "tessa",
  "ava",
  "susan",
  "zira",
  "hazel",
  "siri female"
];

function hasVoiceHint(name, hints) {
  return hints.some((hint) => name.includes(hint));
}

function scoreSacredVoice(voice) {
  const name = (voice.name || "").toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang === "en-gb") score += 55;
  else if (lang.startsWith("en-gb")) score += 50;
  else if (lang.startsWith("en")) score += 30;

  const clearlyMale = hasVoiceHint(name, SACRED_MALE_VOICE_HINTS);
  const clearlyFemale = hasVoiceHint(name, SACRED_FEMALE_VOICE_HINTS);
  const deepHint = hasVoiceHint(name, SACRED_DEEP_VOICE_HINTS);

  if (deepHint) score += 260;
  if (clearlyMale) score += 220;
  if (clearlyFemale) score -= 500;

  if (name.includes("google uk english male")) score += 180;
  if (name.includes("daniel")) score += 120;
  if (name.includes("george")) score += 115;
  if (name.includes("david")) score += 110;
  if (name.includes("ryan")) score += 105;
  if (name.includes("arthur")) score += 100;
  if (name.includes("james")) score += 95;
  if (name.includes("mark")) score += 90;
  if (name.includes("bruce")) score += 90;
  if (name.includes("ralph")) score += 85;

  if (name.includes("natural")) score += 75;
  if (name.includes("neural")) score += 75;
  if (name.includes("enhanced")) score += 65;
  if (name.includes("premium")) score += 60;
  if (name.includes("microsoft")) score += 30;
  if (name.includes("google")) score += 25;

  if (name.includes("whisper") || name.includes("novelty") || name.includes("compact")) score -= 100;

  return score;
}

function voiceStableId(voice) {
  return [voice.voiceURI || "", voice.name || "", voice.lang || ""].join("::");
}

function getEnglishSystemVoices() {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((voice) => (voice.lang || "").toLowerCase().startsWith("en"))
    .sort((a, b) => {
      const langScore = (voice) => {
        const lang = (voice.lang || "").toLowerCase();
        if (lang === "en-gb") return 3;
        if (lang.startsWith("en-gb")) return 2;
        return 1;
      };
      return langScore(b) - langScore(a) || (a.name || "").localeCompare(b.name || "");
    });
}

function renderBlessingSystemVoiceOptions() {
  const select = document.querySelector("[data-blessing-system-voice]");
  if (!select) return;

  const voices = getEnglishSystemVoices();
  const options = [
    '<option value="">Auto-select deepest male-sounding voice</option>',
    ...voices.map((voice) => {
      const id = voiceStableId(voice);
      const selected = id === blessingSystemVoiceId ? " selected" : "";
      return `<option value="${escapeAttr(id)}"${selected}>${escapeAttr(voice.name || "Unnamed voice")} — ${escapeAttr(voice.lang || "English")}</option>`;
    })
  ];
  select.innerHTML = options.join("");
}

function refreshPreferredBritishVoice() {
  if (!("speechSynthesis" in window)) return;

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;

  const englishVoices = voices.filter((voice) => (voice.lang || "").toLowerCase().startsWith("en"));
  preferredBritishVoice =
    englishVoices
      .slice()
      .sort((a, b) => scoreBritishVoice(b) - scoreBritishVoice(a))[0] || null;
}

if ("speechSynthesis" in window) {
  refreshPreferredBritishVoice();
  window.speechSynthesis.addEventListener?.("voiceschanged", refreshPreferredBritishVoice);
  window.speechSynthesis.onvoiceschanged = refreshPreferredBritishVoice;
}

function speak(text, onDone) {
  if (!soundEnabled || !("speechSynthesis" in window)) {
    if (typeof onDone === "function") onDone();
    return;
  }

  refreshPreferredBritishVoice();
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = preferredBritishVoice?.lang || "en";

  if (preferredBritishVoice) {
    utterance.voice = preferredBritishVoice;
  }

  // Neutral, normal delivery: no accent target, no gender target, no pitch effect.
  utterance.rate = 0.90;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  if (typeof onDone === "function") {
    let finished = false;
    const finishOnce = () => {
      if (finished) return;
      finished = true;
      onDone();
    };
    utterance.onend = finishOnce;
    utterance.onerror = finishOnce;
  }

  window.speechSynthesis.speak(utterance);
}

function speakBlessing(text, onDone) {
  speak(text, onDone);
}

function scoreAdiChildVoice(voice) {
  const name = (voice.name || "").toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang.startsWith("en")) score += 30;
  if (name.includes("child") || name.includes("kid") || name.includes("girl")) score += 500;
  if (["samantha", "zira", "aria", "jenny", "sonia", "ava", "victoria", "karen", "moira", "fiona", "tessa", "susan"].some((hint) => name.includes(hint))) score += 140;
  if (name.includes("natural") || name.includes("neural")) score += 80;
  if (name.includes("enhanced") || name.includes("premium")) score += 60;
  if (["male", "daniel", "george", "david", "ryan", "arthur", "james", "mark", "bruce", "ralph"].some((hint) => name.includes(hint))) score -= 220;

  return score;
}

function getAdiChildVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices().filter((voice) => (voice.lang || "").toLowerCase().startsWith("en"));
  return voices.slice().sort((a, b) => scoreAdiChildVoice(b) - scoreAdiChildVoice(a))[0] || null;
}

function speakAdiGreeting(onDone) {
  if (!soundEnabled || !("speechSynthesis" in window)) {
    if (typeof onDone === "function") onDone();
    return;
  }

  window.speechSynthesis.cancel();
  const voice = getAdiChildVoice();
  const utterance = new SpeechSynthesisUtterance("Hi!");
  utterance.lang = voice?.lang || "en";
  if (voice) utterance.voice = voice;

  // Young-child style for Adi: bright, short and natural.
  // Browser voices vary by device, so the dedicated voice selection plus pitch/rate
  // keeps the greeting consistently child-like without changing the app's normal voice.
  utterance.rate = 0.94;
  utterance.pitch = 1.45;
  utterance.volume = 1.0;

  if (typeof onDone === "function") {
    let finished = false;
    const finishOnce = () => {
      if (finished) return;
      finished = true;
      onDone();
    };
    utterance.onend = finishOnce;
    utterance.onerror = finishOnce;
  }

  window.speechSynthesis.speak(utterance);
}

let adiHomeGreetingTimer = null;

function greetAdiAtHome() {
  const button = document.querySelector("[data-adi-home-character]");
  const image = button?.querySelector("[data-adi-home-image]");
  if (!button || !image) return;

  if (adiHomeGreetingTimer) {
    window.clearTimeout(adiHomeGreetingTimer);
    adiHomeGreetingTimer = null;
  }

  image.src = ADI_HOME_HI_IMAGE;
  button.classList.add("is-waving");
  button.setAttribute("aria-label", "Adi is waving and saying hi");

  const returnToIdle = () => {
    adiHomeGreetingTimer = window.setTimeout(() => {
      if (!document.body.contains(image)) return;
      image.src = ADI_HOME_IDLE_IMAGE;
      button.classList.remove("is-waving");
      button.setAttribute("aria-label", "Tap Adi to say hi");
      adiHomeGreetingTimer = null;
    }, 850);
  };

  speakAdiGreeting(returnToIdle);

  if (!soundEnabled || !("speechSynthesis" in window)) {
    returnToIdle();
  }
}

function renderBlessingVoiceSelector() {
  return "";
}
function runAfterInstructionSpeech(callback) {
  if (typeof callback !== "function" || instructionTransitionPending) return;

  instructionTransitionPending = true;
  const finish = () => {
    instructionTransitionPending = false;
    instructionSpeechText = "";
    callback();
  };

  if (!soundEnabled || !("speechSynthesis" in window)) {
    if (instructionSpeechTimer) {
      window.clearTimeout(instructionSpeechTimer);
      instructionSpeechTimer = null;
    }
    finish();
    return;
  }

  if (instructionSpeechTimer) {
    window.clearTimeout(instructionSpeechTimer);
    instructionSpeechTimer = null;
    const text = instructionSpeechText;
    if (text) {
      speak(text, finish);
      return;
    }
  }

  const waitUntilDone = () => {
    if (window.speechSynthesis.speaking) {
      window.setTimeout(waitUntilDone, 60);
      return;
    }
    finish();
  };

  waitUntilDone();
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.nav === name);
  });
}

function worldCard(world) {
  const cssClass = ["home", "word", "number", "puzzle", "discovery", "blessing"].includes(world.id) ? world.id : "";
  const stateClass = world.status === "open" ? "is-open" : "is-locked";
  return `
    <button class="world-card ${cssClass} ${stateClass}" type="button" data-world="${world.id}" aria-label="${world.name}">
      <span class="status">${world.status === "open" ? "PLAY" : "SOON"}</span>
      <span class="world-icon" aria-hidden="true">${world.icon}</span>
      <strong>${world.name}</strong>
      <small>${world.note}</small>
    </button>`;
}

function renderHome() {
  currentView = { type: "home" };
  setActiveNav("home");
  const openWorlds = worlds.filter((world) => world.status === "open");
  screen.innerHTML = `
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-grid">
        <div>
          <h1 id="home-title">Hi! I’m Adi 👋</h1>
          <p>Come explore, play, and learn with me. Pick an adventure and let’s go!</p>
          <div class="hero-actions">
            <button class="primary-button" type="button" data-action="start-learning">Start learning</button>
            <button class="secondary-button" type="button" data-action="show-progress">My stars</button>
          </div>
        </div>
        <div class="adi-bubble" aria-hidden="true">👧🏻</div>
      </div>
    </section>

    <section class="section" aria-labelledby="continue-heading">
      <div class="section-heading">
        <div>
          <h2 id="continue-heading">Choose an adventure</h2>
          <p>${openWorlds.length} worlds are ready to explore.</p>
        </div>
        <button class="text-button" type="button" data-action="show-worlds">See all</button>
      </div>
      <div class="world-grid">
        ${openWorlds.map(worldCard).join("")}
      </div>
    </section>

    <section class="section" aria-labelledby="coming-heading">
      <div class="section-heading">
        <div>
          <h2 id="coming-heading">More worlds are growing</h2>
          <p>New adventures will arrive step by step.</p>
        </div>
      </div>
      <div class="world-grid">
        ${worlds.filter((world) => world.status !== "open").slice(0, 4).map(worldCard).join("")}
      </div>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function renderWorlds() {
  currentView = { type: "worlds" };
  setActiveNav("worlds");
  screen.innerHTML = `
    <section class="section" style="margin-top:0">
      <div class="section-heading">
        <div>
          <h2>Explore Adi’s World</h2>
          <p>Tap a world to start an adventure.</p>
        </div>
      </div>
      <div class="world-grid">
        ${worlds.map(worldCard).join("")}
      </div>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function renderWorld(worldId) {
  const world = worlds.find((item) => item.id === worldId);
  if (!world || world.status !== "open") {
    gentleMessage("This world is still growing. Try one of the worlds marked PLAY.");
    return;
  }
  currentView = { type: "world", worldId };
  setActiveNav("worlds");
  const worldActivities = activities[worldId] || [];
  const hasActivities = worldActivities.length > 0;
  const worldGameCopy = {
    home: "Adi’s Home is now open for routines and life-skills adventures. Games and activities will be added here later.",
    word: "Word Forest games build letters, sounds, and early reading skills through short child-friendly challenges, including sound matching, word building, and selected-letter practice.",
    number: "Number Island games build early maths skills through playful counting, comparing, and number patterns.",
    puzzle: "Puzzle Mountain games use short, child-friendly challenges for logic and problem-solving.",
    discovery: "Discovery Lab explores science, nature, senses, weather, animals, and cause-and-effect through simple child-friendly experiments and challenges.",
    blessing: "Blessing Garden has short Bible verses, picture Bible stories to read and listen to, and simple Bible questions for young learners."
  };

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-worlds">← All worlds</button></div>
    <section class="world-hero ${worldId}">
      <span class="eyebrow">Learning world</span>
      <h1>${world.icon} ${world.name}</h1>
      <p>${hasActivities ? `${world.note}. Pick a short game and help Adi complete fun learning challenges.` : `${world.note}. This world is open and ready to explore.`}</p>
    </section>


    ${worldId === "home" ? `
    <section class="adi-home-character-section" aria-label="Interactive Adi">
      <button class="adi-home-character-button" type="button" data-adi-home-character aria-label="Tap Adi to say hi">
        <img class="adi-home-character-image" data-adi-home-image src="${ADI_HOME_IDLE_IMAGE}" alt="Adi standing and smiling" decoding="async">
        <span class="adi-home-tap-hint" aria-hidden="true">Tap Adi 👋</span>
      </button>
      <p class="adi-home-character-help">Tap Adi and she’ll wave and say “Hi!”</p>
    </section>
    ` : ""}

    <section class="section" aria-labelledby="activity-heading">
      <div class="section-heading">
        <div>
          <h2 id="activity-heading">${hasActivities ? "Pick a game" : "World ready"}</h2>
          <p>${worldGameCopy[worldId] || "Pick a short, child-friendly learning challenge."}</p>
        </div>
      </div>
      ${worldActivities.length ? `
      <div class="activity-list">
        ${worldActivities.map((activity) => {
          const key = `${worldId}:${activity.id}`;
          const done = progress.completed[key] || 0;
          return `
            <button class="activity-card" type="button" data-activity="${activity.id}" data-world-id="${worldId}">
              <span class="activity-icon" aria-hidden="true">${activity.icon}</span>
              <span>
                <strong>${activity.title}</strong>
                <small>${activity.description}</small>
              </span>
              <span class="activity-stars" aria-label="${done} stars earned">${done ? "⭐".repeat(Math.min(done, 3)) : "○○○"}</span>
            </button>`;
        }).join("")}
      </div>` : `
      <div class="world-empty-state" role="status">
        <span class="world-empty-icon" aria-hidden="true">${world.icon}</span>
        <strong>${world.name} is open!</strong>
        <p>No games have been added yet. You can enter and explore this world now, and activities can be added later.</p>
      </div>`}
    </section>
  `;
  window.scrollTo({ top: 0, behavior: "auto" });
  screen.focus({ preventScroll: true });
}


function renderBibleStoryLibrary() {
  currentView = { type: "bible-story-library", worldId: "blessing", activityId: "story-garden" };
  setActiveNav("worlds");

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="blessing">← Blessing Garden</button></div>
    <header class="activity-header bible-story-header">
      <span class="eyebrow">Blessing Garden</span>
      <h1>Bible Stories</h1>
      <p class="helper-text">Choose a Bible story to read and listen to.</p>
      <p class="bible-library-reward-note">Each story can earn up to 5 stars.</p>
    </header>
    <section class="bible-story-grid" aria-label="Bible story library">
      ${BIBLE_STORIES.map((story) => {
        const storyProgress = getStoryProgress(story.id);
        return `
          <button class="bible-story-card" type="button" data-bible-story="${story.id}">
            <img class="bible-story-cover" src="${story.coverImage}" alt="${escapeAttr(story.coverAlt)}" loading="lazy">
            <span class="bible-story-card-copy">
              <strong>${story.title}</strong>
              <small class="bible-story-reference">${story.reference}</small>
              <small>${story.summary}</small>
              <span class="bible-story-stars" aria-label="${storyProgress.stars} of ${story.maxStars} stars">${renderStoryStars(storyProgress.stars, story.maxStars)}</span>
            </span>
            <span class="bible-story-open" aria-hidden="true">›</span>
          </button>
        `;
      }).join("")}
    </section>
  `;
  screen.focus({ preventScroll: true });
  setTimeout(() => speak("Bible Stories. Choose a Bible story to read and listen to. Each story can earn up to five stars."), 200);
}

function renderBibleStory(storyId, sceneIndex = 0, announce = true) {
  const story = BIBLE_STORIES.find((item) => item.id === storyId);
  if (!story) return renderBibleStoryLibrary();

  const safeIndex = Math.max(0, Math.min(sceneIndex, story.scenes.length - 1));
  const scene = story.scenes[safeIndex];
  const isFirst = safeIndex === 0;
  const isLast = safeIndex === story.scenes.length - 1;
  const storyProgress = markStorySceneSeen(storyId, safeIndex);

  currentView = { type: "bible-story", worldId: "blessing", activityId: "story-garden", storyId, sceneIndex: safeIndex };
  setActiveNav("worlds");

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-bible-story-library aria-label="Back to all Bible stories">← All Bible Stories</button></div>
    <header class="activity-header bible-reader-title">
      <span class="eyebrow">${story.reference}</span>
      <h1>${story.title}</h1>
      <div class="bible-reader-star-row" aria-label="${storyProgress.stars} of ${story.maxStars} story stars earned">
        <span aria-hidden="true">${renderStoryStars(storyProgress.stars, story.maxStars)}</span>
        <strong>${storyProgress.stars}/${story.maxStars}</strong>
      </div>
      <div class="bible-story-progress" aria-label="${storyProgress.seenScenes.length} of ${story.scenes.length} story pages completed">
        ${story.scenes.map((_, index) => `<span class="${storyProgress.seenScenes.includes(index) ? "is-filled" : ""}"></span>`).join("")}
      </div>
    </header>

    <article class="bible-reader-card game-enter">
      <img class="bible-reader-image" src="${scene.image}" alt="${escapeAttr(scene.alt)}">
      <div class="bible-reader-page-label">Page ${safeIndex + 1} of ${story.scenes.length}</div>
      <h2>${scene.title}</h2>
      <p class="bible-reader-text">${scene.text}</p>
      ${story.memoryVerse ? `
        <aside class="bible-memory-verse" aria-label="Memory verse">
          ${story.memoryVerseImage ? `<img class="bible-memory-verse-image" src="${story.memoryVerseImage}" alt="${escapeAttr(story.memoryVerseImageAlt || story.coverAlt || "Bible story illustration")}">` : ""}
          <span>Memory Verse</span>
          <strong>${story.memoryVerseReference}</strong>
          <blockquote>“${story.memoryVerse}”</blockquote>
          <button class="bible-verse-read-button" type="button" data-bible-read-verse aria-label="Read memory verse aloud">🔊 Read memory verse</button>
        </aside>
      ` : ""}
      <button class="bible-read-button" type="button" data-bible-read-aloud aria-label="Read ${escapeAttr(scene.title)} aloud">🔊 Read to me</button>

      <div class="bible-reader-actions">
        <button class="secondary-story-button" type="button" data-bible-story-prev ${isFirst ? "disabled" : ""} aria-label="Previous story page">← Back</button>
        ${isLast
          ? '<button class="primary-story-button" type="button" data-bible-story-finish aria-label="Finish this Bible story">Finish Story</button>'
          : '<button class="primary-story-button" type="button" data-bible-story-next aria-label="Next story page">Next →</button>'}
      </div>

      <p class="bible-reader-credits">
        Illustration credit: ${story.credits}. License: ${story.license}.
        <a href="${story.sourceUrl}" target="_blank" rel="noopener noreferrer">Image source</a>
      </p>
    </article>
  `;

  screen.focus({ preventScroll: true });
  if (announce) setTimeout(() => speak(`${scene.title}. ${scene.text}`), 220);
}

function renderBibleStoryCompletion(storyId) {
  const story = BIBLE_STORIES.find((item) => item.id === storyId);
  if (!story) return renderBibleStoryLibrary();

  const storyProgress = getStoryProgress(storyId);
  currentView = { type: "bible-story-complete", worldId: "blessing", activityId: "story-garden", storyId };
  setActiveNav("worlds");

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-bible-story-library>← All Bible Stories</button></div>
    <section class="bible-story-completion game-enter" role="status" aria-live="polite">
      <span class="eyebrow">${story.reference}</span>
      <h1>You finished the story!</h1>
      <p class="bible-completion-title">${story.title}</p>
      <div class="bible-completion-stars" aria-label="${storyProgress.stars} of ${story.maxStars} stars earned">
        ${renderStoryStars(storyProgress.stars, story.maxStars)}
      </div>
      <p>You earned ${storyProgress.stars} stars!</p>
      <button class="primary-story-button bible-completion-button" type="button" data-bible-story-library>Back to Bible Stories</button>
    </section>
  `;

  screen.focus({ preventScroll: true });
  setTimeout(() => speak(`You finished the story! You earned ${storyProgress.stars} stars!`), 180);
}

function renderGameInstructions(worldId, activityId) {
  const activity = (activities[worldId] || []).find((item) => item.id === activityId);
  if (!activity) return renderWorld(worldId);

  const instructions = GAME_INSTRUCTIONS[`${worldId}:${activityId}`] || {
    intro: "Here is how to play this game.",
    steps: ["Look carefully at the challenge.", "Tap the answer you think is correct.", "Keep trying until you complete the round."],
    spoken: "Look carefully, choose your answer, and keep trying until you complete the round."
  };

  currentView = { type: "instructions", worldId, activityId };
  setActiveNav("worlds");

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="${worldId}">← Back</button></div>
    <header class="activity-header instruction-header">
      <span class="eyebrow">How to play</span>
      <h1>${activity.icon} ${activity.title}</h1>
    </header>

    <section class="game-card instruction-card game-enter" aria-labelledby="instruction-title">
      <div class="instruction-hero-icon" aria-hidden="true">${activity.icon}</div>
      <h2 id="instruction-title">Before you start</h2>
      <p class="instruction-intro">${instructions.intro}</p>
      <ol class="instruction-steps">
        ${instructions.steps.map((step) => `<li><span aria-hidden="true">✓</span><p>${step}</p></li>`).join("")}
      </ol>
      <div class="instruction-audio-note">🔊 Adi will also read the instructions aloud.</div>
      <button class="primary-button instruction-start-button" type="button" data-start-instructed-game data-world-id="${worldId}" data-activity-id="${activityId}">▶ Let's Play</button>
    </section>
  `;

  screen.focus({ preventScroll: true });
  if (instructionSpeechTimer) window.clearTimeout(instructionSpeechTimer);
  instructionTransitionPending = false;
  instructionSpeechText = `${activity.title}. ${instructions.spoken}`;
  instructionSpeechTimer = window.setTimeout(() => {
    instructionSpeechTimer = null;
    speak(instructionSpeechText);
  }, 250);
}

function renderStartWordSetup() {
  currentView = { type: "start-word-setup", worldId: "word", activityId: "start-word" };
  setActiveNav("worlds");
  const selectedLetter = startWordSetup.letter;
  const selectedRounds = startWordSetup.rounds;

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="word">← Back</button></div>
    <header class="activity-header start-word-setup-header">
      <span class="eyebrow">Word Forest</span>
      <h1>🌱 Start the Word</h1>
      <p class="helper-text">Choose the letter you want to practise, then choose how many rounds to play.</p>
    </header>

    <section class="game-card start-word-setup-card game-enter" aria-labelledby="start-word-letter-heading">
      <div class="start-word-setup-section">
        <div class="start-word-step-badge">1</div>
        <div>
          <h2 id="start-word-letter-heading">Choose a letter</h2>
          <p class="helper-text">Tap a letter to hear its sound.</p>
        </div>
      </div>
      <div class="start-word-letter-grid" aria-label="Choose a letter from A to Z">
        ${ALPHABET.map((letter) => `
          <button class="start-word-letter-button ${selectedLetter === letter ? "is-selected" : ""}" type="button" data-start-word-letter="${letter}" aria-pressed="${selectedLetter === letter}" aria-label="${letter}. Choose this letter.">
            ${letter}<span aria-hidden="true">🔊</span>
          </button>
        `).join("")}
      </div>

      <div class="start-word-setup-section start-word-round-section">
        <div class="start-word-step-badge">2</div>
        <div>
          <h2>How many rounds?</h2>
          <p class="helper-text">Choose a short or longer practice session.</p>
        </div>
      </div>
      <div class="start-word-round-grid" aria-label="Choose number of rounds">
        ${START_WORD_ROUND_OPTIONS.map((count) => `
          <button class="start-word-round-button ${selectedRounds === count ? "is-selected" : ""}" type="button" data-start-word-rounds="${count}" aria-pressed="${selectedRounds === count}">
            <strong>${count}</strong><span>rounds</span>
          </button>
        `).join("")}
      </div>

      <div class="start-word-setup-summary" aria-live="polite">
        ${selectedLetter
          ? `Practising <strong>${selectedLetter}</strong> for <strong>${selectedRounds}</strong> rounds`
          : "Choose a letter to continue"}
      </div>
      <button class="primary-button start-word-start-button" type="button" data-start-word-start ${selectedLetter ? "" : "disabled"}>▶ Start Game</button>
    </section>
  `;

  screen.focus({ preventScroll: true });
}

function startConfiguredStartWordGame() {
  const activity = activities.word.find((item) => item.id === "start-word");
  if (!activity || !startWordSetup.letter) return;
  activity.rounds = buildStartWordRounds(startWordSetup.letter, startWordSetup.rounds);
  if (!activity.rounds.length) return;
  startGameSession("word", "start-word");
  renderGame("word", "start-word", 0);
}

function renderSoundHuntSetup() {
  currentView = { type: "sound-hunt-setup", worldId: "word", activityId: "sound-hunt" };
  setActiveNav("worlds");
  const selectedLetter = soundHuntSetup.letter;
  const selectedRounds = soundHuntSetup.rounds;

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="word">← Back</button></div>
    <header class="activity-header start-word-setup-header">
      <span class="eyebrow">Word Forest</span>
      <h1>🎨 Sound Hunt</h1>
      <p class="helper-text">Choose one letter to practise, then choose how many rounds to play.</p>
      <button class="sound-hunt-setup-audio" type="button" data-sound-hunt-setup-audio aria-label="Hear the Sound Hunt setup instruction">🔊 Listen</button>
    </header>
    <section class="game-card start-word-setup-card sound-hunt-setup-card game-enter" aria-labelledby="sound-hunt-letter-heading">
      <div class="start-word-setup-section"><div class="start-word-step-badge">1</div><div><h2 id="sound-hunt-letter-heading">Choose a letter</h2><p class="helper-text">Tap a letter to select it and hear its sound.</p></div></div>
      <div class="start-word-letter-grid" aria-label="Choose one letter from A to Z">
        ${ALPHABET.map((letter) => `
          <button class="start-word-letter-button sound-hunt-letter-button ${selectedLetter === letter ? "is-selected" : ""}" type="button" data-sound-hunt-letter="${letter}" aria-pressed="${selectedLetter === letter}" aria-label="${letter}. ${selectedLetter === letter ? "Selected." : "Choose this letter."}">
            <strong aria-hidden="true">${letter}</strong><span class="sound-hunt-lower" aria-hidden="true">${letter.toLowerCase()}</span>
          </button>`).join("")}
      </div>
      <div class="start-word-setup-section start-word-round-section"><div class="start-word-step-badge">2</div><div><h2>How many rounds?</h2><p class="helper-text">Choose how long you want to practise.</p></div></div>
      <div class="start-word-round-grid" aria-label="Choose number of rounds">
        ${SOUND_HUNT_ROUND_OPTIONS.map((count) => `
          <button class="start-word-round-button ${selectedRounds === count ? "is-selected" : ""}" type="button" data-sound-hunt-rounds="${count}" aria-pressed="${selectedRounds === count}">
            <strong>${count}</strong><span>rounds</span>
          </button>`).join("")}
      </div>
      <div class="start-word-setup-summary" aria-live="polite">${selectedLetter ? `Letter <strong>${selectedLetter} ${selectedLetter.toLowerCase()}</strong> • <strong>${selectedRounds}</strong> rounds` : "Choose a letter to continue"}</div>
      <button class="primary-button start-word-start-button" type="button" data-sound-hunt-start ${selectedLetter ? "" : "disabled"} aria-label="${selectedLetter ? `Start Sound Hunt with letter ${selectedLetter} for ${selectedRounds} rounds` : "Choose a letter before starting Sound Hunt"}">▶ Start Sound Hunt</button>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function startConfiguredSoundHuntGame() {
  const activity = activities.word.find((item) => item.id === "sound-hunt");
  if (!activity || !soundHuntSetup.letter) return;
  activity.rounds = buildSoundHuntRounds(soundHuntSetup.letter, soundHuntSetup.rounds);
  if (!activity.rounds.length) return;
  startGameSession("word", "sound-hunt");
  renderGame("word", "sound-hunt", 0);
}

function renderGame(worldId, activityId, roundIndex = 0) {
  const activity = (activities[worldId] || []).find((item) => item.id === activityId);
  if (!activity) return renderWorld(worldId);

  activeGame = {
    worldId,
    activityId,
    roundIndex,
    correctThisRound: false,
    buildIndex: 0,
    countedIds: new Set(),
    answerLocked: false,
    countMatchNumberCorrect: false,
    soundHuntFoundIndexes: new Set(),
    soundMatchSelectedPicture: null,
    soundMatchMatchedIndexes: new Set()
  };
  currentView = { type: "game", worldId, activityId };
  setActiveNav("worlds");

  const round = activity.rounds[roundIndex];
  const progressPct = ((roundIndex + 1) / activity.rounds.length) * 100;
  const isSequence = /\s{2}|\?/.test(round.stage);
  const isNumber = /^\d$/.test(round.stage);
  const isAlphabetRound = Boolean(round.alphabetRound);
  const roundLabel = round.difficultyLabel
    ? `${round.difficultyLabel} • Round ${roundIndex + 1} of ${activity.rounds.length}`
    : `Round ${roundIndex + 1} of ${activity.rounds.length}`;

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="${worldId}">← Back</button></div>
    <header class="activity-header">
      <div class="round-meta">
        <span class="eyebrow">${roundLabel}</span>
        ${isAlphabetRound ? `<span class="round-pill">${round.choiceCount} choices</span>` : ""}
      </div>
      <h1>${activity.icon} ${activity.title}</h1>
      <div class="session-score" aria-label="Current game score">
        <span>⭐ <strong>${gameSession?.score ?? 0}</strong></span>
        <small>${gameSession ? `${gameSession.correctAnswers} correct • ${gameSession.mistakes} mistakes` : ""}</small>
      </div>
      <div class="progress-track" aria-label="Game progress">
        <div class="progress-fill" style="width:${progressPct}%"></div>
      </div>
    </header>

    <section class="game-card ${isAlphabetRound ? "alphabet-game" : ""} game-enter" aria-live="polite">
      <div class="adi-prompt">
        <div class="adi-mini" aria-hidden="true">👧🏻</div>
        <p>${round.prompt}</p>
      </div>

      <div class="prompt-stage ${isAlphabetRound ? "alphabet-stage" : ""} ${round.phonicsRound ? "phonics-stage" : ""} ${round.pictureMatchRound || round.buildWordRound || round.startWordRound ? "picture-match-stage" : ""} ${round.soundHuntRound ? "sound-hunt-target-stage" : ""} ${round.plantFoodRound ? "plant-food-stage" : ""}">
        ${isAlphabetRound ? '<span class="target-sparkle sparkle-left" aria-hidden="true">✨</span>' : ""}
        ${round.countMatchRound
          ? `<div class="counting-stage-content count-match-stage-content">
               <div class="counting-object-grid ${round.quantity > 20 ? "count-many" : ""}" aria-label="${round.quantity} ${escapeAttr(round.objectPlural)}. Tap each object once to count it.">
                 ${Array.from({ length: round.quantity }, (_, objectIndex) => `
                   <button class="counting-object" type="button" data-count-object="${objectIndex}" aria-pressed="false" aria-label="${escapeAttr(round.objectSingular)} ${objectIndex + 1}, not counted" style="--object-index:${objectIndex}">
                     <span class="counting-object-emoji" aria-hidden="true">${round.objectEmoji}</span>
                     <span class="counting-check" aria-hidden="true">✓</span>
                   </button>
                 `).join("")}
               </div>
               <button class="count-reset-button" type="button" data-count-reset>↺ Count again</button>
             </div>`
          : round.compareRound
          ? `<div class="compare-stage" aria-label="Compare the left and right groups">
               <div class="compare-group" aria-label="Left group: ${round.leftQuantity} ${escapeAttr(round.objectPlural)}">
                 <span class="compare-side-label">Left</span>
                 <div class="compare-objects" aria-hidden="true">${Array.from({ length: round.leftQuantity }, () => `<span>${round.objectEmoji}</span>`).join("")}</div>
               </div>
               <div class="compare-divider" aria-hidden="true">|</div>
               <div class="compare-group" aria-label="Right group: ${round.rightQuantity} ${escapeAttr(round.objectPlural)}">
                 <span class="compare-side-label">Right</span>
                 <div class="compare-objects" aria-hidden="true">${Array.from({ length: round.rightQuantity }, () => `<span>${round.objectEmoji}</span>`).join("")}</div>
               </div>
             </div>`
          : round.numberSequenceRound
          ? `<div class="number-sequence-stage" aria-label="Number sequence with one missing answer">
               ${round.sequenceNumbers.map((value) => `<span class="sequence-number">${value}</span>`).join("")}
               <span class="sequence-blank" aria-label="one missing number">_</span>
             </div>`
          : round.countingRound
          ? `<div class="counting-stage-content">
               <div class="counting-object-grid count-${round.quantity}" aria-label="${round.quantity} ${escapeAttr(round.objectPlural)}. Tap each object once to count it.">
                 ${Array.from({ length: round.quantity }, (_, objectIndex) => `
                   <button class="counting-object" type="button" data-count-object="${objectIndex}" aria-pressed="false" aria-label="${escapeAttr(round.objectSingular)} ${objectIndex + 1}, not counted" style="--object-index:${objectIndex}">
                     <span class="counting-object-emoji" aria-hidden="true">${round.objectEmoji}</span>
                     <span class="counting-check" aria-hidden="true">✓</span>
                   </button>
                 `).join("")}
               </div>
               <button class="count-reset-button" type="button" data-count-reset>↺ Count again</button>
             </div>`
          : round.gideonActivityRound
          ? `<div class="gideon-answer-bank" aria-label="Answer box">
               <div class="gideon-answer-bank-title">ANSWER BOX</div>
               <div class="gideon-answer-bank-grid">
                 ${GIDEON_ANSWER_BANK.map((item) => `<div class="gideon-answer-bank-item"><strong>${item.letter}.</strong><span>${item.text}</span></div>`).join("")}
               </div>
             </div>`
          : round.plantFoodRound
          ? `<button class="plant-food-picture-button" type="button" data-plant-food-speak="${escapeAttr(round.foodSpokenName)}" aria-label="Hear ${escapeAttr(round.foodName)}">
               <img class="plant-food-photo" src="${escapeAttr(round.foodImage)}" alt="${escapeAttr(round.foodName)}" loading="eager" decoding="async">
               <strong>${round.foodName}</strong>
               <small>🔊 Tap to hear</small>
             </button>`
          : round.soundMatchRound
          ? `<div class="sound-match-stage-note" aria-label="Tap a picture first, then tap its beginning letter"><span aria-hidden="true">👆</span><strong>Picture first</strong><span aria-hidden="true">→</span><strong>Letter next</strong></div>`
          : round.soundHuntRound
          ? `<div class="sound-hunt-target" aria-label="Target letter ${escapeAttr(round.targetLetter)}"><strong>${round.targetLetter}</strong><span>${round.targetLetter.toLowerCase()}</span><small>🔊 ${round.targetLetter} sound</small></div>`
          : round.pictureMatchRound || round.buildWordRound || round.startWordRound
          ? `<button class="picture-speak-button" type="button" data-speak-word="${escapeAttr(round.spokenWord)}" aria-label="Hear ${escapeAttr(round.spokenWord)}">
               <span class="picture-speak-emoji" aria-hidden="true">${round.stage}</span>
               <span class="picture-speak-hint">🔊 Tap to hear</span>
             </button>`
          : `<div class="${isNumber ? "big-number" : isSequence ? "sequence" : "big-symbol"}">${round.stage}</div>`}
        ${round.phonicsRound ? `<div class="phonics-word" aria-label="Spelling: ${round.spelling}">${round.spelling}</div>` : ""}
        ${round.rhymeRound ? `<div class="phonics-word rhyme-source-word" aria-label="Rhyme word: ${round.displayWord}">${round.displayWord}</div>` : ""}
        ${round.startWordRound ? `<div class="start-word-display" data-start-word-display aria-label="Incomplete word ${escapeAttr(round.incompleteWord)}">${round.incompleteWord}</div>` : ""}
        ${isAlphabetRound ? '<span class="target-sparkle sparkle-right" aria-hidden="true">⭐</span>' : ""}
      </div>

      ${round.soundMatchRound ? `
        <div class="sound-match-board">
          <div class="sound-match-picture-grid" aria-label="Picture choices. Tap one picture first.">
            ${round.soundMatchPictures.map((picture, pictureIndex) => `
              <article class="sound-match-picture-card" data-sound-match-picture-card="${pictureIndex}">
                <button class="sound-match-picture-button" type="button" data-sound-match-picture="${pictureIndex}" aria-pressed="false" aria-label="${escapeAttr(picture.word)}. Tap to select this picture.">
                  <span class="sound-match-emoji" aria-hidden="true">${picture.emoji}</span>
                  <span class="sound-match-word">${picture.word}</span>
                  <span class="sound-match-linked-letter" data-sound-match-linked-letter="${pictureIndex}" aria-hidden="true"></span>
                </button>
              </article>`).join("")}
          </div>
          <div class="sound-match-divider" aria-hidden="true">Match to</div>
          <div class="sound-match-letter-grid" aria-label="Beginning letter choices">
            ${round.soundMatchLetters.map((letter) => `
              <button class="sound-match-letter-button letter-sound-choice" type="button" data-sound-match-letter="${letter}" aria-label="Letter ${letter}. Tap to match the selected picture.">
                <strong>${letter}</strong>
              </button>`).join("")}
          </div>
          <button class="sound-match-reset-button" type="button" data-sound-match-reset>↺ Reset this round</button>
        </div>
      ` : round.soundHuntRound ? `
        <div class="sound-hunt-grid choices-${round.choiceCount}" aria-label="Black and white picture choices">
          ${round.choices.map((choice, choiceIndex) => `
            <article class="sound-hunt-choice-card" data-sound-hunt-card="${choiceIndex}">
              <button class="sound-hunt-picture-button" type="button" data-sound-hunt-choice="${choiceIndex}" aria-label="${escapeAttr(choice.word)}. Tap if it begins with ${escapeAttr(round.targetLetter)}.">
                <span class="sound-hunt-emoji" aria-hidden="true">${choice.emoji}</span><span class="sound-hunt-check" aria-hidden="true">✓</span>
              </button>
              <button class="sound-hunt-audio-button" type="button" data-sound-hunt-audio="${choiceIndex}" aria-label="Hear ${escapeAttr(choice.word)}"><span aria-hidden="true">🔊</span><span>Hear name</span></button>
            </article>`).join("")}
        </div>
      ` : round.startWordRound ? `
        <div class="choice-grid alphabet-choice-grid choices-${round.choiceCount} start-word-choice-grid" aria-label="Beginning letter choices">
          ${round.choices.map((choice, choiceIndex) => `
            <button class="choice-button alphabet-choice letter-sound-choice start-word-choice" style="--choice-index:${choiceIndex}" type="button" data-start-word-choice="${escapeAttr(choice)}" aria-label="${escapeAttr(choice)}, tap to hear and try this beginning letter">
              <span aria-hidden="true">${choice}</span>
            </button>
          `).join("")}
        </div>
      ` : round.buildWordRound ? `
        <div class="build-word-area">
          <div class="word-slots" aria-label="Word has ${round.answer.length} letters">
            ${round.answer.split("").map((letter, slotIndex) => `<span class="word-slot" data-build-slot="${slotIndex}" aria-hidden="true">_</span>`).join("")}
          </div>
          <div class="build-letter-tray" aria-label="Letter choices">
            ${round.letters.map((tile, choiceIndex) => `
              <button class="build-letter-button" type="button" data-build-letter="${escapeAttr(tile.letter)}" data-build-tile="${tile.tileId}" style="--choice-index:${choiceIndex}" aria-label="${escapeAttr(tile.letter)}, tap to add this letter">
                ${tile.letter}<span aria-hidden="true" class="build-letter-speaker">🔊</span>
              </button>
            `).join("")}
          </div>
          <button class="build-reset-button" type="button" data-build-reset>↺ Start this word again</button>
        </div>
      ` : round.countMatchRound ? `
        <div class="count-match-answer-area">
          <div class="count-match-step-label" data-count-match-step-label>Step 1 of 2 · Pick the number</div>
          <div class="choice-grid count-number-grid choices-${round.choiceCount}" data-count-match-number-grid aria-label="Number choices">
            ${round.choices.map((choice, choiceIndex) => `
              <button class="choice-button count-number-choice" style="--choice-index:${choiceIndex}" type="button" data-number-choice="${choice}" aria-label="${numberWord(choice)}. Tap to hear and choose this number.">
                <span aria-hidden="true">${choice}</span>
              </button>
            `).join("")}
          </div>
          <div class="count-match-selected-number" data-count-match-selected-number hidden>
            Number <strong></strong> ✓
          </div>
          <div class="count-match-word-step" data-count-match-word-step hidden>
            <div class="count-match-step-label">Step 2 of 2 · Match the number word</div>
            <div class="choice-grid count-match-word-grid choices-${round.choiceCount}" aria-label="Number word choices">
              ${round.wordChoices.map((choice, choiceIndex) => `
                <button class="choice-button count-match-word-choice" style="--choice-index:${choiceIndex}" type="button" data-count-match-word-choice="${escapeAttr(choice)}" aria-label="${escapeAttr(choice)}. Tap to hear and choose this number word.">
                  <span>${choice}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      ` : round.countingRound || round.numberSequenceRound ? `
        <div class="choice-grid count-number-grid choices-${round.choiceCount}" aria-label="Number choices">
          ${round.choices.map((choice, choiceIndex) => `
            <button class="choice-button count-number-choice" style="--choice-index:${choiceIndex}" type="button" data-number-choice="${choice}" aria-label="${NUMBER_WORDS[Number(choice)] || choice}. Tap to hear and choose this number.">
              <span aria-hidden="true">${choice}</span>
            </button>
          `).join("")}
        </div>
      ` : round.gideonActivityRound ? `
        <div class="gideon-letter-grid" aria-label="Choose the letter of the correct answer">
          ${round.choices.map((choice, choiceIndex) => `
            <button class="choice-button gideon-letter-choice" style="--choice-index:${choiceIndex}" type="button" data-choice="${escapeAttr(choice)}" aria-label="Answer ${escapeAttr(choice)}">
              <strong>${choice}</strong>
            </button>
          `).join("")}
        </div>
      ` : round.plantFoodRound ? `
        <div class="plant-food-choice-grid" aria-label="Choose fruit or vegetable">
          ${round.choices.map((choice, choiceIndex) => `
            <button class="plant-food-choice-button" style="--choice-index:${choiceIndex}" type="button" data-choice="${escapeAttr(choice)}" aria-label="${escapeAttr(choice)}">
              <strong>${choice}</strong>
              <small>${choice === "Fruit" ? "Fruit group" : "Vegetable group"}</small>
            </button>
          `).join("")}
        </div>
      ` : `
        <div class="choice-grid ${round.compareRound ? "compare-choice-grid" : ""} ${isAlphabetRound ? `alphabet-choice-grid choices-${round.choiceCount}` : ""}">
          ${round.choices.map((choice, choiceIndex) => `
            <button class="choice-button ${round.compareRound ? "compare-choice" : ""} ${isAlphabetRound ? "alphabet-choice" : ""} ${round.pictureMatchRound ? "picture-word-choice" : ""} ${round.letterSoundRound ? "letter-sound-choice" : ""}" style="--choice-index:${choiceIndex}" type="button" data-choice="${escapeAttr(choice)}" ${round.compareRound ? `aria-label="${escapeAttr(choice)}. Tap to hear and choose this side."` : ""} ${round.letterSoundRound ? `aria-label="${escapeAttr(choice)}, tap to hear the letter sound"` : ""}>
              ${choice.length > 2 && !containsEmojiOnly(choice)
                ? `<span class="${round.pictureMatchRound ? "picture-choice-word" : "choice-label"}">${choice}</span>`
                : `<span aria-hidden="true">${choice}</span>`}
            </button>
          `).join("")}
        </div>
      `}

      <div id="feedback" class="feedback" aria-live="assertive"></div>
    </section>
  `;

  screen.focus({ preventScroll: true });
  setTimeout(() => speak(round.speak || round.prompt), 250);
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function containsEmojiOnly(value) {
  return String(value).length <= 4 && /[^A-Za-z0-9 ]/.test(value);
}

function closePictureChoiceConfirmation() {
  const overlay = document.getElementById("picture-confirm-overlay");
  overlay?.remove();
  pendingPictureChoice = null;
}

function numberWord(value) {
  return NUMBER_WORDS[Number(value)] || String(value);
}

function refreshVisibleSessionScore() {
  const scoreValue = document.querySelector(".session-score strong");
  const scoreDetail = document.querySelector(".session-score small");
  if (scoreValue) scoreValue.textContent = String(gameSession?.score ?? 0);
  if (scoreDetail && gameSession) {
    scoreDetail.textContent = `${gameSession.correctAnswers} correct • ${gameSession.mistakes} mistakes`;
  }
}

function closeCountMatchWordConfirmation() {
  document.getElementById("count-match-word-confirm-overlay")?.remove();
  pendingCountMatchWordChoice = null;
  document.querySelectorAll("[data-count-match-word-choice]").forEach((button) => {
    if (!activeGame?.correctThisRound) button.disabled = false;
  });
}

function showCountMatchWordConfirmation(choice, button) {
  if (!activeGame || activeGame.correctThisRound || !activeGame.countMatchNumberCorrect || pendingCountMatchWordChoice) return;

  pendingCountMatchWordChoice = { choice, button };
  document.querySelectorAll("[data-count-match-word-choice]").forEach((wordButton) => {
    wordButton.disabled = true;
  });

  const openDialog = () => {
    if (!pendingCountMatchWordChoice || pendingCountMatchWordChoice.choice !== choice || activeGame?.correctThisRound) return;

    document.getElementById("count-match-word-confirm-overlay")?.remove();
    const overlay = document.createElement("div");
    overlay.id = "count-match-word-confirm-overlay";
    overlay.className = "picture-confirm-overlay";
    overlay.innerHTML = `
      <div class="picture-confirm-card" role="dialog" aria-modal="true" aria-labelledby="count-match-word-confirm-title">
        <span class="picture-confirm-heard">🔊 You chose</span>
        <strong class="picture-confirm-word count-match-confirm-word">${choice}</strong>
        <h2 id="count-match-word-confirm-title">Is this the answer you want?</h2>
        <div class="picture-confirm-actions">
          <button class="picture-confirm-button yes" type="button" data-count-match-word-confirm="yes" aria-label="Yes, choose ${escapeAttr(choice)}">
            <span class="picture-confirm-symbol" aria-hidden="true">✓</span>
            <span>Yes</span>
          </button>
          <button class="picture-confirm-button no" type="button" data-count-match-word-confirm="no" aria-label="No, choose another number word">
            <span class="picture-confirm-symbol" aria-hidden="true">✕</span>
            <span>No</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.querySelector("[data-count-match-word-confirm='yes']")?.focus();
  };

  speak(choice, openDialog);
}

function closeCompareChoiceConfirmation() {
  document.getElementById("compare-confirm-overlay")?.remove();
  pendingCompareChoice = null;
  document.querySelectorAll(".compare-choice").forEach((button) => {
    if (!activeGame?.correctThisRound) button.disabled = false;
  });
}

function showCompareChoiceConfirmation(choice, button) {
  if (!activeGame || activeGame.correctThisRound || pendingCompareChoice) return;

  pendingCompareChoice = { choice, button };
  document.querySelectorAll(".compare-choice").forEach((choiceButton) => {
    choiceButton.disabled = true;
  });

  const openDialog = () => {
    if (!pendingCompareChoice || pendingCompareChoice.choice !== choice || activeGame?.correctThisRound) return;

    document.getElementById("compare-confirm-overlay")?.remove();
    const overlay = document.createElement("div");
    overlay.id = "compare-confirm-overlay";
    overlay.className = "picture-confirm-overlay";
    overlay.innerHTML = `
      <div class="picture-confirm-card" role="dialog" aria-modal="true" aria-labelledby="compare-confirm-title">
        <span class="picture-confirm-heard">🔊 You chose</span>
        <strong class="picture-confirm-word">${choice}</strong>
        <h2 id="compare-confirm-title">Is this the answer you want?</h2>
        <div class="picture-confirm-actions">
          <button class="picture-confirm-button yes" type="button" data-compare-confirm="yes" aria-label="Yes, choose ${escapeAttr(choice)}">
            <span class="picture-confirm-symbol" aria-hidden="true">✓</span>
            <span>Yes</span>
          </button>
          <button class="picture-confirm-button no" type="button" data-compare-confirm="no" aria-label="No, choose another side">
            <span class="picture-confirm-symbol" aria-hidden="true">✕</span>
            <span>No</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.querySelector("[data-compare-confirm='yes']")?.focus();
  };

  speak(choice, openDialog);
}

function closeNumberChoiceConfirmation() {
  document.getElementById("number-confirm-overlay")?.remove();
  pendingNumberChoice = null;
  document.querySelectorAll("[data-number-choice]").forEach((button) => {
    if (!activeGame?.correctThisRound) button.disabled = false;
  });
}

function showNumberChoiceConfirmation(choice, button) {
  if (!activeGame || activeGame.correctThisRound || activeGame.answerLocked || pendingNumberChoice) return;

  pendingNumberChoice = { choice, button };
  document.querySelectorAll("[data-number-choice]").forEach((numberButton) => {
    numberButton.disabled = true;
  });

  const openDialog = () => {
    if (!pendingNumberChoice || pendingNumberChoice.choice !== choice || activeGame?.correctThisRound) return;

    document.getElementById("number-confirm-overlay")?.remove();
    const overlay = document.createElement("div");
    overlay.id = "number-confirm-overlay";
    overlay.className = "picture-confirm-overlay";
    overlay.innerHTML = `
      <div class="picture-confirm-card" role="dialog" aria-modal="true" aria-labelledby="number-confirm-title">
        <span class="picture-confirm-heard">🔊 You chose</span>
        <strong class="picture-confirm-word">${choice}</strong>
        <h2 id="number-confirm-title">Is this the answer you want?</h2>
        <div class="picture-confirm-actions">
          <button class="picture-confirm-button yes" type="button" data-number-confirm="yes" aria-label="Yes, choose ${escapeAttr(choice)}">
            <span class="picture-confirm-symbol" aria-hidden="true">✓</span>
            <span>Yes</span>
          </button>
          <button class="picture-confirm-button no" type="button" data-number-confirm="no" aria-label="No, choose another number">
            <span class="picture-confirm-symbol" aria-hidden="true">✕</span>
            <span>No</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.querySelector("[data-number-confirm='yes']")?.focus();
  };

  speak(numberWord(choice), openDialog);
}

function resetCountStarsRound(announce = true) {
  if (!activeGame) return;

  activeGame.countedIds = new Set();
  document.querySelectorAll("[data-count-object]").forEach((button, index) => {
    button.disabled = false;
    button.classList.remove("is-counted");
    button.setAttribute("aria-pressed", "false");
    const activity = (activities[activeGame.worldId] || []).find((item) => item.id === activeGame.activityId);
    const round = activity?.rounds?.[activeGame.roundIndex];
    if (round?.countingRound || round?.countMatchRound) {
      button.setAttribute("aria-label", `${round.objectSingular} ${index + 1}, not counted`);
    }
  });

  const feedback = document.getElementById("feedback");
  if (feedback && announce) {
    feedback.className = "feedback";
    feedback.textContent = "";
  }

  if (announce) speak("Let's count again.");
}

function handleCountObject(button) {
  if (!activeGame || activeGame.correctThisRound) return;
  const activity = (activities[activeGame.worldId] || []).find((item) => item.id === activeGame.activityId);
  const round = activity?.rounds?.[activeGame.roundIndex];
  if (!round?.countingRound && !round?.countMatchRound) return;

  const objectId = Number(button.dataset.countObject);
  if (activeGame.countedIds.has(objectId)) return;

  activeGame.countedIds.add(objectId);
  const count = activeGame.countedIds.size;
  button.disabled = true;
  button.classList.add("is-counted");
  button.setAttribute("aria-pressed", "true");
  button.setAttribute("aria-label", `${round.objectSingular} ${objectId + 1}, counted as ${numberWord(count)}`);
  speak(numberWord(count));
}

function handleCountMatchNumberChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound || activeGame.answerLocked) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.countMatchRound || activeGame.countMatchNumberCorrect) return;

  activeGame.answerLocked = true;
  const feedback = document.getElementById("feedback");

  if (choice !== round.answer) {
    updateSessionScore(-1);
    refreshVisibleSessionScore();
    button.classList.add("is-try-again");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Count the objects again.";
    speak("Almost! Count the objects again.");
    setTimeout(() => {
      button.classList.remove("is-try-again");
      activeGame.answerLocked = false;
      resetCountStarsRound(false);
    }, 650);
    return;
  }

  activeGame.countMatchNumberCorrect = true;
  activeGame.answerLocked = false;
  button.classList.add("is-correct");

  document.querySelectorAll("[data-number-choice]").forEach((numberButton) => {
    numberButton.disabled = true;
  });
  const numberGrid = document.querySelector("[data-count-match-number-grid]");
  if (numberGrid) numberGrid.hidden = true;

  const selectedNumber = document.querySelector("[data-count-match-selected-number]");
  if (selectedNumber) {
    selectedNumber.hidden = false;
    const strong = selectedNumber.querySelector("strong");
    if (strong) strong.textContent = choice;
  }

  const wordStep = document.querySelector("[data-count-match-word-step]");
  if (wordStep) wordStep.hidden = false;

  const stepLabel = document.querySelector("[data-count-match-step-label]");
  if (stepLabel) stepLabel.textContent = "Great counting!";

  const prompt = document.querySelector(".adi-prompt p");
  if (prompt) prompt.textContent = `Which word says ${choice}?`;

  feedback.className = "feedback good";
  feedback.textContent = `Great! ${numberWord(choice)}. Now match the number word.`;
  speak(`Great! ${numberWord(choice)}. Now find the word ${numberWord(choice)}.`);
}

function handleCountMatchWordChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound || activeGame.answerLocked || !activeGame.countMatchNumberCorrect) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.countMatchRound) return;

  activeGame.answerLocked = true;
  const feedback = document.getElementById("feedback");

  if (choice !== round.wordAnswer) {
    updateSessionScore(-1);
    refreshVisibleSessionScore();
    button.classList.add("is-try-again");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Try another number word.";
    speak("Almost! Try another number word.");
    setTimeout(() => {
      button.classList.remove("is-try-again");
      activeGame.answerLocked = false;
    }, 650);
    return;
  }

  activeGame.correctThisRound = true;
  updateSessionScore(1);
  refreshVisibleSessionScore();
  button.classList.add("is-correct");
  feedback.className = "feedback good";
  feedback.textContent = `Brilliant! ${round.answer} is ${round.wordAnswer}! ⭐`;
  document.querySelector(".game-card")?.classList.add("round-success");
  document.querySelectorAll("[data-count-match-word-choice], [data-count-object], [data-count-reset]").forEach((control) => {
    control.disabled = true;
  });
  speak(`Brilliant! ${numberWord(round.answer)}!`);

  setTimeout(() => {
    const nextRound = roundIndex + 1;
    if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
    else completeActivity(worldId, activityId);
  }, 1100);
}

function handleNumberSequenceChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound || activeGame.answerLocked) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.numberSequenceRound) return;

  activeGame.answerLocked = true;
  const feedback = document.getElementById("feedback");

  if (choice === round.answer) {
    activeGame.correctThisRound = true;
    updateSessionScore(1);
    refreshVisibleSessionScore();
    button.classList.add("is-correct");
    feedback.className = "feedback good";
    feedback.textContent = `Brilliant! ${numberWord(choice)} comes next! ⭐`;
    document.querySelector(".game-card")?.classList.add("round-success");
    document.querySelectorAll("[data-number-choice]").forEach((control) => {
      control.disabled = true;
    });
    speak(`Brilliant! ${numberWord(choice)} comes next!`);

    setTimeout(() => {
      const nextRound = roundIndex + 1;
      if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
      else completeActivity(worldId, activityId);
    }, 1050);
    return;
  }

  updateSessionScore(-1);
  refreshVisibleSessionScore();
  button.classList.add("is-try-again");
  feedback.className = "feedback try";
  feedback.textContent = "Almost! Look at the numbers and try again.";
  speak("Almost! Look at the numbers and try again.");
  setTimeout(() => {
    button.classList.remove("is-try-again");
    activeGame.answerLocked = false;
  }, 650);
}

function handleCountStarsChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound || activeGame.answerLocked) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.countingRound) return;

  activeGame.answerLocked = true;
  const feedback = document.getElementById("feedback");

  if (choice === round.answer) {
    activeGame.correctThisRound = true;
    updateSessionScore(1);
    refreshVisibleSessionScore();
    button.classList.add("is-correct");
    feedback.className = "feedback good";
    feedback.textContent = `Great counting! ${numberWord(choice)}! ⭐`;
    document.querySelector(".game-card")?.classList.add("round-success");
    document.querySelectorAll("[data-number-choice], [data-count-object], [data-count-reset]").forEach((control) => {
      control.disabled = true;
    });
    speak(`Brilliant! There are ${numberWord(choice).toLowerCase()}!`);

    setTimeout(() => {
      const nextRound = roundIndex + 1;
      if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
      else completeActivity(worldId, activityId);
    }, 1100);
    return;
  }

  updateSessionScore(-1);
  refreshVisibleSessionScore();
  button.classList.add("is-try-again");
  feedback.className = "feedback try";
  feedback.textContent = "Almost! Let's count them again.";
  speak("Almost! Let's count them again.");
  setTimeout(() => {
    button.classList.remove("is-try-again");
    activeGame.answerLocked = false;
    resetCountStarsRound(false);
  }, 650);
}

function speakLetterSound(letter, button, onDone) {
  const cue = LETTER_SOUND_CUES[letter] || `${letter}. ${letter}. ${letter}.`;

  if (button) {
    button.classList.remove("is-speaking-letter");
    void button.offsetWidth;
    button.classList.add("is-speaking-letter");
  }

  speak(cue, () => {
    button?.classList.remove("is-speaking-letter");
    if (typeof onDone === "function") onDone();
  });
}

function closeFirstSoundConfirmation() {
  const overlay = document.getElementById("first-sound-confirm-overlay");
  overlay?.remove();
  pendingFirstSoundChoice = null;
}

function showFirstSoundConfirmation(choice, button) {
  if (!activeGame || activeGame.correctThisRound) return;

  pendingFirstSoundChoice = { choice, button };

  const openDialog = () => {
    if (!pendingFirstSoundChoice || pendingFirstSoundChoice.choice !== choice) return;

    document.getElementById("first-sound-confirm-overlay")?.remove();

    const overlay = document.createElement("div");
    overlay.id = "first-sound-confirm-overlay";
    overlay.className = "picture-confirm-overlay";
    overlay.innerHTML = `
      <div class="picture-confirm-card" role="dialog" aria-modal="true" aria-labelledby="first-sound-confirm-title">
        <span class="picture-confirm-heard">🔊 You chose</span>
        <strong class="picture-confirm-word">${choice}</strong>
        <h2 id="first-sound-confirm-title">Is this the answer you want?</h2>
        <div class="picture-confirm-actions">
          <button class="picture-confirm-button yes" type="button" data-first-sound-confirm="yes" aria-label="Yes, choose ${escapeAttr(choice)}">
            <span class="picture-confirm-symbol" aria-hidden="true">✓</span>
            <span>Yes</span>
          </button>
          <button class="picture-confirm-button no" type="button" data-first-sound-confirm="no" aria-label="No, choose another letter">
            <span class="picture-confirm-symbol" aria-hidden="true">✕</span>
            <span>No</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.querySelector("[data-first-sound-confirm='yes']")?.focus();
  };

  speakLetterSound(choice, button, openDialog);
}

function showPictureChoiceConfirmation(choice, button) {
  if (!activeGame || activeGame.correctThisRound) return;

  pendingPictureChoice = { choice, button };

  const openDialog = () => {
    if (!pendingPictureChoice || pendingPictureChoice.choice !== choice) return;

    document.getElementById("picture-confirm-overlay")?.remove();

    const overlay = document.createElement("div");
    overlay.id = "picture-confirm-overlay";
    overlay.className = "picture-confirm-overlay";
    overlay.innerHTML = `
      <div class="picture-confirm-card" role="dialog" aria-modal="true" aria-labelledby="picture-confirm-title">
        <span class="picture-confirm-heard">🔊 You chose</span>
        <strong class="picture-confirm-word">${choice}</strong>
        <h2 id="picture-confirm-title">Is this the answer you want?</h2>
        <div class="picture-confirm-actions">
          <button class="picture-confirm-button yes" type="button" data-picture-confirm="yes" aria-label="Yes, choose ${escapeAttr(choice)}">
            <span class="picture-confirm-symbol" aria-hidden="true">✓</span>
            <span>Yes</span>
          </button>
          <button class="picture-confirm-button no" type="button" data-picture-confirm="no" aria-label="No, choose another word">
            <span class="picture-confirm-symbol" aria-hidden="true">✕</span>
            <span>No</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.querySelector("[data-picture-confirm='yes']")?.focus();
  };

  speak(choice, openDialog);
}

function resetBuildWordRound() {
  if (!activeGame) return;
  activeGame.buildIndex = 0;
  document.querySelectorAll("[data-build-slot]").forEach((slot) => {
    slot.textContent = "_";
    slot.classList.remove("is-filled");
  });
  document.querySelectorAll("[data-build-letter]").forEach((button) => {
    button.disabled = false;
    button.removeAttribute("aria-disabled");
    button.removeAttribute("data-locked");
    button.removeAttribute("tabindex");
    button.classList.remove("is-used", "is-locked-choice", "is-try-again");
  });
  const feedback = document.getElementById("feedback");
  if (feedback) {
    feedback.className = "feedback";
    feedback.textContent = "";
  }
  speak("Build the word again.");
}



function resetSoundMatchRound() {
  if (!activeGame) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId]?.find((item) => item.id === activityId);
  if (!activity?.rounds?.[roundIndex]?.soundMatchRound) return;
  renderGame(worldId, activityId, roundIndex);
  speak("Round reset. Tap a picture, then tap its beginning letter.");
}

function handleSoundMatchPicture(pictureIndex, button) {
  if (!activeGame || activeGame.correctThisRound) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId]?.find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.soundMatchRound || activeGame.soundMatchMatchedIndexes.has(pictureIndex)) return;

  activeGame.soundMatchSelectedPicture = pictureIndex;

  document.querySelectorAll("[data-sound-match-picture]").forEach((control) => {
    const index = Number(control.dataset.soundMatchPicture);
    const selected = index === pictureIndex;
    control.classList.toggle("is-selected", selected);
    control.setAttribute("aria-pressed", selected ? "true" : "false");
  });

  const picture = round.soundMatchPictures[pictureIndex];
  if (!picture) return;
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback";
  feedback.textContent = `${picture.word}. Now choose its beginning letter.`;
  speak(`${picture.word}. Which letter starts ${picture.word}?`);
}

function reshuffleSoundMatchLetters() {
  const grid = document.querySelector(".sound-match-letter-grid");
  if (!grid) return;
  shuffle(Array.from(grid.children)).forEach((control) => grid.appendChild(control));
}

function handleSoundMatchLetter(letter, button) {
  if (!activeGame || activeGame.correctThisRound) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId]?.find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.soundMatchRound) return;

  reshuffleSoundMatchLetters();

  if (activeGame.soundMatchSelectedPicture === null) {
    const feedback = document.getElementById("feedback");
    feedback.className = "feedback try";
    feedback.textContent = "Pick a picture first.";
    speak("Pick a picture first, then choose its beginning letter.");
    return;
  }

  const pictureIndex = activeGame.soundMatchSelectedPicture;
  const picture = round.soundMatchPictures[pictureIndex];
  if (!picture || activeGame.soundMatchMatchedIndexes.has(pictureIndex)) return;

  speakLetterSound(letter, button);

  if (letter !== picture.letter) {
    updateSessionScore(-1);
    refreshVisibleSessionScore();
    button.classList.add("is-try-again");
    const feedback = document.getElementById("feedback");
    feedback.className = "feedback try";
    feedback.textContent = `Almost! ${picture.word} starts with a different sound.`;
    speak(`Almost. Listen again. ${picture.word}.`);
    setTimeout(() => button.classList.remove("is-try-again"), 600);
    return;
  }

  activeGame.soundMatchMatchedIndexes.add(pictureIndex);
  activeGame.soundMatchSelectedPicture = null;

  const pictureButton = document.querySelector(`[data-sound-match-picture="${pictureIndex}"]`);
  const pictureCard = document.querySelector(`[data-sound-match-picture-card="${pictureIndex}"]`);
  const linkedLetter = document.querySelector(`[data-sound-match-linked-letter="${pictureIndex}"]`);

  if (pictureButton) {
    pictureButton.classList.remove("is-selected");
    pictureButton.classList.add("is-matched");
    pictureButton.disabled = true;
    pictureButton.setAttribute("aria-pressed", "false");
    pictureButton.setAttribute("aria-label", `${picture.word}. Matched to ${letter}.`);
  }

  pictureCard?.classList.add("is-matched");
  if (linkedLetter) linkedLetter.textContent = `✓ ${letter}`;

  button.classList.add("is-match-hit");
  setTimeout(() => button.classList.remove("is-match-hit"), 450);

  const remaining = round.soundMatchPictures.length - activeGame.soundMatchMatchedIndexes.size;
  const feedback = document.getElementById("feedback");

  if (remaining > 0) {
    feedback.className = "feedback good";
    feedback.textContent = `${picture.word} starts with ${letter}! Match ${remaining} more.`;
    speak(`${picture.word} starts with ${letter}. Great match!`);
    return;
  }

  activeGame.correctThisRound = true;
  updateSessionScore(1);
  refreshVisibleSessionScore();
  document.querySelector(".game-card")?.classList.add("round-success");
  document.querySelectorAll("[data-sound-match-letter], [data-sound-match-reset]").forEach((control) => {
    control.disabled = true;
  });
  feedback.className = "feedback good";
  feedback.textContent = "Brilliant! You matched every picture! ⭐";
  speak("Brilliant! You matched every picture to its beginning sound.");

  setTimeout(() => {
    const nextRound = roundIndex + 1;
    if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
    else completeActivity(worldId, activityId);
  }, 1250);
}

function handleSoundHuntChoice(choiceIndex, button) {
  if (!activeGame || activeGame.correctThisRound || button.disabled) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.soundHuntRound) return;
  const choice = round.choices[choiceIndex];
  if (!choice) return;

  const feedback = document.getElementById("feedback");
  const card = button.closest("[data-sound-hunt-card]");

  if (!choice.isCorrect) {
    updateSessionScore(-1);
    refreshVisibleSessionScore();
    button.classList.add("is-try-again");
    feedback.className = "feedback try";
    feedback.textContent = `${choice.word}. Good try! Listen for ${round.targetLetter}.`;
    speak(`${choice.word}. Good try. Listen for ${round.targetLetter}. ${LETTER_SOUND_CUES[round.targetLetter] || round.targetLetter}`);
    setTimeout(() => button.classList.remove("is-try-again"), 600);
    return;
  }

  activeGame.soundHuntFoundIndexes.add(choiceIndex);
  button.disabled = true;
  button.setAttribute("aria-disabled", "true");
  button.setAttribute("aria-label", `${choice.word}. Correct and coloured.`);
  card?.classList.add("is-found");
  const remaining = Math.max(0, round.correctCount - activeGame.soundHuntFoundIndexes.size);

  if (remaining > 0) {
    feedback.className = "feedback good";
    feedback.textContent = `${choice.word}! Great listening. Find ${remaining} more.`;
    speak(`${choice.word}. ${choice.word} starts with ${round.targetLetter}. Great listening.`);
    return;
  }

  activeGame.correctThisRound = true;
  updateSessionScore(1);
  refreshVisibleSessionScore();
  document.querySelector(".game-card")?.classList.add("round-success");
  document.querySelectorAll("[data-sound-hunt-choice]").forEach((control) => { control.disabled = true; });
  feedback.className = "feedback good";
  feedback.textContent = `Brilliant! You found all the ${round.targetLetter} pictures! ⭐`;
  speak(`Brilliant! You found all the pictures that start with ${round.targetLetter}!`);
  setTimeout(() => {
    const nextRound = roundIndex + 1;
    if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
    else completeActivity(worldId, activityId);
  }, 1200);
}

function handleStartWordChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound || activeGame.answerLocked) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.startWordRound) return;

  activeGame.answerLocked = true;
  speakLetterSound(choice, button, () => {
    if (!activeGame || activeGame.roundIndex !== roundIndex || activeGame.correctThisRound) return;
    const feedback = document.getElementById("feedback");

    if (choice === round.answer) {
      activeGame.correctThisRound = true;
      updateSessionScore(1);
      refreshVisibleSessionScore();
      button.classList.add("is-correct");
      document.querySelectorAll("[data-start-word-choice]").forEach((control) => {
        control.disabled = true;
      });
      const wordDisplay = document.querySelector("[data-start-word-display]");
      if (wordDisplay) {
        wordDisplay.textContent = round.word.toUpperCase();
        wordDisplay.classList.add("is-complete");
        wordDisplay.setAttribute("aria-label", `Completed word ${round.word}`);
      }
      feedback.className = "feedback good";
      feedback.textContent = `${round.word}! ${round.answer} starts ${round.word}. ⭐`;
      document.querySelector(".game-card")?.classList.add("round-success");
      speak(`${round.word}. ${round.answer} starts ${round.word}. Brilliant!`);

      setTimeout(() => {
        const nextRound = roundIndex + 1;
        if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
        else completeActivity(worldId, activityId);
      }, 1200);
      return;
    }

    updateSessionScore(-1);
    refreshVisibleSessionScore();
    button.classList.add("is-try-again");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Listen to the word and try again.";
    speak("Almost! Listen to the word and try again.");
    setTimeout(() => {
      button.classList.remove("is-try-again");
      if (activeGame && activeGame.roundIndex === roundIndex) activeGame.answerLocked = false;
    }, 650);
  });
}

function handleBuildLetter(letter, button) {
  if (!activeGame || activeGame.correctThisRound || button.disabled || button.dataset.locked === "true") return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.buildWordRound) return;

  const expectedLetter = round.answer[activeGame.buildIndex];
  speakLetterSound(letter, button);

  if (letter !== expectedLetter) {
    updateSessionScore(-1);
    refreshVisibleSessionScore();
    button.classList.add("is-try-again");
    const feedback = document.getElementById("feedback");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! That letter does not go here yet.";
    speak("Almost! That letter does not go here yet.");
    setTimeout(() => button.classList.remove("is-try-again"), 600);
    return;
  }

  const slot = document.querySelector("[data-build-slot=\"" + activeGame.buildIndex + "\"]");
  if (slot) {
    slot.textContent = letter;
    slot.classList.add("is-filled", "is-locked");
    slot.setAttribute("aria-label", letter + " locked in place");
  }
  activeGame.buildIndex += 1;
  button.disabled = true;
  button.dataset.locked = "true";
  button.setAttribute("aria-disabled", "true");
  button.setAttribute("tabindex", "-1");
  button.classList.add("is-used", "is-locked-choice");
  button.setAttribute("aria-label", letter + " already used");

  if (activeGame.buildIndex < round.answer.length) {
    const feedback = document.getElementById("feedback");
    feedback.className = "feedback good";
    feedback.textContent = "Great! Keep building.";
    return;
  }

  activeGame.correctThisRound = true;
  updateSessionScore(1);
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback good";
  feedback.textContent = "You built " + round.word + "! ⭐";
  document.querySelector(".game-card")?.classList.add("round-success");
  speak("Brilliant! You built " + round.word + "!");

  setTimeout(() => {
    const nextRound = roundIndex + 1;
    if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
    else completeActivity(worldId, activityId);
  }, 1150);
}

function handlePlantFoodChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound || !button) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = (activities[worldId] || []).find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.plantFoodRound) return;

  const feedback = document.getElementById("feedback");

  if (choice === round.answer) {
    activeGame.correctThisRound = true;
    updateSessionScore(1);
    refreshVisibleSessionScore();
    button.classList.add("is-correct");
    document.querySelectorAll(".plant-food-choice-button").forEach((choiceButton) => {
      choiceButton.disabled = true;
    });
    if (feedback) {
      feedback.className = "feedback good";
      feedback.textContent = round.correctFeedback;
    }
    document.querySelector(".game-card")?.classList.add("round-success");
    speak(round.correctSpeak);

    window.setTimeout(() => {
      const nextRound = roundIndex + 1;
      if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
      else completeActivity(worldId, activityId);
    }, 1250);
    return;
  }

  updateSessionScore(-1);
  refreshVisibleSessionScore();
  button.classList.add("is-try-again");
  if (feedback) {
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Try again. Is it a fruit or a vegetable?";
  }
  speak("Almost! Try again. Is it a fruit or a vegetable?");
  window.setTimeout(() => button.classList.remove("is-try-again"), 650);
}

function handleChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity.rounds[roundIndex];
  const feedback = document.getElementById("feedback");

  if (choice === round.answer) {
    activeGame.correctThisRound = true;
    updateSessionScore(1);
    refreshVisibleSessionScore();
    button.classList.add("is-correct");
    feedback.className = "feedback good";
    feedback.textContent = round.alphabetRound
      ? `Brilliant! ${round.rewardLabel || "⭐"}`
      : "You found it! ⭐";
    const gameCard = document.querySelector(".game-card");
    gameCard?.classList.add("round-success");
    speak(round.alphabetRound ? "Brilliant! You found it!" : "You found it! Great job!");

    setTimeout(() => {
      const nextRound = roundIndex + 1;
      if (nextRound < activity.rounds.length) {
        renderGame(worldId, activityId, nextRound);
      } else {
        completeActivity(worldId, activityId);
      }
    }, round.alphabetRound ? 1050 : 900);
  } else {
    updateSessionScore(-1);
    button.classList.add("is-try-again");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Try another one.";
    speak("Almost! Try another one.");
    setTimeout(() => button.classList.remove("is-try-again"), 600);
  }
}

function completeActivity(worldId, activityId) {
  const key = `${worldId}:${activityId}`;
  const sessionStars = Math.max(0, gameSession?.score ?? 0);
  const previousBest = Number(progress.completed[key]) || 0;

  progress.completed[key] = Math.max(previousBest, sessionStars);
  progress.stars = Math.max(0, (Number(progress.stars) || 0) + sessionStars);
  saveProgress();

  celebration.classList.add("is-visible");
  celebration.setAttribute("aria-hidden", "false");

  const isCountingGame = activityId === "count-stars" || activityId === "count-match";
  const isDiscoveryGame = activityId === "plant-food-sort";
  const completionLabel = isCountingGame ? "Great counting!" : isDiscoveryGame ? "Great discovering!" : "Great job!";
  const resultMessage = sessionStars === 1
    ? `${completionLabel} You earned one star!`
    : `${completionLabel} You earned ${sessionStars} stars!`;

  const celebrationHeading = celebration.querySelector("h2");
  if (celebrationHeading) {
    celebrationHeading.textContent = completionLabel;
  }

  const celebrationText = celebration.querySelector("p");
  if (celebrationText) {
    celebrationText.textContent = `${gameSession?.correctAnswers ?? 0} correct • ${gameSession?.mistakes ?? 0} mistakes • +${sessionStars} stars`;
  }

  speak(resultMessage);

  setTimeout(() => {
    celebration.classList.remove("is-visible");
    celebration.setAttribute("aria-hidden", "true");
    gameSession = null;
    renderWorld(worldId);
  }, 1800);
}

function renderProgress() {
  currentView = { type: "progress" };
  setActiveNav("progress");
  const openWorlds = worlds.filter((world) => world.status === "open");
  const totalActivities = Object.values(activities).flat().length;
  const completedActivities = Object.keys(progress.completed).length;
  const pct = totalActivities ? Math.round((completedActivities / totalActivities) * 100) : 0;

  screen.innerHTML = `
    <section class="progress-hero">
      <span class="eyebrow">My learning journey</span>
      <h1>⭐ My Stars</h1>
      <p>Every star means you finished a learning adventure.</p>
    </section>

    <div class="progress-summary" aria-label="Progress summary">
      <div class="stat-card"><strong>${progress.stars}</strong><small>Stars</small></div>
      <div class="stat-card"><strong>${completedActivities}</strong><small>Games</small></div>
      <div class="stat-card"><strong>${pct}%</strong><small>MVP</small></div>
    </div>

    <section class="section">
      <div class="section-heading">
        <div>
          <h2>World progress</h2>
          <p>Keep exploring at your own pace.</p>
        </div>
      </div>
      <div class="progress-world-list">
        ${openWorlds.map((world) => {
          const list = activities[world.id] || [];
          const done = list.filter((activity) => progress.completed[`${world.id}:${activity.id}`]).length;
          const worldPct = list.length ? Math.round((done / list.length) * 100) : 0;
          return `
            <div class="progress-world">
              <div class="progress-world-header">
                <span>${world.icon} ${world.name}</span>
                <span>${done}/${list.length}</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width:${worldPct}%"></div>
              </div>
            </div>`;
        }).join("")}
      </div>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function gentleMessage(message) {
  const original = screen.innerHTML;
  screen.innerHTML = `
    <section class="game-card" style="margin-top:20px;text-align:center">
      <div style="font-size:64px" aria-hidden="true">🌱</div>
      <h2>Coming soon</h2>
      <p class="helper-text">${message}</p>
      <button class="primary-button" style="margin-top:18px;background:#6c5ce7;color:#fff" type="button" data-action="show-worlds">Choose another world</button>
    </section>
  `;
  setTimeout(() => {
    if (!document.querySelector("[data-action='show-worlds']")) screen.innerHTML = original;
  }, 0);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");
  soundButton.textContent = soundEnabled ? "🔊" : "🔇";
  soundButton.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
  if (soundEnabled) speak("Sound on");
  else if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    const name = nav.dataset.nav;
    if (name === "home") renderHome();
    if (name === "worlds") renderWorlds();
    if (name === "progress") renderProgress();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (action) {
    switch (action.dataset.action) {
      case "go-home":
        renderHome();
        break;
      case "start-learning":
        renderWorld("word");
        break;
      case "show-worlds":
      case "back-worlds":
        renderWorlds();
        break;
      case "show-progress":
        renderProgress();
        break;
      case "back-world":
        renderWorld(action.dataset.worldId);
        break;
    }
    return;
  }

  const adiHomeCharacterButton = event.target.closest("[data-adi-home-character]");
  if (adiHomeCharacterButton) {
    greetAdiAtHome();
    return;
  }

  const worldButton = event.target.closest("[data-world]");
  if (worldButton) {
    renderWorld(worldButton.dataset.world);
    return;
  }

  const activityButton = event.target.closest("[data-activity]");
  if (activityButton) {
    if (activityButton.dataset.worldId === "home" && activityButton.dataset.activity === "outfit-check") {
      renderOutfitCheck();
      return;
    }
    if (activityButton.dataset.worldId === "blessing" && activityButton.dataset.activity === "story-garden") {
      renderBibleStoryLibrary();
    } else {
      renderGameInstructions(activityButton.dataset.worldId, activityButton.dataset.activity);
    }
    return;
  }

  const bibleStoryButton = event.target.closest("[data-bible-story]");
  if (bibleStoryButton) {
    renderBibleStory(bibleStoryButton.dataset.bibleStory, 0);
    return;
  }

  const bibleStoryLibraryButton = event.target.closest("[data-bible-story-library]");
  if (bibleStoryLibraryButton) {
    afterCurrentStorySpeech(() => renderBibleStoryLibrary());
    return;
  }

  const bibleStoryPrevButton = event.target.closest("[data-bible-story-prev]");
  if (bibleStoryPrevButton && currentView.type === "bible-story") {
    const { storyId, sceneIndex } = currentView;
    afterCurrentStorySpeech(() => renderBibleStory(storyId, sceneIndex - 1));
    return;
  }

  const bibleStoryNextButton = event.target.closest("[data-bible-story-next]");
  if (bibleStoryNextButton && currentView.type === "bible-story") {
    const { storyId, sceneIndex } = currentView;
    afterCurrentStorySpeech(() => renderBibleStory(storyId, sceneIndex + 1));
    return;
  }

  const bibleStoryFinishButton = event.target.closest("[data-bible-story-finish]");
  if (bibleStoryFinishButton && currentView.type === "bible-story") {
    const { storyId } = currentView;
    afterCurrentStorySpeech(() => renderBibleStoryCompletion(storyId));
    return;
  }

  const bibleVerseReadButton = event.target.closest("[data-bible-read-verse]");
  if (bibleVerseReadButton && currentView.type === "bible-story") {
    const story = BIBLE_STORIES.find((item) => item.id === currentView.storyId);
    if (story?.memoryVerse) speak(`Memory verse. ${story.memoryVerseReference}. ${story.memoryVerse}`);
    return;
  }

  const bibleReadButton = event.target.closest("[data-bible-read-aloud]");
  if (bibleReadButton && currentView.type === "bible-story") {
    const story = BIBLE_STORIES.find((item) => item.id === currentView.storyId);
    const scene = story?.scenes[currentView.sceneIndex];
    if (scene) speak(`${scene.title}. ${scene.text}`);
    return;
  }

  const instructedStartButton = event.target.closest("[data-start-instructed-game]");
  if (instructedStartButton) {
    const worldId = instructedStartButton.dataset.worldId;
    const activityId = instructedStartButton.dataset.activityId;
    instructedStartButton.disabled = true;

    runAfterInstructionSpeech(() => {
      if (worldId === "blessing" && activityId === "story-garden") {
        renderBibleStoryLibrary();
        return;
      }

      if (activityId === "start-word") {
        startWordSetup = { letter: null, rounds: 10 };
        renderStartWordSetup();
        return;
      }
      if (activityId === "sound-hunt") {
        soundHuntSetup = { letter: null, rounds: 10 };
        renderSoundHuntSetup();
        return;
      }

      prepareActivityForPlay(worldId, activityId);
      startGameSession(worldId, activityId);
      renderGame(worldId, activityId, 0);
    });
    return;
  }

  const startWordLetterButton = event.target.closest("[data-start-word-letter]");
  if (startWordLetterButton) {
    startWordSetup.letter = startWordLetterButton.dataset.startWordLetter;
    speakLetterSound(startWordSetup.letter, startWordLetterButton);
    renderStartWordSetup();
    return;
  }

  const startWordRoundsButton = event.target.closest("[data-start-word-rounds]");
  if (startWordRoundsButton) {
    const rounds = Number(startWordRoundsButton.dataset.startWordRounds);
    if (START_WORD_ROUND_OPTIONS.includes(rounds)) startWordSetup.rounds = rounds;
    renderStartWordSetup();
    return;
  }

  const startWordStartButton = event.target.closest("[data-start-word-start]");
  if (startWordStartButton) {
    startConfiguredStartWordGame();
    return;
  }

  const plantFoodSpeakButton = event.target.closest("[data-plant-food-speak]");
  if (plantFoodSpeakButton) {
    speak(plantFoodSpeakButton.dataset.plantFoodSpeak);
    return;
  }

  const soundMatchResetButton = event.target.closest("[data-sound-match-reset]");
  if (soundMatchResetButton) {
    resetSoundMatchRound();
    return;
  }

  const soundMatchPictureButton = event.target.closest("[data-sound-match-picture]");
  if (soundMatchPictureButton) {
    handleSoundMatchPicture(Number(soundMatchPictureButton.dataset.soundMatchPicture), soundMatchPictureButton);
    return;
  }

  const soundMatchLetterButton = event.target.closest("[data-sound-match-letter]");
  if (soundMatchLetterButton) {
    handleSoundMatchLetter(soundMatchLetterButton.dataset.soundMatchLetter, soundMatchLetterButton);
    return;
  }

  const soundHuntSetupAudioButton = event.target.closest("[data-sound-hunt-setup-audio]");
  if (soundHuntSetupAudioButton) {
    speak("Choose the letter you want to practise. Then choose how many rounds to play.");
    return;
  }
  const soundHuntLetterButton = event.target.closest("[data-sound-hunt-letter]");
  if (soundHuntLetterButton) {
    soundHuntSetup.letter = soundHuntLetterButton.dataset.soundHuntLetter;
    renderSoundHuntSetup();
    const selectedButton = document.querySelector(`[data-sound-hunt-letter="${soundHuntSetup.letter}"]`);
    speakLetterSound(soundHuntSetup.letter, selectedButton);
    return;
  }
  const soundHuntRoundsButton = event.target.closest("[data-sound-hunt-rounds]");
  if (soundHuntRoundsButton) {
    const rounds = Number(soundHuntRoundsButton.dataset.soundHuntRounds);
    if (SOUND_HUNT_ROUND_OPTIONS.includes(rounds)) soundHuntSetup.rounds = rounds;
    renderSoundHuntSetup();
    return;
  }
  const soundHuntStartButton = event.target.closest("[data-sound-hunt-start]");
  if (soundHuntStartButton) {
    startConfiguredSoundHuntGame();
    return;
  }

  const countMatchWordConfirmButton = event.target.closest("[data-count-match-word-confirm]");
  if (countMatchWordConfirmButton) {
    if (countMatchWordConfirmButton.dataset.countMatchWordConfirm === "yes" && pendingCountMatchWordChoice) {
      const { choice, button } = pendingCountMatchWordChoice;
      closeCountMatchWordConfirmation();
      handleCountMatchWordChoice(choice, button);
    } else {
      closeCountMatchWordConfirmation();
      speak("Okay. Choose another number word.");
    }
    return;
  }

  const compareConfirmButton = event.target.closest("[data-compare-confirm]");
  if (compareConfirmButton) {
    if (compareConfirmButton.dataset.compareConfirm === "yes" && pendingCompareChoice) {
      const { choice, button } = pendingCompareChoice;
      closeCompareChoiceConfirmation();
      handleChoice(choice, button);
    } else {
      closeCompareChoiceConfirmation();
      speak("Okay. Choose another side.");
    }
    return;
  }

  const numberConfirmButton = event.target.closest("[data-number-confirm]");
  if (numberConfirmButton) {
    if (numberConfirmButton.dataset.numberConfirm === "yes" && pendingNumberChoice) {
      const { choice, button } = pendingNumberChoice;
      const activity = activeGame
        ? (activities[activeGame.worldId] || []).find((item) => item.id === activeGame.activityId)
        : null;
      const round = activity && activeGame ? activity.rounds[activeGame.roundIndex] : null;
      closeNumberChoiceConfirmation();

      if (round?.countMatchRound) handleCountMatchNumberChoice(choice, button);
      else if (round?.numberSequenceRound) handleNumberSequenceChoice(choice, button);
      else handleCountStarsChoice(choice, button);
    } else {
      closeNumberChoiceConfirmation();
      speak("Okay. Choose another number.");
    }
    return;
  }

  const countMatchWordButton = event.target.closest("[data-count-match-word-choice]");
  if (countMatchWordButton) {
    showCountMatchWordConfirmation(countMatchWordButton.dataset.countMatchWordChoice, countMatchWordButton);
    return;
  }

  const countResetButton = event.target.closest("[data-count-reset]");
  if (countResetButton) {
    resetCountStarsRound(true);
    return;
  }

  const countObjectButton = event.target.closest("[data-count-object]");
  if (countObjectButton) {
    handleCountObject(countObjectButton);
    return;
  }

  const numberChoiceButton = event.target.closest("[data-number-choice]");
  if (numberChoiceButton) {
    showNumberChoiceConfirmation(numberChoiceButton.dataset.numberChoice, numberChoiceButton);
    return;
  }

  const firstSoundConfirmButton = event.target.closest("[data-first-sound-confirm]");
  if (firstSoundConfirmButton) {
    if (firstSoundConfirmButton.dataset.firstSoundConfirm === "yes" && pendingFirstSoundChoice) {
      const { choice, button } = pendingFirstSoundChoice;
      closeFirstSoundConfirmation();
      handleChoice(choice, button);
    } else {
      closeFirstSoundConfirmation();
      speak("Okay. Choose another letter.");
    }
    return;
  }

  const confirmButton = event.target.closest("[data-picture-confirm]");
  if (confirmButton) {
    if (confirmButton.dataset.pictureConfirm === "yes" && pendingPictureChoice) {
      const { choice, button } = pendingPictureChoice;
      closePictureChoiceConfirmation();
      handleChoice(choice, button);
    } else {
      closePictureChoiceConfirmation();
      speak("Okay. Choose another word.");
    }
    return;
  }

  const soundHuntAudioButton = event.target.closest("[data-sound-hunt-audio]");
  if (soundHuntAudioButton) {
    const index = Number(soundHuntAudioButton.dataset.soundHuntAudio);
    const activity = activeGame ? (activities[activeGame.worldId] || []).find((item) => item.id === activeGame.activityId) : null;
    const round = activity && activeGame ? activity.rounds[activeGame.roundIndex] : null;
    const choice = round?.soundHuntRound ? round.choices[index] : null;
    if (choice) {
      soundHuntAudioButton.classList.remove("is-speaking");
      void soundHuntAudioButton.offsetWidth;
      soundHuntAudioButton.classList.add("is-speaking");
      speak(choice.word, () => soundHuntAudioButton.classList.remove("is-speaking"));
    }
    return;
  }
  const soundHuntChoiceButton = event.target.closest("[data-sound-hunt-choice]");
  if (soundHuntChoiceButton) {
    handleSoundHuntChoice(Number(soundHuntChoiceButton.dataset.soundHuntChoice), soundHuntChoiceButton);
    return;
  }

  const speakPictureButton = event.target.closest("[data-speak-word]");
  if (speakPictureButton) {
    speak(speakPictureButton.dataset.speakWord);
    speakPictureButton.classList.remove("is-speaking");
    void speakPictureButton.offsetWidth;
    speakPictureButton.classList.add("is-speaking");
    return;
  }

  const startWordChoiceButton = event.target.closest("[data-start-word-choice]");
  if (startWordChoiceButton) {
    handleStartWordChoice(startWordChoiceButton.dataset.startWordChoice, startWordChoiceButton);
    return;
  }

  const buildResetButton = event.target.closest("[data-build-reset]");
  if (buildResetButton) {
    resetBuildWordRound();
    return;
  }

  const buildLetterButton = event.target.closest("[data-build-letter]");
  if (buildLetterButton) {
    handleBuildLetter(buildLetterButton.dataset.buildLetter, buildLetterButton);
    return;
  }

  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton) {
    const activity = activeGame
      ? (activities[activeGame.worldId] || []).find((item) => item.id === activeGame.activityId)
      : null;
    const round = activity && activeGame ? activity.rounds[activeGame.roundIndex] : null;

    if (round?.compareRound) {
      showCompareChoiceConfirmation(choiceButton.dataset.choice, choiceButton);
    } else if (round?.pictureMatchRound) {
      showPictureChoiceConfirmation(choiceButton.dataset.choice, choiceButton);
    } else if (round?.letterSoundRound) {
      showFirstSoundConfirmation(choiceButton.dataset.choice, choiceButton);
    } else if (round?.plantFoodRound) {
      handlePlantFoodChoice(choiceButton.dataset.choice, choiceButton);
    } else {
      handleChoice(choiceButton.dataset.choice, choiceButton);
    }
  }
});

soundButton.addEventListener("click", toggleSound);
soundButton.textContent = soundEnabled ? "🔊" : "🔇";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js?v=56", { updateViaCache: "none" })
      .then((registration) => {
        registration.update().catch(() => {});
        if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
      })
      .catch(() => {});
  });
}

updateStarCount();
renderHome();


function finishAppSplash() {
  const splash = document.getElementById("app-splash");
  const app = document.getElementById("app");

  if (!splash || !app) return;

  const minimumSplashMs = 1450;
  const startedAt = performance.now();

  const reveal = () => {
    const elapsed = performance.now() - startedAt;
    const wait = Math.max(0, minimumSplashMs - elapsed);

    window.setTimeout(() => {
      app.classList.remove("is-loading");
      splash.classList.add("is-hiding");

      window.setTimeout(() => {
        splash.remove();
      }, 500);
    }, wait);
  };

  if (document.readyState === "complete") {
    reveal();
  } else {
    window.addEventListener("load", reveal, { once: true });
  }
}

finishAppSplash();
