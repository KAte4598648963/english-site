/*
 * A1 · Module 6 · Lesson 3 — My first trip (Past Simple: irregular verbs; did / didn’t; questions)
 * Review: regular -ed verbs (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'My first trip abroad',
    text: `I was nineteen when I went abroad for the first time. My friend Marta and I went to Italy for a week.

We flew from Kraków to Rome. I didn’t sleep on the plane — I was too excited! We arrived late in the evening and took a taxi to our little hotel. The taxi driver spoke very fast and we didn’t understand him at all.

The next day we saw the Colosseum and ate real Italian pizza. It was delicious! In the afternoon we bought some souvenirs and I sent postcards to my family. On the third day I lost my bag with my passport in it. I was very scared. But a kind waiter found it in his café and gave it back to me!

Did we have a good time? Yes, we did! We met a lot of nice people and I learned twenty Italian words. When we came home, I knew one thing: I wanted to travel more.`
  };

  ENG.registerLesson({
    id: 'a1-m6-l3',
    level: 'a1',
    title: 'My first trip. Моя перша подорож',
    subtitle: 'Past Simple: неправильні дієслова · did / didn’t · питання',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A trip to Italy',
            instructions: 'Прочитай історію першої поїздки за кордон.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'How old was the writer?', options: ['Seventeen', 'Nineteen', 'Twenty-one'], answer: 1 },
              { id: 'q2', q: 'How did they travel to Rome?', options: ['By train', 'By bus', 'By plane'], answer: 2 },
              { id: 'q3', q: 'Why didn’t they understand the taxi driver?', options: ['He spoke very fast.', 'He spoke German.', 'He didn’t speak.'], answer: 0 },
              { id: 'q4', q: 'What did the writer lose?', options: ['A phone', 'A bag with a passport', 'Money'], answer: 1 },
              { id: 'q5', q: 'Who found it?', options: ['Marta', 'A police officer', 'A waiter'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The writer slept on the plane.', answer: false, explain: '“I didn’t sleep on the plane.”' },
              { id: 's2', s: 'They took a bus to the hotel.', answer: false, explain: 'They took a taxi.' },
              { id: 's3', s: 'They saw the Colosseum.', answer: true },
              { id: 's4', s: 'The writer sent postcards to the family.', answer: true },
              { id: 's5', s: 'The writer learned fifty Italian words.', answer: false, explain: 'Twenty words.' }
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
            title: 'Irregular verbs (1)',
            instructions: 'Неправильні дієслова не мають -ed — їх треба вивчити напам’ять. Почнемо з найчастіших!',
            cards: [
              { front: 'go → went', back: 'іти, їхати → пішов, поїхав', example: 'We went to Italy.' },
              { front: 'see → saw', back: 'бачити → побачив', example: 'We saw the Colosseum.' },
              { front: 'eat → ate', back: 'їсти → їв', example: 'We ate pizza.' },
              { front: 'have → had', back: 'мати → мав', example: 'We had a good time.' },
              { front: 'buy → bought', ipa: '/bɔːt/', back: 'купувати → купив', example: 'I bought some souvenirs.' },
              { front: 'take → took', back: 'брати → взяв', example: 'We took a taxi.' },
              { front: 'fly → flew', back: 'летіти → полетів', example: 'We flew to Rome.' },
              { front: 'lose → lost', back: 'губити → загубив', example: 'I lost my bag.' },
              { front: 'find → found', back: 'знаходити → знайшов', example: 'A waiter found it.' },
              { front: 'meet → met', back: 'зустрічати → зустрів', example: 'We met nice people.' },
              { front: 'come → came', back: 'приходити → прийшов', example: 'We came home on Sunday.' },
              { front: 'abroad', ipa: '/əˈbrɔːd/', back: 'за кордон(ом)', example: 'My first trip abroad.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Irregular verbs',
            instructions: 'Поєднай дієслово з формою минулого часу.',
            pairs: [
              ['go', 'went'],
              ['buy', 'bought'],
              ['see', 'saw'],
              ['write', 'wrote'],
              ['give', 'gave'],
              ['speak', 'spoke'],
              ['know', 'knew'],
              ['get', 'got']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the travel story',
            instructions: 'Встав неправильне дієслово в минулому часі. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Last summer we {{went}} to the seaside.' },
              { id: 'd2', text: 'We {{took}} the night train.' },
              { id: 'd3', text: 'We {{ate}} fresh fish every day.' },
              { id: 'd4', text: 'I {{bought}} a new hat at the market.' },
              { id: 'd5', text: 'We {{met}} a nice family from Poland.' },
              { id: 'd6', text: 'My sister {{lost}} her sunglasses on the beach.' }
            ],
            distractors: ['flew']
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
            title: 'Past Simple: irregular verbs, negatives & questions',
            instructions: 'Неправильні дієслова, заперечення і питання в Past Simple. Допоміжне дієслово — did.',
            html: `
<h3>1. Неправильні дієслова</h3>
<p>Багато найчастіших дієслів мають <b>свою особливу форму</b> минулого часу — без -ed. Їх треба запам’ятати:</p>
<div class="table-wrap"><table>
  <tr><th>Дієслово</th><th>Past Simple</th><th>Дієслово</th><th>Past Simple</th></tr>
  <tr><td>go</td><td><b>went</b></td><td>buy</td><td><b>bought</b></td></tr>
  <tr><td>have</td><td><b>had</b></td><td>take</td><td><b>took</b></td></tr>
  <tr><td>see</td><td><b>saw</b></td><td>come</td><td><b>came</b></td></tr>
  <tr><td>eat</td><td><b>ate</b></td><td>get</td><td><b>got</b></td></tr>
  <tr><td>make</td><td><b>made</b></td><td>meet</td><td><b>met</b></td></tr>
  <tr><td>do</td><td><b>did</b></td><td>say</td><td><b>said</b></td></tr>
</table></div>
<p>💡 Як і з правильними — <b>однаково для всіх осіб</b>: I went, she went, they went.</p>

<h3>2. Заперечення: didn’t + дієслово (початкова форма!)</h3>
<div class="table-wrap"><table>
  <tr><th>+</th><th>−</th></tr>
  <tr><td>I <b>slept</b> on the plane.</td><td>I <b>didn’t sleep</b> on the plane.</td></tr>
  <tr><td>We <b>understood</b> him.</td><td>We <b>didn’t understand</b> him.</td></tr>
  <tr><td>She <b>worked</b> yesterday.</td><td>She <b>didn’t work</b> yesterday.</td></tr>
</table></div>
<p>⚠️ Минулий час «сидить» у <b>did</b>, тому дієслово повертається до словникової форми:<br>
<span class="no">I didn’t went.</span> <span class="no">She didn’t worked.</span> → <span class="yes">I didn’t go. She didn’t work.</span></p>

<h3>3. Питання: Did + хто + дієслово?</h3>
<div class="table-wrap"><table>
  <tr><th>Питання</th><th>Так</th><th>Ні</th></tr>
  <tr><td><b>Did</b> you <b>have</b> a good time?</td><td>Yes, I <b>did</b>.</td><td>No, I <b>didn’t</b>.</td></tr>
  <tr><td><b>Did</b> she <b>lose</b> her bag?</td><td>Yes, she <b>did</b>.</td><td>No, she <b>didn’t</b>.</td></tr>
</table></div>
<p>З питальними словами: <b>Where did</b> you go? <b>What did</b> you eat? <b>When did</b> they arrive? <b>How did</b> you travel?</p>

<h3>4. was / were — без did!</h3>
<div class="ex-line"><b>Were</b> you scared? — Yes, I was. <span class="muted">(не «Did you be scared?»)</span></div>
<div class="ex-line">I <b>wasn’t</b> tired. <span class="muted">(не «I didn’t be tired»)</span></div>

<h3>5. Повна картина Present → Past</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>Present Simple</th><th>Past Simple</th></tr>
  <tr><td>+</td><td>She <b>goes</b>.</td><td>She <b>went</b>.</td></tr>
  <tr><td>−</td><td>She <b>doesn’t go</b>.</td><td>She <b>didn’t go</b>.</td></tr>
  <tr><td>?</td><td><b>Does</b> she <b>go</b>?</td><td><b>Did</b> she <b>go</b>?</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I goed to Italy.</span> → <span class="yes">I went to Italy.</span><br>
<span class="no">Did you saw the Colosseum?</span> → <span class="yes">Did you see the Colosseum?</span><br>
<span class="no">Where you went?</span> → <span class="yes">Where did you go?</span><br>
<span class="no">We didn’t ate.</span> → <span class="yes">We didn’t eat.</span></div>`
          },
          {
            id: 'gram-irreg',
            type: 'gap',
            title: 'Irregular verbs',
            instructions: 'Напиши дієслово в Past Simple.',
            items: [
              { id: 'g1', text: 'We {{flew}} to Rome. (fly)' },
              { id: 'g2', text: 'They {{took}} a taxi. (take)' },
              { id: 'g3', text: 'I {{saw}} the Colosseum. (see)' },
              { id: 'g4', text: 'We {{had}} a good time. (have)' },
              { id: 'g5', text: 'She {{bought}} postcards. (buy)' },
              { id: 'g6', text: 'A waiter {{found}} my bag. (find)' },
              { id: 'g7', text: 'We {{came}} home on Sunday. (come)' },
              { id: 'g8', text: 'He {{gave}} it back to me. (give)' }
            ]
          },
          {
            id: 'gram-neg',
            type: 'gap',
            title: 'Negatives with didn’t',
            instructions: 'Зроби заперечення: didn’t + дієслово у початковій формі.',
            items: [
              { id: 'n1', text: 'I slept on the plane. → I {{didn’t sleep|did not sleep}} on the plane.' },
              { id: 'n2', text: 'We understood him. → We {{didn’t understand|did not understand}} him.' },
              { id: 'n3', text: 'She went to Paris. → She {{didn’t go|did not go}} to Paris.' },
              { id: 'n4', text: 'They ate pasta. → They {{didn’t eat|did not eat}} pasta.' },
              { id: 'n5', text: 'He visited the museum. → He {{didn’t visit|did not visit}} the museum.' }
            ]
          },
          {
            id: 'gram-q',
            type: 'choice',
            title: 'Past questions',
            instructions: 'Обери правильне питання або відповідь.',
            items: [
              { id: 'q1', q: 'Where ___ you go last summer?', options: ['do', 'did', 'were'], answer: 1 },
              { id: 'q2', q: 'Did you ___ the Colosseum?', options: ['see', 'saw', 'seen'], answer: 0 },
              { id: 'q3', q: 'Did Marta lose her bag? — No, she ___.', options: ['didn’t', 'wasn’t', 'doesn’t'], answer: 0 },
              { id: 'q4', q: '___ you scared? — Yes, I was.', options: ['Did', 'Were', 'Was'], answer: 1 },
              { id: 'q5', q: 'What ___ you eat in Rome?', options: ['did', 'do', 'was'], answer: 0 },
              { id: 'q6', q: 'How ___ they travel? — By plane.', options: ['did', 'were', 'do'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the questions',
            instructions: 'Склади питання про подорож.',
            items: [
              { id: 'o1', prompt: 'Куди ти їздив минулого літа?', answer: 'Where did you go last summer?', extra: ['went'] },
              { id: 'o2', prompt: 'Що ви купили?', answer: 'What did you buy?' },
              { id: 'o3', prompt: 'Ти добре провів час?', answer: 'Did you have a good time?', extra: ['had'] },
              { id: 'o4', prompt: 'Ми не зрозуміли водія.', answer: "We didn't understand the driver." }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: правильні дієслова',
            instructions: 'Згадаймо урок 2. Напиши Past Simple.',
            items: [
              { id: 'r1', text: 'We {{arrived}} late in the evening. (arrive)' },
              { id: 'r2', text: 'I {{learned|learnt}} twenty Italian words. (learn)' },
              { id: 'r3', text: 'I {{wanted}} to travel more. (want)' },
              { id: 'r4', text: 'We {{stopped}} at a little café. (stop)' },
              { id: 'r5', text: 'She {{studied}} Italian for a year. (study)' }
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
            title: 'Holiday questions',
            instructions: 'Тетяна розпитує колегу про відпустку. Послухай.',
            audio: {
              title: 'Dialogue: Tetiana & Sam',
              lines: [
                { who: 'Tetiana', text: 'Welcome back, Sam! Where did you go?' },
                { who: 'Sam', text: 'I went to Georgia with my wife. We stayed in Tbilisi for five days.' },
                { who: 'Tetiana', text: 'Did you like it?' },
                { who: 'Sam', text: 'Yes, we loved it! We ate amazing food and we saw the mountains.' },
                { who: 'Tetiana', text: 'Did you go hiking?' },
                { who: 'Sam', text: 'No, we didn’t. It rained a lot. But we took a cable car and we drank great wine.' },
                { who: 'Tetiana', text: 'What did you buy?' },
                { who: 'Sam', text: 'I bought you this — Georgian chocolate!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Where did Sam go?', options: ['Greece', 'Georgia', 'Germany'], answer: 1 },
              { id: 'l2', q: 'How long did they stay?', options: ['Three days', 'Five days', 'Two weeks'], answer: 1 },
              { id: 'l3', q: 'Did they go hiking?', options: ['Yes, they did.', 'No, they didn’t.'], answer: 1 },
              { id: 'l4', q: 'Why not?', options: ['It rained a lot.', 'They were tired.', 'Sam was ill.'], answer: 0 },
              { id: 'l5', q: 'What did Sam buy for Tetiana?', options: ['Wine', 'Chocolate', 'A postcard'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Where did you go?' },
              { id: 'dc2', text: 'We saw the mountains.' },
              { id: 'dc3', text: 'No, we didn’t.' },
              { id: 'dc4', text: 'What did you buy?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-trip',
            type: 'writing',
            title: 'A trip I remember',
            instructions: 'Напиши про поїздку, яку ти пам’ятаєш (першу, найкращу чи найсмішнішу).',
            prompt: 'Write about a trip (80–100 words).\n• When and where did you go? Who with?\n• How did you travel?\n• What did you do / see / eat / buy? (irregular verbs!)\n• What didn’t you do? (didn’t + verb)\n• Was there a problem? How did you feel?',
            minWords: 80,
            maxWords: 110,
            phrases: ['Two years ago', 'I went', 'We took', 'We saw', 'I didn’t', 'It was', 'I felt'],
            checklist: ['Щонайменше 5 неправильних дієслів (went, saw, ate…)', 'Є didn’t + початкова форма', 'Є was / were', 'Є yesterday / ago / last…'],
            model: `Three years ago I went to Bukovel with my brother. We took the night train from Kyiv and arrived early in the morning.

We had skiing lessons every day. I fell a lot, but my brother learned very fast! In the evenings we ate banosh and drank hot tea. I bought a warm hat at the market.

On the last day I lost my phone in the snow. We didn’t find it, so I didn’t have any photos. I was sad, but the trip was fantastic!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-trip',
            type: 'speaking',
            title: 'Interview about a trip',
            instructions: 'Відповідай на питання про поїздку повними реченнями.',
            phrases: ['I went to…', 'We took…', 'Yes, I did. / No, I didn’t.', 'It was…', 'I bought…'],
            tasks: [
              { id: 'sp1', q: 'Where did you go on your last trip? How did you get there?', tips: 'I went to … I took … / I drove …', model: 'I went to Lviv. I took the train.' },
              { id: 'sp2', q: 'What did you see and eat there?', tips: 'I saw … I ate …', model: 'I saw the Opera House and I ate a lot of chocolate.' },
              { id: 'sp3', q: 'Did you buy anything? Did you meet anyone interesting?', tips: 'Yes, I did. I bought … / No, I didn’t …', model: 'Yes, I did. I bought some coffee. I didn’t meet anyone interesting.' },
              { id: 'sp4', q: 'Ask me three questions about my last holiday.', tips: 'Where did…? Did you…? What did…?', model: 'Where did you go? Did you like it? What did you do there?' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'trip': 'поїздка', 'abroad': 'за кордон(ом)', 'first time': 'перший раз', 'when': 'коли', 'went': 'поїхав (go)', 'friend': 'подруга, друг', 'italy': 'Італія',
      'week': 'тиждень', 'flew': 'полетіли (fly)', 'kraków': 'Краків', 'rome': 'Рим', "didn't": 'не (у минулому)', 'sleep': 'спати', 'plane': 'літак',
      'too': 'занадто', 'excited': 'схвильований', 'arrived': 'прибули', 'late': 'пізно', 'evening': 'вечір', 'took': 'взяли (take)', 'taxi': 'таксі',
      'little': 'маленький', 'hotel': 'готель', 'driver': 'водій', 'spoke': 'говорив (speak)', 'fast': 'швидко', 'understand': 'розуміти', 'him': 'його',
      'at all': 'зовсім', 'next day': 'наступного дня', 'saw': 'побачили (see)', 'colosseum': 'Колізей', 'ate': 'їли (eat)', 'real': 'справжній',
      'italian': 'італійський', 'pizza': 'піца', 'delicious': 'смачний', 'afternoon': 'після обіду', 'bought': 'купили (buy)', 'souvenirs': 'сувеніри',
      'sent': 'надіслав (send)', 'postcards': 'листівки', 'family': 'сім’я', 'third': 'третій', 'lost': 'загубив (lose)', 'bag': 'сумка', 'passport': 'паспорт',
      'scared': 'наляканий', 'kind': 'добрий', 'waiter': 'офіціант', 'found': 'знайшов (find)', 'café': 'кафе', 'gave': 'віддав (give)', 'gave it back': 'повернув',
      'did': 'допоміжне дієслово минулого часу; зробив (do)', 'have a good time': 'добре провести час', 'met': 'зустріли (meet)', 'a lot of': 'багато',
      'nice': 'приємні', 'people': 'люди', 'learned': 'вивчив', 'twenty': 'двадцять', 'words': 'слова', 'came': 'приїхали (come)', 'home': 'додому',
      'knew': 'знав (know)', 'thing': 'річ', 'wanted': 'хотів', 'travel': 'подорожувати', 'more': 'більше', 'seventeen': 'сімнадцять', 'twenty-one': 'двадцять один',
      'train': 'потяг', 'bus': 'автобус', 'german': 'німецькою', 'phone': 'телефон', 'money': 'гроші', 'police officer': 'поліцейський', 'fifty': 'п’ятдесят',
      'had': 'мали (have)', 'go': 'іти, їхати', 'see': 'бачити', 'eat': 'їсти', 'have': 'мати', 'buy': 'купувати', 'take': 'брати', 'fly': 'летіти',
      'lose': 'губити', 'find': 'знаходити', 'meet': 'зустрічати', 'come': 'приходити', 'write': 'писати', 'wrote': 'написав', 'give': 'давати',
      'speak': 'говорити', 'know': 'знати', 'get': 'отримувати', 'got': 'отримав', 'summer': 'літо', 'seaside': 'узбережжя', 'night train': 'нічний потяг',
      'fresh': 'свіжий', 'fish': 'риба', 'every day': 'щодня', 'new': 'новий', 'hat': 'капелюх', 'market': 'ринок', 'poland': 'Польща', 'sister': 'сестра',
      'sunglasses': 'сонцезахисні окуляри', 'beach': 'пляж', 'slept': 'спав (sleep)', 'understood': 'зрозуміли', 'paris': 'Париж', 'pasta': 'макарони',
      'visited': 'відвідав', 'museum': 'музей', 'stopped': 'зупинилися', 'studied': 'вивчала', 'year': 'рік', 'welcome back': 'з поверненням',
      'georgia': 'Грузія', 'wife': 'дружина', 'stayed': 'зупинилися', 'tbilisi': 'Тбілісі', 'five days': 'п’ять днів', 'like': 'подобатися', 'loved': 'дуже сподобалося',
      'amazing': 'дивовижний', 'food': 'їжа', 'mountains': 'гори', 'hiking': 'піші походи', 'rained': 'йшов дощ', 'cable car': 'канатна дорога',
      'drank': 'пили (drink)', 'great': 'чудовий', 'wine': 'вино', 'georgian': 'грузинський', 'chocolate': 'шоколад', 'greece': 'Греція', 'germany': 'Німеччина',
      'how long': 'як довго', 'weeks': 'тижні', 'tired': 'втомлені', 'ill': 'хворий', 'remember': 'пам’ятати', 'brother': 'брат', 'early': 'рано',
      'morning': 'ранок', 'skiing lessons': 'уроки лиж', 'fell': 'падав (fall)', 'hot': 'гарячий', 'tea': 'чай', 'warm': 'теплий', 'last': 'останній',
      'snow': 'сніг', 'photos': 'фото', 'sad': 'сумний', 'fantastic': 'фантастичний', 'interview': 'інтерв’ю', 'opera house': 'оперний театр',
      'anything': 'щось', 'anyone': 'когось', 'interesting': 'цікавий', 'coffee': 'кава', 'holiday': 'відпустка', 'there': 'там', 'felt': 'почувався (feel)'
    }
  });
})();
