/*
 * A2 · Module 6 · Lesson 4 — Review A2: The time capsule
 * Final review of level A2: Present Simple/Continuous, used to, Past Continuous, comparatives,
 * future forms, modals, quantifiers, Present Perfect, First Conditional. Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'A letter to my future self',
    text: `Ten years ago, at the end of school, our class wrote letters to our future selves and buried them in a time capsule. Last week we opened it. This is my letter.

“Dear Future Me,
Right now I’m sitting in my bedroom and it’s raining outside. I’m seventeen and I’m very nervous about my exams. I want to study medicine, but my maths isn’t good enough yet.

I wonder what you are like. Have you become a doctor? Have you travelled abroad? I hope you’ve been to Japan — that’s my biggest dream! I think you will probably live in a bigger city than our little town. Maybe you’ll have a dog.

Please remember some things. You used to be scared of everything, but you were always kind. You shouldn’t work too much — you must spend time with Mum and Dad. And if you’re sad, call Nastia. She’s the best friend in the world.

If you read this and you’re happy, I’ll be very proud.
Love, Me (17)”

So, what happened? I didn’t become a doctor — I’m a vet, which is even better. I haven’t been to Japan yet, but I’m flying to Tokyo next spring. I have two dogs. And yesterday I called Nastia. We talked for three hours.`
  };

  ENG.registerLesson({
    id: 'a2-m6-l4',
    level: 'a2',
    title: 'Review A2: The time capsule',
    subtitle: 'Підсумкове повторення рівня A2: усі часи, модальні, порівняння, умовні речення',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A letter from the past',
            instructions: 'Прочитай лист, який авторка написала сама собі 10 років тому.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'When did the class write the letters?', options: ['Last week', 'Ten years ago, at the end of school', 'At university'], answer: 1 },
              { id: 'q2', q: 'What did she want to study?', options: ['Maths', 'Medicine', 'Japanese'], answer: 1 },
              { id: 'q3', q: 'What was her biggest dream?', options: ['To have a dog', 'To go to Japan', 'To live in a big city'], answer: 1 },
              { id: 'q4', q: 'What is her job now?', options: ['Doctor', 'Vet', 'Teacher'], answer: 1 },
              { id: 'q5', q: 'Who is Nastia?', options: ['Her sister', 'Her best friend', 'Her mum'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'When she wrote the letter, it was sunny.', answer: false, explain: '“…it’s raining outside.”' },
              { id: 's2', s: 'She used to be scared of everything.', answer: true },
              { id: 's3', s: 'She has already been to Japan.', answer: false, explain: '“I haven’t been to Japan yet.”' },
              { id: 's4', s: 'She is flying to Tokyo next spring.', answer: true },
              { id: 's5', s: 'She has one dog.', answer: false, explain: 'She has two dogs.' }
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
            title: 'New words + A2 review',
            instructions: 'Слова з листа і найважливіші слова рівня A2.',
            cards: [
              { front: 'time capsule', back: 'капсула часу', example: 'We opened the time capsule.' },
              { front: 'bury', ipa: '/ˈberi/', back: 'закопувати', example: 'They buried the letters.' },
              { front: 'future self', back: 'майбутній я', example: 'Write a letter to your future self.' },
              { front: 'wonder', ipa: '/ˈwʌndə/', back: 'цікавитися, гадати', example: 'I wonder what you are like.' },
              { front: 'dream', back: 'мрія', example: 'Japan is my biggest dream.' },
              { front: 'proud', ipa: '/praʊd/', back: 'гордий', example: 'I’m very proud of you.' },
              { front: 'become (became – become)', back: 'ставати', example: 'Have you become a doctor?' },
              { front: 'commute', back: 'дорога на роботу', example: 'My commute is long.' },
              { front: 'deadline', back: 'кінцевий термін', example: 'The deadline is Friday.' },
              { front: 'superstitious', back: 'забобонний', example: 'Are you superstitious?' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'A2 vocabulary mix',
            instructions: 'Поєднай слова з усього рівня A2.',
            pairs: [
              ['settle down', 'осісти'],
              ['embarrassed', 'збентежений'],
              ['crowded', 'переповнений'],
              ['appointment', 'запис (до лікаря)'],
              ['sore throat', 'біль у горлі'],
              ['boarding pass', 'посадковий талон'],
              ['proud', 'гордий'],
              ['wonder', 'цікавитися, гадати']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'My dreams',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'My biggest {{dream}} is to see the Northern Lights.' },
              { id: 'd2', text: 'I {{wonder}} what life will be like in 2050.' },
              { id: 'd3', text: 'My parents were so {{proud}} when I graduated.' },
              { id: 'd4', text: 'She wants to {{become}} a pilot.' },
              { id: 'd5', text: 'We {{buried}} a time capsule in the school garden.' },
              { id: 'd6', text: 'Write a letter to your future {{self}}.' }
            ],
            distractors: ['nervous']
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
            title: 'A2 grammar — the big picture',
            instructions: 'Вся граматика рівня A2 на одній сторінці. Знайди в листі приклади кожної теми!',
            html: `
<h3>1. Часи</h3>
<div class="table-wrap"><table>
  <tr><th>Час</th><th>Коли</th><th>Приклад з листа</th></tr>
  <tr><td>Present Simple</td><td>факти, звички</td><td>She<b>’s</b> the best friend. I <b>have</b> two dogs.</td></tr>
  <tr><td>Present Continuous</td><td>зараз; домовленість</td><td>I<b>’m sitting</b> in my bedroom. I<b>’m flying</b> to Tokyo next spring.</td></tr>
  <tr><td>Past Simple</td><td>завершене з часом</td><td>Last week we <b>opened</b> it. Yesterday I <b>called</b> Nastia.</td></tr>
  <tr><td>Past Continuous</td><td>процес у минулому</td><td>It <b>was raining</b> when I wrote the letter.</td></tr>
  <tr><td>used to</td><td>колишні звички / стани</td><td>You <b>used to be</b> scared of everything.</td></tr>
  <tr><td>Present Perfect</td><td>досвід; результат; just/already/yet</td><td><b>Have</b> you <b>travelled</b> abroad? I <b>haven’t been</b> to Japan <b>yet</b>.</td></tr>
  <tr><td>Future</td><td>will / going to / Pres. Cont.</td><td>You<b>’ll</b> probably live in a bigger city.</td></tr>
</table></div>

<h3>2. Конструкції</h3>
<div class="table-wrap"><table>
  <tr><th>Тема</th><th>Приклад</th></tr>
  <tr><td>Порівняння</td><td>a <b>bigger</b> city <b>than</b> our town · the <b>best</b> friend · not good <b>enough</b></td></tr>
  <tr><td>Модальні</td><td>You <b>shouldn’t</b> work too much. You <b>must</b> spend time with Mum.</td></tr>
  <tr><td>Кількість</td><td>too <b>much</b> work · a <b>few</b> friends · a <b>little</b> time</td></tr>
  <tr><td>Підрядні</td><td>a vet, <b>which</b> is even better · the friend <b>who</b> helped me</td></tr>
  <tr><td>First Conditional</td><td><b>If</b> you<b>’re</b> sad, <b>call</b> Nastia. <b>If</b> you <b>read</b> this…, I<b>’ll be</b> proud.</td></tr>
</table></div>

<div class="tip">🎓 <b>Вітаю! Ти пройшов(ла) рівень A2.</b><br>
Ти вмієш: розповідати про спосіб життя та минуле; будувати історії; порівнювати; говорити про плани, прогнози й правила; описувати досвід і можливі ситуації в майбутньому. Далі — B1!</div>`
          },
          {
            id: 'gram-tenses',
            type: 'choice',
            title: 'Which form?',
            instructions: 'Обери правильну форму. Шукай підказки в реченні!',
            items: [
              { id: 't1', q: 'Look! It ___ again.', options: ['snows', 'is snowing', 'has snowed yesterday'], answer: 1 },
              { id: 't2', q: 'I ___ in Kharkiv when I was a child.', options: ['used to live', 'have lived', 'am living'], answer: 0 },
              { id: 't3', q: 'She ___ a vet for five years now.', options: ['is', 'has been', 'was being'], answer: 1 },
              { id: 't4', q: 'While I ___ the letter, my mum came in.', options: ['read', 'was reading', 'have read'], answer: 1 },
              { id: 't5', q: 'If I ___ enough money, I’ll go to Japan.', options: ['will save', 'save', 'saved'], answer: 1 },
              { id: 't6', q: 'I’m sure you ___ a great vet!', options: ['will be', 'are being', 'were'], answer: 0 },
              { id: 't7', q: 'Have you visited Tokyo ___?', options: ['already', 'yet', 'just'], answer: 1 }
            ]
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'A2 grammar mix',
            instructions: 'Встав одне слово.',
            items: [
              { id: 'g1', text: 'My new city is much {{bigger}} than my home town. (big)' },
              { id: 'g2', text: 'You {{shouldn’t|should not}} work too much. (порада: не варто)' },
              { id: 'g3', text: 'I have a {{few}} close friends.' },
              { id: 'g4', text: 'She’s the person {{who|that}} always helps me.' },
              { id: 'g5', text: 'I’ve {{never}} been to Asia. (ніколи)' },
              { id: 'g6', text: 'Tomorrow I’m {{meeting}} Nastia for lunch. (meet — домовленість)' },
              { id: 'g7', text: 'You {{don’t have to|do not have to}} reply to this letter — it’s from the past! (не обов’язково)' }
            ]
          },
          {
            id: 'gram-correct',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Фінальна перевірка типових помилок A2.',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['If it will rain, I’ll stay home.', 'If it rains, I’ll stay home.', 'If it rains, I stay home tomorrow.'], answer: 1 },
              { id: 'c2', q: 'Обери правильне:', options: ['I’ve been to Paris last year.', 'I went to Paris last year.', 'I’ve gone to Paris last year.'], answer: 1 },
              { id: 'c3', q: 'Обери правильне:', options: ['You mustn’t pay — it’s free.', 'You don’t have to pay — it’s free.', 'You haven’t to pay — it’s free.'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['She’s more taller than me.', 'She’s taller than me.', 'She’s tallest than me.'], answer: 1 },
              { id: 'c5', q: 'Обери правильне:', options: ['I am knowing the answer.', 'I know the answer.', 'I knowing the answer.'], answer: 1 },
              { id: 'c6', q: 'Обери правильне:', options: ['How much eggs do we need?', 'How many eggs do we need?', 'How many egg do we need?'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Questions for your future self',
            instructions: 'Склади питання до свого майбутнього «я».',
            items: [
              { id: 'o1', prompt: 'Ти вже був у Японії?', answer: 'Have you been to Japan yet?' },
              { id: 'o2', prompt: 'Де ти живеш зараз?', answer: 'Where do you live now?' },
              { id: 'o3', prompt: 'Що ти робитимеш, якщо втратиш роботу?', answer: 'What will you do if you lose your job?' },
              { id: 'o4', prompt: 'Ти досі граєш на гітарі?', answer: 'Do you still play the guitar?' }
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
            instructions: 'Авторка листа телефонує Насті. Послухай.',
            audio: {
              title: 'Phone call: Yana & Nastia',
              lines: [
                { who: 'Yana', text: 'Nastia! You won’t believe it. We’ve just opened the time capsule from school!' },
                { who: 'Nastia', text: 'No way! What did you write?' },
                { who: 'Yana', text: 'I wrote that if I’m sad, I should call you. So I’m calling you!' },
                { who: 'Nastia', text: 'Are you sad?' },
                { who: 'Yana', text: 'No, I’m really happy. I just wanted to say thank you. You were always there for me.' },
                { who: 'Nastia', text: 'Oh, Yana. Do you remember when we used to study maths together? You were much better than me!' },
                { who: 'Yana', text: 'Ha! Not at first. Listen, I’m flying to Tokyo in April. Will you come with me?' },
                { who: 'Nastia', text: 'If my boss gives me a holiday, I’ll definitely come!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What have they just opened?', options: ['A present', 'The time capsule', 'A new café'], answer: 1 },
              { id: 'l2', q: 'Is Yana sad?', options: ['Yes, very', 'No, she’s really happy.'], answer: 1 },
              { id: 'l3', q: 'What did they use to do together?', options: ['Study maths', 'Play football', 'Learn Japanese'], answer: 0 },
              { id: 'l4', q: 'When is Yana flying to Tokyo?', options: ['In March', 'In April', 'In May'], answer: 1 },
              { id: 'l5', q: 'When will Nastia come?', options: ['If her boss gives her a holiday', 'Never', 'Next year'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'We’ve just opened the time capsule.' },
              { id: 'dc2', text: 'We used to study maths together.' },
              { id: 'dc3', text: 'I’m flying to Tokyo in April.' },
              { id: 'dc4', text: 'If my boss gives me a holiday, I’ll come.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-letter',
            type: 'writing',
            title: 'A letter to your future self',
            instructions: 'Напиши лист собі через 10 років. Використай граматику всього рівня A2.',
            prompt: 'Write a letter to yourself in 10 years (130–160 words).\n• Right now: where are you, what are you doing, what is your life like? (Present Simple / Continuous)\n• The past: what did you use to do? A memory (Past Simple / Continuous).\n• Questions to your future self: Have you…? Do you still…?\n• Predictions: I think you will… / You’re going to…\n• Advice: You should… / You mustn’t forget…\n• One conditional: If you…, …',
            minWords: 130,
            maxWords: 170,
            phrases: ['Right now I’m', 'I used to', 'Have you', 'I think you will', 'You should', 'If you', 'I hope'],
            checklist: ['Є Present Simple і Continuous', 'Є used to і Past Simple / Continuous', 'Є питання в Present Perfect', 'Є will / going to', 'Є should / must', 'Є First Conditional'],
            model: `Dear Future Me,

Right now I’m sitting on the balcony with a cup of coffee. It’s a warm evening and my neighbours are having a barbecue. I’m thirty-two, I work as a project manager and I’m learning English — I’ve just finished level A2!

When I was little, I used to be very shy. I remember one day I was singing at a school concert when I forgot the words. Everyone laughed, but I finished the song.

Have you finished B2? Have you visited Canada? Do you still run in the mornings? I think you will live in a house with a garden, and I’m sure you’ll have a cat.

You should call Mum more often. You mustn’t forget your friends. And if you’re tired, take a holiday — work can wait!

I hope you’re happy.
Love, Me`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-final',
            type: 'speaking',
            title: 'Final A2 interview',
            instructions: 'Підсумкова розмова рівня A2. Відповідай 3–5 реченнями, використовуй різні часи.',
            phrases: ['I used to…', 'These days I’m…', 'I’ve never…', 'I’m going to…', 'If…, I’ll…', 'It’s better than…'],
            tasks: [
              { id: 'sp1', q: 'How is your life different from ten years ago?', tips: 'Ten years ago I used to … Now I … These days I’m …', model: 'Ten years ago I used to live with my parents and study. Now I have my own flat and a job. These days I’m learning to drive.' },
              { id: 'sp2', q: 'Tell me about something interesting you have done and something you have never done.', tips: 'I’ve … I did it in … I’ve never …', model: 'I’ve climbed Hoverla. I did it two years ago with friends. I’ve never been skydiving, but I’d like to.' },
              { id: 'sp3', q: 'What are your plans for next year? What will you do if they don’t work out?', tips: 'Next year I’m going to … If …, I’ll …', model: 'Next year I’m going to start B1 and change my job. If I don’t find a new job, I’ll take an online course.' },
              { id: 'sp4', q: 'Give three pieces of advice to someone who is starting to learn English.', tips: 'You should … You don’t have to … You mustn’t …', model: 'You should practise every day. You don’t have to be perfect. You mustn’t be afraid of mistakes!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'letter': 'лист', 'future self': 'майбутній я', 'ten years ago': 'десять років тому', 'end of school': 'закінчення школи', 'class': 'клас',
      'wrote': 'написали', 'letters': 'листи', 'buried': 'закопали', 'time capsule': 'капсула часу', 'last week': 'минулого тижня', 'opened': 'відкрили',
      'dear': 'дорогий', 'right now': 'прямо зараз', 'sitting': 'сиджу', 'bedroom': 'спальня', 'raining': 'йде дощ', 'outside': 'надворі',
      'seventeen': 'сімнадцять', 'nervous': 'хвилююся', 'exams': 'іспити', 'want': 'хочу', 'study': 'вивчати', 'medicine': 'медицина', 'maths': 'математика',
      'good enough': 'достатньо добра', 'yet': 'ще', 'wonder': 'цікаво', 'what you are like': 'яка ти', 'become': 'стати', 'doctor': 'лікар',
      'travelled': 'подорожувала', 'abroad': 'за кордон', 'hope': 'сподіваюся', 'been to': 'побувала в', 'japan': 'Японія', 'biggest': 'найбільша',
      'dream': 'мрія', 'probably': 'мабуть', 'bigger': 'більшому', 'than': 'ніж', 'little': 'маленьке', 'town': 'містечко', 'maybe': 'можливо', 'dog': 'собака',
      'remember': 'пам’ятай', 'things': 'речі', 'used to': 'раніше', 'scared of': 'боялася', 'everything': 'всього', 'always': 'завжди', 'kind': 'добра',
      "shouldn't": 'не варто', 'work too much': 'забагато працювати', 'must': 'мусиш', 'spend time': 'проводити час', 'sad': 'сумна', 'call': 'подзвони',
      'best friend': 'найкраща подруга', 'world': 'світ', 'read': 'прочитаєш', 'happy': 'щаслива', 'proud': 'горда', 'love': 'з любов’ю',
      'what happened': 'що сталося', "didn't become": 'не стала', 'vet': 'ветеринар', 'even better': 'навіть краще', "haven't been": 'не була',
      'flying': 'лечу', 'tokyo': 'Токіо', 'next spring': 'наступної весни', 'two dogs': 'двоє собак', 'yesterday': 'учора', 'called': 'подзвонила',
      'talked': 'говорили', 'hours': 'години', 'university': 'університет', 'japanese': 'японська', 'sunny': 'сонячно', 'sister': 'сестра', 'mum': 'мама',
      'teacher': 'вчитель', 'bury': 'закопувати', 'commute': 'дорога на роботу', 'deadline': 'кінцевий термін', 'superstitious': 'забобонний',
      'settle down': 'осісти', 'embarrassed': 'збентежений', 'crowded': 'переповнений', 'appointment': 'запис', 'sore throat': 'біль у горлі',
      'boarding pass': 'посадковий талон', 'northern lights': 'північне сяйво', 'life': 'життя', 'parents': 'батьки', 'graduated': 'закінчила навчання',
      'pilot': 'пілот', 'school garden': 'шкільний сад', 'self': 'я (особистість)', 'snows': 'йде сніг', 'again': 'знову', 'child': 'дитина', 'years': 'роки',
      'came in': 'увійшла', 'save': 'заощаджу', 'money': 'гроші', 'great': 'чудовий', 'home town': 'рідне місто', 'close friends': 'близькі друзі',
      'person': 'людина', 'helps': 'допомагає', 'asia': 'Азія', 'meeting': 'зустрічаюся', 'lunch': 'обід', 'reply': 'відповідати', 'past': 'минуле',
      'stay home': 'залишитися вдома', 'paris': 'Париж', 'pay': 'платити', 'free': 'безкоштовно', 'taller': 'вища', 'answer': 'відповідь', 'eggs': 'яйця',
      'need': 'потрібно', 'lose': 'втратиш', 'job': 'робота', 'still': 'досі', 'guitar': 'гітара', "won't believe": 'не повіриш', 'no way': 'та ну',
      'thank you': 'дякую', 'there for me': 'поруч зі мною', 'together': 'разом', 'much better': 'набагато краща', 'at first': 'спочатку', 'listen': 'слухай',
      'april': 'квітень', 'come with me': 'поїдеш зі мною', 'boss': 'начальник', 'gives': 'дасть', 'holiday': 'відпустка', 'definitely': 'обов’язково',
      'present': 'подарунок', 'café': 'кафе', 'football': 'футбол', 'march': 'березень', 'may': 'травень', 'never': 'ніколи', 'next year': 'наступного року',
      'balcony': 'балкон', 'cup': 'чашка', 'coffee': 'кава', 'warm': 'теплий', 'evening': 'вечір', 'neighbours': 'сусіди', 'barbecue': 'барбекю',
      'thirty-two': 'тридцять два', 'project manager': 'проєктний менеджер', 'learning': 'вивчаю', 'finished': 'закінчила', 'level': 'рівень',
      'shy': 'сором’язлива', 'singing': 'співала', 'concert': 'концерт', 'forgot': 'забула', 'words': 'слова', 'laughed': 'сміялися', 'song': 'пісня',
      'canada': 'Канада', 'run': 'бігаєш', 'mornings': 'ранки', 'house': 'будинок', 'garden': 'сад', 'cat': 'кіт', 'more often': 'частіше',
      "mustn't forget": 'не можна забувати', 'friends': 'друзі', 'tired': 'втомлена', 'take a holiday': 'візьми відпустку', 'wait': 'почекати',
      'different': 'відмінне', 'own flat': 'власна квартира', 'learning to drive': 'вчуся водити', 'interesting': 'цікаве', 'climbed': 'піднялася на',
      'skydiving': 'стрибки з парашутом', 'plans': 'плани', "don't work out": 'не вийдуть', 'change': 'змінити', 'find': 'знайду', 'online course': 'онлайн-курс',
      'advice': 'порада', 'starting': 'починає', 'practise': 'практикуватися', 'every day': 'щодня', 'perfect': 'ідеальним', 'afraid of': 'боятися',
      'mistakes': 'помилки', "i'm": 'я (є)', "it's": 'це (є)', "you're": 'ти (є)', "she's": 'вона (є)', "i'll": 'я (буду)', "you'll": 'ти (будеш)',
      "we've": 'ми (have)', "i've": 'я (have)'
    }
  });
})();
