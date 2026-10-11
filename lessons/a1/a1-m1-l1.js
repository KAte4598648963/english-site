/*
 * A1 · Module 1 · Lesson 1 — Hi, I'm… (to be: am / is / are + personal pronouns)
 * Exercise IDs are PERMANENT: never rename or reuse them.
 */
(function () {
  const PASSAGE = {
    title: 'Welcome to the English Club!',
    text: `Hello! My name is Anna. I am from Kyiv. I am a student. I am nineteen.

This is Tom. He is my friend. He is from London. He is a teacher. He is very nice.

This is Maria. She is from Madrid. She is a doctor. She is twenty-five.

We are in the English Club. The club is big and friendly. Our teacher is Mr Brown. He is funny. We are happy here!`
  };

  ENG.registerLesson({
    id: 'a1-m1-l1',
    level: 'a1',
    title: 'Hi, I’m… Знайомство',
    subtitle: 'to be: am / is / are · особові займенники · привітання',

    sections: [
      /* ============================ READING ============================ */
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Read the text',
            instructions: 'Прочитай текст про англійський клуб і обери правильну відповідь. Незнайомі слова можна перекласти: увімкни «Перекладач» і наведи на слово.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is Anna from?', options: ['London', 'Kyiv', 'Madrid'], answer: 1 },
              { id: 'q2', q: 'What is Tom?', options: ['A student', 'A doctor', 'A teacher'], answer: 2 },
              { id: 'q3', q: 'How old is Maria?', options: ['Nineteen', 'Twenty-five', 'Twenty'], answer: 1 },
              { id: 'q4', q: 'Who is the teacher of the club?', options: ['Mr Brown', 'Tom', 'Anna'], answer: 0 },
              { id: 'q5', q: 'The club is…', options: ['small and boring', 'big and friendly', 'big and boring'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда (True) чи неправда (False)? Подивись у текст ще раз.',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Anna is a student.', answer: true },
              { id: 's2', s: 'Tom is from Madrid.', answer: false, explain: 'Tom is from London.' },
              { id: 's3', s: 'Maria is a doctor.', answer: true },
              { id: 's4', s: 'Mr Brown is funny.', answer: true },
              { id: 's5', s: 'Anna is twenty-five.', answer: false, explain: 'Anna is nineteen. Maria is twenty-five.' }
            ]
          }
        ]
      },

      /* ============================ VOCABULARY ============================ */
      {
        id: 'vocabulary',
        title: 'Vocabulary',
        exercises: [
          {
            id: 'vocab-cards',
            type: 'flashcards',
            title: 'Greetings & introductions',
            instructions: 'Вивчи нові слова. Натисни на картку — побачиш переклад і приклад. Натисни 🔊, щоб почути вимову.',
            cards: [
              { front: 'Hello! / Hi!', back: 'Привіт! / Добрий день!', example: 'Hi! I’m Anna.' },
              { front: 'Goodbye! / Bye!', back: 'До побачення! / Бувай!', example: 'Bye, Tom! See you!' },
              { front: 'name', ipa: '/neɪm/', back: 'ім’я', example: 'My name is Anna.' },
              { front: 'Nice to meet you!', back: 'Приємно познайомитися!', example: 'Hi, Tom! Nice to meet you!' },
              { front: 'How are you?', back: 'Як справи?', example: 'Hi, Maria! How are you?' },
              { front: 'I’m fine, thanks.', back: 'У мене все добре, дякую.', example: 'I’m fine, thanks. And you?' },
              { front: 'friend', ipa: '/frend/', back: 'друг, подруга', example: 'Tom is my friend.' },
              { front: 'student', ipa: '/ˈstjuːdnt/', back: 'студент, учень', example: 'I am a student.' },
              { front: 'teacher', ipa: '/ˈtiːtʃə/', back: 'вчитель', example: 'Mr Brown is a teacher.' },
              { front: 'from', ipa: '/frɒm/', back: 'з (звідки)', example: 'I am from Ukraine.' },
              { front: 'happy', ipa: '/ˈhæpi/', back: 'щасливий, радий', example: 'We are happy.' },
              { front: 'See you!', back: 'Побачимось!', example: 'Goodbye! See you tomorrow!' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Match the phrases',
            instructions: 'Поєднай англійську фразу з українським перекладом. Натисни зліва, потім справа.',
            pairs: [
              ['Hello!', 'Привіт!'],
              ['Goodbye!', 'До побачення!'],
              ['How are you?', 'Як справи?'],
              ['Nice to meet you!', 'Приємно познайомитися!'],
              ['My name is…', 'Мене звати…'],
              ['I’m fine, thanks.', 'Все добре, дякую.'],
              ['See you!', 'Побачимось!'],
              ['Where are you from?', 'Звідки ти?']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the dialogue',
            instructions: 'Перетягни слова в пропуски (або натисни на слово, а потім на пропуск). Одне слово зайве.',
            items: [
              { id: 'd1', text: 'A: {{Hello}}! My name is Tom.' },
              { id: 'd2', text: 'B: Hi, Tom! My {{name}} is Olena.' },
              { id: 'd3', text: 'A: Nice to {{meet}} you, Olena!' },
              { id: 'd4', text: 'B: Nice to meet you too! Where are you {{from}}?' },
              { id: 'd5', text: 'A: I’m from London. I’m a {{teacher}}.' },
              { id: 'd6', text: 'B: Great! Oh, it’s late. {{Goodbye}}, Tom!' }
            ],
            distractors: ['happy']
          }
        ]
      },

      /* ============================ GRAMMAR ============================ */
      {
        id: 'grammar',
        title: 'Grammar',
        exercises: [
          {
            id: 'gram-rule',
            type: 'rule',
            title: 'The verb “to be”: am / is / are',
            instructions: 'Уважно прочитай пояснення та приклади. Це найважливіше дієслово англійської мови!',
            html: `
<h3>1. Що таке «to be»?</h3>
<p><b>to be</b> = «бути, є». Українською ми часто його <b>пропускаємо</b>: «Я студент», «Він з Лондона».
Англійською його <b>не можна пропускати</b> ніколи!</p>
<div class="ex-line">Я студент. → I <mark>am</mark> a student. <span class="muted">(дослівно: Я є студент)</span></div>
<div class="ex-line">Він з Лондона. → He <mark>is</mark> from London.</div>

<h3>2. Особові займенники (хто?)</h3>
<div class="table-wrap"><table>
  <tr><th>English</th><th>Українською</th><th>English</th><th>Українською</th></tr>
  <tr><td><b>I</b></td><td>я</td><td><b>we</b></td><td>ми</td></tr>
  <tr><td><b>you</b></td><td>ти / ви</td><td><b>you</b></td><td>ви (кілька людей)</td></tr>
  <tr><td><b>he</b></td><td>він</td><td><b>they</b></td><td>вони</td></tr>
  <tr><td><b>she</b></td><td>вона</td><td></td><td></td></tr>
  <tr><td><b>it</b></td><td>воно (речі, тварини)</td><td></td><td></td></tr>
</table></div>
<p>💡 <b>I</b> (я) завжди пишемо з <b>великої</b> літери, навіть у середині речення.</p>

<h3>3. Форми: кожен займенник має «свою пару»</h3>
<div class="table-wrap"><table>
  <tr><th>Займенник</th><th>to be</th><th>Скорочено</th><th>Приклад</th></tr>
  <tr><td>I</td><td><b>am</b></td><td>I’m</td><td>I’m Anna.</td></tr>
  <tr><td>he / she / it</td><td><b>is</b></td><td>he’s / she’s / it’s</td><td>She’s a doctor.</td></tr>
  <tr><td>you / we / they</td><td><b>are</b></td><td>you’re / we’re / they’re</td><td>We’re friends.</td></tr>
</table></div>
<p>Запам’ятай просто: <b>I → am</b>, <b>одна людина чи річ → is</b>, <b>кілька або you → are</b>.</p>
<div class="ex-line">Tom <mark>is</mark> a teacher. <span class="muted">(Tom = he → is)</span></div>
<div class="ex-line">Anna and Maria <mark>are</mark> friends. <span class="muted">(Anna and Maria = they → are)</span></div>
<div class="ex-line">The club <mark>is</mark> big. <span class="muted">(the club = it → is)</span></div>

<h3>4. Коли вживаємо to be</h3>
<ul>
  <li><b>ім’я:</b> I’m Olena. / My name is Olena.</li>
  <li><b>звідки ти:</b> She is from Spain.</li>
  <li><b>професія:</b> He is a teacher.</li>
  <li><b>вік:</b> I am twenty. <span class="muted">(не «I have twenty»!)</span></li>
  <li><b>настрій, опис:</b> We are happy. The club is friendly.</li>
</ul>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I student.</span> → <span class="yes">I am a student.</span><br>
<span class="no">He are from London.</span> → <span class="yes">He is from London.</span><br>
<span class="no">I have 20 years.</span> → <span class="yes">I am 20.</span><br>
<span class="no">i am Anna.</span> → <span class="yes">I am Anna.</span></div>`
          },
          {
            id: 'gram-pron',
            type: 'choice',
            title: 'Choose the pronoun',
            instructions: 'Яким займенником можна замінити ці слова? Обери правильний.',
            items: [
              { id: 'p1', q: 'Tom → ___', options: ['he', 'she', 'it'], answer: 0 },
              { id: 'p2', q: 'Maria → ___', options: ['he', 'she', 'they'], answer: 1 },
              { id: 'p3', q: 'the club → ___', options: ['he', 'it', 'we'], answer: 1 },
              { id: 'p4', q: 'Anna and Tom → ___', options: ['we', 'it', 'they'], answer: 2 },
              { id: 'p5', q: 'Olena and I → ___', options: ['we', 'they', 'you'], answer: 0, explain: '«Олена і я» = «ми» → we.' },
              { id: 'p6', q: 'my cat → ___', options: ['she', 'it', 'they'], answer: 1, explain: 'Для тварин і речей зазвичай вживаємо it.' }
            ]
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'am, is or are?',
            instructions: 'Встав правильну форму: am, is або are.',
            items: [
              { id: 'g1', text: 'I {{am}} a student.' },
              { id: 'g2', text: 'She {{is}} from Madrid.' },
              { id: 'g3', text: 'We {{are}} friends.' },
              { id: 'g4', text: 'Tom {{is}} a teacher.' },
              { id: 'g5', text: 'You {{are}} very nice!' },
              { id: 'g6', text: 'They {{are}} in the English Club.' },
              { id: 'g7', text: 'The club {{is}} big.' },
              { id: 'g8', text: 'Anna and Maria {{are}} happy.' }
            ]
          },
          {
            id: 'gram-short',
            type: 'dragdrop',
            title: 'Short forms',
            instructions: 'Склади скорочену форму: перетягни її до повної.',
            items: [
              { id: 'c1', text: 'I am = {{I’m}}' },
              { id: 'c2', text: 'she is = {{she’s}}' },
              { id: 'c3', text: 'they are = {{they’re}}' },
              { id: 'c4', text: 'he is = {{he’s}}' },
              { id: 'c5', text: 'we are = {{we’re}}' },
              { id: 'c6', text: 'it is = {{it’s}}' }
            ],
            distractors: ['I’re']
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення англійською. Натискай на слова в правильному порядку. Пам’ятай: am/is/are не можна пропустити!',
            items: [
              { id: 'o1', prompt: 'Я студентка.', answer: 'I am a student.' },
              { id: 'o2', prompt: 'Він з Лондона.', answer: 'He is from London.' },
              { id: 'o3', prompt: 'Ми друзі.', answer: 'We are friends.', extra: ['is'] },
              { id: 'o4', prompt: 'Мені двадцять.', answer: 'I am twenty.', extra: ['have'] }
            ]
          }
        ]
      },

      /* ============================ LISTENING ============================ */
      {
        id: 'listening',
        title: 'Listening',
        exercises: [
          {
            id: 'listen-mcq',
            type: 'choice',
            title: 'First day at school',
            instructions: 'Послухай, як Бен і Софія знайомляться. Можна слухати кілька разів і повільніше. Потім дай відповіді.',
            audio: {
              title: 'Dialogue: Ben & Sofia',
              lines: [
                { who: 'Ben', text: 'Hi! I’m Ben. What’s your name?' },
                { who: 'Sofia', text: 'Hello, Ben! My name is Sofia. Nice to meet you!' },
                { who: 'Ben', text: 'Nice to meet you too. Where are you from, Sofia?' },
                { who: 'Sofia', text: 'I’m from Ukraine, from Lviv. And you?' },
                { who: 'Ben', text: 'I’m from Canada. I’m a new student here.' },
                { who: 'Sofia', text: 'Me too! This is my friend Mark. He is from Canada too!' },
                { who: 'Ben', text: 'Great! Hi, Mark!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is the girl’s name?', options: ['Sofia', 'Anna', 'Maria'], answer: 0 },
              { id: 'l2', q: 'Where is Sofia from?', options: ['Kyiv', 'Lviv', 'Odesa'], answer: 1 },
              { id: 'l3', q: 'Where is Ben from?', options: ['Ukraine', 'England', 'Canada'], answer: 2 },
              { id: 'l4', q: 'Ben is…', options: ['a teacher', 'a new student', 'a doctor'], answer: 1 },
              { id: 'l5', q: 'Who is Mark?', options: ['Sofia’s friend', 'Ben’s teacher', 'Sofia’s brother'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай речення і запиши його. Великі літери та крапки не важливі.',
            items: [
              { id: 'dc1', text: 'My name is Sofia.' },
              { id: 'dc2', text: 'I am from Ukraine.' },
              { id: 'dc3', text: 'He is my friend.' },
              { id: 'dc4', text: 'We are students.' }
            ]
          }
        ]
      },

      /* ============================ WRITING ============================ */
      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-about-me',
            type: 'writing',
            title: 'About me',
            instructions: 'Напиши кілька речень про себе і свого друга чи подругу. Використовуй am / is / are.',
            prompt: 'Write about you and a friend (30–50 words).\n• What is your name?\n• Where are you from?\n• How old are you?\n• What are you? (a student, a teacher…)\n• Who is your friend? Where is he/she from?',
            minWords: 30,
            maxWords: 60,
            phrases: ['My name is', 'I am from', 'I am', 'This is', 'He is', 'She is', 'We are'],
            checklist: ['Є моє ім’я і звідки я', 'Є мій вік (I am … — без «have»!)', 'Є речення про друга з he is / she is', 'Є речення з we are', 'I завжди з великої літери'],
            model: `Hello! My name is Olena. I am from Kharkiv. I am twenty-two. I am a student.

This is my friend Dan. He is from Dublin. He is a teacher. He is very funny. We are good friends!`
          }
        ]
      },

      /* ============================ SPEAKING ============================ */
      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-intro',
            type: 'speaking',
            title: 'Introduce yourself',
            instructions: 'Відповідай уголос повними реченнями. Якщо є кнопка «Говорити» — натисни і скажи відповідь, вона з’явиться текстом. Потім постав галочку.',
            phrases: ['Hi! I’m…', 'My name is…', 'I’m from…', 'I’m … years old.', 'Nice to meet you!'],
            tasks: [
              { id: 'sp1', q: 'Hello! What’s your name?', tips: 'Скажи: Hi! My name is …', model: 'Hi! My name is Olena. Nice to meet you!' },
              { id: 'sp2', q: 'Where are you from?', tips: 'I’m from + місто / країна', model: 'I’m from Ukraine. I’m from Kyiv.' },
              { id: 'sp3', q: 'How old are you? What are you?', tips: 'I’m … (вік). I’m a student / a teacher…', model: 'I’m twenty. I’m a student.' },
              { id: 'sp4', q: 'Tell me about your friend.', tips: 'This is … He/She is from … He/She is …', model: 'This is my friend Ira. She is from Odesa. She is a doctor.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'hello': 'привіт, добрий день', 'hi': 'привіт', 'goodbye': 'до побачення', 'bye': 'бувай', 'my': 'мій, моя, моє', 'name': 'ім’я',
      'is': 'є (to be для he/she/it)', 'am': 'є (to be для I)', 'are': 'є (to be для you/we/they)', 'i': 'я', 'you': 'ти, ви', 'he': 'він',
      'she': 'вона', 'it': 'воно (для речей і тварин)', 'we': 'ми', 'they': 'вони', 'from': 'з (звідки)', 'student': 'студент, учень',
      'nineteen': 'дев’ятнадцять', 'twenty': 'двадцять', 'twenty-five': 'двадцять п’ять', 'twenty-two': 'двадцять два', 'this': 'це, цей',
      'friend': 'друг, подруга', 'friends': 'друзі', 'teacher': 'вчитель', 'very': 'дуже', 'nice': 'приємний, милий', 'doctor': 'лікар',
      'in': 'в, у', 'the': '(означений артикль)', 'english': 'англійська; англійський', 'club': 'клуб', 'big': 'великий', 'and': 'і, та',
      'friendly': 'дружній, привітний', 'our': 'наш', 'mr': 'містер, пан', 'funny': 'смішний, кумедний', 'happy': 'щасливий, радий',
      'here': 'тут', 'welcome': 'ласкаво просимо', 'welcome to': 'ласкаво просимо до', 'where': 'де; звідки (where … from)', 'what': 'що, який',
      'how': 'як', 'how old': 'скільки років', 'old': 'старий; (вік) років', 'who': 'хто', 'small': 'маленький', 'boring': 'нудний',
      'true': 'правда', 'false': 'неправда', 'nice to meet you': 'приємно познайомитися', 'meet': 'зустрічати, знайомитися', 'to': 'до; частка інфінітива',
      'fine': 'добре', 'thanks': 'дякую', 'thank you': 'дякую', 'see you': 'побачимось', 'see': 'бачити', 'tomorrow': 'завтра', 'too': 'теж, також',
      'great': 'чудово', 'late': 'пізно', 'oh': 'о!', 'first': 'перший', 'day': 'день', 'at': 'в, на', 'school': 'школа', 'new': 'новий',
      'me too': 'я теж', 'me': 'мене, мені', 'girl': 'дівчина', 'brother': 'брат', 'canada': 'Канада', 'ukraine': 'Україна', 'london': 'Лондон',
      'madrid': 'Мадрид', 'spain': 'Іспанія', 'cat': 'кіт, кішка', 'a': '(неозначений артикль: один, якийсь)', 'an': '(неозначений артикль перед голосною)',
      'years': 'роки', 'year': 'рік', 'good': 'добрий, хороший', 'about': 'про', 'write': 'писати', 'tell': 'розповісти', 'introduce': 'представити',
      'yourself': 'себе', 'read': 'читати', 'text': 'текст', 'choose': 'обрати', 'pronoun': 'займенник', 'complete': 'доповнити', 'dialogue': 'діалог',
      'phrase': 'фраза', 'phrases': 'фрази', 'match': 'поєднати', 'short': 'короткий', 'form': 'форма', 'forms': 'форми', 'build': 'складати',
      'sentence': 'речення', 'sentences': 'речення', 'greeting': 'привітання', 'greetings': 'привітання', 'introductions': 'знайомство',
      'or': 'або', 'verb': 'дієслово', 'be': 'бути', "what's": 'що (what is)', "i'm": 'я є (I am)', "he's": 'він є (he is)', "she's": 'вона є (she is)', "it's": 'це є (it is)', "we're": 'ми є (we are)', "you're": 'ти є (you are)', "they're": 'вони є (they are)', 'your': 'твій, ваш', 'and you': 'а ти?'
    }
  });
})();
