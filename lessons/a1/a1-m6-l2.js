/*
 * A1 · Module 6 · Lesson 2 — Last weekend (Past Simple: regular verbs -ed)
 * Review: was / were (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Our DIY weekend',
    text: `Last weekend my husband and I decided to paint our kitchen. It was a big job!

On Saturday morning we tidied the room and covered the floor with old newspapers. Then we opened the paint. It was bright yellow — my favourite colour! We started at ten o’clock and we worked all day. We stopped only once, for lunch. My husband cooked pasta and we watched a short film on my phone.

In the evening our neighbour Oleh visited us. He looked at the walls and laughed. “It’s very… sunny!” he said. We all laughed too.

On Sunday we cleaned everything and moved the table and chairs back. We were very tired, but happy. Then I noticed a small problem: our cat, Smudge, was yellow too! She walked on the wet paint. We washed her in the bath. She hated it!`
  };

  ENG.registerLesson({
    id: 'a1-m6-l2',
    level: 'a1',
    title: 'Last weekend. Минулі вихідні',
    subtitle: 'Past Simple: правильні дієслова (-ed) · правопис і вимова -ed',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Painting the kitchen',
            instructions: 'Прочитай про ремонтні вихідні й обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What did they decide to paint?', options: ['The bedroom', 'The kitchen', 'The bathroom'], answer: 1 },
              { id: 'q2', q: 'What colour was the paint?', options: ['Blue', 'Green', 'Yellow'], answer: 2 },
              { id: 'q3', q: 'What did they put on the floor?', options: ['Old newspapers', 'A carpet', 'Plastic bags'], answer: 0 },
              { id: 'q4', q: 'Who visited them on Saturday evening?', options: ['Their parents', 'Their neighbour', 'Their friend from work'], answer: 1 },
              { id: 'q5', q: 'What happened to the cat?', options: ['She ran away.', 'She became yellow.', 'She slept all day.'], answer: 1 }
            ]
          },
          {
            id: 'read-when',
            type: 'choice',
            title: 'Saturday or Sunday?',
            instructions: 'Коли це сталося — у суботу чи в неділю?',
            passage: PASSAGE,
            items: [
              { id: 'w1', q: 'They tidied the room.', options: ['Saturday', 'Sunday'], answer: 0 },
              { id: 'w2', q: 'They washed the cat.', options: ['Saturday', 'Sunday'], answer: 1 },
              { id: 'w3', q: 'Oleh visited them.', options: ['Saturday', 'Sunday'], answer: 0 },
              { id: 'w4', q: 'They moved the table back.', options: ['Saturday', 'Sunday'], answer: 1 },
              { id: 'w5', q: 'They watched a short film.', options: ['Saturday', 'Sunday'], answer: 0 },
              { id: 'w6', q: 'They cleaned everything.', options: ['Saturday', 'Sunday'], answer: 1 }
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
            title: 'Weekend verbs (regular)',
            instructions: 'Правильні дієслова: на звороті — переклад і форма минулого часу.',
            cards: [
              { front: 'paint → painted', back: 'фарбувати → пофарбував', example: 'We painted the kitchen.' },
              { front: 'tidy → tidied', back: 'прибирати → прибрав', example: 'I tidied my room.' },
              { front: 'decide → decided', back: 'вирішувати → вирішив', example: 'We decided to stay at home.' },
              { front: 'visit → visited', back: 'відвідувати → відвідав', example: 'Oleh visited us.' },
              { front: 'laugh → laughed', ipa: '/lɑːf/ /lɑːft/', back: 'сміятися → сміявся', example: 'Everybody laughed.' },
              { front: 'move → moved', back: 'переставляти, переїжджати → переставив', example: 'We moved the table.' },
              { front: 'stop → stopped', back: 'зупинятися → зупинився', example: 'We stopped for lunch.' },
              { front: 'notice → noticed', ipa: '/ˈnəʊtɪs/', back: 'помічати → помітив', example: 'I noticed a problem.' },
              { front: 'cover → covered', ipa: '/ˈkʌvə/', back: 'накривати → накрив', example: 'We covered the floor.' },
              { front: 'hate → hated', back: 'ненавидіти → ненавидів', example: 'The cat hated the bath.' },
              { front: 'DIY', back: 'зроби сам (ремонт своїми руками)', example: 'We love DIY projects.' },
              { front: 'wet / dry', back: 'мокрий / сухий', example: 'Don’t touch — the paint is wet!' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Verb → past',
            instructions: 'Поєднай дієслово з формою минулого часу.',
            pairs: [
              ['stop', 'stopped'],
              ['study', 'studied'],
              ['live', 'lived'],
              ['play', 'played'],
              ['plan', 'planned'],
              ['try', 'tried'],
              ['arrive', 'arrived'],
              ['wash', 'washed']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What did they do?',
            instructions: 'Встав дієслово в минулому часі. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'We {{painted}} the walls yellow.' },
              { id: 'd2', text: 'Oleh looked at the walls and {{laughed}}.' },
              { id: 'd3', text: 'We {{moved}} the chairs back to the kitchen.' },
              { id: 'd4', text: 'I {{noticed}} yellow paint on the cat.' },
              { id: 'd5', text: 'We {{washed}} her in the bath.' },
              { id: 'd6', text: 'They {{stopped}} for lunch at one.' }
            ],
            distractors: ['visit']
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
            title: 'Past Simple: regular verbs',
            instructions: 'Як говорити про завершені дії в минулому. Почнемо з правильних дієслів — вони отримують -ed.',
            html: `
<h3>1. Коли вживаємо Past Simple?</h3>
<p>Для <b>завершених дій у минулому</b>, часто з точним часом: yesterday, last weekend, two days ago, in 2010.</p>
<div class="ex-line">We <mark>painted</mark> the kitchen <b>last weekend</b>. — Ми пофарбували кухню минулих вихідних.</div>

<h3>2. Форма: дієслово + -ed — однакова для всіх!</h3>
<div class="table-wrap"><table>
  <tr><th>Present Simple</th><th>Past Simple</th></tr>
  <tr><td>I work · she work<b>s</b></td><td>I work<b>ed</b> · she work<b>ed</b> <span class="muted">(без -s!)</span></td></tr>
</table></div>
<p>💡 Добра новина: у минулому <b>немає -s для he/she/it</b>. I, you, he, she, we, they — всі <b>worked</b>.</p>

<h3>3. Правопис -ed</h3>
<div class="table-wrap"><table>
  <tr><th>Правило</th><th>Приклади</th></tr>
  <tr><td>більшість: <b>+ ed</b></td><td>work → work<b>ed</b>, paint → paint<b>ed</b>, play → play<b>ed</b></td></tr>
  <tr><td>закінчується на -e: <b>+ d</b></td><td>live → live<b>d</b>, decide → decide<b>d</b>, move → move<b>d</b></td></tr>
  <tr><td>приголосна + y: y → <b>ied</b></td><td>study → stud<b>ied</b>, tidy → tid<b>ied</b>, try → tr<b>ied</b> <span class="muted">(але play → played)</span></td></tr>
  <tr><td>коротке: голосна + приголосна → <b>подвоюємо</b></td><td>stop → sto<b>pp</b>ed, plan → pla<b>nn</b>ed, chat → cha<b>tt</b>ed</td></tr>
</table></div>

<h3>4. Вимова -ed — три варіанти</h3>
<div class="table-wrap"><table>
  <tr><th>[t]</th><th>[d]</th><th>[ɪd]</th></tr>
  <tr><td>після глухих: worked, stopped, washed, laughed, watched</td><td>після дзвінких і голосних: played, lived, moved, cleaned</td><td>після t / d: painted, visited, decided, started</td></tr>
</table></div>
<p>⚠️ Склад [ɪd] додається <b>тільки після t і d</b>. «Worked» — це один склад [wɜːkt], не «вор-кед».</p>

<h3>5. Заперечення і питання (коротко)</h3>
<div class="ex-line">We <b>didn’t paint</b> the bedroom. · <b>Did</b> you <b>paint</b> the kitchen? — Yes, we <b>did</b>.</div>
<p>Після did дієслово <b>без -ed</b>. Детально — наступного уроку!</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">She painteds the wall.</span> → <span class="yes">She painted the wall.</span><br>
<span class="no">I studyed English.</span> → <span class="yes">I studied English.</span><br>
<span class="no">We stoped for lunch.</span> → <span class="yes">We stopped for lunch.</span><br>
<span class="no">Yesterday I watch TV.</span> → <span class="yes">Yesterday I watched TV.</span></div>`
          },
          {
            id: 'gram-spell',
            type: 'gap',
            title: 'Spelling: -ed',
            instructions: 'Напиши форму Past Simple. Пам’ятай правила правопису!',
            items: [
              { id: 'g1', text: 'clean → {{cleaned}}' },
              { id: 'g2', text: 'live → {{lived}}' },
              { id: 'g3', text: 'study → {{studied}}' },
              { id: 'g4', text: 'stop → {{stopped}}' },
              { id: 'g5', text: 'play → {{played}}' },
              { id: 'g6', text: 'decide → {{decided}}' },
              { id: 'g7', text: 'plan → {{planned}}' },
              { id: 'g8', text: 'carry → {{carried}}' }
            ]
          },
          {
            id: 'gram-text',
            type: 'gap',
            title: 'Complete the story',
            instructions: 'Постав дієслова в дужках у Past Simple.',
            items: [
              { id: 't1', text: 'Last Sunday I {{visited}} my grandparents. (visit)' },
              { id: 't2', text: 'We {{walked}} in the park. (walk)' },
              { id: 't3', text: 'My grandma {{cooked}} soup. (cook)' },
              { id: 't4', text: 'My grandad and I {{played}} chess. (play)' },
              { id: 't5', text: 'He {{tried}} to win, but I won! (try)' },
              { id: 't6', text: 'I {{arrived}} home at nine. (arrive)' }
            ]
          },
          {
            id: 'gram-pron',
            type: 'choice',
            title: 'How do you say -ed?',
            instructions: 'Як читається закінчення: [t], [d] чи [ɪd]? Пам’ятай: [ɪd] — тільки після t / d.',
            items: [
              { id: 'p1', q: 'painted', options: ['[t]', '[d]', '[ɪd]'], answer: 2 },
              { id: 'p2', q: 'watched', options: ['[t]', '[d]', '[ɪd]'], answer: 0 },
              { id: 'p3', q: 'played', options: ['[t]', '[d]', '[ɪd]'], answer: 1 },
              { id: 'p4', q: 'decided', options: ['[t]', '[d]', '[ɪd]'], answer: 2 },
              { id: 'p5', q: 'stopped', options: ['[t]', '[d]', '[ɪd]'], answer: 0 },
              { id: 'p6', q: 'cleaned', options: ['[t]', '[d]', '[ɪd]'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення в минулому часі.',
            items: [
              { id: 'o1', prompt: 'Ми пофарбували кухню минулих вихідних.', answer: 'We painted the kitchen last weekend.', extra: ['paint'] },
              { id: 'o2', prompt: 'Вона вивчала англійську в школі.', answer: 'She studied English at school.' },
              { id: 'o3', prompt: 'Учора я дивився фільм.', answer: 'Yesterday I watched a film.' },
              { id: 'o4', prompt: 'Кіт ненавидів ванну.', answer: 'The cat hated the bath.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: was / were',
            instructions: 'Згадаймо урок 1. Встав was, were, wasn’t або weren’t.',
            items: [
              { id: 'r1', text: 'The paint {{was}} bright yellow.' },
              { id: 'r2', text: 'We {{were}} very tired on Sunday.' },
              { id: 'r3', text: 'The cat {{wasn’t|was not}} happy in the bath. (−)' },
              { id: 'r4', text: '{{Were}} you at home last weekend? — Yes, we were.' }
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
            title: 'A Monday morning chat',
            instructions: 'Друзі розповідають, як провели вихідні. Послухай.',
            audio: {
              title: 'Dialogue: Lena & Bohdan',
              lines: [
                { who: 'Lena', text: 'Hi Bohdan! How was your weekend?' },
                { who: 'Bohdan', text: 'Busy! On Saturday I helped my brother. He moved to a new flat.' },
                { who: 'Lena', text: 'Oh, nice! Where is it?' },
                { who: 'Bohdan', text: 'In the city centre. We carried a lot of boxes. It was hard work! And you?' },
                { who: 'Lena', text: 'I relaxed. On Saturday I stayed at home and watched three films. On Sunday I walked in the park and played tennis with Ira.' },
                { who: 'Bohdan', text: 'Sounds great. Who won?' },
                { who: 'Lena', text: 'Ira, of course! She practised a lot this summer.' }
              ]
            },
            items: [
              { id: 'l1', q: 'Who did Bohdan help?', options: ['His sister', 'His brother', 'His dad'], answer: 1 },
              { id: 'l2', q: 'Where is the new flat?', options: ['In the city centre', 'Near the park', 'In a village'], answer: 0 },
              { id: 'l3', q: 'How many films did Lena watch?', options: ['One', 'Two', 'Three'], answer: 2 },
              { id: 'l4', q: 'What did Lena do on Sunday?', options: ['She stayed at home.', 'She walked and played tennis.', 'She moved flats.'], answer: 1 },
              { id: 'l5', q: 'Who won the tennis match?', options: ['Lena', 'Ira', 'Bohdan'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'I helped my brother on Saturday.' },
              { id: 'dc2', text: 'We carried a lot of boxes.' },
              { id: 'dc3', text: 'I stayed at home and watched films.' },
              { id: 'dc4', text: 'She practised a lot.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-weekend',
            type: 'writing',
            title: 'My last weekend',
            instructions: 'Напиши про свої минулі вихідні. Використай лише правильні дієслова (з -ed) і was / were.',
            prompt: 'Write about your last weekend (60–80 words).\n• Use at least 6 regular verbs in Past Simple (cleaned, watched, visited, cooked, played, stayed…).\n• Use was / were to describe things (It was…).\n• Use first, then, after that.\n• How did you feel? (tired, happy, bored…)',
            minWords: 60,
            maxWords: 90,
            phrases: ['Last weekend', 'On Saturday', 'First', 'Then', 'After that', 'It was', 'I was'],
            checklist: ['Щонайменше 6 дієслів з -ed', 'Правопис: studied, stopped, lived…', 'Немає -s у минулому (she played, не playeds)', 'Є was / were'],
            model: `Last weekend was quiet. On Saturday morning I cleaned the flat and washed my clothes. Then I cooked borscht for my family. After that we watched a comedy. It was really funny!

On Sunday I visited my friend Dasha. We walked by the river and chatted for hours. In the evening I stayed at home and relaxed. I was tired but happy.`
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
            title: 'Tell me about your weekend',
            instructions: 'Відповідай уголос. Стеж за вимовою -ed: [t], [d] або [ɪd].',
            phrases: ['On Saturday I…ed', 'Then I…ed', 'It was…', 'I visited…', 'I stayed…'],
            tasks: [
              { id: 'sp1', q: 'What did you do last Saturday? Say four things.', tips: 'I cleaned … I watched … I visited … I cooked …', model: 'I cleaned the flat, I cooked lunch, I visited my mum and I watched a film.' },
              { id: 'sp2', q: 'Tell me about a time you painted, tidied or moved something.', tips: 'Last year I painted … / Last month we moved …', model: 'Last month we moved to a new flat. We packed a hundred boxes!' },
              { id: 'sp3', q: 'What did your friend or partner do yesterday?', tips: 'He/She worked … He/She played …', model: 'My husband worked until six. Then he played football with his friends.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'diy': 'зроби сам (ремонт)', 'weekend': 'вихідні', 'last weekend': 'минулих вихідних', 'husband': 'чоловік', 'decided': 'вирішили', 'decide': 'вирішувати',
      'paint': 'фарбувати; фарба', 'painted': 'пофарбували', 'kitchen': 'кухня', 'big job': 'велика робота', 'saturday': 'субота', 'morning': 'ранок',
      'tidied': 'прибрали', 'tidy': 'прибирати', 'room': 'кімната', 'covered': 'накрили', 'cover': 'накривати', 'floor': 'підлога', 'old': 'старі',
      'newspapers': 'газети', 'then': 'потім', 'opened': 'відкрили', 'bright': 'яскравий', 'yellow': 'жовтий', 'favourite': 'улюблений', 'colour': 'колір',
      'started': 'почали', 'worked': 'працювали', 'all day': 'весь день', 'stopped': 'зупинилися', 'only once': 'лише раз', 'lunch': 'обід', 'cooked': 'приготував',
      'pasta': 'макарони', 'watched': 'дивилися', 'short': 'короткий', 'film': 'фільм', 'phone': 'телефон', 'evening': 'вечір', 'neighbour': 'сусід',
      'visited': 'відвідав', 'looked at': 'подивився на', 'walls': 'стіни', 'laughed': 'засміявся', 'sunny': 'сонячний', 'said': 'сказав', 'too': 'теж',
      'sunday': 'неділя', 'cleaned': 'прибрали, почистили', 'everything': 'все', 'moved': 'переставили', 'table': 'стіл', 'chairs': 'стільці', 'back': 'назад',
      'tired': 'втомлені', 'happy': 'щасливі', 'noticed': 'помітила', 'small': 'маленька', 'problem': 'проблема', 'cat': 'кішка', 'walked': 'пройшлася',
      'wet': 'мокрий', 'washed': 'помили', 'bath': 'ванна', 'hated': 'ненавиділа', 'bedroom': 'спальня', 'bathroom': 'ванна кімната', 'blue': 'синій',
      'green': 'зелений', 'carpet': 'килим', 'plastic bags': 'пакети', 'parents': 'батьки', 'friend': 'друг', 'work': 'робота', 'happened': 'сталося',
      'ran away': 'втекла', 'became': 'стала', 'slept': 'спала', 'dry': 'сухий', 'touch': 'торкатися', "don't": 'не', 'study': 'вчитися', 'studied': 'вчився',
      'live': 'жити', 'lived': 'жив', 'play': 'грати', 'played': 'грав', 'plan': 'планувати', 'planned': 'запланував', 'try': 'намагатися', 'tried': 'намагався',
      'arrive': 'прибувати', 'arrived': 'прибув', 'wash': 'мити', 'grandparents': 'бабуся й дідусь', 'park': 'парк', 'grandma': 'бабуся', 'soup': 'суп',
      'grandad': 'дідусь', 'chess': 'шахи', 'win': 'вигравати', 'won': 'виграв', 'home': 'додому', 'nine': 'дев’ята', 'carry': 'нести', 'carried': 'несли',
      'monday': 'понеділок', 'chat': 'розмова; балакати', 'busy': 'насичений', 'helped': 'допомагав', 'brother': 'брат', 'new': 'нова', 'flat': 'квартира',
      'nice': 'чудово', 'city centre': 'центр міста', 'a lot of': 'багато', 'boxes': 'коробки', 'hard work': 'важка робота', 'relaxed': 'відпочивала',
      'stayed': 'залишалася', 'tennis': 'теніс', 'sounds great': 'звучить чудово', 'who won': 'хто виграв', 'of course': 'звісно', 'practised': 'тренувалася',
      'summer': 'літо', 'clothes': 'одяг', 'borscht': 'борщ', 'family': 'сім’я', 'comedy': 'комедія', 'funny': 'смішна', 'river': 'річка', 'chatted': 'балакали',
      'for hours': 'годинами', 'packed': 'запакували', 'hundred': 'сто', 'until': 'до', 'football': 'футбол', 'friends': 'друзі', 'was': 'був', 'were': 'були'
    }
  });
})();
