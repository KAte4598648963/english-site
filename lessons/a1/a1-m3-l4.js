/*
 * A1 · Module 3 · Lesson 4 — Review: A day in my life
 * Reviews: Present Simple (+ / − / ?), he/she/it -s, do/does, adverbs of frequency, at/in/on, time.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Interview: a day at the zoo',
    text: `This week our blog talks to Vika. She is a zookeeper at Kyiv Zoo.

Blog: What time do you start work, Vika?
Vika: I start at half past six in the morning. The animals are always hungry early!

Blog: What do you do first?
Vika: First, I check the animals. Then I give them food. The elephants eat a lot — about 150 kilos of food a day! The monkeys usually have fruit and vegetables.

Blog: Do you work with all the animals?
Vika: No, I don’t. I work with the elephants and the giraffes. My colleague Taras looks after the lions. He never goes into their enclosure!

Blog: Do you have a favourite animal?
Vika: Yes, I do. It’s an old elephant called Horace. He’s very clever. He sometimes takes my hat!

Blog: When do you finish?
Vika: At four o’clock. On Saturdays I often work, but I don’t work on Mondays.`
  };

  ENG.registerLesson({
    id: 'a1-m3-l4',
    level: 'a1',
    title: 'Review: A day in my life',
    subtitle: 'Повторення модуля 3: Present Simple (+ / − / ?), -s, do/does, прислівники частоти',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A zookeeper’s day',
            instructions: 'Прочитай інтерв’ю з доглядачкою зоопарку.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What time does Vika start work?', options: ['At 6:00', 'At 6:30', 'At 7:30'], answer: 1 },
              { id: 'q2', q: 'What does she do first?', options: ['She gives food to the animals.', 'She checks the animals.', 'She cleans.'], answer: 1 },
              { id: 'q3', q: 'Which animals does Vika work with?', options: ['Lions and monkeys', 'Elephants and giraffes', 'All the animals'], answer: 1 },
              { id: 'q4', q: 'Who is Horace?', options: ['Her colleague', 'An old elephant', 'A lion'], answer: 1 },
              { id: 'q5', q: 'When doesn’t Vika work?', options: ['On Saturdays', 'On Mondays', 'On Sundays'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The elephants eat about 150 kilos of food a day.', answer: true },
              { id: 's2', s: 'Taras often goes into the lions’ enclosure.', answer: false, explain: '“He never goes into their enclosure!”' },
              { id: 's3', s: 'Horace sometimes takes Vika’s hat.', answer: true },
              { id: 's4', s: 'Vika finishes work at five.', answer: false, explain: 'She finishes at four o’clock.' },
              { id: 's5', s: 'Vika never works on Saturdays.', answer: false, explain: '“On Saturdays I often work.”' }
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
            title: 'Zoo words + module review',
            instructions: 'Нові слова з інтерв’ю та повторення слів модуля 3.',
            cards: [
              { front: 'zookeeper', ipa: '/ˈzuːkiːpə/', back: 'доглядач у зоопарку', example: 'Vika is a zookeeper.' },
              { front: 'elephant', ipa: '/ˈelɪfənt/', back: 'слон', example: 'Elephants eat a lot.' },
              { front: 'giraffe', ipa: '/dʒəˈrɑːf/', back: 'жирафа', example: 'The giraffe is very tall.' },
              { front: 'lion', ipa: '/ˈlaɪən/', back: 'лев', example: 'Taras looks after the lions.' },
              { front: 'monkey', ipa: '/ˈmʌŋki/', back: 'мавпа', example: 'Monkeys love fruit.' },
              { front: 'enclosure', ipa: '/ɪnˈkləʊʒə/', back: 'вольєр', example: 'He never goes into the enclosure.' },
              { front: 'give food', back: 'давати їжу, годувати', example: 'I give them food at seven.' },
              { front: 'colleague', ipa: '/ˈkɒliːɡ/', back: 'колега', example: 'My colleague works with lions.' },
              { front: 'a day / a week', back: 'на день / на тиждень', example: 'He works five days a week.' },
              { front: 'early / late', back: 'рано / пізно', example: 'The animals are hungry early.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 3 words',
            instructions: 'Поєднай слова модуля з перекладом.',
            pairs: [
              ['get up', 'вставати'],
              ['have lunch', 'обідати'],
              ['look after', 'доглядати'],
              ['skip breakfast', 'пропускати сніданок'],
              ['sometimes', 'іноді'],
              ['hairdresser', 'перукар'],
              ['enclosure', 'вольєр'],
              ['quarter past', 'чверть на']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the zookeeper’s day',
            instructions: 'Встав слова. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'I start work {{early}}, at half past six.' },
              { id: 'd2', text: 'First, I {{check}} the animals.' },
              { id: 'd3', text: 'Then I give them {{food}}.' },
              { id: 'd4', text: 'My {{colleague}} Taras looks after the lions.' },
              { id: 'd5', text: 'The lions live in a big {{enclosure}}.' },
              { id: 'd6', text: 'I work five days a {{week}}.' }
            ],
            distractors: ['late']
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
            title: 'Present Simple — full picture',
            instructions: 'Уся граматика модуля 3 в одній таблиці. Перечитай і перевір себе.',
            html: `
<h3>1. Present Simple: три форми</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
  <tr><td><b>+</b></td><td>I <b>work</b>.</td><td>She <b>works</b>. <span class="muted">(-s / -es / -ies, has)</span></td></tr>
  <tr><td><b>−</b></td><td>I <b>don’t work</b>.</td><td>She <b>doesn’t work</b>. <span class="muted">(без -s!)</span></td></tr>
  <tr><td><b>?</b></td><td><b>Do</b> you <b>work</b>?</td><td><b>Does</b> she <b>work</b>?</td></tr>
  <tr><td>коротко</td><td>Yes, I do. / No, I don’t.</td><td>Yes, she does. / No, she doesn’t.</td></tr>
</table></div>

<h3>2. Питання з питальними словами</h3>
<p>Схема: <b>Питальне слово + do/does + хто + дієслово?</b></p>
<div class="ex-line">What time <b>do</b> you start? · Where <b>does</b> Taras work? · What <b>do</b> monkeys eat?</div>

<h3>3. Прислівники частоти</h3>
<p>always → usually → often → sometimes → never</p>
<div class="ex-line">She <b>often</b> works on Saturdays. <span class="muted">(перед дієсловом)</span></div>
<div class="ex-line">The animals are <b>always</b> hungry. <span class="muted">(після to be)</span></div>

<h3>4. Час</h3>
<div class="table-wrap"><table>
  <tr><th>at</th><th>in</th><th>on</th></tr>
  <tr><td>at 6:30 (half past six), at four o’clock, at night, at the weekend</td><td>in the morning / afternoon / evening</td><td>on Monday, on Saturdays</td></tr>
</table></div>

<h3>5. to be чи do? — фінальна перевірка</h3>
<div class="ex-line"><b>Is</b> Horace clever? — Yes, he <b>is</b>. &nbsp;|&nbsp; <b>Does</b> Horace take her hat? — Yes, he <b>does</b>.</div>

<div class="tip">✅ <b>Чек-лист модуля 3</b> — я вмію:<br>
• розповісти про свій день з точним часом;<br>
• розповісти про чужий день (he/she + -s);<br>
• поставити питання з do/does і відповісти коротко;<br>
• сказати, як часто я щось роблю.</div>`
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'Present Simple mix',
            instructions: 'Встав дієслово в правильній формі (+, − або ?).',
            items: [
              { id: 'g1', text: 'Vika {{starts}} work at half past six. (start)' },
              { id: 'g2', text: 'The monkeys usually {{have}} fruit. (have)' },
              { id: 'g3', text: 'Taras {{doesn’t go|does not go}} into the enclosure. (− go)' },
              { id: 'g4', text: '{{Does}} Vika work with lions? — No, she doesn’t.' },
              { id: 'g5', text: 'What {{do}} elephants eat?' },
              { id: 'g6', text: 'I {{don’t work|do not work}} on Mondays. (− work)' },
              { id: 'g7', text: 'Horace sometimes {{takes}} her hat. (take)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Яке речення правильне?',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['She don’t like lions.', 'She doesn’t likes lions.', 'She doesn’t like lions.'], answer: 2 },
              { id: 'c2', q: 'Обери правильне:', options: ['Do he work at the zoo?', 'Does he work at the zoo?', 'Is he work at the zoo?'], answer: 1 },
              { id: 'c3', q: 'Обери правильне:', options: ['I go never to the zoo.', 'I never go to the zoo.', 'I don’t never go to the zoo.'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['The animals are always hungry.', 'The animals always are hungry.', 'The animals always hungry.'], answer: 0 },
              { id: 'c5', q: 'Обери правильне:', options: ['We start in 6:30.', 'We start at 6:30.', 'We start on 6:30.'], answer: 1 },
              { id: 'c6', q: 'Обери правильне:', options: ['My brother studys at night.', 'My brother study at night.', 'My brother studies at night.'], answer: 2 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Interview questions',
            instructions: 'Склади питання до інтерв’ю.',
            items: [
              { id: 'o1', prompt: 'О котрій ти закінчуєш роботу?', answer: 'What time do you finish work?' },
              { id: 'o2', prompt: 'Тарас доглядає левів?', answer: 'Does Taras look after the lions?', extra: ['looks'] },
              { id: 'o3', prompt: 'Що зазвичай їдять мавпи?', answer: 'What do monkeys usually eat?' },
              { id: 'o4', prompt: 'Ти працюєш по суботах?', answer: 'Do you work on Saturdays?' }
            ]
          },
          {
            id: 'gram-mod12',
            type: 'choice',
            title: '↺ Modules 1–2 review',
            instructions: 'Повторення модулів 1–2: to be, have got, присвійні.',
            items: [
              { id: 'm1', q: 'Horace ___ an old elephant.', options: ['is', 'has got', 'does'], answer: 0 },
              { id: 'm2', q: 'Elephants ___ big ears.', options: ['are', 'have got', 'has got'], answer: 1 },
              { id: 'm3', q: 'Vika loves ___ job.', options: ['his', 'her', 'their'], answer: 1 },
              { id: 'm4', q: 'This is ___ hat.', options: ['Vika', 'Vika’s', 'Vikas'], answer: 1 },
              { id: 'm5', q: '___ giraffes are very tall.', options: ['This', 'These', 'That'], answer: 1 }
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
            title: 'Weekdays and weekends',
            instructions: 'Друзі порівнюють, що вони роблять у будні та на вихідних. Послухай.',
            audio: {
              title: 'Dialogue: Den & Yana',
              lines: [
                { who: 'Den', text: 'What do you usually do at the weekend, Yana?' },
                { who: 'Yana', text: 'On Saturday I get up late, at about ten. Then I meet my friends in the city.' },
                { who: 'Den', text: 'Do you work on Saturdays?' },
                { who: 'Yana', text: 'No, I don’t. But my sister does. She’s a hairdresser and Saturday is her busy day.' },
                { who: 'Den', text: 'And on Sunday?' },
                { who: 'Yana', text: 'On Sunday I always visit my grandparents. My grandma cooks a big lunch. What about you?' },
                { who: 'Den', text: 'I often play football on Sunday morning. I never get up late — my dog wakes me up at seven!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What time does Yana get up on Saturday?', options: ['At seven', 'At about ten', 'At twelve'], answer: 1 },
              { id: 'l2', q: 'Does Yana work on Saturdays?', options: ['Yes, she does.', 'No, she doesn’t.'], answer: 1 },
              { id: 'l3', q: 'Yana’s sister is a…', options: ['hairdresser', 'nurse', 'cook'], answer: 0 },
              { id: 'l4', q: 'What does Yana always do on Sunday?', options: ['She plays football.', 'She visits her grandparents.', 'She meets friends.'], answer: 1 },
              { id: 'l5', q: 'Why does Den never get up late?', options: ['He works.', 'His dog wakes him up.', 'He plays football at six.'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What do you usually do at the weekend?' },
              { id: 'dc2', text: 'My sister works on Saturdays.' },
              { id: 'dc3', text: 'I always visit my grandparents.' },
              { id: 'dc4', text: 'He never gets up late.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-weekday',
            type: 'writing',
            title: 'My weekday vs my weekend',
            instructions: 'Порівняй свій будній день і вихідний. Використай усю граматику модуля.',
            prompt: 'Write about your weekdays and weekends (80–100 words).\n• Weekdays: what time you get up, work/study, what you do in the evening.\n• Weekends: what you usually / sometimes / never do.\n• Write 2 sentences about another person (he/she + -s / doesn’t).\n• Use at / in / on correctly.',
            minWords: 80,
            maxWords: 110,
            phrases: ['On weekdays', 'At the weekend', 'I usually', 'I never', 'doesn’t', 'in the evening', 'at'],
            checklist: ['Є опис буднів і вихідних', 'Є щонайменше 3 прислівники частоти', 'Є 2 речення про іншу людину з -s / doesn’t', 'Є заперечення з don’t', 'at / in / on вжито правильно'],
            model: `On weekdays I get up at seven o’clock. I have a shower, drink coffee and go to work by tram. I work in an office from nine to six. In the evening I usually cook dinner and I sometimes go to the gym.

At the weekend I don’t get up early. On Saturday I often meet my friends in a café. On Sunday I always call my parents. I never work at the weekend!

My husband is a doctor. He works on Saturdays, but he doesn’t work on Sundays. On Sunday we go for a long walk together.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-interview',
            type: 'speaking',
            title: 'Your interview',
            instructions: 'Тепер інтерв’ю беруть у тебе! Відповідай повними реченнями.',
            phrases: ['I start at…', 'First,… Then…', 'I usually…', 'I don’t…', 'On Saturdays…'],
            tasks: [
              { id: 'sp1', q: 'What do you do? What time do you start and finish?', tips: 'I’m a … / I study … I start at …', model: 'I’m an accountant. I start work at nine and finish at six.' },
              { id: 'sp2', q: 'What do you do first in the morning?', tips: 'First, I … Then I … After that I …', model: 'First, I check my phone. Then I have a shower. After that I make breakfast.' },
              { id: 'sp3', q: 'What do you usually do at the weekend? What do you never do?', tips: 'I usually … I sometimes … I never …', model: 'I usually sleep late. I sometimes go to the cinema. I never work at the weekend.' },
              { id: 'sp4', q: 'Tell me about a friend’s day.', tips: 'He/She gets up … works … doesn’t …', model: 'My friend Ira is a teacher. She gets up at six. She doesn’t have breakfast at home.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'interview': 'інтерв’ю', 'zoo': 'зоопарк', 'week': 'тиждень', 'this week': 'цього тижня', 'blog': 'блог', 'talks': 'розмовляє', 'zookeeper': 'доглядач у зоопарку',
      'start': 'починати', 'half past six': 'пів на сьому', 'animals': 'тварини', 'always': 'завжди', 'hungry': 'голодний', 'early': 'рано', 'first': 'спочатку; перший',
      'check': 'перевіряти', 'then': 'потім', 'give': 'давати', 'them': 'їм', 'food': 'їжа', 'elephants': 'слони', 'elephant': 'слон', 'eat': 'їсти',
      'a lot': 'багато', 'about': 'приблизно; про', 'kilos': 'кілограми', 'a day': 'на день', 'monkeys': 'мавпи', 'monkey': 'мавпа', 'usually': 'зазвичай',
      'fruit': 'фрукти', 'vegetables': 'овочі', 'work with': 'працювати з', 'all': 'всі', 'giraffes': 'жирафи', 'giraffe': 'жирафа', 'colleague': 'колега',
      'looks after': 'доглядає', 'lions': 'леви', 'lion': 'лев', 'never': 'ніколи', 'goes into': 'заходить у', 'enclosure': 'вольєр', 'favourite': 'улюблений',
      'old': 'старий', 'called': 'на ім’я', 'clever': 'розумний', 'sometimes': 'іноді', 'takes': 'бере', 'hat': 'капелюх', 'when': 'коли', 'finish': 'закінчувати',
      "o'clock": 'рівно (година)', 'saturdays': 'суботи, по суботах', 'often': 'часто', 'mondays': 'понеділки, по понеділках', 'cleans': 'прибирає',
      'which': 'які', 'sundays': 'неділі', 'late': 'пізно', 'get up': 'вставати', 'have lunch': 'обідати', 'skip': 'пропускати', 'hairdresser': 'перукар',
      'quarter past': 'чверть на', 'ears': 'вуха', 'big': 'великий', 'job': 'робота', 'tall': 'високий', 'weekdays': 'будні', 'weekend': 'вихідні',
      'meet': 'зустрічати', 'friends': 'друзі', 'city': 'місто', 'sister': 'сестра', 'busy': 'зайнятий', 'visit': 'відвідувати', 'grandparents': 'бабуся й дідусь',
      'grandma': 'бабуся', 'cooks': 'готує', 'what about you': 'а ти?', 'play': 'грати', 'football': 'футбол', 'dog': 'собака', 'wakes me up': 'будить мене',
      'shower': 'душ', 'coffee': 'кава', 'tram': 'трамвай', 'office': 'офіс', 'from': 'з', 'to': 'до', 'cook': 'готувати', 'dinner': 'вечеря', 'gym': 'спортзал',
      'café': 'кафе', 'call': 'дзвонити', 'parents': 'батьки', 'husband': 'чоловік', 'doctor': 'лікар', 'go for a walk': 'піти на прогулянку',
      'together': 'разом', 'long': 'довгий', 'accountant': 'бухгалтер', 'phone': 'телефон', 'make': 'готувати, робити', 'breakfast': 'сніданок',
      'sleep': 'спати', 'cinema': 'кінотеатр', 'teacher': 'вчитель', 'home': 'дім', "don't": 'не', "doesn't": 'не', "it's": 'це є', "he's": 'він є', "she's": 'вона є'
    }
  });
})();
