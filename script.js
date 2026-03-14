const vocab = [
  {
    slug: "a_power_station",
    word: "a power station",
    ru: "электростанция",
    pron: "[ə 'paʊə ˌsteɪʃn]",
    emoji: "🏭"
  },
  {
    slug: "factory",
    word: "factory",
    ru: "завод",
    pron: "['fæktəri]",
    emoji: "🏭"
  },
  {
    slug: "toxic_fumes",
    word: "toxic fumes",
    ru: "токсичные выбросы",
    pron: "['tɒksɪk 'fjuːmz]",
    emoji: "💨"
  },
  {
    slug: "factory_waste",
    word: "factory waste",
    ru: "промышленные отходы",
    pron: "['fæktəri weɪst]",
    emoji: "🛢️"
  },
  {
    slug: "acid_rain",
    word: "acid rain",
    ru: "кислотный дождь",
    pron: "['æsɪd reɪn]",
    emoji: "🌧️"
  },
  {
    slug: "polluted_clouds",
    word: "polluted clouds",
    ru: "загрязнённые облака",
    pron: "[pə'luːtɪd klaʊdz]",
    emoji: "☁️"
  },
  {
    slug: "loss_of_natural_habitats",
    word: "loss of natural habitats",
    ru: "потеря мест обитания",
    pron: "[lɒs əv 'næʧrəl 'hæbɪtæts]",
    emoji: "🪵"
  },
  {
    slug: "air_water_and_soil_pollution",
    word: "air, water and soil pollution",
    ru: "загрязнение воздуха, воды и почвы",
    pron: "[pəˈluːʃn]",
    emoji: "🌍"
  },
  {
    slug: "fish_and_plant_species_dying",
    word: "fish and plant species dying",
    ru: "гибель видов рыб и растений",
    pron: "['spiːʃiːz ˈdaɪɪŋ]",
    emoji: "🐟"
  },
  {
    slug: "burn",
    word: "burn",
    ru: "сжигать",
    pron: "[bɜːn]",
    emoji: "🔥"
  },
  {
    slug: "emit",
    word: "emit",
    ru: "выделять",
    pron: "[ɪˈmɪt]",
    emoji: "💨"
  },
  {
    slug: "oxygen",
    word: "oxygen",
    ru: "кислород",
    pron: "['ɒksɪdʒən]",
    emoji: "🍃"
  },
  {
    slug: "atmosphere",
    word: "atmosphere",
    ru: "атмосфера",
    pron: "['ætməsfɪə]",
    emoji: "🌐"
  },
  {
    slug: "land_verb",
    word: "land (verb)",
    ru: "приземляться",
    pron: "[lænd]",
    emoji: "🛬"
  },
  {
    slug: "sleet",
    word: "sleet",
    ru: "мокрый снег",
    pron: "[sliːt]",
    emoji: "🌨️"
  },
  {
    slug: "wipe_out",
    word: "wipe out",
    ru: "уничтожить",
    pron: "[waɪp aʊt]",
    emoji: "💥"
  },
  {
    slug: "poison",
    word: "poison (verb)",
    ru: "отравлять",
    pron: "['pɔɪzn]",
    emoji: "☠️"
  },
  {
    slug: "reduce",
    word: "reduce",
    ru: "уменьшать",
    pron: "[rɪ'djuːs]",
    emoji: "📉"
  },
  {
    slug: "harmful",
    word: "harmful",
    ru: "вредный",
    pron: "['hɑːmfʊl]",
    emoji: "⚠️"
  },
  {
    slug: "solar_power",
    word: "solar power",
    ru: "солнечная энергия",
    pron: "['səʊlə 'paʊə]",
    emoji: "☀️"
  },
  {
    slug: "heat",
    word: "heat",
    ru: "жара; нагревать",
    pron: "[hiːt]",
    emoji: "🌡️"
  },
  {
    slug: "plant_flowers",
    word: "plant flowers",
    ru: "сажать цветы",
    pron: "[plɑːnt 'flaʊəz]",
    emoji: "🌷"
  },
  {
    slug: "recycle_cans",
    word: "recycle cans",
    ru: "перерабатывать банки",
    pron: "[riː'saɪkl kænz]",
    emoji: "♻️"
  },
  {
    slug: "collect_rubbish",
    word: "collect rubbish",
    ru: "собирать мусор",
    pron: "[kə'lekt 'rʌbɪʃ]",
    emoji: "🗑️"
  },
  {
    slug: "build_nesting_boxes",
    word: "build nesting boxes",
    ru: "строить скворечники",
    pron: "[bɪld 'nɛstɪŋ 'bɒksɪz]",
    emoji: "🐦"
  },
  {
    slug: "teach_the_cycle_of_life",
    word: "teach the cycle of life",
    ru: "учить циклу жизни",
    pron: "[tiːʧ ðə 'saɪkl əv laɪf]",
    emoji: "🔄"
  },
  {
    slug: "clean_out_a_pond",
    word: "clean out a pond",
    ru: "вычистить пруд",
    pron: "[kliːn aʊt ə pɒnd]",
    emoji: "🦆"
  },
  {
    slug: "read_a_book_about_ecology",
    word: "read a book about ecology",
    ru: "читать книгу об экологии",
    pron: "[riːd ə bʊk ə'baʊt ɪ'kɒlədʒi]",
    emoji: "📖"
  },
  {
    slug: "a_ladder",
    word: "a ladder",
    ru: "лестница",
    pron: "[ə 'lædə]",
    emoji: "🪜"
  },
  {
    slug: "hammer_and_nails",
    word: "a hammer and nails",
    ru: "молоток и гвозди",
    pron: "[ə 'hæmə ənd neɪlz]",
    emoji: "🔨"
  },
  {
    slug: "a_spade",
    word: "a spade",
    ru: "лопата",
    pron: "[ə speɪd]",
    emoji: "⛏️"
  },
  {
    slug: "a_watering_can",
    word: "a watering can",
    ru: "лейка",
    pron: "[ə 'wɔːtərɪŋ kæn]",
    emoji: "🚿"
  },
  {
    slug: "a_rake",
    word: "a rake",
    ru: "грабли",
    pron: "[ə reɪk]",
    emoji: "🍂"
  },
  {
    slug: "a_net",
    word: "a net",
    ru: "сачок; сеть",
    pron: "[ə net]",
    emoji: "🕸️"
  },
  {
    slug: "gardening_gloves",
    word: "gardening gloves",
    ru: "садовые перчатки",
    pron: "['gɑːdnɪŋ glʌvz]",
    emoji: "🧤"
  },
  {
    slug: "plastic_bag",
    word: "a plastic bag",
    ru: "пластиковый пакет",
    pron: "[ə 'plæstɪk bæg]",
    emoji: "🛍️"
  },
  {
    slug: "leave_left",
    word: "leave / left",
    ru: "оставлять / покидать",
    pron: "[liːv / left]",
    emoji: "🚶"
  },
  {
    slug: "woods",
    word: "woods",
    ru: "лес",
    pron: "[wʊdz]",
    emoji: "🌲"
  },
  {
    slug: "tropical_rainforest",
    word: "tropical rainforest",
    ru: "тропический лес",
    pron: "['trɒpɪkəl 'reɪnfɒrɪst]",
    emoji: "🌴"
  },
  {
    slug: "desert",
    word: "desert",
    ru: "пустыня",
    pron: "['dezət]",
    emoji: "🏜️"
  },
  {
    slug: "polar_regions",
    word: "polar regions",
    ru: "полярные регионы",
    pron: "['pəʊlə 'riːdʒənz]",
    emoji: "🧊"
  },
  {
    slug: "wetlands",
    word: "wetlands",
    ru: "болота",
    pron: "['wetləndz]",
    emoji: "🐸"
  },
  {
    slug: "savannah",
    word: "savannah",
    ru: "саванна",
    pron: "[sə'vænə]",
    emoji: "🦁"
  }
];

const contextTasks = [
  {
    type: "input",
    question: "Factories usually _____ thick, black _____ into the air.",
    answers: ["emit toxic fumes", "emit fumes"],
    explanation: "Правильный ответ: <b>emit toxic fumes</b>, потому что заводы выделяют токсичные выбросы."
  },
  {
    type: "mcq",
    question: "Trees give us ...",
    options: ["factory waste", "oxygen", "acid rain"],
    correctIndex: 1,
    explanation: "Правильный ответ: <b>oxygen</b>. Деревья производят кислород."
  },
  {
    type: "input",
    question: "Pollution leads to the _____ of _____ _____ for wild animals.",
    answers: ["loss of natural habitats"],
    explanation: "Нужно выражение <b>loss of natural habitats</b> — потеря мест обитания."
  },
  {
    type: "mcq",
    question: "Which tool is used to water flowers?",
    options: ["a rake", "a watering can", "a hammer and nails"],
    correctIndex: 1,
    explanation: "Для полива используют <b>a watering can</b>."
  },
  {
    type: "input",
    question: "Many houses use _____ _____ to get electricity from the sun.",
    answers: ["solar power"],
    explanation: "Электричество от солнца — это <b>solar power</b>."
  },
  {
    type: "mcq",
    question: "Which place is very dry and covered with sand?",
    options: ["wetlands", "desert", "woods"],
    correctIndex: 1,
    explanation: "Сухая местность с песком — это <b>desert</b>."
  },
  {
    type: "input",
    question: "Children can _____ _____ _____ on trees to help birds.",
    answers: ["build nesting boxes"],
    explanation: "Для птиц дети могут <b>build nesting boxes</b>."
  },
  {
    type: "mcq",
    question: "A place with ice, snow and very cold weather is ...",
    options: ["savannah", "polar regions", "tropical rainforest"],
    correctIndex: 1,
    explanation: "<b>Polar regions</b> — это очень холодные регионы со льдом и снегом."
  },
  {
    type: "input",
    question: "You should _____ _____ after a picnic and leave the park clean.",
    answers: ["collect rubbish"],
    explanation: "После пикника нужно <b>collect rubbish</b>."
  },
  {
    type: "mcq",
    question: "A tropical green forest with lots of rain is ...",
    options: ["tropical rainforest", "factory", "power station"],
    correctIndex: 0,
    explanation: "Правильный ответ — <b>tropical rainforest</b>."
  },
  {
    type: "input",
    question: "A mix of rain and snow is called _____.",
    answers: ["sleet"],
    explanation: "<b>Sleet</b> — это мокрый снег."
  },
  {
    type: "mcq",
    question: "Which action is eco-friendly?",
    options: ["burn rubbish", "recycle cans", "poison water"],
    correctIndex: 1,
    explanation: "<b>Recycle cans</b> — экологичное действие."
  }
];

const grammarTopics = [
  {
    key: "ppc",
    title: "Present Perfect Continuous",
    short: "PPC",
    rule: `
      <b>Form:</b> have / has + been + V-ing<br>
      <b>Use:</b> action started in the past and is still continuing now, or we focus on the duration.<br><br>
      <b>Affirmative:</b> I <b>have been planting</b> flowers.<br>
      <b>Negative:</b> He <b>hasn't been recycling</b>.<br>
      <b>Question:</b> <b>Have</b> you <b>been cleaning</b> the pond?
    `,
    tasks: [
      {
        type: "input",
        question: "<b>(+)</b> I _______ (plant) flowers for two hours.",
        answers: ["have been planting"],
        explanation: "С местоимением <b>I</b> используем <b>have been + V-ing</b> → <b>have been planting</b>."
      },
      {
        type: "mcq",
        question: "<b>(+)</b> She _______ the pond since morning.",
        options: ["has cleaned", "has been cleaning", "is cleaning"],
        correctIndex: 1,
        explanation: "Действие началось утром и продолжается, поэтому <b>has been cleaning</b>."
      },
      {
        type: "input",
        question: "<b>(-)</b> They _______ (not / collect) rubbish recently.",
        answers: ["haven't been collecting", "have not been collecting", "havent been collecting"],
        explanation: "Для <b>they</b> отрицание: <b>haven't been collecting</b>."
      },
      {
        type: "input",
        question: "<b>(-)</b> He _______ (not / emit) fumes all day.",
        answers: ["hasn't been emitting", "has not been emitting", "hasnt been emitting"],
        explanation: "Для <b>he</b> используем <b>hasn't been emitting</b>."
      },
      {
        type: "input",
        question: "<b>(?)</b> _______ you _______ (work) in the garden all afternoon?",
        answers: ["have been working", "have you been working"],
        explanation: "Вопрос строится так: <b>Have you been working...?</b>"
      },
      {
        type: "input",
        question: "<b>(?)</b> _______ she _______ (read) a book about ecology?",
        answers: ["has been reading", "has she been reading"],
        explanation: "Для <b>she</b>: <b>Has she been reading...?</b>"
      },
      {
        type: "mcq",
        question: "Look at their dirty clothes! They _______ in the woods.",
        options: ["have been working", "has been working", "were working"],
        correctIndex: 0,
        explanation: "По результату сейчас (грязная одежда) подходит <b>have been working</b>."
      },
      {
        type: "mcq",
        question: "Which sentence is Present Perfect Continuous?",
        options: [
          "She has cleaned the pond.",
          "She has been cleaning the pond.",
          "She cleaned the pond yesterday."
        ],
        correctIndex: 1,
        explanation: "Форма PPC — <b>has been cleaning</b>."
      }
    ]
  },
  {
    key: "phrasal",
    title: "Phrasal Verbs: make up, make up with, make out",
    short: "Phrasal verbs",
    rule: `
      <b>make up</b> = invent / create a story or excuse<br>
      <b>make up with</b> = become friends again / reconcile<br>
      <b>make out</b> = understand or read with difficulty
    `,
    tasks: [
      {
        type: "mcq",
        question: "I couldn't _______ what the sign said because it was too small.",
        options: ["make out", "make up", "make up with"],
        correctIndex: 0,
        explanation: "<b>Make out</b> значит «разобрать, понять с трудом»."
      },
      {
        type: "input",
        question: "She didn't want to go, so she _______ an excuse.",
        answers: ["made up"],
        explanation: "<b>Make up</b> в Past Simple → <b>made up</b>."
      },
      {
        type: "input",
        question: "They argued yesterday, but later they _______ each other.",
        answers: ["made up with", "made up"],
        explanation: "Помирились = <b>made up with</b> each other."
      },
      {
        type: "mcq",
        question: "Don't believe him. He likes to _______ stories.",
        options: ["make up", "make out", "make up with"],
        correctIndex: 0,
        explanation: "<b>Make up</b> = придумывать истории."
      },
      {
        type: "mcq",
        question: "Which phrasal verb means 'reconcile'?",
        options: ["make out", "make up with", "make up"],
        correctIndex: 1,
        explanation: "<b>Make up with</b> = помириться."
      },
      {
        type: "input",
        question: "Can you _______ the words on that poster from here?",
        answers: ["make out"],
        explanation: "Если нужно что-то еле разобрать, используется <b>make out</b>."
      },
      {
        type: "mcq",
        question: "Which sentence is correct?",
        options: [
          "They made out after the fight.",
          "They made up with after the fight.",
          "They made up with each other after the fight."
        ],
        correctIndex: 2,
        explanation: "Нужно полное выражение: <b>made up with each other</b>."
      },
      {
        type: "input",
        question: "He _______ a funny story about a talking tree. (Past Simple)",
        answers: ["made up"],
        explanation: "Придумал историю = <b>made up</b>."
      }
    ]
  },
  {
    key: "modals",
    title: "Modal verbs + Question Tags",
    short: "Modals & tags",
    rule: `
      <b>have to / has to</b> = obligation, necessity<br>
      <b>don't have to / doesn't have to</b> = no necessity<br><br>
      <b>Examples:</b><br>
      We <b>have to</b> recycle.<br>
      She <b>has to</b> clean the pond.<br>
      You <b>don't have to</b> buy a plastic bag.<br>
      He <b>doesn't have to</b> come early.<br><br>
      <b>Question tags:</b><br>
      affirmative sentence → negative tag<br>
      negative sentence → affirmative tag
    `,
    tasks: [
      {
        type: "mcq",
        question: "You _______ wear gloves when collecting dirty rubbish.",
        options: ["have to", "don't have to", "has to"],
        correctIndex: 0,
        explanation: "Здесь есть необходимость, поэтому <b>have to</b>."
      },
      {
        type: "mcq",
        question: "It's a holiday, so we _______ go to school.",
        options: ["don't have to", "have to", "has to"],
        correctIndex: 0,
        explanation: "Если нет необходимости, используем <b>don't have to</b>."
      },
      {
        type: "input",
        question: "She _______ clean out the pond tomorrow. (obligation)",
        answers: ["has to"],
        explanation: "С <b>she</b> используем <b>has to</b>."
      },
      {
        type: "input",
        question: "He _______ bring a plastic bag. He can use a cloth bag. (no necessity)",
        answers: ["doesn't have to", "does not have to", "doesnt have to"],
        explanation: "Нет необходимости → <b>doesn't have to</b>."
      },
      {
        type: "input",
        question: "They have to recycle cans, _______?",
        answers: ["don't they", "dont they"],
        explanation: "Утверждение → отрицательный хвостик: <b>don't they?</b>"
      },
      {
        type: "input",
        question: "She doesn't have to plant flowers, _______?",
        answers: ["does she"],
        explanation: "Отрицание → положительный хвостик: <b>does she?</b>"
      },
      {
        type: "mcq",
        question: "Which sentence means 'не обязательно'?",
        options: [
          "You have to recycle.",
          "You don't have to recycle today.",
          "You has to recycle."
        ],
        correctIndex: 1,
        explanation: "<b>Don't have to</b> = не обязательно."
      },
      {
        type: "mcq",
        question: "Choose the correct question tag: He has to help, ...?",
        options: ["hasn't he", "doesn't he", "don't he"],
        correctIndex: 1,
        explanation: "С конструкцией <b>has to</b> используем вспомогательный <b>does</b> → <b>doesn't he?</b>"
      },
      {
        type: "input",
        question: "I have to finish the poster, _______?",
        answers: ["don't i", "dont i"],
        explanation: "После <b>I have to...</b> хвостик: <b>don't I?</b>"
      },
      {
        type: "mcq",
        question: "We _______ buy new bottles — we can reuse old ones.",
        options: ["have to", "don't have to", "has to"],
        correctIndex: 1,
        explanation: "Если можно обойтись без этого, говорим <b>don't have to</b>."
      }
    ]
  }
];

const finalTest = [
  {
    type: "mcq",
    question: "Which tool goes with nails?",
    options: ["a spade", "a hammer and nails", "a rake"],
    correctIndex: 1,
    explanation: "Правильный ответ: <b>a hammer and nails</b>."
  },
  {
    type: "input",
    question: "Acid rain can _______ entire woods.",
    answers: ["wipe out"],
    explanation: "<b>Wipe out</b> = уничтожить полностью."
  },
  {
    type: "mcq",
    question: "A power station can emit ...",
    options: ["oxygen", "toxic fumes", "sleet"],
    correctIndex: 1,
    explanation: "Электростанция может выделять <b>toxic fumes</b>."
  },
  {
    type: "input",
    question: "Write the negative PPC: We _______ (not / recycle) cans.",
    answers: ["haven't been recycling", "have not been recycling", "havent been recycling"],
    explanation: "Правильно: <b>haven't been recycling</b>."
  },
  {
    type: "mcq",
    question: "I can't _______ what the sign says.",
    options: ["make out", "make up", "make up with"],
    correctIndex: 0,
    explanation: "<b>Make out</b> = разобрать с трудом."
  },
  {
    type: "input",
    question: "Question tag: You don't have to go, _______?",
    answers: ["do you"],
    explanation: "После отрицания нужен положительный хвостик: <b>do you?</b>"
  },
  {
    type: "mcq",
    question: "Instead of burning rubbish, we should ...",
    options: ["recycle cans", "poison water", "emit fumes"],
    correctIndex: 0,
    explanation: "Экологичный вариант — <b>recycle cans</b>."
  },
  {
    type: "input",
    question: "What falls from polluted clouds? (two words)",
    answers: ["acid rain"],
    explanation: "Из загрязнённых облаков может идти <b>acid rain</b>."
  },
  {
    type: "mcq",
    question: "They argued but later they _______ each other.",
    options: ["made up", "made out", "made up with"],
    correctIndex: 2,
    explanation: "Помирились = <b>made up with</b>."
  },
  {
    type: "input",
    question: "PPC question: _______ she _______ (plant) flowers?",
    answers: ["has she been planting", "has been planting"],
    explanation: "Правильная форма вопроса: <b>Has she been planting...?</b>"
  },
  {
    type: "mcq",
    question: "Which is NOT an ecosystem?",
    options: ["wetlands", "factory waste", "savannah"],
    correctIndex: 1,
    explanation: "<b>Factory waste</b> — это отходы, а не экосистема."
  },
  {
    type: "input",
    question: "To protect your hands in the garden, wear _______ _______.",
    answers: ["gardening gloves"],
    explanation: "Нужно выражение <b>gardening gloves</b>."
  },
  {
    type: "mcq",
    question: "You _______ buy a plastic bag if you already have a cloth one.",
    options: ["don't have to", "has to", "have to"],
    correctIndex: 0,
    explanation: "Нет необходимости → <b>don't have to</b>."
  },
  {
    type: "input",
    question: "Question tag: She has to clean out a pond, _______?",
    answers: ["doesn't she", "doesnt she"],
    explanation: "С <b>has to</b> хвостик: <b>doesn't she?</b>"
  },
  {
    type: "input",
    question: "A mix of rain and snow is called _______.",
    answers: ["sleet"],
    explanation: "<b>Sleet</b> — мокрый снег."
  },
  {
    type: "mcq",
    question: "Make up means ...",
    options: ["reconcile", "invent", "understand with difficulty"],
    correctIndex: 1,
    explanation: "<b>Make up</b> = придумывать."
  },
  {
    type: "mcq",
    question: "Choose the correct PPC form:",
    options: [
      "He has been working in the garden.",
      "He have been working in the garden.",
      "He been working in the garden."
    ],
    correctIndex: 0,
    explanation: "Для <b>he</b> нужна форма <b>has been working</b>."
  },
  {
    type: "input",
    question: "A large hot place with sand is a _______.",
    answers: ["desert"],
    explanation: "Пустыня по-английски — <b>desert</b>."
  },
  {
    type: "mcq",
    question: "Which activity helps birds most directly?",
    options: ["build nesting boxes", "burn leaves", "emit fumes"],
    correctIndex: 0,
    explanation: "<b>Build nesting boxes</b> помогает птицам."
  },
  {
    type: "input",
    question: "Houses can get energy from the sun using _______ _______.",
    answers: ["solar power"],
    explanation: "Энергия солнца — это <b>solar power</b>."
  }
];

const state = {
  currentPage: "vocab",
  currentGrammarIndex: 0,
  testAnswers: {}
};

function $(selector) {
  return document.querySelector(selector);
}

function createEl(tag, className, html) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (html !== undefined) el.innerHTML = html;
  return el;
}

function normalise(text) {
  return String(text)
    .toLowerCase()
    .replace(/[.,?!:;'"’`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function answerMatches(userValue, answers) {
  const value = normalise(userValue);
  return answers.some(answer => normalise(answer) === value);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("ecoTheme", theme);
  $("#themeToggleIcon").textContent = theme === "dark" ? "🌞" : "🌙";
}

function initTheme() {
  const saved = localStorage.getItem("ecoTheme") || "light";
  setTheme(saved);
  $("#themeToggle").addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") || "light";
    setTheme(current === "light" ? "dark" : "light");
  });
}

function setPage(pageName) {
  state.currentPage = pageName;
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  $(`#page-${pageName}`).classList.remove("hidden");
  document.querySelector(`.nav-btn[data-page="${pageName}"]`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initNavigation() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => setPage(btn.dataset.page));
  });
  $("#brandHome").addEventListener("click", (e) => {
    e.preventDefault();
    setPage("vocab");
  });
}

function renderVocabulary() {
  const container = $("#flashcards");
  container.innerHTML = "";

  vocab.forEach((item, index) => {
    const card = createEl("article", "flip-card");
    card.style.animationDelay = `${index * 0.03}s`;

    const inner = createEl("div", "flip-inner");

    const front = createEl("div", "card-face card-front");
    front.innerHTML = `
      <div class="card-topline">
        <div class="card-index">${index + 1}</div>
        <div class="card-badge">Front side</div>
      </div>
      <div class="card-word">${item.word}</div>
      <button type="button" class="sound-btn" aria-label="Play pronunciation">🔊</button>
      <div class="card-tip">
        Click to flip<br>
        <span class="click-note">✨ word first → picture after flip</span>
      </div>
    `;

    const back = createEl("div", "card-face card-back");
    back.innerHTML = `
      <img class="card-image" src="images/${item.slug}.svg" alt="${item.word}" />
      <div class="card-translation">${item.ru}</div>
      <div class="card-pron">${item.pron}</div>
      <div class="click-note">🔁 Click again to return</div>
    `;

    inner.append(front, back);
    card.appendChild(inner);

    front.querySelector(".sound-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      speak(item.word.replace(" / ", " "));
    });

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    container.appendChild(card);
  });
}

function setFeedback(feedbackEl, isCorrect, html) {
  feedbackEl.className = `feedback show ${isCorrect ? "success" : "error"}`;
  feedbackEl.innerHTML = html;
}

function animateTaskCard(card, isCorrect) {
  card.classList.remove("correct-glow", "wrong-glow");
  void card.offsetWidth;
  card.classList.add(isCorrect ? "correct-glow" : "wrong-glow");
}

function buildLearningTask(task, index, keyPrefix) {
  const card = createEl("article", "task-card");
  const head = createEl("div", "task-head");
  head.innerHTML = `
    <div class="task-number">${index + 1}</div>
    <div class="task-question">${task.question}</div>
  `;
  card.appendChild(head);

  const feedback = createEl("div", "feedback");

  if (task.type === "input") {
    const controls = createEl("div", "task-controls");

    const input = createEl("input", "text-answer");
    input.type = "text";
    input.placeholder = "Type your answer...";
    input.autocomplete = "off";

    const btn = createEl("button", "check-btn", "Check");
    btn.type = "button";

    const runCheck = () => {
      const userValue = input.value;
      const correct = answerMatches(userValue, task.answers);

      input.classList.remove("ok", "bad");
      if (correct) {
        input.classList.add("ok");
        animateTaskCard(card, true);
        setFeedback(
          feedback,
          true,
          `<strong>✅ Correct!</strong><br>${task.explanation}`
        );
      } else {
        input.classList.add("bad");
        animateTaskCard(card, false);
        setFeedback(
          feedback,
          false,
          `<strong>❌ Not quite.</strong><br>${task.explanation}<br><b>Try again.</b>`
        );
      }
    };

    btn.addEventListener("click", runCheck);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") runCheck();
    });

    controls.append(input, btn);
    card.append(controls, feedback);
  } else {
    const grid = createEl("div", "choice-grid");
    grid.dataset.locked = "false";

    task.options.forEach((option, optionIndex) => {
      const btn = createEl("button", "choice-btn", option);
      btn.type = "button";

      btn.addEventListener("click", () => {
        if (grid.dataset.locked === "true") return;

        const correct = optionIndex === task.correctIndex;

        if (correct) {
          grid.dataset.locked = "true";
          [...grid.children].forEach((child, i) => {
            child.disabled = true;
            if (i === optionIndex) child.classList.add("correct");
          });
          animateTaskCard(card, true);
          setFeedback(
            feedback,
            true,
            `<strong>✅ Correct!</strong><br>${task.explanation}`
          );
        } else {
          btn.classList.add("temp-wrong");
          animateTaskCard(card, false);
          setFeedback(
            feedback,
            false,
            `<strong>❌ Not quite.</strong><br>${task.explanation}<br><b>Choose another option.</b>`
          );
          setTimeout(() => btn.classList.remove("temp-wrong"), 650);
        }
      });

      grid.appendChild(btn);
    });

    card.append(grid, feedback);
  }

  return card;
}

function renderContext() {
  const container = $("#contextContainer");
  container.innerHTML = "";

  const inner = createEl("div", "panel-inner");

  const info = createEl(
    "div",
    "info-box",
    `
      Fill in the gaps or choose the correct answer.
      <br>You get an explanation after every answer.
    `
  );

  const list = createEl("div", "tasks-list");
  contextTasks.forEach((task, index) => {
    list.appendChild(buildLearningTask(task, index, "ctx"));
  });

  inner.append(info, list);
  container.appendChild(inner);
}

function renderGrammarQuickNav() {
  const nav = $("#grammarQuickNav");
  nav.innerHTML = "";

  grammarTopics.forEach((topic, index) => {
    const btn = createEl(
      "button",
      `grammar-tab-btn ${index === state.currentGrammarIndex ? "active" : ""}`,
      topic.short
    );
    btn.type = "button";
    btn.addEventListener("click", () => {
      state.currentGrammarIndex = index;
      renderGrammarQuickNav();
      renderGrammarContent();
    });
    nav.appendChild(btn);
  });
}

function renderGrammarContent() {
  const host = $("#grammarContent");
  host.innerHTML = "";

  const topic = grammarTopics[state.currentGrammarIndex];
  const panel = createEl("div", "panel grammar-panel");

  const title = createEl("h3", "grammar-title", topic.title);
  const rule = createEl("div", "grammar-rule", topic.rule);
  const list = createEl("div", "tasks-list");

  topic.tasks.forEach((task, index) => {
    list.appendChild(buildLearningTask(task, index, topic.key));
  });

  panel.append(title, rule, list);
  host.appendChild(panel);
}

function renderGrammar() {
  renderGrammarQuickNav();
  renderGrammarContent();
}

function renderFinalTest() {
  const container = $("#testContainer");
  container.innerHTML = "";

  const inner = createEl("div", "panel-inner");
  const list = createEl("div", "tasks-list");

  finalTest.forEach((task, index) => {
    const card = createEl("article", "task-card");
    const head = createEl("div", "task-head");
    head.innerHTML = `
      <div class="task-number">${index + 1}</div>
      <div class="task-question">${task.question}</div>
    `;
    card.appendChild(head);

    if (task.type === "input") {
      const controls = createEl("div", "task-controls");
      const input = createEl("input", "text-answer");
      input.type = "text";
      input.placeholder = "Write your answer...";
      input.autocomplete = "off";
      input.dataset.testIndex = String(index);
      input.addEventListener("input", () => {
        state.testAnswers[index] = input.value;
        updateTestProgress();
      });

      controls.appendChild(input);
      card.appendChild(controls);
    } else {
      const grid = createEl("div", "choice-grid");
      task.options.forEach((option, optionIndex) => {
        const btn = createEl("button", "choice-btn", option);
        btn.type = "button";
        btn.addEventListener("click", () => {
          [...grid.children].forEach(child => child.classList.remove("selected"));
          btn.classList.add("selected");
          state.testAnswers[index] = optionIndex;
          updateTestProgress();
        });
        grid.appendChild(btn);
      });
      card.appendChild(grid);
    }

    list.appendChild(card);
  });

  const submitBtn = createEl("button", "test-submit-btn", "Submit Final Test");
  submitBtn.type = "button";
  submitBtn.addEventListener("click", gradeFinalTest);

  inner.append(list, submitBtn);
  container.appendChild(inner);
  updateTestProgress();
}

function updateTestProgress() {
  const total = finalTest.length;
  let answered = 0;

  for (let i = 0; i < total; i++) {
    const value = state.testAnswers[i];
    if (typeof value === "number") answered++;
    if (typeof value === "string" && value.trim()) answered++;
  }

  $("#testProgressText").textContent = `${answered} / ${total} answered`;
  $("#testProgressBar").style.width = `${Math.round((answered / total) * 100)}%`;
}

function gradeFinalTest() {
  let score = 0;
  const mistakes = [];

  finalTest.forEach((task, index) => {
    const userValue = state.testAnswers[index];

    if (task.type === "input") {
      const correct = answerMatches(userValue || "", task.answers);
      if (correct) {
        score++;
      } else {
        mistakes.push({
          question: task.question,
          answer: task.answers[0],
          explanation: task.explanation
        });
      }
    } else {
      const correct = Number(userValue) === task.correctIndex;
      if (correct) {
        score++;
      } else {
        mistakes.push({
          question: task.question,
          answer: task.options[task.correctIndex],
          explanation: task.explanation
        });
      }
    }
  });

  const total = finalTest.length;
  const percent = Math.round((score / total) * 100);

  const results = $("#testResults");
  results.classList.remove("hidden");
  results.innerHTML = "";

  const wrap = createEl("div", "panel-inner");

  const scoreCircle = createEl("div", "result-score");
  scoreCircle.style.background = `conic-gradient(var(--primary) ${percent}%, rgba(15,159,110,0.12) ${percent}%)`;
  scoreCircle.innerHTML = `<span>${score}/${total}</span>`;

  const title = createEl("h3", "result-title");
  const text = createEl("div", "result-text");

  if (percent === 100) {
    title.textContent = "🏆 Perfect!";
    text.textContent = "Excellent work. You know Module 8 really well.";
  } else if (percent >= 85) {
    title.textContent = "🌟 Great job!";
    text.textContent = "Very strong result. You understand the vocabulary and grammar well.";
  } else if (percent >= 60) {
    title.textContent = "👍 Good effort!";
    text.textContent = "You know a lot already. Review the mistakes and try again.";
  } else {
    title.textContent = "📚 Keep going!";
    text.textContent = "You need more practice, but now you can clearly see what to revise.";
  }

  wrap.append(scoreCircle, title, text);

  if (mistakes.length) {
    const reviewTitle = createEl("h4", "", "Review your mistakes");
    reviewTitle.style.marginTop = "12px";
    reviewTitle.style.marginBottom = "12px";
    reviewTitle.style.fontSize = "1.2rem";

    const reviewList = createEl("div", "review-list");
    mistakes.forEach((item) => {
      const box = createEl("div", "review-item");
      box.innerHTML = `
        <div class="review-question">${item.question}</div>
        <div class="review-answer">Correct answer: ${item.answer}</div>
        <div class="review-expl">${item.explanation}</div>
      `;
      reviewList.appendChild(box);
    });

    wrap.append(reviewTitle, reviewList);
  }

  const restartBtn = createEl("button", "restart-btn", "Restart Test");
  restartBtn.type = "button";
  restartBtn.addEventListener("click", () => {
    state.testAnswers = {};
    renderFinalTest();
    $("#testResults").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  wrap.appendChild(restartBtn);
  results.appendChild(wrap);

  window.scrollTo({
    top: results.offsetTop - 20,
    behavior: "smooth"
  });
}

function init() {
  initTheme();
  initNavigation();
  renderVocabulary();
  renderContext();
  renderGrammar();
  renderFinalTest();
}

document.addEventListener("DOMContentLoaded", init);