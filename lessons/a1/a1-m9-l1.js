/*
 * A1 · Module 9 · Lesson 1 — Months & dates (ordinal numbers, saying dates)
 * Adult-friendly: one rule, step by step; 15 new words recycled in every section.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const STORY = {
    title: 'A Birthday Every Four Years',
    text: `Hello! My name is Tom Harris and I live in Brighton, on the south coast of England. I’m a primary school teacher. I’m forty years old, but in a way I’m only ten!

Why? Because my birthday is the twenty-ninth of February. February usually has twenty-eight days, but every four years it has twenty-nine. We call this a leap year. So my real birthday comes only once every four years.

What happens in the other years? It’s a family joke. My wife, Emma, says my birthday is the twenty-eighth of February. My mum says it’s the first of March. So I have two small parties every year, and two birthday cakes!

The rest of my family have easy birthdays. Emma’s birthday is the fifth of May. Our son, Jack, has his birthday on the twelfth of December, two weeks before Christmas. And our daughter, Lily, has her birthday on the first of January, New Year’s Day. ‘Everyone has a party for my birthday!’ she always says.

Every January I buy a new calendar and look for the twenty-ninth of February. In 2028 it’s there again. It’s a Tuesday, but I don’t want to work that day. I want a day off and a big party with all my friends!`
  };

  const PICTURES = [
    { src: 'media/a1/m9/poster.jpg', caption: 'A — A POSTER', alt: 'Brighton Coffee Festival. Coffee from 20 countries, music and cakes! Start: Friday, the 3rd of October. Last day: Monday, the 6th of October.' },
    { src: 'media/a1/m9/message.jpg', caption: 'B — A TEXT MESSAGE', alt: 'Smile Dental Clinic: Hello, Mr Clarke! Your appointment is Tuesday, the 21st of January, at 9:30. Can’t come? Please call us before the 19th of January. Thank you!' },
    { src: 'media/a1/m9/invitation.jpg', caption: 'C — AN INVITATION', alt: 'Dear Sophie, Olivia and Mark are getting married! Please come to our wedding. Date: Saturday, the 14th of June. Please answer before the 1st of May. Love, Olivia & Mark.' }
  ];

  ENG.registerLesson({
    id: 'a1-m9-l1',
    level: 'a1',
    title: 'Months & dates',
    subtitle: 'Місяці · порядкові числівники (first, second…) · як сказати дату',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A Birthday Every Four Years',
            instructions: 'Прочитай історію Тома. Потім дай відповідь на кожне питання: обери один правильний варіант із трьох.',
            passage: STORY,
            items: [
              { id: 'q1', q: 'Where does Tom live?', options: ['In London', 'In Brighton', 'In Bristol'], answer: 1 },
              { id: 'q2', q: 'When is Tom’s real birthday?', options: ['the 28th of February', 'the 29th of February', 'the 1st of March'], answer: 1 },
              { id: 'q3', q: 'What is a leap year?', options: ['A year with a big party', 'A year when February has 29 days', 'A year with two birthdays'], answer: 1 },
              { id: 'q4', q: 'What date is Tom’s birthday for his mum?', options: ['the 1st of March', 'the 28th of February', 'the 5th of May'], answer: 0 },
              { id: 'q5', q: 'When is Jack’s birthday?', options: ['the 1st of January', 'the 5th of May', 'the 12th of December'], answer: 2 },
              { id: 'q6', q: 'What does Tom want in 2028?', options: ['A new calendar', 'A day off and a big party', 'Two birthday cakes'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Прочитай кожне речення. Якщо так написано в тексті — натисни True. Якщо ні — False.',
            passage: STORY,
            items: [
              { id: 's1', s: 'Tom is a teacher.', answer: true },
              { id: 's2', s: 'February usually has twenty-nine days.', answer: false, explain: 'Зазвичай 28. 29 днів — тільки раз на чотири роки (leap year).' },
              { id: 's3', s: 'Tom has one big party every year.', answer: false, explain: 'Дві маленькі вечірки і два торти.' },
              { id: 's4', s: 'Emma says Tom’s birthday is the first of March.', answer: false, explain: 'Це каже мама. Emma каже: the twenty-eighth of February.' },
              { id: 's5', s: 'Emma’s birthday is the fifteenth of May.', answer: false, explain: 'the fifth (5-те), а не the fifteenth (15-те).' },
              { id: 's6', s: 'Lily’s birthday is New Year’s Day.', answer: true },
              { id: 's7', s: 'The 29th of February 2028 is a Tuesday.', answer: true, explain: '“In 2028 it’s there again. It’s a Tuesday.”' }
            ]
          },
          {
            id: 'read-match',
            type: 'match',
            title: 'A poster, a message, an invitation',
            instructions: 'Подивись на три картинки: A — афіша, B — повідомлення від стоматолога, C — запрошення на весілля. Натисни на картинку, щоб збільшити її. Потім поєднай: ліворуч — питання, праворуч — дати. Натисни на питання, а потім на правильну дату.',
            images: PICTURES,
            pairs: [
              ['A: When does the festival start?', 'the 3rd of October'],
              ['A: What is the last day of the festival?', 'the 6th of October'],
              ['B: When is Mr Clarke’s appointment?', 'the 21st of January'],
              ['B: Call the clinic before…', 'the 19th of January'],
              ['C: When is the wedding?', 'the 14th of June'],
              ['C: Answer Olivia and Mark before…', 'the 1st of May']
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
            title: '15 new words',
            instructions: 'Це всі нові слова уроку: 12 місяців і 3 корисні слова. Натисни на картку, щоб побачити переклад. Прочитай приклад уголос.',
            cards: [
              { front: 'January', ipa: '/ˈdʒænjuəri/', back: 'січень', example: 'New Year’s Day is the first of January.' },
              { front: 'February', ipa: '/ˈfebruəri/', back: 'лютий', example: 'February is short: only 28 days.' },
              { front: 'March', ipa: '/mɑːtʃ/', back: 'березень', example: 'March is the first month of spring.' },
              { front: 'April', ipa: '/ˈeɪprəl/', back: 'квітень', example: 'April is often rainy.' },
              { front: 'May', ipa: '/meɪ/', back: 'травень', example: 'My wife’s birthday is the fifth of May.' },
              { front: 'June', ipa: '/dʒuːn/', back: 'червень', example: 'June is the first month of summer.' },
              { front: 'July', ipa: '/dʒuˈlaɪ/', back: 'липень', example: 'July is usually hot.' },
              { front: 'August', ipa: '/ˈɔːɡəst/', back: 'серпень', example: 'Independence Day is the 24th of August.' },
              { front: 'September', ipa: '/sepˈtembə/', back: 'вересень', example: 'September is the start of the school year.' },
              { front: 'October', ipa: '/ɒkˈtəʊbə/', back: 'жовтень', example: 'October is yellow and red.' },
              { front: 'November', ipa: '/nəʊˈvembə/', back: 'листопад', example: 'November is cold and grey.' },
              { front: 'December', ipa: '/dɪˈsembə/', back: 'грудень', example: 'Christmas is the 25th of December.' },
              { front: 'a date', ipa: '/deɪt/', back: 'дата, число', example: 'What’s the date today?' },
              { front: 'a calendar', ipa: '/ˈkælɪndə/', back: 'календар', example: 'There’s a calendar on the wall.' },
              { front: 'a day off', back: 'вихідний (день)', example: 'Saturday is my day off.' }
            ]
          },
          {
            id: 'vocab-seasons',
            type: 'sort',
            title: 'Months and seasons',
            instructions: 'Розклади 12 місяців за порами року. Натисни на місяць, а потім на потрібну колонку (або перетягни його).',
            columns: [
              { title: 'Winter', ua: 'зима', items: ['December', 'January', 'February'] },
              { title: 'Spring', ua: 'весна', items: ['March', 'April', 'May'] },
              { title: 'Summer', ua: 'літо', items: ['June', 'July', 'August'] },
              { title: 'Autumn', ua: 'осінь', items: ['September', 'October', 'November'] }
            ]
          },
          {
            id: 'vocab-gap',
            type: 'gap',
            title: 'Which month is missing?',
            instructions: 'Якого місяця не вистачає? Напиши його англійською в порожнє поле. Велика чи мала літера — не важливо.',
            items: [
              { id: 'g1', text: 'January, February, {{March}}', hint: 'березень' },
              { id: 'g2', text: '{{April}}, May, June', hint: 'квітень' },
              { id: 'g3', text: 'July, {{August}}, September', hint: 'серпень' },
              { id: 'g4', text: 'October, November, {{December}}', hint: 'грудень' },
              { id: 'g5', text: 'The month after June is {{July}}.', hint: 'after = після' },
              { id: 'g6', text: 'The month before February is {{January}}.', hint: 'before = перед' }
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Use the new words',
            instructions: 'Перетягни (або натисни) правильне слово в кожен пропуск. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'What’s the {{date}} today?' },
              { id: 'd2', text: 'Look at the {{calendar}}: the 1st of May is a Friday.' },
              { id: 'd3', text: 'I don’t work. Sunday is my {{day off}}.' },
              { id: 'd4', text: 'Christmas is the 25th of {{December}}.' },
              { id: 'd5', text: 'Independence Day is the 24th of {{August}}.' },
              { id: 'd6', text: 'Valentine’s Day is the 14th of {{February}}.' }
            ],
            distractors: ['March']
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
            title: 'First, second, third… Як сказати дату',
            instructions: 'Читай по кроках, зверху вниз. Кожен крок — одна маленька думка.',
            html: `
<h3>Крок 1. Навіщо це потрібно</h3>
<div class="table-wrap"><table>
  <tr><th>Звичайне число — «скільки?»</th><th>Порядкове число — «який?»</th></tr>
  <tr><td><b>five</b> — п’ять</td><td><b>fifth</b> — п’ятий</td></tr>
  <tr><td>I have <b>five</b> books.</td><td>Today is the <b>fifth</b> of May.</td></tr>
</table></div>
<div class="tip">💡 Ми кажемо «<b>п’яте</b> травня», а не «п’ять травня». Англійці — так само. Тому для дат потрібні <b>порядкові</b> числа.</div>

<h3>Крок 2. Головне правило: число + th</h3>
<div class="table-wrap"><table>
  <tr><th>Число</th><th>Порядкове</th><th>Коротко</th></tr>
  <tr><td>four</td><td>four<b>th</b></td><td>4th</td></tr>
  <tr><td>six</td><td>six<b>th</b></td><td>6th</td></tr>
  <tr><td>seven</td><td>seven<b>th</b></td><td>7th</td></tr>
  <tr><td>ten</td><td>ten<b>th</b></td><td>10th</td></tr>
  <tr><td>fourteen</td><td>fourteen<b>th</b></td><td>14th</td></tr>
</table></div>
<p>Так утворюється <b>більшість</b> чисел: 4, 6, 7, 10, 11, 13–19.</p>

<h3>Крок 3. Три винятки: 1, 2, 3</h3>
<p>Ці три слова просто запам’ятай:</p>
<div class="table-wrap"><table>
  <tr><th>Число</th><th>Порядкове</th><th>Коротко</th></tr>
  <tr><td>one</td><td><b>first</b></td><td>1<b>st</b></td></tr>
  <tr><td>two</td><td><b>second</b></td><td>2<b>nd</b></td></tr>
  <tr><td>three</td><td><b>third</b></td><td>3<b>rd</b></td></tr>
</table></div>
<div class="tip">💡 Коротка форма = <b>дві останні літери слова</b>: fir<b>st</b> → 1st, seco<b>nd</b> → 2nd, thi<b>rd</b> → 3rd, four<b>th</b> → 4th.</div>

<h3>Крок 4. Шість слів, де трохи змінюється написання</h3>
<div class="table-wrap"><table>
  <tr><th>Число</th><th>Порядкове</th><th>Що змінюється</th></tr>
  <tr><td>five</td><td><b>fifth</b></td><td>ve → f</td></tr>
  <tr><td>twelve</td><td><b>twelfth</b></td><td>ve → f</td></tr>
  <tr><td>eight</td><td><b>eighth</b></td><td>тільки + h</td></tr>
  <tr><td>nine</td><td><b>ninth</b></td><td>e зникає</td></tr>
  <tr><td>twenty</td><td><b>twentieth</b></td><td>y → ie + th</td></tr>
  <tr><td>thirty</td><td><b>thirtieth</b></td><td>y → ie + th</td></tr>
</table></div>

<h3>Крок 5. Числа 21–31: змінюється тільки кінець</h3>
<p>Перша частина (twenty / thirty) <b>не змінюється</b>. Останню цифру роби за кроками 2–4.</p>
<div class="table-wrap"><table>
  <tr><th>Число</th><th>Порядкове</th><th>Коротко</th></tr>
  <tr><td>twenty-one</td><td>twenty-<b>first</b></td><td>21st</td></tr>
  <tr><td>twenty-two</td><td>twenty-<b>second</b></td><td>22nd</td></tr>
  <tr><td>twenty-three</td><td>twenty-<b>third</b></td><td>23rd</td></tr>
  <tr><td>twenty-four</td><td>twenty-<b>fourth</b></td><td>24th</td></tr>
  <tr><td>thirty-one</td><td>thirty-<b>first</b></td><td>31st</td></tr>
</table></div>

<h3>Крок 6. Як сказати дату</h3>
<p>Пишемо коротко, а кажемо за формулою:</p>
<div class="formula"><span class="f-aux">the</span><span class="f-op">+</span><span class="f-v">порядкове число</span><span class="f-op">+</span><span class="f-aux">of</span><span class="f-op">+</span><span class="f-s">місяць</span></div>
<div class="table-wrap"><table>
  <tr><th>Пишемо</th><th>Кажемо</th></tr>
  <tr><td>5 May</td><td><b>the</b> fifth <b>of</b> May</td></tr>
  <tr><td>1 January</td><td><b>the</b> first <b>of</b> January</td></tr>
  <tr><td>24 August</td><td><b>the</b> twenty-fourth <b>of</b> August</td></tr>
</table></div>

<h3>Крок 7. Як утворюється: формули</h3>
<p class="formula-legend"><span class="f-s">Підмет</span> <span class="f-aux">is</span> <span class="f-v">Дата</span> <span class="f-neg">not</span></p>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b></td>
      <td><div class="formula"><span class="f-s">It / My birthday</span><span class="f-op">+</span><span class="f-aux">is</span><span class="f-op">+</span><span class="f-v">дата</span></div></td>
      <td>It<b>’s</b> the fifth of May.<br>My birthday <b>is</b> the twelfth of December.</td></tr>
  <tr><td><b>−</b></td>
      <td><div class="formula"><span class="f-s">It</span><span class="f-op">+</span><span class="f-aux">is</span><span class="f-op">+</span><span class="f-neg">not</span><span class="f-op">+</span><span class="f-v">дата</span></div></td>
      <td>It <b>isn’t</b> the fifth of May.</td></tr>
  <tr><td><b>?</b></td>
      <td><div class="formula"><span class="f-aux">Is</span><span class="f-op">+</span><span class="f-s">it</span><span class="f-op">+</span><span class="f-v">дата</span><span class="f-op">?</span></div></td>
      <td><b>Is</b> it the fifth of May today?</td></tr>
  <tr><td><b>?</b> з питальним словом</td>
      <td><div class="formula"><span class="f-s">What / When</span><span class="f-op">+</span><span class="f-aux">is</span><span class="f-op">+</span><span class="f-s">…</span><span class="f-op">?</span></div></td>
      <td><b>What’s</b> the date today?<br><b>When’s</b> your birthday?</td></tr>
  <tr><td>Короткі відповіді</td>
      <td><div class="formula"><span class="f-s">Yes / No, it</span><span class="f-op">+</span><span class="f-aux">is</span><span class="f-op">(</span><span class="f-neg">n’t</span><span class="f-op">)</span></div></td>
      <td>Yes, it <b>is</b>. / No, it <b>isn’t</b>.</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">It’s fifth May.</span> → <span class="yes">It’s the fifth of May.</span> (не забувай <b>the</b> і <b>of</b>)<br>
<span class="no">the fiveth</span> → <span class="yes">the fifth</span> (крок 4)<br>
<span class="no">the twenty-oneth</span> → <span class="yes">the twenty-first</span> (крок 5)<br>
<span class="no">My birthday is the 5 of May.</span> → <span class="yes">My birthday is the 5th of May.</span></div>`
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Which word is correct?',
            instructions: 'Подивись на число і обери правильне порядкове слово. Якщо сумніваєшся — повернись до кроків 2–5 у правилі.',
            items: [
              { id: 'c1', q: '1 → the ___ of March', options: ['oneth', 'first', 'one'], answer: 1, explain: 'Крок 3: one → first.' },
              { id: 'c2', q: '3 → the ___ of April', options: ['third', 'threeth', 'three'], answer: 0, explain: 'Крок 3: three → third.' },
              { id: 'c3', q: '5 → the ___ of May', options: ['fiveth', 'fifth', 'five'], answer: 1, explain: 'Крок 4: ve → f.' },
              { id: 'c4', q: '7 → the ___ of July', options: ['sevenst', 'seventh', 'sevend'], answer: 1, explain: 'Крок 2: seven + th.' },
              { id: 'c5', q: '9 → the ___ of October', options: ['nineth', 'ninth', 'nine'], answer: 1, explain: 'Крок 4: e зникає.' },
              { id: 'c6', q: '12 → the ___ of June', options: ['twelfth', 'twelveth', 'twelve'], answer: 0, explain: 'Крок 4: ve → f.' },
              { id: 'c7', q: '22 → the ___ of November', options: ['twenty-twoth', 'twenty-second', 'twentieth-second'], answer: 1, explain: 'Крок 5: змінюється тільки кінець: two → second.' }
            ]
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Say the date',
            instructions: 'Ліворуч — дата, як її пишуть. Напиши в поле порядкове число словами, як його кажуть. Зразок: 5 May → the fifth of May.',
            items: [
              { id: 'w1', text: '2 March → the {{second}} of March', hint: 'крок 3' },
              { id: 'w2', text: '8 August → the {{eighth}} of August', hint: 'крок 4: тільки + h' },
              { id: 'w3', text: '13 July → the {{thirteenth}} of July', hint: 'крок 2: + th' },
              { id: 'w4', text: '12 December → the {{twelfth}} of December', hint: 'крок 4: ve → f' },
              { id: 'w5', text: '21 September → the {{twenty-first|twenty first}} of September', hint: 'крок 5' },
              { id: 'w6', text: '30 November → the {{thirtieth}} of November', hint: 'крок 4: y → ie + th' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Make sentences',
            instructions: 'Склади англійське речення з поданих слів. Переклад речення — над словами. Потрібні всі слова.',
            items: [
              { id: 'o1', prompt: 'Яке сьогодні число?', answer: 'What’s the date today?' },
              { id: 'o2', prompt: 'Сьогодні третє березня.', answer: 'It’s the third of March.' },
              { id: 'o3', prompt: 'Коли твій день народження?', answer: 'When’s your birthday?' },
              { id: 'o4', prompt: 'Мій день народження — двадцять перше квітня.', answer: 'My birthday is the twenty-first of April.' },
              { id: 'o5', prompt: 'Сьогодні не п’яте травня.', answer: 'It isn’t the fifth of May.' },
              { id: 'o6', prompt: 'Сьогодні перше січня?', answer: 'Is it the first of January today?' }
            ]
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-dates',
            type: 'speaking',
            title: 'Dates in my life',
            instructions: 'Відповідай уголос на кожне питання. Під питанням є підказка, з чого почати речення. Короткі відповіді — це нормально.',
            phrases: ['It’s the … of …', 'My birthday is…', 'His / Her birthday is…', 'My mum’s / son’s birthday is…', 'Yes, it is. / No, it isn’t.', 'My favourite month is… because…', '… is a day off.'],
            tasks: [
              { id: 'sp1', q: 'When’s your birthday?', tips: 'My birthday is the … of …', model: 'My birthday is the eighteenth of October.' },
              { id: 'sp2', q: 'What’s the date today? And tomorrow?', tips: 'Today is the … Tomorrow is the …', model: 'Today is the twenty-fifth of November. Tomorrow is the twenty-sixth of November.' },
              { id: 'sp3', q: 'Ask your teacher (or a partner): “When’s your birthday?” Then tell everyone the answer.', tips: 'His / Her birthday is the …', model: '— When’s your birthday? — It’s the third of June. — Her birthday is the third of June.' },
              { id: 'sp4', q: 'Your teacher says a wrong date: “Is it the first of March today?” Say “No” and the correct date.', tips: 'No, it isn’t. It’s the …', model: 'No, it isn’t. It’s the twenty-fifth of November.' },
              { id: 'sp5', q: 'Name three birthdays in your family.', tips: 'My mum’s birthday is… My son’s birthday is…', model: 'My mum’s birthday is the second of April. My husband’s birthday is the ninth of July. My son’s birthday is the thirtieth of January.' },
              { id: 'sp6', q: 'What’s your favourite month? Why?', tips: 'My favourite month is … because it’s … / because my … is …', model: 'My favourite month is May because it’s warm and sunny. And my birthday is the fifth of May!' },
              { id: 'sp7', q: 'Name two holidays in Ukraine and their dates. Are they days off for you?', tips: '… is the … of … It’s a day off for me. / I work.', model: 'Christmas is the twenty-fifth of December. New Year’s Day is the first of January. It’s a day off for me.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-calendar',
            type: 'writing',
            title: 'My calendar',
            instructions: 'Домашнє завдання. Напиши 5–7 речень про важливі дати у твоєму році. Відповідай на 4 пункти по черзі. Користуйся фразами нижче.',
            prompt: 'Write 40–60 words.\n1. When is your birthday?\n2. When are the birthdays of two people in your family?\n3. What is your favourite holiday? What is the date?\n4. What is your favourite month? Why?',
            minWords: 40,
            maxWords: 70,
            phrases: ['My birthday is the … of …', 'My … ’s birthday is…', 'My favourite holiday is…', 'It’s the … of …', 'It’s a day off.', 'My favourite month is… because…'],
            checklist: ['Кожна дата: the + порядкове число + of + місяць', 'Місяці пишемо з великої літери: May, June', 'Перевір: first, second, third, fifth, twelfth', 'Є відповіді на всі 4 пункти'],
            model: `My birthday is the eighteenth of October. My mum’s birthday is the second of April, and my brother’s birthday is the twenty-third of July.

My favourite holiday is New Year’s Day. It’s the first of January, and it’s a day off.

My favourite month is May because it’s warm and sunny.`
          }
        ]
      }
    ],

    glossary: {
      'january': 'січень', 'february': 'лютий', 'march': 'березень', 'april': 'квітень', 'may': 'травень', 'june': 'червень',
      'july': 'липень', 'august': 'серпень', 'september': 'вересень', 'october': 'жовтень', 'november': 'листопад', 'december': 'грудень',
      'date': 'дата, число', 'calendar': 'календар', 'day off': 'вихідний', 'days off': 'вихідні',
      'first': 'перший', 'second': 'другий', 'third': 'третій', 'fourth': 'четвертий', 'fifth': 'п’ятий', 'sixth': 'шостий', 'seventh': 'сьомий',
      'eighth': 'восьмий', 'ninth': 'дев’ятий', 'tenth': 'десятий', 'twelfth': 'дванадцятий', 'thirteenth': 'тринадцятий', 'fourteenth': 'чотирнадцятий',
      'fifteenth': 'п’ятнадцятий', 'twentieth': 'двадцятий', 'thirtieth': 'тридцятий', 'twenty-first': 'двадцять перший', 'twenty-eighth': 'двадцять восьмий',
      'twenty-ninth': 'двадцять дев’ятий', 'twenty-fourth': 'двадцять четвертий', 'twenty-fifth': 'двадцять п’ятий',
      'birthday': 'день народження', 'years old': 'років', 'forty': 'сорок', 'why': 'чому', 'because': 'тому що', 'usually': 'зазвичай',
      'only': 'лише', 'every four years': 'раз на чотири роки', 'every': 'кожен', 'real': 'справжній', 'what happens': 'що відбувається',
      'other': 'інший', 'years': 'роки', 'wife': 'дружина', 'mum': 'мама', 'says': 'каже', 'small': 'маленький', 'party': 'вечірка, свято',
      'parties': 'вечірки', 'every year': 'щороку', 'easy': 'легкий', 'family': 'сім’я', 'son': 'син', 'daughter': 'донька',
      "new year's day": 'Новий рік (1 січня)', 'always': 'завжди', 'whole': 'цілий', 'country': 'країна', 'take': 'беру', 'new': 'новий',
      'look at': 'дивитися на', 'again': 'знову', 'special': 'особливий', 'want': 'хочу', 'big': 'великий', 'friends': 'друзі',
      'month': 'місяць', 'months': 'місяці', 'short': 'короткий', 'spring': 'весна', 'summer': 'літо', 'autumn': 'осінь', 'winter': 'зима',
      'season': 'пора року', 'seasons': 'пори року', 'rainy': 'дощовий', 'hot': 'спекотний', 'independence day': 'День Незалежності',
      'start': 'початок; починатися', 'school year': 'навчальний рік', 'yellow': 'жовтий', 'red': 'червоний', 'cold': 'холодний', 'grey': 'сірий',
      'christmas': 'Різдво', "valentine's day": 'День святого Валентина', 'wall': 'стіна', 'work': 'працювати', 'today': 'сьогодні', 'tomorrow': 'завтра',
      'poster': 'афіша, плакат', 'festival': 'фестиваль', 'coffee': 'кава', 'countries': 'країни', 'music': 'музика', 'cakes': 'тістечка',
      'last day': 'останній день', 'last': 'останній', 'text message': 'текстове повідомлення', 'message': 'повідомлення', 'dental clinic': 'стоматологія',
      'dental': 'стоматологічний', 'clinic': 'клініка', 'dentist': 'стоматолог', 'appointment': 'запис (на прийом)', "can't come": 'не можете прийти',
      'call': 'зателефонувати', 'before': 'до, перед', 'after': 'після', 'thank you': 'дякую', 'invitation': 'запрошення', 'dear': 'дорогий, дорога',
      'getting married': 'одружуються', 'come': 'прийти', 'wedding': 'весілля', 'answer': 'відповісти; відповідь', 'love': 'з любов’ю',
      'when': 'коли', 'live': 'жити', 'south coast': 'південне узбережжя', 'coast': 'узбережжя', 'england': 'Англія', 'primary school': 'початкова школа',
      'teacher': 'вчитель', 'in a way': 'у певному сенсі', 'leap year': 'високосний рік', 'we call this': 'ми називаємо це', 'comes': 'буває, настає',
      'once': 'один раз', 'joke': 'жарт', 'birthday cakes': 'торти на день народження', 'the rest of': 'решта', 'weeks': 'тижні',
      'everyone': 'усі', 'buy': 'купую', 'look for': 'шукати', 'there': 'там', 'that day': 'того дня', 'tuesday': 'вівторок', "when's": 'коли (є)', "what's": 'що (є), яке', 'favourite': 'улюблений', 'holiday': 'свято', 'holidays': 'свята',
      'mr': 'пан', 'whose': 'чий', 'missing': 'пропущений', 'which': 'який', 'correct': 'правильний', 'sentences': 'речення',
      "it's": 'це (є)', "isn't": 'не (є)', "i'm": 'я (є)'
    }
  });
})();
