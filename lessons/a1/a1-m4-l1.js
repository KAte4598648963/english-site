/*
 * A1 · Module 4 · Lesson 1 — My home (there is / there are; prepositions of place)
 * Review: a/an, plurals (module 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Flat for rent in Lviv',
    text: `Lovely flat in the city centre — only 10 minutes from the Opera House!

The flat is on the third floor. There are three rooms: a living room, a bedroom and a small kitchen. There is also a bathroom with a shower. There isn’t a bath.

In the living room there is a big sofa and there are two armchairs. There is a TV on the wall and there are a lot of books on the shelves. The table is next to the window.

In the bedroom there is a double bed and a wardrobe. There’s a lamp on the bedside table. There are curtains on the windows.

The kitchen is small, but there is a fridge, a cooker and a washing machine. Is there a dishwasher? No, there isn’t. Are there any balconies? Yes, there is one — with a beautiful view of the old town!

Pets are welcome. Call Olha: 067 123 4567.`
  };

  ENG.registerLesson({
    id: 'a1-m4-l1',
    level: 'a1',
    title: 'My home. Мій дім',
    subtitle: 'there is / there are · прийменники місця · кімнати й меблі',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A flat for rent',
            instructions: 'Прочитай оголошення про оренду квартири й обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is the flat?', options: ['In Kyiv', 'In the centre of Lviv', 'Near the sea'], answer: 1 },
              { id: 'q2', q: 'How many rooms are there?', options: ['Two', 'Three', 'Four'], answer: 1 },
              { id: 'q3', q: 'What is there in the bathroom?', options: ['A bath', 'A shower', 'A bath and a shower'], answer: 1 },
              { id: 'q4', q: 'Where is the table?', options: ['Next to the window', 'In the kitchen', 'Next to the bed'], answer: 0 },
              { id: 'q5', q: 'What can you see from the balcony?', options: ['The sea', 'The old town', 'A park'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The flat is on the second floor.', answer: false, explain: 'It’s on the third floor.' },
              { id: 's2', s: 'There are two armchairs in the living room.', answer: true },
              { id: 's3', s: 'There is a dishwasher in the kitchen.', answer: false, explain: '“Is there a dishwasher? No, there isn’t.”' },
              { id: 's4', s: 'There is a lamp on the bedside table.', answer: true },
              { id: 's5', s: 'Pets are not allowed.', answer: false, explain: '“Pets are welcome.”' }
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
            title: 'Rooms and furniture',
            instructions: 'Кімнати й меблі. Уяви свою квартиру і знайди в ній кожну річ!',
            cards: [
              { front: 'living room', back: 'вітальня', example: 'There is a sofa in the living room.' },
              { front: 'bedroom', back: 'спальня', example: 'My bedroom is small.' },
              { front: 'kitchen', ipa: '/ˈkɪtʃɪn/', back: 'кухня', example: 'We cook in the kitchen.' },
              { front: 'bathroom', back: 'ванна кімната', example: 'There’s a shower in the bathroom.' },
              { front: 'sofa / armchair', back: 'диван / крісло', example: 'There are two armchairs.' },
              { front: 'wardrobe', ipa: '/ˈwɔːdrəʊb/', back: 'шафа для одягу', example: 'My clothes are in the wardrobe.' },
              { front: 'shelf (shelves)', ipa: '/ʃelf/', back: 'полиця (полиці)', example: 'The books are on the shelves.' },
              { front: 'fridge', ipa: '/frɪdʒ/', back: 'холодильник', example: 'The milk is in the fridge.' },
              { front: 'cooker', ipa: '/ˈkʊkə/', back: 'плита', example: 'There is a cooker in the kitchen.' },
              { front: 'washing machine', back: 'пральна машина', example: 'Is there a washing machine?' },
              { front: 'floor', ipa: '/flɔː/', back: 'поверх; підлога', example: 'The flat is on the third floor.' },
              { front: 'curtains', ipa: '/ˈkɜːtnz/', back: 'штори', example: 'There are blue curtains on the windows.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Which room?',
            instructions: 'Де це зазвичай буває? Поєднай річ і кімнату.',
            pairs: [
              ['fridge', 'kitchen'],
              ['bed', 'bedroom'],
              ['shower', 'bathroom'],
              ['sofa', 'living room'],
              ['car', 'garage'],
              ['flowers', 'garden'],
              ['desk', 'study'],
              ['coats', 'hall']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What is it?',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Milk and cheese are in the {{fridge}}.' },
              { id: 'd2', text: 'I put my clothes in the {{wardrobe}}.' },
              { id: 'd3', text: 'We cook on the {{cooker}}.' },
              { id: 'd4', text: 'The books are on the {{shelves}}.' },
              { id: 'd5', text: 'Close the {{curtains}}, it’s night!' },
              { id: 'd6', text: 'Our flat is on the fifth {{floor}}.' }
            ],
            distractors: ['armchair']
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
            title: 'there is / there are + prepositions',
            instructions: 'Як сказати «є, знаходиться» і «де саме». Ці конструкції потрібні щодня!',
            html: `
<h3>1. there is / there are = «є, знаходиться»</h3>
<p>Коли ми вперше кажемо, що <b>щось десь є</b>, англійською починаємо з <b>there is / there are</b>. Українською часто починаємо з місця:</p>
<div class="ex-line">У кімнаті <u>є</u> диван. → <mark>There is</mark> a sofa in the room.</div>
<div class="ex-line">На полицях <u>є</u> книги. → <mark>There are</mark> books on the shelves.</div>
<div class="table-wrap"><table>
  <tr><th></th><th>один (a/an)</th><th>багато (множина)</th></tr>
  <tr><td><b>+</b></td><td><b>There is</b> (There’s) a sofa.</td><td><b>There are</b> two armchairs.</td></tr>
  <tr><td><b>−</b></td><td><b>There isn’t</b> a bath.</td><td><b>There aren’t</b> any balconies.</td></tr>
  <tr><td><b>?</b></td><td><b>Is there</b> a dishwasher?</td><td><b>Are there</b> any chairs?</td></tr>
  <tr><td>коротко</td><td>Yes, there is. / No, there isn’t.</td><td>Yes, there are. / No, there aren’t.</td></tr>
</table></div>
<p>💡 У питаннях і запереченнях з множиною часто додаємо <b>any</b> (якісь): Are there <b>any</b> chairs? There aren’t <b>any</b> pictures.</p>
<p>💡 Скільки? — <b>How many</b> rooms <b>are there</b>? — There are three.</p>

<h3>2. there is чи it is?</h3>
<div class="ex-line"><b>There is</b> a balcony. <b>It is</b> big. <span class="muted">(there is — вводимо нову річ; it is — описуємо її)</span></div>

<h3>3. Прийменники місця — «де?»</h3>
<div class="table-wrap"><table>
  <tr><th>Прийменник</th><th>Значення</th><th>Приклад</th></tr>
  <tr><td><b>in</b></td><td>у, всередині</td><td>The milk is <b>in</b> the fridge.</td></tr>
  <tr><td><b>on</b></td><td>на (поверхні)</td><td>The TV is <b>on</b> the wall.</td></tr>
  <tr><td><b>under</b></td><td>під</td><td>The cat is <b>under</b> the bed.</td></tr>
  <tr><td><b>next to</b></td><td>поруч з</td><td>The table is <b>next to</b> the window.</td></tr>
  <tr><td><b>behind</b></td><td>за, позаду</td><td>The bike is <b>behind</b> the door.</td></tr>
  <tr><td><b>in front of</b></td><td>перед</td><td>The car is <b>in front of</b> the house.</td></tr>
  <tr><td><b>between</b></td><td>між</td><td>The sofa is <b>between</b> the armchairs.</td></tr>
  <tr><td><b>opposite</b></td><td>навпроти</td><td>The bank is <b>opposite</b> the shop.</td></tr>
</table></div>
<p>Також: <b>on</b> the third floor (на третьому поверсі), <b>in</b> the city centre.</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">In my room is a sofa.</span> → <span class="yes">There is a sofa in my room.</span><br>
<span class="no">There is two beds.</span> → <span class="yes">There are two beds.</span><br>
<span class="no">There are a sofa.</span> → <span class="yes">There is a sofa.</span><br>
<span class="no">The picture is in the wall.</span> → <span class="yes">The picture is on the wall.</span></div>`
          },
          {
            id: 'gram-isare',
            type: 'gap',
            title: 'There is or there are?',
            instructions: 'Встав is або are (+), isn’t або aren’t (−).',
            items: [
              { id: 'g1', text: 'There {{is}} a sofa in the living room.' },
              { id: 'g2', text: 'There {{are}} three rooms in the flat.' },
              { id: 'g3', text: 'There {{isn’t|is not}} a bath. (−)' },
              { id: 'g4', text: 'There {{are}} a lot of books on the shelves.' },
              { id: 'g5', text: 'There {{aren’t|are not}} any pictures on the walls. (−)' },
              { id: 'g6', text: '{{Is}} there a washing machine? — Yes, there is.' },
              { id: 'g7', text: 'How many windows {{are}} there?' }
            ]
          },
          {
            id: 'gram-prep',
            type: 'choice',
            title: 'Where is it?',
            instructions: 'Обери прийменник, що відповідає перекладу в дужках.',
            items: [
              { id: 'p1', q: 'The cat is ___ the bed. (під)', options: ['on', 'under', 'in'], answer: 1 },
              { id: 'p2', q: 'The lamp is ___ the table. (на)', options: ['on', 'in', 'behind'], answer: 0 },
              { id: 'p3', q: 'The milk is ___ the fridge. (у)', options: ['on', 'in', 'next to'], answer: 1 },
              { id: 'p4', q: 'The sofa is ___ the two armchairs. (між)', options: ['opposite', 'between', 'behind'], answer: 1 },
              { id: 'p5', q: 'The car is ___ the house. (перед)', options: ['in front of', 'behind', 'under'], answer: 0 },
              { id: 'p6', q: 'The table is ___ the window. (поруч)', options: ['between', 'next to', 'in'], answer: 1 },
              { id: 'p7', q: 'Our flat is ___ the second floor.', options: ['in', 'on', 'at'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення. Почни з There, якщо кажеш, що щось є.',
            items: [
              { id: 'o1', prompt: 'У спальні є шафа.', answer: 'There is a wardrobe in the bedroom.', extra: ['are'] },
              { id: 'o2', prompt: 'На кухні є два стільці.', answer: 'There are two chairs in the kitchen.' },
              { id: 'o3', prompt: 'Чи є тут балкон?', answer: 'Is there a balcony?' },
              { id: 'o4', prompt: 'Кіт під диваном.', answer: 'The cat is under the sofa.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: a / an, множина',
            instructions: 'Згадаймо модуль 1. Встав a / an або напиши множину.',
            items: [
              { id: 'r1', text: 'There is {{an}} armchair next to the sofa.' },
              { id: 'r2', text: 'There is {{a}} wardrobe in the bedroom.' },
              { id: 'r3', text: 'one shelf → two {{shelves}}' },
              { id: 'r4', text: 'one box → three {{boxes}}' },
              { id: 'r5', text: 'There are two {{balconies}}. (balcony)' }
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
            title: 'Where are my keys?',
            instructions: 'Олексій не може знайти речі. Його дівчина допомагає. Послухай.',
            audio: {
              title: 'Dialogue: Oleksii & Maria',
              lines: [
                { who: 'Oleksii', text: 'Maria, where are my keys? I’m late!' },
                { who: 'Maria', text: 'Are they on the table in the hall?' },
                { who: 'Oleksii', text: 'No, they aren’t. There’s only a newspaper there.' },
                { who: 'Maria', text: 'Look in your jacket. It’s behind the door.' },
                { who: 'Oleksii', text: 'Yes! Here they are. And my phone? Is it in the kitchen?' },
                { who: 'Maria', text: 'No, it’s in the living room, on the sofa, between the cushions.' },
                { who: 'Oleksii', text: 'Thank you! And where is my bag?' },
                { who: 'Maria', text: 'It’s under your desk, next to the cat!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is on the table in the hall?', options: ['The keys', 'A newspaper', 'A phone'], answer: 1 },
              { id: 'l2', q: 'Where are the keys?', options: ['In his jacket', 'In the kitchen', 'Under the desk'], answer: 0 },
              { id: 'l3', q: 'Where is the jacket?', options: ['On the sofa', 'Behind the door', 'In the wardrobe'], answer: 1 },
              { id: 'l4', q: 'The phone is…', options: ['in the kitchen', 'on the sofa', 'under the desk'], answer: 1 },
              { id: 'l5', q: 'What is next to the bag?', options: ['The cat', 'The keys', 'A newspaper'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'There is a sofa in the living room.' },
              { id: 'dc2', text: 'Are there any chairs?' },
              { id: 'dc3', text: 'The bag is under the desk.' },
              { id: 'dc4', text: 'There aren’t any pictures.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-home',
            type: 'writing',
            title: 'My home',
            instructions: 'Опиши свою квартиру чи будинок (або квартиру мрії). Використай there is / there are і прийменники.',
            prompt: 'Describe your home (70–90 words).\n• Is it a flat or a house? Where is it? Which floor?\n• How many rooms are there?\n• Describe two rooms: what is there and where (next to, under, on…).\n• Write one negative: There isn’t / There aren’t…\n• What is your favourite room?',
            minWords: 70,
            maxWords: 100,
            phrases: ['I live in', 'There is', 'There are', 'There isn’t', 'next to', 'on the wall', 'My favourite room'],
            checklist: ['there is + однина, there are + множина', 'Є 3–4 різні прийменники місця', 'Є заперечення there isn’t / aren’t', 'Є питання How many…? або відповідь на нього'],
            model: `I live in a flat in Dnipro. It’s on the seventh floor. There are two rooms, a kitchen and a bathroom.

In the living room there is a big grey sofa and there is a TV on the wall opposite the sofa. There are a lot of plants next to the window. There isn’t a table — we eat in the kitchen.

The kitchen is small, but it’s cosy. There is a round table between two chairs. There are pictures of my family on the fridge. My favourite room is the kitchen!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-home',
            type: 'speaking',
            title: 'A tour of your home',
            instructions: 'Проведи «екскурсію» своєю квартирою уголос. Можеш ходити кімнатами і описувати!',
            phrases: ['This is the…', 'There is…', 'There are…', 'next to', 'opposite', 'There isn’t…'],
            tasks: [
              { id: 'sp1', q: 'What room are you in now? What is there?', tips: 'I’m in the … There is … There are …', model: 'I’m in the bedroom. There is a bed, a wardrobe and a desk. There are books on the desk.' },
              { id: 'sp2', q: 'Where are your keys, phone and bag now?', tips: 'My keys are on/in/under …', model: 'My keys are in my bag. My bag is on the chair, next to the door.' },
              { id: 'sp3', q: 'Describe your dream home.', tips: 'In my dream home there is … There are …', model: 'In my dream home there is a big garden and a swimming pool. There are five bedrooms.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'flat': 'квартира', 'rent': 'оренда', 'for rent': 'в оренду', 'lovely': 'чудовий', 'city centre': 'центр міста', 'centre': 'центр', 'only': 'лише',
      'minutes': 'хвилини', 'opera house': 'оперний театр', 'third': 'третій', 'second': 'другий', 'fifth': 'п’ятий', 'seventh': 'сьомий', 'floor': 'поверх; підлога',
      'there is': 'є (одне)', 'there are': 'є (багато)', "there's": 'є (there is)', "there isn't": 'немає', "there aren't": 'немає', 'rooms': 'кімнати',
      'room': 'кімната', 'living room': 'вітальня', 'bedroom': 'спальня', 'small': 'маленький', 'kitchen': 'кухня', 'also': 'також', 'bathroom': 'ванна кімната',
      'shower': 'душ', 'bath': 'ванна', 'big': 'великий', 'sofa': 'диван', 'armchairs': 'крісла', 'armchair': 'крісло', 'tv': 'телевізор', 'wall': 'стіна',
      'walls': 'стіни', 'a lot of': 'багато', 'books': 'книги', 'shelves': 'полиці', 'shelf': 'полиця', 'table': 'стіл', 'next to': 'поруч з', 'window': 'вікно',
      'windows': 'вікна', 'double bed': 'двоспальне ліжко', 'bed': 'ліжко', 'wardrobe': 'шафа', 'lamp': 'лампа', 'bedside table': 'тумбочка', 'curtains': 'штори',
      'fridge': 'холодильник', 'cooker': 'плита', 'washing machine': 'пральна машина', 'dishwasher': 'посудомийна машина', 'any': 'якісь', 'balconies': 'балкони',
      'balcony': 'балкон', 'one': 'один', 'beautiful': 'гарний', 'view': 'вид', 'old town': 'старе місто', 'pets': 'домашні тварини', 'welcome': 'ласкаво просимо, дозволені',
      'call': 'дзвонити', 'allowed': 'дозволено', 'sea': 'море', 'park': 'парк', 'centre of': 'центр', 'garage': 'гараж', 'garden': 'сад', 'flowers': 'квіти',
      'desk': 'письмовий стіл', 'study': 'кабінет', 'coats': 'пальта', 'hall': 'передпокій', 'car': 'машина', 'milk': 'молоко', 'cheese': 'сир',
      'put': 'класти', 'clothes': 'одяг', 'cook': 'готувати', 'close': 'закрити', 'night': 'ніч', 'under': 'під', 'behind': 'за, позаду', 'in front of': 'перед',
      'between': 'між', 'opposite': 'навпроти', 'cat': 'кіт', 'bike': 'велосипед', 'door': 'двері', 'house': 'будинок', 'bank': 'банк', 'shop': 'магазин',
      'chairs': 'стільці', 'chair': 'стілець', 'pictures': 'картини', 'picture': 'картина', 'how many': 'скільки', 'box': 'коробка', 'boxes': 'коробки',
      'keys': 'ключі', 'late': 'запізнююсь', 'newspaper': 'газета', 'look': 'подивись', 'jacket': 'куртка', 'here they are': 'ось вони', 'phone': 'телефон',
      'cushions': 'подушки (диванні)', 'bag': 'сумка', 'live': 'жити', 'grey': 'сірий', 'plants': 'рослини', 'eat': 'їсти', 'cosy': 'затишний',
      'round': 'круглий', 'family': 'сім’я', 'favourite': 'улюблений', 'tour': 'екскурсія', 'now': 'зараз', 'dream home': 'дім мрії', 'swimming pool': 'басейн',
      'five': 'п’ять', 'where': 'де', "it's": 'це є', "i'm": 'я є'
    }
  });
})();
