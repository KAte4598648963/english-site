/*
 * A1 · Module 1 · Lesson 4 — Review: Meet my new friend
 * Reviews: to be (+ / − / ?), pronouns, question words, a/an, plurals, this/that/these/those.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'An email from a new friend',
    text: `Hi Olena,

My name is Jack and I’m your new pen friend! I’m from Manchester. It’s a big city in England. I’m British. I’m eighteen and I’m a student.

This is a photo of me and my friends. The tall boy is Sam. He isn’t British — he’s Irish, from Dublin. The two girls are Amy and Nora. They’re sisters. They aren’t students, they’re nurses.

And this is my dog, Max! He’s three. Those are his toys — two balls and an old shoe.

What about you? Where are you from? Are you a student? How old are you? Is your city big?

Write soon!
Jack`
  };

  ENG.registerLesson({
    id: 'a1-m1-l4',
    level: 'a1',
    title: 'Review: Meet my new friend',
    subtitle: 'Повторення модуля 1: to be, питання, a/an, множина, this/these',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Jack’s email',
            instructions: 'Олена отримала листа від нового друга по листуванню. Прочитай і дай відповіді.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is Jack from?', options: ['Dublin', 'Manchester', 'London'], answer: 1 },
              { id: 'q2', q: 'How old is Jack?', options: ['Eighteen', 'Eight', 'Eighty'], answer: 0 },
              { id: 'q3', q: 'What nationality is Sam?', options: ['British', 'Irish', 'American'], answer: 1 },
              { id: 'q4', q: 'Who are Amy and Nora?', options: ['Students', 'Sisters and nurses', 'Jack’s teachers'], answer: 1 },
              { id: 'q5', q: 'What are Max’s toys?', options: ['Two balls and an old shoe', 'A ball and two shoes', 'An umbrella'], answer: 0 }
            ]
          },
          {
            id: 'read-gap',
            type: 'gap',
            title: 'Answer Jack’s questions',
            instructions: 'Уяви, що ти — Олена з Києва (20 років, студентка). Допиши короткі відповіді на питання Джека.',
            items: [
              { id: 'a1', text: 'Are you from Ukraine? — Yes, I {{am}}.' },
              { id: 'a2', text: 'Are you a teacher? — No, I’m {{not}}. I’m a student.' },
              { id: 'a3', text: 'Is Kyiv big? — Yes, it {{is}}.' },
              { id: 'a4', text: 'Is Kyiv in Poland? — No, it {{isn’t|is not}}.' },
              { id: 'a5', text: 'How old are you? — I’m {{twenty|20}}.' }
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
            title: 'Module 1 words + new words',
            instructions: 'Повторимо слова модуля і вивчимо кілька нових з листа Джека.',
            cards: [
              { front: 'pen friend', back: 'друг по листуванню', example: 'Jack is my new pen friend.' },
              { front: 'photo', ipa: '/ˈfəʊtəʊ/', back: 'фото', example: 'This is a photo of my family.' },
              { front: 'tall', ipa: '/tɔːl/', back: 'високий (про людину)', example: 'The tall boy is Sam.' },
              { front: 'boy / girl', back: 'хлопець / дівчина', example: 'The two girls are sisters.' },
              { front: 'sister', ipa: '/ˈsɪstə/', back: 'сестра', example: 'Amy and Nora are sisters.' },
              { front: 'nurse', ipa: '/nɜːs/', back: 'медсестра, медбрат', example: 'She’s a nurse.' },
              { front: 'dog', ipa: '/dɒɡ/', back: 'собака', example: 'This is my dog, Max.' },
              { front: 'toy', ipa: '/tɔɪ/', back: 'іграшка', example: 'Those are his toys.' },
              { front: 'Write soon!', back: 'Пиши скоріше!', example: 'Bye for now. Write soon!' },
              { front: 'Irish', ipa: '/ˈaɪrɪʃ/', back: 'ірландець, ірландський', example: 'Sam is Irish.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 1 mix',
            instructions: 'Поєднай слова з усього модуля з перекладом.',
            pairs: [
              ['Nice to meet you!', 'Приємно познайомитися!'],
              ['nationality', 'національність'],
              ['wallet', 'гаманець'],
              ['pen friend', 'друг по листуванню'],
              ['sister', 'сестра'],
              ['umbrella', 'парасолька'],
              ['country', 'країна'],
              ['tall', 'високий']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete Olena’s reply',
            instructions: 'Допоможи Олені написати відповідь. Встав слова. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Hi Jack! Thank you for your {{email}}!' },
              { id: 'd2', text: 'I’m {{Ukrainian}}. I’m from Kyiv.' },
              { id: 'd3', text: 'Kyiv is the capital. It’s a big {{city}}.' },
              { id: 'd4', text: 'Your dog is so cute! Here is a {{photo}} of my cat.' },
              { id: 'd5', text: 'She is two. Those are her {{toys}}.' },
              { id: 'd6', text: 'Write {{soon}}! Olena' }
            ],
            distractors: ['nurse']
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
            instructions: 'Уся граматика модуля на одній сторінці. Перечитай і перевір себе: чи все зрозуміло?',
            html: `
<h3>1. to be: am / is / are</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>+ (так)</th><th>− (ні)</th><th>? (питання)</th></tr>
  <tr><td>I</td><td>I <b>am</b> (I’m)</td><td>I’m <b>not</b></td><td><b>Am</b> I…?</td></tr>
  <tr><td>he / she / it</td><td>he <b>is</b> (he’s)</td><td>he <b>isn’t</b></td><td><b>Is</b> he…?</td></tr>
  <tr><td>you / we / they</td><td>we <b>are</b> (we’re)</td><td>we <b>aren’t</b></td><td><b>Are</b> we…?</td></tr>
</table></div>
<p>Короткі відповіді: <b>Yes, I am. / No, I’m not. · Yes, she is. / No, she isn’t. · Yes, they are. / No, they aren’t.</b></p>

<h3>2. Питальні слова</h3>
<div class="ex-line"><b>What</b>’s your name? · <b>Where</b> are you from? · <b>How old</b> is he? · <b>Who</b> is she?</div>
<p>Порядок: <b>питальне слово → am/is/are → хто → решта</b>.</p>

<h3>3. a / an + множина</h3>
<div class="table-wrap"><table>
  <tr><th>один</th><th>багато</th></tr>
  <tr><td><b>a</b> dog, <b>a</b> photo, <b>a</b> university</td><td>dog<b>s</b>, photo<b>s</b></td></tr>
  <tr><td><b>an</b> email, <b>an</b> old toy, <b>an</b> hour</td><td>email<b>s</b>, toy<b>s</b></td></tr>
  <tr><td>a watch, a city, a child</td><td>watch<b>es</b>, cit<b>ies</b>, <b>children</b></td></tr>
</table></div>

<h3>4. this / that / these / those</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>тут</th><th>там</th></tr>
  <tr><td>один → <b>is</b></td><td>This is my dog.</td><td>That is my house.</td></tr>
  <tr><td>багато → <b>are</b></td><td>These are his toys.</td><td>Those are my friends.</td></tr>
</table></div>

<div class="tip">✅ <b>Чек-лист модуля</b> — я вмію:<br>
• розповісти, хто я, звідки, скільки мені років;<br>
• сказати «ні» (isn’t, aren’t, I’m not) і поставити питання;<br>
• назвати країни й національності;<br>
• назвати речі з a/an і у множині, показати this/these.</div>`
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'Grammar mix',
            instructions: 'Встав одне слово: am, is, are, a, an, this, these, isn’t, aren’t.',
            items: [
              { id: 'g1', text: 'Jack {{is}} from Manchester.' },
              { id: 'g2', text: 'Amy and Nora {{are}} sisters.' },
              { id: 'g3', text: 'Max has {{an}} old shoe.' },
              { id: 'g4', text: 'Sam isn’t British. He’s Irish. He {{isn’t|is not}} from London.' },
              { id: 'g5', text: 'Look! {{These}} are my photos.' },
              { id: 'g6', text: 'I {{am}} a student.' },
              { id: 'g7', text: 'Max is {{a}} dog.' },
              { id: 'g8', text: 'They {{aren’t|are not}} students. They’re nurses.' }
            ]
          },
          {
            id: 'gram-correct',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Яке речення правильне? Згадай типові помилки з уроків 1–3.',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['I student.', 'I am a student.', 'I am student.'], answer: 1 },
              { id: 'c2', q: 'Обери правильне:', options: ['You are from Spain?', 'Are you from Spain?', 'From where are you?'], answer: 1 },
              { id: 'c3', q: 'Обери правильне:', options: ['I have nineteen years.', 'I am nineteen.', 'I nineteen.'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['These is my keys.', 'This are my keys.', 'These are my keys.'], answer: 2 },
              { id: 'c5', q: 'Обери правильне:', options: ['It’s an umbrella.', 'It’s a umbrella.', 'It’s umbrella.'], answer: 0 },
              { id: 'c6', q: 'Обери правильне:', options: ['Yes, I’m.', 'Yes, I am.', 'Yes, am.'], answer: 1 }
            ]
          },
          {
            id: 'gram-questions',
            type: 'order',
            title: 'Write the questions',
            instructions: 'Склади питання, які Джек ставить Олені.',
            items: [
              { id: 'o1', prompt: 'Звідки ти?', answer: 'Where are you from?' },
              { id: 'o2', prompt: 'Ти студентка?', answer: 'Are you a student?' },
              { id: 'o3', prompt: 'Скільки тобі років?', answer: 'How old are you?' },
              { id: 'o4', prompt: 'Твоє місто велике?', answer: 'Is your city big?', extra: ['are'] }
            ]
          },
          {
            id: 'gram-plural',
            type: 'dragdrop',
            title: 'Singular → plural',
            instructions: 'Знайди множину для кожного слова.',
            items: [
              { id: 'p1', text: 'a photo → {{photos}}' },
              { id: 'p2', text: 'a child → {{children}}' },
              { id: 'p3', text: 'a city → {{cities}}' },
              { id: 'p4', text: 'a watch → {{watches}}' },
              { id: 'p5', text: 'a woman → {{women}}' },
              { id: 'p6', text: 'a toy → {{toys}}' }
            ],
            distractors: ['childs', 'citys']
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
            title: 'A video call',
            instructions: 'Олена і Джек уперше говорять по відеозв’язку. Послухай і дай відповіді.',
            audio: {
              title: 'Video call: Olena & Jack',
              lines: [
                { who: 'Jack', text: 'Hi, Olena! Nice to meet you!' },
                { who: 'Olena', text: 'Hi, Jack! Nice to meet you too! How are you?' },
                { who: 'Jack', text: 'I’m fine, thanks. Is that your cat?' },
                { who: 'Olena', text: 'Yes, it is. Her name is Bella. She’s two.' },
                { who: 'Jack', text: 'She’s beautiful! Are those your books?' },
                { who: 'Olena', text: 'Yes, they are. They’re English books. I’m a student at the university.' },
                { who: 'Jack', text: 'Cool! And who is that woman in the photo?' },
                { who: 'Olena', text: 'That’s my mum. She isn’t a student, she’s a doctor.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is the cat’s name?', options: ['Max', 'Bella', 'Nora'], answer: 1 },
              { id: 'l2', q: 'How old is the cat?', options: ['Two', 'Three', 'Ten'], answer: 0 },
              { id: 'l3', q: 'What books are they?', options: ['English books', 'Italian books', 'Old books'], answer: 0 },
              { id: 'l4', q: 'Who is the woman in the photo?', options: ['Olena’s sister', 'Olena’s mum', 'Olena’s teacher'], answer: 1 },
              { id: 'l5', q: 'What is the woman?', options: ['A student', 'A nurse', 'A doctor'], answer: 2 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши речення з розмови.',
            items: [
              { id: 'dc1', text: 'Is that your cat?' },
              { id: 'dc2', text: 'Those are my books.' },
              { id: 'dc3', text: 'She is not a student.' },
              { id: 'dc4', text: 'Nice to meet you too.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-reply',
            type: 'writing',
            title: 'Reply to Jack',
            instructions: 'Напиши відповідь Джеку від себе. Відповідай на всі його питання й використай граматику всього модуля.',
            prompt: 'Write an email to Jack (50–80 words).\n• Say hello and thank him for the email.\n• Answer his questions: Where are you from? Are you a student? How old are you? Is your city big?\n• Describe a photo: This is… These are… (people, a pet or things).\n• Ask Jack two questions.\n• Finish: Write soon!',
            minWords: 50,
            maxWords: 90,
            phrases: ['Hi Jack', 'Thank you for your email', 'I’m from', 'This is', 'These are', 'isn’t', 'Write soon'],
            checklist: ['Відповідь на кожне питання Джека', 'Є am, is, are і хоча б одне заперечення', 'Є a / an і слова у множині', 'Є два питання до Джека з правильним порядком слів', 'Є привітання і кінцівка'],
            model: `Hi Jack,

Thank you for your email! I’m Olena. I’m from Kyiv. It’s the capital of Ukraine and it’s a very big city. I’m twenty and I’m a student.

This is a photo of my family. This is my mum. She’s a doctor. These are my two brothers. They aren’t students, they’re engineers. And this is my cat, Bella!

Is Manchester beautiful? Are you a good cook?

Write soon!
Olena`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-review',
            type: 'speaking',
            title: 'Your first video call',
            instructions: 'Уяви, що ти говориш з Джеком по відеозв’язку. Відповідай уголос 3–4 реченнями на кожне завдання.',
            phrases: ['Nice to meet you!', 'I’m from…', 'This is…', 'These are…', 'He/She isn’t…', 'Are you…?'],
            tasks: [
              { id: 'sp1', q: 'Introduce yourself: name, city, nationality, age, job.', tips: 'Використай усе з уроків 1–2.', model: 'Hi! I’m Olena. I’m from Kyiv. I’m Ukrainian. I’m twenty and I’m a student.' },
              { id: 'sp2', q: 'Show Jack a photo or things in your room. What are they?', tips: 'This is a/an … These are … That’s my …', model: 'This is my desk. These are my English books and that is my guitar.' },
              { id: 'sp3', q: 'Tell Jack about a friend. Use one negative sentence.', tips: 'He/She isn’t …, he’s/she’s …', model: 'This is my friend Ira. She isn’t a student, she’s a designer. She’s from Odesa.' },
              { id: 'sp4', q: 'Ask Jack three questions.', tips: 'Where…? Is…? Are…? How old…?', model: 'Is your dog friendly? Are your friends students? How old is Sam?' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'email': 'електронний лист', 'from': 'від; з', 'new': 'новий', 'pen friend': 'друг по листуванню', 'friend': 'друг', 'manchester': 'Манчестер',
      'big': 'великий', 'city': 'місто', 'england': 'Англія', 'british': 'британець', 'eighteen': 'вісімнадцять', 'eight': 'вісім', 'eighty': 'вісімдесят',
      'student': 'студент', 'photo': 'фото', 'photos': 'фото (мн.)', 'of': '(родовий відмінок: …кого/чого)', 'me': 'мене', 'tall': 'високий',
      'boy': 'хлопець', 'girl': 'дівчина', 'girls': 'дівчата', 'irish': 'ірландець, ірландський', 'dublin': 'Дублін', 'sisters': 'сестри',
      'sister': 'сестра', 'nurse': 'медсестра', 'nurses': 'медсестри', 'dog': 'собака', 'three': 'три', 'toy': 'іграшка', 'toys': 'іграшки',
      'his': 'його', 'two': 'два', 'ball': 'м’яч', 'balls': 'м’ячі', 'old': 'старий', 'shoe': 'черевик', 'shoes': 'взуття, черевики',
      'what about you': 'а ти?', 'where': 'де; звідки', 'how old': 'скільки років', 'your': 'твій', 'write': 'писати', 'soon': 'скоро',
      'write soon': 'пиши скоріше', 'ukraine': 'Україна', 'ukrainian': 'українець', 'poland': 'Польща', 'teacher': 'вчитель', 'twenty': 'двадцять',
      'answer': 'відповідати', 'questions': 'питання', 'thank you': 'дякую', 'capital': 'столиця', 'so': 'такий, так', 'cute': 'милий',
      'here is': 'ось', 'cat': 'кіт, кішка', 'her': 'її', 'look': 'дивись', 'video call': 'відеодзвінок', 'call': 'дзвінок', 'nice to meet you': 'приємно познайомитися',
      'how are you': 'як справи', 'fine': 'добре', 'thanks': 'дякую', 'beautiful': 'гарна, гарний', 'books': 'книги', 'english': 'англійський',
      'university': 'університет', 'cool': 'класно', 'who': 'хто', 'woman': 'жінка', 'mum': 'мама', 'doctor': 'лікар', 'family': 'сім’я',
      'brothers': 'брати', 'engineers': 'інженери', 'cook': 'кухар', 'good': 'хороший', 'desk': 'письмовий стіл', 'guitar': 'гітара',
      'room': 'кімната', 'designer': 'дизайнер', 'friendly': 'дружній', 'introduce': 'представити', 'yourself': 'себе', 'job': 'робота, професія',
      'age': 'вік', 'nationality': 'національність', 'negative': 'заперечний', 'review': 'повторення', 'meet': 'познайомитися', 'reply': 'відповідь',
      'module': 'модуль', 'words': 'слова', 'mix': 'суміш', 'pet': 'домашній улюбленець', "i'm": 'я є', "he's": 'він є', "she's": 'вона є',
      "they're": 'вони є', "isn't": 'не є', "aren't": 'не є', "it's": 'це є', "that's": 'це (that is)', "what's": 'що є'
    }
  });
})();
