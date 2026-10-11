/*
 * A1 · Module 2 · Lesson 2 — What do they look like? (have got / has got)
 * Review: possessives (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Can you find my friends?',
    text: `My friends are at the station. Can you find them? Here are some clues!

Ben is tall. He has got short dark hair and brown eyes. He has got a beard. His jacket is green.

Mia isn’t tall. She’s short and slim. She has got long blonde hair and blue eyes. She hasn’t got glasses.

The twins, Leo and Lucas, have got curly red hair and green eyes. They have got the same T-shirts! But Leo has got a small dog and Lucas hasn’t got a dog.

And me? I have got straight black hair and glasses. I haven’t got a beard. Have you got my photo? Yes, you have!`
  };

  ENG.registerLesson({
    id: 'a1-m2-l2',
    level: 'a1',
    title: 'What do they look like? Зовнішність',
    subtitle: 'have got / has got · опис зовнішності',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Find my friends',
            instructions: 'Прочитай опис друзів і обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Who has got a beard?', options: ['Ben', 'Leo', 'Mia'], answer: 0 },
              { id: 'q2', q: 'What colour is Mia’s hair?', options: ['Dark', 'Blonde', 'Red'], answer: 1 },
              { id: 'q3', q: 'What colour are the twins’ eyes?', options: ['Blue', 'Brown', 'Green'], answer: 2 },
              { id: 'q4', q: 'Who has got a dog?', options: ['Lucas', 'Leo', 'Ben'], answer: 1 },
              { id: 'q5', q: 'The writer has got…', options: ['curly hair and a beard', 'straight black hair and glasses', 'blonde hair'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Ben has got long hair.', answer: false, explain: 'He has got short dark hair.' },
              { id: 's2', s: 'Mia is tall.', answer: false, explain: '“Mia isn’t tall. She’s short and slim.”' },
              { id: 's3', s: 'Mia has got glasses.', answer: false, explain: '“She hasn’t got glasses.”' },
              { id: 's4', s: 'Leo and Lucas have got the same T-shirts.', answer: true },
              { id: 's5', s: 'The writer has got glasses.', answer: true }
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
            title: 'Appearance',
            instructions: 'Слова для опису зовнішності. Запам’ятай: hair (волосся) — незлічуване, без -s!',
            cards: [
              { front: 'hair', ipa: '/heə/', back: 'волосся', example: 'She has got long hair.' },
              { front: 'long / short hair', back: 'довге / коротке волосся', example: 'Ben has got short hair.' },
              { front: 'curly / straight hair', ipa: '/ˈkɜːli/ /streɪt/', back: 'кучеряве / пряме волосся', example: 'The twins have got curly hair.' },
              { front: 'blonde / dark hair', ipa: '/blɒnd/', back: 'світле / темне волосся', example: 'Mia has got blonde hair.' },
              { front: 'eyes', ipa: '/aɪz/', back: 'очі', example: 'I have got brown eyes.' },
              { front: 'tall / short', back: 'високий / низький', example: 'Ben is tall. Mia is short.' },
              { front: 'slim', ipa: '/slɪm/', back: 'стрункий', example: 'She’s short and slim.' },
              { front: 'beard', ipa: '/bɪəd/', back: 'борода', example: 'He has got a beard.' },
              { front: 'moustache', ipa: '/məˈstɑːʃ/', back: 'вуса', example: 'My grandfather has got a moustache.' },
              { front: 'twins', ipa: '/twɪnz/', back: 'близнюки', example: 'Leo and Lucas are twins.' },
              { front: 'the same', back: 'однаковий, той самий', example: 'They have got the same T-shirts.' },
              { front: 'What does he look like?', back: 'Який він на вигляд?', example: 'What does she look like? — She’s tall.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Opposites',
            instructions: 'Поєднай протилежності.',
            pairs: [
              ['tall', 'short'],
              ['long', 'short (hair)'],
              ['curly', 'straight'],
              ['blonde', 'dark'],
              ['big', 'small'],
              ['old', 'young'],
              ['happy', 'sad'],
              ['the same', 'different']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Describe the people',
            instructions: 'Встав слова. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Leo and Lucas are {{twins}}. They look the same.' },
              { id: 'd2', text: 'My grandfather has got a grey {{beard}}.' },
              { id: 'd3', text: 'Mia’s hair isn’t short. It’s {{long}}.' },
              { id: 'd4', text: 'Her hair isn’t curly. It’s {{straight}}.' },
              { id: 'd5', text: 'Basketball players are usually {{tall}}.' },
              { id: 'd6', text: 'I can’t see well. I have got {{glasses}}.' }
            ],
            distractors: ['slim']
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
            title: 'have got / has got',
            instructions: 'Як сказати «у мене є». Уважно подивись на he / she / it — там інша форма!',
            html: `
<h3>1. Що означає have got?</h3>
<p><b>have got</b> = «мати», «у мене є». Українською кажемо «<u>У мене є</u> собака», англійською — «<u>I have got</u> a dog» (дослівно: я маю собаку).</p>
<p>Вживаємо для: <b>зовнішності</b> (She has got blue eyes), <b>родичів</b> (I have got a sister), <b>речей</b> (He has got a car), <b>тварин</b>.</p>

<h3>2. Форми</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>+ (є)</th><th>− (немає)</th></tr>
  <tr><td>I / you / we / they</td><td>I <b>have got</b> = I<b>’ve got</b></td><td>I <b>haven’t got</b></td></tr>
  <tr><td>he / she / it</td><td>she <b>has got</b> = she<b>’s got</b></td><td>she <b>hasn’t got</b></td></tr>
</table></div>
<p>💡 Те саме правило, що й з to be: <b>he / she / it — окрема форма</b> (is → has).</p>
<div class="ex-line">I <mark>have got</mark> glasses. — Ben <mark>has got</mark> a beard.</div>
<div class="ex-line">We <mark>haven’t got</mark> a car. — Mia <mark>hasn’t got</mark> glasses.</div>

<h3>3. Питання і короткі відповіді</h3>
<p>Have / Has виходить <b>на початок</b>, got лишається після людини:</p>
<div class="table-wrap"><table>
  <tr><th>Питання</th><th>Так</th><th>Ні</th></tr>
  <tr><td><b>Have</b> you <b>got</b> a sister?</td><td>Yes, I <b>have</b>.</td><td>No, I <b>haven’t</b>.</td></tr>
  <tr><td><b>Has</b> he <b>got</b> a beard?</td><td>Yes, he <b>has</b>.</td><td>No, he <b>hasn’t</b>.</td></tr>
  <tr><td><b>Have</b> they <b>got</b> a dog?</td><td>Yes, they <b>have</b>.</td><td>No, they <b>haven’t</b>.</td></tr>
</table></div>
<p>У короткій відповіді <b>got не кажемо</b>: <span class="no">Yes, I have got.</span> → <span class="yes">Yes, I have.</span></p>

<h3>4. to be чи have got?</h3>
<div class="table-wrap"><table>
  <tr><th>to be — який він? (опис)</th><th>have got — що в нього є?</th></tr>
  <tr><td>He <b>is</b> tall. She <b>is</b> slim.</td><td>He <b>has got</b> a beard. She <b>has got</b> long hair.</td></tr>
  <tr><td>His hair <b>is</b> dark.</td><td>He <b>has got</b> dark hair.</td></tr>
</table></div>
<p>Порядок слів: <b>прикметник перед іменником</b> — long hair, blue eyes, a small dog (не «hair long»).</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">She have got blue eyes.</span> → <span class="yes">She has got blue eyes.</span><br>
<span class="no">He has got tall.</span> → <span class="yes">He is tall.</span><br>
<span class="no">She has got long hairs.</span> → <span class="yes">She has got long hair.</span><br>
<span class="no">Have you a car?</span> → <span class="yes">Have you got a car?</span></div>`
          },
          {
            id: 'gram-havehas',
            type: 'gap',
            title: 'have got or has got?',
            instructions: 'Встав have got або has got (або заперечення haven’t got / hasn’t got, якщо є «−»).',
            items: [
              { id: 'g1', text: 'Ben {{has got|’s got}} a beard.' },
              { id: 'g2', text: 'The twins {{have got|’ve got}} red hair.' },
              { id: 'g3', text: 'I {{have got|’ve got}} brown eyes.' },
              { id: 'g4', text: 'Mia {{hasn’t got|has not got}} glasses. (−)' },
              { id: 'g5', text: 'We {{haven’t got|have not got}} a car. (−)' },
              { id: 'g6', text: 'My cat {{has got|’s got}} green eyes.' },
              { id: 'g7', text: 'Lucas {{hasn’t got|has not got}} a dog. (−)' }
            ]
          },
          {
            id: 'gram-short',
            type: 'choice',
            title: 'Questions & short answers',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'a1', q: '___ Ben got brown eyes?', options: ['Have', 'Has', 'Is'], answer: 1 },
              { id: 'a2', q: 'Have you got a brother? — Yes, I ___.', options: ['have', 'have got', 'has'], answer: 0 },
              { id: 'a3', q: 'Has Mia got glasses? — No, she ___.', options: ['isn’t', 'hasn’t', 'haven’t'], answer: 1 },
              { id: 'a4', q: '___ the twins got a dog?', options: ['Has', 'Have', 'Are'], answer: 1 },
              { id: 'a5', q: 'He ___ tall.', options: ['has got', 'is', 'have'], answer: 1, explain: 'Опис людини (який?) — to be: He is tall.' },
              { id: 'a6', q: 'She ___ long blonde hair.', options: ['is', 'has got', 'have got'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення. Прикметник — перед іменником!',
            items: [
              { id: 'o1', prompt: 'У неї довге світле волосся.', answer: 'She has got long blonde hair.' },
              { id: 'o2', prompt: 'У тебе є сестра?', answer: 'Have you got a sister?', extra: ['Has'] },
              { id: 'o3', prompt: 'У мене немає бороди.', answer: "I haven't got a beard." },
              { id: 'o4', prompt: 'У його брата блакитні очі.', answer: "His brother has got blue eyes.", extra: ['have'] }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: his / her / their / ’s',
            instructions: 'Згадаймо урок 1. Обери правильне слово.',
            items: [
              { id: 'r1', q: 'Mia is short. ___ hair is long.', options: ['His', 'Her', 'Its'], answer: 1 },
              { id: 'r2', q: 'The twins are here. ___ T-shirts are the same.', options: ['Their', 'There', 'They'], answer: 0 },
              { id: 'r3', q: 'This is ___ dog.', options: ['Leo', 'Leo’s', 'Leos'], answer: 1 },
              { id: 'r4', q: 'Ben is my friend. ___ jacket is green.', options: ['Her', 'His', 'He'], answer: 1 }
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
            title: 'Who is your new teacher?',
            instructions: 'Двоє друзів говорять про нову вчительку й нового однокласника. Послухай і дай відповіді.',
            audio: {
              title: 'Dialogue: Nick & Emma',
              lines: [
                { who: 'Nick', text: 'Have you got a new English teacher, Emma?' },
                { who: 'Emma', text: 'Yes, I have. Her name is Mrs Green.' },
                { who: 'Nick', text: 'What does she look like?' },
                { who: 'Emma', text: 'She’s tall and slim. She has got short curly hair and big brown eyes.' },
                { who: 'Nick', text: 'Has she got glasses?' },
                { who: 'Emma', text: 'No, she hasn’t. And we’ve got a new student too. His name is Sam.' },
                { who: 'Nick', text: 'Is he tall?' },
                { who: 'Emma', text: 'No, he isn’t. He’s short. He has got straight blonde hair and a big smile!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is the teacher’s name?', options: ['Mrs Brown', 'Mrs Green', 'Mrs White'], answer: 1 },
              { id: 'l2', q: 'The teacher has got…', options: ['long straight hair', 'short curly hair', 'blonde hair'], answer: 1 },
              { id: 'l3', q: 'Has the teacher got glasses?', options: ['Yes, she has.', 'No, she hasn’t.'], answer: 1 },
              { id: 'l4', q: 'Sam is…', options: ['tall', 'short', 'slim'], answer: 1 },
              { id: 'l5', q: 'Sam has got…', options: ['dark hair and a beard', 'straight blonde hair', 'curly red hair'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'She has got short curly hair.' },
              { id: 'dc2', text: 'Has she got glasses?' },
              { id: 'dc3', text: 'No, she hasn’t.' },
              { id: 'dc4', text: 'We have got a new student.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-describe',
            type: 'writing',
            title: 'Describe a person',
            instructions: 'Опиши зовнішність людини з твоєї сім’ї або друга. Використай is і has got.',
            prompt: 'Describe a person you know (50–70 words).\n• Who is he/she? (my sister, my best friend…)\n• Is he/she tall or short?\n• Hair: long/short, curly/straight, colour.\n• Eyes: colour. Glasses? A beard?\n• Use one negative: hasn’t got / isn’t.',
            minWords: 50,
            maxWords: 80,
            phrases: ['This is my', 'He is', 'She is', 'has got', 'hasn’t got', 'His', 'Her'],
            checklist: ['is — для опису (tall, slim), has got — для того, що є', 'he/she + has got (не have)', 'hair без -s', 'Прикметник перед іменником: long hair', 'Є заперечення'],
            model: `This is my best friend, Ira. She’s twenty-five. She isn’t very tall, she’s short and slim. She has got long straight dark hair and big green eyes. She hasn’t got glasses.

Her husband, Oleh, is very tall. He has got short blonde hair and blue eyes. He has got a beard too. They are a beautiful couple!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-describe',
            type: 'speaking',
            title: 'Who is it?',
            instructions: 'Опиши уголос. Використовуй is / has got / hasn’t got.',
            phrases: ['He/She is…', 'He/She has got…', 'He/She hasn’t got…', 'I’ve got…', 'Have you got…?'],
            tasks: [
              { id: 'sp1', q: 'What do you look like?', tips: 'I am … I have got … hair and … eyes.', model: 'I’m quite tall. I’ve got long straight brown hair and grey eyes. I haven’t got glasses.' },
              { id: 'sp2', q: 'Describe a famous person. Don’t say the name!', tips: 'He/She is … He/She has got …', model: 'He is tall. He has got short dark hair, brown eyes and a beard. He is a football player.' },
              { id: 'sp3', q: 'Have you got brothers or sisters? What do they look like?', tips: 'Yes, I have. / No, I haven’t. My sister has got …', model: 'Yes, I have. I’ve got a sister. She has got curly hair and blue eyes.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'friends': 'друзі', 'station': 'вокзал, станція', 'find': 'знайти', 'them': 'їх', 'clue': 'підказка', 'clues': 'підказки', 'some': 'кілька',
      'tall': 'високий', 'has got': 'має, у нього є', 'have got': 'маю, у мене є', 'short': 'короткий; низький', 'dark': 'темний', 'hair': 'волосся',
      'brown': 'карий; коричневий', 'eyes': 'очі', 'beard': 'борода', 'jacket': 'куртка', 'green': 'зелений', 'slim': 'стрункий', 'long': 'довгий',
      'blonde': 'світлий (про волосся)', 'blue': 'блакитний, синій', "hasn't got": 'не має', "haven't got": 'не маю', 'glasses': 'окуляри',
      'twins': 'близнюки', 'curly': 'кучерявий', 'red': 'руде (про волосся); червоний', 'same': 'однаковий', 'the same': 'однаковий, той самий',
      't-shirt': 'футболка', 't-shirts': 'футболки', 'but': 'але', 'small': 'маленький', 'dog': 'собака', 'straight': 'прямий', 'black': 'чорний',
      'photo': 'фото', 'writer': 'автор', 'colour': 'колір', 'moustache': 'вуса', 'look like': 'виглядати', 'look': 'виглядати; дивитися',
      'what does he look like': 'який він на вигляд', 'young': 'молодий', 'old': 'старий', 'happy': 'щасливий', 'sad': 'сумний', 'different': 'різний',
      'grey': 'сивий; сірий', 'grandfather': 'дідусь', 'basketball': 'баскетбол', 'players': 'гравці', 'player': 'гравець', 'usually': 'зазвичай',
      "can't": 'не можу', 'see': 'бачити', 'well': 'добре', 'sister': 'сестра', 'brother': 'брат', 'car': 'машина', 'cat': 'кіт', 'new': 'новий',
      'teacher': 'вчитель', 'mrs': 'місіс, пані', 'student': 'учень', 'smile': 'усмішка', 'big': 'великий', 'too': 'теж', 'person': 'людина',
      'know': 'знати', 'best friend': 'найкращий друг', 'husband': 'чоловік', 'couple': 'пара', 'beautiful': 'гарний', 'quite': 'досить',
      'famous': 'відомий', 'football': 'футбол', "don't say": 'не кажи', 'name': 'ім’я', 'describe': 'описати', 'appearance': 'зовнішність',
      'opposites': 'протилежності', 'people': 'люди', 'who': 'хто', 'yes': 'так', 'no': 'ні', 'here are': 'ось', 'and me': 'а я?', 'his': 'його',
      'her': 'її', 'their': 'їхній', "she's": 'вона є', "he's": 'він є', "i've got": 'у мене є', "we've got": 'у нас є', "isn't": 'не є', "it's": 'це є'
    }
  });
})();
