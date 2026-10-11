/*
 * A2 · Module 5 · Lesson 4 — Review: The 30-day challenge
 * Reviews: should / shouldn’t, must / have to / mustn’t / don’t have to, quantifiers.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Our office health challenge',
    text: `This month our company is organising a 30-day health challenge. Forty employees are taking part. Here are the rules.

Every day you have to walk at least 8,000 steps. You must record them in the app before midnight. You don’t have to go to the gym — walking to work, climbing stairs or dancing at home all count!

You mustn’t eat fast food during the challenge. You can eat chocolate, but only a little — one or two pieces a day. You should drink a lot of water: the company is putting water bottles on every desk.

Sleep is important too. You should go to bed before 11 p.m. and you shouldn’t look at screens for an hour before you sleep.

At the end of the month there are prizes. The winner gets a weekend in a spa hotel. Second place gets a new pair of running shoes.

“In the first week I had to stop drinking so much cola,” says Oleksandr from IT. “It wasn’t easy, but now I don’t miss it. I have more energy and I don’t get as many headaches.”`
  };

  ENG.registerLesson({
    id: 'a2-m5-l4',
    level: 'a2',
    title: 'Review: The 30-day challenge',
    subtitle: 'Повторення модуля 5: should, must / have to, mustn’t / don’t have to, a few / a little',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'The health challenge',
            instructions: 'Прочитай правила офісного челенджу здоров’я.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'How many employees are taking part?', options: ['Fourteen', 'Thirty', 'Forty'], answer: 2 },
              { id: 'q2', q: 'How many steps do you have to walk every day?', options: ['At least 5,000', 'At least 8,000', 'At least 10,000'], answer: 1 },
              { id: 'q3', q: 'What mustn’t you eat?', options: ['Chocolate', 'Fast food', 'Fruit'], answer: 1 },
              { id: 'q4', q: 'What is the first prize?', options: ['Running shoes', 'A weekend in a spa hotel', 'A water bottle'], answer: 1 },
              { id: 'q5', q: 'What did Oleksandr have to stop?', options: ['Eating chocolate', 'Drinking so much cola', 'Working late'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'You have to go to the gym.', answer: false, explain: '“You don’t have to go to the gym.”' },
              { id: 's2', s: 'Dancing at home counts.', answer: true },
              { id: 's3', s: 'You can eat a lot of chocolate.', answer: false, explain: '“…but only a little.”' },
              { id: 's4', s: 'You shouldn’t look at screens before you sleep.', answer: true },
              { id: 's5', s: 'Oleksandr gets more headaches now.', answer: false, explain: '“…I don’t get as many headaches.”' }
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
            title: 'Challenge words + module review',
            instructions: 'Нові слова й повторення модуля 5.',
            cards: [
              { front: 'challenge', ipa: '/ˈtʃælɪndʒ/', back: 'виклик, челендж', example: 'It’s a 30-day challenge.' },
              { front: 'employee', ipa: '/ɪmˈplɔɪiː/', back: 'працівник', example: 'Forty employees are taking part.' },
              { front: 'take part (in)', back: 'брати участь', example: 'Do you want to take part?' },
              { front: 'steps', back: 'кроки', example: 'I walk 8,000 steps a day.' },
              { front: 'record', ipa: '/rɪˈkɔːd/', back: 'записувати, фіксувати', example: 'Record your steps in the app.' },
              { front: 'count', ipa: '/kaʊnt/', back: 'зараховуватися; рахувати', example: 'Dancing counts!' },
              { front: 'prize', ipa: '/praɪz/', back: 'приз', example: 'The winner gets a prize.' },
              { front: 'energy', ipa: '/ˈenədʒi/', back: 'енергія', example: 'I have more energy now.' },
              { front: 'sore throat', back: 'біль у горлі', example: 'I have a sore throat.' },
              { front: 'allowed', back: 'дозволено', example: 'Pets are not allowed.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 5 words',
            instructions: 'Поєднай слова модуля 5 з перекладом.',
            pairs: [
              ['headache', 'головний біль'],
              ['dizzy', 'запаморочення'],
              ['a fine', 'штраф'],
              ['included', 'включений'],
              ['homemade', 'домашній'],
              ['portion', 'порція'],
              ['take part', 'брати участь'],
              ['prize', 'приз']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Join the challenge!',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Fifty {{employees}} signed up for the challenge.' },
              { id: 'd2', text: 'Do you want to take {{part}}?' },
              { id: 'd3', text: 'Don’t forget to {{record}} your steps every evening.' },
              { id: 'd4', text: 'Climbing stairs {{counts}} too!' },
              { id: 'd5', text: 'The first {{prize}} is a spa weekend.' },
              { id: 'd6', text: 'After a week I had so much more {{energy}}.' }
            ],
            distractors: ['uniform']
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
            title: 'Module 5 grammar — summary',
            instructions: 'Модальні дієслова і слова кількості — в одній шпаргалці.',
            html: `
<h3>1. Модальні дієслова: від обов’язку до заборони</h3>
<div class="table-wrap"><table>
  <tr><th>Значення</th><th>Форма</th><th>Приклад</th></tr>
  <tr><td>обов’язок</td><td><b>must / have to</b></td><td>You <b>have to</b> walk 8,000 steps. You <b>must</b> record them.</td></tr>
  <tr><td>порада</td><td><b>should</b></td><td>You <b>should</b> drink a lot of water.</td></tr>
  <tr><td>дозвіл</td><td><b>can</b></td><td>You <b>can</b> eat a little chocolate.</td></tr>
  <tr><td>не обов’язково</td><td><b>don’t have to</b></td><td>You <b>don’t have to</b> go to the gym.</td></tr>
  <tr><td>не варто</td><td><b>shouldn’t</b></td><td>You <b>shouldn’t</b> look at screens before bed.</td></tr>
  <tr><td>заборона</td><td><b>mustn’t / can’t</b></td><td>You <b>mustn’t</b> eat fast food.</td></tr>
</table></div>
<p>Минулий час обов’язку: <b>had to</b>. He / she <b>has to</b>; питання — <b>Do</b> I <b>have to</b>…?</p>

<h3>2. Слова кількості</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>злічувані</th><th>незлічувані</th></tr>
  <tr><td>багато</td><td>a lot of / many (−?)</td><td>a lot of / much (−?)</td></tr>
  <tr><td>трохи</td><td>a few</td><td>a little</td></tr>
  <tr><td>забагато</td><td>too many</td><td>too much</td></tr>
  <tr><td>достатньо</td><td colspan="2">enough</td></tr>
</table></div>

<div class="tip">✅ <b>Чек-лист модуля 5 (A2)</b> — я вмію:<br>
• розповісти лікарю про симптоми і дати пораду (should);<br>
• пояснити правила: що треба, що не обов’язково, що заборонено;<br>
• говорити про харчування і кількість (a few, a little, too much…).</div>`
          },
          {
            id: 'gram-modals',
            type: 'choice',
            title: 'Choose the modal',
            instructions: 'Обери правильне модальне дієслово.',
            items: [
              { id: 'c1', q: 'You ___ record your steps before midnight. It’s a rule.', options: ['must', 'don’t have to', 'shouldn’t'], answer: 0 },
              { id: 'c2', q: 'You ___ go to the gym — walking is enough.', options: ['mustn’t', 'don’t have to', 'have to'], answer: 1 },
              { id: 'c3', q: 'You ___ eat fast food during the challenge. It’s forbidden.', options: ['mustn’t', 'don’t have to', 'should'], answer: 0 },
              { id: 'c4', q: 'You look tired. You ___ go to bed earlier.', options: ['should', 'mustn’t', 'don’t have to'], answer: 0 },
              { id: 'c5', q: 'Last month I ___ stop drinking cola.', options: ['must', 'had to', 'have to'], answer: 1 },
              { id: 'c6', q: '___ Oleksandr have to walk every day?', options: ['Does', 'Do', 'Must'], answer: 0 }
            ]
          },
          {
            id: 'gram-quant',
            type: 'gap',
            title: 'Quantifiers',
            instructions: 'Встав much, many, few, little або enough.',
            items: [
              { id: 'g1', text: 'You should drink a lot of water, but not too {{much}} coffee.' },
              { id: 'g2', text: 'How {{many}} steps did you walk yesterday?' },
              { id: 'g3', text: 'You can eat a {{little}} chocolate — one or two pieces.' },
              { id: 'g4', text: 'I only had a {{few}} hours of sleep last night.' },
              { id: 'g5', text: 'He doesn’t sleep {{enough}}. He’s always tired.' },
              { id: 'g6', text: 'There are too {{many}} biscuits in the office kitchen!' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Тобі не обов’язково ходити в спортзал.', answer: "You don't have to go to the gym." },
              { id: 'o2', prompt: 'Тобі варто пити багато води.', answer: 'You should drink a lot of water.' },
              { id: 'o3', prompt: 'Скільки годин ти спиш?', answer: 'How many hours do you sleep?', extra: ['much'] },
              { id: 'o4', prompt: 'Мені довелося кинути пити колу.', answer: 'I had to stop drinking cola.' }
            ]
          },
          {
            id: 'gram-m14',
            type: 'choice',
            title: '↺ Modules 1–4 review',
            instructions: 'Повторення попередніх модулів A2.',
            items: [
              { id: 'm1', q: 'This month I ___ 10,000 steps a day.', options: ['walk usually', 'am walking', 'walked'], answer: 1 },
              { id: 'm2', q: 'I ___ to eat a lot of fast food, but now I cook at home.', options: ['use', 'used', 'am used'], answer: 1 },
              { id: 'm3', q: 'Walking is ___ than running for your knees.', options: ['better', 'more good', 'the best'], answer: 0 },
              { id: 'm4', q: 'I think I ___ win the challenge!', options: ['will', 'am winning', 'win'], answer: 0 },
              { id: 'm5', q: 'I ___ for a run when it started to rain.', options: ['went', 'was going', 'go'], answer: 1 }
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
            title: 'Halfway through',
            instructions: 'Двоє колег обговорюють челендж на середині місяця. Послухай.',
            audio: {
              title: 'Dialogue: Kira & Oleksandr',
              lines: [
                { who: 'Kira', text: 'How’s the challenge going, Oleksandr?' },
                { who: 'Oleksandr', text: 'Not bad! Yesterday I walked twelve thousand steps. I had to walk home because my car was at the garage.' },
                { who: 'Kira', text: 'Well done! I’m finding it hard. I don’t have much time to walk.' },
                { who: 'Oleksandr', text: 'You should get off the bus a few stops early. That’s what I do.' },
                { who: 'Kira', text: 'Good idea. And the chocolate rule is terrible! I only had a little yesterday and I wanted a lot more.' },
                { who: 'Oleksandr', text: 'You don’t have to stop completely — just one or two pieces. Try dark chocolate; you don’t need as much.' },
                { who: 'Kira', text: 'OK. And I must remember to record my steps tonight — I forgot on Tuesday!' }
              ]
            },
            items: [
              { id: 'l1', q: 'How many steps did Oleksandr walk yesterday?', options: ['8,000', '10,000', '12,000'], answer: 2 },
              { id: 'l2', q: 'Why did he have to walk home?', options: ['His car was at the garage.', 'He missed the bus.', 'He wanted to win.'], answer: 0 },
              { id: 'l3', q: 'What is Kira’s problem?', options: ['She doesn’t have much time to walk.', 'She’s ill.', 'She hates walking.'], answer: 0 },
              { id: 'l4', q: 'What does Oleksandr suggest?', options: ['Get off the bus a few stops early.', 'Go to the gym.', 'Buy a car.'], answer: 0 },
              { id: 'l5', q: 'What did Kira forget on Tuesday?', options: ['To walk', 'To record her steps', 'To drink water'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'I had to walk home.' },
              { id: 'dc2', text: 'I don’t have much time to walk.' },
              { id: 'dc3', text: 'You should get off the bus a few stops early.' },
              { id: 'dc4', text: 'You don’t have to stop completely.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-challenge',
            type: 'writing',
            title: 'Create your own challenge',
            instructions: 'Придумай власний 30-денний челендж (здоров’я, сон, без телефону, читання) і напиши правила.',
            prompt: 'Write the rules for your challenge (110–140 words).\n• What is the challenge and why is it good?\n• What do people have to / must do every day?\n• What mustn’t they do? What don’t they have to do?\n• Give two pieces of advice (should).\n• Use at least three quantifiers (a few, a little, too much, enough…).',
            minWords: 110,
            maxWords: 150,
            phrases: ['You have to', 'You must', 'You mustn’t', 'You don’t have to', 'You should', 'a little', 'too much'],
            checklist: ['Є have to / must', 'Є mustn’t і don’t have to (правильно розрізнені)', 'Є 2 поради з should', 'Є 3 слова кількості', 'Пояснено, чому це корисно'],
            model: `The 30-Day Screen Detox

We spend too much time on our phones. This challenge will help you sleep better and feel calmer.

Every day you have to put your phone in another room for one hour before bed. You must turn off notifications from social media. You mustn’t use your phone during meals — that’s the most important rule!

You don’t have to delete your apps, and you can use your phone for work and calls.

You should read a few pages of a paper book instead. You should also spend a little time outside every day, without your phone.

At the end of the month, check your screen time. Is it enough? Or still too much?`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-health',
            type: 'speaking',
            title: 'Healthy life',
            instructions: 'Відповідай уголос, використовуючи граматику модуля.',
            phrases: ['You should…', 'You have to…', 'You don’t have to…', 'I eat too much / too many…', 'I don’t … enough'],
            tasks: [
              { id: 'sp1', q: 'Would you take part in the office challenge? Which rule would be the hardest for you?', tips: 'I would / wouldn’t … The hardest rule for me is …', model: 'Yes, I would. The hardest rule for me is the chocolate one — I eat too much!' },
              { id: 'sp2', q: 'What are the rules at your work, school or home?', tips: 'We have to … We mustn’t … We don’t have to …', model: 'At work we have to start at nine. We mustn’t eat at our desks, but we don’t have to wear formal clothes.' },
              { id: 'sp3', q: 'What should you change in your lifestyle? Be honest!', tips: 'I should … I don’t … enough. I … too much …', model: 'I should sleep more. I don’t drink enough water, and I spend too much time on my phone.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'office': 'офіс', 'health': 'здоров’я', 'challenge': 'челендж, виклик', 'this month': 'цього місяця', 'company': 'компанія', 'organising': 'організовує',
      '30-day': '30-денний', 'employees': 'працівники', 'taking part': 'беруть участь', 'rules': 'правила', 'every day': 'щодня', 'have to': 'мусите',
      'walk': 'проходити', 'at least': 'щонайменше', 'steps': 'кроки', 'must': 'мусите', 'record': 'записувати', 'app': 'застосунок', 'before midnight': 'до півночі',
      "don't have to": 'не обов’язково', 'gym': 'спортзал', 'walking to work': 'ходьба на роботу', 'climbing stairs': 'підйом сходами', 'dancing': 'танці',
      'count': 'зараховуються', "mustn't": 'не можна', 'fast food': 'фастфуд', 'during': 'під час', 'can': 'можна', 'chocolate': 'шоколад', 'only': 'лише',
      'a little': 'трохи', 'pieces': 'шматочки', 'a day': 'на день', 'should': 'варто', 'drink': 'пити', 'a lot of': 'багато', 'water': 'вода',
      'putting': 'ставить', 'water bottles': 'пляшки з водою', 'desk': 'стіл', 'sleep': 'сон', 'important': 'важливий', 'go to bed': 'лягати спати',
      'before': 'до', "shouldn't": 'не варто', 'look at': 'дивитися на', 'screens': 'екрани', 'hour': 'година', 'end': 'кінець', 'prizes': 'призи',
      'winner': 'переможець', 'weekend': 'вихідні', 'spa hotel': 'спа-готель', 'second place': 'друге місце', 'pair': 'пара', 'running shoes': 'кросівки для бігу',
      'first week': 'перший тиждень', 'had to': 'довелося', 'stop': 'припинити', 'so much': 'так багато', 'cola': 'кола', 'easy': 'легко',
      "don't miss it": 'не сумую за цим', 'more': 'більше', 'energy': 'енергія', 'as many': 'стільки', 'headaches': 'головні болі', 'fourteen': 'чотирнадцять',
      'thirty': 'тридцять', 'forty': 'сорок', 'fruit': 'фрукти', 'working late': 'працювати допізна', 'employee': 'працівник', 'take part': 'брати участь',
      'prize': 'приз', 'sore throat': 'біль у горлі', 'allowed': 'дозволено', 'pets': 'тварини', 'dizzy': 'запаморочення', 'fine': 'штраф',
      'included': 'включений', 'homemade': 'домашній', 'portion': 'порція', 'signed up': 'записалися', "don't forget": 'не забудь', 'every evening': 'щовечора',
      'first prize': 'перший приз', 'spa weekend': 'спа-вихідні', 'uniform': 'форма', 'rule': 'правило', 'forbidden': 'заборонено', 'tired': 'втомлений',
      'earlier': 'раніше', 'last month': 'минулого місяця', 'coffee': 'кава', 'yesterday': 'учора', 'hours': 'години', 'last night': 'учора вночі',
      'always': 'завжди', 'biscuits': 'печиво', 'kitchen': 'кухня', 'used to': 'раніше', 'cook': 'готувати', 'better': 'краще', 'running': 'біг',
      'knees': 'коліна', 'win': 'виграти', 'run': 'пробіжка', 'started to rain': 'почався дощ', 'halfway through': 'на півдорозі', "how's … going": 'як просувається',
      'not bad': 'непогано', 'thousand': 'тисяча', 'walk home': 'йти додому пішки', 'car': 'машина', 'garage': 'автосервіс', 'well done': 'молодець',
      'finding it hard': 'мені важко', 'much time': 'багато часу', 'get off': 'виходити', 'bus': 'автобус', 'a few stops': 'кілька зупинок',
      'good idea': 'гарна ідея', 'terrible': 'жахливе', 'wanted': 'хотіла', 'completely': 'повністю', 'dark chocolate': 'чорний шоколад',
      "don't need as much": 'потрібно не так багато', 'remember': 'не забути', 'tonight': 'сьогодні ввечері', 'forgot': 'забула', 'tuesday': 'вівторок',
      'missed': 'пропустив', 'ill': 'хвора', 'hates': 'ненавидить', 'suggest': 'пропонує', 'create': 'створити', 'own': 'власний', 'screen detox': 'детокс від екранів',
      'spend': 'проводимо', 'too much': 'забагато', 'phones': 'телефони', 'help': 'допоможе', 'calmer': 'спокійніше', 'put': 'клади', 'another room': 'інша кімната',
      'turn off': 'вимкни', 'notifications': 'сповіщення', 'social media': 'соцмережі', 'meals': 'прийоми їжі', 'delete': 'видаляти', 'apps': 'застосунки',
      'calls': 'дзвінки', 'a few': 'кілька', 'pages': 'сторінки', 'paper book': 'паперова книга', 'outside': 'надворі', 'without': 'без',
      'screen time': 'екранний час', 'enough': 'достатньо', 'still': 'досі', 'hardest': 'найважче', 'formal clothes': 'офіційний одяг', 'lifestyle': 'спосіб життя',
      'honest': 'чесний', "how's": 'як'
    }
  });
})();
