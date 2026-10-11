/*
 * A2 · Module 4 · Lesson 3 — Predictions (will / won’t: predictions, offers, promises, decisions; will vs going to)
 * Review: going to & Present Continuous for future (lessons 1–2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Life in 2050: what do the experts think?',
    text: `What will our lives be like in 2050? We asked three experts for their predictions.

Transport: “I think most cars will be electric, and many of them will probably drive themselves. People won’t need a driving licence in big cities. Flying taxis? Perhaps, but I don’t think they will be cheap.” — Dr Ivanna Holub, engineer

Work: “Robots and artificial intelligence will do a lot of boring jobs. That will be difficult for some people, but new jobs will appear too. I’m sure people will still want to talk to real teachers, doctors and hairdressers!” — Mark Taylor, economist

Home and food: “Our homes will be smarter. Your fridge will order milk when you need it. We’ll probably eat less meat, and some ‘meat’ will come from laboratories. Will it taste good? I hope so!” — Oksana Lytvyn, scientist

Of course, nobody knows exactly. One thing is certain: the world will change faster than ever before.`
  };

  ENG.registerLesson({
    id: 'a2-m4-l3',
    level: 'a2',
    title: 'Predictions. Прогнози на майбутнє',
    subtitle: 'will / won’t: прогнози, пропозиції, обіцянки, рішення · will чи going to',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Life in 2050',
            instructions: 'Прочитай прогнози експертів про життя у 2050 році.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What does Dr Holub think about cars?', options: ['Most will be electric.', 'There won’t be any cars.', 'They will be more expensive.'], answer: 0 },
              { id: 'q2', q: 'Why might people not need a driving licence?', options: ['Cars will drive themselves.', 'Nobody will travel.', 'Driving will be illegal.'], answer: 0 },
              { id: 'q3', q: 'What does Mark think about jobs?', options: ['All jobs will disappear.', 'Robots will do boring jobs, but new jobs will appear.', 'Nobody will work.'], answer: 1 },
              { id: 'q4', q: 'What will a smart fridge do?', options: ['Cook dinner', 'Order milk', 'Clean itself'], answer: 1 },
              { id: 'q5', q: 'What is certain, according to the article?', options: ['Flying taxis will be cheap.', 'The world will change very fast.', 'People will stop eating meat.'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Dr Holub is sure flying taxis will be cheap.', answer: false, explain: '“I don’t think they will be cheap.”' },
              { id: 's2', s: 'Mark thinks people will still want real teachers and doctors.', answer: true },
              { id: 's3', s: 'Oksana thinks we will eat more meat.', answer: false, explain: '“We’ll probably eat less meat.”' },
              { id: 's4', s: 'Some meat will come from laboratories.', answer: true },
              { id: 's5', s: 'The experts know exactly what will happen.', answer: false, explain: '“Nobody knows exactly.”' }
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
            title: 'The future',
            instructions: 'Слова про технології та майбутнє.',
            cards: [
              { front: 'prediction / predict', ipa: '/prɪˈdɪkʃn/', back: 'прогноз / передбачати', example: 'It’s hard to predict the future.' },
              { front: 'expert', ipa: '/ˈekspɜːt/', back: 'експерт', example: 'We asked three experts.' },
              { front: 'electric', ipa: '/ɪˈlektrɪk/', back: 'електричний', example: 'Most cars will be electric.' },
              { front: 'robot', ipa: '/ˈrəʊbɒt/', back: 'робот', example: 'Robots will do boring jobs.' },
              { front: 'artificial intelligence (AI)', back: 'штучний інтелект', example: 'AI is changing the world.' },
              { front: 'smart (home)', back: 'розумний (будинок)', example: 'Our homes will be smarter.' },
              { front: 'appear / disappear', back: 'з’являтися / зникати', example: 'New jobs will appear.' },
              { front: 'replace', ipa: '/rɪˈpleɪs/', back: 'замінювати', example: 'Will robots replace teachers?' },
              { front: 'laboratory (lab)', ipa: '/ləˈbɒrətri/', back: 'лабораторія', example: 'Meat from a lab?' },
              { front: 'certain / sure', ipa: '/ˈsɜːtn/', back: 'певний, впевнений', example: 'I’m sure it will change.' },
              { front: 'perhaps / probably', back: 'можливо / ймовірно', example: 'Perhaps we’ll live on Mars.' },
              { front: 'driving licence', back: 'посвідчення водія', example: 'I got my driving licence last year.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'How sure are you?',
            instructions: 'Поєднай слово з відсотком упевненості.',
            pairs: [
              ['definitely', '100%'],
              ['probably', '80%'],
              ['perhaps / maybe', '50%'],
              ['probably not', '20%'],
              ['definitely not', '0%'],
              ['I’m sure', 'я впевнений'],
              ['I doubt it', 'сумніваюся'],
              ['I hope so', 'сподіваюся, що так']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'The future world',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'In the future, {{robots}} will clean our houses.' },
              { id: 'd2', text: 'Paper books won’t {{disappear}} — people love them.' },
              { id: 'd3', text: 'Nobody can {{predict}} the future exactly.' },
              { id: 'd4', text: 'Our homes will be {{smarter}} and use less energy.' },
              { id: 'd5', text: 'Will computers {{replace}} teachers? I doubt it.' },
              { id: 'd6', text: 'Most new cars will be {{electric}}.' }
            ],
            distractors: ['laboratory']
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
            title: 'will / won’t',
            instructions: 'will — ще один спосіб говорити про майбутнє. Головне — знати, коли саме його вживати.',
            html: `
<h3>1. Форма — проста й однакова для всіх</h3>
<div class="table-wrap"><table>
  <tr><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>I / she / they <b>will</b> (’ll) go</td><td>I / she / they <b>won’t</b> (will not) go</td><td><b>Will</b> you go? — Yes, I will. / No, I won’t.</td></tr>
</table></div>
<p>Після will — <b>початкова форма</b> без to: will <b>be</b>, will <b>drive</b>. <span class="no">will to go</span>, <span class="no">will goes</span></p>

<h3>2. Коли вживаємо will</h3>
<div class="table-wrap"><table>
  <tr><th>Значення</th><th>Приклад</th></tr>
  <tr><td><b>прогноз</b> (думка, віра)</td><td>I think most cars <b>will</b> be electric.</td></tr>
  <tr><td><b>рішення в момент мовлення</b></td><td>— It’s cold. — I<b>’ll</b> close the window.</td></tr>
  <tr><td><b>пропозиція допомоги</b></td><td>That bag looks heavy. I<b>’ll</b> carry it.</td></tr>
  <tr><td><b>обіцянка</b></td><td>I<b>’ll</b> call you tomorrow, I promise. I <b>won’t</b> be late.</td></tr>
  <tr><td><b>прохання</b></td><td><b>Will</b> you help me?</td></tr>
</table></div>

<h3>3. Слова, що часто йдуть з will</h3>
<p><b>I think…, I don’t think…, I’m sure…, probably, definitely, perhaps, I hope…</b></p>
<div class="ex-line">I <b>don’t think</b> they <b>will</b> be cheap. <span class="muted">(частіше, ніж «I think they won’t»)</span></div>
<div class="ex-line">We<b>’ll probably</b> eat less meat. · They <b>probably won’t</b> come. <span class="muted">(probably — після will, але перед won’t)</span></div>

<h3>4. will чи going to?</h3>
<div class="table-wrap"><table>
  <tr><th>will</th><th>going to</th></tr>
  <tr><td>рішення <b>зараз</b>, у момент мовлення:<br>— We’ve got no milk! — Oh, I<b>’ll</b> buy some.</td><td>рішення <b>прийнято раніше</b>, план:<br>I<b>’m going to</b> buy milk after work.</td></tr>
  <tr><td>прогноз-<b>думка</b>:<br>I think it<b>’ll</b> rain tomorrow.</td><td>прогноз за <b>ознаками</b>, які бачимо:<br>Look at those clouds! It<b>’s going to</b> rain.</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I will to call you.</span> → <span class="yes">I’ll call you.</span><br>
<span class="no">I think it won’t rain.</span> → <span class="yes">I don’t think it will rain.</span> (природніше)<br>
<span class="no">The phone is ringing. I’m going to answer it.</span> (рішення зараз) → <span class="yes">I’ll answer it.</span><br>
<span class="no">Do you will come?</span> → <span class="yes">Will you come?</span></div>`
          },
          {
            id: 'gram-will',
            type: 'gap',
            title: 'will or won’t?',
            instructions: 'Встав will або won’t + дієслово за змістом.',
            items: [
              { id: 'g1', text: 'I think most cars {{will be}} electric. (be)' },
              { id: 'g2', text: 'People {{won’t need|will not need}} a driving licence. (− need)' },
              { id: 'g3', text: 'New jobs {{will appear}} too. (appear)' },
              { id: 'g4', text: '{{Will}} lab meat taste good? — I hope so!' },
              { id: 'g5', text: 'Don’t worry, I {{won’t tell|will not tell}} anyone. I promise. (− tell)' },
              { id: 'g6', text: 'I don’t think flying taxis {{will be}} cheap. (be)' }
            ]
          },
          {
            id: 'gram-use',
            type: 'choice',
            title: 'will or going to?',
            instructions: 'Рішення зараз / прогноз-думка (will) чи план / ознаки (going to)?',
            items: [
              { id: 'c1', q: '— The phone’s ringing! — OK, I ___ answer it.', options: ['’ll', '’m going to'], answer: 0 },
              { id: 'c2', q: 'I ___ visit my aunt this weekend. I bought the tickets yesterday.', options: ['’ll', '’m going to'], answer: 1 },
              { id: 'c3', q: 'Look at that black sky! It ___ rain.', options: ['will', 'is going to'], answer: 1 },
              { id: 'c4', q: 'I think robots ___ do most housework in the future.', options: ['will', 'are going to'], answer: 0 },
              { id: 'c5', q: 'That box looks heavy. I ___ help you.', options: ['’ll', '’m going to'], answer: 0 },
              { id: 'c6', q: 'We ___ get married in June. We’ve already booked the restaurant.', options: ['will', 'are going to'], answer: 1 }
            ]
          },
          {
            id: 'gram-respond',
            type: 'choice',
            title: 'Offers & promises',
            instructions: 'Обери найкращу відповідь.',
            items: [
              { id: 'p1', q: '“I’m so thirsty.”', options: ['I’ll get you some water.', 'I get you some water.', 'I’m getting you water every day.'], answer: 0 },
              { id: 'p2', q: '“Please don’t be late again!”', options: ['I won’t, I promise.', 'I don’t, I promise.', 'I’m not going.'], answer: 0 },
              { id: 'p3', q: '“I don’t understand this exercise.”', options: ['I’ll explain it.', 'I explain it.', 'I’m explaining it tomorrow.'], answer: 0 },
              { id: 'p4', q: '“Will you marry me?”', options: ['Yes, I will!', 'Yes, I do!', 'Yes, I am!'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Я не думаю, що люди житимуть на Марсі.', answer: "I don't think people will live on Mars." },
              { id: 'o2', prompt: 'Ми, мабуть, їстимемо менше м’яса.', answer: 'We will probably eat less meat.' },
              { id: 'o3', prompt: 'Я зателефоную тобі завтра, обіцяю.', answer: "I'll call you tomorrow, I promise.", extra: ['to'] },
              { id: 'o4', prompt: 'Роботи не замінять учителів.', answer: "Robots won't replace teachers." }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: going to і Present Continuous',
            instructions: 'Згадаймо уроки 1–2.',
            items: [
              { id: 'r1', q: 'I ___ the dentist at 3 tomorrow. I have an appointment.', options: ['see', 'am seeing', 'will see'], answer: 1 },
              { id: 'r2', q: 'My train ___ at 7:15.', options: ['leaves', 'is leaving tomorrow next', 'will leaving'], answer: 0 },
              { id: 'r3', q: 'She ___ study medicine. She decided last year.', options: ['will', 'is going to', 'goes to'], answer: 1 },
              { id: 'r4', q: 'What ___ you doing on Saturday?', options: ['do', 'are', 'will'], answer: 1 }
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
            title: 'Moving day',
            instructions: 'Друзі допомагають Олені переїхати. Послухай, хто що пропонує зробити.',
            audio: {
              title: 'Dialogue: Olena, Petro & Ira',
              lines: [
                { who: 'Olena', text: 'Thanks for coming! There are so many boxes. I don’t know where to start.' },
                { who: 'Petro', text: 'Don’t worry. I’ll carry the heavy boxes to the van.' },
                { who: 'Ira', text: 'And I’ll pack the kitchen things. Have you got any newspaper for the glasses?' },
                { who: 'Olena', text: 'Oh no, I haven’t. I’ll go and buy some.' },
                { who: 'Petro', text: 'No, I’ll go — the shop is on my way to the van.' },
                { who: 'Olena', text: 'You’re the best! I’ll order pizza for everyone at lunchtime.' },
                { who: 'Ira', text: 'Do you think we’ll finish today?' },
                { who: 'Olena', text: 'I hope so. The new flat is only ten minutes away, so I think it won’t take long.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What will Petro carry?', options: ['The heavy boxes', 'The glasses', 'The pizza'], answer: 0 },
              { id: 'l2', q: 'What will Ira pack?', options: ['The books', 'The kitchen things', 'The clothes'], answer: 1 },
              { id: 'l3', q: 'What do they need for the glasses?', options: ['Boxes', 'Newspaper', 'Tape'], answer: 1 },
              { id: 'l4', q: 'Who will buy the newspaper?', options: ['Olena', 'Petro', 'Ira'], answer: 1 },
              { id: 'l5', q: 'What will Olena do at lunchtime?', options: ['Cook lunch', 'Order pizza', 'Go to a café'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'I’ll carry the heavy boxes.' },
              { id: 'dc2', text: 'I’ll go and buy some.' },
              { id: 'dc3', text: 'Do you think we’ll finish today?' },
              { id: 'dc4', text: 'I think it won’t take long.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-future',
            type: 'writing',
            title: 'My predictions for 2050',
            instructions: 'Напиши свої прогнози: яким буде життя у 2050 році?',
            prompt: 'Write your predictions (100–130 words).\n• Transport, work, homes, food, school — choose 3–4 topics.\n• Use will / won’t, I think…, I don’t think…, probably, definitely, perhaps.\n• What will YOUR life be like in 2050?\n• Finish with something you hope will (or won’t) happen.',
            minWords: 100,
            maxWords: 140,
            phrases: ['I think', 'I don’t think', 'will probably', 'definitely', 'perhaps', 'won’t', 'I hope'],
            checklist: ['Щонайменше 6 речень з will / won’t', 'Є I don’t think … will …', 'Є probably / definitely / perhaps у правильному місці', 'Є прогноз про власне життя'],
            model: `I think life in 2050 will be very different. Most people will probably work from home, and offices will be much smaller. I don’t think robots will replace teachers, but children will definitely learn with AI helpers.

Cars will drive themselves, so there won’t be so many accidents. Perhaps we will even have flying taxis in Kyiv!

In 2050 I’ll be sixty-five. I think I’ll live in a small house by the sea with a smart garden which waters itself. I’ll probably still drink coffee every morning.

I hope people will take better care of the planet. I hope the air will be cleaner and there won’t be any more wars.`
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
            title: 'What will happen?',
            instructions: 'Відповідай уголос.',
            phrases: ['I think… will…', 'I don’t think… will…', '…will probably…', 'I’ll…', 'I won’t…, I promise.'],
            tasks: [
              { id: 'sp1', q: 'Do you think people will live on other planets one day?', tips: 'I think / I don’t think … will … because …', model: 'I don’t think people will live on Mars soon, because it’s too cold and there’s no air.' },
              { id: 'sp2', q: 'Your friend says: “I’ve got a terrible headache.” Make two offers.', tips: 'I’ll get you … I’ll …', model: 'I’ll get you some water and a tablet. I’ll make you some tea too.' },
              { id: 'sp3', q: 'Make three promises to yourself for next month.', tips: 'I’ll … I won’t …', model: 'I’ll go to bed earlier. I won’t check my phone at dinner. I’ll call my grandma every week.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'life': 'життя', 'experts': 'експерти', 'expert': 'експерт', 'think': 'вважати', 'what will … be like': 'яким буде', 'lives': 'життя (мн.)',
      'asked': 'запитали', 'predictions': 'прогнози', 'transport': 'транспорт', 'most': 'більшість', 'cars': 'машини', 'will': 'буде (майбутній час)',
      'electric': 'електричні', 'many': 'багато', 'probably': 'ймовірно', 'drive themselves': 'їздитимуть самі', "won't": 'не буде', 'need': 'потребувати',
      'driving licence': 'посвідчення водія', 'big': 'великі', 'cities': 'міста', 'flying taxis': 'літаючі таксі', 'perhaps': 'можливо', 'cheap': 'дешеві',
      'engineer': 'інженер', 'work': 'робота', 'robots': 'роботи', 'artificial intelligence': 'штучний інтелект', 'boring': 'нудні', 'jobs': 'робота (мн.)',
      'difficult': 'важко', 'appear': 'з’являтися', "i'm sure": 'я впевнений', 'still': 'досі', 'want': 'хотіти', 'real': 'справжні', 'teachers': 'вчителі',
      'doctors': 'лікарі', 'hairdressers': 'перукарі', 'economist': 'економіст', 'home': 'дім', 'food': 'їжа', 'homes': 'оселі', 'smarter': 'розумніші',
      'fridge': 'холодильник', 'order': 'замовлятиме', 'milk': 'молоко', 'less': 'менше', 'meat': 'м’ясо', 'laboratories': 'лабораторії', 'taste': 'смакувати',
      'i hope so': 'сподіваюся', 'scientist': 'науковець', 'of course': 'звісно', 'nobody': 'ніхто', 'knows': 'знає', 'exactly': 'точно', 'certain': 'певне',
      'world': 'світ', 'change': 'змінюватися', 'faster than ever': 'швидше, ніж будь-коли', 'expensive': 'дорогі', 'illegal': 'незаконним',
      'disappear': 'зникати', 'clean': 'прибирати', 'stop': 'перестануть', 'prediction': 'прогноз', 'predict': 'передбачати', 'robot': 'робот',
      'smart': 'розумний', 'replace': 'замінювати', 'laboratory': 'лабораторія', 'sure': 'впевнений', 'mars': 'Марс', 'definitely': 'безумовно',
      'maybe': 'можливо', 'i doubt it': 'сумніваюся', 'houses': 'будинки', 'paper books': 'паперові книжки', 'energy': 'енергія', 'computers': 'комп’ютери',
      'close': 'зачинити', 'window': 'вікно', 'cold': 'холодно', 'bag': 'сумка', 'heavy': 'важка', 'carry': 'нести', 'call': 'зателефоную', 'tomorrow': 'завтра',
      'promise': 'обіцяю', 'late': 'запізнюватися', 'help': 'допомогти', 'rain': 'дощ', 'clouds': 'хмари', 'buy': 'купити', 'after work': 'після роботи',
      'tell': 'розповісти', 'anyone': 'нікому', 'phone': 'телефон', 'ringing': 'дзвонить', 'answer': 'відповісти', 'aunt': 'тітка', 'tickets': 'квитки',
      'sky': 'небо', 'housework': 'хатня робота', 'box': 'коробка', 'married': 'одружитися', 'booked': 'забронювали', 'thirsty': 'хочу пити',
      'water': 'вода', 'again': 'знову', 'understand': 'розумію', 'exercise': 'вправа', 'explain': 'поясню', 'marry': 'вийти заміж', 'live': 'жити',
      'appointment': 'запис', 'decided': 'вирішила', 'moving day': 'день переїзду', 'thanks for coming': 'дякую, що прийшли', 'boxes': 'коробки',
      "don't know": 'не знаю', 'where to start': 'з чого почати', "don't worry": 'не хвилюйся', 'van': 'фургон', 'pack': 'пакувати', 'kitchen things': 'кухонні речі',
      'newspaper': 'газета', 'glasses': 'склянки', 'shop': 'магазин', 'on my way': 'мені по дорозі', 'the best': 'найкращі', 'pizza': 'піца',
      'everyone': 'всіх', 'lunchtime': 'обід', 'finish': 'закінчити', 'today': 'сьогодні', 'new flat': 'нова квартира', 'minutes away': 'хвилин звідси',
      "won't take long": 'не займе багато часу', 'books': 'книжки', 'clothes': 'одяг', 'tape': 'скотч', 'cook': 'готувати', 'café': 'кафе',
      'work from home': 'працювати з дому', 'offices': 'офіси', 'smaller': 'менші', 'children': 'діти', 'learn': 'вчитися', 'helpers': 'помічники',
      'accidents': 'аварії', 'even': 'навіть', 'sixty-five': 'шістдесят п’ять', 'small house': 'маленький будинок', 'by the sea': 'біля моря',
      'garden': 'сад', 'waters itself': 'поливає себе', 'coffee': 'кава', 'every morning': 'щоранку', 'take care of': 'дбати про', 'planet': 'планета',
      'air': 'повітря', 'cleaner': 'чистіше', 'wars': 'війни', 'other planets': 'інші планети', 'one day': 'колись', 'soon': 'скоро', 'headache': 'головний біль',
      'tablet': 'пігулка', 'tea': 'чай', 'promises': 'обіцянки', 'next month': 'наступного місяця', 'earlier': 'раніше', 'dinner': 'вечеря',
      'grandma': 'бабуся', 'every week': 'щотижня', "i'll": 'я (зроблю)', "we'll": 'ми (зробимо)', "it'll": 'це (буде)'
    }
  });
})();
