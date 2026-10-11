/*
 * A1 · Module 2 · Lesson 1 — My family (possessive adjectives, possessive ’s)
 * Review: this/that, to be (module 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'This is my family',
    text: `Hi! I’m Taras and I’m twelve. This is a photo of my family.

This is my dad. His name is Ivan. He’s a driver. This is my mum. Her name is Oksana. She’s a nurse. My parents are very kind.

That’s my sister, Daryna. She’s sixteen. Her friends are always at our house! And that’s my little brother, Mark. He’s five. His favourite toy is a red car.

These are my grandparents — my mum’s mother and father. Their house is in a village. It’s small but beautiful. Our dog, Rex, is there too. Its name is on its ball!

I love my family!`
  };

  ENG.registerLesson({
    id: 'a1-m2-l1',
    level: 'a1',
    title: 'My family. Моя сім’я',
    subtitle: 'my / your / his / her / our / their · присвійний ’s · члени сім’ї',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Taras’s family',
            instructions: 'Прочитай розповідь Тараса про сім’ю й обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What is Taras’s dad’s name?', options: ['Mark', 'Ivan', 'Rex'], answer: 1 },
              { id: 'q2', q: 'What is his mum’s job?', options: ['She’s a driver.', 'She’s a teacher.', 'She’s a nurse.'], answer: 2 },
              { id: 'q3', q: 'How old is Daryna?', options: ['Five', 'Twelve', 'Sixteen'], answer: 2 },
              { id: 'q4', q: 'What is Mark’s favourite toy?', options: ['A red car', 'A ball', 'A book'], answer: 0 },
              { id: 'q5', q: 'Where is the grandparents’ house?', options: ['In a city', 'In a village', 'In Kyiv'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Taras is twelve.', answer: true },
              { id: 's2', s: 'Mark is Taras’s big brother.', answer: false, explain: 'Mark is his little brother. He’s five.' },
              { id: 's3', s: 'The grandparents are his dad’s parents.', answer: false, explain: '“my mum’s mother and father” — це батьки мами.' },
              { id: 's4', s: 'The grandparents’ house is big.', answer: false, explain: '“It’s small but beautiful.”' },
              { id: 's5', s: 'Rex is the family’s dog.', answer: true }
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
            title: 'Family words',
            instructions: 'Вивчи слова про сім’ю. Зверни увагу на пари: чоловік — жінка.',
            cards: [
              { front: 'mother (mum)', ipa: '/ˈmʌðə/', back: 'мати (мама)', example: 'My mum is a nurse.' },
              { front: 'father (dad)', ipa: '/ˈfɑːðə/', back: 'батько (тато)', example: 'His dad is a driver.' },
              { front: 'parents', ipa: '/ˈpeərənts/', back: 'батьки', example: 'My parents are kind.' },
              { front: 'son / daughter', ipa: '/sʌn/ /ˈdɔːtə/', back: 'син / донька', example: 'They have a son and a daughter.' },
              { front: 'brother / sister', back: 'брат / сестра', example: 'Daryna is my sister.' },
              { front: 'husband / wife', ipa: '/ˈhʌzbənd/ /waɪf/', back: 'чоловік / дружина', example: 'Ivan is Oksana’s husband.' },
              { front: 'grandmother / grandfather', back: 'бабуся / дідусь', example: 'My grandmother is seventy.' },
              { front: 'grandparents', back: 'бабуся й дідусь', example: 'Their grandparents live in a village.' },
              { front: 'aunt / uncle', ipa: '/ɑːnt/ /ˈʌŋkl/', back: 'тітка / дядько', example: 'My uncle is my dad’s brother.' },
              { front: 'cousin', ipa: '/ˈkʌzn/', back: 'двоюрідний брат / сестра', example: 'My cousin is from Lviv.' },
              { front: 'little / big brother', back: 'молодший / старший брат', example: 'Mark is my little brother.' },
              { front: 'kind', ipa: '/kaɪnd/', back: 'добрий', example: 'My grandparents are very kind.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Male & female',
            instructions: 'Поєднай пари: чоловіча і жіноча форма.',
            pairs: [
              ['father', 'mother'],
              ['brother', 'sister'],
              ['son', 'daughter'],
              ['husband', 'wife'],
              ['grandfather', 'grandmother'],
              ['uncle', 'aunt'],
              ['boy', 'girl'],
              ['man', 'woman']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Who is who?',
            instructions: 'Встав правильне слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'My mother’s mother is my {{grandmother}}.' },
              { id: 'd2', text: 'My dad’s brother is my {{uncle}}.' },
              { id: 'd3', text: 'My aunt’s son is my {{cousin}}.' },
              { id: 'd4', text: 'My mum and dad are my {{parents}}.' },
              { id: 'd5', text: 'Oksana is Ivan’s {{wife}}.' },
              { id: 'd6', text: 'Daryna is Ivan and Oksana’s {{daughter}}.' }
            ],
            distractors: ['husband']
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
            title: 'Possessives: my, his, her… and ’s',
            instructions: 'Як сказати «чий?». Два способи: присвійні займенники (my, his…) і закінчення ’s.',
            html: `
<h3>1. Присвійні займенники — «чий?»</h3>
<p>Кожен особовий займенник (I, you, he…) має свою присвійну пару. Вона стоїть <b>перед іменником</b>.</p>
<div class="table-wrap"><table>
  <tr><th>Хто?</th><th>Чий?</th><th>Приклад</th></tr>
  <tr><td>I — я</td><td><b>my</b> — мій, моя, моє, мої</td><td><b>My</b> name is Taras.</td></tr>
  <tr><td>you — ти / ви</td><td><b>your</b> — твій / ваш</td><td>Is this <b>your</b> phone?</td></tr>
  <tr><td>he — він</td><td><b>his</b> — його</td><td><b>His</b> name is Ivan.</td></tr>
  <tr><td>she — вона</td><td><b>her</b> — її</td><td><b>Her</b> name is Oksana.</td></tr>
  <tr><td>it — воно</td><td><b>its</b> — його / її (для речей, тварин)</td><td>The dog is in <b>its</b> house.</td></tr>
  <tr><td>we — ми</td><td><b>our</b> — наш</td><td><b>Our</b> house is big.</td></tr>
  <tr><td>they — вони</td><td><b>their</b> — їхній</td><td><b>Their</b> village is small.</td></tr>
</table></div>
<p>💡 В українській «мій / моя / моє / мої» змінюються. В англійській <b>my</b> завжди однакове: my dad, my mum, my parents.</p>
<p>💡 Українське «свій» перекладаємо за змістом: «Він любить свою сестру» → He loves <b>his</b> sister.</p>

<h3>2. Присвійний ’s — «чий?» з іменами</h3>
<p>Коли власник — це ім’я або людина, додаємо <b>’s</b>:</p>
<div class="ex-line">Mark<mark>’s</mark> toy = іграшка Марка</div>
<div class="ex-line">my mum<mark>’s</mark> name = ім’я моєї мами</div>
<div class="ex-line">Taras<mark>’s</mark> family = сім’я Тараса</div>
<p>Порядок слів <b>навпаки</b>, ніж в українській: спершу <b>чий</b>, потім <b>що</b>.<br>
«Машина <u>тата</u>» → <b>Dad’s car</b> <span class="muted">(не «car of dad»)</span>.</p>
<p>Якщо слово у множині вже закінчується на -s, ставимо лише апостроф: my parent<b>s’</b> house (будинок моїх батьків).</p>

<h3>3. ’s — це «is» чи «чий»?</h3>
<div class="table-wrap"><table>
  <tr><th>’s = is</th><th>’s = чий</th></tr>
  <tr><td><b>He’s</b> a driver. = He <b>is</b> a driver.</td><td><b>Ivan’s</b> car is red. = машина Івана</td></tr>
  <tr><td><b>It’s</b> my dog. = It <b>is</b>…</td><td>The <b>dog’s</b> name is Rex.</td></tr>
</table></div>
<p>Підказка: якщо після ’s іде іменник (car, name) — це «чий».</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">He is my mother brother.</span> → <span class="yes">He is my mother’s brother.</span><br>
<span class="no">She name is Oksana.</span> → <span class="yes">Her name is Oksana.</span><br>
<span class="no">the car of my dad</span> → <span class="yes">my dad’s car</span><br>
<span class="no">it’s ball</span> (= it is ball) → <span class="yes">its ball</span></div>`
          },
          {
            id: 'gram-poss',
            type: 'choice',
            title: 'my, your, his, her, our, their',
            instructions: 'Обери правильний присвійний займенник.',
            items: [
              { id: 'p1', q: 'This is Ivan. ___ job is driver.', options: ['Her', 'His', 'Their'], answer: 1 },
              { id: 'p2', q: 'This is Oksana. ___ name is beautiful.', options: ['His', 'Her', 'Its'], answer: 1 },
              { id: 'p3', q: 'We are a family. ___ dog is Rex.', options: ['Our', 'Their', 'Your'], answer: 0 },
              { id: 'p4', q: 'My grandparents are kind. ___ house is small.', options: ['His', 'Our', 'Their'], answer: 2 },
              { id: 'p5', q: 'I’m Taras. ___ sister is Daryna.', options: ['My', 'Your', 'Her'], answer: 0 },
              { id: 'p6', q: 'Look at the cat! ___ eyes are green.', options: ['It’s', 'Its', 'His'], answer: 1, explain: 'its = його (для тварин і речей). it’s = it is.' },
              { id: 'p7', q: 'Hi, Ann! Is this ___ bag?', options: ['your', 'you', 'yours'], answer: 0 }
            ]
          },
          {
            id: 'gram-s',
            type: 'gap',
            title: 'Make ’s phrases',
            instructions: 'Перепиши англійською з ’s. Наприклад: машина тата → dad’s car.',
            items: [
              { id: 's1', text: 'іграшка Марка → {{Mark’s toy}}' },
              { id: 's2', text: 'ім’я мами → mum’s {{name}}' },
              { id: 's3', text: 'сестра Тараса → {{Taras’s sister|Taras’ sister}}' },
              { id: 's4', text: 'будинок бабусі → my {{grandmother’s house|grandma’s house}}' },
              { id: 's5', text: 'собака Анни → {{Anna’s dog}}' },
              { id: 's6', text: 'телефон мого брата → my {{brother’s phone}}' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення. Пам’ятай: «чий» іде перед «що».',
            items: [
              { id: 'o1', prompt: 'Її звати Оксана.', answer: 'Her name is Oksana.', extra: ['She'] },
              { id: 'o2', prompt: 'Це машина мого тата.', answer: "This is my dad's car." },
              { id: 'o3', prompt: 'Їхній будинок у селі.', answer: 'Their house is in a village.' },
              { id: 'o4', prompt: 'Брат моєї мами — мій дядько.', answer: "My mum's brother is my uncle." }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: this / that / these / those + to be',
            instructions: 'Згадаймо модуль 1. Встав is або are.',
            items: [
              { id: 'r1', text: 'This {{is}} my mum.' },
              { id: 'r2', text: 'These {{are}} my grandparents.' },
              { id: 'r3', text: 'That {{is}} my little brother.' },
              { id: 'r4', text: 'Those {{are}} my cousins from Lviv.' },
              { id: 'r5', text: '{{Is}} that your sister? — Yes, it is.' }
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
            title: 'A family photo',
            instructions: 'Ліза показує подрузі сімейне фото. Послухай і дай відповіді.',
            audio: {
              title: 'Dialogue: Liza & Kate',
              lines: [
                { who: 'Kate', text: 'Is this your family, Liza?' },
                { who: 'Liza', text: 'Yes, it is. This is my mum, and this is my dad. His name is Peter.' },
                { who: 'Kate', text: 'And who is that girl?' },
                { who: 'Liza', text: 'That’s my cousin Sophie. She’s my aunt’s daughter. She’s nine.' },
                { who: 'Kate', text: 'And is that your grandfather?' },
                { who: 'Liza', text: 'No, it isn’t. That’s my uncle Tom, my mum’s brother. My grandfather isn’t in the photo.' },
                { who: 'Kate', text: 'Oh, and the dog?' },
                { who: 'Liza', text: 'That’s Bobby, my uncle’s dog. Its favourite thing is my dad’s shoe!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is Liza’s dad’s name?', options: ['Tom', 'Peter', 'Bobby'], answer: 1 },
              { id: 'l2', q: 'Who is Sophie?', options: ['Liza’s sister', 'Liza’s cousin', 'Liza’s aunt'], answer: 1 },
              { id: 'l3', q: 'How old is Sophie?', options: ['Five', 'Nine', 'Nineteen'], answer: 1 },
              { id: 'l4', q: 'Who is Tom?', options: ['Liza’s grandfather', 'Liza’s mum’s brother', 'Liza’s dad’s brother'], answer: 1 },
              { id: 'l5', q: 'Whose dog is Bobby?', options: ['Liza’s', 'Tom’s', 'Sophie’s'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'His name is Peter.' },
              { id: 'dc2', text: 'She is my aunt’s daughter.' },
              { id: 'dc3', text: 'Their house is small.' },
              { id: 'dc4', text: 'This is my dad’s car.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-family',
            type: 'writing',
            title: 'My family',
            instructions: 'Опиши свою сім’ю (або вигадану сім’ю з фото). Використай his/her/their і ’s.',
            prompt: 'Write about your family (50–70 words).\n• Who is in your family?\n• Write names, ages and jobs: His name is… / Her name is…\n• Use ’s at least twice (my mum’s sister…).\n• Use our or their once.',
            minWords: 50,
            maxWords: 80,
            phrases: ['This is my', 'His name is', 'Her name is', 'Their', 'Our', '’s', 'I love my family'],
            checklist: ['his — для чоловіка, her — для жінки', 'Є щонайменше два ’s (Anna’s, mum’s…)', 'Є our або their', 'Є вік (She’s 10) і професія (He’s a driver)'],
            model: `There are four people in my family. My dad’s name is Andriy. He’s forty-five and he’s an engineer. My mum’s name is Iryna. She’s a teacher.

My brother is eighteen. His name is Max and he’s a student. My grandparents are my dad’s parents. Their house is in Poltava. Our cat is Murka. Her favourite place is my bed! I love my family.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-family',
            type: 'speaking',
            title: 'Talk about your family',
            instructions: 'Відповідай уголос 2–3 реченнями. Намагайся використати his / her / their і ’s.',
            phrases: ['My mum’s name is…', 'His/Her name is…', 'He’s/She’s … years old.', 'Their…', 'My … is my …’s …'],
            tasks: [
              { id: 'sp1', q: 'Tell me about your mum or dad. What’s his or her name? What’s his or her job?', tips: 'His name is … He’s a …', model: 'My mum’s name is Iryna. She’s a teacher. Her school is near our house.' },
              { id: 'sp2', q: 'Have you got brothers, sisters or cousins? Tell me about one.', tips: 'My cousin’s name is … He’s/She’s …', model: 'My cousin’s name is Dima. He’s fourteen. His favourite sport is football.' },
              { id: 'sp3', q: 'Explain a family relation: who is your uncle or aunt?', tips: 'My uncle is my mum’s / dad’s brother.', model: 'My aunt is my dad’s sister. Her name is Natalia.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'family': 'сім’я', 'photo': 'фото', 'twelve': 'дванадцять', 'dad': 'тато', 'mum': 'мама', 'name': 'ім’я', 'his': 'його', 'her': 'її',
      'driver': 'водій', 'nurse': 'медсестра', 'parents': 'батьки', 'parent': 'один з батьків', 'very': 'дуже', 'kind': 'добрий', 'sister': 'сестра',
      'sixteen': 'шістнадцять', 'friends': 'друзі', 'always': 'завжди', 'our': 'наш', 'house': 'будинок', 'little': 'маленький; молодший',
      'brother': 'брат', 'five': 'п’ять', 'favourite': 'улюблений', 'toy': 'іграшка', 'red': 'червоний', 'car': 'машина', 'grandparents': 'бабуся й дідусь',
      'mother': 'мати', 'father': 'батько', 'their': 'їхній', 'village': 'село', 'small': 'маленький', 'beautiful': 'гарний', 'dog': 'собака',
      'there': 'там', 'too': 'теж', 'its': 'його / її (для тварин і речей)', 'ball': 'м’яч', 'love': 'любити', 'job': 'робота', 'teacher': 'вчитель',
      'city': 'місто', 'big': 'великий', 'son': 'син', 'daughter': 'донька', 'husband': 'чоловік (у шлюбі)', 'wife': 'дружина', 'grandmother': 'бабуся',
      'grandfather': 'дідусь', 'grandma': 'бабуся', 'aunt': 'тітка', 'uncle': 'дядько', 'cousin': 'двоюрідний брат / сестра', 'cousins': 'двоюрідні брати / сестри',
      'seventy': 'сімдесят', 'live': 'жити', 'boy': 'хлопчик', 'girl': 'дівчинка', 'man': 'чоловік', 'woman': 'жінка', 'who': 'хто', 'whose': 'чий',
      'look at': 'подивись на', 'cat': 'кіт, кішка', 'eyes': 'очі', 'green': 'зелений', 'bag': 'сумка', 'phone': 'телефон', 'nine': 'дев’ять',
      'nineteen': 'дев’ятнадцять', 'thing': 'річ', 'shoe': 'черевик', 'engineer': 'інженер', 'forty-five': 'сорок п’ять', 'eighteen': 'вісімнадцять',
      'student': 'студент', 'people': 'люди', 'four': 'чотири', 'place': 'місце', 'bed': 'ліжко', 'school': 'школа', 'near': 'біля',
      'fourteen': 'чотирнадцять', 'sport': 'спорт', 'football': 'футбол', 'relation': 'родинний зв’язок', 'explain': 'пояснити', 'tell': 'розповісти',
      'about': 'про', 'one': 'один', 'old': 'старий; (вік)', 'years': 'роки', 'male': 'чоловічий', 'female': 'жіночий', 'words': 'слова',
      "he's": 'він є (he is)', "she's": 'вона є (she is)', "that's": 'це (that is)', "it's": 'це є (it is)', "i'm": 'я є', "isn't": 'не є',
      "what's": 'що є', 'have got': 'мати', 'in': 'в, у', 'at': 'в, на', 'this': 'це', 'these': 'ці', 'those': 'ті', 'that': 'той, те'
    }
  });
})();
