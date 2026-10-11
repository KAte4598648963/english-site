/*
 * A2 · Module 5 · Lesson 2 — Rules (must / mustn’t; have to / don’t have to)
 * Review: can / can’t (A1), should (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Welcome to Green Hill Hostel!',
    text: `We want everyone to have a great stay. Please read our house rules.

Check-in and check-out: You must show your passport or ID card when you check in. Check-out is at 11 a.m. If you want to leave your bags after that, you don’t have to pay — just ask at reception.

Kitchen: You can use the kitchen from 7 a.m. to 11 p.m. You have to wash your own dishes, and you must write your name on any food in the fridge. You mustn’t take other guests’ food!

Rooms: You mustn’t smoke anywhere in the building. Please be quiet after 10 p.m. — other guests are sleeping. You don’t have to make your bed, but please keep the room tidy.

Breakfast: Breakfast is included in the price, so you don’t have to buy it. It’s from 8 to 10. You don’t have to book.

Pets: Sorry, you can’t bring pets. Only guide dogs are allowed.

Thank you, and enjoy Lviv!`
  };

  ENG.registerLesson({
    id: 'a2-m5-l2',
    level: 'a2',
    title: 'Rules. Правила',
    subtitle: 'must / mustn’t · have to / don’t have to · обов’язок, заборона, необов’язково',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Hostel rules',
            instructions: 'Прочитай правила хостелу.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What must you show when you check in?', options: ['Your ticket', 'Your passport or ID card', 'Your credit card'], answer: 1 },
              { id: 'q2', q: 'When is check-out?', options: ['At 10 a.m.', 'At 11 a.m.', 'At 12 p.m.'], answer: 1 },
              { id: 'q3', q: 'What must you write on food in the fridge?', options: ['The date', 'Your name', 'Your room number'], answer: 1 },
              { id: 'q4', q: 'Do you have to pay for breakfast?', options: ['Yes, it’s extra.', 'No, it’s included.', 'Only at weekends.'], answer: 1 },
              { id: 'q5', q: 'Which animals are allowed?', options: ['Cats', 'Small dogs', 'Only guide dogs'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'You have to pay to leave your bags after check-out.', answer: false, explain: '“…you don’t have to pay.”' },
              { id: 's2', s: 'You can use the kitchen at midnight.', answer: false, explain: 'From 7 a.m. to 11 p.m.' },
              { id: 's3', s: 'You have to wash your own dishes.', answer: true },
              { id: 's4', s: 'You have to make your bed.', answer: false, explain: '“You don’t have to make your bed.”' },
              { id: 's5', s: 'You don’t have to book breakfast.', answer: true }
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
            title: 'Rules & signs',
            instructions: 'Слова про правила, дозволи й заборони.',
            cards: [
              { front: 'rule', ipa: '/ruːl/', back: 'правило', example: 'Please read the house rules.' },
              { front: 'allowed / not allowed', ipa: '/əˈlaʊd/', back: 'дозволено / заборонено', example: 'Pets are not allowed.' },
              { front: 'forbidden', ipa: '/fəˈbɪdn/', back: 'заборонений', example: 'Smoking is forbidden.' },
              { front: 'check in / check out', back: 'заселятися / виселятися', example: 'You can check in after 2 p.m.' },
              { front: 'reception', ipa: '/rɪˈsepʃn/', back: 'рецепція', example: 'Ask at reception.' },
              { front: 'included', ipa: '/ɪnˈkluːdɪd/', back: 'включений', example: 'Breakfast is included.' },
              { front: 'uniform', ipa: '/ˈjuːnɪfɔːm/', back: 'форма (одяг)', example: 'Nurses have to wear a uniform.' },
              { front: 'switch off', back: 'вимикати', example: 'Switch off your phone, please.' },
              { front: 'on time', back: 'вчасно', example: 'You must be on time.' },
              { front: 'a fine', ipa: '/faɪn/', back: 'штраф', example: 'You’ll get a fine for parking here.' },
              { front: 'tidy', ipa: '/ˈtaɪdi/', back: 'охайний', example: 'Keep your room tidy.' },
              { front: 'permission', ipa: '/pəˈmɪʃn/', back: 'дозвіл', example: 'You need permission to take photos.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Where can you see this sign?',
            instructions: 'Поєднай правило з місцем.',
            pairs: [
              ['Switch off your phone.', 'cinema'],
              ['No swimming after 6 p.m.', 'beach'],
              ['Keep off the grass.', 'park'],
              ['Wear a helmet.', 'building site'],
              ['Fasten your seatbelt.', 'plane'],
              ['Silence, please.', 'library'],
              ['Do not feed the animals.', 'zoo'],
              ['Show your boarding pass.', 'airport gate']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the rules',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Smoking is not {{allowed}} in the hotel.' },
              { id: 'd2', text: 'Please {{switch}} off your phones during the film.' },
              { id: 'd3', text: 'Breakfast is {{included}} in the price.' },
              { id: 'd4', text: 'If you park here, you’ll get a {{fine}}.' },
              { id: 'd5', text: 'All students must wear a school {{uniform}}.' },
              { id: 'd6', text: 'You can {{check}} in from 2 p.m.' }
            ],
            distractors: ['reception']
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
            title: 'must / have to / mustn’t / don’t have to',
            instructions: 'Чотири важливі «правила про правила». Особливо уважно — до різниці між mustn’t і don’t have to!',
            html: `
<h3>1. Обов’язок: must і have to</h3>
<div class="table-wrap"><table>
  <tr><th>must</th><th>have to</th></tr>
  <tr><td>правило, обов’язок (часто — письмові правила, або те, що <b>я сам</b> вважаю необхідним)</td><td>обов’язок <b>ззовні</b>: закон, робота, обставини</td></tr>
  <tr><td>You <b>must</b> show your passport.<br>I <b>must</b> call my mum tonight.</td><td>I <b>have to</b> wear a uniform at work.<br>She <b>has to</b> get up at 5.</td></tr>
</table></div>
<p>У повсякденній розмові <b>have to</b> вживається частіше. Обидва = «мусити, треба».</p>
<p>⚠️ Форми: <b>must</b> — однакове для всіх (she must). <b>have to</b> змінюється: I <b>have to</b>, she <b>has to</b>; питання — <b>Do</b> you <b>have to</b>…? <b>Does</b> he <b>have to</b>…?</p>
<p>⚠️ Минулий час — лише <b>had to</b>: Yesterday I <b>had to</b> work late. <span class="no">musted</span></p>

<h3>2. ⚠️ mustn’t ≠ don’t have to</h3>
<div class="table-wrap"><table>
  <tr><th>mustn’t = НЕ МОЖНА (заборона)</th><th>don’t have to = НЕ ОБОВ’ЯЗКОВО (можна, але не треба)</th></tr>
  <tr><td>You <b>mustn’t</b> smoke in the building. 🚫</td><td>You <b>don’t have to</b> make your bed. 🙂 (якщо хочеш — можна)</td></tr>
  <tr><td>You <b>mustn’t</b> take other guests’ food.</td><td>You <b>don’t have to</b> book breakfast.</td></tr>
</table></div>
<p>Це найчастіша помилка українців! «Не треба» ≠ «не можна».</p>

<h3>3. can / can’t — дозвіл</h3>
<div class="ex-line">You <b>can</b> use the kitchen until 11. · You <b>can’t</b> bring pets. <span class="muted">(can’t ≈ mustn’t, але менш суворо)</span></div>

<h3>4. Шкала від «треба» до «не можна»</h3>
<div class="ex-line">must / have to (треба) → should (варто) → can (можна) → don’t have to (не обов’язково) → shouldn’t (не варто) → can’t / mustn’t (не можна)</div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">You mustn’t pay — it’s free.</span> → <span class="yes">You don’t have to pay — it’s free.</span><br>
<span class="no">She have to work.</span> → <span class="yes">She has to work.</span><br>
<span class="no">I must to go.</span> → <span class="yes">I must go.</span><br>
<span class="no">Yesterday I must work.</span> → <span class="yes">Yesterday I had to work.</span></div>`
          },
          {
            id: 'gram-mustnt',
            type: 'choice',
            title: 'mustn’t or don’t have to?',
            instructions: 'Заборона (mustn’t) чи «не обов’язково» (don’t have to)?',
            items: [
              { id: 'c1', q: 'Museum entry is free. You ___ pay.', options: ['mustn’t', 'don’t have to'], answer: 1 },
              { id: 'c2', q: 'You ___ use your phone while driving. It’s dangerous!', options: ['mustn’t', 'don’t have to'], answer: 0 },
              { id: 'c3', q: 'It’s Saturday. I ___ get up early.', options: ['mustn’t', 'don’t have to'], answer: 1 },
              { id: 'c4', q: 'You ___ swim here. There are sharks!', options: ['mustn’t', 'don’t have to'], answer: 0 },
              { id: 'c5', q: 'You ___ bring food. We have lots.', options: ['mustn’t', 'don’t have to'], answer: 1 },
              { id: 'c6', q: 'Students ___ cheat in exams.', options: ['mustn’t', 'don’t have to'], answer: 0 }
            ]
          },
          {
            id: 'gram-haveto',
            type: 'gap',
            title: 'have to / has to / had to',
            instructions: 'Встав правильну форму have to (+, −, ?, минулий).',
            items: [
              { id: 'g1', text: 'Nurses {{have to}} wear a uniform.' },
              { id: 'g2', text: 'My dad {{has to}} get up at 5 a.m. for work.' },
              { id: 'g3', text: '{{Do}} you have to work on Saturdays?' },
              { id: 'g4', text: 'She {{doesn’t have to|does not have to}} pay for breakfast. (−)' },
              { id: 'g5', text: 'Yesterday I {{had to}} stay late at the office.' },
              { id: 'g6', text: '{{Does}} he have to show his passport?' }
            ]
          },
          {
            id: 'gram-all',
            type: 'choice',
            title: 'Choose the best modal',
            instructions: 'Обери найкраще модальне дієслово.',
            items: [
              { id: 'a1', q: 'You ___ show your ID at the airport.', options: ['must', 'don’t have to', 'should not'], answer: 0 },
              { id: 'a2', q: 'You ___ visit the old town — it’s beautiful!', options: ['should', 'mustn’t', 'have to not'], answer: 0 },
              { id: 'a3', q: 'Guests ___ use the gym for free.', options: ['can', 'mustn’t', 'must to'], answer: 0 },
              { id: 'a4', q: 'Last year we ___ wear masks on the bus.', options: ['must', 'had to', 'have to'], answer: 1 },
              { id: 'a5', q: 'I ___ remember to buy milk — we have none!', options: ['must', 'mustn’t', 'don’t have to'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Тобі не обов’язково застеляти ліжко.', answer: "You don't have to make your bed." },
              { id: 'o2', prompt: 'У будівлі не можна палити.', answer: "You mustn't smoke in the building." },
              { id: 'o3', prompt: 'Їй доводиться працювати у вихідні.', answer: 'She has to work at weekends.', extra: ['have'] },
              { id: 'o4', prompt: 'Учора мені довелося чекати дві години.', answer: 'Yesterday I had to wait two hours.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: can і should',
            instructions: 'Згадаймо A1 і урок 1.',
            items: [
              { id: 'r1', q: '___ I leave my bags here? — Yes, of course.', options: ['Can', 'Must', 'Do'], answer: 0 },
              { id: 'r2', q: 'You look tired. You ___ go to bed early.', options: ['should', 'mustn’t', 'can’t'], answer: 0 },
              { id: 'r3', q: 'Sorry, you ___ park here. It’s for staff only.', options: ['can’t', 'don’t have to', 'should'], answer: 0 },
              { id: 'r4', q: 'I don’t think you ___ eat so late.', options: ['should', 'shouldn’t', 'should to'], answer: 0 }
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
            title: 'First day at work',
            instructions: 'Менеджерка пояснює новому працівникові кафе правила. Послухай.',
            audio: {
              title: 'Dialogue: Manager & Bohdan',
              lines: [
                { who: 'Manager', text: 'Welcome, Bohdan! Let me explain the rules. You have to be here at 7:30 every morning. The café opens at eight.' },
                { who: 'Bohdan', text: 'Do I have to wear a uniform?' },
                { who: 'Manager', text: 'You have to wear our green T-shirt, but you don’t have to wear black trousers — jeans are fine.' },
                { who: 'Bohdan', text: 'Can I use my phone?' },
                { who: 'Manager', text: 'Only on your break. You mustn’t use it when you’re serving customers.' },
                { who: 'Bohdan', text: 'OK. And lunch?' },
                { who: 'Manager', text: 'You don’t have to bring lunch. Staff can eat here for free. But you must wash your hands before you touch any food. That’s the most important rule!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What time does Bohdan have to arrive?', options: ['7:00', '7:30', '8:00'], answer: 1 },
              { id: 'l2', q: 'What does he have to wear?', options: ['A green T-shirt', 'Black trousers', 'A white shirt'], answer: 0 },
              { id: 'l3', q: 'When can he use his phone?', options: ['Any time', 'Only on his break', 'Never'], answer: 1 },
              { id: 'l4', q: 'Does he have to bring lunch?', options: ['Yes, he does.', 'No, he doesn’t.'], answer: 1 },
              { id: 'l5', q: 'What is the most important rule?', options: ['Be on time.', 'Wash your hands before touching food.', 'Smile at customers.'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Do I have to wear a uniform?' },
              { id: 'dc2', text: 'You don’t have to wear black trousers.' },
              { id: 'dc3', text: 'You mustn’t use your phone.' },
              { id: 'dc4', text: 'You must wash your hands.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-rules',
            type: 'writing',
            title: 'House rules',
            instructions: 'Ти здаєш квартиру туристам. Напиши для них правила будинку.',
            prompt: 'Write house rules for guests (90–120 words).\n• Check-in / check-out (must / have to).\n• What is forbidden (mustn’t / can’t).\n• What is optional (don’t have to).\n• What is allowed (can).\n• One piece of friendly advice (should).',
            minWords: 90,
            maxWords: 130,
            phrases: ['You must', 'You have to', 'You mustn’t', 'You don’t have to', 'You can', 'You should'],
            checklist: ['Є must / have to', 'Є mustn’t і don’t have to — вжиті правильно', 'Є can', 'Є порада з should', 'Ввічливий тон (please, thank you)'],
            model: `Welcome to our flat! Please read these rules.

You can check in any time after 3 p.m. You have to leave the keys in the box by the door when you check out at 11 a.m.

You mustn’t smoke inside the flat — you can smoke on the balcony. Please don’t make noise after 10 p.m.; our neighbours have a baby. You mustn’t have parties.

You don’t have to wash the towels or clean the floors — we’ll do that. But you have to take out the rubbish.

You should try the bakery across the street — their croissants are the best in Odesa!

Thank you and enjoy your stay!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-rules',
            type: 'speaking',
            title: 'Rules in your life',
            instructions: 'Відповідай уголос.',
            phrases: ['I have to…', 'I don’t have to…', 'We mustn’t…', 'We can…', 'When I was a child, I had to…'],
            tasks: [
              { id: 'sp1', q: 'What do you have to do at work or school? What don’t you have to do?', tips: 'I have to … I don’t have to …', model: 'I have to start at nine and answer a lot of emails. I don’t have to wear a suit.' },
              { id: 'sp2', q: 'What rules did you have to follow when you were a child?', tips: 'I had to … I couldn’t …', model: 'I had to be home before dark, and I couldn’t watch TV on school nights.' },
              { id: 'sp3', q: 'What are the most important rules for drivers in your country?', tips: 'Drivers must … They mustn’t …', model: 'Drivers must wear a seatbelt. They mustn’t drink and drive or use their phones.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'welcome': 'ласкаво просимо', 'hostel': 'хостел', 'everyone': 'усі', 'great stay': 'гарне перебування', 'please': 'будь ласка', 'read': 'прочитайте',
      'house rules': 'правила будинку', 'rules': 'правила', 'check-in': 'заселення', 'check-out': 'виселення', 'must': 'мусите, треба', 'show': 'показати',
      'passport': 'паспорт', 'id card': 'посвідчення', 'check in': 'заселятися', 'leave': 'залишити', 'bags': 'сумки', 'after that': 'після цього',
      "don't have to": 'не обов’язково', 'pay': 'платити', 'just': 'просто', 'ask': 'запитайте', 'reception': 'рецепція', 'kitchen': 'кухня', 'use': 'користуватися',
      'have to': 'доводиться, треба', 'wash': 'мити', 'own': 'власний', 'dishes': 'посуд', 'write': 'писати', 'name': 'ім’я', 'any': 'будь-яка', 'food': 'їжа',
      'fridge': 'холодильник', "mustn't": 'не можна', 'take': 'брати', 'other': 'інші', "guests'": 'гостей', 'rooms': 'кімнати', 'smoke': 'палити',
      'anywhere': 'будь-де', 'building': 'будівля', 'be quiet': 'не шуміть', 'sleeping': 'сплять', 'make your bed': 'застеляти ліжко', 'keep': 'тримайте',
      'tidy': 'охайною', 'breakfast': 'сніданок', 'included': 'включений', 'price': 'ціна', 'buy': 'купувати', 'book': 'бронювати', 'pets': 'домашні тварини',
      'bring': 'привозити', 'only': 'лише', 'guide dogs': 'собаки-поводирі', 'allowed': 'дозволені', 'enjoy': 'насолоджуйтеся', 'ticket': 'квиток',
      'credit card': 'кредитка', 'date': 'дата', 'room number': 'номер кімнати', 'extra': 'додатково', 'weekends': 'вихідні', 'animals': 'тварини',
      'cats': 'коти', 'small dogs': 'маленькі собаки', 'midnight': 'опівночі', 'rule': 'правило', 'not allowed': 'заборонено', 'forbidden': 'заборонено',
      'check out': 'виселятися', 'uniform': 'форма', 'nurses': 'медсестри', 'wear': 'носити', 'switch off': 'вимикати', 'on time': 'вчасно', 'fine': 'штраф',
      'parking': 'паркування', 'permission': 'дозвіл', 'photos': 'фото', 'sign': 'знак, табличка', 'cinema': 'кінотеатр', 'swimming': 'плавання',
      'beach': 'пляж', 'keep off the grass': 'по газону не ходити', 'park': 'парк', 'helmet': 'каска', 'building site': 'будмайданчик', 'fasten': 'пристебніть',
      'seatbelt': 'пасок безпеки', 'plane': 'літак', 'silence': 'тиша', 'library': 'бібліотека', 'feed': 'годувати', 'zoo': 'зоопарк',
      'boarding pass': 'посадковий талон', 'airport gate': 'вихід на посадку', 'hotel': 'готель', 'during': 'під час', 'film': 'фільм', 'students': 'учні',
      'school uniform': 'шкільна форма', 'free': 'безкоштовний', 'museum entry': 'вхід до музею', 'phone': 'телефон', 'driving': 'кермування',
      'dangerous': 'небезпечно', 'saturday': 'субота', 'get up': 'вставати', 'early': 'рано', 'sharks': 'акули', 'lots': 'багато', 'cheat': 'списувати',
      'exams': 'іспити', 'dad': 'тато', 'work': 'робота', 'yesterday': 'учора', 'had to': 'довелося', 'stay late': 'залишитися допізна', 'office': 'офіс',
      'id': 'документ', 'airport': 'аеропорт', 'visit': 'відвідати', 'old town': 'старе місто', 'beautiful': 'гарне', 'guests': 'гості', 'gym': 'спортзал',
      'last year': 'минулого року', 'masks': 'маски', 'bus': 'автобус', 'remember': 'не забути', 'milk': 'молоко', 'none': 'нічого', 'wait': 'чекати',
      'hours': 'години', 'staff': 'персонал', 'tired': 'втомлений', 'go to bed': 'лягати спати', 'late': 'пізно', 'manager': 'менеджерка',
      'explain': 'пояснити', 'every morning': 'щоранку', 'café': 'кафе', 'opens': 'відкривається', 't-shirt': 'футболка', 'black trousers': 'чорні штани',
      'jeans': 'джинси', 'break': 'перерва', 'serving': 'обслуговуєш', 'customers': 'клієнти', 'lunch': 'обід', 'hands': 'руки', 'touch': 'торкатися',
      'most important': 'найважливіше', 'any time': 'будь-коли', 'never': 'ніколи', 'smile': 'усміхатися', 'flat': 'квартира', 'keys': 'ключі', 'box': 'скринька',
      'door': 'двері', 'inside': 'всередині', 'balcony': 'балкон', 'make noise': 'шуміти', 'neighbours': 'сусіди', 'baby': 'немовля', 'parties': 'вечірки',
      'towels': 'рушники', 'clean': 'мити', 'floors': 'підлоги', 'take out': 'виносити', 'rubbish': 'сміття', 'bakery': 'пекарня', 'across the street': 'через дорогу',
      'croissants': 'круасани', 'answer': 'відповідати', 'emails': 'листи', 'suit': 'костюм', 'follow': 'дотримуватися', 'child': 'дитина', 'before dark': 'до темряви',
      "couldn't": 'не могла', 'school nights': 'вечори перед школою', 'drivers': 'водії', 'country': 'країна', 'drink and drive': 'кермувати напідпитку'
    }
  });
})();
