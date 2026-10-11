/*
 * A2 · Module 2 · Lesson 1 — What were you doing? (Past Continuous)
 * Review: Past Simple (A1), used to (module 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'The night the lights went out',
    text: `Last Friday there was a big power cut in our town. It started at exactly 8:15 p.m. and lasted for three hours. The next day the local newspaper asked people: “What were you doing when the lights went out?”

“I was cooking dinner for my family. The pasta was boiling and the sauce was almost ready. Suddenly everything went dark! We ate cold pasta by candlelight. It was actually quite romantic.” — Tetiana, 41

“My friends and I were playing an online game. We were winning! I was really angry because we didn’t finish.” — Bohdan, 16

“I wasn’t doing anything special. I was sitting on the sofa and my cat was sleeping on my knees. I didn’t even notice at first because I was listening to an audiobook on my phone.” — Liudmyla, 67

“I was working late at the hospital. Luckily, we have a generator, so the doctors were still working and the machines were running normally.” — Serhii, 33`
  };

  ENG.registerLesson({
    id: 'a2-m2-l1',
    level: 'a2',
    title: 'What were you doing? Що ти робив?',
    subtitle: 'Past Continuous: was / were + -ing · дія в процесі в минулому',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'The power cut',
            instructions: 'Прочитай, що люди робили, коли зникло світло.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'How long did the power cut last?', options: ['One hour', 'Three hours', 'All night'], answer: 1 },
              { id: 'q2', q: 'What was Tetiana doing?', options: ['Eating dinner', 'Cooking dinner', 'Washing up'], answer: 1 },
              { id: 'q3', q: 'Why was Bohdan angry?', options: ['They didn’t finish the game.', 'They lost the game.', 'His phone broke.'], answer: 0 },
              { id: 'q4', q: 'Why didn’t Liudmyla notice at first?', options: ['She was sleeping.', 'She was listening to an audiobook.', 'She was watching TV.'], answer: 1 },
              { id: 'q5', q: 'Why were the machines at the hospital working?', options: ['The power cut didn’t affect the hospital.', 'They have a generator.', 'They were using batteries.'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The power cut started at 8:15 in the morning.', answer: false, explain: '8:15 p.m. — увечері.' },
              { id: 's2', s: 'Tetiana’s family ate by candlelight.', answer: true },
              { id: 's3', s: 'Bohdan and his friends were losing the game.', answer: false, explain: '“We were winning!”' },
              { id: 's4', s: 'Liudmyla’s cat was sleeping on her knees.', answer: true },
              { id: 's5', s: 'Serhii was at home when the lights went out.', answer: false, explain: 'He was working at the hospital.' }
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
            title: 'At home & unexpected events',
            instructions: 'Слова про несподівані події та домашні справи.',
            cards: [
              { front: 'power cut', back: 'відключення світла', example: 'There was a power cut last night.' },
              { front: 'last (for)', back: 'тривати', example: 'The storm lasted for two hours.' },
              { front: 'go out (lights)', back: 'гаснути', example: 'Suddenly the lights went out.' },
              { front: 'suddenly', ipa: '/ˈsʌdənli/', back: 'раптом', example: 'Suddenly everything went dark.' },
              { front: 'boil', ipa: '/bɔɪl/', back: 'кипіти, варити', example: 'The water was boiling.' },
              { front: 'by candlelight', ipa: '/ˈkændllaɪt/', back: 'при свічках', example: 'We ate by candlelight.' },
              { front: 'notice', ipa: '/ˈnəʊtɪs/', back: 'помічати', example: 'I didn’t notice anything.' },
              { front: 'at first', back: 'спочатку', example: 'At first I didn’t understand.' },
              { front: 'luckily', ipa: '/ˈlʌkɪli/', back: 'на щастя', example: 'Luckily, nobody was hurt.' },
              { front: 'actually', ipa: '/ˈæktʃuəli/', back: 'насправді', example: 'It was actually quite fun.' },
              { front: 'audiobook', back: 'аудіокнига', example: 'I was listening to an audiobook.' },
              { front: 'wash up', back: 'мити посуд', example: 'Who’s washing up tonight?' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Match the phrases',
            instructions: 'Поєднай англійські вирази з перекладом.',
            pairs: [
              ['power cut', 'відключення світла'],
              ['the lights went out', 'світло згасло'],
              ['by candlelight', 'при свічках'],
              ['luckily', 'на щастя'],
              ['suddenly', 'раптом'],
              ['at first', 'спочатку'],
              ['actually', 'насправді'],
              ['work late', 'працювати допізна']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the story',
            instructions: 'Встав слова. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'There was a {{power}} cut in our building last night.' },
              { id: 'd2', text: 'It {{lasted}} for about two hours.' },
              { id: 'd3', text: '{{Suddenly}} the TV went off and everything was dark.' },
              { id: 'd4', text: 'We found some candles and had dinner by {{candlelight}}.' },
              { id: 'd5', text: '{{Luckily}}, my phone was fully charged.' },
              { id: 'd6', text: 'My dad didn’t {{notice}} — he was sleeping!' }
            ],
            distractors: ['boil']
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
            title: 'Past Continuous',
            instructions: 'Як сказати, що дія тривала в певний момент минулого («я саме готувала вечерю»).',
            html: `
<h3>1. Коли вживаємо?</h3>
<ul>
  <li><b>Дія в процесі в конкретний момент минулого:</b> At 8:15 I <mark>was cooking</mark> dinner. — О 8:15 я <u>саме готувала</u> вечерю.</li>
  <li><b>Фон, «декорації» для історії:</b> It <mark>was raining</mark> and the birds <mark>were singing</mark>.</li>
  <li><b>Дві тривалі дії одночасно</b> (часто з while): I <mark>was reading</mark> while my cat <mark>was sleeping</mark>.</li>
</ul>
<p>💡 Це «минула версія» Present Continuous: що відбувалось <b>тоді</b>, у той момент.</p>

<h3>2. Форма: was / were + -ing</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>I / he / she / it</td><td>She <b>was working</b>.</td><td>She <b>wasn’t working</b>.</td><td><b>Was</b> she <b>working</b>?</td></tr>
  <tr><td>you / we / they</td><td>We <b>were playing</b>.</td><td>We <b>weren’t playing</b>.</td><td><b>Were</b> you <b>playing</b>?</td></tr>
  <tr><td colspan="4">Коротко: Yes, she was. / No, they weren’t. &nbsp;·&nbsp; What <b>were</b> you <b>doing</b>? Where <b>was</b> he <b>going</b>?</td></tr>
</table></div>

<h3>3. Порівняй з Past Simple</h3>
<div class="table-wrap"><table>
  <tr><th>Past Simple — завершена дія</th><th>Past Continuous — дія в процесі</th></tr>
  <tr><td>I <b>cooked</b> dinner yesterday. <span class="muted">(і приготувала)</span></td><td>At 8 p.m. I <b>was cooking</b> dinner. <span class="muted">(саме в процесі)</span></td></tr>
  <tr><td>We <b>played</b> a game. <span class="muted">(від початку до кінця)</span></td><td>We <b>were playing</b> a game <b>when</b> the lights went out. <span class="muted">(не закінчили)</span></td></tr>
</table></div>

<h3>4. Слова-підказки</h3>
<p><b>at 8 o’clock yesterday, at that moment, at this time last week, all evening, while</b></p>
<p>⚠️ Дієслова стану (know, like, want…) і тут не люблять -ing: I <b>wanted</b> some tea (не «was wanting»).</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I was cook dinner.</span> → <span class="yes">I was cooking dinner.</span><br>
<span class="no">They was playing.</span> → <span class="yes">They were playing.</span><br>
<span class="no">What did you doing?</span> → <span class="yes">What were you doing?</span><br>
<span class="no">I was knowing the answer.</span> → <span class="yes">I knew the answer.</span></div>`
          },
          {
            id: 'gram-form',
            type: 'gap',
            title: 'was / were + -ing',
            instructions: 'Постав дієслово в Past Continuous.',
            items: [
              { id: 'g1', text: 'At 8:15 Tetiana {{was cooking}} dinner. (cook)' },
              { id: 'g2', text: 'Bohdan and his friends {{were playing}} a game. (play)' },
              { id: 'g3', text: 'Liudmyla {{was sitting}} on the sofa. (sit)' },
              { id: 'g4', text: 'Her cat {{was sleeping}} on her knees. (sleep)' },
              { id: 'g5', text: 'I {{wasn’t watching|was not watching}} TV. (− watch)' },
              { id: 'g6', text: 'What {{were}} you doing at 8 p.m.?' },
              { id: 'g7', text: '{{Was}} Serhii working late? — Yes, he was.' }
            ]
          },
          {
            id: 'gram-psvspc',
            type: 'choice',
            title: 'Past Simple or Past Continuous?',
            instructions: 'Завершена дія чи дія в процесі?',
            items: [
              { id: 'c1', q: 'At ten o’clock last night I ___ a film.', options: ['watched', 'was watching'], answer: 1 },
              { id: 'c2', q: 'Yesterday I ___ two films.', options: ['watched', 'was watching'], answer: 0 },
              { id: 'c3', q: 'It ___ all evening, so we stayed at home.', options: ['rained', 'was raining'], answer: 1 },
              { id: 'c4', q: 'I ___ my keys on the bus yesterday.', options: ['lost', 'was losing'], answer: 0 },
              { id: 'c5', q: 'While I ___, my husband was reading.', options: ['cooked', 'was cooking'], answer: 1 },
              { id: 'c6', q: 'I ___ the answer to his question.', options: ['knew', 'was knowing'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Що ви робили о дев’ятій вечора?', answer: 'What were you doing at nine p.m.?', extra: ['did'] },
              { id: 'o2', prompt: 'Ішов дощ, і дув сильний вітер.', answer: 'It was raining and a strong wind was blowing.' },
              { id: 'o3', prompt: 'Вони не спали.', answer: "They weren't sleeping." },
              { id: 'o4', prompt: 'Поки я працювала, діти гралися.', answer: 'While I was working, the children were playing.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: Past Simple і used to',
            instructions: 'Згадаймо A1 і модуль 1.',
            items: [
              { id: 'r1', text: 'The power cut {{lasted}} three hours. (last)' },
              { id: 'r2', text: 'We {{ate}} cold pasta. (eat)' },
              { id: 'r3', text: 'People {{used to}} use candles every evening a hundred years ago.' },
              { id: 'r4', text: 'Bohdan {{didn’t finish|did not finish}} the game. (− finish)' }
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
            title: 'A witness',
            instructions: 'Поліцейська опитує свідка, який бачив крадіжку велосипеда. Послухай.',
            audio: {
              title: 'Dialogue: Police officer & Witness',
              lines: [
                { who: 'Officer', text: 'So, Mr Bondar, what were you doing at about six o’clock?' },
                { who: 'Witness', text: 'I was waiting for the bus outside the supermarket. It was raining, so I was standing under the roof.' },
                { who: 'Officer', text: 'And what did you see?' },
                { who: 'Witness', text: 'A young man was walking past the bikes. He was wearing a black jacket and a red cap. He was talking on his phone.' },
                { who: 'Officer', text: 'Was anyone with him?' },
                { who: 'Witness', text: 'No, he was alone. Then he stopped, took a blue bike and rode away very fast.' },
                { who: 'Officer', text: 'Which direction was he going?' },
                { who: 'Witness', text: 'Towards the park. Sorry, I wasn’t paying much attention — my bus was coming!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What was the witness doing?', options: ['Shopping', 'Waiting for the bus', 'Riding a bike'], answer: 1 },
              { id: 'l2', q: 'What was the weather like?', options: ['It was snowing.', 'It was raining.', 'It was sunny.'], answer: 1 },
              { id: 'l3', q: 'What was the man wearing?', options: ['A black jacket and a red cap', 'A red jacket and a black cap', 'A blue coat'], answer: 0 },
              { id: 'l4', q: 'What was the man doing before he took the bike?', options: ['Talking on his phone', 'Eating', 'Running'], answer: 0 },
              { id: 'l5', q: 'Where was he going?', options: ['Towards the station', 'Towards the park', 'Into the supermarket'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What were you doing at six o’clock?' },
              { id: 'dc2', text: 'I was waiting for the bus.' },
              { id: 'dc3', text: 'He was wearing a black jacket.' },
              { id: 'dc4', text: 'I wasn’t paying much attention.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-moment',
            type: 'writing',
            title: 'Where were you?',
            instructions: 'Опиши уявний (або реальний) момент: що відбувалося навколо тебе в певний час учора.',
            prompt: 'Describe yesterday at 7 p.m. (80–100 words).\n• Where were you? What were you doing?\n• What were other people around you doing? (2–3 people)\n• What was the weather like? What could you hear?\n• Use at least 6 verbs in Past Continuous and one negative.',
            minWords: 80,
            maxWords: 110,
            phrases: ['Yesterday at 7 p.m.', 'I was', 'were', 'wasn’t', 'while', 'It was raining'],
            checklist: ['Щонайменше 6 дієслів у Past Continuous', 'was — I/he/she/it, were — you/we/they', 'Є заперечення wasn’t / weren’t', 'Є while'],
            model: `Yesterday at 7 p.m. I was sitting in a café near my office. I was waiting for my friend Lena, who was late as usual. It was raining outside and people were running with their umbrellas.

At the next table a young couple was having dinner. They weren’t talking — they were looking at their phones! The waiter was carrying a huge cake to a group of students who were celebrating a birthday. Soft jazz was playing.

While I was drinking my tea, Lena came in. She was smiling and holding a big bag of shopping.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-alibi',
            type: 'speaking',
            title: 'Your alibi',
            instructions: 'Детектив питає тебе! Відповідай уголос, використовуючи Past Continuous.',
            phrases: ['At that time I was…', 'I wasn’t…', 'My … was…', 'While I was…'],
            tasks: [
              { id: 'sp1', q: 'What were you doing yesterday at 8 a.m., 1 p.m. and 9 p.m.?', tips: 'At 8 a.m. I was … At 1 p.m. I was …', model: 'At 8 a.m. I was having breakfast. At 1 p.m. I was working. At 9 p.m. I was watching a series.' },
              { id: 'sp2', q: 'What were your family or neighbours doing last night?', tips: 'My … was … while …', model: 'My husband was cooking while my son was doing his homework.' },
              { id: 'sp3', q: 'Describe the scene outside your window this morning.', tips: 'The sun was … People were …', model: 'The sun was shining and some children were walking to school.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'night': 'ніч', 'lights': 'світло', 'went out': 'згасли', 'go out': 'гаснути', 'power cut': 'відключення світла', 'town': 'місто', 'started': 'почалося',
      'exactly': 'рівно', 'lasted': 'тривало', 'last': 'тривати', 'next day': 'наступного дня', 'local': 'місцевий', 'newspaper': 'газета', 'asked': 'запитала',
      'what were you doing': 'що ви робили', 'cooking': 'готувала', 'dinner': 'вечеря', 'family': 'сім’я', 'pasta': 'макарони', 'boiling': 'кипіли',
      'sauce': 'соус', 'almost': 'майже', 'ready': 'готовий', 'suddenly': 'раптом', 'everything': 'все', 'went dark': 'стало темно', 'cold': 'холодні',
      'by candlelight': 'при свічках', 'actually': 'насправді', 'quite': 'досить', 'romantic': 'романтично', 'playing': 'грали', 'online game': 'онлайн-гра',
      'winning': 'вигравали', 'really': 'справді', 'angry': 'злий', 'finish': 'закінчити', 'anything special': 'нічого особливого', 'sitting': 'сиділа',
      'sofa': 'диван', 'cat': 'кіт', 'sleeping': 'спав', 'knees': 'коліна', 'even': 'навіть', 'notice': 'помітити', 'at first': 'спочатку', 'listening to': 'слухала',
      'audiobook': 'аудіокнига', 'phone': 'телефон', 'working late': 'працював допізна', 'hospital': 'лікарня', 'luckily': 'на щастя', 'generator': 'генератор',
      'doctors': 'лікарі', 'still': 'досі', 'machines': 'апарати', 'running': 'працювали', 'normally': 'нормально', 'hour': 'година', 'all night': 'всю ніч',
      'washing up': 'миття посуду', 'lost': 'програли', 'broke': 'зламався', 'affect': 'впливати', 'batteries': 'батареї', 'morning': 'ранок',
      'losing': 'програвали', 'storm': 'буря', 'nobody': 'ніхто', 'hurt': 'постраждав', 'fun': 'весело', 'wash up': 'мити посуд', 'tonight': 'сьогодні ввечері',
      'building': 'будинок', 'tv': 'телевізор', 'went off': 'вимкнувся', 'dark': 'темно', 'found': 'знайшли', 'candles': 'свічки', 'fully charged': 'повністю заряджений',
      'boil': 'кипіти', 'film': 'фільм', 'rained': 'йшов дощ', 'raining': 'йшов дощ', 'stayed': 'залишилися', 'keys': 'ключі', 'bus': 'автобус',
      'while': 'поки, у той час як', 'husband': 'чоловік', 'reading': 'читав', 'knew': 'знав', 'answer': 'відповідь', 'question': 'питання',
      'strong': 'сильний', 'wind': 'вітер', 'blowing': 'дув', 'children': 'діти', 'candle': 'свічка', 'hundred': 'сто', 'witness': 'свідок',
      'police officer': 'поліцейська', 'about': 'приблизно', 'waiting for': 'чекав на', 'outside': 'біля, надворі', 'supermarket': 'супермаркет',
      'standing': 'стояв', 'under': 'під', 'roof': 'дах', 'see': 'бачити', 'young': 'молодий', 'walking past': 'проходив повз', 'bikes': 'велосипеди',
      'wearing': 'був вдягнений', 'jacket': 'куртка', 'cap': 'кепка', 'talking': 'розмовляв', 'anyone': 'хтось', 'alone': 'сам', 'stopped': 'зупинився',
      'took': 'взяв', 'rode away': 'поїхав геть', 'fast': 'швидко', 'direction': 'напрямок', 'towards': 'у бік', 'park': 'парк', 'paying attention': 'звертав увагу',
      'coming': 'під’їжджав', 'shopping': 'покупки', 'snowing': 'йшов сніг', 'sunny': 'сонячно', 'coat': 'пальто', 'eating': 'їв', 'station': 'вокзал',
      'café': 'кафе', 'near': 'біля', 'office': 'офіс', 'late': 'запізнювалась', 'as usual': 'як завжди', 'umbrellas': 'парасольки', 'next': 'сусідній',
      'couple': 'пара', 'looking at': 'дивилися на', 'waiter': 'офіціант', 'carrying': 'ніс', 'huge': 'величезний', 'cake': 'торт', 'group': 'група',
      'students': 'студенти', 'celebrating': 'святкували', 'birthday': 'день народження', 'soft': 'тихий', 'jazz': 'джаз', 'drinking': 'пила', 'tea': 'чай',
      'came in': 'увійшла', 'smiling': 'усміхалася', 'holding': 'тримала', 'bag': 'сумка', 'alibi': 'алібі', 'breakfast': 'сніданок', 'series': 'серіал',
      'neighbours': 'сусіди', 'son': 'син', 'homework': 'домашнє завдання', 'scene': 'сцена', 'window': 'вікно', 'sun': 'сонце', 'shining': 'світило',
      'school': 'школа', 'was': 'був', 'were': 'були', "wasn't": 'не був', "weren't": 'не були', "didn't": 'не'
    }
  });
})();
