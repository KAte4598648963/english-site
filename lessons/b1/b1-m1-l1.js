/*
 * B1 · Module 1 · Lesson 1 — Have you ever…? Travel stories (Present Perfect vs Past Simple)
 * Exercise IDs are PERMANENT: never rename or reuse them (user progress is stored by ID).
 * To add an exercise later, give it a new unique id.
 */
(function () {
  const PASSAGE = {
    title: 'My Year of Saying “Yes”',
    text: `Last January, I made a simple promise to myself: for one year, I would say “yes” to every travel invitation. I have always been a nervous traveller, so it was a big decision for me.

In March, my friend Olena invited me to Lviv. We took the night train, and I didn't sleep at all — but the city was worth it. We wandered through the old streets, drank amazing coffee and got lost twice. Since then, I have visited Lviv three more times.

In the summer, I went backpacking in Portugal on my own. It was my first solo trip. I stayed in hostels, met people from all over the world and learned how to ask for directions in Portuguese. Of course, not everything went smoothly: the airline lost my luggage, and I spent two days in the same T-shirt!

Now it is October, and I have already taken eleven trips this year. I have never felt so confident. I haven't been to Asia yet, but I have just booked a flight to Japan for December. My advice? Step out of your comfort zone — even a short journey can change the way you see the world.`
  };

  ENG.registerLesson({
    id: 'b1-m1-l1',
    level: 'b1',
    title: 'Have you ever…? Travel stories',
    subtitle: 'Present Perfect vs Past Simple · говоримо про досвід подорожей',

    sections: [
      /* ============================ READING ============================ */
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Read the blog post',
            instructions: 'Прочитай допис блогерки Мії та обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Why was the promise a big decision for Mia?', options: ['She had never left her country.', 'She has always been a nervous traveller.', "She didn't have enough money.", 'She hated travelling by train.'], answer: 1, explain: '“I have always been a nervous traveller, so it was a big decision.”' },
              { id: 'q2', q: 'How did Mia and Olena get to Lviv?', options: ['By plane', 'By bus', 'By night train', 'By car'], answer: 2 },
              { id: 'q3', q: 'What went wrong in Portugal?', options: ['She missed her flight.', 'The airline lost her luggage.', 'She got ill.', 'Her hostel was closed.'], answer: 1 },
              { id: 'q4', q: 'How many trips has Mia taken this year?', options: ['Three', 'Eight', 'Eleven', 'Twelve'], answer: 2 },
              { id: 'q5', q: 'What is the main idea of the post?', options: ['Travelling alone is dangerous.', 'Japan is the best place to visit.', 'Even short trips can make you more confident.', 'Night trains are uncomfortable.'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Чи правдиві ці твердження відповідно до тексту?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Mia slept well on the night train.', answer: false, explain: '“I didn\'t sleep at all.”' },
              { id: 's2', s: 'Mia has been to Lviv four times in total.', answer: true, explain: 'Once in March + “three more times” since then.' },
              { id: 's3', s: 'Mia travelled to Portugal with Olena.', answer: false, explain: '“I went backpacking in Portugal on my own.”' },
              { id: 's4', s: 'Mia has already visited Japan.', answer: false, explain: '“I haven\'t been to Asia yet” — she has just booked a flight.' },
              { id: 's5', s: 'Mia learned some Portuguese in Portugal.', answer: true, explain: '“…learned how to ask for directions in Portuguese.”' }
            ]
          }
        ]
      },

      /* ============================ VOCABULARY ============================ */
      {
        id: 'vocabulary',
        title: 'Vocabulary',
        exercises: [
          {
            id: 'vocab-cards',
            type: 'flashcards',
            title: 'Travel words — flashcards',
            instructions: 'Натисни на картку, щоб побачити переклад. «Знаю» — картка вивчена, «Ще вчу» — вона повернеться пізніше.',
            cards: [
              { front: 'journey', ipa: '/ˈdʒɜːni/', back: 'подорож, поїздка', example: 'The journey took six hours.' },
              { front: 'destination', ipa: '/ˌdestɪˈneɪʃn/', back: 'пункт призначення', example: 'Rome is a popular tourist destination.' },
              { front: 'luggage', ipa: '/ˈlʌɡɪdʒ/', back: 'багаж', example: 'The airline lost my luggage.' },
              { front: 'to book', ipa: '/bʊk/', back: 'бронювати', example: "I've just booked a flight to Japan." },
              { front: 'to set off', ipa: '/set ɒf/', back: 'вирушати (в дорогу)', example: 'We set off early in the morning.' },
              { front: 'to get lost', ipa: '/ɡet lɒst/', back: 'заблукати', example: 'We got lost in the old town.' },
              { front: 'abroad', ipa: '/əˈbrɔːd/', back: 'за кордоном, за кордон', example: 'Have you ever lived abroad?' },
              { front: 'sightseeing', ipa: '/ˈsaɪtsiːɪŋ/', back: 'огляд визначних місць', example: 'We did some sightseeing in Kraków.' },
              { front: 'backpacking', ipa: '/ˈbækpækɪŋ/', back: 'подорож із рюкзаком', example: 'She went backpacking in Portugal.' },
              { front: 'comfort zone', ipa: '/ˈkʌmfət zəʊn/', back: 'зона комфорту', example: 'Step out of your comfort zone!' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Match the pairs',
            instructions: 'Поєднай англійське слово з перекладом: натисни зліва, потім справа.',
            pairs: [
              ['journey', 'подорож'],
              ['luggage', 'багаж'],
              ['destination', 'пункт призначення'],
              ['abroad', 'за кордоном'],
              ['to book', 'бронювати'],
              ['to get lost', 'заблукати'],
              ['sightseeing', 'огляд визначних місць'],
              ['to set off', 'вирушати']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the sentences',
            instructions: 'Перетягни слова в пропуски (на телефоні — натисни на слово, потім на пропуск). Два слова зайві.',
            items: [
              { id: 'd1', text: 'We {{set off}} at 6 a.m. to avoid the traffic.' },
              { id: 'd2', text: 'Have you ever travelled {{abroad}}?' },
              { id: 'd3', text: 'Our final {{destination}} was a small village in the mountains.' },
              { id: 'd4', text: 'I always pack light, so my {{luggage}} is never heavy.' },
              { id: 'd5', text: 'We {{got lost}} in the old town, but a local showed us the way.' },
              { id: 'd6', text: "I've {{booked}} a room in a cheap hostel near the station." }
            ],
            distractors: ['sightseeing', 'journey']
          }
        ]
      },

      /* ============================ GRAMMAR ============================ */
      {
        id: 'grammar',
        title: 'Grammar',
        exercises: [
          {
            id: 'gram-rule',
            type: 'rule',
            title: 'Present Perfect vs Past Simple',
            instructions: 'Прочитай правило і приклади. Коли все зрозуміло — натисни «Зрозуміло».',
            html: `
<h3>Present Perfect — have / has + V3</h3>
<p>Говоримо про <b>досвід</b> або результат, важливий <b>зараз</b>. Точний час у минулому <b>не називаємо</b>.</p>
<div class="ex-line">I <mark>have visited</mark> Lviv three times. <span class="muted">(досвід, коли саме — неважливо)</span></div>
<div class="ex-line"><mark>Have</mark> you ever <mark>been</mark> to Japan?</div>
<div class="ex-line">She <mark>has just booked</mark> a flight. <span class="muted">(результат зараз)</span></div>

<h3>Past Simple — V2 / -ed</h3>
<p>Говоримо про <b>завершену подію</b> в конкретний момент минулого.</p>
<div class="ex-line">I <mark>went</mark> to Portugal <b>last summer</b>.</div>
<div class="ex-line">We <mark>didn't sleep</mark> on the train <b>two days ago</b>.</div>

<h3>Слова-маркери</h3>
<div class="table-wrap"><table>
  <tr><th>Present Perfect</th><th>Past Simple</th></tr>
  <tr><td>ever, never, already, yet, just, so far, recently, for, since, this year</td><td>yesterday, last week/year, ago, in 2019, when I was…, on Monday</td></tr>
  <tr><td>I <b>have never tried</b> sushi.</td><td>I <b>tried</b> sushi <b>last week</b>.</td></tr>
  <tr><td><b>Have</b> you <b>finished</b> yet?</td><td><b>Did</b> you <b>finish</b> yesterday?</td></tr>
</table></div>

<h3>Типова розмова</h3>
<div class="ex-line">— <b>Have</b> you ever <b>been</b> to Rome? <span class="muted">(досвід → Present Perfect)</span><br>— Yes, I <b>have</b>. I <b>went</b> there in 2021. <span class="muted">(деталі з часом → Past Simple)</span></div>

<div class="tip">💡 <b>Головне правило:</b> бачиш конкретний час у минулому (<i>yesterday, ago, in 2020</i>) — ставиш <b>Past Simple</b>.<br>
<span class="no">I have visited Rome last year.</span> → <span class="yes">I visited Rome last year.</span></div>

<h3>been чи gone?</h3>
<ul>
  <li>He <b>has been</b> to Paris. — він був там і <b>повернувся</b>.</li>
  <li>He <b>has gone</b> to Paris. — він поїхав і <b>зараз там</b>.</li>
</ul>`
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Put the verbs in the correct form',
            instructions: 'Встав дієслово в Present Perfect або Past Simple. Можна писати скорочення (I’ve, didn’t).',
            items: [
              { id: 'g1', text: 'I {{have never been}} to Asia.', hint: '(never / be)' },
              { id: 'g2', text: 'We {{went}} to Lviv last spring.', hint: '(go)' },
              { id: 'g3', text: '{{Have}} you ever {{tried}} Portuguese food?', hint: '(try)' },
              { id: 'g4', text: 'She {{has just booked|’s just booked}} a flight to Tokyo.', hint: '(just / book)' },
              { id: 'g5', text: 'They {{lost}} my luggage two years ago.', hint: '(lose)' },
              { id: 'g6', text: 'How many countries {{have}} you {{visited}} so far?', hint: '(visit)' },
              { id: 'g7', text: 'I {{did not sleep|didn’t sleep}} at all on the night train.', hint: '(not / sleep)' },
              { id: 'g8', text: 'He {{has lived|’s lived}} in Kyiv since 2015.', hint: '(live)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Choose the correct option',
            instructions: 'Обери правильний варіант. Зверни увагу на слова-маркери.',
            items: [
              { id: 'c1', q: 'I ___ my passport yesterday.', options: ['lost', 'have lost'], answer: 0, explain: 'yesterday → Past Simple.' },
              { id: 'c2', q: 'Have you packed your suitcase ___?', options: ['yet', 'ago', 'last week'], answer: 0, explain: 'yet — у питаннях і запереченнях Present Perfect.' },
              { id: 'c3', q: 'We have known each other ___ 2018.', options: ['for', 'since', 'ago'], answer: 1, explain: 'since + момент часу; for + період.' },
              { id: 'c4', q: 'She went to Spain three years ___.', options: ['ago', 'since', 'for'], answer: 0 },
              { id: 'c5', q: '___ you ever seen the Northern Lights?', options: ['Did', 'Have', 'Were'], answer: 1 },
              { id: 'c6', q: 'I ___ to Paris twice. I loved it both times!', options: ['have been', 'have gone'], answer: 0, explain: 'been — був і повернувся.' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення зі слів. Натисни на слово, щоб додати; на слово в рядку — щоб прибрати. Є зайві слова!',
            items: [
              { id: 'o1', prompt: 'Ти колись був у Лондоні?', answer: 'Have you ever been to London?', extra: ['did'] },
              { id: 'o2', prompt: 'Я відвідав бабусю й дідуся минулих вихідних.', answer: 'I visited my grandparents last weekend.', extra: ['have'] },
              { id: 'o3', prompt: 'Ми ще не забронювали готель.', answer: "We haven't booked the hotel yet.", extra: ["didn't"] },
              { id: 'o4', prompt: 'Вона щойно прибула в аеропорт.', answer: 'She has just arrived at the airport.' }
            ]
          }
        ]
      },

      /* ============================ LISTENING ============================ */
      {
        id: 'listening',
        title: 'Listening',
        exercises: [
          {
            id: 'listen-mcq',
            type: 'choice',
            title: 'Back from holiday',
            instructions: 'Послухай діалог Тома й Кейт (можна кілька разів) і дай відповіді.',
            audio: {
              title: 'Dialogue: Tom & Kate',
              lines: [
                { who: 'Tom', text: "Hi, Kate! I haven't seen you for ages. Where have you been?" },
                { who: 'Kate', text: "Hi, Tom! I've just come back from Scotland. I spent two weeks there." },
                { who: 'Tom', text: 'Wow! Have you ever been there before?' },
                { who: 'Kate', text: 'No, it was my first time. I travelled around the Highlands by train.' },
                { who: 'Tom', text: 'Sounds amazing. What was the weather like?' },
                { who: 'Kate', text: 'It rained almost every day, but the views were incredible. And I saw a real castle on a lake!' },
                { who: 'Tom', text: "Lucky you. I haven't been on holiday this year yet." },
                { who: 'Kate', text: "You should go to Edinburgh. I've already sent you some photos." }
              ]
            },
            items: [
              { id: 'l1', q: 'Where has Kate just come back from?', options: ['Ireland', 'Scotland', 'Wales'], answer: 1 },
              { id: 'l2', q: 'How long did she spend there?', options: ['One week', 'Two weeks', 'A month'], answer: 1 },
              { id: 'l3', q: 'How did she travel around?', options: ['By car', 'By bus', 'By train'], answer: 2 },
              { id: 'l4', q: 'What was the weather like?', options: ['Sunny and warm', 'Rainy almost every day', 'Snowy'], answer: 1 },
              { id: 'l5', q: 'Has Tom been on holiday this year?', options: ['Yes, twice', 'No, not yet', 'Yes, to Edinburgh'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай речення і запиши його. Розділові знаки та великі літери не важливі.',
            items: [
              { id: 'dc1', text: 'I have never been to Scotland.' },
              { id: 'dc2', text: 'We missed the last train home.' },
              { id: 'dc3', text: 'Have you packed your suitcase yet?' },
              { id: 'dc4', text: 'She has travelled all over the world.' }
            ]
          }
        ]
      },

      /* ============================ WRITING ============================ */
      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-email',
            type: 'writing',
            title: 'An email about a trip',
            instructions: 'Напиши лист другові про нещодавню подорож. Використай і Present Perfect, і Past Simple.',
            prompt: 'Write an email (80–120 words) to a friend about a trip you have taken recently.\n• Where and when did you go?\n• What did you do there?\n• Mention one thing you have never done before this trip.\n• Would you recommend the place? Why?',
            minWords: 80,
            maxWords: 120,
            phrases: ["I've just got back from", 'It was my first time', "I've never", 'The best thing was', 'I would definitely recommend', 'Have you ever', 'Write back soon'],
            checklist: ['Є привітання і завершення листа', 'Розповідь про поїздку — у Past Simple (went, saw, stayed…)', 'Є щонайменше одне речення в Present Perfect (ever / never / just / already)', 'Є рекомендація або порада другові', '80–120 слів'],
            model: `Hi Sam,

I've just got back from Kraków and I wanted to tell you all about it! I went there last weekend with my sister. We stayed in a small hotel near the main square and did a lot of sightseeing. The best thing was the old Jewish quarter – it was full of tiny cafés and amazing street art.

It was my first time on a night bus, and I've never felt so tired in my life! But it was worth it. I would definitely recommend Kraków: it's beautiful, not expensive and the food is great.

Have you ever been to Poland? Write back soon!

Love,
Mia`
          }
        ]
      },

      /* ============================ SPEAKING ============================ */
      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-talk',
            type: 'speaking',
            title: 'Talk about your travel experience',
            instructions: 'Відповідай уголос на кожне питання (30–60 секунд). Якщо браузер підтримує — натисни «Говорити», і твоя відповідь з’явиться текстом. Після відповіді постав галочку.',
            phrases: ["I've been to…", 'I went there in…', 'The best thing was…', "I've never…, but I'd love to…", 'It was worth it because…'],
            tasks: [
              { id: 'sp1', q: 'What is the most interesting place you have ever visited? When did you go there?', tips: 'Почни з Present Perfect (досвід), деталі — у Past Simple.', model: "The most interesting place I've ever visited is Odesa. I went there two years ago with my friends. We swam in the sea and walked along the famous stairs." },
              { id: 'sp2', q: 'Have you ever had a problem while travelling? What happened?', tips: 'Наприклад: запізнився на потяг, загубив багаж, заблукав…', model: "Yes, I have. Last year I missed my train in Kyiv because I went to the wrong platform. I had to wait three hours for the next one." },
              { id: 'sp3', q: 'Describe a place you have never been to but would love to visit. Why?', tips: "I've never been to… but I'd love to go there because…", model: "I've never been to Iceland, but I'd love to go there because I want to see the Northern Lights and the volcanoes." }
            ]
          }
        ]
      }
    ],

    /* Translator glossary (EN → UA). Lookup also strips -s/-ed/-ing endings. */
    glossary: {
      'year': 'рік', 'promise': 'обіцянка', 'simple': 'простий', 'myself': 'собі, сам', 'travel': 'подорожувати; подорож', 'invitation': 'запрошення',
      'nervous': 'знервований, тривожний', 'traveller': 'мандрівник', 'big': 'великий', 'decision': 'рішення', 'friend': 'друг, подруга',
      'invite': 'запрошувати', 'night': 'ніч', 'train': 'потяг', 'sleep': 'спати', 'slept': 'спав (sleep)', 'city': 'місто', 'worth': 'вартий',
      'worth it': 'воно того варте', 'wander': 'блукати, гуляти', 'old': 'старий', 'street': 'вулиця', 'drink': 'пити', 'drank': 'пили (drink)',
      'amazing': 'дивовижний', 'coffee': 'кава', 'get lost': 'заблукати', 'got lost': 'заблукали', 'lost': 'загублений; загубив (lose)',
      'lose': 'губити', 'twice': 'двічі', 'since': 'відтоді; з (часу)', 'visit': 'відвідувати', 'times': 'разів', 'more': 'більше', 'summer': 'літо',
      'went': 'пішов, поїхав (go)', 'go': 'йти, їхати', 'gone': 'пішов, поїхав (V3 від go)', 'been': 'був (V3 від be)',
      'backpacking': 'подорож із рюкзаком', 'own': 'власний', 'on my own': 'сам(а), самостійно', 'first': 'перший', 'solo': 'самостійний, сольний',
      'trip': 'поїздка', 'stay': 'зупинятися, залишатися', 'hostel': 'хостел', 'meet': 'зустрічати', 'met': 'зустрів (meet)', 'people': 'люди',
      'world': 'світ', 'learn': 'вчити, дізнаватися', 'learned': 'навчився', 'ask': 'питати', 'direction': 'напрямок', 'directions': 'як пройти, дорога',
      'course': 'курс', 'of course': 'звісно', 'everything': 'усе', 'smoothly': 'гладко, без проблем', 'airline': 'авіакомпанія', 'luggage': 'багаж',
      'spend': 'проводити (час); витрачати', 'spent': 'провів (spend)', 'same': 'той самий', 'already': 'вже', 'take': 'брати', 'taken': 'взято (V3 від take)',
      'eleven': 'одинадцять', 'never': 'ніколи', 'feel': 'відчувати', 'felt': 'відчував (feel)', 'confident': 'впевнений', 'yet': 'ще (не); вже (у питаннях)',
      'just': 'щойно; просто', 'book': 'бронювати; книга', 'booked': 'забронював', 'flight': 'рейс, політ', 'advice': 'порада', 'step': 'крок; ступати',
      'step out': 'вийти', 'comfort': 'комфорт', 'comfort zone': 'зона комфорту', 'zone': 'зона', 'even': 'навіть', 'short': 'короткий',
      'journey': 'подорож, поїздка', 'change': 'змінювати', 'way': 'спосіб; шлях', 'see': 'бачити', 'saw': 'побачив (see)', 'seen': 'бачений (V3 від see)',
      'main': 'головний', 'idea': 'ідея', 'post': 'допис', 'blog': 'блог', 'dangerous': 'небезпечний', 'best': 'найкращий', 'place': 'місце',
      'uncomfortable': 'незручний', 'enough': 'достатньо', 'money': 'гроші', 'hate': 'ненавидіти', 'leave': 'залишати, покидати', 'left': 'покинув (leave)',
      'country': 'країна', 'countries': 'країни', 'plane': 'літак', 'bus': 'автобус', 'car': 'автомобіль', 'wrong': 'неправильно, не так',
      'miss': 'пропустити, запізнитися на; сумувати', 'missed': 'пропустив', 'ill': 'хворий', 'close': 'зачиняти', 'closed': 'зачинений',
      'true': 'правда', 'false': 'неправда', 'total': 'загалом', 'in total': 'загалом', 'well': 'добре', 'some': 'трохи, деякі',
      'destination': 'пункт призначення', 'set off': 'вирушати', 'abroad': 'за кордоном', 'sightseeing': 'огляд визначних місць',
      'avoid': 'уникати', 'traffic': 'дорожній рух, затори', 'final': 'кінцевий', 'small': 'маленький', 'village': 'село', 'mountain': 'гора',
      'always': 'завжди', 'pack': 'пакувати', 'light': 'легко; легкий', 'heavy': 'важкий', 'local': 'місцевий житель; місцевий', 'show': 'показувати',
      'showed': 'показав', 'room': 'кімната, номер', 'cheap': 'дешевий', 'near': 'біля', 'station': 'вокзал, станція', 'popular': 'популярний',
      'tourist': 'турист; туристичний', 'early': 'рано', 'morning': 'ранок', 'live': 'жити', 'lived': 'жив', 'hour': 'година',
      'try': 'пробувати', 'tried': 'спробував', 'food': 'їжа', 'how many': 'скільки', 'so far': 'досі, поки що', 'passport': 'паспорт',
      'yesterday': 'вчора', 'suitcase': 'валіза', 'ago': 'тому', 'know': 'знати', 'known': 'відомий (V3 від know)', 'each other': 'одне одного',
      'ever': 'коли-небудь', 'northern lights': 'північне сяйво', 'loved': 'дуже сподобалось', 'both': 'обидва', 'grandparents': 'бабуся й дідусь',
      'weekend': 'вихідні', 'hotel': 'готель', 'arrive': 'прибувати', 'arrived': 'прибула', 'airport': 'аеропорт', 'holiday': 'відпустка, канікули',
      'for ages': 'цілу вічність', 'ages': 'вічність', 'come back': 'повертатися', 'week': 'тиждень', 'weeks': 'тижні', 'before': 'раніше, до',
      'time': 'час; раз', 'around': 'навколо, по', 'highlands': 'нагір’я (Шотландії)', 'sound': 'звучати', 'weather': 'погода',
      'rain': 'дощ; йти (про дощ)', 'rained': 'йшов дощ', 'almost': 'майже', 'every': 'кожен', 'day': 'день', 'view': 'краєвид',
      'incredible': 'неймовірний', 'real': 'справжній', 'castle': 'замок', 'lake': 'озеро', 'lucky': 'щасливий, везучий', 'lucky you': 'щастить тобі',
      'should': 'варто, слід', 'send': 'надсилати', 'sent': 'надіслала (send)', 'photo': 'фото', 'sunny': 'сонячний', 'warm': 'теплий',
      'snowy': 'сніжний', 'rainy': 'дощовий', 'month': 'місяць', 'home': 'додому; дім', 'last': 'минулий; останній', 'email': 'електронний лист',
      'recently': 'нещодавно', 'mention': 'згадати', 'thing': 'річ', 'recommend': 'рекомендувати', 'definitely': 'безперечно', 'write': 'писати',
      'write back': 'відписати', 'soon': 'скоро', 'interesting': 'цікавий', 'problem': 'проблема', 'while': 'під час, поки', 'happen': 'траплятися',
      'happened': 'сталося', 'describe': 'описати', 'love': 'любити', 'would love': 'дуже хотів би', 'why': 'чому', 'because': 'тому що',
      'experience': 'досвід', 'story': 'історія', 'stories': 'історії', 'read': 'читати', 'complete': 'доповнити', 'sentence': 'речення',
      'correct': 'правильний', 'form': 'форма', 'verb': 'дієслово', 'option': 'варіант', 'choose': 'обирати', 'match': 'поєднати', 'pair': 'пара',
      'build': 'будувати, складати', 'dialogue': 'діалог', 'dictation': 'диктант', 'talk': 'говорити', 'word': 'слово', 'words': 'слова',
      'listen': 'слухати', 'answer': 'відповідь; відповідати', 'question': 'питання', 'scotland': 'Шотландія', 'portugal': 'Португалія',
      'portuguese': 'португальська', 'japan': 'Японія', 'asia': 'Азія', 'spain': 'Іспанія', 'london': 'Лондон', 'october': 'жовтень',
      'january': 'січень', 'march': 'березень', 'december': 'грудень', 'spring': 'весна', 'all over the world': 'по всьому світу',
      'wanted': 'хотів', 'tell': 'розповідати', 'sister': 'сестра', 'square': 'площа', 'quarter': 'квартал', 'full': 'повний',
      'tiny': 'крихітний', 'café': 'кафе', 'art': 'мистецтво', 'tired': 'втомлений', 'life': 'життя', 'beautiful': 'гарний',
      'expensive': 'дорогий', 'great': 'чудовий', 'swim': 'плавати', 'swam': 'плавали (swim)', 'sea': 'море', 'walk': 'гуляти, ходити',
      'along': 'вздовж', 'famous': 'відомий', 'stairs': 'сходи', 'platform': 'платформа', 'wait': 'чекати', 'next': 'наступний',
      'volcano': 'вулкан', 'volcanoes': 'вулкани', 'want': 'хотіти', 'which': 'який'
    }
  });
})();
