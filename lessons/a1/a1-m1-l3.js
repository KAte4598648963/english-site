/*
 * A1 · Module 1 · Lesson 3 — My things (a/an, plurals, this/that/these/those)
 * Review: to be questions & negatives (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'What’s in my bag?',
    text: `Hi! I’m Lily, and this is my bag. It’s a big blue bag. What’s in it? Let’s see!

This is my phone. It’s new. These are my keys — a house key and a car key. That is my wallet, and it isn’t empty: there’s money in it!

These are my books for school. They aren’t heavy. This is an umbrella — it’s an old umbrella, but it’s good. And those are my glasses. Oh, and an apple! Apples are my favourite snack.

What’s in your bag?`
  };

  ENG.registerLesson({
    id: 'a1-m1-l3',
    level: 'a1',
    title: 'My things. Мої речі',
    subtitle: 'a / an · множина іменників · this / that / these / those',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Lily’s bag',
            instructions: 'Прочитай, що у сумці в Лілі, й дай відповіді.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What colour is Lily’s bag?', options: ['Red', 'Blue', 'Black'], answer: 1 },
              { id: 'q2', q: 'Lily’s phone is…', options: ['old', 'new', 'big'], answer: 1 },
              { id: 'q3', q: 'How many keys are in the bag?', options: ['One', 'Two', 'Three'], answer: 1 },
              { id: 'q4', q: 'The umbrella is…', options: ['new and good', 'old but good', 'old and bad'], answer: 1 },
              { id: 'q5', q: 'What is Lily’s favourite snack?', options: ['Apples', 'Bananas', 'Sandwiches'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The bag is small.', answer: false, explain: '“It’s a big blue bag.”' },
              { id: 's2', s: 'The wallet is empty.', answer: false, explain: '“…it isn’t empty: there’s money in it!”' },
              { id: 's3', s: 'The books are heavy.', answer: false, explain: '“They aren’t heavy.”' },
              { id: 's4', s: 'Lily’s glasses are in the bag.', answer: true },
              { id: 's5', s: 'There is an apple in the bag.', answer: true }
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
            title: 'Everyday things',
            instructions: 'Вивчи назви речей, які є в кожного в сумці. Послухай вимову 🔊.',
            cards: [
              { front: 'bag', ipa: '/bæɡ/', back: 'сумка', example: 'This is my bag.' },
              { front: 'phone', ipa: '/fəʊn/', back: 'телефон', example: 'My phone is new.' },
              { front: 'key', ipa: '/kiː/', back: 'ключ', example: 'These are my keys.' },
              { front: 'wallet', ipa: '/ˈwɒlɪt/', back: 'гаманець', example: 'Is that your wallet?' },
              { front: 'book', ipa: '/bʊk/', back: 'книга', example: 'This is a good book.' },
              { front: 'pen', ipa: '/pen/', back: 'ручка', example: 'Is this a pen?' },
              { front: 'umbrella', ipa: '/ʌmˈbrelə/', back: 'парасолька', example: 'It’s an umbrella.' },
              { front: 'glasses', ipa: '/ˈɡlɑːsɪz/', back: 'окуляри', example: 'Those are my glasses.' },
              { front: 'watch', ipa: '/wɒtʃ/', back: 'годинник (наручний)', example: 'Is that a new watch?' },
              { front: 'bottle', ipa: '/ˈbɒtl/', back: 'пляшка', example: 'This is a bottle of water.' },
              { front: 'notebook', ipa: '/ˈnəʊtbʊk/', back: 'зошит, блокнот', example: 'These are my notebooks.' },
              { front: 'empty / heavy', back: 'порожній / важкий', example: 'The bag isn’t heavy. It’s empty.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Match the words',
            instructions: 'Поєднай слово з перекладом.',
            pairs: [
              ['key', 'ключ'],
              ['wallet', 'гаманець'],
              ['umbrella', 'парасолька'],
              ['glasses', 'окуляри'],
              ['watch', 'годинник'],
              ['bottle', 'пляшка'],
              ['notebook', 'зошит'],
              ['heavy', 'важкий']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What is it?',
            instructions: 'Встав слово, яке підходить за змістом. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'It’s raining! Where is my {{umbrella}}?' },
              { id: 'd2', text: 'I can’t open the door. Where are my {{keys}}?' },
              { id: 'd3', text: 'My money is in my {{wallet}}.' },
              { id: 'd4', text: 'I can’t see! Where are my {{glasses}}?' },
              { id: 'd5', text: 'Call me! My {{phone}} is in my bag.' },
              { id: 'd6', text: 'Water is in the {{bottle}}.' }
            ],
            distractors: ['pen']
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
            title: 'a / an, plurals, this / that / these / those',
            instructions: 'Три маленькі, але дуже важливі правила. Читай по черзі й дивись приклади.',
            html: `
<h3>1. a чи an? (один предмет)</h3>
<p>Перед <b>одним</b> предметом, який можна порахувати, ставимо <b>a</b> або <b>an</b> (= «один, якийсь»). Українською цього слова немає, але англійською без нього не можна: <span class="no">It’s phone.</span> → <span class="yes">It’s a phone.</span></p>
<div class="table-wrap"><table>
  <tr><th>a — перед приголосним <u>звуком</u></th><th>an — перед голосним <u>звуком</u></th></tr>
  <tr><td><b>a</b> bag, <b>a</b> phone, <b>a</b> key, <b>a</b> big apple</td><td><b>an</b> apple, <b>an</b> umbrella, <b>an</b> old bag, <b>an</b> egg</td></tr>
</table></div>
<p>💡 Дивимось на <b>звук</b>, а не на літеру: <b>a u</b>niversity (звучить «ю»), <b>an h</b>our (h не читається).</p>

<h3>2. Множина: зазвичай + s</h3>
<div class="table-wrap"><table>
  <tr><th>Правило</th><th>Приклади</th></tr>
  <tr><td>більшість слів <b>+ s</b></td><td>bag → bag<b>s</b>, key → key<b>s</b>, book → book<b>s</b></td></tr>
  <tr><td>-s, -sh, -ch, -x, -ss <b>+ es</b></td><td>watch → watch<b>es</b>, box → box<b>es</b>, glass → glass<b>es</b></td></tr>
  <tr><td>приголосна + y → <b>ies</b></td><td>city → cit<b>ies</b>, country → countr<b>ies</b> <span class="muted">(але key → keys)</span></td></tr>
  <tr><td>особливі слова</td><td>man → <b>men</b>, woman → <b>women</b>, child → <b>children</b>, person → <b>people</b></td></tr>
</table></div>
<p>⚠️ У множині <b>a/an не ставимо</b>: <span class="no">a keys</span> → <span class="yes">keys</span>, <span class="yes">two keys</span>.</p>

<h3>3. this / that / these / those</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>близько (тут) 👇</th><th>далеко (там) 👉</th></tr>
  <tr><td><b>один</b></td><td><mark>this</mark> = цей, це<br>This <b>is</b> my phone.</td><td><mark>that</mark> = той, те<br>That <b>is</b> my wallet.</td></tr>
  <tr><td><b>багато</b></td><td><mark>these</mark> = ці<br>These <b>are</b> my keys.</td><td><mark>those</mark> = ті<br>Those <b>are</b> my glasses.</td></tr>
</table></div>
<p>Зверни увагу: <b>this/that + is</b>, <b>these/those + are</b> — повторюємо to be з першого уроку!</p>

<h3>4. Питання про речі</h3>
<div class="ex-line">What’s this? — It’s <b>a</b> pen. <span class="muted">(один → it’s)</span></div>
<div class="ex-line">What are these? — They’re keys. <span class="muted">(багато → they’re)</span></div>
<div class="ex-line">Is that your bag? — Yes, it is. / No, it isn’t.</div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">This is umbrella.</span> → <span class="yes">This is an umbrella.</span><br>
<span class="no">These is my books.</span> → <span class="yes">These are my books.</span><br>
<span class="no">two childs</span> → <span class="yes">two children</span></div>`
          },
          {
            id: 'gram-aan',
            type: 'choice',
            title: 'a or an?',
            instructions: 'Обери a чи an. Слухай звук на початку слова.',
            items: [
              { id: 'a1', q: '___ bag', options: ['a', 'an'], answer: 0 },
              { id: 'a2', q: '___ umbrella', options: ['a', 'an'], answer: 1 },
              { id: 'a3', q: '___ apple', options: ['a', 'an'], answer: 1 },
              { id: 'a4', q: '___ old phone', options: ['a', 'an'], answer: 1, explain: 'Дивимось на перше слово: old починається з голосного звуку.' },
              { id: 'a5', q: '___ new phone', options: ['a', 'an'], answer: 0 },
              { id: 'a6', q: '___ hour', options: ['a', 'an'], answer: 1, explain: 'h у слові hour не читається: [ауе] → an hour.' },
              { id: 'a7', q: '___ university', options: ['a', 'an'], answer: 0, explain: 'university звучить [ю…] — це приголосний звук → a university.' }
            ]
          },
          {
            id: 'gram-plural',
            type: 'gap',
            title: 'One → many',
            instructions: 'Напиши множину.',
            items: [
              { id: 'p1', text: 'one book → two {{books}}' },
              { id: 'p2', text: 'one watch → three {{watches}}' },
              { id: 'p3', text: 'one city → two {{cities}}' },
              { id: 'p4', text: 'one key → four {{keys}}' },
              { id: 'p5', text: 'one box → five {{boxes}}' },
              { id: 'p6', text: 'one child → two {{children}}' },
              { id: 'p7', text: 'one woman → three {{women}}' },
              { id: 'p8', text: 'one person → ten {{people}}' }
            ]
          },
          {
            id: 'gram-this',
            type: 'choice',
            title: 'this, that, these or those?',
            instructions: 'Обери слово. Підказка в дужках: близько / далеко, один / багато.',
            items: [
              { id: 't1', q: '___ is my phone. (тут, один)', options: ['This', 'These', 'Those'], answer: 0 },
              { id: 't2', q: '___ are my keys. (тут, багато)', options: ['This', 'These', 'That'], answer: 1 },
              { id: 't3', q: '___ is your bag. (там, один)', options: ['That', 'Those', 'These'], answer: 0 },
              { id: 't4', q: '___ are her glasses. (там, багато)', options: ['That', 'This', 'Those'], answer: 2 },
              { id: 't5', q: 'These ___ my books.', options: ['is', 'are', 'am'], answer: 1 },
              { id: 't6', q: 'That ___ an old umbrella.', options: ['is', 'are', 'am'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення. Є зайві слова!',
            items: [
              { id: 'o1', prompt: 'Це парасолька.', answer: 'This is an umbrella.', extra: ['a'] },
              { id: 'o2', prompt: 'Ті ключі — мої.', answer: 'Those are my keys.', extra: ['is'] },
              { id: 'o3', prompt: 'Що це?', answer: "What's this?" },
              { id: 'o4', prompt: 'Це твій гаманець?', answer: 'Is that your wallet?' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: питання і заперечення',
            instructions: 'Згадаймо урок 2. Встав is, isn’t, are або aren’t.',
            items: [
              { id: 'r1', text: '{{Is}} this your phone? — Yes, it is.' },
              { id: 'r2', text: 'My bag {{isn’t|is not}} heavy. It’s empty.' },
              { id: 'r3', text: '{{Are}} these your books? — No, they aren’t.' },
              { id: 'r4', text: 'Those {{aren’t|are not}} my glasses. My glasses are here.' }
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
            title: 'Lost and found',
            instructions: 'Послухай діалог у бюро знахідок (lost and found) і дай відповіді.',
            audio: {
              title: 'Dialogue: At the lost and found',
              lines: [
                { who: 'Man', text: 'Hello. Can I help you?' },
                { who: 'Woman', text: 'Yes, please. My bag is lost. It’s a small black bag.' },
                { who: 'Man', text: 'Is this your bag?' },
                { who: 'Woman', text: 'No, it isn’t. That’s a brown bag. My bag is black.' },
                { who: 'Man', text: 'What about that bag, there?' },
                { who: 'Woman', text: 'Yes! That’s my bag! Thank you!' },
                { who: 'Man', text: 'And are these your keys?' },
                { who: 'Woman', text: 'Yes, they are. And that’s my umbrella too! Thank you very much!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What colour is the woman’s bag?', options: ['Brown', 'Black', 'Blue'], answer: 1 },
              { id: 'l2', q: 'The woman’s bag is…', options: ['big', 'small', 'heavy'], answer: 1 },
              { id: 'l3', q: 'The first bag is…', options: ['her bag', 'not her bag'], answer: 1 },
              { id: 'l4', q: 'Are the keys hers?', options: ['Yes, they are.', 'No, they aren’t.'], answer: 0 },
              { id: 'l5', q: 'What else is hers?', options: ['A phone', 'An umbrella', 'A wallet'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'This is an umbrella.' },
              { id: 'dc2', text: 'These are my keys.' },
              { id: 'dc3', text: 'Is that your bag?' },
              { id: 'dc4', text: 'Those are new books.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-bag',
            type: 'writing',
            title: 'What’s in your bag?',
            instructions: 'Опиши, що у твоїй сумці (або рюкзаку). Використай a/an, множину і this/these.',
            prompt: 'Write about your bag (40–60 words).\n• What colour is it? Is it big or small?\n• What is in it? Use This is a/an… and These are…\n• Use at least two plural words (keys, books…).\n• Is anything old or new?',
            minWords: 40,
            maxWords: 70,
            phrases: ['This is my bag', 'It’s a', 'an', 'These are', 'They aren’t', 'It isn’t'],
            checklist: ['Перед одним предметом є a або an', 'Є щонайменше два слова у множині', 'this + is, these + are', 'Немає a перед множиною'],
            model: `This is my bag. It’s a small green bag. What’s in it?

This is my phone. It isn’t new, but it’s good. These are my keys and this is my wallet. There is an apple and a bottle of water. These are my notebooks for my English lessons. They aren’t heavy!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-things',
            type: 'speaking',
            title: 'Show and tell',
            instructions: 'Візьми кілька речей біля себе й опиши їх уголос. Відповідай повними реченнями.',
            phrases: ['This is a/an…', 'These are…', 'That is…', 'It’s new / old.', 'They’re my…'],
            tasks: [
              { id: 'sp1', q: 'What is on your table now? Name three things.', tips: 'This is a … These are …', model: 'This is a laptop. These are my pens. That is a cup of tea.' },
              { id: 'sp2', q: 'Describe your phone. Is it new or old?', tips: 'My phone is … It’s a … phone.', model: 'My phone is black. It’s an old phone, but it’s good.' },
              { id: 'sp3', q: 'What is your favourite thing? Why?', tips: 'My favourite thing is my …', model: 'My favourite thing is my watch. It’s a present from my mum.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'bag': 'сумка', 'big': 'великий', 'blue': 'синій', 'what': 'що', "what's": 'що є (what is)', "let's see": 'подивімося', 'see': 'бачити',
      'phone': 'телефон', 'new': 'новий', 'old': 'старий', 'these': 'ці', 'those': 'ті', 'this': 'цей, це', 'that': 'той, те', 'key': 'ключ',
      'keys': 'ключі', 'house': 'будинок', 'car': 'машина', 'wallet': 'гаманець', 'empty': 'порожній', "there's": 'є, знаходиться (there is)',
      'money': 'гроші', 'book': 'книга', 'books': 'книги', 'for': 'для', 'school': 'школа', 'heavy': 'важкий', 'umbrella': 'парасолька',
      'glasses': 'окуляри', 'glass': 'склянка; скло', 'apple': 'яблуко', 'apples': 'яблука', 'favourite': 'улюблений', 'snack': 'перекус',
      'your': 'твій', 'my': 'мій', 'colour': 'колір', 'red': 'червоний', 'black': 'чорний', 'brown': 'коричневий', 'green': 'зелений',
      'how many': 'скільки', 'one': 'один', 'two': 'два', 'three': 'три', 'four': 'чотири', 'five': 'п’ять', 'ten': 'десять', 'bad': 'поганий',
      'good': 'хороший', 'banana': 'банан', 'bananas': 'банани', 'sandwich': 'сендвіч', 'sandwiches': 'сендвічі', 'small': 'маленький',
      'pen': 'ручка', 'watch': 'годинник', 'watches': 'годинники', 'bottle': 'пляшка', 'water': 'вода', 'notebook': 'зошит, блокнот',
      'notebooks': 'зошити', 'box': 'коробка', 'boxes': 'коробки', 'city': 'місто', 'cities': 'міста', 'child': 'дитина', 'children': 'діти',
      'man': 'чоловік', 'men': 'чоловіки', 'woman': 'жінка', 'women': 'жінки', 'person': 'людина', 'people': 'люди', 'hour': 'година',
      'university': 'університет', 'egg': 'яйце', 'raining': 'йде дощ', 'where': 'де', 'open': 'відчинити', 'door': 'двері', "can't": 'не можу',
      'can': 'могти', 'call': 'дзвонити', 'me': 'мені', 'lost': 'загублений', 'found': 'знайдений', 'lost and found': 'бюро знахідок',
      'help': 'допомагати', 'yes': 'так', 'please': 'будь ласка', 'about': 'про', 'what about': 'а як щодо', 'there': 'там', 'thank you': 'дякую',
      'very much': 'дуже', 'too': 'теж', 'else': 'ще', 'hers': 'її', 'her': 'її', 'first': 'перший', 'table': 'стіл', 'now': 'зараз',
      'name': 'назвати; ім’я', 'thing': 'річ', 'things': 'речі', 'laptop': 'ноутбук', 'cup': 'чашка', 'tea': 'чай', 'describe': 'описати',
      'why': 'чому', 'present': 'подарунок', 'mum': 'мама', 'lesson': 'урок', 'lessons': 'уроки', 'english': 'англійська', 'in': 'в, у',
      'it': 'воно', "it's": 'це є (it is)', "isn't": 'не є', "aren't": 'не є', "they're": 'вони є', 'everyday': 'повсякденний', 'word': 'слово',
      'words': 'слова', 'many': 'багато', 'show and tell': 'покажи і розкажи', 'show': 'показати', 'tell': 'розповісти', 'anything': 'щось'
    }
  });
})();
