/*
 * A2 · Module 4 · Lesson 1 — Plans and hopes (be going to; want / hope / plan / would like + to)
 * Review: comparatives & superlatives (module 3). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'New year, new me?',
    text: `Every January millions of people make New Year’s resolutions. We asked four people about their plans for this year.

Yaroslav, 29: “I’m going to run a half marathon in October. I started training last week. I’m not going to eat fast food any more — well, maybe once a month! I hope to finish in under two hours.”

Marta, 45: “This year I’m going to learn Italian. My husband and I are planning to visit Rome in the summer, and I want to order coffee like a local! I’m going to study for twenty minutes every day with an app.”

Ostap, 17: “I’m going to apply to university in Lviv. I’d like to study computer science. My parents want me to stay in Ternopil, but I’m going to try. Are they going to be angry? Probably!”

Nadiia, 63: “I’m not going to make any big resolutions. I’ve tried before and failed every time. But I would like to spend more time with my grandchildren and less time in front of the TV. And I’m going to learn to use video calls, so I can talk to my son in Canada.”`
  };

  ENG.registerLesson({
    id: 'a2-m4-l1',
    level: 'a2',
    title: 'Plans and hopes. Плани на рік',
    subtitle: 'be going to · want / hope / plan / would like + to',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'New Year’s resolutions',
            instructions: 'Прочитай новорічні обіцянки чотирьох людей.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What is Yaroslav going to do in October?', options: ['Run a half marathon', 'Visit Rome', 'Start university'], answer: 0 },
              { id: 'q2', q: 'Why is Marta going to learn Italian?', options: ['For her job', 'She’s visiting Rome in the summer.', 'Her husband is Italian.'], answer: 1 },
              { id: 'q3', q: 'What does Ostap want to study?', options: ['Medicine', 'Computer science', 'Languages'], answer: 1 },
              { id: 'q4', q: 'What do Ostap’s parents want?', options: ['They want him to stay in Ternopil.', 'They want him to go to Lviv.', 'They want him to work.'], answer: 0 },
              { id: 'q5', q: 'Why is Nadiia going to learn video calls?', options: ['To talk to her son in Canada', 'For work', 'To watch films'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Yaroslav is never going to eat fast food again.', answer: false, explain: '“…well, maybe once a month!”' },
              { id: 's2', s: 'Marta is going to study for twenty minutes every day.', answer: true },
              { id: 's3', s: 'Ostap thinks his parents are probably going to be angry.', answer: true },
              { id: 's4', s: 'Nadiia is going to make a lot of big resolutions.', answer: false, explain: '“I’m not going to make any big resolutions.”' },
              { id: 's5', s: 'Nadiia wants to watch more TV.', answer: false, explain: 'She wants to spend less time in front of the TV.' }
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
            title: 'Plans & goals',
            instructions: 'Слова про плани, цілі та нові звички.',
            cards: [
              { front: 'resolution', ipa: '/ˌrezəˈluːʃn/', back: 'обіцянка собі, рішення', example: 'My New Year’s resolution is to read more.' },
              { front: 'goal', ipa: '/ɡəʊl/', back: 'мета', example: 'My goal is to run 10 km.' },
              { front: 'plan to / plan (n)', back: 'планувати / план', example: 'We’re planning to move.' },
              { front: 'hope to', back: 'сподіватися', example: 'I hope to finish in two hours.' },
              { front: 'apply to / for', ipa: '/əˈplaɪ/', back: 'подавати заявку, вступати', example: 'I’m going to apply to university.' },
              { front: 'give up (smoking)', back: 'кинути (палити)', example: 'He’s going to give up smoking.' },
              { front: 'take up (a hobby)', back: 'почати займатися', example: 'I want to take up yoga.' },
              { front: 'save money', back: 'заощаджувати гроші', example: 'We’re going to save money for a car.' },
              { front: 'fail', ipa: '/feɪl/', back: 'зазнати невдачі, провалити', example: 'I tried and failed.' },
              { front: 'train (for)', back: 'тренуватися (до)', example: 'She’s training for a marathon.' },
              { front: 'probably', ipa: '/ˈprɒbəbli/', back: 'мабуть, ймовірно', example: 'They’re probably going to be angry.' },
              { front: 'spend time', back: 'проводити час', example: 'I want to spend more time with my kids.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Resolution phrases',
            instructions: 'Поєднай дієслово з другою частиною.',
            pairs: [
              ['give up', 'sugar'],
              ['take up', 'a new hobby'],
              ['save', 'money'],
              ['apply for', 'a new job'],
              ['spend', 'more time outdoors'],
              ['get', 'fit'],
              ['learn', 'a language'],
              ['make', 'a resolution']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'My goals',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'My {{goal}} is to read twenty books this year.' },
              { id: 'd2', text: 'I’m going to {{give}} up coffee. It’s hard!' },
              { id: 'd3', text: 'She wants to {{take}} up dancing.' },
              { id: 'd4', text: 'We’re going to {{save}} money for a new car.' },
              { id: 'd5', text: 'He’s going to {{apply}} for a job in Warsaw.' },
              { id: 'd6', text: 'I {{hope}} to see you again soon.' }
            ],
            distractors: ['fail']
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
            title: 'be going to + want / hope / plan to',
            instructions: 'Як говорити про плани й наміри. Найпоширеніший спосіб — be going to.',
            html: `
<h3>1. be going to — план, намір (вже вирішено)</h3>
<p>Вживаємо, коли ми <b>вже вирішили</b> щось зробити в майбутньому.</p>
<div class="ex-line">I<mark>’m going to learn</mark> Italian this year. — Я збираюся вивчати італійську.</div>
<div class="table-wrap"><table>
  <tr><th></th><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>I</td><td>I<b>’m going to</b> run.</td><td>I<b>’m not going to</b> run.</td><td><b>Am</b> I <b>going to</b> run?</td></tr>
  <tr><td>he / she / it</td><td>She<b>’s going to</b> study.</td><td>She <b>isn’t going to</b> study.</td><td><b>Is</b> she <b>going to</b> study?</td></tr>
  <tr><td>you / we / they</td><td>They<b>’re going to</b> move.</td><td>They <b>aren’t going to</b> move.</td><td><b>Are</b> they <b>going to</b> move?</td></tr>
</table></div>
<p>Після going to — <b>початкова форма</b> дієслова: going to <b>run</b>, going to <b>be</b>.</p>
<p>З питальним словом: <b>What are</b> you <b>going to</b> do? <b>Where is</b> she <b>going to</b> live?</p>

<h3>2. Прогноз за ознаками</h3>
<p>going to вживаємо також, коли <b>бачимо</b>, що щось станеться:</p>
<div class="ex-line">Look at those clouds! It<b>’s going to rain</b>.</div>

<h3>3. Дієслова бажань і планів + to</h3>
<div class="table-wrap"><table>
  <tr><th>Дієслово</th><th>Значення</th><th>Приклад</th></tr>
  <tr><td><b>want to</b></td><td>хотіти</td><td>I <b>want to</b> order coffee like a local.</td></tr>
  <tr><td><b>would like to</b> (’d like to)</td><td>хотів би (ввічливо)</td><td>I<b>’d like to</b> study computer science.</td></tr>
  <tr><td><b>hope to</b></td><td>сподіватися</td><td>I <b>hope to</b> finish in under two hours.</td></tr>
  <tr><td><b>plan to</b></td><td>планувати</td><td>We<b>’re planning to</b> visit Rome.</td></tr>
  <tr><td><b>decide to</b></td><td>вирішити</td><td>She <b>decided to</b> learn Italian.</td></tr>
</table></div>
<p>💡 <b>want somebody to</b> do = хотіти, щоб хтось зробив: My parents <b>want me to stay</b>. <span class="no">want that I stay</span></p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I going to study.</span> → <span class="yes">I’m going to study.</span><br>
<span class="no">She’s going to studies.</span> → <span class="yes">She’s going to study.</span><br>
<span class="no">I want learn Italian.</span> → <span class="yes">I want to learn Italian.</span><br>
<span class="no">They want that I stay.</span> → <span class="yes">They want me to stay.</span></div>`
          },
          {
            id: 'gram-goingto',
            type: 'gap',
            title: 'be going to',
            instructions: 'Встав am / is / are (not) going to + дієслово.',
            items: [
              { id: 'g1', text: 'Yaroslav {{is going to run|’s going to run}} a half marathon. (run)' },
              { id: 'g2', text: 'Marta and her husband {{are going to visit|’re going to visit}} Rome. (visit)' },
              { id: 'g3', text: 'I {{’m not going to eat|am not going to eat}} fast food. (− eat)' },
              { id: 'g4', text: '{{Is}} Ostap going to apply to university in Lviv?' },
              { id: 'g5', text: 'What {{are}} you going to do this weekend?' },
              { id: 'g6', text: 'Nadiia {{isn’t going to make|is not going to make}} big resolutions. (− make)' }
            ]
          },
          {
            id: 'gram-verbs',
            type: 'choice',
            title: 'want / hope / would like + to',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'c1', q: 'I want ___ a new language.', options: ['learn', 'to learn', 'learning'], answer: 1 },
              { id: 'c2', q: 'We ___ to visit Rome next year.', options: ['would like', 'would', 'like'], answer: 0 },
              { id: 'c3', q: 'My parents want ___ in Ternopil.', options: ['that I stay', 'me to stay', 'me stay'], answer: 1 },
              { id: 'c4', q: 'She hopes ___ the exam.', options: ['pass', 'to pass', 'passing'], answer: 1 },
              { id: 'c5', q: 'Look at the sky! It ___ rain.', options: ['going to', 'is going to', 'goes to'], answer: 1 },
              { id: 'c6', q: 'They decided ___ a house.', options: ['to buy', 'buy', 'buying'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Я збираюся кинути палити.', answer: "I'm going to give up smoking." },
              { id: 'o2', prompt: 'Що ти збираєшся робити влітку?', answer: 'What are you going to do in the summer?' },
              { id: 'o3', prompt: 'Мій тато хоче, щоб я вивчала медицину.', answer: 'My dad wants me to study medicine.', extra: ['that'] },
              { id: 'o4', prompt: 'Ми не збираємося переїжджати.', answer: "We aren't going to move." }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: порівняння',
            instructions: 'Згадаймо модуль 3.',
            items: [
              { id: 'r1', q: 'I want to be ___ than last year.', options: ['fit', 'fitter', 'the fittest'], answer: 1 },
              { id: 'r2', q: 'Running a marathon is ___ thing I’ve ever done.', options: ['harder', 'the hardest', 'hardest'], answer: 1 },
              { id: 'r3', q: 'I don’t have ___ time to study every day.', options: ['too', 'enough', 'as'], answer: 1 },
              { id: 'r4', q: 'Italian isn’t as difficult ___ I thought.', options: ['as', 'than', 'that'], answer: 0 }
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
            title: 'After graduation',
            instructions: 'Двоє випускників говорять про плани після університету. Послухай.',
            audio: {
              title: 'Dialogue: Liza & Roman',
              lines: [
                { who: 'Liza', text: 'So, Roman, what are you going to do after graduation?' },
                { who: 'Roman', text: 'I’m going to take a gap year. I’d like to travel around South America and work as a volunteer.' },
                { who: 'Liza', text: 'Wow! Are you going to learn Spanish?' },
                { who: 'Roman', text: 'Yes, I’m going to do a course in Mexico first. What about you?' },
                { who: 'Liza', text: 'I’m not going to travel. I’m going to start a job at a bank in September. I want to save money for a flat.' },
                { who: 'Roman', text: 'Very sensible! Are you going to stay in Kyiv?' },
                { who: 'Liza', text: 'For now, yes. But I hope to work in London one day.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is Roman going to do?', options: ['Start a job', 'Take a gap year', 'Do a master’s degree'], answer: 1 },
              { id: 'l2', q: 'Where is he going to do a Spanish course?', options: ['In Spain', 'In Mexico', 'In Kyiv'], answer: 1 },
              { id: 'l3', q: 'When is Liza going to start her job?', options: ['In June', 'In September', 'Next year'], answer: 1 },
              { id: 'l4', q: 'Why does Liza want to save money?', options: ['For a flat', 'For a car', 'For travelling'], answer: 0 },
              { id: 'l5', q: 'Where does Liza hope to work one day?', options: ['In Mexico', 'In London', 'In Kyiv'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What are you going to do after graduation?' },
              { id: 'dc2', text: 'I’d like to travel around South America.' },
              { id: 'dc3', text: 'I’m not going to travel.' },
              { id: 'dc4', text: 'I hope to work in London one day.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-plans',
            type: 'writing',
            title: 'My plans for this year',
            instructions: 'Напиши допис «Мої плани на цей рік».',
            prompt: 'Write about your plans (100–120 words).\n• 3–4 things you are going to do this year.\n• 1–2 things you aren’t going to do any more.\n• Something you would like / hope to do one day.\n• What does someone in your family want you to do?\n• Why are these plans important to you?',
            minWords: 100,
            maxWords: 130,
            phrases: ['I’m going to', 'I’m not going to', 'I’d like to', 'I hope to', 'wants me to', 'because'],
            checklist: ['Щонайменше 4 речення з be going to', 'Є заперечення (not going to)', 'want / hope / would like + to', 'Є want somebody to …'],
            model: `This year is going to be a big year for me. First, I’m going to finish my English course and take the B1 exam in May. I’m also going to start swimming twice a week, because my back hurts after long days at the computer.

I’m not going to work at weekends any more. I want to spend more time with my friends and family. My mum wants me to visit her more often, so I’m going to go to Vinnytsia once a month.

One day I’d like to live by the sea. I hope to save enough money for a small flat in Odesa.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-plans',
            type: 'speaking',
            title: 'Talk about your plans',
            instructions: 'Відповідай уголос.',
            phrases: ['I’m going to…', 'I’m not going to…', 'I’d like to…', 'I hope to…', 'I’m planning to…'],
            tasks: [
              { id: 'sp1', q: 'What are you going to do this weekend?', tips: 'On Saturday I’m going to … On Sunday …', model: 'On Saturday I’m going to clean the flat and meet a friend. On Sunday I’m going to relax.' },
              { id: 'sp2', q: 'What is your biggest goal for this year? How are you going to achieve it?', tips: 'My biggest goal is to … I’m going to …', model: 'My biggest goal is to get fit. I’m going to run three times a week and eat less sugar.' },
              { id: 'sp3', q: 'What would you like to do one day but aren’t going to do this year?', tips: 'One day I’d like to … but this year I’m not going to …', model: 'One day I’d like to visit Japan, but this year I’m not going to travel far.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'new year': 'Новий рік', 'every january': 'щосічня', 'millions': 'мільйони', 'resolutions': 'обіцянки собі', 'resolution': 'обіцянка, рішення',
      'asked': 'запитали', 'plans': 'плани', 'going to': 'збираюся', 'run': 'пробігти', 'half marathon': 'напівмарафон', 'october': 'жовтень',
      'started': 'почав', 'training': 'тренуватися', 'last week': 'минулого тижня', 'fast food': 'фастфуд', 'any more': 'більше (не)', 'maybe': 'можливо',
      'once a month': 'раз на місяць', 'hope': 'сподіватися', 'finish': 'фінішувати', 'under': 'менше ніж', 'hours': 'години', 'learn': 'вивчати',
      'italian': 'італійська', 'husband': 'чоловік', 'planning': 'плануємо', 'visit': 'відвідати', 'rome': 'Рим', 'summer': 'літо', 'want': 'хочу',
      'order': 'замовляти', 'coffee': 'кава', 'like a local': 'як місцевий', 'study': 'вчитися', 'minutes': 'хвилини', 'every day': 'щодня', 'app': 'застосунок',
      'apply': 'вступати', 'university': 'університет', "i'd like": 'я б хотів', 'computer science': 'комп’ютерні науки', 'parents': 'батьки',
      'stay': 'залишитися', 'try': 'спробувати', 'angry': 'злі', 'probably': 'мабуть', 'big': 'великий', 'tried': 'пробувала', 'before': 'раніше',
      'failed': 'зазнала невдачі', 'every time': 'кожного разу', 'spend': 'проводити', 'more': 'більше', 'time': 'час', 'grandchildren': 'онуки',
      'less': 'менше', 'in front of': 'перед', 'video calls': 'відеодзвінки', 'talk': 'розмовляти', 'son': 'син', 'canada': 'Канада', 'job': 'робота',
      'medicine': 'медицина', 'languages': 'мови', 'work': 'працювати', 'films': 'фільми', 'never': 'ніколи', 'again': 'знову', 'goal': 'мета',
      'plan': 'планувати', 'give up': 'кинути', 'smoking': 'паління', 'take up': 'почати займатися', 'yoga': 'йога', 'save money': 'заощаджувати',
      'car': 'машина', 'fail': 'провалити', 'train': 'тренуватися', 'marathon': 'марафон', 'kids': 'діти', 'sugar': 'цукор', 'hobby': 'хобі',
      'outdoors': 'на свіжому повітрі', 'get fit': 'прийти у форму', 'language': 'мова', 'read': 'прочитати', 'books': 'книги', 'hard': 'важко',
      'dancing': 'танці', 'warsaw': 'Варшава', 'soon': 'скоро', 'clouds': 'хмари', 'rain': 'дощ', 'decide': 'вирішити', 'decided': 'вирішили',
      'pass': 'скласти', 'exam': 'іспит', 'sky': 'небо', 'buy': 'купити', 'house': 'будинок', 'move': 'переїжджати', 'fitter': 'у кращій формі',
      'hardest': 'найважча', 'thing': 'річ', 'done': 'зробив', 'enough': 'достатньо', 'difficult': 'складна', 'thought': 'думав', 'graduation': 'випуск',
      'gap year': 'рік перерви', 'travel around': 'подорожувати', 'south america': 'Південна Америка', 'volunteer': 'волонтер', 'spanish': 'іспанська',
      'course': 'курс', 'mexico': 'Мексика', 'first': 'спочатку', 'what about you': 'а ти?', 'start': 'почати', 'bank': 'банк', 'september': 'вересень',
      'flat': 'квартира', 'sensible': 'розсудливо', 'for now': 'поки що', 'one day': 'колись', "master's degree": 'магістратура', 'june': 'червень',
      'next year': 'наступного року', 'travelling': 'подорожі', 'english course': 'курс англійської', 'take the exam': 'скласти іспит', 'may': 'травень',
      'swimming': 'плавання', 'twice a week': 'двічі на тиждень', 'back': 'спина', 'hurts': 'болить', 'long days': 'довгі дні', 'computer': 'комп’ютер',
      'weekends': 'вихідні', 'friends': 'друзі', 'family': 'сім’я', 'mum': 'мама', 'more often': 'частіше', 'by the sea': 'біля моря', 'small': 'маленька',
      'weekend': 'вихідні', 'clean': 'прибрати', 'meet': 'зустріти', 'relax': 'відпочити', 'biggest': 'найбільша', 'achieve': 'досягти',
      'three times a week': 'тричі на тиждень', 'eat': 'їсти', 'japan': 'Японія', 'far': 'далеко', "i'm": 'я (є)', "she's": 'вона (є)', "they're": 'вони (є)'
    }
  });
})();
