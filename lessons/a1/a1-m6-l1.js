/*
 * A1 · Module 6 · Lesson 1 — Where were you? (was / were; past time expressions)
 * Review: to be in the present (module 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'A mystery at the museum',
    text: `Yesterday evening a famous painting disappeared from the City Museum. Detective Bond asked three people: “Where were you at 8 p.m. yesterday?”

The guard, Mr Lee: “I was in the museum, but I wasn’t in the painting room. I was in the café. The coffee machine was broken and I was angry!”

The cleaner, Ms Kovalska: “I wasn’t at work yesterday evening. I was at home with my husband and our children. We were in the living room. The TV was on — there was a football match.”

The director, Mr Grant: “My wife and I were at the theatre. The play was terrible, so we were very bored. We weren’t at home until eleven.”

Detective Bond smiled. “The theatre was closed yesterday, Mr Grant. It was Monday!”`
  };

  ENG.registerLesson({
    id: 'a1-m6-l1',
    level: 'a1',
    title: 'Where were you? Учора',
    subtitle: 'was / were · yesterday, last…, ago · минуле дієслова to be',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'The museum mystery',
            instructions: 'Детектив розслідує зникнення картини. Прочитай і знайди, хто бреше!',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What disappeared from the museum?', options: ['A statue', 'A painting', 'Money'], answer: 1 },
              { id: 'q2', q: 'Where was the guard at 8 p.m.?', options: ['In the painting room', 'In the café', 'At home'], answer: 1 },
              { id: 'q3', q: 'Why was Mr Lee angry?', options: ['The coffee machine was broken.', 'The café was closed.', 'He was tired.'], answer: 0 },
              { id: 'q4', q: 'Where was Ms Kovalska?', options: ['At work', 'At the theatre', 'At home'], answer: 2 },
              { id: 'q5', q: 'Who is not telling the truth?', options: ['Mr Lee', 'Ms Kovalska', 'Mr Grant'], answer: 2, explain: 'Театр учора був зачинений (понеділок), але Mr Grant каже, що був там.' }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The painting disappeared yesterday morning.', answer: false, explain: 'Yesterday evening.' },
              { id: 's2', s: 'Mr Lee was in the painting room.', answer: false, explain: '“I wasn’t in the painting room.”' },
              { id: 's3', s: 'There was a football match on TV.', answer: true },
              { id: 's4', s: 'Mr Grant says the play was good.', answer: false, explain: '“The play was terrible.”' },
              { id: 's5', s: 'Yesterday was Monday.', answer: true }
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
            title: 'Past time & feelings',
            instructions: 'Слова, щоб говорити про минуле, і прикметники стану.',
            cards: [
              { front: 'yesterday', ipa: '/ˈjestədeɪ/', back: 'учора', example: 'I was at home yesterday.' },
              { front: 'yesterday morning / evening', back: 'учора вранці / ввечері', example: 'Where were you yesterday evening?' },
              { front: 'last night', back: 'минулої ночі, учора ввечері', example: 'The party was last night.' },
              { front: 'last week / month / year', back: 'минулого тижня / місяця / року', example: 'We were in Paris last year.' },
              { front: 'two days ago', ipa: '/əˈɡəʊ/', back: 'два дні тому', example: 'She was ill two days ago.' },
              { front: 'in 2020', back: 'у 2020 році', example: 'I was a student in 2020.' },
              { front: 'bored', ipa: '/bɔːd/', back: 'якому нудно', example: 'We were very bored.' },
              { front: 'angry', ipa: '/ˈæŋɡri/', back: 'злий, сердитий', example: 'He was angry.' },
              { front: 'tired', ipa: '/ˈtaɪəd/', back: 'втомлений', example: 'I was tired after work.' },
              { front: 'broken', ipa: '/ˈbrəʊkən/', back: 'зламаний', example: 'The machine was broken.' },
              { front: 'disappear', ipa: '/ˌdɪsəˈpɪə/', back: 'зникати', example: 'The painting disappeared.' },
              { front: 'guard', ipa: '/ɡɑːd/', back: 'охоронець', example: 'The guard was in the café.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Feelings',
            instructions: 'Поєднай прикметник почуттів з ситуацією.',
            pairs: [
              ['bored', 'a terrible film'],
              ['tired', 'after ten hours of work'],
              ['angry', 'a broken phone'],
              ['hungry', 'no breakfast, no lunch'],
              ['happy', 'a birthday present'],
              ['scared', 'a big dog'],
              ['cold', 'minus ten degrees'],
              ['ill', 'a high temperature']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'When was it?',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Today is Tuesday, so {{yesterday}} was Monday.' },
              { id: 'd2', text: 'I was in Spain three years {{ago}}.' },
              { id: 'd3', text: 'We were at a concert {{last}} night.' },
              { id: 'd4', text: 'She was born {{in}} 1995.' },
              { id: 'd5', text: 'I was {{tired}} after the long trip.' },
              { id: 'd6', text: 'The film was so long. We were {{bored}}.' }
            ],
            distractors: ['tomorrow']
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
            title: 'was / were — the past of “to be”',
            instructions: 'Ти вже знаєш am / is / are. У минулому є лише дві форми: was і were.',
            html: `
<h3>1. am / is → was, are → were</h3>
<div class="table-wrap"><table>
  <tr><th>Теперішнє</th><th>Минуле</th><th>Приклад</th></tr>
  <tr><td>I <b>am</b></td><td>I <b>was</b></td><td>I was at home.</td></tr>
  <tr><td>he / she / it <b>is</b></td><td>he / she / it <b>was</b></td><td>The play was terrible.</td></tr>
  <tr><td>you / we / they <b>are</b></td><td>you / we / they <b>were</b></td><td>We were at the theatre.</td></tr>
</table></div>
<p>💡 Простіше запам’ятати: <b>was</b> — для I, he, she, it (однина); <b>were</b> — для you, we, they.</p>

<h3>2. Заперечення і питання — як з am / is / are</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>was</th><th>were</th></tr>
  <tr><td><b>−</b></td><td>I <b>wasn’t</b> (was not) at work.</td><td>We <b>weren’t</b> (were not) at home.</td></tr>
  <tr><td><b>?</b></td><td><b>Was</b> she at the museum?</td><td><b>Were</b> you at the theatre?</td></tr>
  <tr><td>коротко</td><td>Yes, she <b>was</b>. / No, she <b>wasn’t</b>.</td><td>Yes, I <b>was</b>. / No, we <b>weren’t</b>.</td></tr>
</table></div>
<p>З питальним словом: <b>Where were</b> you? <b>Why was</b> he angry? <b>How was</b> the film?</p>

<h3>3. there was / there were</h3>
<div class="ex-line"><b>There was</b> a football match. <b>There were</b> a lot of people.</div>

<h3>4. Слова-маркери минулого</h3>
<div class="table-wrap"><table>
  <tr><th>Вираз</th><th>Приклад</th></tr>
  <tr><td><b>yesterday</b> (+ morning / afternoon / evening)</td><td>I was tired yesterday evening.</td></tr>
  <tr><td><b>last</b> night / week / Monday / year</td><td>We were in Lviv <b>last</b> summer. <span class="muted">(без «the»!)</span></td></tr>
  <tr><td>час + <b>ago</b> (тому)</td><td>He was here <b>ten minutes ago</b>.</td></tr>
  <tr><td><b>in</b> + рік / місяць</td><td>She was born <b>in</b> 1998 / <b>in</b> May.</td></tr>
</table></div>
<p>⚠️ Народитися = <b>be born</b>: I <b>was born</b> in Kyiv. <span class="no">I born in Kyiv.</span></p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">We was at home.</span> → <span class="yes">We were at home.</span><br>
<span class="no">I was at home the last week.</span> → <span class="yes">I was at home last week.</span><br>
<span class="no">Did you be at work?</span> → <span class="yes">Were you at work?</span><br>
<span class="no">before two days</span> → <span class="yes">two days ago</span></div>`
          },
          {
            id: 'gram-waswere',
            type: 'gap',
            title: 'was or were?',
            instructions: 'Встав was / were (+) або wasn’t / weren’t (−).',
            items: [
              { id: 'g1', text: 'Mr Lee {{was}} in the café.' },
              { id: 'g2', text: 'The cleaner and her husband {{were}} at home.' },
              { id: 'g3', text: 'I {{wasn’t|was not}} at work yesterday. (−)' },
              { id: 'g4', text: 'The coffee machine {{was}} broken.' },
              { id: 'g5', text: 'We {{weren’t|were not}} at home until eleven. (−)' },
              { id: 'g6', text: 'There {{were}} a lot of people at the match.' },
              { id: 'g7', text: 'Where {{were}} you at 8 p.m.?' }
            ]
          },
          {
            id: 'gram-short',
            type: 'choice',
            title: 'Questions & short answers',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'c1', q: '___ Mr Grant at the theatre?', options: ['Was', 'Were', 'Did'], answer: 0 },
              { id: 'c2', q: '___ the children at home? — Yes, they were.', options: ['Was', 'Were', 'Are'], answer: 1 },
              { id: 'c3', q: 'Were you tired? — No, I ___.', options: ['wasn’t', 'weren’t', 'didn’t'], answer: 0 },
              { id: 'c4', q: 'How ___ the film? — It was great!', options: ['was', 'were', 'is'], answer: 0 },
              { id: 'c5', q: 'I was born ___ 2001.', options: ['on', 'in', 'at'], answer: 1 },
              { id: 'c6', q: 'We were in Rome ___ year.', options: ['last', 'the last', 'ago'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Де ти був учора ввечері?', answer: 'Where were you yesterday evening?', extra: ['was'] },
              { id: 'o2', prompt: 'Я народилася в Харкові.', answer: 'I was born in Kharkiv.' },
              { id: 'o3', prompt: 'Вистава була жахлива.', answer: 'The play was terrible.' },
              { id: 'o4', prompt: 'Два дні тому їх не було вдома.', answer: "They weren't at home two days ago." }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: am / is / are vs was / were',
            instructions: 'Теперішнє чи минуле? Дивись на слова-маркери.',
            items: [
              { id: 'r1', q: 'I ___ tired now.', options: ['am', 'was'], answer: 0 },
              { id: 'r2', q: 'I ___ tired yesterday.', options: ['am', 'was'], answer: 1 },
              { id: 'r3', q: 'They ___ at the museum last Sunday.', options: ['are', 'were'], answer: 1 },
              { id: 'r4', q: 'The museum ___ open today.', options: ['is', 'was'], answer: 0 },
              { id: 'r5', q: 'She ___ a student in 2015, now she ___ a doctor.', options: ['was / is', 'is / was', 'were / is'], answer: 0 }
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
            title: 'How was your weekend?',
            instructions: 'Колеги в понеділок розпитують одне одного про вихідні. Послухай.',
            audio: {
              title: 'Dialogue: Olha & Max',
              lines: [
                { who: 'Olha', text: 'Hi, Max! How was your weekend?' },
                { who: 'Max', text: 'It was great, thanks! I was in Odesa with my girlfriend.' },
                { who: 'Olha', text: 'Lucky you! Was the weather good?' },
                { who: 'Max', text: 'Yes, it was sunny and warm. We were on the beach all Saturday. What about you?' },
                { who: 'Olha', text: 'Oh, my weekend wasn’t very good. I was ill. I was in bed on Saturday and Sunday.' },
                { who: 'Max', text: 'Oh no! Were your kids with you?' },
                { who: 'Olha', text: 'No, they weren’t. They were at their grandma’s. It was very quiet and boring!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Where was Max at the weekend?', options: ['In Kyiv', 'In Odesa', 'In Lviv'], answer: 1 },
              { id: 'l2', q: 'What was the weather like?', options: ['Sunny and warm', 'Rainy', 'Cold'], answer: 0 },
              { id: 'l3', q: 'Why was Olha’s weekend bad?', options: ['She was at work.', 'She was ill.', 'Her kids were noisy.'], answer: 1 },
              { id: 'l4', q: 'Where were Olha’s kids?', options: ['At home', 'At school', 'At their grandma’s'], answer: 2 },
              { id: 'l5', q: 'How was Olha’s weekend?', options: ['Quiet and boring', 'Great', 'Busy'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'How was your weekend?' },
              { id: 'dc2', text: 'We were on the beach.' },
              { id: 'dc3', text: 'I was ill on Saturday.' },
              { id: 'dc4', text: 'They weren’t at home.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-alibi',
            type: 'writing',
            title: 'Your alibi',
            instructions: 'Детектив Бонд питає тебе! Напиши, де ти був(ла) учора та минулих вихідних. Використовуй лише was / were.',
            prompt: 'Write your answers (60–80 words).\n• Where were you yesterday at 8 a.m., 1 p.m. and 8 p.m.?\n• Who was with you?\n• How was your day? Were you tired / happy / bored?\n• Where were you last weekend? How was the weather?\n• Use one negative: I wasn’t… / We weren’t…',
            minWords: 60,
            maxWords: 90,
            phrases: ['Yesterday at', 'I was', 'We were', 'I wasn’t', 'last weekend', 'It was'],
            checklist: ['was — з I/he/she/it, were — з you/we/they', 'Є last weekend / yesterday / ago', 'Є заперечення wasn’t / weren’t', 'Є прикметник стану (tired, bored…)'],
            model: `Yesterday at 8 a.m. I was on the bus. At 1 p.m. I was in a café with my colleague Ira. The soup was very good! At 8 p.m. I was at home with my husband. We were tired, so we weren’t out late.

Last weekend we were at my parents’ house in the village. The weather was cold, but it wasn’t rainy. My parents were very happy. I wasn’t at the museum, Detective!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-past',
            type: 'speaking',
            title: 'Where were you?',
            instructions: 'Відповідай уголос, використовуючи was / were.',
            phrases: ['I was…', 'We were…', 'It was…', 'I wasn’t…', '… ago'],
            tasks: [
              { id: 'sp1', q: 'Where were you yesterday at 7 p.m.? Who was with you?', tips: 'I was … with …', model: 'I was at home with my sister. We were in the kitchen.' },
              { id: 'sp2', q: 'Where were you on your last holiday? How was it?', tips: 'I was in … It was … The food was …', model: 'I was in Bukovel. It was amazing. The mountains were beautiful.' },
              { id: 'sp3', q: 'Where were you born? What was your first school like?', tips: 'I was born in … My school was …', model: 'I was born in Sumy. My first school was small, and the teachers were kind.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'mystery': 'загадка', 'museum': 'музей', 'yesterday': 'учора', 'evening': 'вечір', 'famous': 'відомий', 'painting': 'картина', 'disappeared': 'зникла',
      'disappear': 'зникати', 'city': 'місто', 'detective': 'детектив', 'asked': 'запитав', 'people': 'люди', 'where were you': 'де ти був', 'were': 'були (to be)',
      'was': 'був, була, було', 'guard': 'охоронець', "wasn't": 'не був', "weren't": 'не були', 'room': 'зала, кімната', 'café': 'кафе', 'coffee machine': 'кавоварка',
      'broken': 'зламаний', 'angry': 'злий', 'cleaner': 'прибиральниця', 'work': 'робота', 'home': 'дім', 'husband': 'чоловік', 'children': 'діти',
      'living room': 'вітальня', 'tv': 'телевізор', 'on': 'увімкнений', 'there was': 'був / було', 'there were': 'були', 'football match': 'футбольний матч',
      'director': 'директор', 'wife': 'дружина', 'theatre': 'театр', 'play': 'вистава', 'terrible': 'жахливий', 'so': 'тому', 'bored': 'нудьгуючий',
      'until': 'до', 'eleven': 'одинадцята', 'smiled': 'усміхнувся', 'closed': 'зачинений', 'monday': 'понеділок', 'statue': 'статуя', 'money': 'гроші',
      'tired': 'втомлений', 'not telling the truth': 'каже неправду', 'truth': 'правда', 'morning': 'ранок', 'last night': 'учора ввечері', 'last': 'минулий',
      'week': 'тиждень', 'month': 'місяць', 'year': 'рік', 'ago': 'тому', 'party': 'вечірка', 'ill': 'хворий', 'paris': 'Париж', 'after': 'після',
      'machine': 'машина, апарат', 'hungry': 'голодний', 'happy': 'щасливий', 'birthday present': 'подарунок на день народження', 'scared': 'наляканий',
      'cold': 'холодно', 'minus': 'мінус', 'degrees': 'градуси', 'high temperature': 'висока температура', 'film': 'фільм', 'hours': 'годин',
      'phone': 'телефон', 'breakfast': 'сніданок', 'lunch': 'обід', 'dog': 'собака', 'today': 'сьогодні', 'tuesday': 'вівторок', 'spain': 'Іспанія',
      'concert': 'концерт', 'born': 'народжений', 'was born': 'народився', 'long': 'довгий', 'trip': 'поїздка', 'tomorrow': 'завтра', 'now': 'зараз',
      'open': 'відкритий', 'sunday': 'неділя', 'student': 'студент', 'doctor': 'лікар', 'weekend': 'вихідні', 'great': 'чудово', 'girlfriend': 'дівчина (кохана)',
      'lucky you': 'щастить тобі', 'weather': 'погода', 'sunny': 'сонячно', 'warm': 'тепло', 'beach': 'пляж', 'all saturday': 'всю суботу',
      'what about you': 'а ти?', 'bed': 'ліжко', 'oh no': 'о ні', 'kids': 'діти', "grandma's": 'у бабусі', 'quiet': 'тихий', 'boring': 'нудний',
      'busy': 'зайнятий', 'alibi': 'алібі', 'colleague': 'колега', 'soup': 'суп', 'out late': 'допізна поза домом', 'parents': 'батьки', 'village': 'село',
      'rainy': 'дощовий', 'holiday': 'відпустка', 'amazing': 'дивовижний', 'mountains': 'гори', 'beautiful': 'гарні', 'first': 'перший', 'school': 'школа',
      'small': 'маленький', 'teachers': 'вчителі', 'kind': 'добрі', 'sister': 'сестра', 'kitchen': 'кухня', 'food': 'їжа'
    }
  });
})();
