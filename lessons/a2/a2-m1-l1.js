/*
 * A2 · Module 1 · Lesson 1 — My lifestyle (Present Simple vs Present Continuous; state verbs)
 * Review: A1 tenses. Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Life on the road: a digital nomad',
    text: `Sofia Melnyk is a graphic designer from Dnipro. She works for clients in five different countries, but she doesn’t have an office. In fact, she doesn’t even have a permanent home. Sofia is a “digital nomad”: she travels around the world with her laptop and works online.

“I usually stay in one place for two or three months,” she explains. “I rent a small flat, find a good café with fast Wi-Fi, and start working. At the moment I’m living in Lisbon. I’m renting a flat near the sea and I’m learning Portuguese.”

Does she like this lifestyle? “Yes, I love it. I meet new people all the time and I never get bored. But it isn’t always easy. Sometimes I miss my family, and I don’t have a regular routine. This month I’m working very hard because I have three big deadlines.”

What about the future? “I know a lot of nomads who settle down after a few years. I think I want to have a garden one day — but not now!”`
  };

  ENG.registerLesson({
    id: 'a2-m1-l1',
    level: 'a2',
    title: 'My lifestyle. Спосіб життя',
    subtitle: 'Present Simple vs Present Continuous · дієслова стану (know, want, like…)',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A digital nomad',
            instructions: 'Прочитай статтю про цифрову кочівницю й обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What is Sofia’s job?', options: ['Photographer', 'Graphic designer', 'Travel agent'], answer: 1 },
              { id: 'q2', q: 'How long does she usually stay in one place?', options: ['Two or three weeks', 'Two or three months', 'A year'], answer: 1 },
              { id: 'q3', q: 'Where is she living at the moment?', options: ['In Dnipro', 'In Lisbon', 'In Barcelona'], answer: 1 },
              { id: 'q4', q: 'Why is she working very hard this month?', options: ['She needs money for a flat.', 'She has three big deadlines.', 'Her café is closed.'], answer: 1 },
              { id: 'q5', q: 'What does she want one day?', options: ['A garden', 'An office', 'A big car'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда? Звертай увагу, що для Софії звичне, а що — тимчасове.',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Sofia has an office in Dnipro.', answer: false, explain: '“…she doesn’t have an office.”' },
              { id: 's2', s: 'She is learning Portuguese now.', answer: true },
              { id: 's3', s: 'She often gets bored.', answer: false, explain: '“I never get bored.”' },
              { id: 's4', s: 'She sometimes misses her family.', answer: true },
              { id: 's5', s: 'She wants to settle down now.', answer: false, explain: '“…but not now!”' }
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
            title: 'Work & lifestyle',
            instructions: 'Слова про роботу і спосіб життя. Спробуй скласти з кожним речення про себе.',
            cards: [
              { front: 'lifestyle', ipa: '/ˈlaɪfstaɪl/', back: 'спосіб життя', example: 'She has a healthy lifestyle.' },
              { front: 'permanent / temporary', ipa: '/ˈpɜːmənənt/ /ˈtemprəri/', back: 'постійний / тимчасовий', example: 'It’s only a temporary job.' },
              { front: 'rent', back: 'орендувати; орендна плата', example: 'We rent a flat in the centre.' },
              { front: 'commute', ipa: '/kəˈmjuːt/', back: 'їздити на роботу; дорога на роботу', example: 'My commute takes an hour.' },
              { front: 'work from home', back: 'працювати з дому', example: 'I work from home on Fridays.' },
              { front: 'client', ipa: '/ˈklaɪənt/', back: 'клієнт', example: 'She has clients in five countries.' },
              { front: 'deadline', ipa: '/ˈdedlaɪn/', back: 'кінцевий термін, дедлайн', example: 'The deadline is on Monday.' },
              { front: 'routine', ipa: '/ruːˈtiːn/', back: 'розпорядок, рутина', example: 'I don’t have a regular routine.' },
              { front: 'get bored', back: 'нудьгувати', example: 'I never get bored at work.' },
              { front: 'miss', back: 'сумувати за', example: 'I miss my family.' },
              { front: 'settle down', back: 'осісти, облаштуватися', example: 'They settled down in a small town.' },
              { front: 'all the time', back: 'постійно', example: 'I meet new people all the time.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Match the opposites and pairs',
            instructions: 'Поєднай слово з протилежним або пов’язаним за значенням.',
            pairs: [
              ['permanent', 'temporary'],
              ['rent a flat', 'buy a flat'],
              ['work in an office', 'work from home'],
              ['settle down', 'travel around'],
              ['regular', 'irregular'],
              ['get bored', 'have fun'],
              ['employee', 'freelancer'],
              ['busy', 'free']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'My working life',
            instructions: 'Встав слова. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'My {{commute}} is long: I take two buses and the metro.' },
              { id: 'd2', text: 'I have a big {{deadline}} on Friday, so I’m very busy.' },
              { id: 'd3', text: 'We don’t own our flat. We {{rent}} it.' },
              { id: 'd4', text: 'It’s not a permanent job. It’s {{temporary}}, for three months.' },
              { id: 'd5', text: 'When I travel, I {{miss}} my dog.' },
              { id: 'd6', text: 'I like my morning {{routine}}: coffee, a walk, then work.' }
            ],
            distractors: ['client']
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
            title: 'Present Simple vs Present Continuous',
            instructions: 'На A1 ми порівнювали «зазвичай» і «зараз». Тепер додамо тимчасові ситуації та дієслова стану.',
            html: `
<h3>1. Основна різниця</h3>
<div class="table-wrap"><table>
  <tr><th>Present Simple</th><th>Present Continuous</th></tr>
  <tr><td><b>постійне</b>: звички, факти, розклад<br>She <b>works</b> for clients in five countries.<br>I usually <b>stay</b> in one place for two months.</td><td><b>зараз</b> і <b>тимчасове</b>: цього тижня, цього місяця, у цей період<br>At the moment I<b>’m living</b> in Lisbon.<br>This month I<b>’m working</b> very hard.</td></tr>
  <tr><td>always, usually, often, sometimes, never, every day, on Mondays</td><td>now, right now, at the moment, today, this week/month/year, these days, currently</td></tr>
</table></div>
<p>💡 Порівняй: I <b>live</b> in Dnipro. (постійно) — I<b>’m living</b> in Lisbon <b>at the moment</b>. (тимчасово, кілька місяців)</p>

<h3>2. Ситуації, що змінюються</h3>
<p>Для змін і трендів — Present Continuous: My English <b>is getting</b> better. Prices <b>are going up</b>.</p>

<h3>3. Дієслова стану (State verbs)</h3>
<p>Деякі дієслова описують <b>стан</b>, а не дію, і зазвичай <b>не вживаються з -ing</b>, навіть «зараз»:</p>
<div class="table-wrap"><table>
  <tr><th>Група</th><th>Дієслова</th></tr>
  <tr><td>почуття</td><td>like, love, hate, want, prefer, need</td></tr>
  <tr><td>думки</td><td>know, understand, believe, remember, forget, mean</td></tr>
  <tr><td>володіння</td><td>have (= мати), own, belong</td></tr>
  <tr><td>чуття й вигляд</td><td>seem, look like, sound, smell, taste</td></tr>
</table></div>
<div class="ex-line"><span class="no">I’m knowing a lot of nomads.</span> → <span class="yes">I know a lot of nomads.</span></div>
<div class="ex-line"><span class="no">She’s wanting a garden.</span> → <span class="yes">She wants a garden.</span></div>

<h3>4. Дієслова з двома значеннями</h3>
<div class="table-wrap"><table>
  <tr><th>Стан (Simple)</th><th>Дія (Continuous)</th></tr>
  <tr><td>I <b>think</b> it’s a good idea. (= вважаю)</td><td>I<b>’m thinking</b> about my future. (= обмірковую)</td></tr>
  <tr><td>She <b>has</b> three deadlines. (= має)</td><td>She<b>’s having</b> lunch. (= їсть, дія)</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I am living in Kyiv all my life.</span> → <span class="yes">I live in Kyiv.</span> (постійно)<br>
<span class="no">Look! She talks to the manager.</span> → <span class="yes">Look! She’s talking to the manager.</span><br>
<span class="no">I am not understanding.</span> → <span class="yes">I don’t understand.</span><br>
<span class="no">This week I work from home.</span> (тимчасово) → <span class="yes">This week I’m working from home.</span></div>`
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Simple or Continuous?',
            instructions: 'Обери правильну форму. Подумай: постійне, тимчасове чи стан?',
            items: [
              { id: 'c1', q: 'Sofia ___ for clients in five countries.', options: ['works', 'is working'], answer: 0 },
              { id: 'c2', q: 'This month she ___ in Lisbon.', options: ['lives', 'is living'], answer: 1 },
              { id: 'c3', q: 'I ___ what you mean.', options: ['understand', 'am understanding'], answer: 0 },
              { id: 'c4', q: 'Be quiet! I ___ to an important client.', options: ['talk', 'am talking'], answer: 1 },
              { id: 'c5', q: 'My English ___ better every day.', options: ['gets', 'is getting'], answer: 1, explain: 'Ситуація, що змінюється → Present Continuous.' },
              { id: 'c6', q: 'This laptop ___ to my brother.', options: ['belongs', 'is belonging'], answer: 0 },
              { id: 'c7', q: 'We ___ dinner at the moment. Can I call you back?', options: ['have', 'are having'], answer: 1, explain: 'have dinner — дія (їсти), тому можна -ing.' }
            ]
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Complete the email',
            instructions: 'Постав дієслова в Present Simple або Present Continuous.',
            items: [
              { id: 'g1', text: 'Hi Mum! I {{’m writing|am writing}} to you from Lisbon. (write)' },
              { id: 'g2', text: 'I usually {{work}} in a café near my flat. (work)' },
              { id: 'g3', text: 'But this week I {{’m working|am working}} at home because it’s raining. (work)' },
              { id: 'g4', text: 'I {{love}} the food here! (love)' },
              { id: 'g5', text: 'My Portuguese {{is getting|’s getting}} better. (get)' },
              { id: 'g6', text: 'I {{don’t know|do not know}} when I’m coming home. (− know)' },
              { id: 'g7', text: 'I {{miss}} you and Dad a lot! (miss)' }
            ]
          },
          {
            id: 'gram-think',
            type: 'choice',
            title: 'think / have: state or action?',
            instructions: 'Ці дієслова мають два значення. Обери правильну форму.',
            items: [
              { id: 't1', q: 'I ___ that digital nomads are very brave.', options: ['think', 'am thinking'], answer: 0 },
              { id: 't2', q: 'Shh, I ___ about my answer.', options: ['think', 'am thinking'], answer: 1 },
              { id: 't3', q: 'She ___ a small flat near the sea.', options: ['has', 'is having'], answer: 0 },
              { id: 't4', q: 'They ___ a great time on holiday right now.', options: ['have', 'are having'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Цього місяця я працюю з дому.', answer: "This month I'm working from home." },
              { id: 'o2', prompt: 'Я не пам’ятаю його ім’я.', answer: "I don't remember his name.", extra: ['am'] },
              { id: 'o3', prompt: 'Ціни зростають.', answer: 'Prices are going up.' },
              { id: 'o4', prompt: 'Вона зазвичай орендує квартиру на два місяці.', answer: 'She usually rents a flat for two months.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення A1: Past Simple',
            instructions: 'Згадаймо минулий час: постав дієслово в Past Simple.',
            items: [
              { id: 'r1', text: 'Sofia {{left}} Dnipro three years ago. (leave)' },
              { id: 'r2', text: 'Last year she {{lived}} in Bali. (live)' },
              { id: 'r3', text: 'She {{didn’t like|did not like}} the heat there. (− like)' },
              { id: 'r4', text: 'Where {{did}} she go after Bali?' }
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
            title: 'Catching up',
            instructions: 'Старі друзі зустрічаються після довгої перерви й розповідають, як живуть. Послухай.',
            audio: {
              title: 'Dialogue: Dmytro & Alina',
              lines: [
                { who: 'Dmytro', text: 'Alina! I haven’t seen you for ages! What are you doing these days?' },
                { who: 'Alina', text: 'Hi, Dmytro! Well, I still work at the bank, but this year I’m studying too. I’m doing an online course in marketing.' },
                { who: 'Dmytro', text: 'Wow, that’s a lot! Do you have any free time?' },
                { who: 'Alina', text: 'Not much. I usually study in the evenings. And you? Are you still living in Kharkiv?' },
                { who: 'Dmytro', text: 'Yes, I live there, but at the moment I’m staying in Kyiv. My company is opening a new office here and I’m helping.' },
                { who: 'Alina', text: 'How long are you staying?' },
                { who: 'Dmytro', text: 'Two weeks. I don’t really like hotels, but the project is interesting.' }
              ]
            },
            items: [
              { id: 'l1', q: 'Where does Alina work?', options: ['In a bank', 'In a school', 'In a marketing company'], answer: 0 },
              { id: 'l2', q: 'What is she doing this year?', options: ['An online course', 'A new job', 'Travelling'], answer: 0 },
              { id: 'l3', q: 'When does she usually study?', options: ['In the mornings', 'At lunchtime', 'In the evenings'], answer: 2 },
              { id: 'l4', q: 'Why is Dmytro in Kyiv?', options: ['He lives there.', 'He’s helping open a new office.', 'He’s on holiday.'], answer: 1 },
              { id: 'l5', q: 'What doesn’t Dmytro like?', options: ['Kyiv', 'The project', 'Hotels'], answer: 2 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What are you doing these days?' },
              { id: 'dc2', text: 'I still work at the bank.' },
              { id: 'dc3', text: 'At the moment I’m staying in Kyiv.' },
              { id: 'dc4', text: 'I don’t really like hotels.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-lifestyle',
            type: 'writing',
            title: 'My life these days',
            instructions: 'Напиши допис для блогу «Як я живу зараз»: що в твоєму житті постійне, а що — тимчасове.',
            prompt: 'Write a blog post (90–120 words).\n• Your usual life: where you live, work/study, your routine (Present Simple).\n• What is different these days / this month? (Present Continuous)\n• Something that is changing (My … is getting…).\n• Use at least three state verbs (like, want, know, need…).',
            minWords: 90,
            maxWords: 130,
            phrases: ['I usually', 'These days', 'At the moment', 'This month', 'is getting', 'I want', 'I don’t know'],
            checklist: ['Present Simple — для постійного, Present Continuous — для тимчасового', 'Є слово-маркер: these days / at the moment / this month', 'Є ситуація, що змінюється (is getting…)', 'Дієслова стану без -ing'],
            model: `I live in Poltava with my husband and our cat. I’m a teacher at a primary school, so I usually get up at half past six and come home at four. In the evenings I cook dinner and read.

But these days my life is a bit different. This month the school is closed for repairs, so I’m teaching online. I’m also learning to drive! My driving is getting better, but I don’t like parking at all.

I really want to finish the course before summer. I know it’s difficult, but I need a car for our trips to the mountains.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-lifestyle',
            type: 'speaking',
            title: 'Talk about your lifestyle',
            instructions: 'Відповідай уголос 3–4 реченнями. Змішуй Present Simple і Present Continuous.',
            phrases: ['I usually…', 'These days I’m…', 'At the moment…', '…is getting better/worse', 'I don’t really like…'],
            tasks: [
              { id: 'sp1', q: 'Describe your usual week. What do you do every day?', tips: 'I usually … On Mondays I … I never …', model: 'I usually work from nine to six. On Mondays I go to the gym, and I never work at the weekend.' },
              { id: 'sp2', q: 'What are you doing these days that is different from usual?', tips: 'These days I’m … because …', model: 'These days I’m getting up earlier because I’m training for a half marathon.' },
              { id: 'sp3', q: 'Would you like to be a digital nomad? Why or why not?', tips: 'I think … I love / I don’t like …', model: 'I don’t think so. I love travelling, but I need a permanent home and a routine.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'life': 'життя', 'on the road': 'у дорозі', 'digital nomad': 'цифровий кочівник', 'nomad': 'кочівник', 'graphic designer': 'графічний дизайнер',
      'works for': 'працює на', 'clients': 'клієнти', 'client': 'клієнт', 'different': 'різні', 'countries': 'країни', 'office': 'офіс', 'in fact': 'насправді',
      'even': 'навіть', 'permanent': 'постійний', 'temporary': 'тимчасовий', 'home': 'дім', 'travels': 'подорожує', 'around the world': 'по всьому світу',
      'laptop': 'ноутбук', 'online': 'онлайн', 'stay': 'залишатися, жити', 'place': 'місце', 'months': 'місяці', 'explains': 'пояснює', 'rent': 'орендувати',
      'flat': 'квартира', 'find': 'знаходити', 'fast': 'швидкий', 'start': 'починати', 'at the moment': 'на даний момент', 'living': 'живу', 'renting': 'орендую',
      'near': 'біля', 'sea': 'море', 'learning': 'вивчаю', 'portuguese': 'португальська', 'lifestyle': 'спосіб життя', 'meet': 'зустрічати', 'new': 'нові',
      'people': 'люди', 'all the time': 'постійно', 'never': 'ніколи', 'get bored': 'нудьгувати', 'always': 'завжди', 'easy': 'легко', 'sometimes': 'іноді',
      'miss': 'сумувати за', 'family': 'сім’я', 'regular': 'регулярний', 'routine': 'розпорядок', 'this month': 'цього місяця', 'working': 'працюю', 'hard': 'напружено',
      'big': 'великі', 'deadlines': 'дедлайни', 'deadline': 'кінцевий термін', 'future': 'майбутнє', 'know': 'знати', 'a lot of': 'багато', 'settle down': 'осісти',
      'after': 'після', 'a few': 'кілька', 'years': 'роки', 'think': 'думати, вважати', 'want': 'хотіти', 'garden': 'сад', 'one day': 'колись', 'photographer': 'фотограф',
      'travel agent': 'турагент', 'weeks': 'тижні', 'needs': 'потребує', 'money': 'гроші', 'closed': 'зачинений', 'car': 'машина', 'commute': 'дорога на роботу',
      'work from home': 'працювати з дому', 'employee': 'працівник за наймом', 'freelancer': 'фрилансер', 'irregular': 'нерегулярний', 'have fun': 'розважатися',
      'travel around': 'подорожувати', 'buy': 'купувати', 'on time': 'вчасно', 'early': 'рано', 'takes': 'забирає (час)', 'metro': 'метро', 'busy': 'зайнятий',
      'own': 'володіти', 'job': 'робота', 'dog': 'собака', 'walk': 'прогулянка', 'mean': 'мати на увазі', 'understand': 'розуміти', 'quiet': 'тихо',
      'important': 'важливий', 'better': 'краще', 'belongs': 'належить', 'brother': 'брат', 'dinner': 'вечеря', 'call back': 'передзвонити', 'raining': 'йде дощ',
      'food': 'їжа', 'brave': 'хоробрий', 'answer': 'відповідь', 'remember': 'пам’ятати', 'prices': 'ціни', 'going up': 'зростають', 'left': 'поїхала (leave)',
      'heat': 'спека', 'catching up': 'обмін новинами', "haven't seen you for ages": 'сто років тебе не бачив', 'these days': 'останнім часом', 'still': 'досі',
      'bank': 'банк', 'studying': 'навчаюся', 'online course': 'онлайн-курс', 'marketing': 'маркетинг', 'free time': 'вільний час', 'not much': 'небагато',
      'evenings': 'вечори', 'staying': 'зупинився', 'company': 'компанія', 'opening': 'відкриває', 'helping': 'допомагаю', 'how long': 'як довго',
      'hotels': 'готелі', 'project': 'проєкт', 'interesting': 'цікавий', 'mornings': 'ранки', 'lunchtime': 'обідня перерва', 'holiday': 'відпустка',
      'blog post': 'допис у блозі', 'husband': 'чоловік', 'cat': 'кіт', 'primary school': 'початкова школа', 'repairs': 'ремонт', 'teaching': 'викладаю',
      'learning to drive': 'вчуся водити', 'driving': 'водіння', 'parking': 'паркування', 'finish': 'закінчити', 'course': 'курс', 'before': 'до',
      'summer': 'літо', 'difficult': 'важко', 'need': 'потребувати', 'trips': 'поїздки', 'mountains': 'гори', 'gym': 'спортзал', 'weekend': 'вихідні',
      'earlier': 'раніше', 'training': 'тренуюся', 'half marathon': 'напівмарафон', "i don't think so": 'не думаю', 'travelling': 'подорожі',
      "i'm": 'я (є)', "she's": 'вона (є)', "doesn't": 'не', "don't": 'не', "isn't": 'не є', "it's": 'це (є)'
    }
  });
})();
