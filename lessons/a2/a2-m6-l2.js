/*
 * A2 · Module 6 · Lesson 2 — Not yet! (Present Perfect with just / already / yet)
 * Review: Present Perfect for experience (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Ready to go?',
    text: `It’s Thursday evening, and Max and Yulia are flying to Barcelona tomorrow at 6 a.m. Yulia is checking their list.

Yulia: Have you packed your suitcase yet?
Max: Yes, I’ve already packed it! I did it this morning.
Yulia: Great. Have you checked in online?
Max: Not yet. I’m doing it now… OK, I’ve just checked in. I’ve also downloaded the boarding passes to my phone.
Yulia: Perfect. I’ve already bought travel insurance, and I’ve just changed some money into euros.
Max: Have you found the phone charger? I can’t find mine.
Yulia: I haven’t found it yet. Oh wait — here it is, in the kitchen!
Max: And have you asked your mum to water the plants?
Yulia: Yes, I’ve already given her the keys. But I haven’t ordered the taxi yet. I’ll do it now.
Max: Have we forgotten anything?
Yulia: Hmm… The passports! Where are they?
Max: Don’t worry — I’ve just put them in my bag.`
  };

  ENG.registerLesson({
    id: 'a2-m6-l2',
    level: 'a2',
    title: 'Not yet! Вже чи ще ні?',
    subtitle: 'Present Perfect: just · already · yet · результат зараз',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Getting ready',
            instructions: 'Макс і Юля готуються до поїздки. Прочитай їхню розмову.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where are they flying?', options: ['To Barcelona', 'To Berlin', 'To Budapest'], answer: 0 },
              { id: 'q2', q: 'When did Max pack his suitcase?', options: ['Yesterday', 'This morning', 'He hasn’t packed it yet.'], answer: 1 },
              { id: 'q3', q: 'What has Yulia just done?', options: ['Bought insurance', 'Changed money into euros', 'Ordered a taxi'], answer: 1 },
              { id: 'q4', q: 'Where was the phone charger?', options: ['In the bag', 'In the kitchen', 'In the car'], answer: 1 },
              { id: 'q5', q: 'Where are the passports?', options: ['Max has just put them in his bag.', 'They have lost them.', 'Yulia’s mum has them.'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'Done or not yet?',
            instructions: 'Правда чи неправда? Що вже зроблено, а що — ще ні?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Max has checked in online.', answer: true },
              { id: 's2', s: 'Max has downloaded the boarding passes.', answer: true },
              { id: 's3', s: 'Yulia has ordered the taxi.', answer: false, explain: '“I haven’t ordered the taxi yet.”' },
              { id: 's4', s: 'Yulia has given her mum the keys.', answer: true },
              { id: 's5', s: 'They haven’t bought travel insurance yet.', answer: false, explain: '“I’ve already bought travel insurance.”' }
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
            title: 'Preparing for a trip',
            instructions: 'Слова, щоб зібратися в подорож.',
            cards: [
              { front: 'pack a suitcase', ipa: '/ˈsuːtkeɪs/', back: 'пакувати валізу', example: 'I’ve already packed my suitcase.' },
              { front: 'check in online', back: 'зареєструватися онлайн', example: 'Have you checked in online?' },
              { front: 'boarding pass', back: 'посадковий талон', example: 'Download your boarding pass.' },
              { front: 'travel insurance', ipa: '/ɪnˈʃʊərəns/', back: 'туристична страховка', example: 'Don’t forget travel insurance.' },
              { front: 'change money', back: 'обміняти гроші', example: 'I’ve just changed some money.' },
              { front: 'currency', ipa: '/ˈkʌrənsi/', back: 'валюта', example: 'What’s the currency in Poland?' },
              { front: 'charger', ipa: '/ˈtʃɑːdʒə/', back: 'зарядний пристрій', example: 'I can’t find my phone charger.' },
              { front: 'water the plants', back: 'поливати рослини', example: 'Can you water the plants?' },
              { front: 'download', back: 'завантажити', example: 'I’ve downloaded the tickets.' },
              { front: 'order a taxi', back: 'замовити таксі', example: 'I haven’t ordered a taxi yet.' },
              { front: 'forget (forgot – forgotten)', back: 'забувати', example: 'Have we forgotten anything?' },
              { front: 'list', back: 'список', example: 'Let’s check the list.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Trip checklist',
            instructions: 'Поєднай дієслово з другою частиною виразу.',
            pairs: [
              ['pack', 'a suitcase'],
              ['check in', 'online'],
              ['buy', 'travel insurance'],
              ['change', 'money'],
              ['water', 'the plants'],
              ['order', 'a taxi'],
              ['charge', 'your phone'],
              ['lock', 'the door']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Before the flight',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Show your {{boarding}} pass at the gate.' },
              { id: 'd2', text: 'My phone is dead. Where’s my {{charger}}?' },
              { id: 'd3', text: 'The {{currency}} in Spain is the euro.' },
              { id: 'd4', text: 'Don’t travel without travel {{insurance}}.' },
              { id: 'd5', text: 'I’m too tired to {{pack}} tonight. I’ll do it tomorrow.' },
              { id: 'd6', text: 'Let’s check the {{list}} one more time.' }
            ],
            distractors: ['plants']
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
            title: 'just / already / yet',
            instructions: 'Present Perfect також показує результат, важливий ЗАРАЗ. Три слова-помічники: just, already, yet.',
            html: `
<h3>1. Результат зараз</h3>
<p>Present Perfect = дія в минулому, але нас цікавить <b>результат зараз</b>:</p>
<div class="ex-line">I<mark>’ve packed</mark> my suitcase. <span class="muted">→ валіза готова зараз</span></div>
<div class="ex-line">I<mark>’ve lost</mark> my keys. <span class="muted">→ ключів немає зараз</span></div>

<h3>2. just / already / yet</h3>
<div class="table-wrap"><table>
  <tr><th>Слово</th><th>Значення</th><th>Де стоїть</th><th>Приклад</th></tr>
  <tr><td><b>just</b></td><td>щойно</td><td>між have і V3</td><td>I’ve <b>just</b> checked in.</td></tr>
  <tr><td><b>already</b></td><td>вже (раніше, ніж очікували)</td><td>між have і V3</td><td>I’ve <b>already</b> bought insurance.</td></tr>
  <tr><td><b>yet</b> (у −)</td><td>ще (не)</td><td>у кінці речення</td><td>I haven’t ordered the taxi <b>yet</b>.</td></tr>
  <tr><td><b>yet</b> (у ?)</td><td>вже</td><td>у кінці речення</td><td>Have you packed <b>yet</b>?</td></tr>
</table></div>
<p>⚠️ <b>yet</b> — лише в <b>питаннях і запереченнях</b>. У ствердженні — already.</p>
<p>💡 Коротка відповідь: — Have you eaten? — <b>Not yet.</b> (Ще ні.)</p>

<h3>3. Present Perfect чи Past Simple?</h3>
<div class="table-wrap"><table>
  <tr><th>Present Perfect — немає точного часу</th><th>Past Simple — є точний час</th></tr>
  <tr><td>I’ve <b>already packed</b> it.</td><td>I <b>packed</b> it <b>this morning</b>.</td></tr>
  <tr><td>She’s <b>just called</b>.</td><td>She <b>called</b> <b>five minutes ago</b>.</td></tr>
</table></div>
<p>⚠️ Зі словами <b>yesterday, ago, last…, in 2020, at 5 o’clock</b> — тільки Past Simple: <span class="no">I’ve packed it yesterday.</span> → <span class="yes">I packed it yesterday.</span></p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I’ve already packed it yet.</span> → <span class="yes">I’ve already packed it.</span><br>
<span class="no">I have yet finished.</span> → <span class="yes">I haven’t finished yet.</span><br>
<span class="no">Did you finish yet?</span> → <span class="yes">Have you finished yet?</span><br>
<span class="no">She has just went.</span> → <span class="yes">She has just gone.</span></div>`
          },
          {
            id: 'gram-jay',
            type: 'choice',
            title: 'just, already or yet?',
            instructions: 'Обери just, already або yet.',
            items: [
              { id: 'c1', q: 'Have you checked in ___?', options: ['just', 'already', 'yet'], answer: 2 },
              { id: 'c2', q: 'I’ve ___ packed. It’s all done!', options: ['already', 'yet', 'ever'], answer: 0 },
              { id: 'c3', q: 'The taxi is outside. It has ___ arrived.', options: ['yet', 'just', 'never'], answer: 1 },
              { id: 'c4', q: 'I haven’t found my charger ___.', options: ['already', 'just', 'yet'], answer: 2 },
              { id: 'c5', q: '— Have you eaten? — Not ___.', options: ['yet', 'already', 'just'], answer: 0 },
              { id: 'c6', q: 'Wow, you’ve ___ finished the book? You bought it yesterday!', options: ['yet', 'already', 'ever'], answer: 1 }
            ]
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Write the sentences',
            instructions: 'Постав дієслово в Present Perfect з just / already / yet.',
            items: [
              { id: 'g1', text: 'I {{’ve just checked|have just checked}} in. (just / check)' },
              { id: 'g2', text: 'Yulia {{has already bought|’s already bought}} insurance. (already / buy)' },
              { id: 'g3', text: 'We {{haven’t ordered|have not ordered}} the taxi yet. (− order)' },
              { id: 'g4', text: '{{Have}} you packed your suitcase yet?' },
              { id: 'g5', text: 'Max {{has just put|’s just put}} the passports in his bag. (just / put)' },
              { id: 'g6', text: 'She {{hasn’t found|has not found}} her charger yet. (− find)' }
            ]
          },
          {
            id: 'gram-ppps',
            type: 'choice',
            title: 'Present Perfect or Past Simple?',
            instructions: 'Обери правильний час. Шукай слова-маркери!',
            items: [
              { id: 'p1', q: 'I ___ my suitcase this morning.', options: ['have packed', 'packed'], answer: 1 },
              { id: 'p2', q: 'I ___ my suitcase. Let’s go!', options: ['have already packed', 'packed already yesterday'], answer: 0 },
              { id: 'p3', q: 'She ___ ten minutes ago.', options: ['has called', 'called'], answer: 1 },
              { id: 'p4', q: '___ you ever ___ to Spain?', options: ['Have / been', 'Did / be'], answer: 0 },
              { id: 'p5', q: 'We ___ in Barcelona last year.', options: ['have been', 'were'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Ти вже спакував валізу?', answer: 'Have you packed your suitcase yet?' },
              { id: 'o2', prompt: 'Я щойно замовила таксі.', answer: "I've just ordered a taxi." },
              { id: 'o3', prompt: 'Ми ще не обміняли гроші.', answer: "We haven't changed the money yet.", extra: ['already'] },
              { id: 'o4', prompt: 'Вона вже купила квитки.', answer: 'She has already bought the tickets.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: ever / never, been / gone',
            instructions: 'Згадаймо урок 1.',
            items: [
              { id: 'r1', text: 'Have you {{ever}} been to Barcelona?' },
              { id: 'r2', text: 'I’ve {{never}} seen the sea. (ніколи)' },
              { id: 'r3', text: 'Yulia isn’t here. She’s {{gone}} to the shop.' },
              { id: 'r4', text: 'I’ve {{been}} to Spain twice — I love it!' }
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
            title: 'Party preparations',
            instructions: 'Друзі готують вечірку-сюрприз. Послухай, що вже зроблено.',
            audio: {
              title: 'Phone call: Nina & Den',
              lines: [
                { who: 'Nina', text: 'Hi Den! The party starts in two hours. Have you bought the cake yet?' },
                { who: 'Den', text: 'Yes, I’ve just picked it up. It’s chocolate, Sasha’s favourite.' },
                { who: 'Nina', text: 'Great! I’ve already decorated the living room. And I’ve hidden the presents in the bedroom.' },
                { who: 'Den', text: 'Have you invited Sasha’s brother?' },
                { who: 'Nina', text: 'Not yet! Oh no, I forgot. I’ll call him now.' },
                { who: 'Den', text: 'And the music?' },
                { who: 'Nina', text: 'I’ve already made a playlist. But we haven’t bought any drinks yet.' },
                { who: 'Den', text: 'Don’t worry. I’m near the shop — I’ll get them.' }
              ]
            },
            items: [
              { id: 'l1', q: 'When does the party start?', options: ['In one hour', 'In two hours', 'Tomorrow'], answer: 1 },
              { id: 'l2', q: 'What has Den just done?', options: ['Bought drinks', 'Picked up the cake', 'Invited Sasha’s brother'], answer: 1 },
              { id: 'l3', q: 'Where has Nina hidden the presents?', options: ['In the kitchen', 'In the bedroom', 'In the car'], answer: 1 },
              { id: 'l4', q: 'What has Nina forgotten?', options: ['To invite Sasha’s brother', 'To make a playlist', 'To decorate'], answer: 0 },
              { id: 'l5', q: 'What haven’t they bought yet?', options: ['The cake', 'Drinks', 'Presents'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Have you bought the cake yet?' },
              { id: 'dc2', text: 'I’ve just picked it up.' },
              { id: 'dc3', text: 'I’ve already decorated the living room.' },
              { id: 'dc4', text: 'We haven’t bought any drinks yet.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-progress',
            type: 'writing',
            title: 'A progress update',
            instructions: 'Ти готуєшся до важливої події (переїзд, весілля, відпустка, іспит). Напиши повідомлення другові: що вже зроблено, а що ще ні.',
            prompt: 'Write a message (90–110 words).\n• What is the event? When is it?\n• 3 things you have already done.\n• 1–2 things you have just done.\n• 2–3 things you haven’t done yet.\n• Ask your friend: Have you … yet?\n• Mention one thing with an exact time (Past Simple).',
            minWords: 90,
            maxWords: 120,
            phrases: ['I’ve already', 'I’ve just', 'I haven’t … yet', 'Have you … yet?', 'yesterday'],
            checklist: ['already / just — між have і V3', 'yet — у кінці, лише в − і ?', 'Є речення з точним часом у Past Simple', 'Правильні V3 (bought, done, found…)'],
            model: `Hi Ira! We’re moving to our new flat on Saturday, and I’m going crazy!

I’ve already packed most of the books and clothes, and I’ve booked a van. I’ve also told the bank about our new address. I’ve just finished packing the kitchen — fifteen boxes!

But I haven’t cleaned the old flat yet, and we haven’t bought curtains for the new one. My husband hasn’t found the keys to the garage yet, either.

Yesterday I gave our old sofa to my sister. Have you finished your exams yet? Can you help us on Saturday?`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-today',
            type: 'speaking',
            title: 'What have you done today?',
            instructions: 'Відповідай уголос.',
            phrases: ['I’ve already…', 'I’ve just…', 'I haven’t…yet.', 'Not yet.', 'Have you…yet?'],
            tasks: [
              { id: 'sp1', q: 'What have you already done today? What haven’t you done yet?', tips: 'I’ve already … I haven’t … yet.', model: 'I’ve already had breakfast and answered my emails. I haven’t done any sport yet.' },
              { id: 'sp2', q: 'What have you just done before this lesson?', tips: 'I’ve just …', model: 'I’ve just made a cup of tea and I’ve just turned off my phone.' },
              { id: 'sp3', q: 'Think about this year. What have you already achieved? What haven’t you done yet?', tips: 'This year I’ve already … but I haven’t … yet.', model: 'This year I’ve already started a new course, but I haven’t been on holiday yet.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'ready to go': 'готові вирушати', 'thursday': 'четвер', 'evening': 'вечір', 'flying': 'летять', 'barcelona': 'Барселона', 'tomorrow': 'завтра',
      'checking': 'перевіряє', 'list': 'список', 'packed': 'спакував', 'suitcase': 'валіза', 'yet': 'вже (у ?), ще (у −)', 'already': 'вже', 'this morning': 'сьогодні вранці',
      'great': 'чудово', 'checked in': 'зареєструвався', 'online': 'онлайн', 'not yet': 'ще ні', 'just': 'щойно', 'also': 'також', 'downloaded': 'завантажив',
      'boarding passes': 'посадкові талони', 'phone': 'телефон', 'perfect': 'ідеально', 'bought': 'купила', 'travel insurance': 'туристична страховка',
      'changed': 'обміняла', 'money': 'гроші', 'euros': 'євро', 'found': 'знайшла', 'phone charger': 'зарядка для телефону', "can't find": 'не можу знайти',
      'mine': 'мій', 'wait': 'зачекай', 'here it is': 'ось він', 'kitchen': 'кухня', 'asked': 'попросила', 'mum': 'мама', 'water': 'поливати', 'plants': 'рослини',
      'given': 'дала', 'keys': 'ключі', 'ordered': 'замовила', 'taxi': 'таксі', "i'll": 'я (зроблю)', 'forgotten': 'забули', 'anything': 'щось', 'passports': 'паспорти',
      'where': 'де', "don't worry": 'не хвилюйся', 'put': 'поклав', 'bag': 'сумка', 'berlin': 'Берлін', 'budapest': 'Будапешт', 'yesterday': 'учора',
      'lost': 'загубили', 'pack': 'пакувати', 'boarding pass': 'посадковий талон', 'change money': 'обміняти гроші', 'currency': 'валюта', 'charger': 'зарядний пристрій',
      'download': 'завантажити', 'order': 'замовити', 'forget': 'забувати', 'charge': 'зарядити', 'lock': 'замкнути', 'door': 'двері', 'gate': 'вихід на посадку',
      'dead': 'розрядився', 'spain': 'Іспанія', 'euro': 'євро', 'without': 'без', 'too tired': 'занадто втомлений', 'tonight': 'сьогодні ввечері',
      'one more time': 'ще раз', 'outside': 'надворі', 'arrived': 'приїхало', 'eaten': 'їв', 'finished': 'дочитав', 'book': 'книга', 'called': 'дзвонила',
      'minutes ago': 'хвилин тому', 'ever': 'коли-небудь', 'been': 'був', 'last year': 'минулого року', 'tickets': 'квитки', 'never': 'ніколи', 'sea': 'море',
      'gone': 'пішла', 'shop': 'магазин', 'twice': 'двічі', 'party': 'вечірка', 'preparations': 'приготування', 'starts': 'починається', 'hours': 'години',
      'cake': 'торт', 'picked it up': 'забрав його', 'chocolate': 'шоколадний', 'favourite': 'улюблений', 'decorated': 'прикрасила', 'living room': 'вітальня',
      'hidden': 'сховала', 'presents': 'подарунки', 'bedroom': 'спальня', 'invited': 'запросила', 'brother': 'брат', 'forgot': 'забула', 'call': 'подзвоню',
      'music': 'музика', 'made': 'зробила', 'playlist': 'плейлист', 'drinks': 'напої', 'near': 'біля', 'get': 'візьму', 'car': 'машина', 'progress update': 'звіт про прогрес',
      'moving': 'переїжджаємо', 'new flat': 'нова квартира', 'saturday': 'субота', 'going crazy': 'божеволію', 'most': 'більшість', 'books': 'книжки',
      'clothes': 'одяг', 'booked': 'забронювала', 'van': 'фургон', 'told': 'повідомила', 'bank': 'банк', 'address': 'адреса', 'finished packing': 'закінчила пакувати',
      'boxes': 'коробки', 'cleaned': 'прибрала', 'old flat': 'стара квартира', 'curtains': 'штори', 'husband': 'чоловік', 'garage': 'гараж', 'either': 'теж (не)',
      'gave': 'віддала', 'sofa': 'диван', 'sister': 'сестра', 'exams': 'іспити', 'help': 'допомогти', 'today': 'сьогодні', 'breakfast': 'сніданок',
      'answered': 'відповіла на', 'emails': 'листи', 'sport': 'спорт', 'lesson': 'урок', 'cup of tea': 'чашка чаю', 'turned off': 'вимкнула',
      'achieved': 'досягла', 'course': 'курс', 'holiday': 'відпустка', "i've": 'я (have)', "haven't": 'не (have not)', "hasn't": 'не (has not)', "she's": 'вона (has)'
    }
  });
})();
