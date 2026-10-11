/*
 * A1 · Module 4 · Lesson 4 — Review: Welcome to my town
 * Reviews: there is/are, prepositions of place, some/any, imperatives, countable/uncountable, how much/many.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Visit Kamianets-Podilskyi!',
    text: `Kamianets-Podilskyi is a small, beautiful town in the west of Ukraine. There are about 100,000 people here.

The old town is on an island in a river canyon. There is a famous castle next to the old bridge — don’t miss it! There are some lovely churches and museums in the centre, and there are a lot of little cafés in the main square.

Is there a lot to do? Yes, there is! In summer there is a hot-air balloon festival. Take a balloon flight over the castle — it isn’t cheap, but it’s amazing. There aren’t any big shopping centres in the old town, so buy your souvenirs at the market.

Hungry? Try banosh — it’s a dish with cornmeal, cheese and some cream. How much is it? Only about 150 hryvnias in a café.

How to get here: there are some trains and buses from Kyiv every day. Take the night train and wake up in a fairy tale!`
  };

  ENG.registerLesson({
    id: 'a1-m4-l4',
    level: 'a1',
    title: 'Review: Welcome to my town',
    subtitle: 'Повторення модуля 4: there is/are, прийменники, some/any, накази, how much/many',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A town guide',
            instructions: 'Прочитай путівник по Кам’янцю-Подільському.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is the town?', options: ['In the east of Ukraine', 'In the west of Ukraine', 'Near the sea'], answer: 1 },
              { id: 'q2', q: 'Where is the castle?', options: ['In the main square', 'Next to the old bridge', 'Opposite the market'], answer: 1 },
              { id: 'q3', q: 'What is there in summer?', options: ['A balloon festival', 'A music festival', 'A food market'], answer: 0 },
              { id: 'q4', q: 'Where can you buy souvenirs?', options: ['In a shopping centre', 'At the market', 'At the castle'], answer: 1 },
              { id: 'q5', q: 'What is banosh?', options: ['A souvenir', 'A dish', 'A drink'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'There are about a million people in the town.', answer: false, explain: 'About 100,000.' },
              { id: 's2', s: 'There are a lot of cafés in the main square.', answer: true },
              { id: 's3', s: 'A balloon flight is cheap.', answer: false, explain: '“it isn’t cheap, but it’s amazing”' },
              { id: 's4', s: 'There are some big shopping centres in the old town.', answer: false, explain: '“There aren’t any big shopping centres in the old town.”' },
              { id: 's5', s: 'There are trains from Kyiv every day.', answer: true }
            ]
          }
        ]
      },

      {
        id: 'vocabulary',
        title: 'Vocabulary',
        exercises: [
          {
            id: 'vocab-cards',
            type: 'flashcards',
            title: 'Travel guide words + module review',
            instructions: 'Нові слова з путівника і повторення модуля 4.',
            cards: [
              { front: 'castle', ipa: '/ˈkɑːsl/', back: 'замок, фортеця', example: 'There is a famous castle.' },
              { front: 'island', ipa: '/ˈaɪlənd/', back: 'острів', example: 'The old town is on an island.' },
              { front: 'river', ipa: '/ˈrɪvə/', back: 'річка', example: 'There is a river in the canyon.' },
              { front: 'church', ipa: '/tʃɜːtʃ/', back: 'церква', example: 'There are some lovely churches.' },
              { front: 'main square', back: 'головна площа', example: 'The cafés are in the main square.' },
              { front: 'hot-air balloon', back: 'повітряна куля', example: 'Take a balloon flight!' },
              { front: 'souvenir', ipa: '/ˌsuːvəˈnɪə/', back: 'сувенір', example: 'Buy souvenirs at the market.' },
              { front: 'dish', ipa: '/dɪʃ/', back: 'страва', example: 'Banosh is a Ukrainian dish.' },
              { front: 'don’t miss', back: 'не пропустіть', example: 'Don’t miss the castle!' },
              { front: 'fairy tale', back: 'казка', example: 'The town looks like a fairy tale.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 4 words',
            instructions: 'Поєднай слова модуля 4 з перекладом.',
            pairs: [
              ['wardrobe', 'шафа'],
              ['pharmacy', 'аптека'],
              ['bridge', 'міст'],
              ['a loaf of bread', 'буханець хліба'],
              ['opposite', 'навпроти'],
              ['go straight on', 'ідіть прямо'],
              ['expensive', 'дорогий'],
              ['castle', 'замок']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'A postcard',
            instructions: 'Встав слова в листівку з подорожі. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Hi Mum! I’m in Kamianets. The {{castle}} is amazing!' },
              { id: 'd2', text: 'The old town is on an {{island}}.' },
              { id: 'd3', text: 'Today I want to take a {{balloon}} flight!' },
              { id: 'd4', text: 'I’ve got some {{souvenirs}} for you from the market.' },
              { id: 'd5', text: 'The food is great. Try this {{dish}}: banosh!' },
              { id: 'd6', text: 'There are some lovely cafés in the main {{square}}.' }
            ],
            distractors: ['fridge']
          }
        ]
      },

      {
        id: 'grammar',
        title: 'Grammar',
        exercises: [
          {
            id: 'gram-rule',
            type: 'rule',
            title: 'Module 4 grammar — summary',
            instructions: 'Уся граматика модуля 4. Перевір, чи можеш пояснити кожне правило своїми словами.',
            html: `
<h3>1. there is / there are</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>однина / незлічуване</th><th>множина</th></tr>
  <tr><td>+</td><td>There <b>is</b> a castle. There <b>is</b> some cheese.</td><td>There <b>are</b> some cafés.</td></tr>
  <tr><td>−</td><td>There <b>isn’t</b> a hospital. There <b>isn’t any</b> milk.</td><td>There <b>aren’t any</b> shopping centres.</td></tr>
  <tr><td>?</td><td><b>Is there</b> a bank?</td><td><b>Are there any</b> museums?</td></tr>
</table></div>

<h3>2. Прийменники місця</h3>
<p>in · on · under · next to · behind · in front of · between · opposite</p>

<h3>3. some / any / a</h3>
<ul>
  <li><b>a/an</b> — одна злічувана річ: a castle, an island;</li>
  <li><b>some</b> — множина або незлічуване у <b>+</b> і в проханнях: some churches, some cream, Can I have some water?;</li>
  <li><b>any</b> — у <b>−</b> і <b>?</b>: There aren’t any…, Are there any…?</li>
</ul>

<h3>4. how much / how many</h3>
<div class="ex-line">How <b>many</b> people are there? (злічувані) · How <b>much</b> cream is there? (незлічувані) · How <b>much</b> is it? (ціна)</div>

<h3>5. Наказовий спосіб</h3>
<div class="ex-line"><b>Take</b> the night train. <b>Try</b> banosh. <b>Don’t miss</b> the castle!</div>

<div class="tip">✅ <b>Чек-лист модуля 4</b> — я вмію:<br>
• описати свій дім і сказати, де що знаходиться;<br>
• розповісти, що є і чого немає в моєму місті;<br>
• запитати і пояснити дорогу;<br>
• купити щось у магазині: попросити, запитати ціну й кількість.</div>`
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'Module 4 mix',
            instructions: 'Встав одне слово: is, are, some, any, much, many або Don’t.',
            items: [
              { id: 'g1', text: 'There {{is}} a famous castle in the town.' },
              { id: 'g2', text: 'There are {{some}} lovely churches.' },
              { id: 'g3', text: 'There aren’t {{any}} big shopping centres.' },
              { id: 'g4', text: 'How {{many}} museums are there?' },
              { id: 'g5', text: 'How {{much}} is a balloon flight?' },
              { id: 'g6', text: '{{Don’t|Do not}} miss the festival!' },
              { id: 'g7', text: '{{Are}} there any trains from Kyiv? — Yes, there are.' }
            ]
          },
          {
            id: 'gram-correct',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Яке речення правильне?',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['In my town is a castle.', 'There is a castle in my town.', 'There are a castle in my town.'], answer: 1 },
              { id: 'c2', q: 'Обери правильне:', options: ['Can I have a bread?', 'Can I have some bread?', 'Can I have any bread?'], answer: 1 },
              { id: 'c3', q: 'Обери правильне:', options: ['How many milk do we need?', 'How much milk do we need?', 'How much milks do we need?'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['There aren’t some cafés.', 'There aren’t any cafés.', 'There isn’t any cafés.'], answer: 1 },
              { id: 'c5', q: 'Обери правильне:', options: ['Not take the bus!', 'Don’t take the bus!', 'You don’t take the bus!'], answer: 1 },
              { id: 'c6', q: 'Обери правильне:', options: ['The picture is in the wall.', 'The picture is on the wall.', 'The picture is at the wall.'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Tourist questions',
            instructions: 'Склади питання туриста.',
            items: [
              { id: 'o1', prompt: 'Чи є тут поблизу банк?', answer: 'Is there a bank near here?' },
              { id: 'o2', prompt: 'Чи є в старому місті якісь музеї?', answer: 'Are there any museums in the old town?', extra: ['some'] },
              { id: 'o3', prompt: 'Скільки коштує квиток?', answer: 'How much is a ticket?' },
              { id: 'o4', prompt: 'Як мені дістатися до замку?', answer: 'How do I get to the castle?' }
            ]
          },
          {
            id: 'gram-mod13',
            type: 'choice',
            title: '↺ Modules 1–3 review',
            instructions: 'Повторення попередніх модулів.',
            items: [
              { id: 'm1', q: 'The castle ___ very old.', options: ['is', 'has', 'are'], answer: 0 },
              { id: 'm2', q: 'The festival ___ in summer.', options: ['start', 'starts', 'is start'], answer: 1 },
              { id: 'm3', q: '___ tourists often visit the town?', options: ['Do', 'Does', 'Are'], answer: 0 },
              { id: 'm4', q: 'Kamianets ___ got a famous castle.', options: ['have', 'has', 'is'], answer: 1 },
              { id: 'm5', q: 'The trains ___ at night.', options: ['leave', 'leaves', 'leaving'], answer: 0 }
            ]
          }
        ]
      },

      {
        id: 'listening',
        title: 'Listening',
        exercises: [
          {
            id: 'listen-mcq',
            type: 'choice',
            title: 'At the tourist information centre',
            instructions: 'Туристка звертається до інформаційного центру. Послухай і дай відповіді.',
            audio: {
              title: 'Dialogue: Tourist & Assistant',
              lines: [
                { who: 'Tourist', text: 'Hello! Are there any guided tours of the castle today?' },
                { who: 'Assistant', text: 'Yes, there are. There’s one at eleven and one at three.' },
                { who: 'Tourist', text: 'How much is a ticket?' },
                { who: 'Assistant', text: 'It’s two hundred hryvnias for adults and one hundred for children.' },
                { who: 'Tourist', text: 'Great. And how do I get to the castle from here?' },
                { who: 'Assistant', text: 'Go out and turn right. Go straight on to the square, then cross the old bridge. The castle is in front of you.' },
                { who: 'Tourist', text: 'Is there a café near the castle?' },
                { who: 'Assistant', text: 'Yes, there’s a nice café opposite the entrance. Try their apple cake!' }
              ]
            },
            items: [
              { id: 'l1', q: 'When are the tours?', options: ['At 10 and 2', 'At 11 and 3', 'At 11 and 1'], answer: 1 },
              { id: 'l2', q: 'How much is an adult ticket?', options: ['100 hryvnias', '200 hryvnias', '300 hryvnias'], answer: 1 },
              { id: 'l3', q: 'What do you do first?', options: ['Turn left', 'Turn right', 'Cross the bridge'], answer: 1 },
              { id: 'l4', q: 'Where is the café?', options: ['Opposite the entrance', 'In the square', 'Next to the bridge'], answer: 0 },
              { id: 'l5', q: 'What does the assistant recommend?', options: ['Apple cake', 'Banosh', 'Coffee'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Are there any tours today?' },
              { id: 'dc2', text: 'How much is a ticket?' },
              { id: 'dc3', text: 'Go out and turn right.' },
              { id: 'dc4', text: 'There is a nice café opposite the entrance.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-guide',
            type: 'writing',
            title: 'A guide to your town',
            instructions: 'Напиши короткий путівник по своєму місту (або місту, яке ти любиш).',
            prompt: 'Write a town guide (90–110 words).\n• Where is the town? How many people are there?\n• What is there to see? (There is / There are some…) Where is it? (opposite, next to…)\n• What isn’t there? (There aren’t any…)\n• Food: what to try and how much it is.\n• Give 2–3 tips with imperatives (Visit…, Don’t miss…).',
            minWords: 90,
            maxWords: 120,
            phrases: ['There is', 'There are some', 'There aren’t any', 'next to', 'Try', 'Don’t miss', 'How much'],
            checklist: ['Є there is і there are', 'Є some і any', 'Є 2 прийменники місця', 'Є 2–3 накази (Visit…, Don’t…)', 'Є ціна (It’s about…)'],
            model: `Welcome to Chernivtsi! It’s a beautiful city in the west of Ukraine. There are about 250,000 people here.

There is a famous university in the centre. It looks like a palace! There are some lovely old streets and a lot of cafés next to the main square. There aren’t any mountains in the city, but they are not far.

Try the local pastries — they are delicious and cheap. A coffee and a cake are about 120 hryvnias.

Visit the university, walk along Olha Kobylianska Street and don’t miss the theatre. Enjoy your trip!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-town',
            type: 'speaking',
            title: 'Be a tour guide',
            instructions: 'Ти — екскурсовод у своєму місті. Відповідай туристам уголос.',
            phrases: ['There is…', 'There are some…', 'It’s opposite / next to…', 'Go straight on…', 'Don’t miss…', 'It’s about … hryvnias.'],
            tasks: [
              { id: 'sp1', q: 'Tourist: “What is there to see in your town?”', tips: 'There is a … There are some …', model: 'There is a beautiful park and there are some old churches in the centre.' },
              { id: 'sp2', q: 'Tourist: “How do I get to the main square from the station?”', tips: 'Go … Turn … It’s …', model: 'Go straight on for five minutes, turn left at the bank, and the square is in front of you.' },
              { id: 'sp3', q: 'Tourist: “What food should I try? How much is it?”', tips: 'Try … It’s about …', model: 'Try varenyky with cherries. They are about 150 hryvnias in a café.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'visit': 'відвідати', 'small': 'маленький', 'beautiful': 'гарний', 'town': 'місто', 'west': 'захід', 'east': 'схід', 'about': 'приблизно',
      'people': 'люди', 'old town': 'старе місто', 'island': 'острів', 'river': 'річка', 'canyon': 'каньйон', 'famous': 'відомий', 'castle': 'замок, фортеця',
      'next to': 'поруч з', 'bridge': 'міст', "don't miss": 'не пропустіть', 'miss': 'пропустити', 'some': 'кілька', 'lovely': 'чудовий', 'churches': 'церкви',
      'church': 'церква', 'museums': 'музеї', 'centre': 'центр', 'a lot of': 'багато', 'little': 'маленький', 'cafés': 'кафе', 'main square': 'головна площа',
      'square': 'площа', 'a lot to do': 'багато чим зайнятися', 'summer': 'літо', 'hot-air balloon': 'повітряна куля', 'balloon': 'повітряна куля',
      'festival': 'фестиваль', 'take': 'здійсніть, візьміть', 'flight': 'політ', 'over': 'над', 'cheap': 'дешевий', 'amazing': 'дивовижний',
      'shopping centres': 'торгові центри', 'so': 'тож', 'buy': 'купуйте', 'souvenirs': 'сувеніри', 'souvenir': 'сувенір', 'market': 'ринок', 'hungry': 'голодний',
      'try': 'спробуйте', 'dish': 'страва', 'cornmeal': 'кукурудзяне борошно', 'cheese': 'сир', 'cream': 'вершки', 'how much': 'скільки (коштує)', 'only': 'лише',
      'hryvnias': 'гривні', 'how to get here': 'як сюди дістатися', 'trains': 'потяги', 'buses': 'автобуси', 'every day': 'щодня', 'night train': 'нічний потяг',
      'wake up': 'прокинутися', 'fairy tale': 'казка', 'guide': 'путівник; гід', 'million': 'мільйон', 'music': 'музика', 'food': 'їжа', 'drink': 'напій',
      'wardrobe': 'шафа', 'pharmacy': 'аптека', 'loaf': 'буханець', 'opposite': 'навпроти', 'go straight on': 'ідіть прямо', 'expensive': 'дорогий',
      'postcard': 'листівка', 'mum': 'мама', 'today': 'сьогодні', 'want': 'хочу', 'great': 'чудовий', 'fridge': 'холодильник', 'hospital': 'лікарня',
      'milk': 'молоко', 'bank': 'банк', 'ticket': 'квиток', 'tourists': 'туристи', 'leave': 'відправляються', 'tourist information centre': 'туристичний інформаційний центр',
      'guided tours': 'екскурсії', 'adults': 'дорослі', 'children': 'діти', 'hundred': 'сто', 'two hundred': 'двісті', 'turn right': 'поверніть праворуч',
      'cross': 'перейдіть', 'in front of': 'перед', 'entrance': 'вхід', 'apple cake': 'яблучний пиріг', 'recommend': 'рекомендувати', 'assistant': 'працівник',
      'tour': 'екскурсія', 'tours': 'екскурсії', 'university': 'університет', 'palace': 'палац', 'streets': 'вулиці', 'mountains': 'гори', 'far': 'далеко',
      'local': 'місцевий', 'pastries': 'випічка', 'delicious': 'смачний', 'coffee': 'кава', 'cake': 'тістечко', 'walk along': 'прогуляйтеся вздовж',
      'theatre': 'театр', 'enjoy': 'насолоджуйтеся', 'trip': 'поїздка', 'tour guide': 'екскурсовод', 'station': 'вокзал', 'turn left': 'поверніть ліворуч',
      'cherries': 'вишні', 'should': 'варто', 'see': 'побачити', "there's": 'є (there is)', "it's": 'це є', "isn't": 'не є', "aren't": 'не є'
    }
  });
})();
