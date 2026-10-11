/*
 * A2 · Module 1 · Lesson 4 — Review: The school reunion
 * Reviews: Present Simple vs Continuous, state verbs, relative clauses, used to.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Twenty years later',
    text: `Last Saturday our class had a reunion — twenty years after we left school. I was nervous, but it was a fantastic evening.

The first person I saw was Kostia, the boy who used to sit next to me in maths. He used to be very shy and quiet. Now he’s a confident TV presenter who interviews famous people! These days he’s working on a new travel show, so he’s visiting a different country every month.

Then I met Yulia. At school she used to want to be a singer, and she used to sing at every school concert. She doesn’t sing professionally — she’s a dentist now — but she still loves music. At the moment she’s learning to play the saxophone.

Our old teacher, Mrs Petrenko, came too. She’s retired now and lives in a house by the lake where she grows vegetables. She didn’t use to smile much in class, but that evening she laughed all the time.

The thing that surprised me most? Nobody looked at their phones. We were too busy talking!`
  };

  ENG.registerLesson({
    id: 'a2-m1-l4',
    level: 'a2',
    title: 'Review: The school reunion',
    subtitle: 'Повторення модуля 1: Present Simple / Continuous, who / which / where, used to',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'The reunion',
            instructions: 'Прочитай розповідь про зустріч випускників через 20 років.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'How did the writer feel before the reunion?', options: ['Excited', 'Nervous', 'Bored'], answer: 1 },
              { id: 'q2', q: 'What is Kostia’s job now?', options: ['Maths teacher', 'TV presenter', 'Dentist'], answer: 1 },
              { id: 'q3', q: 'Why is Kostia visiting a different country every month?', options: ['He’s on holiday.', 'He’s working on a travel show.', 'He lives abroad.'], answer: 1 },
              { id: 'q4', q: 'What is Yulia learning at the moment?', options: ['Singing', 'The saxophone', 'The piano'], answer: 1 },
              { id: 'q5', q: 'What surprised the writer most?', options: ['Mrs Petrenko came.', 'Nobody looked at their phones.', 'Kostia was famous.'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'Then or now?',
            instructions: 'Правда чи неправда? Розрізняй, що було колись (used to), а що — зараз.',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Kostia is shy now.', answer: false, explain: 'He used to be shy. Now he’s confident.' },
              { id: 's2', s: 'Yulia used to sing at school concerts.', answer: true },
              { id: 's3', s: 'Yulia is a professional singer.', answer: false, explain: 'She’s a dentist now.' },
              { id: 's4', s: 'Mrs Petrenko grows vegetables.', answer: true },
              { id: 's5', s: 'Mrs Petrenko used to smile a lot in class.', answer: false, explain: '“She didn’t use to smile much in class.”' }
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
            title: 'New words + module review',
            instructions: 'Нові слова з тексту і повторення модуля 1.',
            cards: [
              { front: 'reunion', ipa: '/riːˈjuːniən/', back: 'зустріч (випускників, рідних)', example: 'We had a school reunion.' },
              { front: 'nervous', ipa: '/ˈnɜːvəs/', back: 'схвильований, знервований', example: 'I was nervous before the exam.' },
              { front: 'confident', ipa: '/ˈkɒnfɪdənt/', back: 'впевнений', example: 'Now he’s very confident.' },
              { front: 'presenter', ipa: '/prɪˈzentə/', back: 'ведучий', example: 'She’s a TV presenter.' },
              { front: 'professionally', back: 'професійно', example: 'She doesn’t sing professionally.' },
              { front: 'grow vegetables', back: 'вирощувати овочі', example: 'My grandma grows vegetables.' },
              { front: 'surprise', ipa: '/səˈpraɪz/', back: 'дивувати', example: 'The news surprised me.' },
              { front: 'deadline', back: 'кінцевий термін', example: 'I have a deadline tomorrow.' },
              { front: 'generous', back: 'щедрий', example: 'He’s generous with his time.' },
              { front: 'childhood', back: 'дитинство', example: 'I had a happy childhood.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 1 words',
            instructions: 'Поєднай слова модуля з перекладом.',
            pairs: [
              ['commute', 'дорога на роботу'],
              ['settle down', 'осісти'],
              ['reliable', 'надійний'],
              ['give up', 'здаватися'],
              ['naughty', 'неслухняний'],
              ['grow up', 'виростати'],
              ['reunion', 'зустріч випускників'],
              ['confident', 'впевнений']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the sentences',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'I was very {{nervous}} before my first job interview.' },
              { id: 'd2', text: 'After the course she became more {{confident}}.' },
              { id: 'd3', text: 'My grandparents {{grow}} tomatoes in their garden.' },
              { id: 'd4', text: 'The class {{reunion}} is next Saturday.' },
              { id: 'd5', text: 'Her success didn’t {{surprise}} me — she always worked hard.' },
              { id: 'd6', text: 'He’s a famous TV {{presenter}}.' }
            ],
            distractors: ['permanent']
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
            title: 'Module 1 grammar — summary',
            instructions: 'Три теми модуля в одному місці.',
            html: `
<h3>1. Present Simple vs Present Continuous</h3>
<div class="table-wrap"><table>
  <tr><th>Simple: постійне, звичка</th><th>Continuous: зараз, тимчасове, зміни</th></tr>
  <tr><td>She <b>lives</b> by a lake.</td><td>These days he<b>’s working</b> on a new show.</td></tr>
  <tr><td>She <b>loves</b> music. <span class="muted">(дієслово стану)</span></td><td>At the moment she<b>’s learning</b> the saxophone.</td></tr>
</table></div>
<p>Дієслова стану без -ing: like, love, want, need, know, understand, believe, remember, belong, seem.</p>

<h3>2. Relative clauses</h3>
<div class="ex-line">the boy <b>who</b> used to sit next to me · a house <b>where</b> she grows vegetables · the thing <b>that / which</b> surprised me</div>
<p>who — люди, which — речі, that — і те, і те, where — місця. Не повторюй займенник: <span class="no">the boy who he…</span></p>

<h3>3. used to</h3>
<div class="table-wrap"><table>
  <tr><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>He <b>used to be</b> shy.</td><td>She <b>didn’t use to smile</b>.</td><td><b>Did</b> you <b>use to sing</b>?</td></tr>
</table></div>
<p>used to — звички та стани в минулому, яких уже немає. Одноразова подія — Past Simple: Last Saturday we <b>had</b> a reunion.</p>

<h3>4. Then vs now — корисна схема</h3>
<div class="ex-line">He <b>used to be</b> shy, but now he<b>’s</b> confident. · She <b>used to want</b> to be a singer, but now she<b>’s</b> a dentist.</div>

<div class="tip">✅ <b>Чек-лист модуля 1 (A2)</b> — я вмію:<br>
• розповісти про свій спосіб життя і те, що змінюється;<br>
• описати людину, якою захоплююся, і пояснити слова через who / which / where;<br>
• розповісти про дитинство і порівняти «тоді» і «тепер».</div>`
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'Module 1 mix',
            instructions: 'Встав дієслово або слово, якого бракує.',
            items: [
              { id: 'g1', text: 'Kostia {{used to}} be very shy at school.' },
              { id: 'g2', text: 'These days he {{is visiting|’s visiting}} a new country every month. (visit)' },
              { id: 'g3', text: 'Yulia {{loves}} music. (love)' },
              { id: 'g4', text: 'Mrs Petrenko lives in a house {{where}} she grows vegetables.' },
              { id: 'g5', text: 'Kostia is a presenter {{who|that}} interviews famous people.' },
              { id: 'g6', text: 'Did you {{use to}} sing at school concerts?' },
              { id: 'g7', text: 'She {{didn’t use to|did not use to}} smile much. (−)' }
            ]
          },
          {
            id: 'gram-correct',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Яке речення правильне?',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['I am knowing her since school.', 'I know her from school.', 'I knowing her from school.'], answer: 1 },
              { id: 'c2', q: 'Обери правильне:', options: ['He’s the man who he teaches us.', 'He’s the man which teaches us.', 'He’s the man who teaches us.'], answer: 2 },
              { id: 'c3', q: 'Обери правильне:', options: ['We used to went there.', 'We used to go there.', 'We use to go there (in the past).'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['Did you used to have a dog?', 'Did you use to have a dog?', 'Do you used to have a dog?'], answer: 1 },
              { id: 'c5', q: 'Обери правильне:', options: ['This is the school where I studied.', 'This is the school which I studied.', 'This is the school who I studied.'], answer: 0 },
              { id: 'c6', q: 'Обери правильне:', options: ['I used to visit Paris in 2018.', 'I visited Paris in 2018.', 'I was visiting Paris in 2018 once.'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Then and now',
            instructions: 'Склади речення «тоді і тепер».',
            items: [
              { id: 'o1', prompt: 'Він раніше був сором’язливий, а тепер впевнений.', answer: "He used to be shy, but now he's confident." },
              { id: 'o2', prompt: 'Зараз вона вчиться грати на саксофоні.', answer: "At the moment she's learning to play the saxophone." },
              { id: 'o3', prompt: 'Це вчителька, яка навчала нас англійської.', answer: 'This is the teacher who taught us English.' },
              { id: 'o4', prompt: 'Ти раніше жив у Львові?', answer: 'Did you use to live in Lviv?' }
            ]
          },
          {
            id: 'gram-a1',
            type: 'choice',
            title: '↺ A1 review',
            instructions: 'Повторення важливих тем A1.',
            items: [
              { id: 'm1', q: 'There ___ thirty people at the reunion.', options: ['was', 'were', 'is'], answer: 1 },
              { id: 'm2', q: 'How ___ people came?', options: ['much', 'many'], answer: 1 },
              { id: 'm3', q: 'Yulia ___ play the saxophone a little.', options: ['can', 'cans', 'can to'], answer: 0 },
              { id: 'm4', q: 'We ___ home at midnight.', options: ['go', 'went', 'goed'], answer: 1 },
              { id: 'm5', q: 'Mrs Petrenko ___ got a big garden.', options: ['have', 'has', 'is'], answer: 1 }
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
            title: 'Old friends',
            instructions: 'Двоє однокласників зустрілися на вечорі випускників. Послухай.',
            audio: {
              title: 'Dialogue: Taras & Ira',
              lines: [
                { who: 'Taras', text: 'Ira? Is that really you? You used to have long red hair!' },
                { who: 'Ira', text: 'Taras! Yes, it’s me. I cut it years ago. What are you doing these days?' },
                { who: 'Taras', text: 'I’m a chef. I have a small restaurant in Poltava. And at the moment I’m writing a cookbook.' },
                { who: 'Ira', text: 'A chef? But you used to burn everything in the cooking class!' },
                { who: 'Taras', text: 'Ha ha, I know! People change. What about you?' },
                { who: 'Ira', text: 'I work for a company which builds bridges. I’m an engineer. I live in Lviv, but this year I’m working in Warsaw.' },
                { who: 'Taras', text: 'Do you still play basketball?' },
                { who: 'Ira', text: 'No, not any more. I don’t have time. But I go running every morning.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What did Ira use to have?', options: ['Short dark hair', 'Long red hair', 'Glasses'], answer: 1 },
              { id: 'l2', q: 'What is Taras writing at the moment?', options: ['A novel', 'A cookbook', 'A blog'], answer: 1 },
              { id: 'l3', q: 'What did Taras use to do in the cooking class?', options: ['He burned everything.', 'He was the best.', 'He never came.'], answer: 0 },
              { id: 'l4', q: 'Where is Ira working this year?', options: ['In Lviv', 'In Poltava', 'In Warsaw'], answer: 2 },
              { id: 'l5', q: 'What does Ira do every morning?', options: ['Plays basketball', 'Goes running', 'Cooks'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'You used to have long red hair.' },
              { id: 'dc2', text: 'What are you doing these days?' },
              { id: 'dc3', text: 'I work for a company which builds bridges.' },
              { id: 'dc4', text: 'This year I’m working in Warsaw.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-reunion',
            type: 'writing',
            title: 'A message for the reunion',
            instructions: 'Організатори зустрічі випускників просять кожного написати коротке повідомлення про себе: «тоді» і «тепер».',
            prompt: 'Write your message (100–130 words).\n• What were you like at school? What did you use to do? (used to)\n• What do you do now? Where do you live? (Present Simple)\n• What are you doing these days / this year? (Present Continuous)\n• Mention a person who was important to you (relative clause).',
            minWords: 100,
            maxWords: 140,
            phrases: ['At school I used to', 'I didn’t use to', 'Now I', 'These days I’m', 'who', 'where'],
            checklist: ['Є used to і didn’t use to', 'Є Present Simple для теперішнього життя', 'Є Present Continuous (these days / this year)', 'Є 2 підрядні з who / which / where'],
            model: `Hi everyone! At school I used to be the girl who always forgot her homework. I used to sit at the back and draw in my notebook. I didn’t use to like maths, but I loved art.

Now I’m a designer. I live in Kyiv with my husband and our two sons. I work for a company which makes children’s books.

These days I’m working on a big project — a book about Ukrainian castles. I’m also learning to swim, finally!

I still remember Mrs Petrenko, the teacher who told me, “Your drawings are great — don’t stop.” I didn’t stop! See you all on Saturday!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-reunion',
            type: 'speaking',
            title: 'Catching up',
            instructions: 'Уяви, що ти на зустрічі випускників. Відповідай уголос.',
            phrases: ['I used to…, but now…', 'These days I’m…', 'I work for a company which…', 'Do you still…?'],
            tasks: [
              { id: 'sp1', q: 'What were you like at school? What are you like now?', tips: 'I used to be … but now I’m …', model: 'I used to be very quiet, but now I’m quite confident and talkative.' },
              { id: 'sp2', q: 'What do you do now, and what are you doing these days?', tips: 'I work as … These days I’m …', model: 'I work as an accountant. These days I’m preparing for a big exam.' },
              { id: 'sp3', q: 'Tell me about a teacher who was important to you.', tips: 'The teacher who … was …', model: 'The teacher who changed my life was my English teacher. She used to give us songs instead of tests.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'twenty years later': 'двадцять років потому', 'later': 'пізніше', 'class': 'клас', 'reunion': 'зустріч випускників', 'after': 'після',
      'left school': 'закінчили школу', 'nervous': 'схвильований', 'fantastic': 'фантастичний', 'evening': 'вечір', 'saw': 'побачив', 'boy': 'хлопець',
      'used to': 'раніше', 'sit': 'сидіти', 'next to': 'поруч з', 'maths': 'математика', 'shy': 'сором’язливий', 'quiet': 'тихий', 'confident': 'впевнений',
      'tv presenter': 'телеведучий', 'presenter': 'ведучий', 'interviews': 'бере інтерв’ю', 'famous': 'відомі', 'these days': 'останнім часом',
      'working on': 'працює над', 'travel show': 'тревел-шоу', 'visiting': 'відвідує', 'country': 'країна', 'every month': 'щомісяця', 'met': 'зустрів',
      'want': 'хотіти', 'singer': 'співачка', 'sing': 'співати', 'concert': 'концерт', 'professionally': 'професійно', 'dentist': 'стоматолог',
      'still': 'досі', 'loves': 'любить', 'music': 'музика', 'at the moment': 'зараз', 'learning': 'вчиться', 'saxophone': 'саксофон', 'old': 'старий, колишній',
      'teacher': 'вчителька', 'came': 'прийшла', 'retired': 'на пенсії', 'lives': 'живе', 'lake': 'озеро', 'grows': 'вирощує', 'vegetables': 'овочі',
      'smile': 'усміхатися', 'laughed': 'сміялася', 'all the time': 'постійно', 'thing': 'річ', 'surprised': 'здивувало', 'most': 'найбільше',
      'nobody': 'ніхто', 'looked at': 'дивився на', 'phones': 'телефони', 'too busy': 'занадто зайняті', 'talking': 'розмовою', 'excited': 'схвильований (радісно)',
      'bored': 'нудно', 'holiday': 'відпустка', 'abroad': 'за кордоном', 'piano': 'піаніно', 'surprise': 'дивувати', 'grow': 'вирощувати',
      'deadline': 'дедлайн', 'generous': 'щедрий', 'childhood': 'дитинство', 'commute': 'дорога на роботу', 'settle down': 'осісти', 'reliable': 'надійний',
      'give up': 'здаватися', 'naughty': 'неслухняний', 'grow up': 'виростати', 'interview': 'співбесіда', 'course': 'курс', 'became': 'стала',
      'tomatoes': 'помідори', 'garden': 'сад', 'success': 'успіх', 'worked hard': 'багато працювала', 'permanent': 'постійний', 'knowing': 'знаючи',
      'teaches': 'навчає', 'studied': 'навчався', 'paris': 'Париж', 'taught': 'навчала', 'people': 'люди', 'midnight': 'північ', 'really': 'справді',
      'long': 'довге', 'red': 'руде', 'hair': 'волосся', 'cut': 'підстригла', 'years ago': 'роки тому', 'chef': 'шеф-кухар', 'restaurant': 'ресторан',
      'writing': 'пишу', 'cookbook': 'кулінарна книга', 'burn': 'спалювати', 'everything': 'все', 'cooking class': 'урок кулінарії', 'change': 'змінюються',
      'what about you': 'а ти?', 'company': 'компанія', 'builds': 'будує', 'bridges': 'мости', 'engineer': 'інженер', 'basketball': 'баскетбол',
      'not any more': 'вже ні', 'time': 'час', 'running': 'біг', 'morning': 'ранок', 'novel': 'роман', 'blog': 'блог', 'best': 'найкращий',
      'message': 'повідомлення', 'forgot': 'забувала', 'homework': 'домашнє завдання', 'back': 'задня парта', 'draw': 'малювати', 'notebook': 'зошит',
      'art': 'малювання', 'designer': 'дизайнер', 'husband': 'чоловік', 'sons': 'сини', 'children’s books': 'дитячі книжки', 'project': 'проєкт',
      'castles': 'замки', 'swim': 'плавати', 'finally': 'нарешті', 'remember': 'пам’ятаю', 'told': 'сказала', 'drawings': 'малюнки', 'great': 'чудові',
      'stop': 'зупинятися', 'talkative': 'балакучий', 'accountant': 'бухгалтер', 'preparing': 'готуюся', 'exam': 'іспит', 'changed': 'змінила',
      'life': 'життя', 'songs': 'пісні', 'instead of': 'замість', 'tests': 'тести', "he's": 'він (є)', "she's": 'вона (є)', "i'm": 'я (є)', "it's": 'це (є)'
    }
  });
})();
