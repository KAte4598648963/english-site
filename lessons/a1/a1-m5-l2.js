/*
 * A1 · Module 5 · Lesson 2 — I can swim! (can / can’t: ability, permission, requests)
 * Review: adverbs of frequency (module 3). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Summer camp: volunteers wanted!',
    text: `Our children’s summer camp needs volunteers for July. Here are three people who want to help.

Marko is a student. He can swim very well and he can teach swimming. He can also play the guitar, so he can sing songs with the children in the evening. He can’t cook — not even pasta!

Alla is a retired teacher. She can speak three languages: Ukrainian, English and German. She can draw and paint beautifully. She can’t swim, but she can organise games on the beach. She usually gets up early, so she can help with breakfast.

Ben is from Canada. He can’t speak Ukrainian yet, but he can speak English and French. He can ride a horse and he can drive a minibus. Can he cook? Yes, he can — his pancakes are famous!

Can you help us too? You can call us any day from 9 to 5.`
  };

  ENG.registerLesson({
    id: 'a1-m5-l2',
    level: 'a1',
    title: 'I can swim! Вміння',
    subtitle: 'can / can’t: вміння, дозвіл, прохання · well / not at all',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Camp volunteers',
            instructions: 'Прочитай оголошення про волонтерів для літнього табору.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What can Marko teach?', options: ['Swimming', 'Cooking', 'Drawing'], answer: 0 },
              { id: 'q2', q: 'How many languages can Alla speak?', options: ['Two', 'Three', 'Four'], answer: 1 },
              { id: 'q3', q: 'What can Alla do on the beach?', options: ['Swim', 'Organise games', 'Ride a horse'], answer: 1 },
              { id: 'q4', q: 'Where is Ben from?', options: ['France', 'Canada', 'England'], answer: 1 },
              { id: 'q5', q: 'What can Ben drive?', options: ['A bus', 'A minibus', 'A truck'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Marko can cook pasta.', answer: false, explain: '“He can’t cook — not even pasta!”' },
              { id: 's2', s: 'Alla can swim.', answer: false, explain: '“She can’t swim.”' },
              { id: 's3', s: 'Alla can draw and paint.', answer: true },
              { id: 's4', s: 'Ben can speak Ukrainian.', answer: false, explain: '“He can’t speak Ukrainian yet.”' },
              { id: 's5', s: 'Ben can cook pancakes.', answer: true }
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
            title: 'Skills and abilities',
            instructions: 'Вміння, про які часто питають. Після can — дієслово без to і без -s.',
            cards: [
              { front: 'swim', ipa: '/swɪm/', back: 'плавати', example: 'I can swim very well.' },
              { front: 'ride a bike / a horse', back: 'їздити на велосипеді / коні', example: 'Can you ride a horse?' },
              { front: 'drive', ipa: '/draɪv/', back: 'керувати авто', example: 'She can’t drive.' },
              { front: 'speak a language', ipa: '/ˈlæŋɡwɪdʒ/', back: 'говорити мовою', example: 'He can speak French.' },
              { front: 'sing', ipa: '/sɪŋ/', back: 'співати', example: 'They can sing beautifully.' },
              { front: 'draw / paint', back: 'малювати олівцем / фарбами', example: 'Alla can draw and paint.' },
              { front: 'play an instrument', ipa: '/ˈɪnstrəmənt/', back: 'грати на інструменті', example: 'Can you play an instrument?' },
              { front: 'ski', ipa: '/skiː/', back: 'кататися на лижах', example: 'I can’t ski.' },
              { front: 'fix things', back: 'лагодити речі', example: 'My dad can fix everything.' },
              { front: 'volunteer', ipa: '/ˌvɒlənˈtɪə/', back: 'волонтер', example: 'We need volunteers.' },
              { front: 'organise', ipa: '/ˈɔːɡənaɪz/', back: 'організовувати', example: 'She can organise games.' },
              { front: 'not … at all', back: 'зовсім не', example: 'I can’t sing at all.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Make skill phrases',
            instructions: 'Поєднай дієслово з закінченням виразу.',
            pairs: [
              ['ride', 'a horse'],
              ['speak', 'German'],
              ['play', 'the violin'],
              ['fix', 'a computer'],
              ['drive', 'a car'],
              ['organise', 'a party'],
              ['teach', 'children'],
              ['climb', 'a tree']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What can they do?',
            instructions: 'Встав дієслово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Fish can {{swim}}, but they can’t walk.' },
              { id: 'd2', text: 'Birds can {{fly}}.' },
              { id: 'd3', text: 'My grandad can {{fix}} old radios.' },
              { id: 'd4', text: 'She can {{speak}} four languages!' },
              { id: 'd5', text: 'I can’t {{drive}}. I haven’t got a licence.' },
              { id: 'd6', text: 'Can you {{sing}}? Join our choir!' }
            ],
            distractors: ['ski']
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
            title: 'can / can’t',
            instructions: 'can — одне з найпростіших і найкорисніших слів. Воно однакове для всіх осіб!',
            html: `
<h3>1. Що означає can?</h3>
<div class="table-wrap"><table>
  <tr><th>Значення</th><th>Приклад</th><th>Українською</th></tr>
  <tr><td><b>вміння</b></td><td>I <b>can</b> swim.</td><td>Я вмію плавати.</td></tr>
  <tr><td><b>можливість</b></td><td>You <b>can</b> call us from 9 to 5.</td><td>Ви можете нам дзвонити…</td></tr>
  <tr><td><b>дозвіл</b></td><td><b>Can</b> I open the window?</td><td>Можна відчинити вікно?</td></tr>
  <tr><td><b>прохання</b></td><td><b>Can</b> you help me?</td><td>Ви можете мені допомогти?</td></tr>
</table></div>

<h3>2. Форма — однакова для всіх!</h3>
<div class="table-wrap"><table>
  <tr><th>+</th><th>−</th><th>?</th><th>Коротка відповідь</th></tr>
  <tr><td>I / he / she / we <b>can</b> swim.</td><td>I / he <b>can’t</b> (cannot) swim.</td><td><b>Can</b> he swim?</td><td>Yes, he <b>can</b>. / No, he <b>can’t</b>.</td></tr>
</table></div>
<p>⚠️ Після can — <b>дієслово без to і без -s</b>, навіть для he/she:<br>
<span class="no">He cans swim.</span> <span class="no">He can swims.</span> <span class="no">He can to swim.</span> → <span class="yes">He can swim.</span></p>
<p>⚠️ <b>Do / does з can не вживаємо!</b> <span class="no">Do you can swim?</span> → <span class="yes">Can you swim?</span></p>

<h3>3. Наскільки добре?</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>Приклад</th></tr>
  <tr><td>⭐⭐⭐</td><td>I can swim <b>very well</b>.</td></tr>
  <tr><td>⭐⭐</td><td>I can swim <b>quite well</b>.</td></tr>
  <tr><td>⭐</td><td>I can swim <b>a little</b>.</td></tr>
  <tr><td>—</td><td>I can’t swim <b>at all</b>.</td></tr>
</table></div>
<p>💡 <b>well</b> (добре) — прислівник, стоїть <b>після</b> дієслова: She sings <b>well</b>. <span class="no">She sings good.</span></p>

<h3>4. Вимова</h3>
<p>У ствердженні can — коротке, ненаголошене [kən]: I <i>c’n</i> swim. Can’t — довге й чітке [kɑːnt]: I <b>CAN’T</b> swim. Так легше почути різницю!</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">She can to drive.</span> → <span class="yes">She can drive.</span><br>
<span class="no">Do you can help me?</span> → <span class="yes">Can you help me?</span><br>
<span class="no">He can speaks English.</span> → <span class="yes">He can speak English.</span><br>
<span class="no">I can swim very good.</span> → <span class="yes">I can swim very well.</span></div>`
          },
          {
            id: 'gram-can',
            type: 'gap',
            title: 'can or can’t?',
            instructions: 'Встав can або can’t за текстом про волонтерів.',
            items: [
              { id: 'g1', text: 'Marko {{can}} swim very well.' },
              { id: 'g2', text: 'Marko {{can’t|cannot}} cook.' },
              { id: 'g3', text: 'Alla {{can}} speak German.' },
              { id: 'g4', text: 'Alla {{can’t|cannot}} swim.' },
              { id: 'g5', text: 'Ben {{can}} drive a minibus.' },
              { id: 'g6', text: 'Ben {{can’t|cannot}} speak Ukrainian yet.' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Choose the correct form',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'c1', q: 'She can ___ the piano.', options: ['plays', 'play', 'to play'], answer: 1 },
              { id: 'c2', q: '___ you ride a bike?', options: ['Do', 'Are', 'Can'], answer: 2 },
              { id: 'c3', q: 'Can he ski? — No, he ___.', options: ['doesn’t', 'can’t', 'isn’t'], answer: 1 },
              { id: 'c4', q: 'My mum sings very ___.', options: ['good', 'well', 'nice'], answer: 1 },
              { id: 'c5', q: '___ I open the window? It’s hot.', options: ['Can', 'Do', 'Am'], answer: 0, explain: 'Питаємо дозволу: Can I…?' },
              { id: 'c6', q: 'I can’t dance ___ all.', options: ['in', 'at', 'on'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Ти вмієш грати на гітарі?', answer: 'Can you play the guitar?', extra: ['Do'] },
              { id: 'o2', prompt: 'Він дуже добре плаває.', answer: 'He can swim very well.', extra: ['good'] },
              { id: 'o3', prompt: 'Я зовсім не вмію співати.', answer: "I can't sing at all." },
              { id: 'o4', prompt: 'Можете мені допомогти?', answer: 'Can you help me?' }
            ]
          },
          {
            id: 'gram-review',
            type: 'order',
            title: '↺ Повторення: прислівники частоти',
            instructions: 'Згадаймо модуль 3. Склади речення — прислівник перед дієсловом, але після to be.',
            items: [
              { id: 'r1', prompt: 'Алла зазвичай рано встає.', answer: 'Alla usually gets up early.' },
              { id: 'r2', prompt: 'Діти завжди голодні.', answer: 'The children are always hungry.' },
              { id: 'r3', prompt: 'Марко іноді грає на гітарі.', answer: 'Marko sometimes plays the guitar.' }
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
            title: 'A job interview',
            instructions: 'Співбесіда на роботу в готелі. Послухай, що вміє кандидатка.',
            audio: {
              title: 'Interview: Manager & Olivia',
              lines: [
                { who: 'Manager', text: 'So, Olivia, can you speak any foreign languages?' },
                { who: 'Olivia', text: 'Yes, I can. I can speak English very well and Spanish quite well. I can speak a little Italian too.' },
                { who: 'Manager', text: 'Great. Can you use a computer?' },
                { who: 'Olivia', text: 'Yes, of course. I can type very fast.' },
                { who: 'Manager', text: 'Can you drive? Sometimes we need to drive guests to the airport.' },
                { who: 'Olivia', text: 'No, I can’t, sorry. But I can ride a bike!' },
                { who: 'Manager', text: 'Ha ha. OK. Can you start on Monday?' },
                { who: 'Olivia', text: 'Yes, I can!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Which language can Olivia speak very well?', options: ['Spanish', 'English', 'Italian'], answer: 1 },
              { id: 'l2', q: 'How well can she speak Italian?', options: ['Very well', 'Quite well', 'A little'], answer: 2 },
              { id: 'l3', q: 'What can she do very fast?', options: ['Type', 'Drive', 'Swim'], answer: 0 },
              { id: 'l4', q: 'Can Olivia drive?', options: ['Yes, she can.', 'No, she can’t.'], answer: 1 },
              { id: 'l5', q: 'When can she start?', options: ['On Monday', 'On Friday', 'Tomorrow'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши. Розрізняй can і can’t!',
            items: [
              { id: 'dc1', text: 'Can you speak any foreign languages?' },
              { id: 'dc2', text: 'I can type very fast.' },
              { id: 'dc3', text: 'No, I can’t.' },
              { id: 'dc4', text: 'She can speak a little Italian.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-volunteer',
            type: 'writing',
            title: 'Be a volunteer',
            instructions: 'Напиши лист у літній табір: ти хочеш бути волонтером. Розкажи, що ти вмієш і чого не вмієш.',
            prompt: 'Write a short letter to the camp (60–80 words).\n• Introduce yourself (name, age, job).\n• What can you do? How well? (very well, quite well, a little)\n• What can’t you do?\n• When can you help? Ask one question with Can I…?',
            minWords: 60,
            maxWords: 90,
            phrases: ['I can', 'very well', 'quite well', 'I can’t', 'at all', 'Can I', 'I’d like to help'],
            checklist: ['Після can — дієслово без to і -s', 'Є very well / quite well / a little', 'Є речення з can’t', 'Є питання з Can I…?', 'well, а не good, після дієслова'],
            model: `Dear Camp Team,

My name is Andrii. I’m twenty-two and I’m a student. I’d like to help at your camp in July.

I can play football very well and I can teach it. I can speak English quite well. I can play the guitar a little, so I can sing songs with the children. I can’t cook at all, sorry!

I can help from the 1st to the 20th of July. Can I bring my dog?

Best wishes,
Andrii`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-can',
            type: 'speaking',
            title: 'What can you do?',
            instructions: 'Відповідай уголос. Чітко вимовляй can’t!',
            phrases: ['I can… very well.', 'I can… a little.', 'I can’t… at all.', 'Can you…?', 'Yes, I can. / No, I can’t.'],
            tasks: [
              { id: 'sp1', q: 'Can you swim, ski, drive and cook? How well?', tips: 'I can … very well. I can’t … at all.', model: 'I can swim quite well. I can’t ski at all. I can drive, and I can cook very well.' },
              { id: 'sp2', q: 'What can your best friend or a family member do? What can’t he or she do?', tips: 'My … can … but he/she can’t …', model: 'My brother can fix computers, but he can’t cook.' },
              { id: 'sp3', q: 'You are in a hotel. Ask three polite questions with Can I / Can you.', tips: 'Can I have …? Can you …?', model: 'Can I have a map, please? Can you call a taxi for me? Can I pay by card?' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'summer camp': 'літній табір', 'camp': 'табір', 'volunteers': 'волонтери', 'volunteer': 'волонтер', 'wanted': 'потрібні', 'children': 'діти',
      'needs': 'потребує', 'july': 'липень', 'people': 'люди', 'want': 'хочуть', 'help': 'допомагати', 'student': 'студент', 'can': 'вміти, могти',
      "can't": 'не вміти, не могти', 'cannot': 'не може', 'swim': 'плавати', 'very well': 'дуже добре', 'well': 'добре', 'teach': 'навчати', 'swimming': 'плавання',
      'also': 'також', 'play': 'грати', 'guitar': 'гітара', 'so': 'тож', 'sing': 'співати', 'songs': 'пісні', 'evening': 'вечір', 'cook': 'готувати',
      'not even': 'навіть не', 'pasta': 'макарони', 'retired': 'на пенсії', 'teacher': 'вчитель', 'speak': 'говорити', 'languages': 'мови', 'language': 'мова',
      'ukrainian': 'українська', 'english': 'англійська', 'german': 'німецька', 'draw': 'малювати олівцем', 'paint': 'малювати фарбами', 'beautifully': 'гарно',
      'organise': 'організовувати', 'games': 'ігри', 'beach': 'пляж', 'usually': 'зазвичай', 'gets up': 'встає', 'early': 'рано', 'breakfast': 'сніданок',
      'canada': 'Канада', 'yet': 'ще', 'french': 'французька', 'ride': 'їздити верхи', 'horse': 'кінь', 'drive': 'керувати авто', 'minibus': 'мікроавтобус',
      'pancakes': 'млинці', 'famous': 'знамениті', 'too': 'теж', 'call': 'дзвонити', 'any day': 'будь-якого дня', 'truck': 'вантажівка', 'bike': 'велосипед',
      'instrument': 'інструмент', 'ski': 'кататися на лижах', 'fix': 'лагодити', 'things': 'речі', 'everything': 'все', 'at all': 'зовсім', 'violin': 'скрипка',
      'computer': 'комп’ютер', 'car': 'машина', 'party': 'вечірка', 'climb': 'лазити', 'tree': 'дерево', 'fish': 'риба', 'walk': 'ходити', 'birds': 'птахи',
      'fly': 'літати', 'grandad': 'дідусь', 'old': 'старий', 'radios': 'радіоприймачі', 'licence': 'посвідчення водія', 'join': 'приєднуйся', 'choir': 'хор',
      'piano': 'піаніно', 'open': 'відчинити', 'window': 'вікно', 'hot': 'спекотно', 'quite well': 'досить добре', 'a little': 'трохи', 'foreign': 'іноземний',
      'spanish': 'іспанська', 'italian': 'італійська', 'great': 'чудово', 'use': 'користуватися', 'of course': 'звісно', 'type': 'друкувати', 'fast': 'швидко',
      'sometimes': 'іноді', 'need to': 'треба', 'guests': 'гості', 'airport': 'аеропорт', 'sorry': 'вибачте', 'start': 'почати', 'monday': 'понеділок',
      'manager': 'менеджер', 'interview': 'співбесіда', 'hotel': 'готель', 'letter': 'лист', 'dear': 'шановний', 'team': 'команда', "i'd like to": 'я хотів би',
      'football': 'футбол', 'bring': 'привезти', 'dog': 'собака', 'best wishes': 'з найкращими побажаннями', 'map': 'карта', 'taxi': 'таксі', 'pay': 'платити',
      'by card': 'карткою', 'polite': 'ввічливий', 'best friend': 'найкращий друг', 'family member': 'член сім’ї', 'brother': 'брат', 'computers': 'комп’ютери',
      'hungry': 'голодні', 'always': 'завжди'
    }
  });
})();
