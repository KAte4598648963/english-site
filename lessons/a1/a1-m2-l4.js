/*
 * A1 · Module 2 · Lesson 4 — Review: A family photo
 * Reviews: possessives & ’s, have got / has got, adjectives (+ very/quite, and/but), to be.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Grandma’s birthday',
    text: `Today is my grandma’s birthday. She is seventy! This is our family photo from her party.

Grandma is in the middle. She is short and she has got grey hair and blue eyes. She is very kind and quite funny. Grandpa is next to her. He has got a white moustache. He is quiet, but his stories are really interesting.

My mum’s sister, Aunt Lena, is on the left. She is tall and slim and she has got long dark hair. Her husband, Uncle Pavlo, has got a beard and glasses. Their children are the twins, Ola and Ira. They are six and they are very noisy!

My parents and I are on the right. I haven’t got my glasses in the photo. Our dog, Bim, is there too — he has got a party hat!`
  };

  ENG.registerLesson({
    id: 'a1-m2-l4',
    level: 'a1',
    title: 'Review: A family photo',
    subtitle: 'Повторення модуля 2: his/her/’s · have got · прикметники · and/but',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Grandma’s party',
            instructions: 'Прочитай опис сімейного фото з дня народження бабусі.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'How old is Grandma?', options: ['Sixty', 'Seventy', 'Seventeen'], answer: 1 },
              { id: 'q2', q: 'What has Grandpa got?', options: ['A beard', 'A white moustache', 'Glasses'], answer: 1 },
              { id: 'q3', q: 'Who is Aunt Lena?', options: ['Dad’s sister', 'Mum’s sister', 'Grandma’s sister'], answer: 1 },
              { id: 'q4', q: 'Who are Ola and Ira?', options: ['The writer’s sisters', 'Lena and Pavlo’s children', 'Grandma’s friends'], answer: 1 },
              { id: 'q5', q: 'What has Bim got in the photo?', options: ['A ball', 'Glasses', 'A party hat'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Grandma has got grey hair.', answer: true },
              { id: 's2', s: 'Grandpa is noisy.', answer: false, explain: '“He is quiet.”' },
              { id: 's3', s: 'Uncle Pavlo has got glasses.', answer: true },
              { id: 's4', s: 'The twins are quiet.', answer: false, explain: '“They are very noisy!”' },
              { id: 's5', s: 'The writer has got glasses in the photo.', answer: false, explain: '“I haven’t got my glasses in the photo.”' }
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
            title: 'New words + module review',
            instructions: 'Кілька нових слів з тексту і повторення слів модуля.',
            cards: [
              { front: 'birthday', ipa: '/ˈbɜːθdeɪ/', back: 'день народження', example: 'Today is my grandma’s birthday.' },
              { front: 'in the middle', back: 'посередині', example: 'Grandma is in the middle.' },
              { front: 'on the left / on the right', back: 'зліва / справа', example: 'My aunt is on the left.' },
              { front: 'next to', back: 'поруч з', example: 'Grandpa is next to her.' },
              { front: 'story', ipa: '/ˈstɔːri/', back: 'історія, розповідь', example: 'His stories are interesting.' },
              { front: 'party hat', back: 'святковий ковпачок', example: 'The dog has got a party hat!' },
              { front: 'grandma / grandpa', back: 'бабуся / дідусь (розм.)', example: 'Grandpa is very quiet.' },
              { front: 'children', ipa: '/ˈtʃɪldrən/', back: 'діти', example: 'Their children are twins.' },
              { front: 'moustache', back: 'вуса', example: 'He has got a white moustache.' },
              { front: 'noisy', back: 'галасливий', example: 'The twins are very noisy.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 2 words',
            instructions: 'Поєднай слова модуля з перекладом.',
            pairs: [
              ['aunt', 'тітка'],
              ['cousin', 'двоюрідний брат'],
              ['curly', 'кучерявий'],
              ['beard', 'борода'],
              ['shy', 'сором’язливий'],
              ['hard-working', 'працьовитий'],
              ['husband', 'чоловік (у шлюбі)'],
              ['birthday', 'день народження']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Family, looks, personality',
            instructions: 'Встав слово. Одне зайве.',
            items: [
              { id: 'd1', text: 'My uncle’s daughter is my {{cousin}}.' },
              { id: 'd2', text: 'She’s got long {{straight}} hair — not curly.' },
              { id: 'd3', text: 'He’s very {{polite}}: he always says “thank you”.' },
              { id: 'd4', text: 'Grandma is in the {{middle}} of the photo.' },
              { id: 'd5', text: 'My grandparents are very {{kind}} to me.' },
              { id: 'd6', text: 'Happy {{birthday}}, Grandma!' }
            ],
            distractors: ['lazy']
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
            title: 'Module 2 grammar — summary',
            instructions: 'Уся граматика модуля 2 разом. Порівняй to be і have got — це найважливіше.',
            html: `
<h3>1. Чий? — my / your / his / her / its / our / their + ’s</h3>
<div class="table-wrap"><table>
  <tr><th>I → my</th><th>you → your</th><th>he → his</th><th>she → her</th><th>it → its</th><th>we → our</th><th>they → their</th></tr>
</table></div>
<div class="ex-line">Grandma<b>’s</b> birthday · my mum<b>’s</b> sister · the twins<b>’</b> toys</div>

<h3>2. to be чи have got?</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>to be — ким/яким є</th><th>have got — що має</th></tr>
  <tr><td>I / you / we / they</td><td>I <b>am</b> / we <b>are</b> tall.</td><td>We <b>have got</b> a dog.</td></tr>
  <tr><td>he / she / it</td><td>She <b>is</b> kind.</td><td>She <b>has got</b> blue eyes.</td></tr>
  <tr><td>−</td><td>He <b>isn’t</b> noisy.</td><td>He <b>hasn’t got</b> a beard.</td></tr>
  <tr><td>?</td><td><b>Is</b> she shy?</td><td><b>Has</b> she <b>got</b> glasses?</td></tr>
</table></div>

<h3>3. Прикметники</h3>
<ul>
  <li>не змінюються і не мають -s: kind people;</li>
  <li>стоять <b>перед іменником</b> (a kind woman) або <b>після to be</b> (she is kind);</li>
  <li>підсилення: <b>very / really</b> (дуже), <b>quite</b> (досить), <b>not very</b> (не дуже);</li>
  <li><b>and</b> — схожі думки, <b>but</b> — протилежні: He is quiet, <b>but</b> his stories are interesting.</li>
</ul>

<h3>4. Порядок опису людини (корисна схема)</h3>
<div class="ex-line">1) Хто це? — This is my aunt. <b>Her</b> name is Lena.<br>2) Зовнішність — She <b>is</b> tall. She <b>has got</b> long dark hair.<br>3) Характер — She <b>is</b> very kind <b>but</b> quite strict.</div>

<div class="tip">✅ <b>Чек-лист модуля 2</b> — я вмію:<br>
• назвати членів сім’ї та пояснити, хто кому ким є (my mum’s brother);<br>
• описати зовнішність (has got) і характер (is + прикметник);<br>
• сказати «у мене немає» і запитати «у тебе є?»;<br>
• поєднати думки за допомогою and / but.</div>`
          },
          {
            id: 'gram-behave',
            type: 'choice',
            title: 'is or has got?',
            instructions: 'Обери to be чи have got.',
            items: [
              { id: 'b1', q: 'Grandma ___ seventy.', options: ['is', 'has got'], answer: 0, explain: 'Вік — завжди to be.' },
              { id: 'b2', q: 'Grandpa ___ a white moustache.', options: ['is', 'has got'], answer: 1 },
              { id: 'b3', q: 'Aunt Lena ___ tall and slim.', options: ['is', 'has got'], answer: 0 },
              { id: 'b4', q: 'The twins ___ very noisy.', options: ['are', 'have got'], answer: 0 },
              { id: 'b5', q: 'Uncle Pavlo ___ glasses.', options: ['is', 'has got'], answer: 1 },
              { id: 'b6', q: 'We ___ a dog. His name is Bim.', options: ['are', 'have got'], answer: 1 }
            ]
          },
          {
            id: 'gram-poss',
            type: 'gap',
            title: 'his, her, their, our or ’s?',
            instructions: 'Встав присвійний займенник або ’s.',
            items: [
              { id: 'p1', text: 'Grandpa is quiet, but {{his}} stories are interesting.' },
              { id: 'p2', text: 'Aunt Lena is tall. {{Her}} hair is long.' },
              { id: 'p3', text: 'Ola and Ira are twins. {{Their}} parents are Lena and Pavlo.' },
              { id: 'p4', text: 'We love {{our}} dog, Bim.' },
              { id: 'p5', text: 'It’s Grandma{{’s|s}} birthday today.' }
            ]
          },
          {
            id: 'gram-questions',
            type: 'order',
            title: 'Questions about the photo',
            instructions: 'Склади питання до фото.',
            items: [
              { id: 'o1', prompt: 'Чи є в дядька Павла борода?', answer: 'Has Uncle Pavlo got a beard?' },
              { id: 'o2', prompt: 'Тітка Лена висока?', answer: 'Is Aunt Lena tall?', extra: ['Has'] },
              { id: 'o3', prompt: 'Як звати їхнього собаку?', answer: "What is their dog's name?" },
              { id: 'o4', prompt: 'Бабуся дуже добра й досить смішна.', answer: 'Grandma is very kind and quite funny.' }
            ]
          },
          {
            id: 'gram-mixed',
            type: 'choice',
            title: '↺ Find the correct sentence',
            instructions: 'Повторення модулів 1–2: яке речення правильне?',
            items: [
              { id: 'm1', q: 'Обери правильне:', options: ['She have got two children.', 'She has got two children.', 'She is got two children.'], answer: 1 },
              { id: 'm2', q: 'Обери правильне:', options: ['He is my mother brother.', 'He is my mother’s brother.', 'He is brother of my mother.'], answer: 1 },
              { id: 'm3', q: 'Обери правильне:', options: ['They are kinds people.', 'They are people kind.', 'They are kind people.'], answer: 2 },
              { id: 'm4', q: 'Обери правильне:', options: ['Has you got a pen?', 'Have you got a pen?', 'Are you got a pen?'], answer: 1 },
              { id: 'm5', q: 'Обери правильне:', options: ['These are my cousins.', 'This are my cousins.', 'These is my cousins.'], answer: 0 }
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
            title: 'Who is who at the wedding?',
            instructions: 'Марк уперше на весіллі в родині своєї дівчини Олі. Оля пояснює, хто є хто. Послухай.',
            audio: {
              title: 'Dialogue: Mark & Olya',
              lines: [
                { who: 'Mark', text: 'Olya, who is that tall man with the beard?' },
                { who: 'Olya', text: 'That’s my uncle Andriy. He’s my dad’s brother. He’s very funny.' },
                { who: 'Mark', text: 'And the woman next to him? She has got red hair.' },
                { who: 'Olya', text: 'That’s his wife, Aunt Sveta. She’s quite strict, but she’s really kind.' },
                { who: 'Mark', text: 'Have they got children?' },
                { who: 'Olya', text: 'Yes, they have. Their son, Dima, is on the left. He’s shy, so he’s quiet.' },
                { who: 'Mark', text: 'And who is the old woman in the middle?' },
                { who: 'Olya', text: 'That’s my grandma. She has got ten grandchildren!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Uncle Andriy is…', options: ['Olya’s mum’s brother', 'Olya’s dad’s brother', 'Olya’s grandfather'], answer: 1 },
              { id: 'l2', q: 'What has Aunt Sveta got?', options: ['Red hair', 'A beard', 'Glasses'], answer: 0 },
              { id: 'l3', q: 'Aunt Sveta is strict, but…', options: ['funny', 'kind', 'shy'], answer: 1 },
              { id: 'l4', q: 'Why is Dima quiet?', options: ['He is shy.', 'He is lazy.', 'He is ill.'], answer: 0 },
              { id: 'l5', q: 'How many grandchildren has Grandma got?', options: ['Five', 'Seven', 'Ten'], answer: 2 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'He is my dad’s brother.' },
              { id: 'dc2', text: 'She has got red hair.' },
              { id: 'dc3', text: 'Have they got children?' },
              { id: 'dc4', text: 'She is quite strict but really kind.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-photo',
            type: 'writing',
            title: 'My family photo',
            instructions: 'Опиши своє сімейне фото (справжнє або вигадане). Використай усю граматику модуля.',
            prompt: 'Describe a family photo (70–90 words).\n• Who is in the photo? Where are they? (on the left, in the middle, next to…)\n• For 2–3 people: family relation (my mum’s brother), appearance (has got), personality (is very / quite…).\n• Use his / her / their and ’s.\n• Use and and but.',
            minWords: 70,
            maxWords: 100,
            phrases: ['This is a photo of', 'on the left', 'in the middle', 'next to', 'has got', '’s', 'but'],
            checklist: ['Є 2–3 людини з родинним зв’язком', 'Є has got для зовнішності', 'Є is + прикметник для характеру', 'Є his / her / their і ’s', 'Є and і but'],
            model: `This is a photo of my family at my brother’s wedding. My brother, Ivan, is in the middle. He’s tall and he has got short dark hair. Next to him is his wife, Natalia. She has got long blonde hair and a beautiful smile.

My parents are on the left. My dad has got glasses and a grey beard. He is very hard-working but quite funny. My mum is short and slim. She is really kind.

I’m on the right, next to my cousin Max. We are very happy!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-photo',
            type: 'speaking',
            title: 'Talk about a photo',
            instructions: 'Відкрий будь-яке фото на телефоні (сім’я, друзі) і опиши його уголос.',
            phrases: ['This is…', 'on the left / right', 'in the middle', 'He/She has got…', 'He/She is very…', 'but'],
            tasks: [
              { id: 'sp1', q: 'Who is in your photo? Where are they?', tips: 'This is … On the left is … In the middle is …', model: 'This is my family. On the left is my grandpa. In the middle are my parents.' },
              { id: 'sp2', q: 'Describe one person: appearance and personality.', tips: 'He has got … He is … but …', model: 'My grandpa has got white hair and a moustache. He is quiet but very kind.' },
              { id: 'sp3', q: 'Ask three questions about someone’s family photo.', tips: 'Who is…? Has he got…? Is she…?', model: 'Who is that girl? Has she got a brother? Is she your cousin?' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'today': 'сьогодні', 'grandma': 'бабуся', "grandma's": 'бабусин', 'grandpa': 'дідусь', 'birthday': 'день народження', 'seventy': 'сімдесят',
      'sixty': 'шістдесят', 'seventeen': 'сімнадцять', 'six': 'шість', 'family': 'сім’я', 'photo': 'фото', 'party': 'свято, вечірка', 'middle': 'середина',
      'in the middle': 'посередині', 'short': 'низький; короткий', 'grey': 'сивий', 'hair': 'волосся', 'blue': 'блакитний', 'eyes': 'очі', 'kind': 'добрий',
      'quite': 'досить', 'funny': 'смішний', 'next to': 'поруч з', 'white': 'білий', 'moustache': 'вуса', 'quiet': 'тихий', 'stories': 'історії',
      'story': 'історія', 'really': 'справді', 'interesting': 'цікавий', 'sister': 'сестра', 'aunt': 'тітка', 'left': 'лівий', 'on the left': 'зліва',
      'right': 'правий', 'on the right': 'справа', 'tall': 'високий', 'slim': 'стрункий', 'long': 'довгий', 'dark': 'темний', 'husband': 'чоловік',
      'uncle': 'дядько', 'beard': 'борода', 'glasses': 'окуляри', 'children': 'діти', 'twins': 'близнюки', 'noisy': 'галасливий', 'parents': 'батьки',
      'dog': 'собака', 'hat': 'капелюх', 'party hat': 'святковий ковпачок', 'writer': 'автор', 'friends': 'друзі', 'cousin': 'двоюрідний брат / сестра',
      'curly': 'кучерявий', 'shy': 'сором’язливий', 'hard-working': 'працьовитий', 'straight': 'прямий', 'polite': 'ввічливий', 'always': 'завжди',
      'says': 'каже', 'thank you': 'дякую', 'grandparents': 'бабуся й дідусь', 'happy birthday': 'з днем народження', 'lazy': 'лінивий', 'love': 'любити',
      'name': 'ім’я', 'wedding': 'весілля', 'man': 'чоловік', 'woman': 'жінка', 'with': 'з', 'him': 'ним', 'wife': 'дружина', 'red': 'рудий',
      'strict': 'суворий', 'son': 'син', 'so': 'тому', 'old': 'старий; літній', 'grandchildren': 'онуки', 'ten': 'десять', 'brother': 'брат',
      'ill': 'хворий', 'why': 'чому', 'how many': 'скільки', 'beautiful': 'гарний', 'smile': 'усмішка', 'hard': 'важкий', 'very': 'дуже',
      'happy': 'щасливий', 'someone': 'хтось', 'questions': 'питання', 'girl': 'дівчина', 'pen': 'ручка', 'people': 'люди', 'review': 'повторення',
      'has got': 'має', 'have got': 'мати', "haven't got": 'не маю', "hasn't got": 'не має', "that's": 'це (that is)', "he's": 'він є',
      "she's": 'вона є', "it's": 'це є', "i'm": 'я є', 'their': 'їхній', 'our': 'наш', 'his': 'його', 'her': 'її'
    }
  });
})();
