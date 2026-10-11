/*
 * A2 · Module 4 · Lesson 2 — My diary (Present Continuous for future arrangements; timetables with Present Simple)
 * Review: be going to (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'A very busy week',
    text: `Hi Olia! Thanks for your message. I’d love to meet, but my week is crazy. Let me check my diary…

On Monday I’m seeing the dentist at nine — not my favourite way to start the week! In the afternoon my boss and I are meeting some new clients from Poland.

On Tuesday evening I’m having dinner with my parents. It’s Dad’s birthday, and we’re going to a Georgian restaurant. My brother is booking the table.

Wednesday is my only free evening. Are you doing anything? We could go to the cinema — the new Ukrainian comedy starts at 7:30.

On Thursday I’m flying to Lviv for a conference. My flight leaves at 6:15 a.m., so I’m not going to sleep much! I’m giving a presentation on Friday morning, and I’m coming back on Friday night.

On Saturday Taras and I are helping his sister. She’s moving to a new flat.

So — Wednesday? Let me know!
Kateryna`
  };

  ENG.registerLesson({
    id: 'a2-m4-l2',
    level: 'a2',
    title: 'My diary. Мій розклад',
    subtitle: 'Present Continuous для домовленостей · Present Simple для розкладів · going to чи Continuous',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Kateryna’s week',
            instructions: 'Прочитай повідомлення Катерини про її тиждень.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What is Kateryna doing on Monday morning?', options: ['Meeting clients', 'Seeing the dentist', 'Flying to Lviv'], answer: 1 },
              { id: 'q2', q: 'Why is she having dinner with her parents on Tuesday?', options: ['It’s her dad’s birthday.', 'They are moving.', 'Her brother is visiting.'], answer: 0 },
              { id: 'q3', q: 'Which evening is she free?', options: ['Tuesday', 'Wednesday', 'Friday'], answer: 1 },
              { id: 'q4', q: 'What is she doing in Lviv?', options: ['Visiting friends', 'Going to a conference', 'Moving flats'], answer: 1 },
              { id: 'q5', q: 'What is she doing on Saturday?', options: ['Resting', 'Helping Taras’s sister move', 'Seeing a film'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Kateryna’s brother is booking a table.', answer: true },
              { id: 's2', s: 'The comedy starts at 7:30.', answer: true },
              { id: 's3', s: 'Her flight to Lviv leaves in the evening.', answer: false, explain: 'It leaves at 6:15 a.m.' },
              { id: 's4', s: 'She is giving a presentation on Thursday.', answer: false, explain: 'On Friday morning.' },
              { id: 's5', s: 'She is coming back on Saturday.', answer: false, explain: 'She’s coming back on Friday night.' }
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
            title: 'Arrangements',
            instructions: 'Слова про зустрічі, домовленості й розклад.',
            cards: [
              { front: 'diary / calendar', ipa: '/ˈdaɪəri/', back: 'щоденник-розклад / календар', example: 'Let me check my diary.' },
              { front: 'appointment', ipa: '/əˈpɔɪntmənt/', back: 'запис (до лікаря тощо)', example: 'I have a dentist’s appointment.' },
              { front: 'meeting', back: 'зустріч, нарада', example: 'We’re having a meeting at ten.' },
              { front: 'book a table', back: 'забронювати столик', example: 'I’m booking a table for four.' },
              { front: 'free / busy', back: 'вільний / зайнятий', example: 'Are you free on Wednesday?' },
              { front: 'conference', ipa: '/ˈkɒnfərəns/', back: 'конференція', example: 'I’m flying to a conference.' },
              { front: 'give a presentation', back: 'робити презентацію', example: 'She’s giving a presentation.' },
              { front: 'come back', back: 'повертатися', example: 'I’m coming back on Friday.' },
              { front: 'Let me know!', back: 'Дай знати!', example: 'Let me know if you’re free.' },
              { front: 'get together', back: 'зібратися, зустрітися', example: 'Let’s get together next week.' },
              { front: 'cancel', ipa: '/ˈkænsl/', back: 'скасувати', example: 'I need to cancel our meeting.' },
              { front: 'crazy (week)', back: 'шалений (тиждень)', example: 'My week is crazy!' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Make arrangements',
            instructions: 'Поєднай частини фраз.',
            pairs: [
              ['book', 'a table'],
              ['make', 'an appointment'],
              ['give', 'a presentation'],
              ['check', 'your diary'],
              ['cancel', 'a meeting'],
              ['catch', 'a flight'],
              ['have', 'dinner with friends'],
              ['let', 'me know']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Planning a meeting',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'I have a doctor’s {{appointment}} at 10.' },
              { id: 'd2', text: 'Are you {{free}} on Thursday evening?' },
              { id: 'd3', text: 'Sorry, I’m {{busy}} on Monday.' },
              { id: 'd4', text: 'I’m sick, so I need to {{cancel}} our lesson.' },
              { id: 'd5', text: 'Shall I {{book}} a table at the Italian place?' },
              { id: 'd6', text: 'Let me check my {{diary}}.' }
            ],
            distractors: ['conference']
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
            title: 'Present Continuous for the future',
            instructions: 'Present Continuous вміє говорити не лише про «зараз», а й про майбутнє — коли вже є домовленість.',
            html: `
<h3>1. Домовленості (arrangements)</h3>
<p>Коли план <b>уже узгоджено</b> з іншими людьми, є час і місце (запис у календарі), вживаємо <b>Present Continuous</b>:</p>
<div class="ex-line">On Monday I<mark>’m seeing</mark> the dentist at nine. <span class="muted">(є запис)</span></div>
<div class="ex-line">On Tuesday we<mark>’re having</mark> dinner with my parents. <span class="muted">(домовилися)</span></div>
<p>Майже завжди є <b>слово часу</b>: tomorrow, on Friday, next week, at 7, tonight. Без нього речення означатиме «зараз».</p>

<h3>2. going to чи Present Continuous?</h3>
<div class="table-wrap"><table>
  <tr><th>be going to — намір (я вирішив)</th><th>Present Continuous — домовленість (все організовано)</th></tr>
  <tr><td>I<b>’m going to</b> visit Rome one day.<br>I<b>’m going to</b> learn Italian.</td><td>I<b>’m flying</b> to Lviv on Thursday. <span class="muted">(квиток куплено)</span><br>We<b>’re meeting</b> at 7. <span class="muted">(домовились)</span></td></tr>
</table></div>
<p>💡 Часто обидва варіанти можливі. Але для узгоджених зустрічей англійці зазвичай кажуть Present Continuous.</p>

<h3>3. Present Simple — розклади</h3>
<p>Для <b>офіційних розкладів</b> (потяги, літаки, кіно, уроки) — Present Simple:</p>
<div class="ex-line">My flight <mark>leaves</mark> at 6:15. · The film <mark>starts</mark> at 7:30. · The shop <mark>closes</mark> at 9.</div>

<h3>4. Корисні фрази для домовленостей</h3>
<ul>
  <li><b>Are you doing anything</b> on Wednesday? — Ти щось робиш у середу?</li>
  <li><b>What are you doing</b> tonight? — Що ти робиш сьогодні ввечері?</li>
  <li>Sorry, I<b>’m working</b> late / I<b>’m meeting</b> Ira. — Вибач, у мене…</li>
  <li><b>Let’s meet</b> at… / <b>Shall we</b> go to…? / <b>How about</b> Friday?</li>
</ul>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">Tomorrow I meet my boss.</span> → <span class="yes">Tomorrow I’m meeting my boss.</span><br>
<span class="no">The train is leaving at 6 every day.</span> → <span class="yes">The train leaves at 6.</span><br>
<span class="no">What do you do tonight?</span> → <span class="yes">What are you doing tonight?</span></div>`
          },
          {
            id: 'gram-pc',
            type: 'gap',
            title: 'Kateryna’s diary',
            instructions: 'Встав дієслово в Present Continuous (домовленість) або Present Simple (розклад).',
            items: [
              { id: 'g1', text: 'On Monday I {{’m seeing|am seeing}} the dentist. (see)' },
              { id: 'g2', text: 'We {{’re meeting|are meeting}} new clients in the afternoon. (meet)' },
              { id: 'g3', text: 'The film {{starts}} at 7:30. (start)' },
              { id: 'g4', text: 'My flight {{leaves}} at 6:15 a.m. (leave)' },
              { id: 'g5', text: 'On Friday I {{’m giving|am giving}} a presentation. (give)' },
              { id: 'g6', text: 'His sister {{’s moving|is moving}} to a new flat on Saturday. (move)' },
              { id: 'g7', text: '{{Are}} you doing anything on Wednesday?' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Which future form?',
            instructions: 'Намір (going to), домовленість (Present Continuous) чи розклад (Present Simple)?',
            items: [
              { id: 'c1', q: 'I’ve booked a table. We ___ dinner at 8.', options: ['have', 'are having', 'are going to have one day'], answer: 1 },
              { id: 'c2', q: 'The museum ___ at 10 a.m. tomorrow.', options: ['opens', 'is opening', 'is going to open'], answer: 0 },
              { id: 'c3', q: 'One day I ___ a book about my grandmother.', options: ['write', 'am writing', 'am going to write'], answer: 2 },
              { id: 'c4', q: 'What ___ tonight? Do you want to come over?', options: ['do you do', 'are you doing', 'you are doing'], answer: 1 },
              { id: 'c5', q: 'The last bus ___ at midnight.', options: ['leaves', 'is leaving', 'leave'], answer: 0 },
              { id: 'c6', q: 'Sorry, I can’t come. I ___ my parents on Sunday.', options: ['visit', 'am visiting', 'visited'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Make arrangements',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Що ти робиш у суботу ввечері?', answer: 'What are you doing on Saturday evening?' },
              { id: 'o2', prompt: 'Я зустрічаюся з Ірою о сьомій.', answer: "I'm meeting Ira at seven." },
              { id: 'o3', prompt: 'Фільм починається о 19:30.', answer: 'The film starts at 7:30.', extra: ['is'] },
              { id: 'o4', prompt: 'Ми летимо до Львова в четвер.', answer: "We're flying to Lviv on Thursday." }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: be going to + want to',
            instructions: 'Згадаймо урок 1.',
            items: [
              { id: 'r1', text: 'Kateryna {{is going to|’s going to}} be very tired on Thursday.' },
              { id: 'r2', text: 'She wants {{to}} meet Olia on Wednesday.' },
              { id: 'r3', text: 'Her boss wants {{her}} to meet the clients.' },
              { id: 'r4', text: 'I’d like {{to}} see the new comedy.' }
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
            title: 'Finding a time',
            instructions: 'Двоє друзів намагаються знайти час для зустрічі. Послухай.',
            audio: {
              title: 'Phone call: Dima & Ira',
              lines: [
                { who: 'Dima', text: 'Hi Ira! Are you doing anything on Friday evening? There’s a jazz concert in the park.' },
                { who: 'Ira', text: 'Oh, I’d love to, but I’m working late on Friday. We have a big deadline.' },
                { who: 'Dima', text: 'What about Saturday?' },
                { who: 'Ira', text: 'On Saturday morning I’m playing tennis with my sister, and in the afternoon I’m taking my son to a birthday party. But I’m free in the evening!' },
                { who: 'Dima', text: 'Great. The concert is on Saturday too — it starts at eight.' },
                { who: 'Ira', text: 'Perfect! Shall we meet at the park entrance at half past seven?' },
                { who: 'Dima', text: 'Sounds good. I’m bringing some sandwiches!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Why can’t Ira go on Friday?', options: ['She’s working late.', 'She’s ill.', 'She’s visiting her sister.'], answer: 0 },
              { id: 'l2', q: 'What is Ira doing on Saturday morning?', options: ['Working', 'Playing tennis', 'Shopping'], answer: 1 },
              { id: 'l3', q: 'What is she doing on Saturday afternoon?', options: ['Taking her son to a party', 'Going to a concert', 'Sleeping'], answer: 0 },
              { id: 'l4', q: 'When does the concert start?', options: ['At 7:30', 'At 8:00', 'At 8:30'], answer: 1 },
              { id: 'l5', q: 'Where are they meeting?', options: ['At a café', 'At the park entrance', 'At Ira’s house'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Are you doing anything on Friday evening?' },
              { id: 'dc2', text: 'I’m working late on Friday.' },
              { id: 'dc3', text: 'The concert starts at eight.' },
              { id: 'dc4', text: 'Shall we meet at the park entrance?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-week',
            type: 'writing',
            title: 'My week ahead',
            instructions: 'Друг пропонує зустрітися. Напиши відповідь: що ти робиш цього тижня і коли ти вільний(а).',
            prompt: 'Reply to a friend (90–120 words).\n• Describe your arrangements for 4–5 days (Present Continuous + time words).\n• Mention one timetable (a train, a film, a class — Present Simple).\n• Mention one intention (going to).\n• Suggest a day and time to meet.',
            minWords: 90,
            maxWords: 130,
            phrases: ['On Monday I’m', 'I’m meeting', 'starts at', 'leaves at', 'I’m going to', 'I’m free on', 'Shall we'],
            checklist: ['Щонайменше 5 домовленостей у Present Continuous', 'Кожна має слово часу (on Monday, at 7…)', 'Є розклад у Present Simple', 'Є пропозиція зустрітися'],
            model: `Hi Max! Great to hear from you. This week is quite busy, but let’s find a time.

On Monday I’m having a job interview at ten — wish me luck! On Tuesday evening I’m meeting my old school friends for dinner. On Wednesday I’m taking my car to the garage, and my yoga class starts at six.

On Thursday my sister is visiting from Kharkiv. Her train arrives at 9 p.m., so I’m picking her up from the station. I’m going to show her the new bridge on Friday.

I’m free on Saturday afternoon. Shall we have coffee at three? Let me know!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-arrange',
            type: 'speaking',
            title: 'Let’s meet!',
            instructions: 'Домовляйся про зустріч уголос.',
            phrases: ['Are you doing anything on…?', 'Sorry, I’m…ing', 'I’m free on…', 'Shall we…?', 'How about…?'],
            tasks: [
              { id: 'sp1', q: 'What are you doing tomorrow and this weekend?', tips: 'Tomorrow I’m … On Saturday I’m …', model: 'Tomorrow I’m working until six. On Saturday I’m meeting my sister for lunch.' },
              { id: 'sp2', q: 'A friend invites you to the cinema on Friday. You are busy. Say no politely and suggest another day.', tips: 'I’d love to, but I’m … How about …?', model: 'I’d love to, but I’m having dinner with my parents on Friday. How about Sunday?' },
              { id: 'sp3', q: 'Tell me about one timetable you use (bus, train, classes).', tips: 'My bus leaves at … My class starts at …', model: 'My bus leaves at 7:40, and my English class starts at half past six on Tuesdays.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'busy': 'зайнятий', 'week': 'тиждень', 'thanks': 'дякую', 'message': 'повідомлення', "i'd love to": 'я б із радістю', 'meet': 'зустрітися', 'crazy': 'шалений',
      'let me check': 'дай перевірю', 'diary': 'розклад, щоденник', "i'm seeing": 'я йду до (запис)', 'dentist': 'стоматолог', 'favourite': 'улюблений',
      'way': 'спосіб', 'start': 'почати', 'afternoon': 'після обіду', 'boss': 'начальник', 'meeting': 'зустрічаємося', 'clients': 'клієнти', 'poland': 'Польща',
      'evening': 'вечір', 'having dinner': 'вечеряю', 'parents': 'батьки', 'birthday': 'день народження', 'georgian': 'грузинський', 'restaurant': 'ресторан',
      'brother': 'брат', 'booking': 'бронює', 'table': 'столик', 'only': 'єдиний', 'free': 'вільний', 'anything': 'щось', 'could': 'могли б', 'cinema': 'кінотеатр',
      'comedy': 'комедія', 'starts': 'починається', 'flying': 'лечу', 'conference': 'конференція', 'flight': 'рейс', 'leaves': 'відлітає',
      'sleep much': 'багато спати', 'giving a presentation': 'роблю презентацію', 'coming back': 'повертаюся', 'friday night': 'п’ятниця ввечері',
      'helping': 'допомагаємо', 'sister': 'сестра', 'moving': 'переїжджає', 'new flat': 'нова квартира', 'so': 'отже', 'let me know': 'дай знати',
      'morning': 'ранок', 'resting': 'відпочивати', 'film': 'фільм', 'calendar': 'календар', 'appointment': 'запис (до лікаря)', 'book a table': 'забронювати столик',
      'give a presentation': 'зробити презентацію', 'come back': 'повернутися', 'get together': 'зібратися', 'cancel': 'скасувати', 'make': 'зробити',
      'check': 'перевірити', 'catch a flight': 'встигнути на рейс', 'friends': 'друзі', "doctor's": 'у лікаря', 'thursday': 'четвер', 'monday': 'понеділок',
      'sick': 'хворий', 'lesson': 'урок', 'shall i': 'мені', 'italian place': 'італійський ресторан', 'tomorrow': 'завтра', 'tonight': 'сьогодні ввечері',
      'next week': 'наступного тижня', 'one day': 'колись', 'learn': 'вчити', 'ticket': 'квиток', 'bought': 'куплено', 'agreed': 'домовилися',
      'shop': 'магазин', 'closes': 'зачиняється', 'working late': 'працюю допізна', "let's meet": 'давай зустрінемося', 'shall we': 'може', 'how about': 'як щодо',
      'museum': 'музей', 'opens': 'відкривається', 'write': 'писати', 'book': 'книга', 'grandmother': 'бабуся', 'come over': 'зайти в гості',
      'last bus': 'останній автобус', 'midnight': 'північ', "can't come": 'не можу прийти', 'visit': 'відвідати', 'sunday': 'неділя', 'saturday': 'субота',
      'tired': 'втомлена', 'jazz': 'джаз', 'concert': 'концерт', 'park': 'парк', 'deadline': 'дедлайн', 'what about': 'як щодо', 'playing tennis': 'граю в теніс',
      'taking': 'веду', 'son': 'син', 'party': 'свято', 'great': 'чудово', 'perfect': 'ідеально', 'entrance': 'вхід', 'half past seven': 'пів на восьму',
      'sounds good': 'звучить добре', 'bringing': 'принесу', 'sandwiches': 'бутерброди', 'ill': 'хвора', 'shopping': 'шопінг', 'sleeping': 'спати',
      'ahead': 'попереду', 'reply': 'відповісти', 'great to hear from you': 'радий тебе чути', 'quite': 'досить', 'find a time': 'знайти час',
      'job interview': 'співбесіда', 'wish me luck': 'побажай мені удачі', 'old school friends': 'шкільні друзі', 'car': 'машина', 'garage': 'автосервіс',
      'yoga class': 'заняття йогою', 'visiting': 'приїжджає', 'train': 'потяг', 'arrives': 'прибуває', 'picking her up': 'зустрічаю її', 'station': 'вокзал',
      'show': 'показати', 'bridge': 'міст', 'coffee': 'кава', 'invites': 'запрошує', 'politely': 'ввічливо', 'another': 'інший', 'until': 'до',
      'lunch': 'обід', 'timetable': 'розклад', 'bus': 'автобус', 'classes': 'заняття', 'tuesdays': 'вівторки', "i'm": 'я (є)', "we're": 'ми (є)',
      "she's": 'вона (є)', "it's": 'це (є)'
    }
  });
})();
