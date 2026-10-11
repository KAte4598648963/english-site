/*
 * A2 · Module 6 · Lesson 1 — Have you ever…? (Present Perfect for experience: ever / never; been vs gone)
 * Review: Past Simple irregular verbs (A1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'The “Never Have I Ever” club',
    text: `Every month our book club plays a game called “Never Have I Ever”. Each person says something they have never done. Last Friday it was very funny!

Olena started: “I’ve never flown in a plane.” Everyone was surprised — she’s fifty and she’s visited a lot of countries. “I’ve always travelled by train or by car,” she explained. “I’m scared of flying.”

Then Marko said: “I’ve never eaten sushi.” Three people have eaten sushi in Japan, and they told him he must try it.

Iryna said: “I’ve never seen snow.” She grew up in Brazil and she has only lived in Ukraine for six months. “I’ve heard it’s beautiful, but I’ve never touched it!” We promised to build a snowman with her in December.

Finally it was my turn. “I’ve never broken a bone,” I said. Everyone else has broken something — an arm, a leg, a finger. Olena has broken her nose twice!

What about you? Have you ever done something unusual? Have you ever met a famous person?`
  };

  ENG.registerLesson({
    id: 'a2-m6-l1',
    level: 'a2',
    title: 'Have you ever…? Досвід',
    subtitle: 'Present Perfect: have / has + V3 · ever / never · been vs gone',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Never Have I Ever',
            instructions: 'Прочитай про гру книжкового клубу «Я ніколи не…».',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What has Olena never done?', options: ['Visited other countries', 'Flown in a plane', 'Broken a bone'], answer: 1 },
              { id: 'q2', q: 'Why doesn’t Olena fly?', options: ['It’s too expensive.', 'She’s scared of flying.', 'She has no time.'], answer: 1 },
              { id: 'q3', q: 'What has Marko never eaten?', options: ['Pizza', 'Sushi', 'Borscht'], answer: 1 },
              { id: 'q4', q: 'Where did Iryna grow up?', options: ['In Japan', 'In Brazil', 'In Canada'], answer: 1 },
              { id: 'q5', q: 'What has Olena broken twice?', options: ['Her arm', 'Her leg', 'Her nose'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Olena has visited a lot of countries.', answer: true },
              { id: 's2', s: 'Nobody in the club has eaten sushi.', answer: false, explain: 'Three people have eaten sushi in Japan.' },
              { id: 's3', s: 'Iryna has seen snow many times.', answer: false, explain: '“I’ve never seen snow.”' },
              { id: 's4', s: 'Iryna has lived in Ukraine for six months.', answer: true },
              { id: 's5', s: 'The writer has broken a finger.', answer: false, explain: '“I’ve never broken a bone.”' }
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
            title: 'Experiences & V3 forms',
            instructions: 'Дієслова у трьох формах (V1 – V2 – V3). Для Present Perfect потрібна третя форма!',
            cards: [
              { front: 'be – was/were – been', back: 'бути', example: 'Have you ever been to Paris?' },
              { front: 'go – went – gone', back: 'іти, їхати', example: 'She has gone to the shop.' },
              { front: 'see – saw – seen', back: 'бачити', example: 'I’ve never seen snow.' },
              { front: 'eat – ate – eaten', back: 'їсти', example: 'Have you ever eaten sushi?' },
              { front: 'fly – flew – flown', back: 'літати', example: 'I’ve never flown in a plane.' },
              { front: 'break – broke – broken', back: 'ламати', example: 'He has broken his arm.' },
              { front: 'meet – met – met', back: 'зустрічати', example: 'Have you ever met a famous person?' },
              { front: 'do – did – done', back: 'робити', example: 'What have you done today?' },
              { front: 'win – won – won', back: 'вигравати', example: 'She has won a prize.' },
              { front: 'ride – rode – ridden', back: 'їздити верхи', example: 'I’ve never ridden a horse.' },
              { front: 'experience', ipa: '/ɪkˈspɪəriəns/', back: 'досвід, враження', example: 'It was an amazing experience.' },
              { front: 'unusual', ipa: '/ʌnˈjuːʒuəl/', back: 'незвичайний', example: 'Have you done anything unusual?' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'V1 → V3',
            instructions: 'Поєднай дієслово з третьою формою.',
            pairs: [
              ['write', 'written'],
              ['drive', 'driven'],
              ['swim', 'swum'],
              ['speak', 'spoken'],
              ['take', 'taken'],
              ['give', 'given'],
              ['drink', 'drunk'],
              ['lose', 'lost']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Life experiences',
            instructions: 'Встав V3. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Have you ever {{ridden}} a camel?' },
              { id: 'd2', text: 'I’ve never {{won}} anything in a lottery.' },
              { id: 'd3', text: 'She has {{met}} the President!' },
              { id: 'd4', text: 'Have you ever {{swum}} in the ocean?' },
              { id: 'd5', text: 'They have {{written}} three books together.' },
              { id: 'd6', text: 'I’ve {{lost}} my keys so many times!' }
            ],
            distractors: ['went']
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
            title: 'Present Perfect: experience',
            instructions: 'Present Perfect — новий час. Сьогодні вчимося говорити про життєвий досвід: «Я колись…», «Я ніколи не…».',
            html: `
<h3>1. Навіщо?</h3>
<p>Present Perfect поєднує <b>минуле і теперішнє</b>. Сьогодні — <b>досвід у житті</b>, коли <b>не важливо, коли саме</b>:</p>
<div class="ex-line">I<mark>’ve visited</mark> Japan. — Я був(ла) в Японії (колись у житті, коли — неважливо).</div>
<div class="ex-line">I<mark>’ve never eaten</mark> sushi. — Я ніколи не їв суші (за все життя).</div>

<h3>2. Форма: have / has + V3</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>I / you / we / they</td><td>I<b>’ve seen</b> (have seen)</td><td>I <b>haven’t seen</b> / I<b>’ve never seen</b></td><td><b>Have</b> you <b>ever seen</b>…?</td></tr>
  <tr><td>he / she / it</td><td>She<b>’s seen</b> (has seen)</td><td>She <b>hasn’t seen</b> / She<b>’s never seen</b></td><td><b>Has</b> she <b>ever seen</b>…?</td></tr>
  <tr><td colspan="4">Коротко: Yes, I have. / No, I haven’t. · Yes, she has. / No, she hasn’t.</td></tr>
</table></div>
<p><b>V3</b> (третя форма): правильні дієслова = -ed (visited, travelled); неправильні — треба вивчити (seen, eaten, been, flown).</p>
<p>⚠️ <b>she’s</b> може означати <b>she is</b> або <b>she has</b>: She<b>’s</b> visited = She <b>has</b> visited (бо далі V3).</p>

<h3>3. ever і never</h3>
<ul>
  <li><b>ever</b> = «коли-небудь» — у питаннях: Have you <b>ever</b> been to Italy?</li>
  <li><b>never</b> = «ніколи» — замість not: I’ve <b>never</b> been to Italy. <span class="no">I haven’t never</span></li>
</ul>
<p>Місце: між have/has і V3.</p>

<h3>4. been чи gone?</h3>
<div class="table-wrap"><table>
  <tr><th>been to</th><th>gone to</th></tr>
  <tr><td>був і <b>повернувся</b> (досвід)</td><td>поїхав і <b>зараз там</b></td></tr>
  <tr><td>I’ve <b>been to</b> Rome twice.</td><td>Mum isn’t here. She’s <b>gone to</b> the shop.</td></tr>
</table></div>

<h3>5. Діалог досвіду: Present Perfect → Past Simple</h3>
<div class="ex-line">— <b>Have</b> you ever <b>eaten</b> sushi? — Yes, I <b>have</b>. I <b>ate</b> it in Tokyo <b>last year</b>.</div>
<p>Питання про досвід — Present Perfect. Деталі (коли, де, як) — <b>Past Simple</b>. Детально це вивчимо на B1.</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">Have you ever saw snow?</span> → <span class="yes">Have you ever seen snow?</span><br>
<span class="no">She have been to Paris.</span> → <span class="yes">She has been to Paris.</span><br>
<span class="no">I haven’t never flown.</span> → <span class="yes">I’ve never flown.</span><br>
<span class="no">I’ve been in London last year.</span> → <span class="yes">I was in London last year.</span></div>`
          },
          {
            id: 'gram-v3',
            type: 'gap',
            title: 'Write the Present Perfect',
            instructions: 'Постав дієслово в Present Perfect (have / has + V3).',
            items: [
              { id: 'g1', text: 'Olena {{has visited|’s visited}} a lot of countries. (visit)' },
              { id: 'g2', text: 'I {{have never eaten|’ve never eaten}} sushi. (never / eat)' },
              { id: 'g3', text: 'Iryna {{has never seen|’s never seen}} snow. (never / see)' },
              { id: 'g4', text: '{{Have}} you ever broken a bone?' },
              { id: 'g5', text: 'We {{have been|’ve been}} to Lviv three times. (be)' },
              { id: 'g6', text: 'He {{hasn’t flown|has not flown}} in a plane. (− fly)' },
              { id: 'g7', text: 'They {{have met|’ve met}} a famous actor. (meet)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Choose the correct form',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'c1', q: 'Have you ever ___ to Spain?', options: ['be', 'been', 'went'], answer: 1 },
              { id: 'c2', q: 'She ___ never ridden a horse.', options: ['have', 'has', 'is'], answer: 1 },
              { id: 'c3', q: 'Have they ever seen the sea? — No, they ___.', options: ['didn’t', 'haven’t', 'hasn’t'], answer: 1 },
              { id: 'c4', q: 'Dad isn’t at home. He’s ___ to work.', options: ['been', 'gone'], answer: 1, explain: 'Він поїхав і зараз там → gone.' },
              { id: 'c5', q: 'I’ve ___ to Japan twice. It was amazing.', options: ['been', 'gone'], answer: 0 },
              { id: 'c6', q: 'Have you ever ___ a cake?', options: ['make', 'made', 'maked'], answer: 1 }
            ]
          },
          {
            id: 'gram-dialogue',
            type: 'choice',
            title: 'Present Perfect or Past Simple?',
            instructions: 'Досвід (Present Perfect) чи конкретний минулий час (Past Simple)?',
            items: [
              { id: 'p1', q: '___ you ever been to Odesa?', options: ['Have', 'Did'], answer: 0 },
              { id: 'p2', q: 'Yes, I have. I ___ there in 2019.', options: ['have been', 'went'], answer: 1 },
              { id: 'p3', q: 'I ___ sushi last week.', options: ['have eaten', 'ate'], answer: 1 },
              { id: 'p4', q: 'I ___ a famous singer once!', options: ['have met', 'met yesterday'], answer: 0 },
              { id: 'p5', q: 'When ___ you break your arm?', options: ['have', 'did'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Ти колись бачив сніг?', answer: 'Have you ever seen snow?', extra: ['saw'] },
              { id: 'o2', prompt: 'Вона ніколи не літала літаком.', answer: 'She has never flown in a plane.' },
              { id: 'o3', prompt: 'Я двічі був у Римі.', answer: "I've been to Rome twice." },
              { id: 'o4', prompt: 'Мама пішла в магазин.', answer: 'Mum has gone to the shop.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: неправильні дієслова (V2)',
            instructions: 'Згадаймо Past Simple з A1: напиши другу форму.',
            items: [
              { id: 'r1', text: 'Iryna {{grew}} up in Brazil. (grow)' },
              { id: 'r2', text: 'They {{told}} Marko to try sushi. (tell)' },
              { id: 'r3', text: 'Last Friday the game {{was}} very funny. (be)' },
              { id: 'r4', text: 'We {{promised}} to build a snowman. (promise)' }
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
            instructions: 'Співбесіда на посаду гіда. Менеджерка питає про досвід. Послухай.',
            audio: {
              title: 'Interview: Manager & Taras',
              lines: [
                { who: 'Manager', text: 'So, Taras, have you ever worked as a tour guide?' },
                { who: 'Taras', text: 'Not officially, but I’ve shown my city to a lot of foreign friends.' },
                { who: 'Manager', text: 'Have you ever been abroad?' },
                { who: 'Taras', text: 'Yes, I have. I’ve been to Poland, Germany and Italy. I lived in Krakow for a year when I was a student.' },
                { who: 'Manager', text: 'Great. Have you ever worked with large groups?' },
                { who: 'Taras', text: 'Yes. Last summer I worked at a children’s camp. There were forty kids in my group!' },
                { who: 'Manager', text: 'Wow. And have you ever had a difficult tourist?' },
                { who: 'Taras', text: 'Not yet — but I’ve had a very difficult group of ten-year-olds!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Has Taras worked as a tour guide officially?', options: ['Yes, he has.', 'No, he hasn’t.'], answer: 1 },
              { id: 'l2', q: 'Which country has he NOT been to?', options: ['Poland', 'France', 'Italy'], answer: 1 },
              { id: 'l3', q: 'Where did he live as a student?', options: ['In Krakow', 'In Rome', 'In Berlin'], answer: 0 },
              { id: 'l4', q: 'How many kids were in his group at the camp?', options: ['Fourteen', 'Forty', 'Ten'], answer: 1 },
              { id: 'l5', q: 'Has he ever had a difficult tourist?', options: ['Yes, many times', 'Not yet'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Have you ever worked as a tour guide?' },
              { id: 'dc2', text: 'I’ve been to Poland and Germany.' },
              { id: 'dc3', text: 'I lived in Krakow for a year.' },
              { id: 'dc4', text: 'Have you ever been abroad?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-experiences',
            type: 'writing',
            title: 'My experiences',
            instructions: 'Напиши допис у блог «Що я робив(ла) і чого ще не робив(ла) в житті».',
            prompt: 'Write about your life experiences (100–120 words).\n• 3 interesting things you have done (Present Perfect).\n• For one of them, give details: when, where, how was it (Past Simple).\n• 3 things you have never done.\n• One thing you would like to do one day.\n• Ask the reader a question with Have you ever…?',
            minWords: 100,
            maxWords: 130,
            phrases: ['I’ve been to', 'I’ve met', 'I’ve never', 'It was', 'Have you ever', 'One day I’d like to'],
            checklist: ['Щонайменше 6 речень у Present Perfect (have/has + V3)', 'Деталі однієї події — у Past Simple', 'never замість not (без подвійного заперечення)', 'Є питання Have you ever…?'],
            model: `I’m only twenty-five, but I’ve done some interesting things. I’ve been to six countries, I’ve run a half marathon, and I’ve met a famous Ukrainian writer!

I met her at a book festival in Lviv two years ago. She signed my book and we talked for five minutes. I was so nervous that I forgot my own name!

But there are a lot of things I’ve never done. I’ve never flown in a helicopter, I’ve never seen a whale, and I’ve never cooked a turkey.

One day I’d like to see the Northern Lights in Norway. Have you ever seen them?`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-ever',
            type: 'speaking',
            title: 'Never Have I Ever',
            instructions: 'Зіграй у гру! Відповідай уголос і додавай деталі в Past Simple.',
            phrases: ['I’ve never…', 'Yes, I have. I … (Past Simple)', 'No, I haven’t.', 'Have you ever…?'],
            tasks: [
              { id: 'sp1', q: 'Say three things you have never done.', tips: 'I’ve never … I’ve never …', model: 'I’ve never ridden a horse, I’ve never been to Asia and I’ve never eaten oysters.' },
              { id: 'sp2', q: 'Have you ever met a famous person? Have you ever won something?', tips: 'Yes, I have. I met … in … / No, I haven’t.', model: 'Yes, I have. I met a famous football player at the airport in 2021. I haven’t won anything.' },
              { id: 'sp3', q: 'What is the most interesting place you have been to? When did you go?', tips: 'The most interesting place I’ve been to is … I went there …', model: 'The most interesting place I’ve been to is Istanbul. I went there with my sister three years ago.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'never have i ever': 'я ніколи не…', 'club': 'клуб', 'book club': 'книжковий клуб', 'every month': 'щомісяця', 'game': 'гра', 'called': 'під назвою',
      'each': 'кожна', 'person': 'людина', 'says': 'каже', 'something': 'щось', 'have never done': 'ніколи не робив', 'last friday': 'минулої п’ятниці',
      'funny': 'смішно', 'started': 'почала', "i've never flown": 'я ніколи не літала', 'flown': 'літав (V3 від fly)', 'plane': 'літак', 'everyone': 'усі',
      'surprised': 'здивовані', 'fifty': 'п’ятдесят', "she's visited": 'вона відвідала', 'visited': 'відвідала', 'countries': 'країни', 'always': 'завжди',
      'travelled': 'подорожувала', 'by train': 'потягом', 'by car': 'машиною', 'explained': 'пояснила', 'scared of': 'боїться', 'flying': 'літання',
      'eaten': 'їв (V3 від eat)', 'sushi': 'суші', 'japan': 'Японія', 'told': 'сказали', 'must': 'мусить', 'try': 'спробувати', 'seen': 'бачив (V3 від see)',
      'snow': 'сніг', 'grew up': 'виросла', 'brazil': 'Бразилія', 'only': 'лише', 'lived': 'жила', 'months': 'місяці', 'heard': 'чула', 'beautiful': 'гарний',
      'touched': 'торкалася', 'promised': 'пообіцяли', 'build': 'зліпити', 'snowman': 'сніговик', 'december': 'грудень', 'finally': 'нарешті', 'turn': 'черга',
      'broken': 'зламав (V3 від break)', 'bone': 'кістка', 'everyone else': 'всі інші', 'arm': 'рука', 'leg': 'нога', 'finger': 'палець', 'nose': 'ніс',
      'twice': 'двічі', 'what about you': 'а ви?', 'ever': 'коли-небудь', 'done': 'зробив (V3 від do)', 'unusual': 'незвичайне', 'met': 'зустрічав (V3)',
      'famous': 'відомий', 'expensive': 'дорого', 'time': 'час', 'pizza': 'піца', 'borscht': 'борщ', 'canada': 'Канада', 'nobody': 'ніхто',
      'many times': 'багато разів', 'been': 'був (V3 від be)', 'gone': 'пішов, поїхав (V3 від go)', 'paris': 'Париж', 'shop': 'магазин', 'prize': 'приз',
      'won': 'виграв', 'ridden': 'їздив верхи (V3 від ride)', 'horse': 'кінь', 'experience': 'досвід', 'written': 'написав (V3)', 'driven': 'керував авто (V3)',
      'swum': 'плавав (V3)', 'spoken': 'говорив (V3)', 'taken': 'взяв (V3)', 'given': 'дав (V3)', 'drunk': 'пив (V3)', 'lost': 'загубив (V3)', 'camel': 'верблюд',
      'lottery': 'лотерея', 'president': 'президент', 'ocean': 'океан', 'books': 'книги', 'together': 'разом', 'keys': 'ключі', 'so many times': 'стільки разів',
      'visit': 'відвідувати', 'eat': 'їсти', 'see': 'бачити', 'fly': 'літати', 'meet': 'зустрічати', 'actor': 'актор', 'spain': 'Іспанія', 'sea': 'море',
      'dad': 'тато', 'work': 'робота', 'amazing': 'дивовижно', 'cake': 'торт', 'odesa': 'Одеса', 'last week': 'минулого тижня', 'once': 'одного разу',
      'singer': 'співак', 'yesterday': 'учора', 'when': 'коли', 'break': 'зламати', 'rome': 'Рим', 'mum': 'мама', 'grow': 'рости', 'tell': 'казати',
      'promise': 'обіцяти', 'job interview': 'співбесіда', 'manager': 'менеджерка', 'worked': 'працював', 'tour guide': 'гід', 'officially': 'офіційно',
      'shown': 'показував (V3 від show)', 'city': 'місто', 'foreign': 'іноземні', 'friends': 'друзі', 'abroad': 'за кордоном', 'poland': 'Польща',
      'germany': 'Німеччина', 'italy': 'Італія', 'krakow': 'Краків', 'year': 'рік', 'student': 'студент', 'great': 'чудово', 'large groups': 'великі групи',
      'last summer': 'минулого літа', "children's camp": 'дитячий табір', 'kids': 'діти', 'group': 'група', 'had': 'мав (V3 від have)', 'difficult': 'складний',
      'tourist': 'турист', 'not yet': 'поки ні', 'ten-year-olds': 'десятирічні діти', 'france': 'Франція', 'berlin': 'Берлін', 'fourteen': 'чотирнадцять',
      'interesting': 'цікаві', 'things': 'речі', 'six': 'шість', 'run': 'пробіг', 'half marathon': 'напівмарафон', 'writer': 'письменниця', 'book festival': 'книжковий фестиваль',
      'signed': 'підписала', 'talked': 'розмовляли', 'minutes': 'хвилини', 'nervous': 'схвильований', 'forgot': 'забув', 'own': 'власне', 'name': 'ім’я',
      'helicopter': 'гелікоптер', 'whale': 'кит', 'cooked': 'готував', 'turkey': 'індичка', 'one day': 'колись', 'northern lights': 'північне сяйво',
      'norway': 'Норвегія', 'asia': 'Азія', 'oysters': 'устриці', 'football player': 'футболіст', 'airport': 'аеропорт', 'anything': 'нічого', 'most': 'най-',
      'place': 'місце', 'istanbul': 'Стамбул', 'sister': 'сестра', 'years ago': 'роки тому', "i've": 'я (have)', "she's": 'вона (has/is)', "haven't": 'не (have not)',
      "hasn't": 'не (has not)'
    }
  });
})();
