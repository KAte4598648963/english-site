/*
 * A1 · Module 5 · Lesson 4 — Review: My weekend
 * Reviews: like/love/hate + -ing, object pronouns, can/can’t, Present Continuous vs Present Simple.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'A weekend at the lake',
    text: `Hi Kate!

I’m writing to you from a little wooden house next to a lake. It’s Saturday evening and I’m sitting by the fire. My friends are cooking fish — I can’t cook fish, so I’m just watching them!

We usually spend our weekends in the city, but this weekend we’re in the countryside. It’s wonderful! In the morning we go kayaking. I love kayaking, but I’m not very good at it yet. Taras can paddle really fast — he’s helping me.

Right now the sun is going down and the birds are singing. Oksana is playing the guitar and Taras is singing with her. He can’t sing at all, but he loves it!

There isn’t any Wi-Fi here and I don’t mind it. I don’t check my phone every five minutes. I’m enjoying the silence.

What are you doing this weekend? Write to me!

Love,
Ira`
  };

  ENG.registerLesson({
    id: 'a1-m5-l4',
    level: 'a1',
    title: 'Review: My weekend',
    subtitle: 'Повторення модуля 5: like + -ing, me/him/them, can, Present Continuous vs Simple',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Ira’s weekend',
            instructions: 'Прочитай лист Іри з вихідних біля озера.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is Ira?', options: ['In the city', 'In a house next to a lake', 'In a hotel'], answer: 1 },
              { id: 'q2', q: 'Why isn’t Ira cooking?', options: ['She can’t cook fish.', 'She’s tired.', 'She hates fish.'], answer: 0 },
              { id: 'q3', q: 'What do they do in the morning?', options: ['Go hiking', 'Go kayaking', 'Go fishing'], answer: 1 },
              { id: 'q4', q: 'Who can paddle fast?', options: ['Ira', 'Oksana', 'Taras'], answer: 2 },
              { id: 'q5', q: 'What is Ira enjoying?', options: ['The Wi-Fi', 'The silence', 'Her phone'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'They usually spend weekends in the countryside.', answer: false, explain: '“We usually spend our weekends in the city.”' },
              { id: 's2', s: 'Ira is very good at kayaking.', answer: false, explain: '“I’m not very good at it yet.”' },
              { id: 's3', s: 'Oksana is playing the guitar.', answer: true },
              { id: 's4', s: 'Taras can sing very well.', answer: false, explain: '“He can’t sing at all.”' },
              { id: 's5', s: 'Ira doesn’t mind not having Wi-Fi.', answer: true }
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
            title: 'Nature weekend + module review',
            instructions: 'Нові слова з листа та повторення модуля 5.',
            cards: [
              { front: 'lake', ipa: '/leɪk/', back: 'озеро', example: 'Our house is next to a lake.' },
              { front: 'wooden', ipa: '/ˈwʊdn/', back: 'дерев’яний', example: 'It’s a little wooden house.' },
              { front: 'fire', ipa: '/ˈfaɪə/', back: 'вогонь, багаття', example: 'We’re sitting by the fire.' },
              { front: 'countryside', ipa: '/ˈkʌntrisaɪd/', back: 'сільська місцевість', example: 'We love the countryside.' },
              { front: 'go kayaking', ipa: '/ˈkaɪækɪŋ/', back: 'кататися на каяку', example: 'We go kayaking in the morning.' },
              { front: 'paddle', ipa: '/ˈpædl/', back: 'веслувати', example: 'He can paddle fast.' },
              { front: 'the sun is going down', back: 'сонце сідає', example: 'The sun is going down. It’s beautiful.' },
              { front: 'silence', ipa: '/ˈsaɪləns/', back: 'тиша', example: 'I’m enjoying the silence.' },
              { front: 'spend (time)', back: 'проводити (час)', example: 'We spend weekends in the city.' },
              { front: 'be good at', back: 'добре вміти', example: 'I’m not good at kayaking.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 5 words',
            instructions: 'Поєднай слова модуля 5 з перекладом.',
            pairs: [
              ['hiking', 'піші походи'],
              ['I don’t mind', 'я не проти'],
              ['ride a horse', 'їздити верхи'],
              ['at all', 'зовсім'],
              ['wait for', 'чекати на'],
              ['It’s snowing.', 'Йде сніг.'],
              ['countryside', 'сільська місцевість'],
              ['silence', 'тиша']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Weekend plans',
            instructions: 'Встав слова. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'We’re sitting by the {{fire}} and telling stories.' },
              { id: 'd2', text: 'I {{spend}} my weekends with my family.' },
              { id: 'd3', text: 'She’s very good {{at}} swimming.' },
              { id: 'd4', text: 'There’s a beautiful {{lake}} near our village.' },
              { id: 'd5', text: 'Let’s go {{kayaking}} tomorrow morning!' },
              { id: 'd6', text: 'I love the {{silence}} in the forest.' }
            ],
            distractors: ['wooden']
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
            title: 'Module 5 grammar — summary',
            instructions: 'Граматика модуля 5 на одній сторінці.',
            html: `
<h3>1. like / love / enjoy / don’t mind / hate + -ing</h3>
<div class="ex-line">I <b>love</b> kayak<b>ing</b>. She <b>doesn’t like</b> cook<b>ing</b>. <b>Do</b> you <b>enjoy</b> danc<b>ing</b>?</div>

<h3>2. Об’єктні займенники</h3>
<div class="table-wrap"><table>
  <tr><th>I → me</th><th>you → you</th><th>he → him</th><th>she → her</th><th>it → it</th><th>we → us</th><th>they → them</th></tr>
</table></div>
<div class="ex-line">I’m watching <b>them</b>. Taras is helping <b>me</b>. Write to <b>me</b>!</div>

<h3>3. can / can’t</h3>
<div class="ex-line">Taras <b>can</b> paddle fast. I <b>can’t</b> cook fish. <b>Can</b> you swim? — Yes, I <b>can</b>.</div>
<p>Без to, без -s, без do: <span class="yes">He can sing.</span></p>

<h3>4. Present Simple чи Present Continuous?</h3>
<div class="table-wrap"><table>
  <tr><th>Present Simple — звичка</th><th>Present Continuous — зараз</th></tr>
  <tr><td>We <b>usually spend</b> weekends in the city.</td><td>This weekend we<b>’re staying</b> at the lake.</td></tr>
  <tr><td>I <b>don’t check</b> my phone here.</td><td>Right now I<b>’m sitting</b> by the fire.</td></tr>
</table></div>
<p>Дієслова like, love, know, want, need — без -ing: I <b>love</b> it here (не «I’m loving»).</p>

<div class="tip">✅ <b>Чек-лист модуля 5</b> — я вмію:<br>
• розповісти про свої хобі й що я люблю / не люблю робити;<br>
• сказати, що я вмію і не вмію, і наскільки добре;<br>
• попросити про допомогу чи дозвіл (Can you…? Can I…?);<br>
• описати, що відбувається зараз, і порівняти зі звичним.</div>`
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'Module 5 mix',
            instructions: 'Встав дієслово в правильній формі.',
            items: [
              { id: 'g1', text: 'I love {{kayaking}}. (kayak)' },
              { id: 'g2', text: 'Right now my friends {{are cooking|’re cooking}} fish. (cook)' },
              { id: 'g3', text: 'Taras can {{paddle}} really fast. (paddle)' },
              { id: 'g4', text: 'We usually {{spend}} weekends in the city. (spend)' },
              { id: 'g5', text: 'Oksana {{is playing|’s playing}} the guitar now. (play)' },
              { id: 'g6', text: 'He loves {{singing}}, but he can’t sing! (sing)' },
              { id: 'g7', text: 'I {{don’t mind|do not mind}} the silence. (− mind)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Яке речення правильне?',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['I like swim.', 'I like swimming.', 'I am like swimming.'], answer: 1 },
              { id: 'c2', q: 'Обери правильне:', options: ['She can plays tennis.', 'She cans play tennis.', 'She can play tennis.'], answer: 2 },
              { id: 'c3', q: 'Обери правильне:', options: ['Look! It snows.', 'Look! It’s snowing.', 'Look! It snowing.'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['Come with we!', 'Come with us!', 'Come with our!'], answer: 1 },
              { id: 'c5', q: 'Обери правильне:', options: ['I am knowing him.', 'I know him.', 'I know he.'], answer: 1 },
              { id: 'c6', q: 'Обери правильне:', options: ['Do you can ski?', 'Can you ski?', 'Are you can ski?'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Questions for Ira',
            instructions: 'Склади питання до Іри.',
            items: [
              { id: 'o1', prompt: 'Що ви зараз робите?', answer: 'What are you doing now?' },
              { id: 'o2', prompt: 'Ти вмієш веслувати?', answer: 'Can you paddle?', extra: ['Do'] },
              { id: 'o3', prompt: 'Тобі подобається кататися на каяку?', answer: 'Do you like kayaking?' },
              { id: 'o4', prompt: 'Тарас тобі допомагає?', answer: 'Is Taras helping you?' }
            ]
          },
          {
            id: 'gram-mod14',
            type: 'choice',
            title: '↺ Modules 1–4 review',
            instructions: 'Повторення попередніх модулів.',
            items: [
              { id: 'm1', q: 'There ___ a lake next to the house.', options: ['is', 'are', 'has'], answer: 0 },
              { id: 'm2', q: 'There aren’t ___ shops in the village.', options: ['some', 'any', 'a'], answer: 1 },
              { id: 'm3', q: 'How ___ friends are there at the lake?', options: ['much', 'many'], answer: 1, explain: 'friends — злічуване → how many.' },
              { id: 'm4', q: 'Oksana ___ got a guitar.', options: ['have', 'has', 'is'], answer: 1 },
              { id: 'm5', q: 'This is ___ house.', options: ['Taras', 'Taras’s', 'Tarases'], answer: 1 }
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
            title: 'Kate calls Ira',
            instructions: 'Кейт телефонує Ірі після її листа. Послухай.',
            audio: {
              title: 'Phone call: Kate & Ira',
              lines: [
                { who: 'Kate', text: 'Hi Ira! Thanks for your letter. Are you still at the lake?' },
                { who: 'Ira', text: 'No, I’m on the bus now. We’re going back to the city.' },
                { who: 'Kate', text: 'Oh no! Do you like the countryside?' },
                { who: 'Ira', text: 'I love it! I want to go again next month. Can you come with us?' },
                { who: 'Kate', text: 'Maybe! But I can’t swim very well and I hate cold water.' },
                { who: 'Ira', text: 'Don’t worry. You don’t need to swim. You can sit by the fire with me and read!' },
                { who: 'Kate', text: 'That sounds perfect. What are you doing tonight?' },
                { who: 'Ira', text: 'I’m meeting Taras and Oksana. We’re looking at our photos!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Where is Ira now?', options: ['At the lake', 'On the bus', 'At home'], answer: 1 },
              { id: 'l2', q: 'When does Ira want to go again?', options: ['Next week', 'Next month', 'Next year'], answer: 1 },
              { id: 'l3', q: 'What does Kate hate?', options: ['Fire', 'Cold water', 'Reading'], answer: 1 },
              { id: 'l4', q: 'What can Kate do at the lake?', options: ['Swim', 'Sit by the fire and read', 'Go kayaking'], answer: 1 },
              { id: 'l5', q: 'What is Ira doing tonight?', options: ['Cooking fish', 'Looking at photos with friends', 'Writing a letter'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'We are going back to the city.' },
              { id: 'dc2', text: 'Can you come with us?' },
              { id: 'dc3', text: 'I can’t swim very well.' },
              { id: 'dc4', text: 'I hate cold water.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-letter',
            type: 'writing',
            title: 'Reply to Ira',
            instructions: 'Ти — Кейт. Напиши відповідь Ірі про свої вихідні.',
            prompt: 'Write a letter to Ira (80–100 words).\n• Where are you right now and what are you doing? (Present Continuous)\n• What do you usually do at the weekend? (Present Simple)\n• What do you love / hate doing?\n• What can / can’t you do? (e.g. swim, cook, paddle)\n• Use at least two object pronouns (me, her, us, them).',
            minWords: 80,
            maxWords: 110,
            phrases: ['Right now I’m', 'I usually', 'I love', 'I hate', 'I can', 'I can’t', 'with me', 'them'],
            checklist: ['Є Present Continuous (am/is/are + -ing)', 'Є Present Simple з usually', 'Після love/hate — -ing', 'Є can і can’t', 'Є 2 об’єктні займенники'],
            model: `Hi Ira!

Thanks for your lovely letter! Right now I’m sitting in my kitchen and I’m drinking hot chocolate. It’s raining outside.

I usually spend my weekends at home. I love reading and I enjoy baking, but I hate cleaning! This weekend my sister is visiting me. We’re making pizza now — she can cook very well, but I can’t!

Your weekend sounds amazing. I can’t paddle, but I can learn! Please send me some photos of you and Taras and Oksana. I want to see them!

Love,
Kate`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-weekend',
            type: 'speaking',
            title: 'Weekends',
            instructions: 'Відповідай уголос. Змішуй граматику модуля!',
            phrases: ['I usually…', 'This weekend I’m…', 'I love…ing', 'I can / can’t…', 'with them / with her'],
            tasks: [
              { id: 'sp1', q: 'What do you usually do at the weekend? Who with?', tips: 'I usually … with my … I love … with them.', model: 'I usually go to the market with my mum. I love cooking with her.' },
              { id: 'sp2', q: 'What is happening at your home right now?', tips: 'My … is …ing. The … are …ing.', model: 'My husband is working and my kids are playing a game.' },
              { id: 'sp3', q: 'Describe your perfect weekend. What can you do there?', tips: 'In my perfect weekend I … I can …', model: 'In my perfect weekend I’m at the sea. I can swim, sleep late and eat ice cream!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'weekend': 'вихідні', 'lake': 'озеро', 'writing': 'пишу', 'little': 'маленький', 'wooden': 'дерев’яний', 'house': 'будинок', 'next to': 'поруч з',
      'evening': 'вечір', 'sitting': 'сиджу', 'by the fire': 'біля багаття', 'fire': 'багаття', 'friends': 'друзі', 'cooking': 'готують', 'fish': 'риба',
      "can't": 'не вмію', 'just': 'просто', 'watching': 'спостерігаю', 'them': 'їх', 'usually': 'зазвичай', 'spend': 'проводити', 'city': 'місто',
      'countryside': 'сільська місцевість', 'wonderful': 'чудово', 'morning': 'ранок', 'go kayaking': 'кататися на каяку', 'kayaking': 'каякінг',
      'good at': 'добре вміти', 'yet': 'поки що', 'paddle': 'веслувати', 'really': 'справді', 'fast': 'швидко', 'helping': 'допомагає', 'me': 'мене, мені',
      'right now': 'просто зараз', 'sun': 'сонце', 'going down': 'сідає', 'birds': 'птахи', 'singing': 'співають; співати', 'playing': 'грає', 'guitar': 'гітара',
      'with her': 'з нею', 'at all': 'зовсім', 'loves': 'любить', 'wi-fi': 'вайфай', "don't mind": 'не проти', 'check': 'перевіряти', 'phone': 'телефон',
      'every five minutes': 'кожні п’ять хвилин', 'enjoying': 'насолоджуюся', 'silence': 'тиша', 'write to me': 'напиши мені', 'love': 'з любов’ю; любити',
      'hotel': 'готель', 'tired': 'втомлена', 'hate': 'ненавидіти', 'hiking': 'піші походи', 'fishing': 'рибалка', 'having': 'мати', 'ride': 'їздити',
      'horse': 'кінь', 'wait for': 'чекати на', 'snowing': 'йде сніг', 'telling stories': 'розповідаємо історії', 'family': 'сім’я', 'village': 'село',
      "let's go": 'ходімо', 'tomorrow': 'завтра', 'forest': 'ліс', 'thanks': 'дякую', 'letter': 'лист', 'still': 'досі', 'bus': 'автобус', 'going back': 'повертаємося',
      'oh no': 'о ні', 'want': 'хочу', 'again': 'знову', 'next month': 'наступного місяця', 'come with us': 'поїхати з нами', 'maybe': 'можливо', 'swim': 'плавати',
      'cold': 'холодна', 'water': 'вода', "don't worry": 'не хвилюйся', 'need': 'потрібно', 'sit': 'сидіти', 'read': 'читати', 'sounds perfect': 'звучить ідеально',
      'tonight': 'сьогодні ввечері', 'meeting': 'зустрічаюся', 'looking at': 'дивимося на', 'photos': 'фото', 'next week': 'наступного тижня',
      'kitchen': 'кухня', 'hot chocolate': 'гарячий шоколад', 'outside': 'надворі', 'baking': 'випікання', 'cleaning': 'прибирання', 'sister': 'сестра',
      'visiting': 'гостює', 'making': 'робимо', 'pizza': 'піца', 'amazing': 'дивовижно', 'learn': 'навчитися', 'send': 'надіслати', 'see': 'побачити',
      'market': 'ринок', 'mum': 'мама', 'husband': 'чоловік', 'kids': 'діти', 'game': 'гра', 'perfect': 'ідеальний', 'sea': 'море', 'sleep late': 'спати довго',
      'ice cream': 'морозиво', "i'm": 'я (є)', "it's": 'це (є)', "we're": 'ми (є)', "he's": 'він (є)', "there isn't": 'немає'
    }
  });
})();
