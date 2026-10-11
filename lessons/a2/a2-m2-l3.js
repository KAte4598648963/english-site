/*
 * A2 · Module 2 · Lesson 3 — Telling a story (adverbs of manner; sequencing words)
 * Review: Past Simple vs Past Continuous, when/while (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'The wallet',
    text: `It was a cold Monday morning. Marko was walking quickly to the station because he was late for work, as usual. Suddenly he saw a brown wallet on the pavement. He picked it up carefully and looked inside. There was a lot of money, an ID card and a photo of a little girl.

At first Marko didn’t know what to do. The train was leaving in five minutes. Then he looked at the photo again and decided to help. He read the address on the ID card and walked to the house, which was about a kilometre away.

An old man opened the door slowly. When he saw the wallet, he smiled happily. “I lost it yesterday!” he said. “There’s money for my granddaughter’s birthday present in it.”

After that, the man invited Marko for a cup of tea. They talked for a long time. Marko arrived at work two hours late, but he wasn’t worried. He explained everything honestly to his boss.

In the end, something surprising happened. A week later, the old man’s son visited Marko’s office. He was the director of a big company — and he offered Marko a job.`
  };

  ENG.registerLesson({
    id: 'a2-m2-l3',
    level: 'a2',
    title: 'Telling a story. Як розповідати історії',
    subtitle: 'прислівники способу дії (quickly, well, hard) · first, then, after that, in the end',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'The wallet',
            instructions: 'Прочитай коротке оповідання й обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Why was Marko walking quickly?', options: ['It was cold.', 'He was late for work.', 'He was going to the gym.'], answer: 1 },
              { id: 'q2', q: 'What was in the wallet?', options: ['Only an ID card', 'Money, an ID card and a photo', 'A train ticket'], answer: 1 },
              { id: 'q3', q: 'How did Marko find the owner?', options: ['He called the police.', 'He read the address on the ID card.', 'He asked people at the station.'], answer: 1 },
              { id: 'q4', q: 'What was the money for?', options: ['A birthday present', 'Food', 'A holiday'], answer: 0 },
              { id: 'q5', q: 'What happened in the end?', options: ['Marko lost his job.', 'The old man’s son offered Marko a job.', 'Marko got a reward of money.'], answer: 1 }
            ]
          },
          {
            id: 'read-order',
            type: 'order',
            title: 'Put the story in order',
            instructions: 'Склади речення, що переказують історію, у правильному порядку слів.',
            items: [
              { id: 'p1', prompt: '1. Марко побачив гаманець на тротуарі.', answer: 'Marko saw a wallet on the pavement.' },
              { id: 'p2', prompt: '2. Він вирішив допомогти.', answer: 'He decided to help.' },
              { id: 'p3', prompt: '3. Старий щасливо усміхнувся.', answer: 'The old man smiled happily.' },
              { id: 'p4', prompt: '4. Зрештою Марко отримав нову роботу.', answer: 'In the end Marko got a new job.' }
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
            title: 'Story words',
            instructions: 'Слова-зв’язки для історій і корисні прислівники.',
            cards: [
              { front: 'at first', back: 'спочатку (на початку ситуації)', example: 'At first he didn’t know what to do.' },
              { front: 'then / after that', back: 'потім / після цього', example: 'Then he walked to the house.' },
              { front: 'later / a week later', back: 'пізніше / через тиждень', example: 'A week later, his son came.' },
              { front: 'in the end', back: 'зрештою, врешті-решт', example: 'In the end everything was OK.' },
              { front: 'finally', ipa: '/ˈfaɪnəli/', back: 'нарешті; насамкінець', example: 'Finally, we found the hotel.' },
              { front: 'immediately', ipa: '/ɪˈmiːdiətli/', back: 'негайно', example: 'He called me immediately.' },
              { front: 'carefully', back: 'обережно, уважно', example: 'He picked it up carefully.' },
              { front: 'honestly', ipa: '/ˈɒnɪstli/', back: 'чесно', example: 'He explained everything honestly.' },
              { front: 'pavement', ipa: '/ˈpeɪvmənt/', back: 'тротуар', example: 'The wallet was on the pavement.' },
              { front: 'pick up', back: 'підняти', example: 'Pick up your toys, please.' },
              { front: 'offer', ipa: '/ˈɒfə/', back: 'пропонувати', example: 'They offered me a job.' },
              { front: 'surprising', back: 'дивовижний, несподіваний', example: 'Something surprising happened.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Adjective → adverb',
            instructions: 'Поєднай прикметник з прислівником.',
            pairs: [
              ['quick', 'quickly'],
              ['careful', 'carefully'],
              ['happy', 'happily'],
              ['good', 'well'],
              ['fast', 'fast'],
              ['hard', 'hard'],
              ['quiet', 'quietly'],
              ['easy', 'easily']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Sequencing words',
            instructions: 'Встав слова-зв’язки в історію. Одне слово зайве.',
            items: [
              { id: 'd1', text: '{{First}}, we packed our bags.' },
              { id: 'd2', text: '{{Then}} we took a taxi to the airport.' },
              { id: 'd3', text: '{{After}} that, we waited three hours for our flight.' },
              { id: 'd4', text: 'Two days {{later}}, our luggage arrived.' },
              { id: 'd5', text: 'In the {{end}}, it was a great holiday!' }
            ],
            distractors: ['while']
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
            title: 'Adverbs of manner + sequencing',
            instructions: 'Як зробити історію живою: прислівники «як?» і слова, що показують порядок подій.',
            html: `
<h3>1. Прикметник чи прислівник?</h3>
<div class="table-wrap"><table>
  <tr><th>Прикметник — який?</th><th>Прислівник — як?</th></tr>
  <tr><td>описує <b>іменник</b> (людину, річ)</td><td>описує <b>дію</b> (дієслово)</td></tr>
  <tr><td>He is a <b>careful</b> driver.</td><td>He drives <b>carefully</b>.</td></tr>
  <tr><td>She has a <b>quiet</b> voice.</td><td>She speaks <b>quietly</b>.</td></tr>
</table></div>
<p>💡 Після <b>to be</b> і дієслів стану (look, feel, seem) — <b>прикметник</b>: She looks <b>happy</b>. (не «happily»)</p>

<h3>2. Як утворити прислівник</h3>
<div class="table-wrap"><table>
  <tr><th>Правило</th><th>Приклади</th></tr>
  <tr><td>прикметник + <b>-ly</b></td><td>quick → quick<b>ly</b>, slow → slow<b>ly</b>, honest → honest<b>ly</b></td></tr>
  <tr><td>-y → <b>-ily</b></td><td>happy → happ<b>ily</b>, easy → eas<b>ily</b>, angry → angr<b>ily</b></td></tr>
  <tr><td>-le → <b>-ly</b></td><td>terrible → terrib<b>ly</b>, gentle → gent<b>ly</b></td></tr>
  <tr><td><b>неправильні</b></td><td>good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>, early → <b>early</b>, late → <b>late</b></td></tr>
</table></div>
<p>⚠️ <b>hardly</b> ≠ hard! hardly = «ледве, майже не»: I hardly slept. <b>lately</b> = «останнім часом».</p>
<p>Місце: зазвичай <b>після дієслова</b> або після додатка: He opened the door <b>slowly</b>. She speaks English <b>well</b>.</p>

<h3>3. Слова послідовності (sequencing)</h3>
<div class="table-wrap"><table>
  <tr><th>Початок</th><th>Середина</th><th>Кінець</th></tr>
  <tr><td>First, … · At first, … · One day, …</td><td>Then, … · After that, … · Later, … · Suddenly, … · When …, …</td><td>Finally, … · In the end, … · Eventually, …</td></tr>
</table></div>
<p>💡 <b>At first</b> = «спочатку було так, але потім змінилося»: At first I didn’t like him, but now we’re friends. <b>First</b> = «по-перше, першим кроком».</p>
<p>💡 <b>In the end</b> = «врешті-решт, після всього». <b>At the end (of)</b> = «в кінці чогось»: at the end of the film.</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">She sings very good.</span> → <span class="yes">She sings very well.</span><br>
<span class="no">He drives careful.</span> → <span class="yes">He drives carefully.</span><br>
<span class="no">She works hardly.</span> → <span class="yes">She works hard.</span><br>
<span class="no">He looked sadly.</span> → <span class="yes">He looked sad.</span></div>`
          },
          {
            id: 'gram-adverb',
            type: 'gap',
            title: 'Make adverbs',
            instructions: 'Утвори прислівник від прикметника в дужках.',
            items: [
              { id: 'g1', text: 'Marko walked {{quickly}} to the station. (quick)' },
              { id: 'g2', text: 'He picked up the wallet {{carefully}}. (careful)' },
              { id: 'g3', text: 'The old man smiled {{happily}}. (happy)' },
              { id: 'g4', text: 'She speaks English very {{well}}. (good)' },
              { id: 'g5', text: 'He works {{hard}} every day. (hard)' },
              { id: 'g6', text: 'The baby is sleeping. Please talk {{quietly}}. (quiet)' },
              { id: 'g7', text: 'I passed the test {{easily}}. (easy)' }
            ]
          },
          {
            id: 'gram-adjadv',
            type: 'choice',
            title: 'Adjective or adverb?',
            instructions: 'Обери прикметник (який?) або прислівник (як?).',
            items: [
              { id: 'c1', q: 'He is a very ___ driver.', options: ['careful', 'carefully'], answer: 0 },
              { id: 'c2', q: 'He drives very ___.', options: ['careful', 'carefully'], answer: 1 },
              { id: 'c3', q: 'You look ___ today!', options: ['happy', 'happily'], answer: 0, explain: 'look (виглядати) + прикметник.' },
              { id: 'c4', q: 'The team played ___ and lost.', options: ['bad', 'badly'], answer: 1 },
              { id: 'c5', q: 'This soup tastes ___.', options: ['good', 'well'], answer: 0, explain: 'taste (на смак) + прикметник.' },
              { id: 'c6', q: 'I can ___ hear you. Speak louder!', options: ['hard', 'hardly'], answer: 1 }
            ]
          },
          {
            id: 'gram-sequence',
            type: 'choice',
            title: 'Sequencing words',
            instructions: 'Обери правильне слово-зв’язку.',
            items: [
              { id: 's1', q: '___ I didn’t like the city, but now I love it.', options: ['At first', 'First', 'Finally'], answer: 0 },
              { id: 's2', q: 'We waited for hours. ___, the bus came.', options: ['At first', 'Finally', 'Then first'], answer: 1 },
              { id: 's3', q: 'Everyone was happy ___ of the film.', options: ['in the end', 'at the end', 'at last end'], answer: 1 },
              { id: 's4', q: 'We had dinner. ___ that, we went for a walk.', options: ['After', 'Then', 'Later'], answer: 0 },
              { id: 's5', q: 'He was watching TV. ___ the doorbell rang.', options: ['Suddenly', 'At first', 'In the end'], answer: 0 }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: Past Simple vs Continuous',
            instructions: 'Згадаймо урок 2: постав дієслова в правильний минулий час.',
            items: [
              { id: 'r1', text: 'Marko {{was walking}} to the station when he {{saw}} the wallet. (walk / see)' },
              { id: 'r2', text: 'While they {{were talking}}, the old man’s son {{called}}. (talk / call)' },
              { id: 'r3', text: 'The train {{was leaving}} in five minutes, but Marko decided to help. (leave)' }
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
            title: 'A story on the radio',
            instructions: 'Слухачка розповідає на радіо історію зі свого життя. Послухай.',
            audio: {
              title: 'Radio story: Halyna',
              lines: [
                { who: 'Halyna', text: 'This happened when I was a student. One day I was cooking pancakes in the dormitory kitchen.' },
                { who: 'Halyna', text: 'At first everything was fine. Then my friend called and I talked to her happily for about ten minutes.' },
                { who: 'Halyna', text: 'Suddenly I smelled smoke! I ran back to the kitchen as fast as I could. The pancakes were black and the fire alarm was ringing loudly.' },
                { who: 'Halyna', text: 'After that, the whole building went outside. It was snowing heavily and everyone was in their pyjamas!' },
                { who: 'Halyna', text: 'In the end the firefighters came, but there was no real fire. I apologised to everyone, and later I cooked pancakes for the whole floor — very carefully this time!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What was Halyna cooking?', options: ['Soup', 'Pancakes', 'Pizza'], answer: 1 },
              { id: 'l2', q: 'What did she do while the food was cooking?', options: ['She talked on the phone.', 'She went out.', 'She slept.'], answer: 0 },
              { id: 'l3', q: 'What was the weather like outside?', options: ['It was raining.', 'It was snowing heavily.', 'It was warm.'], answer: 1 },
              { id: 'l4', q: 'Was there a real fire?', options: ['Yes, a big one', 'No, there wasn’t.'], answer: 1 },
              { id: 'l5', q: 'What did Halyna do later?', options: ['She moved out.', 'She cooked pancakes for everyone.', 'She bought a new pan.'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'At first everything was fine.' },
              { id: 'dc2', text: 'I ran back to the kitchen as fast as I could.' },
              { id: 'dc3', text: 'The fire alarm was ringing loudly.' },
              { id: 'dc4', text: 'In the end there was no real fire.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-story',
            type: 'writing',
            title: 'A short story',
            instructions: 'Напиши коротке оповідання, що починається словами: «It was a rainy evening…»',
            prompt: 'Write a story (100–130 words). Start with “It was a rainy evening…”\n• Set the scene with Past Continuous.\n• Use at least 5 sequencing words (at first, then, after that, suddenly, later, in the end…).\n• Use at least 4 adverbs of manner (slowly, quickly, carefully, well…).\n• Give your story a surprising ending.',
            minWords: 100,
            maxWords: 140,
            phrases: ['It was a rainy evening', 'At first', 'Then', 'Suddenly', 'After that', 'In the end', 'slowly', 'quietly'],
            checklist: ['Є фон у Past Continuous', 'Щонайменше 5 слів-зв’язок', 'Щонайменше 4 прислівники способу дії', 'Прикметник після look/feel/be (не прислівник)', 'Несподівана кінцівка'],
            model: `It was a rainy evening. I was sitting at home and reading a book when somebody knocked quietly on the door. At first I didn’t want to open it — I wasn’t expecting anyone.

Then I looked carefully through the window. A small wet cat was sitting on the doorstep! I opened the door slowly and the cat ran quickly inside. It was shaking and it looked very hungry.

After that, I gave it some milk and dried it gently with a towel. Later I put up posters in our street.

In the end, nobody called. The cat is still with me — and now it sleeps happily on my bed every night.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-story',
            type: 'speaking',
            title: 'Story time',
            instructions: 'Розкажи історії уголос. Використовуй слова-зв’язки і прислівники.',
            phrases: ['One day…', 'At first…', 'Then…', 'Suddenly…', 'In the end…', '…quickly / carefully / well'],
            tasks: [
              { id: 'sp1', q: 'Retell the story of Marko and the wallet in your own words.', tips: 'One morning Marko was … Suddenly … Then … In the end …', model: 'One morning Marko was walking quickly to work when he found a wallet. At first he didn’t know what to do. Then he decided to return it. In the end, he got a new job!' },
              { id: 'sp2', q: 'Tell me about something you did well and something you did badly.', tips: 'I did … well / badly because …', model: 'I passed my driving test easily, but I cooked my first dinner terribly!' },
              { id: 'sp3', q: 'Tell a short story about a lucky day.', tips: 'It was … At first … Then … Finally …', model: 'It was a Friday. At first everything went wrong. Then I found a hundred hryvnias in my old coat. Finally, my boss gave me a day off!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'wallet': 'гаманець', 'cold': 'холодний', 'monday': 'понеділок', 'morning': 'ранок', 'walking': 'ішов', 'quickly': 'швидко', 'station': 'вокзал',
      'late for work': 'запізнювався на роботу', 'as usual': 'як завжди', 'suddenly': 'раптом', 'brown': 'коричневий', 'pavement': 'тротуар',
      'picked it up': 'підняв його', 'pick up': 'підняти', 'carefully': 'обережно', 'looked inside': 'зазирнув усередину', 'money': 'гроші',
      'id card': 'посвідчення особи', 'photo': 'фото', 'little': 'маленька', 'girl': 'дівчинка', 'at first': 'спочатку', 'what to do': 'що робити',
      'train': 'потяг', 'leaving': 'відправлявся', 'minutes': 'хвилини', 'then': 'потім', 'again': 'знову', 'decided': 'вирішив', 'help': 'допомогти',
      'read': 'прочитав', 'address': 'адреса', 'which': 'який', 'about': 'приблизно', 'kilometre': 'кілометр', 'away': 'звідси', 'old': 'старий',
      'opened': 'відчинив', 'door': 'двері', 'slowly': 'повільно', 'smiled': 'усміхнувся', 'happily': 'щасливо', 'lost': 'загубив', 'yesterday': 'учора',
      "granddaughter's": 'онуччин', 'birthday present': 'подарунок на день народження', 'after that': 'після цього', 'invited': 'запросив',
      'cup of tea': 'чашка чаю', 'talked': 'розмовляли', 'for a long time': 'довго', 'arrived': 'прибув', 'two hours late': 'на дві години пізніше',
      'worried': 'стурбований', 'explained': 'пояснив', 'everything': 'все', 'honestly': 'чесно', 'boss': 'начальник', 'in the end': 'зрештою',
      'something': 'щось', 'surprising': 'несподіване', 'happened': 'сталося', 'a week later': 'через тиждень', 'son': 'син', 'visited': 'прийшов до',
      'office': 'офіс', 'director': 'директор', 'company': 'компанія', 'offered': 'запропонував', 'job': 'робота', 'gym': 'спортзал', 'only': 'лише',
      'ticket': 'квиток', 'owner': 'власник', 'police': 'поліція', 'asked': 'запитав', 'food': 'їжа', 'holiday': 'відпустка', 'reward': 'винагорода',
      'got': 'отримав', 'new': 'нова', 'later': 'пізніше', 'finally': 'нарешті', 'immediately': 'негайно', 'called': 'зателефонував', 'hotel': 'готель',
      'found': 'знайшли', 'toys': 'іграшки', 'offer': 'пропонувати', 'quick': 'швидкий', 'careful': 'обережний', 'happy': 'щасливий', 'good': 'хороший',
      'well': 'добре', 'fast': 'швидко', 'hard': 'наполегливо, важко', 'quiet': 'тихий', 'quietly': 'тихо', 'easy': 'легкий', 'easily': 'легко',
      'first': 'спочатку, по-перше', 'packed': 'спакували', 'bags': 'сумки', 'taxi': 'таксі', 'airport': 'аеропорт', 'waited': 'чекали',
      'flight': 'рейс', 'luggage': 'багаж', 'great': 'чудовий', 'while': 'поки', 'driver': 'водій', 'drives': 'водить', 'voice': 'голос', 'speaks': 'говорить',
      'look': 'виглядати', 'feel': 'почуватися', 'seem': 'здаватися', 'slow': 'повільний', 'honest': 'чесний', 'angry': 'злий', 'angrily': 'сердито',
      'terrible': 'жахливий', 'terribly': 'жахливо', 'gentle': 'ніжний', 'gently': 'ніжно', 'early': 'рано', 'late': 'пізно', 'hardly': 'ледве',
      'lately': 'останнім часом', 'eventually': 'зрештою', 'one day': 'одного дня', 'at the end of': 'в кінці (чогось)', 'film': 'фільм',
      'team': 'команда', 'played': 'грала', 'badly': 'погано', 'lost': 'програла', 'soup': 'суп', 'tastes': 'на смак', 'hear': 'чути', 'louder': 'голосніше',
      'city': 'місто', 'bus': 'автобус', 'dinner': 'вечеря', 'walk': 'прогулянка', 'doorbell': 'дверний дзвінок', 'rang': 'задзвонив', 'pancakes': 'млинці',
      'dormitory': 'гуртожиток', 'kitchen': 'кухня', 'fine': 'добре', 'smelled': 'відчула запах', 'smoke': 'дим', 'ran back': 'побігла назад',
      'as fast as i could': 'так швидко, як могла', 'fire alarm': 'пожежна сигналізація', 'ringing': 'дзвонила', 'loudly': 'гучно',
      'whole building': 'весь будинок', 'went outside': 'вийшов надвір', 'snowing': 'йшов сніг', 'heavily': 'сильно', 'pyjamas': 'піжами',
      'firefighters': 'пожежники', 'real': 'справжній', 'fire': 'пожежа', 'apologised': 'перепросила', 'floor': 'поверх', 'this time': 'цього разу',
      'moved out': 'виїхала', 'pan': 'сковорідка', 'rainy': 'дощовий', 'evening': 'вечір', 'knocked': 'постукав', 'expecting': 'чекала',
      'window': 'вікно', 'wet': 'мокрий', 'cat': 'кіт', 'doorstep': 'поріг', 'ran inside': 'забіг усередину', 'shaking': 'тремтів', 'hungry': 'голодний',
      'milk': 'молоко', 'dried': 'витерла', 'towel': 'рушник', 'put up': 'повісила', 'posters': 'оголошення', 'street': 'вулиця', 'nobody': 'ніхто',
      'still': 'досі', 'sleeps': 'спить', 'bed': 'ліжко', 'every night': 'щоночі', 'retell': 'переказати', 'return': 'повернути', 'passed': 'склав',
      'driving test': 'іспит з водіння', 'cooked': 'приготувала', 'lucky': 'щасливий', 'went wrong': 'пішло не так', 'hundred': 'сто',
      'coat': 'пальто', 'day off': 'вихідний', 'test': 'тест'
    }
  });
})();
