/*
 * A2 · Module 2 · Lesson 4 — Review: The wrong train
 * Reviews: Past Continuous, Past Simple vs Continuous (when/while), adverbs of manner, sequencing words.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'The wrong train',
    text: `Last summer my sister Olia and I decided to visit our cousin in Uzhhorod. We were very excited because we didn’t use to travel much together.

On the day of the trip, we arrived at the station early. It was raining heavily and the station was very crowded. While Olia was buying coffee, I was looking for our platform on the big screen. I found a train to “U…” and I shouted, “Quick, it’s leaving!” We ran as fast as we could and jumped on just before the doors closed.

At first everything seemed fine. We were chatting happily and eating sandwiches. Then the ticket inspector came. He looked at our tickets carefully and said, “Ladies, this train is going to Uman, not Uzhhorod!”

We felt terribly embarrassed. The other passengers were laughing quietly. After that, we got off at the next station and waited four hours for a train back.

In the end, we arrived in Uzhhorod a day late. Our cousin was waiting for us with a sign: “Welcome to the RIGHT city!”`
  };

  ENG.registerLesson({
    id: 'a2-m2-l4',
    level: 'a2',
    title: 'Review: The wrong train',
    subtitle: 'Повторення модуля 2: Past Continuous, when / while, прислівники, слова-зв’язки',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A travel mistake',
            instructions: 'Прочитай історію про подорож, що пішла не за планом.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where were the sisters going?', options: ['To Uman', 'To Uzhhorod', 'To Kyiv'], answer: 1 },
              { id: 'q2', q: 'What was Olia doing when the writer saw the train?', options: ['Buying coffee', 'Looking at the screen', 'Sleeping'], answer: 0 },
              { id: 'q3', q: 'How did they get on the train?', options: ['Slowly', 'They ran and jumped on.', 'The guard helped them.'], answer: 1 },
              { id: 'q4', q: 'Who told them about their mistake?', options: ['A passenger', 'The ticket inspector', 'Their cousin'], answer: 1 },
              { id: 'q5', q: 'What did their cousin have?', options: ['Flowers', 'A sign', 'A cake'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'It was sunny on the day of the trip.', answer: false, explain: '“It was raining heavily.”' },
              { id: 's2', s: 'The station was crowded.', answer: true },
              { id: 's3', s: 'The passengers were laughing loudly.', answer: false, explain: '“The other passengers were laughing quietly.”' },
              { id: 's4', s: 'They waited four hours for a train back.', answer: true },
              { id: 's5', s: 'They arrived in Uzhhorod on time.', answer: false, explain: 'They arrived a day late.' }
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
            title: 'Travel trouble + module review',
            instructions: 'Нові слова з історії і повторення модуля 2.',
            cards: [
              { front: 'crowded', ipa: '/ˈkraʊdɪd/', back: 'переповнений', example: 'The station was very crowded.' },
              { front: 'platform', ipa: '/ˈplætfɔːm/', back: 'платформа', example: 'Which platform is our train?' },
              { front: 'shout', ipa: '/ʃaʊt/', back: 'кричати', example: 'I shouted, “Quick!”' },
              { front: 'ticket inspector', back: 'контролер', example: 'The ticket inspector checked our tickets.' },
              { front: 'passenger', ipa: '/ˈpæsɪndʒə/', back: 'пасажир', example: 'The other passengers were laughing.' },
              { front: 'get on / get off', back: 'сісти в / вийти з (транспорту)', example: 'We got off at the next station.' },
              { front: 'sign', ipa: '/saɪn/', back: 'табличка, знак', example: 'He was holding a sign.' },
              { front: 'power cut', back: 'відключення світла', example: 'There was a power cut.' },
              { front: 'slip', back: 'посковзнутися', example: 'I slipped on the ice.' },
              { front: 'in the end', back: 'зрештою', example: 'In the end, everything was fine.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 2 words',
            instructions: 'Поєднай слова модуля 2 з перекладом.',
            pairs: [
              ['suddenly', 'раптом'],
              ['by candlelight', 'при свічках'],
              ['spill', 'розлити'],
              ['queue', 'черга'],
              ['embarrassed', 'збентежений'],
              ['carefully', 'обережно'],
              ['crowded', 'переповнений'],
              ['get off', 'вийти з транспорту']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'At the station',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'The train to Lviv leaves from {{platform}} 3.' },
              { id: 'd2', text: 'The {{ticket}} inspector asked for our tickets.' },
              { id: 'd3', text: 'The train was so {{crowded}} that we couldn’t sit down.' },
              { id: 'd4', text: 'We {{got}} off at the wrong station.' },
              { id: 'd5', text: 'Some {{passengers}} were sleeping, others were reading.' },
              { id: 'd6', text: 'Don’t {{shout}}! People are sleeping.' }
            ],
            distractors: ['puddle']
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
            instructions: 'Інструменти оповідача: усе про минулі історії.',
            html: `
<h3>1. Past Continuous — фон і дія в процесі</h3>
<div class="ex-line">It <b>was raining</b> heavily. The other passengers <b>were laughing</b>.</div>
<p>was / were + -ing · −: wasn’t / weren’t · ?: Was she…? / Were they…?</p>

<h3>2. Past Simple + Past Continuous</h3>
<div class="table-wrap"><table>
  <tr><th>Схема</th><th>Приклад</th></tr>
  <tr><td>довга дія + <b>when</b> + коротка</td><td>We <b>were chatting</b> when the inspector <b>came</b>.</td></tr>
  <tr><td><b>while</b> + довга, довга</td><td><b>While</b> Olia <b>was buying</b> coffee, I <b>was looking</b> for the platform.</td></tr>
  <tr><td>короткі дії по черзі — Past Simple</td><td>We <b>ran</b>, <b>jumped</b> on and the doors <b>closed</b>.</td></tr>
</table></div>

<h3>3. Прислівники способу дії</h3>
<div class="ex-line">ran <b>fast</b> · looked <b>carefully</b> · laughed <b>quietly</b> · felt <b>terribly</b> embarrassed · chatting <b>happily</b></div>
<p>good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>. Після be / look / feel — прикметник: We felt <b>embarrassed</b>.</p>

<h3>4. Слова-зв’язки</h3>
<div class="ex-line">At first… → Then… → Suddenly… → After that… → Later… → In the end…</div>

<div class="tip">✅ <b>Чек-лист модуля 2 (A2)</b> — я вмію:<br>
• розповісти, що я робив(ла) в певний момент минулого;<br>
• побудувати історію з фоном і подіями (when / while);<br>
• описати, як щось відбувалося (quickly, carefully, well);<br>
• зв’язно розповісти історію від початку до кінця.</div>`
          },
          {
            id: 'gram-tenses',
            type: 'gap',
            title: 'Retell the story',
            instructions: 'Постав дієслова в Past Simple або Past Continuous.',
            items: [
              { id: 'g1', text: 'It {{was raining}} when they {{arrived}} at the station. (rain / arrive)' },
              { id: 'g2', text: 'While Olia {{was buying}} coffee, her sister {{was looking}} at the screen. (buy / look)' },
              { id: 'g3', text: 'They {{were eating}} sandwiches when the inspector {{came}}. (eat / come)' },
              { id: 'g4', text: 'When they {{got}} off, it was still raining. (get)' }
            ]
          },
          {
            id: 'gram-adv',
            type: 'choice',
            title: 'Adjective, adverb or linker?',
            instructions: 'Обери правильне слово.',
            items: [
              { id: 'c1', q: 'They ran as ___ as they could.', options: ['fast', 'fastly', 'quick'], answer: 0 },
              { id: 'c2', q: 'The inspector looked at the tickets ___.', options: ['careful', 'carefully', 'care'], answer: 1 },
              { id: 'c3', q: 'They felt ___.', options: ['embarrassed', 'embarrassedly', 'embarrassing'], answer: 0 },
              { id: 'c4', q: '___ everything seemed fine, but then the problem began.', options: ['At first', 'In the end', 'Finally'], answer: 0 },
              { id: 'c5', q: 'The cousin speaks Hungarian very ___.', options: ['good', 'well', 'goodly'], answer: 1 },
              { id: 'c6', q: '___ they arrived in Uzhhorod a day late.', options: ['In the end', 'At the end', 'At first'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення з історії.',
            items: [
              { id: 'o1', prompt: 'Поки Оля купувала каву, я шукала платформу.', answer: 'While Olia was buying coffee, I was looking for the platform.' },
              { id: 'o2', prompt: 'Ми щасливо балакали, коли прийшов контролер.', answer: 'We were chatting happily when the inspector came.' },
              { id: 'o3', prompt: 'Після цього ми вийшли на наступній станції.', answer: 'After that, we got off at the next station.' },
              { id: 'o4', prompt: 'Інші пасажири тихо сміялися.', answer: 'The other passengers were laughing quietly.' }
            ]
          },
          {
            id: 'gram-m1',
            type: 'choice',
            title: '↺ Module 1 review',
            instructions: 'Повторення модуля 1: Present Simple / Continuous, relative clauses, used to.',
            items: [
              { id: 'm1', q: 'Our cousin ___ in Uzhhorod.', options: ['lives', 'is living'], answer: 0 },
              { id: 'm2', q: 'This week she ___ from home.', options: ['works', 'is working'], answer: 1 },
              { id: 'm3', q: 'We didn’t ___ travel much together.', options: ['used to', 'use to', 'using to'], answer: 1 },
              { id: 'm4', q: 'Uzhhorod is a city ___ there are a lot of cherry trees.', options: ['which', 'who', 'where'], answer: 2 },
              { id: 'm5', q: 'The man ___ checked our tickets was kind.', options: ['who', 'which', 'where'], answer: 0 }
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
            title: 'The cousin’s version',
            instructions: 'Тепер історію розповідає двоюрідна сестра Ліза. Послухай її версію.',
            audio: {
              title: 'Liza tells the story',
              lines: [
                { who: 'Liza', text: 'I was waiting at Uzhhorod station on Saturday morning. I was holding a big bunch of flowers.' },
                { who: 'Liza', text: 'The train arrived, but my cousins weren’t on it. I called Olia immediately. She was crying and laughing at the same time.' },
                { who: 'Liza', text: '“We’re in Uman!” she said. At first I didn’t understand. Then I laughed so loudly that people looked at me.' },
                { who: 'Liza', text: 'The next day I went to the station again. This time I wasn’t holding flowers — I made a funny sign.' },
                { who: 'Liza', text: 'When they finally got off the train, they saw the sign and turned red. But then we all hugged happily.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What was Liza holding on Saturday?', options: ['A sign', 'Flowers', 'A coffee'], answer: 1 },
              { id: 'l2', q: 'What was Olia doing when Liza called?', options: ['Sleeping', 'Crying and laughing', 'Eating'], answer: 1 },
              { id: 'l3', q: 'How did Liza laugh?', options: ['Quietly', 'Loudly', 'Sadly'], answer: 1 },
              { id: 'l4', q: 'What did Liza make the next day?', options: ['A cake', 'A funny sign', 'A video'], answer: 1 },
              { id: 'l5', q: 'How did the story end?', options: ['They argued.', 'They hugged happily.', 'They went home.'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'I was waiting at the station on Saturday morning.' },
              { id: 'dc2', text: 'I called Olia immediately.' },
              { id: 'dc3', text: 'At first I didn’t understand.' },
              { id: 'dc4', text: 'We all hugged happily.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-funny',
            type: 'writing',
            title: 'My funniest travel story',
            instructions: 'Напиши смішну історію з подорожі (реальну чи вигадану). Використай усю граматику модуля.',
            prompt: 'Write your story (120–150 words).\n• Beginning: when, where, who, the weather (Past Continuous for background).\n• Problem: what happened? (when / while)\n• What did you do? (sequencing words)\n• Ending: how did it end? How did you feel?\n• Use at least 4 adverbs of manner.',
            minWords: 120,
            maxWords: 160,
            phrases: ['Last summer', 'It was raining', 'While', 'when', 'At first', 'Suddenly', 'After that', 'In the end'],
            checklist: ['Фон у Past Continuous', 'Щонайменше 2× when і 1× while', '4+ прислівники способу дії', '5+ слів-зв’язок', 'Чітка кінцівка'],
            model: `Two years ago my husband and I went to Rome for our anniversary. On the first evening it was raining lightly and the streets were shining. We were walking slowly near the Trevi Fountain when a man offered to take our photo.

At first we were happy. He took the photos quickly and returned our phone politely. Then he asked for twenty euros! While my husband was arguing loudly with him, I was looking at the photos. Suddenly I started to laugh — every picture showed only our feet!

After that, we refused to pay, and the man walked away angrily. Later we asked a kind old lady to take a photo. In the end it was our favourite picture of the trip.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-review',
            type: 'speaking',
            title: 'Storyteller',
            instructions: 'Ти — оповідач. Розкажи історії уголос.',
            phrases: ['It was…', 'I was…ing when…', 'While…', 'At first… Then… In the end…', '…slowly / quickly / happily'],
            tasks: [
              { id: 'sp1', q: 'Retell “The wrong train” from Olia’s point of view.', tips: 'I was buying coffee when my sister shouted …', model: 'I was buying coffee when my sister shouted, “Quick!” We ran fast and jumped on the train. At first everything was fine…' },
              { id: 'sp2', q: 'Tell me about a time you got lost or took the wrong bus / train.', tips: 'I was going to … when I realised …', model: 'I was going to a meeting when I realised I was on the wrong bus. I got off quickly and took a taxi.' },
              { id: 'sp3', q: 'Describe what was happening at a busy place you visited (a market, a station, a festival).', tips: 'People were … Music was … Children were …', model: 'At the market people were shouting happily, music was playing and children were eating ice cream.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'wrong': 'не той, неправильний', 'train': 'потяг', 'summer': 'літо', 'sister': 'сестра', 'decided': 'вирішили', 'visit': 'відвідати',
      'cousin': 'двоюрідна сестра / брат', 'excited': 'схвильовані', "didn't use to": 'раніше не', 'travel': 'подорожувати', 'together': 'разом',
      'trip': 'поїздка', 'arrived': 'прибули', 'station': 'вокзал', 'early': 'рано', 'raining': 'йшов дощ', 'heavily': 'сильно', 'crowded': 'переповнений',
      'while': 'поки', 'buying': 'купувала', 'coffee': 'кава', 'looking for': 'шукала', 'platform': 'платформа', 'screen': 'екран', 'found': 'знайшла',
      'shouted': 'крикнула', 'quick': 'швидко', 'leaving': 'відправляється', 'ran': 'бігли', 'as fast as we could': 'так швидко, як могли',
      'jumped on': 'заскочили', 'just before': 'якраз перед тим, як', 'doors': 'двері', 'closed': 'зачинилися', 'at first': 'спочатку', 'seemed': 'здавалося',
      'fine': 'нормально', 'chatting': 'балакали', 'happily': 'весело', 'eating': 'їли', 'sandwiches': 'сендвічі', 'then': 'потім',
      'ticket inspector': 'контролер', 'looked at': 'подивився на', 'tickets': 'квитки', 'carefully': 'уважно', 'ladies': 'пані', 'going to': 'їде до',
      'felt': 'почувалися', 'terribly': 'жахливо', 'embarrassed': 'збентежені', 'other': 'інші', 'passengers': 'пасажири', 'laughing': 'сміялися',
      'quietly': 'тихо', 'after that': 'після цього', 'got off': 'вийшли', 'next': 'наступна', 'waited': 'чекали', 'hours': 'години', 'back': 'назад',
      'in the end': 'зрештою', 'a day late': 'на день пізніше', 'waiting for': 'чекала на', 'sign': 'табличка', 'welcome': 'ласкаво просимо',
      'right': 'правильний', 'city': 'місто', 'sleeping': 'спала', 'guard': 'охоронець', 'helped': 'допоміг', 'passenger': 'пасажир', 'flowers': 'квіти',
      'cake': 'торт', 'sunny': 'сонячно', 'on time': 'вчасно', 'shout': 'кричати', 'get on': 'сісти (в транспорт)', 'get off': 'вийти',
      'power cut': 'відключення світла', 'slip': 'посковзнутися', 'ice': 'лід', 'suddenly': 'раптом', 'by candlelight': 'при свічках', 'spill': 'розлити',
      'queue': 'черга', 'leaves': 'відправляється', "couldn't": 'не могли', 'sit down': 'сісти', 'reading': 'читали', 'puddle': 'калюжа',
      'still': 'досі', 'fast': 'швидко', 'careful': 'обережний', 'hungarian': 'угорська', 'well': 'добре', 'lives': 'живе', 'works': 'працює',
      'from home': 'з дому', 'cherry trees': 'вишневі дерева', 'checked': 'перевірив', 'kind': 'добрий', 'version': 'версія', 'saturday': 'субота',
      'morning': 'ранок', 'holding': 'тримала', 'bunch': 'букет', 'called': 'подзвонила', 'immediately': 'негайно', 'crying': 'плакала',
      'at the same time': 'одночасно', 'understand': 'зрозуміти', 'laughed': 'засміялася', 'loudly': 'голосно', 'people': 'люди', 'again': 'знову',
      'this time': 'цього разу', 'made': 'зробила', 'funny': 'смішний', 'finally': 'нарешті', 'turned red': 'почервоніли', 'hugged': 'обійнялися',
      'sadly': 'сумно', 'video': 'відео', 'argued': 'посварилися', 'funniest': 'найсмішніша', 'story': 'історія', 'years ago': 'роки тому',
      'husband': 'чоловік', 'rome': 'Рим', 'anniversary': 'річниця', 'evening': 'вечір', 'lightly': 'легенько', 'streets': 'вулиці', 'shining': 'блищали',
      'walking': 'гуляли', 'slowly': 'повільно', 'fountain': 'фонтан', 'offered': 'запропонував', 'take our photo': 'сфотографувати нас',
      'quickly': 'швидко', 'returned': 'повернув', 'politely': 'ввічливо', 'asked for': 'попросив', 'euros': 'євро', 'arguing': 'сперечався',
      'started': 'почала', 'every': 'кожна', 'picture': 'фото', 'showed': 'показувала', 'only': 'лише', 'feet': 'ноги', 'refused': 'відмовилися',
      'pay': 'платити', 'walked away': 'пішов геть', 'angrily': 'сердито', 'later': 'пізніше', 'old lady': 'літня пані', 'favourite': 'улюблене',
      'point of view': 'точка зору', 'got lost': 'заблукав', 'realised': 'зрозумів', 'meeting': 'зустріч', 'taxi': 'таксі', 'busy': 'людне',
      'market': 'ринок', 'festival': 'фестиваль', 'music': 'музика', 'playing': 'грала', 'children': 'діти', 'ice cream': 'морозиво'
    }
  });
})();
