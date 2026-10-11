/*
 * A1 · Module 6 · Lesson 4 — Review A1: My English story
 * Final review of level A1: to be, have got, Present Simple & Continuous, can, there is/are,
 * some/any, countable/uncountable, was/were, Past Simple. Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'My English story',
    text: `My name is Natalia and I’m thirty-four. I live in Kharkiv with my husband and our son, Denys. I’m an accountant and I work in a big office.

A year ago I couldn’t speak English at all. Well, I knew “hello” and “thank you”. Then my company started working with a British partner, and I decided to learn.

At first it was difficult. I didn’t understand the grammar and I was shy. But I had a great teacher. She was patient and funny. Every evening I studied for an hour, and at the weekend I watched cartoons in English with Denys. He loves them, and now he knows more words than me!

Now I can write emails to our partners and I can talk on the phone. I usually make some mistakes, but that’s OK. Right now I’m sitting in a café in London — I’m here on my first business trip! There are a lot of people around me and they are all speaking English. And I understand them!`
  };

  ENG.registerLesson({
    id: 'a1-m6-l4',
    level: 'a1',
    title: 'Review A1: My English story',
    subtitle: 'Підсумкове повторення рівня A1: усі часи й конструкції',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Natalia’s story',
            instructions: 'Прочитай історію Наталії — і, можливо, впізнаєш у ній себе 🙂',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What is Natalia’s job?', options: ['Teacher', 'Accountant', 'Doctor'], answer: 1 },
              { id: 'q2', q: 'Why did she decide to learn English?', options: ['For a holiday', 'Her company started working with a British partner.', 'Her son asked her.'], answer: 1 },
              { id: 'q3', q: 'What was her teacher like?', options: ['Strict and boring', 'Patient and funny', 'Shy and quiet'], answer: 1 },
              { id: 'q4', q: 'What did she do at the weekend?', options: ['She watched cartoons with her son.', 'She went to London.', 'She wrote emails.'], answer: 0 },
              { id: 'q5', q: 'Where is Natalia right now?', options: ['In her office', 'In a café in London', 'At home in Kharkiv'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Natalia lives in Kyiv.', answer: false, explain: 'She lives in Kharkiv.' },
              { id: 's2', s: 'A year ago she spoke English well.', answer: false, explain: '“A year ago I couldn’t speak English at all.”' },
              { id: 's3', s: 'She studied every evening for an hour.', answer: true },
              { id: 's4', s: 'Denys knows more English words than his mum.', answer: true },
              { id: 's5', s: 'Natalia never makes mistakes.', answer: false, explain: '“I usually make some mistakes, but that’s OK.”' }
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
            title: 'Learning words + A1 review',
            instructions: 'Слова про навчання з тексту і найважливіші слова рівня A1.',
            cards: [
              { front: 'learn', ipa: '/lɜːn/', back: 'вивчати, вчитися', example: 'I decided to learn English.' },
              { front: 'make a mistake', ipa: '/mɪˈsteɪk/', back: 'зробити помилку', example: 'Everybody makes mistakes.' },
              { front: 'patient', ipa: '/ˈpeɪʃnt/', back: 'терплячий', example: 'My teacher was very patient.' },
              { front: 'accountant', ipa: '/əˈkaʊntənt/', back: 'бухгалтер', example: 'Natalia is an accountant.' },
              { front: 'company', ipa: '/ˈkʌmpəni/', back: 'компанія', example: 'My company is big.' },
              { front: 'partner', ipa: '/ˈpɑːtnə/', back: 'партнер', example: 'We have a British partner.' },
              { front: 'business trip', back: 'відрядження', example: 'It’s my first business trip.' },
              { front: 'cartoons', ipa: '/kɑːˈtuːnz/', back: 'мультфільми', example: 'We watch cartoons in English.' },
              { front: 'at first', back: 'спочатку', example: 'At first it was difficult.' },
              { front: 'than', ipa: '/ðæn/', back: 'ніж', example: 'He knows more words than me.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'A1 vocabulary mix',
            instructions: 'Поєднай слова з усього рівня A1.',
            pairs: [
              ['nationality', 'національність'],
              ['cousin', 'двоюрідний брат'],
              ['have breakfast', 'снідати'],
              ['wardrobe', 'шафа'],
              ['pharmacy', 'аптека'],
              ['hiking', 'піші походи'],
              ['yesterday', 'учора'],
              ['abroad', 'за кордоном']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'My learning story',
            instructions: 'Встав слова. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'At {{first}} English was difficult for me.' },
              { id: 'd2', text: 'It’s OK to make {{mistakes}} — that’s how we learn.' },
              { id: 'd3', text: 'My teacher was very {{patient}} with me.' },
              { id: 'd4', text: 'My son watches {{cartoons}} in English.' },
              { id: 'd5', text: 'Next month I’m going on a business {{trip}}.' },
              { id: 'd6', text: 'He speaks English better {{than}} me.' }
            ],
            distractors: ['shy']
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
            title: 'A1 grammar — the big picture',
            instructions: 'Вся граматика рівня A1 на одній сторінці. Якщо щось забулося — повернись до відповідного модуля.',
            html: `
<h3>1. Часи A1</h3>
<div class="table-wrap"><table>
  <tr><th>Час</th><th>Коли</th><th>+</th><th>−</th><th>?</th></tr>
  <tr><td><b>Present Simple</b></td><td>звички, факти</td><td>I work. She works.</td><td>I don’t work. She doesn’t work.</td><td>Do you work? Does she work?</td></tr>
  <tr><td><b>Present Continuous</b></td><td>зараз</td><td>I’m working.</td><td>She isn’t working.</td><td>Are you working?</td></tr>
  <tr><td><b>Past Simple</b></td><td>завершене в минулому</td><td>I worked. I went.</td><td>I didn’t work. I didn’t go.</td><td>Did you work? Did you go?</td></tr>
</table></div>

<h3>2. to be: теперішнє і минуле</h3>
<div class="ex-line">I <b>am</b> / he <b>is</b> / we <b>are</b> → I <b>was</b> / he <b>was</b> / we <b>were</b></div>
<p>Із to be <b>не потрібні</b> do / does / did: <b>Is</b> she…? <b>Were</b> you…? I <b>wasn’t</b>…</p>

<h3>3. Інші конструкції</h3>
<div class="table-wrap"><table>
  <tr><th>Конструкція</th><th>Приклад</th></tr>
  <tr><td>have got</td><td>She <b>has got</b> blue eyes. <b>Have</b> you <b>got</b> a car?</td></tr>
  <tr><td>can / can’t</td><td>I <b>can</b> write emails. He <b>can’t</b> swim.</td></tr>
  <tr><td>there is / there are</td><td><b>There are</b> a lot of people. <b>Is there</b> a café?</td></tr>
  <tr><td>some / any</td><td>I make <b>some</b> mistakes. There aren’t <b>any</b> problems.</td></tr>
  <tr><td>much / many</td><td>How <b>many</b> words? How <b>much</b> time?</td></tr>
  <tr><td>like + -ing</td><td>He loves watch<b>ing</b> cartoons.</td></tr>
  <tr><td>присвійні</td><td><b>my</b> husband, <b>our</b> son, <b>Natalia’s</b> teacher</td></tr>
  <tr><td>об’єктні займенники</td><td>He loves <b>them</b>. I understand <b>them</b>.</td></tr>
</table></div>

<h3>4. Порядок слів у питанні — один для всіх!</h3>
<div class="ex-line">(Питальне слово) + <b>допоміжне</b> (am/is/are, do/does, did, can) + <b>хто</b> + дієслово + …?<br>
Where <b>do</b> you live? · What <b>are</b> you doing? · When <b>did</b> she start? · <b>Can</b> you help me?</div>

<div class="tip">🎓 <b>Вітаю! Ти пройшов(ла) рівень A1.</b><br>
Ти вмієш: знайомитися й розповідати про себе, сім’ю, дім і місто; описувати свій день, звички та хобі; робити покупки й питати дорогу; говорити про те, що відбувається зараз і що було в минулому. Далі — A2!</div>`
          },
          {
            id: 'gram-tenses',
            type: 'choice',
            title: 'Which tense?',
            instructions: 'Обери правильну форму. Шукай слова-підказки!',
            items: [
              { id: 't1', q: 'Natalia usually ___ to work by bus.', options: ['goes', 'is going', 'went'], answer: 0 },
              { id: 't2', q: 'Right now she ___ in a café.', options: ['sits', 'is sitting', 'sat'], answer: 1 },
              { id: 't3', q: 'A year ago she ___ English.', options: ['doesn’t speak', 'isn’t speaking', 'didn’t speak'], answer: 2 },
              { id: 't4', q: 'Denys ___ cartoons every weekend.', options: ['watches', 'is watching', 'watched'], answer: 0 },
              { id: 't5', q: 'Last week she ___ to London.', options: ['flies', 'is flying', 'flew'], answer: 2 },
              { id: 't6', q: 'Look! It ___.', options: ['rains', 'is raining', 'rained'], answer: 1 },
              { id: 't7', q: 'Her teacher ___ very patient.', options: ['was', 'were', 'did'], answer: 0 }
            ]
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'A1 grammar mix',
            instructions: 'Встав одне слово.',
            items: [
              { id: 'g1', text: '{{Do}} you speak English? — Yes, I do.' },
              { id: 'g2', text: 'Where {{did}} you go last summer?' },
              { id: 'g3', text: 'There {{are}} a lot of people in the café.' },
              { id: 'g4', text: 'She {{can}} write emails in English now.' },
              { id: 'g5', text: 'How {{many}} words do you know?' },
              { id: 'g6', text: 'My son {{has}} got a lot of English books.' },
              { id: 'g7', text: 'He loves {{watching}} cartoons. (watch)' },
              { id: 'g8', text: 'I {{was}} very shy at first.' }
            ]
          },
          {
            id: 'gram-correct',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Фінальна перевірка типових помилок A1.',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['I have 34 years.', 'I am 34.', 'I 34 years.'], answer: 1 },
              { id: 'c2', q: 'Обери правильне:', options: ['She don’t like coffee.', 'She doesn’t likes coffee.', 'She doesn’t like coffee.'], answer: 2 },
              { id: 'c3', q: 'Обери правильне:', options: ['Did you went to London?', 'Did you go to London?', 'Were you go to London?'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['Can you to help me?', 'Do you can help me?', 'Can you help me?'], answer: 2 },
              { id: 'c5', q: 'Обери правильне:', options: ['I am working here every day.', 'I work here every day.', 'I working here every day.'], answer: 1 },
              { id: 'c6', q: 'Обери правильне:', options: ['In the office is a big table.', 'There is a big table in the office.', 'It is a big table in the office.'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Questions for Natalia',
            instructions: 'Склади питання до Наталії. Використай різні часи!',
            items: [
              { id: 'o1', prompt: 'Де ти працюєш?', answer: 'Where do you work?' },
              { id: 'o2', prompt: 'Що ти зараз робиш?', answer: 'What are you doing now?' },
              { id: 'o3', prompt: 'Коли ти почала вчити англійську?', answer: 'When did you start learning English?' },
              { id: 'o4', prompt: 'Ти вмієш писати електронні листи англійською?', answer: 'Can you write emails in English?' }
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
            title: 'Natalia meets her partner',
            instructions: 'Наталія вперше зустрічає британського партнера в Лондоні. Послухай.',
            audio: {
              title: 'Dialogue: James & Natalia',
              lines: [
                { who: 'James', text: 'Natalia! Nice to meet you at last! How was your flight?' },
                { who: 'Natalia', text: 'Nice to meet you too, James. It was fine, thanks. It was only three hours.' },
                { who: 'James', text: 'Your English is very good! Where did you learn it?' },
                { who: 'Natalia', text: 'Thank you! I studied with a teacher online. I started a year ago.' },
                { who: 'James', text: 'Only a year? Wow! Do you like London?' },
                { who: 'Natalia', text: 'Yes, I love it! Yesterday I visited the British Museum. But the weather isn’t very good.' },
                { who: 'James', text: 'Ha ha, that’s London! Are you free this evening? There’s a nice restaurant near our office.' },
                { who: 'Natalia', text: 'Yes, I am. That sounds great!' }
              ]
            },
            items: [
              { id: 'l1', q: 'How long was Natalia’s flight?', options: ['Two hours', 'Three hours', 'Five hours'], answer: 1 },
              { id: 'l2', q: 'Where did she learn English?', options: ['At school', 'Online with a teacher', 'In London'], answer: 1 },
              { id: 'l3', q: 'When did she start?', options: ['A month ago', 'A year ago', 'Five years ago'], answer: 1 },
              { id: 'l4', q: 'What did she visit yesterday?', options: ['The British Museum', 'Big Ben', 'A restaurant'], answer: 0 },
              { id: 'l5', q: 'What is James’s invitation?', options: ['To a museum', 'To a restaurant', 'To his home'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Where did you learn English?' },
              { id: 'dc2', text: 'I started a year ago.' },
              { id: 'dc3', text: 'Do you like London?' },
              { id: 'dc4', text: 'Are you free this evening?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-story',
            type: 'writing',
            title: 'My English story',
            instructions: 'Напиши власну історію вивчення англійської — минуле, теперішнє і плани. Використай граматику всього рівня A1.',
            prompt: 'Write your English story (100–120 words).\n• Who are you? (name, city, job, family)\n• When and why did you start learning English? What was difficult?\n• What do you usually do to learn? (Present Simple + adverbs)\n• What can you do in English now? What can’t you do yet?\n• What are you doing right now?',
            minWords: 100,
            maxWords: 130,
            phrases: ['I started', 'ago', 'At first', 'I usually', 'Now I can', 'I can’t … yet', 'Right now I’m'],
            checklist: ['Є Past Simple (started, was, didn’t…)', 'Є Present Simple з usually / often', 'Є can і can’t', 'Є Present Continuous (Right now I’m…)', 'Є питання або заперечення'],
            model: `My name is Oksana and I’m twenty-eight. I live in Vinnytsia and I’m a pharmacist. I’ve got a husband and a little daughter.

I started learning English two years ago because I wanted to travel. At first it was very difficult. I didn’t understand films and I was shy.

Now I usually study three times a week. I often listen to podcasts in the car and I sometimes read short stories. I love learning new words!

Now I can talk to tourists in my pharmacy and I can read simple books. I can’t understand fast songs yet. Right now I’m sitting in my kitchen and I’m writing this story. I’m very proud!`
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
            title: 'Final A1 interview',
            instructions: 'Підсумкова розмова рівня A1. Відповідай 3–4 реченнями на кожне питання.',
            phrases: ['I’m…', 'I usually…', 'Right now I’m…', 'Last weekend I…', 'I can…', 'There is / There are…'],
            tasks: [
              { id: 'sp1', q: 'Tell me about yourself: your name, city, job, family and home.', tips: 'I’m … I live in … There are … rooms …', model: 'I’m Oksana. I live in a flat in Vinnytsia. There are three rooms. I’m a pharmacist and I’ve got a daughter.' },
              { id: 'sp2', q: 'Describe your typical day and your hobbies.', tips: 'I usually get up at … I love …ing …', model: 'I usually get up at seven. I go to work by tram. In my free time I love reading and cycling.' },
              { id: 'sp3', q: 'What did you do last weekend?', tips: 'On Saturday I … On Sunday we …', model: 'On Saturday I cleaned the flat and went to the market. On Sunday we visited my parents.' },
              { id: 'sp4', q: 'What can you do in English now? What is your next goal?', tips: 'Now I can … I can’t … yet. I want to …', model: 'Now I can talk about my life. I can’t watch films without subtitles yet. I want to start A2!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'story': 'історія', 'thirty-four': 'тридцять чотири', 'live': 'жити', 'husband': 'чоловік', 'son': 'син', 'accountant': 'бухгалтер', 'work': 'працювати',
      'big': 'великий', 'office': 'офіс', 'a year ago': 'рік тому', 'ago': 'тому', "couldn't": 'не могла', 'speak': 'говорити', 'at all': 'зовсім',
      'well': 'ну', 'knew': 'знала', 'then': 'потім', 'company': 'компанія', 'started': 'почала', 'working': 'працювати', 'british': 'британський',
      'partner': 'партнер', 'decided': 'вирішила', 'learn': 'вчити', 'at first': 'спочатку', 'difficult': 'важко', "didn't": 'не', 'understand': 'розуміти',
      'grammar': 'граматика', 'shy': 'сором’язлива', 'had': 'мала', 'great': 'чудовий', 'teacher': 'вчитель', 'patient': 'терплячий', 'funny': 'кумедний',
      'every evening': 'щовечора', 'studied': 'навчалася', 'hour': 'година', 'weekend': 'вихідні', 'watched': 'дивилася', 'cartoons': 'мультфільми',
      'loves': 'любить', 'them': 'їх', 'now': 'зараз', 'knows': 'знає', 'more': 'більше', 'words': 'слова', 'than': 'ніж', 'me': 'мене, я', 'write': 'писати',
      'emails': 'електронні листи', 'partners': 'партнери', 'talk': 'говорити', 'phone': 'телефон', 'usually': 'зазвичай', 'make': 'робити', 'mistakes': 'помилки',
      'mistake': 'помилка', "that's ok": 'це нормально', 'right now': 'просто зараз', 'sitting': 'сиджу', 'café': 'кафе', 'london': 'Лондон', 'here': 'тут',
      'first': 'перший', 'business trip': 'відрядження', 'a lot of': 'багато', 'people': 'люди', 'around': 'навколо', 'speaking': 'говорять', 'job': 'робота',
      'holiday': 'відпустка', 'asked': 'попросив', 'strict': 'суворий', 'boring': 'нудний', 'quiet': 'тихий', 'home': 'дім', 'kyiv': 'Київ', 'never': 'ніколи',
      'nationality': 'національність', 'cousin': 'двоюрідний брат', 'breakfast': 'сніданок', 'wardrobe': 'шафа', 'pharmacy': 'аптека', 'hiking': 'піші походи',
      'yesterday': 'учора', 'abroad': 'за кордоном', 'how we learn': 'як ми вчимося', 'next month': 'наступного місяця', 'trip': 'поїздка', 'better': 'краще',
      'goes': 'їде', 'bus': 'автобус', 'sits': 'сидить', 'flew': 'полетіла', 'rains': 'йде дощ', 'raining': 'йде дощ', 'look': 'дивись', 'summer': 'літо',
      'coffee': 'кава', 'help': 'допомогти', 'table': 'стіл', 'meets': 'зустрічає', 'nice to meet you': 'приємно познайомитися', 'at last': 'нарешті',
      'flight': 'переліт', 'fine': 'добре', 'only': 'лише', 'three hours': 'три години', 'online': 'онлайн', 'wow': 'вау', 'love': 'любити', 'visited': 'відвідала',
      'museum': 'музей', 'weather': 'погода', 'free': 'вільна', 'this evening': 'сьогодні ввечері', 'restaurant': 'ресторан', 'near': 'біля',
      'sounds great': 'звучить чудово', 'invitation': 'запрошення', 'month': 'місяць', 'pharmacist': 'фармацевт', 'daughter': 'донька', 'travel': 'подорожувати',
      'films': 'фільми', 'three times a week': 'тричі на тиждень', 'often': 'часто', 'listen to': 'слухати', 'podcasts': 'подкасти', 'car': 'машина',
      'sometimes': 'іноді', 'read': 'читати', 'short stories': 'оповідання', 'new': 'нові', 'tourists': 'туристи', 'simple': 'прості', 'books': 'книги',
      'fast': 'швидкі', 'songs': 'пісні', 'yet': 'ще', 'kitchen': 'кухня', 'proud': 'горда', 'yourself': 'себе', 'city': 'місто', 'family': 'сім’я',
      'typical': 'типовий', 'hobbies': 'хобі', 'tram': 'трамвай', 'free time': 'вільний час', 'reading': 'читання', 'cycling': 'велоспорт', 'cleaned': 'прибрала',
      'market': 'ринок', 'parents': 'батьки', 'goal': 'мета', 'without': 'без', 'subtitles': 'субтитри', 'want': 'хочу', 'start': 'почати'
    }
  });
})();
