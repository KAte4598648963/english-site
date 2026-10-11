/*
 * A1 · Module 5 · Lesson 3 — What are you doing now? (Present Continuous; vs Present Simple)
 * Review: Present Simple (module 3), can (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Family chat on a rainy Saturday',
    text: `Mum (2:15 p.m.): Hi everyone! What are you all doing? It’s raining, so I’m sitting in a café with a book. 📚

Dad (2:16 p.m.): I’m at the garage. The mechanic is fixing our car. I’m waiting for him. Boring!

Sasha (2:18 p.m.): I’m not doing my homework, don’t worry 😄 I’m joking! I’m doing my maths homework right now. It’s difficult.

Granny (2:20 p.m.): I’m making a cake for dinner! Lisa is helping me. She’s washing the strawberries… and eating them!

Lisa (2:21 p.m.): I’m not eating them, Granny! Well… only three. 🍓

Mum (2:22 p.m.): Ha ha! And where is our dog?

Sasha (2:23 p.m.): Max is sleeping on my bed. He usually sleeps in the kitchen, but today he’s with me.`
  };

  ENG.registerLesson({
    id: 'a1-m5-l3',
    level: 'a1',
    title: 'What are you doing now? Зараз',
    subtitle: 'Present Continuous (am / is / are + -ing) · Present Simple чи Continuous',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'The family chat',
            instructions: 'Прочитай сімейний чат у дощову суботу.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is Mum?', options: ['At home', 'In a café', 'At the garage'], answer: 1 },
              { id: 'q2', q: 'What is the mechanic doing?', options: ['He’s waiting.', 'He’s fixing the car.', 'He’s drinking coffee.'], answer: 1 },
              { id: 'q3', q: 'What is Sasha doing?', options: ['Maths homework', 'Watching TV', 'Making a cake'], answer: 0 },
              { id: 'q4', q: 'Who is helping Granny?', options: ['Sasha', 'Lisa', 'Dad'], answer: 1 },
              { id: 'q5', q: 'Where is Max sleeping today?', options: ['In the kitchen', 'In the garden', 'On Sasha’s bed'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'It’s sunny today.', answer: false, explain: '“It’s raining.”' },
              { id: 's2', s: 'Dad is fixing the car.', answer: false, explain: 'The mechanic is fixing it. Dad is waiting.' },
              { id: 's3', s: 'Sasha thinks the homework is easy.', answer: false, explain: '“It’s difficult.”' },
              { id: 's4', s: 'Lisa is eating some strawberries.', answer: true },
              { id: 's5', s: 'Max usually sleeps in the kitchen.', answer: true }
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
            title: 'Actions & weather',
            instructions: 'Дії, які ми робимо «зараз», і погода.',
            cards: [
              { front: 'wait for', back: 'чекати на', example: 'I’m waiting for the bus.' },
              { front: 'do homework', back: 'робити домашнє завдання', example: 'Sasha is doing his homework.' },
              { front: 'tidy up', ipa: '/ˈtaɪdi/', back: 'прибирати', example: 'We’re tidying up the kitchen.' },
              { front: 'chat online', back: 'спілкуватися онлайн', example: 'She’s chatting online with friends.' },
              { front: 'look for', back: 'шукати', example: 'I’m looking for my keys.' },
              { front: 'wear', ipa: '/weə/', back: 'носити, бути вдягненим', example: 'He’s wearing a blue jacket.' },
              { front: 'It’s raining.', back: 'Йде дощ.', example: 'Take an umbrella — it’s raining!' },
              { front: 'It’s snowing.', back: 'Йде сніг.', example: 'Look! It’s snowing!' },
              { front: 'The sun is shining.', back: 'Світить сонце.', example: 'The sun is shining today.' },
              { front: 'joke', ipa: '/dʒəʊk/', back: 'жартувати; жарт', example: 'Don’t worry, I’m joking!' },
              { front: 'right now', back: 'просто зараз', example: 'I’m busy right now.' },
              { front: 'difficult / easy', ipa: '/ˈdɪfɪkəlt/', back: 'важкий / легкий', example: 'The homework is difficult.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Match the phrases',
            instructions: 'Поєднай англійські фрази з перекладом.',
            pairs: [
              ['wait for a bus', 'чекати на автобус'],
              ['look for keys', 'шукати ключі'],
              ['tidy up a room', 'прибирати кімнату'],
              ['wear a coat', 'бути в пальті'],
              ['chat online', 'спілкуватися онлайн'],
              ['It’s snowing.', 'Йде сніг.'],
              ['right now', 'просто зараз'],
              ['I’m joking!', 'Я жартую!']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What’s happening?',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Take an umbrella. It’s {{raining}}.' },
              { id: 'd2', text: 'I can’t find my phone. I’m {{looking}} for it.' },
              { id: 'd3', text: 'She’s {{wearing}} a beautiful red dress.' },
              { id: 'd4', text: 'We’re {{waiting}} for the train. It’s late.' },
              { id: 'd5', text: 'The kids are {{tidying}} up their room.' },
              { id: 'd6', text: 'The sun is {{shining}} — let’s go to the beach!' }
            ],
            distractors: ['snowing']
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
            title: 'Present Continuous',
            instructions: 'Новий час: що відбувається саме зараз. І порівняння з Present Simple, який ти вже знаєш.',
            html: `
<h3>1. Коли вживаємо?</h3>
<p>Present Continuous = дія відбувається <b>зараз, у цей момент</b> (або в цей період).</p>
<div class="ex-line">Look! It <mark>is raining</mark>. — Дивись! <u>Йде</u> дощ (зараз).</div>
<div class="ex-line">I <mark>am doing</mark> my homework right now.</div>
<p>Слова-підказки: <b>now, right now, at the moment, today, Look! Listen!</b></p>

<h3>2. Форма: am / is / are + дієслово-ing</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>I</td><td>I<b>’m</b> read<b>ing</b>.</td><td>I<b>’m not</b> read<b>ing</b>.</td><td><b>Am</b> I read<b>ing</b>?</td></tr>
  <tr><td>he / she / it</td><td>She<b>’s</b> cook<b>ing</b>.</td><td>She <b>isn’t</b> cook<b>ing</b>.</td><td><b>Is</b> she cook<b>ing</b>?</td></tr>
  <tr><td>you / we / they</td><td>We<b>’re</b> wait<b>ing</b>.</td><td>We <b>aren’t</b> wait<b>ing</b>.</td><td><b>Are</b> you wait<b>ing</b>?</td></tr>
</table></div>
<p>Короткі відповіді — як у to be: Yes, I am. / No, she isn’t. / Yes, they are.</p>
<p>З питальним словом: <b>What are</b> you do<b>ing</b>? <b>Where is</b> he go<b>ing</b>?</p>
<p>Правопис -ing — як в уроці 1: make → mak<b>ing</b>, sit → si<b>tt</b>ing, swim → swi<b>mm</b>ing.</p>

<h3>3. Present Simple чи Present Continuous?</h3>
<div class="table-wrap"><table>
  <tr><th>Present Simple — звичайно, завжди</th><th>Present Continuous — зараз</th></tr>
  <tr><td>Max <b>usually sleeps</b> in the kitchen.</td><td>Today he <b>is sleeping</b> on my bed.</td></tr>
  <tr><td>Dad <b>works</b> in an office.</td><td>Now he <b>is waiting</b> at the garage.</td></tr>
  <tr><td>usually, always, every day, often, never</td><td>now, right now, at the moment, today, Look!</td></tr>
</table></div>

<h3>4. Дієслова, які «не люблять» -ing</h3>
<p>Дієслова почуттів і думок зазвичай у Present Simple навіть «зараз»: <b>like, love, hate, want, know, understand, need</b>.<br>
<span class="no">I am knowing the answer.</span> → <span class="yes">I know the answer.</span></p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I reading now.</span> → <span class="yes">I’m reading now.</span><br>
<span class="no">She is cook.</span> → <span class="yes">She is cooking.</span><br>
<span class="no">Look! It rains.</span> → <span class="yes">Look! It’s raining.</span><br>
<span class="no">I am usually getting up at 7.</span> → <span class="yes">I usually get up at 7.</span></div>`
          },
          {
            id: 'gram-pc',
            type: 'gap',
            title: 'Make Present Continuous',
            instructions: 'Встав am / is / are + дієслово з -ing.',
            items: [
              { id: 'g1', text: 'Mum {{is sitting|’s sitting}} in a café. (sit)' },
              { id: 'g2', text: 'I {{am waiting|’m waiting}} for the mechanic. (wait)' },
              { id: 'g3', text: 'Granny and Lisa {{are making|’re making}} a cake. (make)' },
              { id: 'g4', text: 'Lisa {{isn’t eating|is not eating}} the strawberries! (− eat)' },
              { id: 'g5', text: 'It {{is raining|’s raining}} today. (rain)' },
              { id: 'g6', text: 'What {{are}} you doing?' },
              { id: 'g7', text: '{{Is}} Max sleeping? — Yes, he is.' }
            ]
          },
          {
            id: 'gram-psvspc',
            type: 'choice',
            title: 'Simple or Continuous?',
            instructions: 'Обери час: звичка (Present Simple) чи зараз (Present Continuous)?',
            items: [
              { id: 'c1', q: 'Look! The children ___ in the garden.', options: ['play', 'are playing'], answer: 1 },
              { id: 'c2', q: 'I ___ coffee every morning.', options: ['drink', 'am drinking'], answer: 0 },
              { id: 'c3', q: 'Shh! The baby ___.', options: ['sleeps', 'is sleeping'], answer: 1 },
              { id: 'c4', q: 'My dad usually ___ to work by bus.', options: ['goes', 'is going'], answer: 0 },
              { id: 'c5', q: 'I can’t talk now. I ___ dinner.', options: ['cook', 'am cooking'], answer: 1 },
              { id: 'c6', q: 'I ___ the answer.', options: ['know', 'am knowing'], answer: 0, explain: 'know — дієслово стану, не вживається з -ing.' },
              { id: 'c7', q: 'It often ___ in London.', options: ['rains', 'is raining'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Що ти зараз робиш?', answer: 'What are you doing now?' },
              { id: 'o2', prompt: 'Вона не дивиться телевізор.', answer: "She isn't watching TV.", extra: ["doesn't"] },
              { id: 'o3', prompt: 'Ми чекаємо на автобус.', answer: 'We are waiting for the bus.' },
              { id: 'o4', prompt: 'Він зазвичай працює вдома, але сьогодні він в офісі.', answer: 'He usually works at home, but today he is in the office.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: can + Present Simple',
            instructions: 'Згадаймо урок 2 і модуль 3.',
            items: [
              { id: 'r1', q: 'Granny ___ make great cakes.', options: ['can', 'cans', 'is can'], answer: 0 },
              { id: 'r2', q: 'Sasha ___ maths.', options: ['don’t like', 'doesn’t like', 'isn’t like'], answer: 1 },
              { id: 'r3', q: '___ Dad fix cars? — No, he can’t.', options: ['Does', 'Is', 'Can'], answer: 2 },
              { id: 'r4', q: 'Max ___ in the kitchen every night.', options: ['sleep', 'sleeps', 'sleeping'], answer: 1 }
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
            title: 'A phone call',
            instructions: 'Ігор телефонує подрузі Яні. Послухай і дай відповіді.',
            audio: {
              title: 'Phone call: Ihor & Yana',
              lines: [
                { who: 'Ihor', text: 'Hi, Yana! What are you doing? Are you busy?' },
                { who: 'Yana', text: 'Hi, Ihor! I’m on the train. I’m going to Lviv.' },
                { who: 'Ihor', text: 'Really? Why are you going to Lviv?' },
                { who: 'Yana', text: 'My cousin is getting married on Saturday! I’m looking at the window now — it’s snowing and it’s beautiful.' },
                { who: 'Ihor', text: 'Wow. Here in Kyiv the sun is shining. I’m sitting in the park.' },
                { who: 'Yana', text: 'Lucky you! Sorry, I can’t talk now. The train is stopping and I need to get off.' },
                { who: 'Ihor', text: 'OK, have fun! Bye!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Where is Yana?', options: ['In a café', 'On a train', 'In the park'], answer: 1 },
              { id: 'l2', q: 'Where is she going?', options: ['Kyiv', 'Lviv', 'Odesa'], answer: 1 },
              { id: 'l3', q: 'Why is she going there?', options: ['For work', 'Her cousin is getting married.', 'For a holiday'], answer: 1 },
              { id: 'l4', q: 'What is the weather like in Kyiv?', options: ['It’s snowing.', 'It’s raining.', 'The sun is shining.'], answer: 2 },
              { id: 'l5', q: 'Why can’t Yana talk?', options: ['The train is stopping.', 'She’s sleeping.', 'She’s eating.'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What are you doing?' },
              { id: 'dc2', text: 'I am going to Lviv.' },
              { id: 'dc3', text: 'It is snowing here.' },
              { id: 'dc4', text: 'The train is stopping.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-now',
            type: 'writing',
            title: 'Right now…',
            instructions: 'Напиши повідомлення в сімейний чат: що ти робиш зараз і що роблять інші. Порівняй із тим, що ви робите зазвичай.',
            prompt: 'Write a chat message (60–80 words).\n• Where are you? What are you doing right now?\n• What is the weather like?\n• What are 2 other people doing? (Present Continuous)\n• Compare with a usual day: “I usually…, but today I’m…”',
            minWords: 60,
            maxWords: 90,
            phrases: ['Right now I’m', 'It’s raining', 'is sitting', 'are watching', 'I usually', 'but today'],
            checklist: ['am/is/are + -ing (не пропускай to be!)', 'Є 2 речення про інших людей', 'Є речення з usually (Present Simple)', 'Є but today… (Present Continuous)'],
            model: `Hi all! Right now I’m sitting on the balcony and I’m drinking tea. The sun is shining and it’s warm.

My husband is playing chess with our son in the living room. They aren’t talking — they’re thinking very hard! Our cat is sleeping next to me.

I usually work on Saturdays, but today I’m relaxing. What are you doing?`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-now',
            type: 'speaking',
            title: 'Describe the moment',
            instructions: 'Опиши уголос, що відбувається зараз навколо тебе.',
            phrases: ['Right now I’m…', 'At the moment…', 'He/She is…ing', 'They aren’t…', 'I usually…, but today…'],
            tasks: [
              { id: 'sp1', q: 'Where are you and what are you doing right now?', tips: 'I’m sitting / I’m learning …', model: 'I’m sitting at my desk. I’m learning English and I’m drinking coffee.' },
              { id: 'sp2', q: 'Look out of the window. What is happening?', tips: 'The sun is … People are … A man is …', model: 'It’s raining. Some people are walking with umbrellas and a woman is waiting for a bus.' },
              { id: 'sp3', q: 'What do you usually do on Saturdays? What are you doing this Saturday?', tips: 'I usually … but this Saturday I’m …', model: 'I usually go to the gym, but this Saturday I’m visiting my parents.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'family': 'сім’я', 'chat': 'чат; спілкуватися', 'rainy': 'дощовий', 'saturday': 'субота', 'everyone': 'усі', 'all': 'всі', "what are you doing": 'що ти робиш',
      'doing': 'роблячи', "it's raining": 'йде дощ', 'raining': 'дощить', 'so': 'тому', 'sitting': 'сиджу', 'café': 'кафе', 'book': 'книга', 'garage': 'автосервіс, гараж',
      'mechanic': 'механік', 'fixing': 'ремонтує', 'car': 'машина', 'waiting for': 'чекаю на', 'boring': 'нудно', 'homework': 'домашнє завдання',
      "don't worry": 'не хвилюйся', 'joking': 'жартую', 'maths': 'математика', 'right now': 'просто зараз', 'difficult': 'важкий', 'granny': 'бабуся',
      'making': 'роблю, готую', 'cake': 'торт', 'dinner': 'вечеря', 'helping': 'допомагає', 'washing': 'миє', 'strawberries': 'полуниці', 'eating': 'їсть',
      'well': 'ну', 'only': 'лише', 'dog': 'собака', 'sleeping': 'спить', 'bed': 'ліжко', 'usually': 'зазвичай', 'sleeps': 'спить', 'kitchen': 'кухня',
      'today': 'сьогодні', 'with me': 'зі мною', 'drinking': 'п’є', 'coffee': 'кава', 'watching': 'дивиться', 'garden': 'сад', 'sunny': 'сонячно',
      'easy': 'легкий', 'thinks': 'думає', 'wait for': 'чекати на', 'tidy up': 'прибирати', 'tidying': 'прибирають', 'chat online': 'спілкуватися онлайн',
      'look for': 'шукати', 'looking for': 'шукаю', 'wear': 'носити', 'wearing': 'вдягнена', 'snowing': 'йде сніг', 'sun': 'сонце', 'shining': 'світить',
      'joke': 'жарт', 'busy': 'зайнятий', 'umbrella': 'парасолька', 'bus': 'автобус', 'keys': 'ключі', 'coat': 'пальто', 'room': 'кімната',
      'phone': 'телефон', 'find': 'знайти', 'beautiful': 'гарна', 'red': 'червона', 'dress': 'сукня', 'train': 'потяг', 'late': 'запізнюється',
      'kids': 'діти', "let's": 'давай', 'beach': 'пляж', 'look': 'дивись', 'listen': 'слухай', 'at the moment': 'в даний момент', 'answer': 'відповідь',
      'know': 'знати', 'children': 'діти', 'play': 'грати', 'playing': 'грають', 'baby': 'немовля', 'shh': 'тсс', 'talk': 'говорити', 'cook': 'готувати',
      'often': 'часто', 'office': 'офіс', 'works': 'працює', 'going to': 'їду до', 'really': 'справді', 'why': 'чому', 'cousin': 'двоюрідна сестра / брат',
      'getting married': 'одружується', 'window': 'вікно', 'park': 'парк', 'lucky you': 'щастить тобі', 'sorry': 'вибач', 'stopping': 'зупиняється',
      'need to': 'треба', 'get off': 'вийти (з транспорту)', 'have fun': 'розважайся', 'work': 'робота', 'holiday': 'відпустка', 'weather': 'погода',
      'balcony': 'балкон', 'tea': 'чай', 'warm': 'тепло', 'husband': 'чоловік', 'chess': 'шахи', 'son': 'син', 'living room': 'вітальня', 'talking': 'розмовляють',
      'thinking': 'думають', 'hard': 'напружено', 'cat': 'кіт', 'next to': 'поруч', 'relaxing': 'відпочиваю', 'desk': 'стіл', 'learning': 'вчу',
      'out of the window': 'у вікно', 'happening': 'відбувається', 'people': 'люди', 'walking': 'ідуть', 'umbrellas': 'парасольки', 'woman': 'жінка',
      'gym': 'спортзал', 'visiting': 'відвідую', 'parents': 'батьки', "i'm": 'я (є)', "she's": 'вона (є)', "he's": 'він (є)', "it's": 'це (є)',
      "we're": 'ми (є)', "they're": 'вони (є)', "isn't": 'не (є)', "aren't": 'не (є)'
    }
  });
})();
