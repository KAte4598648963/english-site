/*
 * A2 · Module 4 · Lesson 4 — Review: The big day
 * Reviews: be going to, Present Continuous for arrangements, Present Simple for timetables, will / won’t.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Two weeks to the wedding',
    text: `Hi Mum! Here’s the latest news about the wedding.

Everything is (almost) ready. The ceremony starts at 2 p.m. on Saturday the 14th, in the little church in Pyrohiv. After that we’re having the party at a restaurant by the river. Oleh’s brother is driving us there in his old blue car — he spent all summer repairing it!

We’re going to have about sixty guests. I know, I know — it’s more than we planned! The band is playing from 6 till midnight, and Oleh is going to sing one song for me. I’m sure he’ll be nervous, but I think it’ll be very romantic.

The weather forecast says it’s going to be sunny, but I’m worried it will rain. Just in case, I’m going to buy some white umbrellas.

On Monday I’m picking up my dress. On Wednesday Oleh and I are meeting the photographer. Grandma’s train arrives on Friday at 10:40 — will you meet her at the station? I’ll send you the details.

Love you! See you very soon.
Sofiia`
  };

  ENG.registerLesson({
    id: 'a2-m4-l4',
    level: 'a2',
    title: 'Review: The big day',
    subtitle: 'Повторення модуля 4: going to, Present Continuous, Present Simple, will',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Wedding plans',
            instructions: 'Прочитай лист нареченої мамі про підготовку до весілля.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'When does the ceremony start?', options: ['At 12 p.m.', 'At 2 p.m.', 'At 6 p.m.'], answer: 1 },
              { id: 'q2', q: 'Where are they having the party?', options: ['In the church', 'At a restaurant by the river', 'At home'], answer: 1 },
              { id: 'q3', q: 'How many guests are they going to have?', options: ['About 16', 'About 60', 'About 100'], answer: 1 },
              { id: 'q4', q: 'Why is Sofiia going to buy umbrellas?', options: ['For the photos', 'In case it rains', 'As presents'], answer: 1 },
              { id: 'q5', q: 'What does Sofiia ask her mum to do?', options: ['Pick up the dress', 'Meet Grandma at the station', 'Book the band'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Oleh’s brother is driving them to the restaurant.', answer: true },
              { id: 's2', s: 'They planned to have more than sixty guests.', answer: false, explain: '“…it’s more than we planned!”' },
              { id: 's3', s: 'The band is playing until midnight.', answer: true },
              { id: 's4', s: 'The forecast says it’s going to rain.', answer: false, explain: 'The forecast says it’s going to be sunny.' },
              { id: 's5', s: 'Sofiia is meeting the photographer on Monday.', answer: false, explain: 'On Wednesday. On Monday she’s picking up her dress.' }
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
            title: 'Weddings + module review',
            instructions: 'Весільні слова й повторення модуля 4.',
            cards: [
              { front: 'wedding', ipa: '/ˈwedɪŋ/', back: 'весілля', example: 'The wedding is on Saturday.' },
              { front: 'ceremony', ipa: '/ˈserəməni/', back: 'церемонія', example: 'The ceremony starts at two.' },
              { front: 'bride / groom', ipa: '/braɪd/ /ɡruːm/', back: 'наречена / наречений', example: 'The bride looked beautiful.' },
              { front: 'guest', ipa: '/ɡest/', back: 'гість', example: 'We’re going to have sixty guests.' },
              { front: 'band', back: 'музичний гурт', example: 'The band is playing till midnight.' },
              { front: 'weather forecast', ipa: '/ˈfɔːkɑːst/', back: 'прогноз погоди', example: 'The forecast says it’ll be sunny.' },
              { front: 'just in case', back: 'про всяк випадок', example: 'Take an umbrella, just in case.' },
              { front: 'repair', ipa: '/rɪˈpeə/', back: 'ремонтувати', example: 'He repaired the old car.' },
              { front: 'nervous', back: 'схвильований', example: 'The groom was nervous.' },
              { front: 'appointment', back: 'запис, зустріч', example: 'I have an appointment at ten.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 4 words',
            instructions: 'Поєднай слова модуля 4 з перекладом.',
            pairs: [
              ['resolution', 'обіцянка собі'],
              ['save money', 'заощаджувати'],
              ['book a table', 'забронювати столик'],
              ['cancel', 'скасувати'],
              ['predict', 'передбачати'],
              ['replace', 'замінювати'],
              ['wedding', 'весілля'],
              ['just in case', 'про всяк випадок']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Wedding day',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'The {{bride}} wore a long white dress.' },
              { id: 'd2', text: 'The {{groom}} was so nervous that he forgot the ring!' },
              { id: 'd3', text: 'More than a hundred {{guests}} came to the party.' },
              { id: 'd4', text: 'The {{band}} played until two in the morning.' },
              { id: 'd5', text: 'Check the weather {{forecast}} before you go.' },
              { id: 'd6', text: 'The {{ceremony}} was short but beautiful.' }
            ],
            distractors: ['diary']
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
            title: 'Module 4 — talking about the future',
            instructions: 'Чотири способи говорити про майбутнє. Головне — відчувати різницю.',
            html: `
<div class="table-wrap"><table>
  <tr><th>Форма</th><th>Коли</th><th>Приклад з листа</th></tr>
  <tr><td><b>be going to</b></td><td>план, намір (вирішено раніше); прогноз за ознаками</td><td>We<b>’re going to have</b> sixty guests. It<b>’s going to be</b> sunny (каже прогноз).</td></tr>
  <tr><td><b>Present Continuous</b></td><td>домовленість з часом і людьми</td><td>On Wednesday we<b>’re meeting</b> the photographer.</td></tr>
  <tr><td><b>Present Simple</b></td><td>розклад, офіційний час</td><td>The ceremony <b>starts</b> at 2 p.m. Grandma’s train <b>arrives</b> at 10:40.</td></tr>
  <tr><td><b>will / won’t</b></td><td>прогноз-думка; рішення зараз; обіцянка, пропозиція, прохання</td><td>I think it<b>’ll be</b> romantic. I<b>’ll send</b> you the details. <b>Will</b> you meet her?</td></tr>
</table></div>

<h3>Як обрати? Задай собі питання:</h3>
<ul>
  <li>Це в розкладі? → <b>Present Simple</b></li>
  <li>Є домовленість, час, інші люди? → <b>Present Continuous</b></li>
  <li>Я вже вирішив(ла) це раніше? → <b>going to</b></li>
  <li>Я вирішую прямо зараз / пропоную / обіцяю / думаю, що буде? → <b>will</b></li>
</ul>

<h3>+ дієслова бажань</h3>
<div class="ex-line">I <b>want to</b> · I<b>’d like to</b> · I <b>hope to</b> · I<b>’m planning to</b> · She <b>wants me to</b> …</div>

<div class="tip">✅ <b>Чек-лист модуля 4 (A2)</b> — я вмію:<br>
• розповісти про свої плани й цілі (going to, want / hope to);<br>
• домовитися про зустріч і розповісти про свій розклад;<br>
• зробити прогноз, пообіцяти, запропонувати допомогу (will);<br>
• обрати правильну форму майбутнього часу.</div>`
          },
          {
            id: 'gram-mix',
            type: 'choice',
            title: 'Choose the future form',
            instructions: 'Обери найкращу форму майбутнього.',
            items: [
              { id: 'c1', q: 'The ceremony ___ at 2 p.m.', options: ['starts', 'will start probably', 'is going to starting'], answer: 0 },
              { id: 'c2', q: 'We ___ the photographer on Wednesday at 5.', options: ['meet every week', 'are meeting', 'will to meet'], answer: 1 },
              { id: 'c3', q: '— The phone’s ringing. — I ___ get it!', options: ['’ll', '’m going to', 'get'], answer: 0 },
              { id: 'c4', q: 'Oleh ___ sing a song — he decided last month.', options: ['will', 'is going to', 'sings'], answer: 1 },
              { id: 'c5', q: 'I think the party ___ amazing.', options: ['will be', 'is being', 'is'], answer: 0 },
              { id: 'c6', q: 'Look at those clouds! It ___ rain.', options: ['will', 'is going to', 'rains'], answer: 1 }
            ]
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Complete Sofiia’s plans',
            instructions: 'Встав дієслово в потрібній формі майбутнього.',
            items: [
              { id: 'g1', text: 'On Monday I {{’m picking|am picking}} up my dress. (pick — домовленість)' },
              { id: 'g2', text: 'Grandma’s train {{arrives}} at 10:40. (arrive — розклад)' },
              { id: 'g3', text: 'I {{’m going to buy|am going to buy}} some white umbrellas. (buy — план)' },
              { id: 'g4', text: '{{Will}} you meet Grandma at the station? (прохання)' },
              { id: 'g5', text: 'Don’t worry, I {{won’t forget|will not forget}} the rings! (− forget — обіцянка)' },
              { id: 'g6', text: 'My parents want {{me}} to invite all our cousins.' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Вечірка закінчується опівночі.', answer: 'The party finishes at midnight.' },
              { id: 'o2', prompt: 'Ми збираємося запросити шістдесят гостей.', answer: "We're going to invite sixty guests." },
              { id: 'o3', prompt: 'Я надішлю тобі деталі сьогодні ввечері.', answer: "I'll send you the details tonight." },
              { id: 'o4', prompt: 'У п’ятницю ми зустрічаємося з фотографом.', answer: "We're meeting the photographer on Friday." }
            ]
          },
          {
            id: 'gram-m13',
            type: 'choice',
            title: '↺ Modules 1–3 review',
            instructions: 'Повторення модулів 1–3 рівня A2.',
            items: [
              { id: 'm1', q: 'Oleh ___ to be very shy, but now he loves singing.', options: ['use', 'used', 'is used'], answer: 1 },
              { id: 'm2', q: 'While they ___ the car, it started to rain.', options: ['were washing', 'washed', 'are washing'], answer: 0 },
              { id: 'm3', q: 'This is the church ___ my parents got married.', options: ['which', 'where', 'who'], answer: 1 },
              { id: 'm4', q: 'This restaurant is ___ than the one in the city.', options: ['nicer', 'more nice', 'the nicest'], answer: 0 },
              { id: 'm5', q: 'The hall isn’t big ___ for a hundred people.', options: ['too', 'enough', 'as'], answer: 1 }
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
            title: 'Last-minute problems',
            instructions: 'За день до весілля Софія телефонує Олегу. Послухай.',
            audio: {
              title: 'Phone call: Sofiia & Oleh',
              lines: [
                { who: 'Sofiia', text: 'Oleh, we have a problem. The flower shop just called. The roses won’t arrive until Sunday!' },
                { who: 'Oleh', text: 'Don’t panic. I’ll call my aunt — she has a garden full of flowers. I’m sure she’ll help.' },
                { who: 'Sofiia', text: 'Really? Thank you! And the band? Are they coming at six?' },
                { who: 'Oleh', text: 'Yes, they are. I spoke to them this morning. Their bus leaves Kyiv at three.' },
                { who: 'Sofiia', text: 'OK. And what about the weather? The forecast says it’s going to rain in the evening.' },
                { who: 'Oleh', text: 'Then we’re going to dance in the rain! Seriously, the restaurant has a big covered terrace.' },
                { who: 'Sofiia', text: 'You always know what to say. I think tomorrow will be perfect.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is the problem with the roses?', options: ['They’re the wrong colour.', 'They won’t arrive until Sunday.', 'They’re too expensive.'], answer: 1 },
              { id: 'l2', q: 'Who is Oleh going to call?', options: ['The flower shop', 'His aunt', 'The band'], answer: 1 },
              { id: 'l3', q: 'When does the band’s bus leave Kyiv?', options: ['At three', 'At six', 'At eight'], answer: 0 },
              { id: 'l4', q: 'What does the forecast say?', options: ['It’s going to rain in the evening.', 'It’s going to be sunny all day.', 'It’s going to snow.'], answer: 0 },
              { id: 'l5', q: 'What does the restaurant have?', options: ['A big covered terrace', 'A swimming pool', 'A garden'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'The roses won’t arrive until Sunday.' },
              { id: 'dc2', text: 'I’ll call my aunt.' },
              { id: 'dc3', text: 'Their bus leaves Kyiv at three.' },
              { id: 'dc4', text: 'I think tomorrow will be perfect.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-event',
            type: 'writing',
            title: 'Plan an event',
            instructions: 'Ти організовуєш подію (день народження, випускний, корпоратив). Напиши лист учасникам.',
            prompt: 'Write an email about an event (120–150 words).\n• What is the event? When and where? (timetable: starts / finishes)\n• What is already arranged? (Present Continuous)\n• What are you going to do? (going to)\n• Predictions about the day (will).\n• Offer to help someone or ask for help (I’ll… / Will you…?).',
            minWords: 120,
            maxWords: 160,
            phrases: ['starts at', 'finishes at', 'we’re having', 'I’m going to', 'I think it’ll', 'I’ll', 'Will you'],
            checklist: ['Є Present Simple для розкладу', 'Є Present Continuous для домовленостей', 'Є be going to', 'Є will для прогнозу і пропозиції/прохання', 'Кожна форма вжита доречно'],
            model: `Hi everyone!

As you know, it’s Mykola’s 40th birthday on Friday, and we’re having a surprise party for him. The party starts at 7 p.m. at the Green Garden café and finishes at midnight.

Here’s what’s ready: Iryna is making the cake, and a DJ is playing from eight o’clock. We’re meeting at the café at 6:30 to decorate it.

I’m going to bring balloons and a big card for everyone to sign. I’m also going to tell Mykola we’re just having a quiet dinner — I think he’ll be very surprised!

Petro, will you pick up the drinks from the shop? I’ll give you the money tomorrow. And please don’t say anything to Mykola!

See you on Friday,
Olena`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-future',
            type: 'speaking',
            title: 'The future, four ways',
            instructions: 'Відповідай уголос, обираючи правильну форму майбутнього.',
            phrases: ['It starts at…', 'I’m meeting…', 'I’m going to…', 'I think it’ll…', 'I’ll…'],
            tasks: [
              { id: 'sp1', q: 'Tell me about an event you’re going to next month. When does it start? What are you doing before it?', tips: 'It starts at … Before that I’m … I’m going to …', model: 'My friend’s concert starts at 8 next Saturday. Before that I’m having dinner with her family.' },
              { id: 'sp2', q: 'What do you think will happen in your country in the next five years?', tips: 'I think … will … I don’t think … will …', model: 'I think the cities will become greener. I don’t think prices will go down.' },
              { id: 'sp3', q: 'Your friend is planning a wedding and is very stressed. Offer to help with three things.', tips: 'I’ll … I’ll … Don’t worry, I’ll …', model: 'I’ll call the restaurant. I’ll help you with the invitations. Don’t worry, I’ll bring my camera too!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'weeks': 'тижні', 'wedding': 'весілля', 'latest news': 'останні новини', 'almost': 'майже', 'ready': 'готове', 'ceremony': 'церемонія',
      'starts': 'починається', 'saturday': 'субота', 'little': 'маленька', 'church': 'церква', 'after that': 'після цього', 'having the party': 'святкуємо',
      'restaurant': 'ресторан', 'by the river': 'біля річки', "brother's": 'братів', 'driving us': 'везе нас', 'old': 'стара', 'blue': 'синя',
      'spent': 'провів', 'all summer': 'все літо', 'repairing': 'ремонтуючи', 'going to have': 'збираємося мати', 'about': 'близько', 'sixty': 'шістдесят',
      'guests': 'гості', 'more than': 'більше, ніж', 'planned': 'планували', 'band': 'гурт', 'playing': 'гратиме', 'till': 'до', 'midnight': 'опівночі',
      'sing': 'заспівати', 'song': 'пісня', "i'm sure": 'я впевнена', "he'll be": 'він буде', 'nervous': 'схвильований', "it'll be": 'це буде',
      'romantic': 'романтично', 'weather forecast': 'прогноз погоди', 'sunny': 'сонячно', 'worried': 'хвилююся', 'rain': 'дощ', 'just in case': 'про всяк випадок',
      'buy': 'купити', 'white': 'білі', 'umbrellas': 'парасольки', 'picking up': 'забираю', 'dress': 'сукня', 'meeting': 'зустрічаємося',
      'photographer': 'фотограф', "grandma's": 'бабусин', 'train': 'потяг', 'arrives': 'прибуває', 'meet her': 'зустрінеш її', 'station': 'вокзал',
      "i'll send": 'я надішлю', 'details': 'деталі', 'love you': 'люблю тебе', 'see you': 'побачимось', 'very soon': 'дуже скоро', 'presents': 'подарунки',
      'book': 'бронювати', 'bride': 'наречена', 'groom': 'наречений', 'guest': 'гість', 'band (music)': 'гурт', 'repair': 'ремонтувати',
      'appointment': 'запис', 'resolution': 'обіцянка', 'save money': 'заощаджувати', 'cancel': 'скасувати', 'predict': 'передбачати', 'replace': 'замінювати',
      'wore': 'була вдягнена в', 'long': 'довга', 'forgot': 'забув', 'ring': 'обручка', 'hundred': 'сто', 'came': 'прийшли', 'party': 'вечірка',
      'played': 'грав', 'until': 'до', 'morning': 'ранок', 'check': 'перевір', 'before you go': 'перед виходом', 'short': 'коротка', 'beautiful': 'гарна',
      'diary': 'щоденник', 'plan': 'план', 'arrangement': 'домовленість', 'timetable': 'розклад', 'decided': 'вирішив', 'last month': 'минулого місяця',
      'amazing': 'чудовою', 'clouds': 'хмари', 'forget': 'забути', 'rings': 'обручки', 'parents': 'батьки', 'invite': 'запросити', 'cousins': 'двоюрідні',
      'finishes': 'закінчується', 'tonight': 'сьогодні ввечері', 'friday': 'п’ятниця', 'shy': 'сором’язливий', 'loves': 'обожнює', 'singing': 'співати',
      'washing': 'мили', 'car': 'машина', 'started': 'почав', 'got married': 'одружилися', 'nicer': 'приємніший', 'hall': 'зала', 'enough': 'достатньо',
      'last-minute': 'в останню хвилину', 'problems': 'проблеми', 'flower shop': 'квітковий магазин', 'called': 'подзвонили', 'roses': 'троянди',
      "won't arrive": 'не прибудуть', 'sunday': 'неділя', "don't panic": 'не панікуй', 'aunt': 'тітка', 'garden': 'сад', 'full of': 'повний',
      'flowers': 'квіти', 'help': 'допоможе', 'really': 'справді', 'coming': 'приїдуть', 'spoke': 'говорив', 'this morning': 'сьогодні вранці',
      'bus': 'автобус', 'leaves': 'відправляється', 'evening': 'вечір', 'dance': 'танцювати', 'seriously': 'якщо серйозно', 'covered': 'критою',
      'terrace': 'тераса', 'always': 'завжди', 'what to say': 'що сказати', 'tomorrow': 'завтра', 'perfect': 'ідеально', 'wrong': 'не того',
      'colour': 'кольору', 'expensive': 'дорогі', 'snow': 'сніг', 'swimming pool': 'басейн', 'event': 'подія', 'birthday': 'день народження',
      'surprise party': 'вечірка-сюрприз', 'café': 'кафе', 'cake': 'торт', 'dj': 'діджей', 'decorate': 'прикрасити', 'bring': 'принести',
      'balloons': 'повітряні кульки', 'card': 'листівка', 'sign': 'підписати', 'tell': 'сказати', 'quiet dinner': 'тиха вечеря', 'surprised': 'здивований',
      'pick up': 'забрати', 'drinks': 'напої', 'shop': 'магазин', 'money': 'гроші', "don't say anything": 'нічого не кажи', 'concert': 'концерт',
      'family': 'сім’я', 'happen': 'статися', 'country': 'країна', 'years': 'роки', 'greener': 'зеленішими', 'prices': 'ціни', 'go down': 'знизяться',
      'stressed': 'напружений', 'invitations': 'запрошення', 'camera': 'фотоапарат', "we're": 'ми (є)', "i'm": 'я (є)', "it's": 'це (є)'
    }
  });
})();
