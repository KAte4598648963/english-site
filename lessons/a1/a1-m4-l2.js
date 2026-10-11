/*
 * A1 · Module 4 · Lesson 2 — In my town (some / any; imperatives; directions)
 * Review: there is / there are, prepositions of place (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'A note for our guests',
    text: `Welcome to our apartment! Here is some information about our neighbourhood.

There are some great cafés on our street. Try the café opposite the bakery — the cinnamon buns are amazing! There is a small supermarket next to the bus stop. It opens at 7 a.m. There aren’t any big shopping centres near here, but there are some nice little shops in the square.

The pharmacy is between the bank and the post office. There isn’t a hospital in our area, but there is a doctor’s surgery on Green Street.

How to get to the train station: go out of the building and turn left. Go straight on for about 500 metres. Cross the bridge and take the second street on the right. The station is in front of you.

Please don’t leave the windows open when you go out. Have a great time!
Iryna & Mykola`
  };

  ENG.registerLesson({
    id: 'a1-m4-l2',
    level: 'a1',
    title: 'In my town. Моє місто',
    subtitle: 'some / any · наказовий спосіб · як пройти',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Our neighbourhood',
            instructions: 'Господарі квартири залишили записку для гостей. Прочитай і дай відповіді.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What is special in the café opposite the bakery?', options: ['The coffee', 'The cinnamon buns', 'The pizza'], answer: 1 },
              { id: 'q2', q: 'Where is the supermarket?', options: ['Next to the bus stop', 'In the square', 'Opposite the bank'], answer: 0 },
              { id: 'q3', q: 'Where is the pharmacy?', options: ['Next to the hospital', 'Between the bank and the post office', 'On Green Street'], answer: 1 },
              { id: 'q4', q: 'How do you get to the station? First…', options: ['turn right', 'cross the bridge', 'turn left'], answer: 2 },
              { id: 'q5', q: 'What do Iryna and Mykola ask?', options: ['Don’t leave the windows open.', 'Don’t eat in the café.', 'Don’t use the bus.'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'There are some cafés on the street.', answer: true },
              { id: 's2', s: 'There is a big shopping centre near the apartment.', answer: false, explain: '“There aren’t any big shopping centres near here.”' },
              { id: 's3', s: 'The supermarket opens at 8 a.m.', answer: false, explain: 'It opens at 7 a.m.' },
              { id: 's4', s: 'There is a hospital in the area.', answer: false, explain: '“There isn’t a hospital in our area.”' },
              { id: 's5', s: 'You cross a bridge to get to the station.', answer: true }
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
            title: 'Places in town & directions',
            instructions: 'Місця в місті та фрази, щоб пояснити дорогу.',
            cards: [
              { front: 'pharmacy', ipa: '/ˈfɑːməsi/', back: 'аптека', example: 'Is there a pharmacy near here?' },
              { front: 'post office', back: 'пошта', example: 'The post office is next to the bank.' },
              { front: 'bus stop', back: 'автобусна зупинка', example: 'The bus stop is opposite the café.' },
              { front: 'train station', back: 'залізничний вокзал', example: 'How do I get to the train station?' },
              { front: 'square', ipa: '/skweə/', back: 'площа', example: 'There are shops in the square.' },
              { front: 'bridge', ipa: '/brɪdʒ/', back: 'міст', example: 'Cross the bridge.' },
              { front: 'library', ipa: '/ˈlaɪbrəri/', back: 'бібліотека', example: 'The library is quiet.' },
              { front: 'bakery', ipa: '/ˈbeɪkəri/', back: 'пекарня', example: 'I buy bread at the bakery.' },
              { front: 'turn left / right', back: 'поверніть ліворуч / праворуч', example: 'Turn left at the bank.' },
              { front: 'go straight on', back: 'ідіть прямо', example: 'Go straight on for 200 metres.' },
              { front: 'cross the road', back: 'перейдіть дорогу', example: 'Cross the road at the traffic lights.' },
              { front: 'neighbourhood', ipa: '/ˈneɪbəhʊd/', back: 'район, околиці', example: 'Our neighbourhood is quiet.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Where do you go?',
            instructions: 'Куди ти підеш? Поєднай потребу і місце.',
            pairs: [
              ['buy medicine', 'pharmacy'],
              ['send a parcel', 'post office'],
              ['take a train', 'train station'],
              ['borrow a book', 'library'],
              ['buy bread', 'bakery'],
              ['watch a film', 'cinema'],
              ['change money', 'bank'],
              ['see old paintings', 'museum']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Give directions',
            instructions: 'Встав слова, щоб пояснити дорогу. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Go {{straight}} on for 100 metres.' },
              { id: 'd2', text: '{{Turn}} right at the traffic lights.' },
              { id: 'd3', text: '{{Cross}} the road. Be careful!' },
              { id: 'd4', text: 'Take the first street on the {{left}}.' },
              { id: 'd5', text: 'The museum is {{opposite}} the park.' },
              { id: 'd6', text: 'Walk over the {{bridge}}.' }
            ],
            distractors: ['under']
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
            title: 'some / any + imperatives',
            instructions: 'Два корисні правила: «кілька / якісь» (some / any) і як давати інструкції (наказовий спосіб).',
            html: `
<h3>1. some / any = кілька, трохи, якісь</h3>
<p>Вживаємо з <b>множиною</b> (cafés, shops) і з <b>незлічуваними</b> словами (information, water, money), коли не називаємо точну кількість.</p>
<div class="table-wrap"><table>
  <tr><th></th><th>some / any</th><th>Приклад</th></tr>
  <tr><td><b>+</b> ствердження</td><td><b>some</b></td><td>There are <b>some</b> great cafés. Here is <b>some</b> information.</td></tr>
  <tr><td><b>−</b> заперечення</td><td><b>any</b></td><td>There aren’t <b>any</b> shopping centres.</td></tr>
  <tr><td><b>?</b> питання</td><td><b>any</b></td><td>Are there <b>any</b> banks near here?</td></tr>
</table></div>
<p>💡 З <b>одним</b> предметом — як і раніше, <b>a / an</b>: There is <b>a</b> bank. Is there <b>a</b> pharmacy?</p>
<p>💡 Прохання і пропозиції — теж <b>some</b>, навіть у питанні: Can I have <b>some</b> water, please?</p>

<h3>2. Наказовий спосіб (Imperative) — інструкції та поради</h3>
<p>Дуже просто: <b>дієслово без to і без «you»</b>.</p>
<div class="table-wrap"><table>
  <tr><th>+ зроби</th><th>− не роби</th></tr>
  <tr><td><b>Turn</b> left.<br><b>Go</b> straight on.<br><b>Try</b> the cinnamon buns!</td><td><b>Don’t leave</b> the windows open.<br><b>Don’t cross</b> here.<br><b>Don’t be</b> late!</td></tr>
</table></div>
<p>Щоб звучати ввічливо, додай <b>please</b>: <b>Please</b> close the door. / Close the door, <b>please</b>.</p>

<h3>3. Як запитати дорогу і пояснити</h3>
<div class="ex-line"><b>Excuse me, how do I get to</b> the station? · <b>Is there a</b> pharmacy <b>near here</b>?</div>
<div class="ex-line"><b>Go</b> straight on. <b>Turn</b> right <b>at</b> the bank. <b>Take the second</b> street <b>on the left</b>. It’s <b>on your right</b>.</div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">There aren’t some shops.</span> → <span class="yes">There aren’t any shops.</span><br>
<span class="no">There are any cafés.</span> → <span class="yes">There are some cafés.</span><br>
<span class="no">You turn left!</span> (наказ) → <span class="yes">Turn left!</span><br>
<span class="no">Not leave the windows open.</span> → <span class="yes">Don’t leave the windows open.</span></div>`
          },
          {
            id: 'gram-someany',
            type: 'choice',
            title: 'some, any or a?',
            instructions: 'Обери some, any або a.',
            items: [
              { id: 'a1', q: 'There are ___ nice shops in the square.', options: ['some', 'any', 'a'], answer: 0 },
              { id: 'a2', q: 'Are there ___ museums in your town?', options: ['some', 'any', 'a'], answer: 1 },
              { id: 'a3', q: 'There isn’t ___ hospital here.', options: ['some', 'any', 'a'], answer: 2 },
              { id: 'a4', q: 'We haven’t got ___ bread.', options: ['some', 'any', 'a'], answer: 1 },
              { id: 'a5', q: 'Here is ___ information for you.', options: ['some', 'any', 'a'], answer: 0 },
              { id: 'a6', q: 'Is there ___ bank near here?', options: ['some', 'any', 'a'], answer: 2 },
              { id: 'a7', q: 'Can I have ___ water, please?', options: ['some', 'any', 'a'], answer: 0, explain: 'Прохання — some, навіть у питанні.' }
            ]
          },
          {
            id: 'gram-imper',
            type: 'gap',
            title: 'Imperatives',
            instructions: 'Перекладіть інструкції англійською: дієслово без you; «не» = Don’t.',
            items: [
              { id: 'i1', text: 'Поверніть ліворуч. → {{Turn}} left.' },
              { id: 'i2', text: 'Не переходьте тут. → {{Don’t cross|Do not cross}} here.' },
              { id: 'i3', text: 'Ідіть прямо. → {{Go}} straight on.' },
              { id: 'i4', text: 'Не запізнюйтесь. → {{Don’t be|Do not be}} late.' },
              { id: 'i5', text: 'Спробуйте булочки! → {{Try}} the buns!' },
              { id: 'i6', text: 'Не залишайте двері відчиненими. → {{Don’t leave|Do not leave}} the door open.' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Ask and give directions',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Вибачте, як дістатися до вокзалу?', answer: 'Excuse me, how do I get to the station?' },
              { id: 'o2', prompt: 'Тут поблизу є якісь кафе?', answer: 'Are there any cafés near here?', extra: ['some'] },
              { id: 'o3', prompt: 'Поверніть праворуч біля банку.', answer: 'Turn right at the bank.' },
              { id: 'o4', prompt: 'Не переходьте дорогу тут.', answer: "Don't cross the road here." }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: there is / there are + прийменники',
            instructions: 'Згадаймо урок 1.',
            items: [
              { id: 'r1', q: 'There ___ a pharmacy on our street.', options: ['is', 'are'], answer: 0 },
              { id: 'r2', q: 'There ___ two banks in the square.', options: ['is', 'are'], answer: 1 },
              { id: 'r3', q: 'The pharmacy is ___ the bank and the post office.', options: ['between', 'opposite', 'under'], answer: 0 },
              { id: 'r4', q: '___ there a cinema here? — No, there isn’t.', options: ['Is', 'Are', 'Do'], answer: 0 },
              { id: 'r5', q: 'The station is ___ front of you.', options: ['on', 'in', 'at'], answer: 1 }
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
            title: 'Excuse me, where is…?',
            instructions: 'Турист питає дорогу в місцевої жительки. Послухай уважно — і спробуй уявити маршрут.',
            audio: {
              title: 'Dialogue: Tourist & Local',
              lines: [
                { who: 'Tourist', text: 'Excuse me, is there a museum near here?' },
                { who: 'Local', text: 'Yes, there is. The History Museum. It’s about ten minutes from here.' },
                { who: 'Tourist', text: 'How do I get there?' },
                { who: 'Local', text: 'Go straight on to the traffic lights. Turn right and cross the bridge.' },
                { who: 'Local', text: 'Then take the first street on the left. The museum is opposite the library.' },
                { who: 'Tourist', text: 'Great, thank you. And are there any good cafés near the museum?' },
                { who: 'Local', text: 'Yes, there are some nice cafés in the square next to it. But don’t go on Monday — the museum is closed!' }
              ]
            },
            items: [
              { id: 'l1', q: 'How far is the museum?', options: ['Five minutes', 'Ten minutes', 'Twenty minutes'], answer: 1 },
              { id: 'l2', q: 'What do you do at the traffic lights?', options: ['Turn left', 'Turn right', 'Cross the road'], answer: 1 },
              { id: 'l3', q: 'What do you cross?', options: ['A square', 'A bridge', 'A park'], answer: 1 },
              { id: 'l4', q: 'The museum is opposite the…', options: ['library', 'bank', 'café'], answer: 0 },
              { id: 'l5', q: 'When is the museum closed?', options: ['On Sunday', 'On Monday', 'On Friday'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Is there a museum near here?' },
              { id: 'dc2', text: 'Go straight on and turn right.' },
              { id: 'dc3', text: 'There are some nice cafés in the square.' },
              { id: 'dc4', text: 'Don’t go on Monday.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-note',
            type: 'writing',
            title: 'A note for a guest',
            instructions: 'До тебе приїжджає гість. Напиши записку про твій район і поясни дорогу до одного місця.',
            prompt: 'Write a note for a guest (70–90 words).\n• What is there in your neighbourhood? (some shops, a park…)\n• What isn’t there? (There aren’t any…)\n• Give directions from your home to one place (turn, go straight on, cross…).\n• Give one piece of advice with Don’t…',
            minWords: 70,
            maxWords: 100,
            phrases: ['Welcome', 'There are some', 'There aren’t any', 'Turn left', 'Go straight on', 'Don’t', 'opposite'],
            checklist: ['some — у ствердженнях, any — у запереченнях/питаннях', 'Є 3 інструкції наказовим способом', 'Є Don’t + дієслово', 'Є прийменники місця (opposite, next to…)'],
            model: `Welcome to Poltava! Here is some information about my neighbourhood.

There are some good shops and a big park near my house. There is a pharmacy next to the bus stop. There aren’t any cinemas here, but there is one in the city centre.

To get to the park: go out of the house and turn right. Go straight on to the school. Cross the road and the park is opposite the school.

Don’t take the number 5 bus — it’s very slow! Have a great time!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-town',
            type: 'speaking',
            title: 'Your town',
            instructions: 'Відповідай уголос.',
            phrases: ['There are some…', 'There aren’t any…', 'Go straight on…', 'Turn left/right…', 'It’s opposite / next to…'],
            tasks: [
              { id: 'sp1', q: 'What is there near your home? What isn’t there?', tips: 'There is a … There are some … There aren’t any …', model: 'There is a supermarket and there are some cafés. There aren’t any museums.' },
              { id: 'sp2', q: 'Explain the way from your home to the nearest shop.', tips: 'Go out of the house, turn … go straight on …', model: 'Go out of the building and turn left. Go straight on for two minutes. The shop is on the right.' },
              { id: 'sp3', q: 'A tourist asks you about your town. Recommend two places.', tips: 'Go to … Try … Don’t miss …', model: 'Go to the old town and try the coffee in a little café. Don’t miss the river!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'note': 'записка', 'guests': 'гості', 'guest': 'гість', 'welcome': 'ласкаво просимо', 'apartment': 'квартира', 'here is': 'ось', 'some': 'кілька, трохи',
      'any': 'якісь (у − і ?)', 'information': 'інформація', 'neighbourhood': 'район', 'great': 'чудовий', 'cafés': 'кафе', 'street': 'вулиця', 'try': 'спробуй',
      'opposite': 'навпроти', 'bakery': 'пекарня', 'cinnamon': 'кориця', 'buns': 'булочки', 'amazing': 'дивовижний', 'small': 'маленький', 'supermarket': 'супермаркет',
      'next to': 'поруч з', 'bus stop': 'автобусна зупинка', 'opens': 'відкривається', 'shopping centres': 'торгові центри', 'near': 'біля, поблизу',
      'near here': 'поблизу', 'nice': 'гарний', 'little': 'маленький', 'shops': 'магазини', 'square': 'площа', 'pharmacy': 'аптека', 'between': 'між',
      'bank': 'банк', 'post office': 'пошта', 'hospital': 'лікарня', 'area': 'район', "doctor's surgery": 'кабінет лікаря', 'surgery': 'лікарський кабінет',
      'how to get to': 'як дістатися до', 'train station': 'залізничний вокзал', 'station': 'вокзал', 'go out of': 'вийти з', 'building': 'будівля', 'turn': 'повернути',
      'left': 'ліво; лівий', 'right': 'право; правий', 'go straight on': 'ідіть прямо', 'about': 'приблизно', 'metres': 'метрів', 'cross': 'перейти',
      'bridge': 'міст', 'take': 'взяти, піти (вулицею)', 'second': 'другий', 'in front of': 'перед', 'please': 'будь ласка', "don't": 'не (наказ)', 'leave': 'залишати',
      'windows': 'вікна', 'open': 'відкритий', 'when': 'коли', 'go out': 'виходити', 'have a great time': 'гарно проведіть час', 'special': 'особливий',
      "mustn't": 'не можна', 'use': 'користуватися', 'library': 'бібліотека', 'traffic lights': 'світлофор', 'careful': 'обережний', 'museum': 'музей',
      'park': 'парк', 'medicine': 'ліки', 'send': 'надіслати', 'parcel': 'посилка', 'train': 'потяг', 'borrow': 'позичити', 'book': 'книга', 'bread': 'хліб',
      'film': 'фільм', 'cinema': 'кінотеатр', 'change': 'обміняти', 'money': 'гроші', 'paintings': 'картини', 'walk over': 'перейти через', 'need to': 'треба',
      'must': 'мусиш', 'should': 'варто', 'late': 'запізнюватися', 'door': 'двері', 'excuse me': 'перепрошую', 'how do i get to': 'як мені дістатися до',
      'history': 'історія', 'minutes': 'хвилини', 'there': 'туди; там', 'then': 'потім', 'first': 'перший', 'closed': 'зачинений', 'monday': 'понеділок',
      'how far': 'як далеко', 'water': 'вода', 'house': 'будинок', 'school': 'школа', 'number': 'номер', 'slow': 'повільний', 'nearest': 'найближчий',
      'tourist': 'турист', 'recommend': 'порадити', "don't miss": 'не пропустіть', 'old town': 'старе місто', 'river': 'річка', 'coffee': 'кава',
      'local': 'місцевий житель', 'way': 'дорога, шлях', 'explain': 'поясни', 'directions': 'як пройти', 'places': 'місця', 'town': 'місто', "it's": 'це є'
    }
  });
})();
