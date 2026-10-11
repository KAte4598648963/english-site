/*
 * A1 · Module 3 · Lesson 3 — Do you…? (Present Simple questions & negatives; adverbs of frequency)
 * Review: he/she/it + -s (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Healthy habits: a survey',
    text: `Our class magazine asks two students: “Do you have healthy habits?”

Marta, 17: “Yes, I think so! I always have breakfast — usually porridge and fruit. I drink a lot of water. I don’t drink cola. I often go swimming after school, and I sometimes do yoga at the weekend. I never stay up late. I go to bed at ten.”

Ihor, 18: “Hmm, not really. I usually skip breakfast — I’m never hungry in the morning. I often eat fast food for lunch. I don’t do sport, but I walk to school every day. And I check my phone in bed… I sometimes go to sleep at two in the morning! My mum says, ‘Ihor, you don’t sleep enough!’”

What about you? Do you sleep eight hours? Does your family eat vegetables every day?`
  };

  ENG.registerLesson({
    id: 'a1-m3-l3',
    level: 'a1',
    title: 'Do you…? Звички',
    subtitle: 'Present Simple: do / does, don’t / doesn’t · always, usually, often, sometimes, never',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Marta and Ihor',
            instructions: 'Прочитай опитування про здорові звички і дай відповіді.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What does Marta usually have for breakfast?', options: ['Fast food', 'Porridge and fruit', 'Nothing'], answer: 1 },
              { id: 'q2', q: 'What does Marta often do after school?', options: ['She goes swimming.', 'She does yoga.', 'She plays games.'], answer: 0 },
              { id: 'q3', q: 'Why does Ihor skip breakfast?', options: ['He gets up late.', 'He is never hungry in the morning.', 'He doesn’t like porridge.'], answer: 1 },
              { id: 'q4', q: 'How does Ihor go to school?', options: ['By bus', 'He walks.', 'By bike'], answer: 1 },
              { id: 'q5', q: 'Who has healthier habits?', options: ['Marta', 'Ihor', 'They are the same.'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда? Зверни увагу на always / often / never.',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Marta always has breakfast.', answer: true },
              { id: 's2', s: 'Marta drinks cola.', answer: false, explain: '“I don’t drink cola.”' },
              { id: 's3', s: 'Marta often stays up late.', answer: false, explain: '“I never stay up late.”' },
              { id: 's4', s: 'Ihor does a lot of sport.', answer: false, explain: '“I don’t do sport.”' },
              { id: 's5', s: 'Ihor sometimes goes to sleep at 2 a.m.', answer: true }
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
            title: 'Habits & how often',
            instructions: 'Вирази про звички і слова «як часто». Подивись на шкалу частоти: always 100% → never 0%.',
            cards: [
              { front: 'always (100%)', ipa: '/ˈɔːlweɪz/', back: 'завжди', example: 'I always have breakfast.' },
              { front: 'usually (80%)', ipa: '/ˈjuːʒuəli/', back: 'зазвичай', example: 'I usually walk to work.' },
              { front: 'often (60%)', ipa: '/ˈɒfn/', back: 'часто', example: 'We often eat fruit.' },
              { front: 'sometimes (40%)', ipa: '/ˈsʌmtaɪmz/', back: 'іноді', example: 'She sometimes does yoga.' },
              { front: 'never (0%)', ipa: '/ˈnevə/', back: 'ніколи', example: 'I never drink cola.' },
              { front: 'habit', ipa: '/ˈhæbɪt/', back: 'звичка', example: 'It’s a healthy habit.' },
              { front: 'healthy / unhealthy', ipa: '/ˈhelθi/', back: 'здоровий / нездоровий', example: 'Fast food is unhealthy.' },
              { front: 'skip breakfast', back: 'пропускати сніданок', example: 'He usually skips breakfast.' },
              { front: 'stay up late', back: 'не лягати допізна', example: 'I never stay up late.' },
              { front: 'do sport / do yoga', back: 'займатися спортом / йогою', example: 'Do you do sport?' },
              { front: 'go swimming', back: 'ходити плавати', example: 'She often goes swimming.' },
              { front: 'enough', ipa: '/ɪˈnʌf/', back: 'достатньо', example: 'You don’t sleep enough!' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Make habit phrases',
            instructions: 'Поєднай частини виразів.',
            pairs: [
              ['skip', 'breakfast'],
              ['stay up', 'late'],
              ['do', 'yoga'],
              ['go', 'swimming'],
              ['check', 'your phone'],
              ['eat', 'vegetables'],
              ['drink', 'water'],
              ['sleep', 'eight hours']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'How often?',
            instructions: 'Встав прислівник частоти за відсотком у дужках.',
            items: [
              { id: 'd1', text: 'I {{always}} brush my teeth in the morning. (100%)' },
              { id: 'd2', text: 'We {{usually}} have dinner at seven. (80%)' },
              { id: 'd3', text: 'She {{often}} reads in bed. (60%)' },
              { id: 'd4', text: 'They {{sometimes}} eat pizza. (40%)' },
              { id: 'd5', text: 'He {{never}} drinks coffee. (0%)' }
            ],
            distractors: ['enough']
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
            title: 'Present Simple: questions, negatives, frequency',
            instructions: 'Як поставити питання і сказати «ні» в Present Simple. Допоміжне слово — do / does.',
            html: `
<h3>1. Допоміжні дієслова do / does</h3>
<p>У Present Simple для питань і заперечень потрібен «помічник»: <b>do</b> (для I/you/we/they) або <b>does</b> (для he/she/it). Українською він не перекладається.</p>

<h3>2. Заперечення: don’t / doesn’t + дієслово</h3>
<div class="table-wrap"><table>
  <tr><th>I / you / we / they</th><th>he / she / it</th></tr>
  <tr><td>I <b>don’t</b> drink cola.<br>We <b>don’t</b> do sport.</td><td>She <b>doesn’t</b> drink cola.<br>He <b>doesn’t</b> do sport.</td></tr>
</table></div>
<p>⚠️ Після doesn’t <b>прибираємо -s</b> з дієслова! -s вже «сидить» у does:<br>
<span class="no">He doesn’t drinks.</span> → <span class="yes">He doesn’t drink.</span></p>

<h3>3. Питання: Do / Does + хто + дієслово?</h3>
<div class="table-wrap"><table>
  <tr><th>Питання</th><th>Так</th><th>Ні</th></tr>
  <tr><td><b>Do</b> you <b>sleep</b> eight hours?</td><td>Yes, I <b>do</b>.</td><td>No, I <b>don’t</b>.</td></tr>
  <tr><td><b>Does</b> she <b>eat</b> fruit?</td><td>Yes, she <b>does</b>.</td><td>No, she <b>doesn’t</b>.</td></tr>
  <tr><td><b>Do</b> they <b>walk</b> to school?</td><td>Yes, they <b>do</b>.</td><td>No, they <b>don’t</b>.</td></tr>
</table></div>
<p>З питальним словом: <b>What time do</b> you get up? · <b>Where does</b> he work? · <b>What do</b> you have for breakfast?</p>

<h3>4. to be чи do?</h3>
<div class="table-wrap"><table>
  <tr><th>to be (am/is/are)</th><th>звичайне дієслово (do/does)</th></tr>
  <tr><td><b>Are</b> you hungry? — I’m <b>not</b> hungry.</td><td><b>Do</b> you eat breakfast? — I <b>don’t</b> eat breakfast.</td></tr>
  <tr><td><b>Is</b> she a student?</td><td><b>Does</b> she study?</td></tr>
</table></div>
<p>Якщо в реченні є am/is/are — do не потрібен. <span class="no">Do you are hungry?</span></p>

<h3>5. Прислівники частоти: де стоять?</h3>
<div class="table-wrap"><table>
  <tr><th>Правило</th><th>Приклад</th></tr>
  <tr><td><b>перед</b> звичайним дієсловом</td><td>I <mark>always</mark> have breakfast. She <mark>often</mark> goes swimming.</td></tr>
  <tr><td><b>після</b> am / is / are</td><td>I’m <mark>never</mark> hungry. He is <mark>usually</mark> late.</td></tr>
  <tr><td>у питанні — після людини</td><td>Do you <mark>often</mark> eat fast food?</td></tr>
</table></div>
<p>⚠️ <b>never</b> вже означає «ні» — не додаємо don’t: <span class="no">I don’t never drink.</span> → <span class="yes">I never drink.</span></p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">You like coffee?</span> → <span class="yes">Do you like coffee?</span><br>
<span class="no">Does he works?</span> → <span class="yes">Does he work?</span><br>
<span class="no">She don’t eat meat.</span> → <span class="yes">She doesn’t eat meat.</span><br>
<span class="no">I go always to bed at ten.</span> → <span class="yes">I always go to bed at ten.</span></div>`
          },
          {
            id: 'gram-neg',
            type: 'gap',
            title: 'Make it negative',
            instructions: 'Зроби речення заперечним: don’t або doesn’t + дієслово без -s.',
            items: [
              { id: 'n1', text: 'Marta drinks cola. → Marta {{doesn’t drink|does not drink}} cola.' },
              { id: 'n2', text: 'I eat meat. → I {{don’t eat|do not eat}} meat.' },
              { id: 'n3', text: 'Ihor does sport. → Ihor {{doesn’t do|does not do}} sport.' },
              { id: 'n4', text: 'We watch TV. → We {{don’t watch|do not watch}} TV.' },
              { id: 'n5', text: 'My dad works on Saturday. → My dad {{doesn’t work|does not work}} on Saturday.' },
              { id: 'n6', text: 'They live here. → They {{don’t live|do not live}} here.' }
            ]
          },
          {
            id: 'gram-q',
            type: 'choice',
            title: 'Do or Does? Short answers',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'q1', q: '___ you drink a lot of water?', options: ['Do', 'Does', 'Are'], answer: 0 },
              { id: 'q2', q: '___ Marta do yoga?', options: ['Do', 'Does', 'Is'], answer: 1 },
              { id: 'q3', q: 'Does Ihor eat fast food? — Yes, he ___.', options: ['do', 'does', 'is'], answer: 1 },
              { id: 'q4', q: 'Do your parents work? — No, they ___.', options: ['don’t', 'doesn’t', 'aren’t'], answer: 0 },
              { id: 'q5', q: 'Where ___ your sister live?', options: ['do', 'does', 'is'], answer: 1 },
              { id: 'q6', q: '___ you hungry?', options: ['Do', 'Does', 'Are'], answer: 2, explain: 'hungry — прикметник, тут потрібно to be: Are you hungry?' },
              { id: 'q7', q: 'Does she ___ swimming?', options: ['go', 'goes', 'going'], answer: 0 }
            ]
          },
          {
            id: 'gram-freq',
            type: 'order',
            title: 'Where is the adverb?',
            instructions: 'Склади речення: прислівник перед дієсловом, але після am/is/are.',
            items: [
              { id: 'f1', prompt: 'Я завжди снідаю.', answer: 'I always have breakfast.' },
              { id: 'f2', prompt: 'Він ніколи не голодний вранці.', answer: 'He is never hungry in the morning.', extra: ["doesn't"] },
              { id: 'f3', prompt: 'Ти часто їси фастфуд?', answer: 'Do you often eat fast food?' },
              { id: 'f4', prompt: 'Вона іноді займається йогою.', answer: 'She sometimes does yoga.', extra: ['do'] }
            ]
          },
          {
            id: 'gram-questions',
            type: 'gap',
            title: 'Write the questions',
            instructions: 'Допиши питання з do / does. Відповідь підкаже, яке питання.',
            items: [
              { id: 'w1', text: 'What time {{do}} you get up? — At seven.' },
              { id: 'w2', text: 'Where {{does}} Ihor go to school? — In Kyiv.' },
              { id: 'w3', text: '{{Do}} you like vegetables? — Yes, I do.' },
              { id: 'w4', text: 'What {{does}} Marta drink? — Water.' },
              { id: 'w5', text: '{{Does}} your brother play football? — No, he doesn’t.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: he / she / it + -s',
            instructions: 'Згадаймо урок 2. Встав дієслово з правильним закінченням.',
            items: [
              { id: 'r1', text: 'Marta {{goes}} swimming after school. (go)' },
              { id: 'r2', text: 'Ihor {{checks}} his phone in bed. (check)' },
              { id: 'r3', text: 'Ihor’s mum {{says}}, “Go to sleep!” (say)' },
              { id: 'r4', text: 'My brother {{studies}} at night. (study)' },
              { id: 'r5', text: 'She {{has}} porridge for breakfast. (have)' }
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
            title: 'At the doctor’s',
            instructions: 'Пацієнт розповідає лікарці про свої звички. Послухай і дай відповіді.',
            audio: {
              title: 'Dialogue: Doctor & Mr Kovalenko',
              lines: [
                { who: 'Doctor', text: 'So, Mr Kovalenko, do you sleep well?' },
                { who: 'Patient', text: 'No, I don’t. I usually go to bed at one or two o’clock.' },
                { who: 'Doctor', text: 'Hmm. Do you drink coffee in the evening?' },
                { who: 'Patient', text: 'Yes, I do. I often drink coffee at nine or ten.' },
                { who: 'Doctor', text: 'And do you do any sport?' },
                { who: 'Patient', text: 'No, I don’t. But my wife does. She runs every morning.' },
                { who: 'Doctor', text: 'Does she sleep well?' },
                { who: 'Patient', text: 'Yes, she does! She always sleeps eight hours.' },
                { who: 'Doctor', text: 'OK. My advice: never drink coffee in the evening, and go for a walk with your wife!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Does Mr Kovalenko sleep well?', options: ['Yes, he does.', 'No, he doesn’t.'], answer: 1 },
              { id: 'l2', q: 'When does he often drink coffee?', options: ['In the morning', 'At lunch', 'In the evening'], answer: 2 },
              { id: 'l3', q: 'Does he do sport?', options: ['Yes, he does.', 'No, he doesn’t.'], answer: 1 },
              { id: 'l4', q: 'What does his wife do every morning?', options: ['She swims.', 'She runs.', 'She does yoga.'], answer: 1 },
              { id: 'l5', q: 'The doctor says: never…', options: ['drink coffee in the evening', 'go for a walk', 'sleep eight hours'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши питання та відповіді.',
            items: [
              { id: 'dc1', text: 'Do you sleep well?' },
              { id: 'dc2', text: 'No, I don’t.' },
              { id: 'dc3', text: 'Does she do sport?' },
              { id: 'dc4', text: 'She always sleeps eight hours.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-habits',
            type: 'writing',
            title: 'My habits',
            instructions: 'Дай свою відповідь у шкільний журнал: «Do you have healthy habits?»',
            prompt: 'Write about your habits (60–80 words).\n• Use all five adverbs: always, usually, often, sometimes, never.\n• Write two negative sentences (I don’t…).\n• Write about one person in your family (he/she + -s or doesn’t).\n• End with a question to the reader (Do you…?).',
            minWords: 60,
            maxWords: 90,
            phrases: ['always', 'usually', 'often', 'sometimes', 'never', 'I don’t', 'doesn’t', 'Do you'],
            checklist: ['Є всі 5 прислівників частоти', 'Прислівник перед дієсловом (I often eat…)', 'Є 2 заперечення з don’t', 'Є речення про he/she (з -s або doesn’t)', 'Є питання з Do you…?'],
            model: `I think my habits are quite healthy. I always drink a lot of water and I usually eat fruit for breakfast. I often walk to work — it’s only twenty minutes. I sometimes eat chocolate in the evening, but I never drink cola.

I don’t do yoga and I don’t go to the gym. My husband goes to the gym three times a week, but he doesn’t sleep enough. Do you sleep eight hours?`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-survey',
            type: 'speaking',
            title: 'Healthy habits survey',
            instructions: 'Відповідай на питання опитування: коротка відповідь + одне речення з прислівником частоти.',
            phrases: ['Yes, I do.', 'No, I don’t.', 'I always…', 'I sometimes…', 'I never…'],
            tasks: [
              { id: 'sp1', q: 'Do you have breakfast every day? What do you usually eat?', tips: 'Yes, I do. / No, I don’t. I usually …', model: 'Yes, I do. I usually have eggs and coffee.' },
              { id: 'sp2', q: 'Do you do sport? How often?', tips: 'I often / sometimes … I never …', model: 'Yes, I do. I often go running, and I sometimes play tennis.' },
              { id: 'sp3', q: 'Does someone in your family have an unhealthy habit?', tips: 'My … doesn’t … / My … often …', model: 'My brother often stays up late and he doesn’t eat vegetables.' },
              { id: 'sp4', q: 'Ask me three questions about my habits.', tips: 'Do you…? What time do you…? How often…?', model: 'Do you drink coffee? What time do you go to bed? Do you often cook?' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'healthy': 'здоровий', 'unhealthy': 'нездоровий', 'habits': 'звички', 'habit': 'звичка', 'survey': 'опитування', 'class': 'клас', 'magazine': 'журнал',
      'asks': 'питає', 'students': 'учні', 'think': 'думати', 'i think so': 'думаю, так', 'always': 'завжди', 'breakfast': 'сніданок', 'usually': 'зазвичай',
      'porridge': 'каша', 'fruit': 'фрукти', 'drink': 'пити', 'a lot of': 'багато', 'water': 'вода', "don't": 'не (do not)', "doesn't": 'не (does not)',
      'cola': 'кола', 'often': 'часто', 'go swimming': 'ходити плавати', 'after': 'після', 'school': 'школа', 'sometimes': 'іноді', 'do yoga': 'займатися йогою',
      'weekend': 'вихідні', 'never': 'ніколи', 'stay up late': 'не спати допізна', 'go to bed': 'лягати спати', 'not really': 'не зовсім', 'skip': 'пропускати',
      'hungry': 'голодний', 'morning': 'ранок', 'eat': 'їсти', 'fast food': 'фастфуд', 'lunch': 'обід', 'sport': 'спорт', 'do sport': 'займатися спортом',
      'walk': 'ходити пішки', 'every day': 'щодня', 'check': 'перевіряти', 'phone': 'телефон', 'bed': 'ліжко', 'go to sleep': 'засинати', 'mum': 'мама',
      'says': 'каже', 'sleep': 'спати', 'enough': 'достатньо', 'what about you': 'а ти?', 'hours': 'години', 'family': 'сім’я', 'vegetables': 'овочі',
      'nothing': 'нічого', 'games': 'ігри', 'why': 'чому', 'late': 'пізно', 'like': 'подобатися', 'bus': 'автобус', 'bike': 'велосипед', 'same': 'однакові',
      'healthier': 'здоровіший', 'brush': 'чистити (щіткою)', 'teeth': 'зуби', 'dinner': 'вечеря', 'reads': 'читає', 'pizza': 'піца', 'coffee': 'кава',
      'meat': 'м’ясо', 'tv': 'телевізор', 'saturday': 'субота', 'live': 'жити', 'here': 'тут', 'where': 'де', 'football': 'футбол', 'brother': 'брат',
      'doctor': 'лікар', "doctor's": 'у лікаря', 'so': 'отже', 'well': 'добре', 'any': 'якийсь', 'wife': 'дружина', 'runs': 'бігає', 'advice': 'порада',
      'go for a walk': 'піти на прогулянку', 'patient': 'пацієнт', 'swims': 'плаває', 'think so': 'так думаю', 'only': 'лише', 'minutes': 'хвилини',
      'chocolate': 'шоколад', 'gym': 'спортзал', 'three times a week': 'тричі на тиждень', 'husband': 'чоловік', 'running': 'біг', 'tennis': 'теніс',
      'someone': 'хтось', 'cook': 'готувати', 'reader': 'читач', 'how often': 'як часто', 'question': 'питання', "i'm": 'я є', "you're": 'ти є'
    }
  });
})();
