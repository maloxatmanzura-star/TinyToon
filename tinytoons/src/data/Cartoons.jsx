const palettes = [
  '#7c5cff',
  '#ff6fae',
  '#20b8d8',
  '#67b84f',
  '#ff9b55',
  '#6c72e8'
]

const art = (
  title,
  paletteIndex = 0,
  wide = false
) => {
  const color =
    palettes[paletteIndex % palettes.length]

  const background = wide
    ? '#17132e'
    : '#f2efff'

  const width = wide ? 1200 : 640
  const height = wide ? 500 : 400

  const fontSize = wide ? 54 : 34

  const textColor = wide
    ? '#ffffff'
    : '#312852'

  const mutedColor = wide
    ? '#dddddd'
    : '#756d89'

  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${width} ${height}"
    >
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          x2="1"
        >
          <stop stop-color="${color}" />
          <stop
            offset="1"
            stop-color="#ffd76b"
          />
        </linearGradient>
      </defs>

      <rect
        width="100%"
        height="100%"
        rx="32"
        fill="${background}"
      />

      <circle
        cx="${wide ? 180 : 120}"
        cy="100"
        r="${wide ? 70 : 55}"
        fill="url(#gradient)"
        opacity=".9"
      />

      <circle
        cx="${wide ? 980 : 520}"
        cy="${wide ? 360 : 290}"
        r="${wide ? 110 : 80}"
        fill="${color}"
        opacity=".2"
      />

      <path
        d="M${wide ? 300 : 190}
        ${wide ? 330 : 270}
        Q${wide ? 600 : 320}
        ${wide ? 120 : 100}
        ${wide ? 900 : 470}
        ${wide ? 290 : 250}"
        fill="none"
        stroke="${color}"
        stroke-width="24"
        stroke-linecap="round"
        opacity=".55"
      />

      <text
        x="50%"
        y="54%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Arial"
        font-weight="800"
        font-size="${fontSize}"
        fill="${textColor}"
      >
        ${title}
      </text>

      <text
        x="50%"
        y="67%"
        text-anchor="middle"
        font-family="Arial"
        font-size="${wide ? 22 : 16}"
        fill="${mutedColor}"
      >
        TinyToons Original • safe demo art
      </text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    svg
  )}`
}

const episode = (
  id,
  title,
  index
) => ({
  id,
  title,
  duration: `${6 + index}:0${index}`,
  thumbnail: art(
    `${title} • E${index}`,
    index
  ),
  videoUrl:
    'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
})

export const cartoons = [
  {
    id: 'lumi-lab',
    title: 'Lumi’s Little Lab',
    description:
      'Join Lumi and Pip as they test friendly ideas, ask big questions, and turn everyday objects into tiny science adventures.',
    image: art('Lumi’s Little Lab', 0),
    banner: art('Lumi’s Little Lab', 0, true),
    genre: 'Science',
    category: 'Educational',
    age: '7–9',
    duration: '12 min',
    rating: 4.9,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'l1',
        'The Bubble Mystery',
        1
      ),
      episode(
        'l2',
        'Rainbow in a Cup',
        2
      ),
      episode(
        'l3',
        'Magnet Friends',
        3
      )
    ]
  },

  {
    id: 'orbit-otters',
    title: 'Orbit Otters',
    description:
      'Three curious otters explore planets, comets, and cosmic surprises from their cozy floating clubhouse.',
    image: art('Orbit Otters', 1),
    banner: art(
      'Orbit Otters',
      1,
      true
    ),
    genre: 'Adventure',
    category: 'Space',
    age: '7–9',
    duration: '15 min',
    rating: 4.8,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'o1',
        'Moon Picnic',
        1
      ),
      episode(
        'o2',
        'Comet Chase',
        2
      ),
      episode(
        'o3',
        'Saturn Rings',
        3
      )
    ]
  },

  {
    id: 'dino-detectives',
    title: 'Dino Detectives',
    description:
      'Milo, Tia, and their tiny triceratops sidekick solve playful prehistoric mysteries.',
    image: art(
      'Dino Detectives',
      2
    ),
    banner: art(
      'Dino Detectives',
      2,
      true
    ),
    genre: 'Mystery',
    category: 'Dinosaurs',
    age: '4–6',
    duration: '11 min',
    rating: 4.7,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        'd1',
        'The Missing Egg',
        1
      ),
      episode(
        'd2',
        'Footprints!',
        2
      ),
      episode(
        'd3',
        'Volcano Day',
        3
      )
    ]
  },

  {
    id: 'cloudy-cafe',
    title: 'Cloudy Café',
    description:
      'A warm little café in the sky serves snacks, stories, and kindness to every passing cloud.',
    image: art(
      'Cloudy Café',
      3
    ),
    banner: art(
      'Cloudy Café',
      3,
      true
    ),
    genre: 'Stories',
    category: 'Funny',
    age: '4–6',
    duration: '9 min',
    rating: 4.6,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'c1',
        'Pancake Planet',
        1
      ),
      episode(
        'c2',
        'The Giggle Tea',
        2
      ),
      episode(
        'c3',
        'Rainy Recipe',
        3
      )
    ]
  },

  {
    id: 'pixel-pals',
    title: 'Pixel Pals',
    description:
      'Best friends Byte and Dot enter a colorful game world where teamwork unlocks every level.',
    image: art('Pixel Pals', 4),
    banner: art(
      'Pixel Pals',
      4,
      true
    ),
    genre: 'Comedy',
    category: 'Funny',
    age: '7–9',
    duration: '13 min',
    rating: 4.8,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        'p1',
        'Level One',
        1
      ),
      episode(
        'p2',
        'Puzzle Park',
        2
      ),
      episode(
        'p3',
        'Bossy Button',
        3
      )
    ]
  },

  {
    id: 'fairy-post',
    title: 'Fairy Post',
    description:
      'Nia delivers magical letters through a garden where flowers whisper clues and butterflies guide the way.',
    image: art('Fairy Post', 5),
    banner: art(
      'Fairy Post',
      5,
      true
    ),
    genre: 'Fantasy',
    category: 'Fantasy',
    age: '4–6',
    duration: '10 min',
    rating: 4.7,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'f1',
        'A Letter for Moonflower',
        1
      ),
      episode(
        'f2',
        'Butterfly Express',
        2
      ),
      episode(
        'f3',
        'Garden Parade',
        3
      )
    ]
  },

  {
    id: 'number-nook',
    title: 'Number Nook',
    description:
      'Friendly characters make counting, patterns, and simple maths feel like a game.',
    image: art(
      'Number Nook',
      0
    ),
    banner: art(
      'Number Nook',
      0,
      true
    ),
    genre: 'Math',
    category: 'Math',
    age: '7–9',
    duration: '8 min',
    rating: 4.9,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        'n1',
        'Count the Stars',
        1
      ),
      episode(
        'n2',
        'Pattern Party',
        2
      ),
      episode(
        'n3',
        'Shape Hunt',
        3
      )
    ]
  },

  {
    id: 'word-wiggles',
    title: 'Word Wiggles',
    description:
      'Learn useful English words with songs, silly situations, and mini challenges.',
    image: art(
      'Word Wiggles',
      1
    ),
    banner: art(
      'Word Wiggles',
      1,
      true
    ),
    genre: 'English',
    category: 'Music',
    age: '7–9',
    duration: '9 min',
    rating: 4.8,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'w1',
        'Hello, Friends!',
        1
      ),
      episode(
        'w2',
        'Animal Words',
        2
      ),
      episode(
        'w3',
        'Around Town',
        3
      )
    ]
  },

  {
    id: 'ghost-giggles',
    title: 'Ghost Giggles',
    description:
      'Three friendly ghosts discover that being spooky can also be silly, kind, and surprisingly musical.',
    image: art(
      'Ghost Giggles',
      2
    ),
    banner: art(
      'Ghost Giggles',
      2,
      true
    ),
    genre: 'Comedy',
    category: 'Funny',
    age: '7–9',
    duration: '12 min',
    rating: 4.5,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        'g1',
        'Boo at Breakfast',
        1
      ),
      episode(
        'g2',
        'The Invisible Hat',
        2
      ),
      episode(
        'g3',
        'Moonlight Band',
        3
      )
    ]
  },

  {
    id: 'ocean-orchestra',
    title: 'Ocean Orchestra',
    description:
      'Sea friends form a musical team and learn how every sound can make a beautiful rhythm.',
    image: art(
      'Ocean Orchestra',
      3
    ),
    banner: art(
      'Ocean Orchestra',
      3,
      true
    ),
    genre: 'Music',
    category: 'Music',
    age: '4–6',
    duration: '10 min',
    rating: 4.6,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'm1',
        'Bubble Beat',
        1
      ),
      episode(
        'm2',
        'Coral Choir',
        2
      ),
      episode(
        'm3',
        'Whale Song',
        3
      )
    ]
  },

  {
    id: 'shape-shack',
    title: 'Shape Shack',
    description:
      'Triangles, circles, and squares become characters in a playful world of puzzles and building.',
    image: art(
      'Shape Shack',
      4
    ),
    banner: art(
      'Shape Shack',
      4,
      true
    ),
    genre: 'Educational',
    category: 'Colors & Shapes',
    age: '4–6',
    duration: '8 min',
    rating: 4.7,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        's1',
        'Circle City',
        1
      ),
      episode(
        's2',
        'Triangle Train',
        2
      ),
      episode(
        's3',
        'Shape Surprise',
        3
      )
    ]
  },

  {
    id: 'jungle-jam',
    title: 'Jungle Jam',
    description:
      'A lively jungle band learns about animals while making music together.',
    image: art(
      'Jungle Jam',
      5
    ),
    banner: art(
      'Jungle Jam',
      5,
      true
    ),
    genre: 'Animals',
    category: 'Animals',
    age: '4–6',
    duration: '11 min',
    rating: 4.5,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        'j1',
        'Monkey Drums',
        1
      ),
      episode(
        'j2',
        'Parrot Piano',
        2
      ),
      episode(
        'j3',
        'Tiger Tempo',
        3
      )
    ]
  },

  {
    id: 'rocket-roo',
    title: 'Rocket Roo',
    description:
      'Roo builds confidence by solving small problems during big space missions with friends.',
    image: art(
      'Rocket Roo',
      0
    ),
    banner: art(
      'Rocket Roo',
      0,
      true
    ),
    genre: 'Adventure',
    category: 'Space',
    age: '7–9',
    duration: '14 min',
    rating: 4.9,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'r1',
        'Launch Day',
        1
      ),
      episode(
        'r2',
        'Lost Satellite',
        2
      ),
      episode(
        'r3',
        'Homeward Zoom',
        3
      )
    ]
  },

  {
    id: 'rainbow-recipes',
    title: 'Rainbow Recipes',
    description:
      'Colorful foods become a fun way to explore colors, textures, counting, and kitchen vocabulary.',
    image: art(
      'Rainbow Recipes',
      1
    ),
    banner: art(
      'Rainbow Recipes',
      1,
      true
    ),
    genre: 'Stories',
    category: 'Educational',
    age: '7–9',
    duration: '10 min',
    rating: 4.4,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        'rr1',
        'Red & Round',
        1
      ),
      episode(
        'rr2',
        'Crunchy Colors',
        2
      ),
      episode(
        'rr3',
        'Rainbow Plate',
        3
      )
    ]
  },

  {
    id: 'cozy-crew',
    title: 'Cozy Crew',
    description:
      'A group of plush friends solve everyday problems with patience, imagination, and teamwork.',
    image: art(
      'Cozy Crew',
      2
    ),
    banner: art(
      'Cozy Crew',
      2,
      true
    ),
    genre: 'Stories',
    category: 'Stories',
    age: '0–3',
    duration: '7 min',
    rating: 4.8,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'z1',
        'Blanket Fort',
        1
      ),
      episode(
        'z2',
        'Where Is Bear?',
        2
      ),
      episode(
        'z3',
        'Sleepy Stars',
        3
      )
    ]
  },

  {
    id: 'candy-capers',
    title: 'Candy Capers',
    description:
      'Sweet little heroes race through a candy world where every puzzle has a creative solution.',
    image: art(
      'Candy Capers',
      3
    ),
    banner: art(
      'Candy Capers',
      3,
      true
    ),
    genre: 'Adventure',
    category: 'Adventure',
    age: '7–9',
    duration: '13 min',
    rating: 4.6,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'cc1',
        'Lollipop Bridge',
        1
      ),
      episode(
        'cc2',
        'Gummy Maze',
        2
      ),
      episode(
        'cc3',
        'Marshmallow Mountain',
        3
      )
    ]
  },

  {
    id: 'logic-lounge',
    title: 'Logic Lounge',
    description:
      'Brainy mini-games introduce sequences, sorting, matching, and gentle logic challenges.',
    image: art(
      'Logic Lounge',
      4
    ),
    banner: art(
      'Logic Lounge',
      4,
      true
    ),
    genre: 'Logic',
    category: 'Logic',
    age: '10–12',
    duration: '12 min',
    rating: 4.9,
    year: 2025,
    isNew: false,
    episodes: [
      episode(
        'll1',
        'What Comes Next?',
        1
      ),
      episode(
        'll2',
        'Sort It Out',
        2
      ),
      episode(
        'll3',
        'Secret Pattern',
        3
      )
    ]
  },

  {
    id: 'starry-stories',
    title: 'Starry Stories',
    description:
      'Soft bedtime tales travel from tiny villages to faraway stars, one gentle story at a time.',
    image: art(
      'Starry Stories',
      5
    ),
    banner: art(
      'Starry Stories',
      5,
      true
    ),
    genre: 'Fantasy',
    category: 'Stories',
    age: '4–6',
    duration: '9 min',
    rating: 4.7,
    year: 2026,
    isNew: true,
    episodes: [
      episode(
        'ss1',
        'The Sleepy Star',
        1
      ),
      episode(
        'ss2',
        'Moon Garden',
        2
      ),
      episode(
        'ss3',
        'Cloud Boat',
        3
      )
    ]
  }
]

export const categories = [
  'Adventure',
  'Animals',
  'Funny',
  'Fantasy',
  'Space',
  'Dinosaurs',
  'Music',
  'Educational',
  'Math',
  'Science',
  'Logic',
  'Stories',
  'Colors & Shapes'
]

export const educational = [
  {
    id: 'alphabet',
    title: 'Alphabet Adventures',
    emoji: '🔤',
    text: 'Letters, sounds, and playful word games.'
  },
  {
    id: 'numbers',
    title: 'Number Quest',
    emoji: '🔢',
    text: 'Counting and number sense through mini games.'
  },
  {
    id: 'math',
    title: 'Math Playground',
    emoji: '➗',
    text: 'Addition, patterns, shapes, and multiplication.'
  },
  {
    id: 'colors',
    title: 'Colors & Shapes',
    emoji: '🟣',
    text: 'Discover colors, shapes, and visual patterns.'
  },
  {
    id: 'animals',
    title: 'Animal Explorer',
    emoji: '🦊',
    text: 'Meet animals and learn surprising facts.'
  },
  {
    id: 'english',
    title: 'English Club',
    emoji: '💬',
    text: 'Vocabulary and simple everyday English.'
  },
  {
    id: 'science',
    title: 'Tiny Science',
    emoji: '🧪',
    text: 'Friendly experiments and big questions.'
  },
  {
    id: 'logic',
    title: 'Logic Lab',
    emoji: '🧩',
    text: 'Sequences, sorting, matching, and reasoning.'
  }
]