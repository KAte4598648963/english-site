/*
 * A1 · Module 1 · Lesson 2 — Where are you from? (to be: negatives & questions, question words)
 * Review: to be (+) from lesson 1. Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'International Summer School',
    text: `Hi everyone! I’m Kasia. I’m Polish, from Warsaw. This is my class at the International Summer School in Brighton.

Luca is my classmate. He isn’t Spanish — he’s Italian. He’s from Rome. Yuki and Kenji are from Japan. They aren’t brothers, they’re friends. Emma is our teacher. She’s British, from London.

Is the school big? No, it isn’t. It’s small, but it’s very good. Are we happy here? Yes, we are!`
  };

  ENG.registerLesson({
    id: 'a1-m1-l2',
    level: 'a1',
    title: 'Where are you from? Країни',
    subtitle: 'to be: заперечення і питання · what / where / how old · країни й національності',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Read about the summer school',
            instructions: 'Прочитай розповідь Каші про літню школу й обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is Kasia from?', options: ['Poland', 'Italy', 'Japan'], answer: 0 },
              { id: 'q2', q: 'What nationality is Luca?', options: ['Spanish', 'Italian', 'British'], answer: 1 },
              { id: 'q3', q: 'Where are Yuki and Kenji from?', options: ['China', 'Japan', 'Britain'], answer: 1 },
              { id: 'q4', q: 'Who is the teacher?', options: ['Kasia', 'Emma', 'Yuki'], answer: 1 },
              { id: 'q5', q: 'Where is the school?', options: ['In London', 'In Rome', 'In Brighton'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда? Звертай увагу на заперечення isn’t / aren’t у тексті.',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Luca is Spanish.', answer: false, explain: '“He isn’t Spanish — he’s Italian.”' },
              { id: 's2', s: 'Yuki and Kenji are brothers.', answer: false, explain: '“They aren’t brothers, they’re friends.”' },
              { id: 's3', s: 'Emma is British.', answer: true },
              { id: 's4', s: 'The school is big.', answer: false, explain: '“No, it isn’t. It’s small.”' },
              { id: 's5', s: 'The students are happy.', answer: true }
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
            title: 'Countries & nationalities',
            instructions: 'Країна і національність — різні слова! Вивчи пари. Зверни увагу: обидва пишемо з великої літери.',
            cards: [
              { front: 'Ukraine → Ukrainian', back: 'Україна → українець, український', example: 'I’m from Ukraine. I’m Ukrainian.' },
              { front: 'Poland → Polish', back: 'Польща → поляк, польський', example: 'Kasia is Polish.' },
              { front: 'Italy → Italian', back: 'Італія → італієць, італійський', example: 'Luca is from Italy.' },
              { front: 'Spain → Spanish', back: 'Іспанія → іспанець, іспанський', example: 'Is Maria Spanish?' },
              { front: 'Britain (the UK) → British', back: 'Британія → британець', example: 'Emma is British.' },
              { front: 'the USA → American', back: 'США → американець', example: 'They are American.' },
              { front: 'France → French', back: 'Франція → француз, французький', example: 'Paris is in France.' },
              { front: 'Germany → German', back: 'Німеччина → німець, німецький', example: 'Hans is German.' },
              { front: 'Japan → Japanese', back: 'Японія → японець, японський', example: 'Yuki is Japanese.' },
              { front: 'country', ipa: '/ˈkʌntri/', back: 'країна', example: 'Ukraine is a big country.' },
              { front: 'nationality', ipa: '/ˌnæʃəˈnæləti/', back: 'національність', example: 'What nationality are you?' },
              { front: 'city', ipa: '/ˈsɪti/', back: 'місто', example: 'Lviv is a beautiful city.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Country → nationality',
            instructions: 'Поєднай країну з національністю.',
            pairs: [
              ['Ukraine', 'Ukrainian'],
              ['Poland', 'Polish'],
              ['Italy', 'Italian'],
              ['Spain', 'Spanish'],
              ['Britain', 'British'],
              ['the USA', 'American'],
              ['Germany', 'German'],
              ['Japan', 'Japanese']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Country or nationality?',
            instructions: 'Встав правильне слово. Пам’ятай: from + країна, I’m + національність. Два слова зайві.',
            items: [
              { id: 'd1', text: 'Luca is from {{Italy}}.' },
              { id: 'd2', text: 'Hans is {{German}}.' },
              { id: 'd3', text: 'We are from {{Ukraine}}.' },
              { id: 'd4', text: 'Yuki is {{Japanese}}.' },
              { id: 'd5', text: 'Kasia is from {{Poland}}.' },
              { id: 'd6', text: 'Emma is {{British}}.' }
            ],
            distractors: ['Spain', 'Italian']
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
            title: 'to be: negatives & questions',
            instructions: 'Минулого уроку ми вчили I am / he is / we are. Сьогодні — як сказати «ні» і як поставити питання.',
            html: `
<h3>1. Заперечення: додаємо <mark>not</mark></h3>
<p>Щоб сказати «не», ставимо <b>not</b> одразу <b>після</b> am / is / are.</p>
<div class="table-wrap"><table>
  <tr><th>Повна форма</th><th>Скорочено</th><th>Приклад</th></tr>
  <tr><td>I am not</td><td><b>I’m not</b></td><td>I’m not British.</td></tr>
  <tr><td>he / she / it is not</td><td><b>isn’t</b></td><td>Luca isn’t Spanish.</td></tr>
  <tr><td>you / we / they are not</td><td><b>aren’t</b></td><td>They aren’t brothers.</td></tr>
</table></div>
<p>⚠️ Форми <span class="no">amn’t</span> немає! Тільки <b>I’m not</b>.</p>

<h3>2. Питання: міняємо місцями</h3>
<p>В українській питання часто відрізняється лише інтонацією. В англійській <b>am / is / are стає на перше місце</b>, перед людиною.</p>
<div class="table-wrap"><table>
  <tr><th>Твердження</th><th>Питання</th></tr>
  <tr><td>You <b>are</b> from Spain.</td><td><mark>Are</mark> you from Spain?</td></tr>
  <tr><td>She <b>is</b> a teacher.</td><td><mark>Is</mark> she a teacher?</td></tr>
  <tr><td>They <b>are</b> Polish.</td><td><mark>Are</mark> they Polish?</td></tr>
</table></div>

<h3>3. Короткі відповіді</h3>
<p>На питання «так/ні» англійці не кажуть просто «Yes» — повторюють займенник і am/is/are:</p>
<div class="table-wrap"><table>
  <tr><th>Питання</th><th>Так</th><th>Ні</th></tr>
  <tr><td>Are you Ukrainian?</td><td>Yes, I <b>am</b>.</td><td>No, I’m <b>not</b>.</td></tr>
  <tr><td>Is he Italian?</td><td>Yes, he <b>is</b>.</td><td>No, he <b>isn’t</b>.</td></tr>
  <tr><td>Are they friends?</td><td>Yes, they <b>are</b>.</td><td>No, they <b>aren’t</b>.</td></tr>
</table></div>
<p>💡 У відповіді «так» <b>не скорочуємо</b>: <span class="no">Yes, I’m.</span> → <span class="yes">Yes, I am.</span></p>

<h3>4. Питальні слова — на самому початку</h3>
<p>Схема: <b>Питальне слово + am/is/are + хто? + …?</b></p>
<div class="table-wrap"><table>
  <tr><th>Слово</th><th>Значення</th><th>Приклад</th></tr>
  <tr><td><b>What</b></td><td>що / який</td><td>What’s your name? What nationality are you?</td></tr>
  <tr><td><b>Where</b></td><td>де / звідки</td><td>Where are you from? <span class="muted">(from — в кінці!)</span></td></tr>
  <tr><td><b>How old</b></td><td>скільки років</td><td>How old is she? — She’s ten.</td></tr>
  <tr><td><b>Who</b></td><td>хто</td><td>Who is your teacher?</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">You are from Spain?</span> → <span class="yes">Are you from Spain?</span><br>
<span class="no">He not is Polish.</span> → <span class="yes">He isn’t Polish.</span><br>
<span class="no">From where are you?</span> → <span class="yes">Where are you from?</span></div>`
          },
          {
            id: 'gram-neg',
            type: 'gap',
            title: 'Make it negative',
            instructions: 'Встав заперечну форму: ’m not, isn’t або aren’t. А потім — правильну інформацію.',
            items: [
              { id: 'g1', text: 'Luca {{isn’t|is not}} Spanish. He’s Italian.' },
              { id: 'g2', text: 'I {{’m not|am not}} British. I’m Ukrainian.' },
              { id: 'g3', text: 'Yuki and Kenji {{aren’t|are not}} brothers.' },
              { id: 'g4', text: 'The school {{isn’t|is not}} big.' },
              { id: 'g5', text: 'We {{aren’t|are not}} from Germany.' },
              { id: 'g6', text: 'Emma {{isn’t|is not}} a student. She’s a teacher.' }
            ]
          },
          {
            id: 'gram-short',
            type: 'choice',
            title: 'Short answers',
            instructions: 'Обери правильну коротку відповідь (за текстом про літню школу).',
            items: [
              { id: 'a1', q: 'Is Kasia Polish?', options: ['Yes, she is.', 'Yes, she’s.', 'Yes, she are.'], answer: 0, explain: 'У відповіді «так» не скорочуємо: Yes, she is.' },
              { id: 'a2', q: 'Is Luca from Spain?', options: ['No, he isn’t.', 'No, he not.', 'No, he aren’t.'], answer: 0 },
              { id: 'a3', q: 'Are Yuki and Kenji Japanese?', options: ['Yes, they is.', 'Yes, they are.', 'Yes, we are.'], answer: 1 },
              { id: 'a4', q: 'Is the school big?', options: ['Yes, it is.', 'No, it isn’t.', 'No, it aren’t.'], answer: 1 },
              { id: 'a5', q: 'Are you a student? (ти — студент)', options: ['Yes, I am.', 'Yes, I’m.', 'Yes, you are.'], answer: 0 },
              { id: 'a6', q: 'Is Emma a teacher?', options: ['Yes, she is.', 'No, she isn’t.', 'Yes, he is.'], answer: 0 }
            ]
          },
          {
            id: 'gram-qwords',
            type: 'gap',
            title: 'Question words',
            instructions: 'Встав питальне слово: What, Where, How або Who.',
            items: [
              { id: 'w1', text: '{{What}} is your name? — Kasia.' },
              { id: 'w2', text: '{{Where}} are you from? — From Poland.' },
              { id: 'w3', text: '{{How}} old are you? — I’m twenty.' },
              { id: 'w4', text: '{{Who}} is your teacher? — Emma.' },
              { id: 'w5', text: '{{What}} nationality is Luca? — Italian.' },
              { id: 'w6', text: '{{Where}} is Brighton? — In Britain.' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the questions',
            instructions: 'Склади питання. Пам’ятай: am/is/are або питальне слово — на початку.',
            items: [
              { id: 'o1', prompt: 'Ти з Польщі?', answer: 'Are you from Poland?' },
              { id: 'o2', prompt: 'Звідки вона?', answer: 'Where is she from?' },
              { id: 'o3', prompt: 'Скільки йому років?', answer: 'How old is he?', extra: ['have'] },
              { id: 'o4', prompt: 'Вони не брати.', answer: "They aren't brothers.", extra: ['not'] }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: am / is / are',
            instructions: 'Згадаймо минулий урок. Обери правильну форму.',
            items: [
              { id: 'r1', q: 'My friends ___ from Lviv.', options: ['is', 'am', 'are'], answer: 2 },
              { id: 'r2', q: 'I ___ twenty-one.', options: ['am', 'is', 'have'], answer: 0, explain: 'Вік: I am 21 (не «I have»).' },
              { id: 'r3', q: 'Lviv ___ a beautiful city.', options: ['are', 'is', 'am'], answer: 1 },
              { id: 'r4', q: 'You and Kasia ___ in my class.', options: ['is', 'are', 'am'], answer: 1 }
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
            title: 'At the reception',
            instructions: 'Послухай розмову на рецепції літньої школи. Адміністратор заповнює анкету нового студента.',
            audio: {
              title: 'Dialogue: Receptionist & Diego',
              lines: [
                { who: 'Receptionist', text: 'Good morning! What’s your name, please?' },
                { who: 'Diego', text: 'My name is Diego. D-I-E-G-O.' },
                { who: 'Receptionist', text: 'Thank you, Diego. Are you Spanish?' },
                { who: 'Diego', text: 'No, I’m not. I’m from Mexico. I’m Mexican.' },
                { who: 'Receptionist', text: 'Oh, sorry! And how old are you?' },
                { who: 'Diego', text: 'I’m twenty-three.' },
                { who: 'Receptionist', text: 'Are you a student?' },
                { who: 'Diego', text: 'Yes, I am. I’m a student in Mexico City.' },
                { who: 'Receptionist', text: 'Great. Your class is room five. Your teacher is Emma. Welcome!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Is Diego Spanish?', options: ['Yes, he is.', 'No, he isn’t.'], answer: 1 },
              { id: 'l2', q: 'Where is Diego from?', options: ['Spain', 'Mexico', 'Italy'], answer: 1 },
              { id: 'l3', q: 'How old is he?', options: ['Twenty-two', 'Twenty-three', 'Thirty-three'], answer: 1 },
              { id: 'l4', q: 'What is his class?', options: ['Room five', 'Room nine', 'Room three'], answer: 0 },
              { id: 'l5', q: 'Who is his teacher?', options: ['Kasia', 'Emma', 'Diego'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши питання та відповіді.',
            items: [
              { id: 'dc1', text: 'Are you from Poland?' },
              { id: 'dc2', text: 'No, I am not.' },
              { id: 'dc3', text: 'Where is he from?' },
              { id: 'dc4', text: 'She is not Spanish.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-profile',
            type: 'writing',
            title: 'A student profile',
            instructions: 'Ти теж у літній школі! Напиши про себе і двох одногрупників з різних країн. Додай хоча б одне заперечення і одне питання.',
            prompt: 'Write a short profile (40–60 words).\n• Who are you? Where are you from?\n• Write about two classmates: name, country, nationality.\n• Use isn’t / aren’t at least once (e.g. He isn’t French, he’s German).\n• End with a question to the reader (e.g. Where are you from?).',
            minWords: 40,
            maxWords: 70,
            phrases: ['I’m from', 'He’s', 'She’s', 'isn’t', 'aren’t', 'They are', 'Where are you from?'],
            checklist: ['Країни й національності з великої літери', 'Є заперечення isn’t або aren’t', 'Є питання з правильним порядком слів', 'from + країна, I’m + національність'],
            model: `Hello! I’m Olena and I’m Ukrainian. I’m from Poltava.

This is Marco. He isn’t Spanish, he’s Italian. He’s from Milan. And this is Aiko. She’s Japanese, from Osaka. Marco and Aiko aren’t students, they are teachers!

We are a happy class. And you? Where are you from?`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-qa',
            type: 'speaking',
            title: 'Questions & answers',
            instructions: 'Відповідай уголос. Для питань «так/ні» використовуй короткі відповіді (Yes, I am / No, I’m not) і додавай одне речення.',
            phrases: ['Yes, I am.', 'No, I’m not.', 'I’m from…', 'I’m Ukrainian.', 'He isn’t…, he’s…'],
            tasks: [
              { id: 'sp1', q: 'Are you British?', tips: 'Коротка відповідь + правда про себе.', model: 'No, I’m not. I’m Ukrainian.' },
              { id: 'sp2', q: 'Where are you from? Is it a big city?', tips: 'I’m from … It is / It isn’t a big city.', model: 'I’m from Vinnytsia. It isn’t very big, but it’s beautiful.' },
              { id: 'sp3', q: 'Think of a famous person. Where is he or she from?', tips: 'Наприклад, футболіст або актриса.', model: 'Lionel Messi is from Argentina. He isn’t Spanish, he’s Argentinian.' },
              { id: 'sp4', q: 'Ask me three questions about my country.', tips: 'Where…? Is it…? What…?', model: 'Where are you from? Is your country big? What is the capital?' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'hi': 'привіт', 'everyone': 'усі', 'polish': 'польський; поляк', 'warsaw': 'Варшава', 'class': 'клас, група', 'international': 'міжнародний',
      'summer': 'літо', 'school': 'школа', 'summer school': 'літня школа', 'classmate': 'однокласник, одногрупник', 'classmates': 'одногрупники',
      'spanish': 'іспанський; іспанець', 'italian': 'італійський; італієць', 'rome': 'Рим', 'japan': 'Японія', 'japanese': 'японський; японець',
      'brothers': 'брати', 'brother': 'брат', 'friends': 'друзі', 'teacher': 'вчитель', 'british': 'британський; британець', 'london': 'Лондон',
      'big': 'великий', 'small': 'маленький', 'but': 'але', 'very': 'дуже', 'good': 'хороший', 'happy': 'щасливий', 'here': 'тут', 'yes': 'так',
      'no': 'ні', 'not': 'не', "isn't": 'не є (is not)', "aren't": 'не є (are not)', "i'm": 'я є (I am)', "he's": 'він є', "she's": 'вона є',
      "it's": 'це є', "they're": 'вони є', "what's": 'що є (what is)', 'where': 'де; звідки', 'what': 'що, який', 'who': 'хто', 'how': 'як',
      'how old': 'скільки років', 'nationality': 'національність', 'country': 'країна', 'countries': 'країни', 'city': 'місто', 'ukraine': 'Україна',
      'ukrainian': 'український; українець', 'poland': 'Польща', 'italy': 'Італія', 'spain': 'Іспанія', 'britain': 'Британія', 'uk': 'Велика Британія',
      'usa': 'США', 'american': 'американський; американець', 'france': 'Франція', 'french': 'французький; француз', 'germany': 'Німеччина',
      'german': 'німецький; німець', 'mexico': 'Мексика', 'mexican': 'мексиканський; мексиканець', 'beautiful': 'гарний', 'from': 'з (звідки)',
      'good morning': 'доброго ранку', 'morning': 'ранок', 'please': 'будь ласка', 'thank you': 'дякую', 'sorry': 'вибачте', 'and': 'і; а',
      'twenty-three': 'двадцять три', 'twenty-one': 'двадцять один', 'twenty-two': 'двадцять два', 'thirty-three': 'тридцять три', 'ten': 'десять',
      'student': 'студент', 'room': 'кімната, аудиторія', 'five': 'п’ять', 'nine': 'дев’ять', 'three': 'три', 'welcome': 'ласкаво просимо',
      'your': 'твій, ваш', 'his': 'його', 'her': 'її', 'name': 'ім’я', 'reception': 'рецепція', 'receptionist': 'адміністратор', 'profile': 'анкета, профіль',
      'question': 'питання', 'questions': 'питання', 'answer': 'відповідь', 'answers': 'відповіді', 'short': 'короткий', 'negative': 'заперечний',
      'make': 'зробити', 'famous': 'відомий', 'person': 'людина', 'think': 'думати', 'think of': 'подумай про', 'ask': 'питати', 'me': 'мене, мені',
      'about': 'про', 'capital': 'столиця', 'argentina': 'Аргентина', 'reader': 'читач', 'end': 'закінчити', 'at least': 'щонайменше',
      'once': 'один раз', 'two': 'два', 'true': 'правда', 'false': 'неправда', 'read': 'читати', 'build': 'складати', 'word': 'слово', 'words': 'слова'
    }
  });
})();
