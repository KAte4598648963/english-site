/*
 * A2 · Module 1 · Lesson 3 — Childhood memories (used to / didn’t use to)
 * Review: Past Simple (A1), relative clauses (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Summers at Grandma’s',
    text: `When I was a child, I used to spend every summer at my grandparents’ house in a small village near the Dnipro river. My parents worked in the city, so they used to drive me there in June and pick me up at the end of August.

Life in the village was very different from life at home. We didn’t use to have a TV there, and there wasn’t any internet. Instead, I used to play outside all day with the other children who lived on our street. We used to climb trees, play hide and seek and swim in the river. I was a bit naughty — I used to steal cherries from our neighbour’s garden!

My grandma used to get up at five to milk the cow. I hated getting up early, but I loved the warm milk she gave me for breakfast. In the evenings Grandpa used to tell scary stories about the forest, and I was always scared of the dark.

I didn’t visit the village last summer — my grandparents moved to the city ten years ago. But I still remember the smell of fresh bread and the sound of the river.`
  };

  ENG.registerLesson({
    id: 'a2-m1-l3',
    level: 'a2',
    title: 'Childhood memories. Спогади дитинства',
    subtitle: 'used to / didn’t use to · Did you use to…? · used to чи Past Simple',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Summers in the village',
            instructions: 'Прочитай спогади про літо в бабусі й дідуся.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where did the writer spend summers?', options: ['At the seaside', 'At the grandparents’ house in a village', 'In a summer camp'], answer: 1 },
              { id: 'q2', q: 'Why couldn’t the parents stay in the village?', options: ['They worked in the city.', 'They didn’t like the village.', 'They were abroad.'], answer: 0 },
              { id: 'q3', q: 'What didn’t they have in the village?', options: ['A garden', 'A TV and internet', 'A river'], answer: 1 },
              { id: 'q4', q: 'Why did Grandma get up at five?', options: ['To cook breakfast', 'To milk the cow', 'To work in the garden'], answer: 1 },
              { id: 'q5', q: 'Why didn’t the writer visit the village last summer?', options: ['The grandparents moved to the city.', 'There was no time.', 'The house was sold last year.'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The writer used to watch TV every evening.', answer: false, explain: '“We didn’t use to have a TV there.”' },
              { id: 's2', s: 'The writer used to swim in the river.', answer: true },
              { id: 's3', s: 'The writer used to steal cherries.', answer: true },
              { id: 's4', s: 'The writer loved getting up early.', answer: false, explain: '“I hated getting up early.”' },
              { id: 's5', s: 'Grandpa used to tell funny stories.', answer: false, explain: 'He used to tell scary stories.' }
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
            title: 'Childhood',
            instructions: 'Слова й вирази про дитинство.',
            cards: [
              { front: 'childhood', ipa: '/ˈtʃaɪldhʊd/', back: 'дитинство', example: 'I had a happy childhood.' },
              { front: 'grow up (grew up)', back: 'рости, виростати', example: 'I grew up in a small town.' },
              { front: 'climb trees', ipa: '/klaɪm/', back: 'лазити по деревах', example: 'We used to climb trees.' },
              { front: 'play hide and seek', back: 'гратися в хованки', example: 'Let’s play hide and seek!' },
              { front: 'naughty', ipa: '/ˈnɔːti/', back: 'неслухняний', example: 'He was a naughty boy.' },
              { front: 'be scared of the dark', back: 'боятися темряви', example: 'I was scared of the dark.' },
              { front: 'pocket money', back: 'кишенькові гроші', example: 'I used to get pocket money every week.' },
              { front: 'kindergarten', ipa: '/ˈkɪndəɡɑːtn/', back: 'дитячий садок', example: 'I went to kindergarten at three.' },
              { front: 'pick somebody up', back: 'забирати когось', example: 'My mum picked me up from school.' },
              { front: 'memory / remember', ipa: '/ˈmeməri/', back: 'спогад / пам’ятати', example: 'I have good memories of school.' },
              { front: 'tease', ipa: '/tiːz/', back: 'дражнити', example: 'My brother used to tease me.' },
              { front: 'smell', back: 'запах; пахнути', example: 'I love the smell of fresh bread.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Childhood phrases',
            instructions: 'Поєднай частини виразів.',
            pairs: [
              ['climb', 'trees'],
              ['play hide', 'and seek'],
              ['be scared', 'of the dark'],
              ['get pocket', 'money'],
              ['grow', 'up'],
              ['tell scary', 'stories'],
              ['ride', 'a bike'],
              ['go to', 'kindergarten']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'My childhood',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'I {{grew}} up in Odesa, near the sea.' },
              { id: 'd2', text: 'My older brother used to {{tease}} me all the time.' },
              { id: 'd3', text: 'I was a {{naughty}} child — I never listened to my parents!' },
              { id: 'd4', text: 'I used to get a little {{pocket}} money every Friday.' },
              { id: 'd5', text: 'My dad used to {{pick}} me up from school.' },
              { id: 'd6', text: 'I have wonderful {{memories}} of those summers.' }
            ],
            distractors: ['climb']
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
            title: 'used to',
            instructions: 'used to — ідеальний інструмент для спогадів: що було колись регулярно, але тепер уже ні.',
            html: `
<h3>1. Значення</h3>
<p><b>used to + дієслово</b> = «раніше (колись) регулярно робив / так було», <b>а тепер — ні</b>.</p>
<div class="ex-line">I <mark>used to spend</mark> every summer in the village. — Раніше я щоліта проводив у селі (а тепер — ні).</div>
<div class="ex-line">We <mark>used to have</mark> a cat. — Колись у нас був кіт.</div>
<p>Вживаємо для: <b>звичок у минулому</b> (I used to climb trees) і <b>станів у минулому</b> (I used to be scared of the dark).</p>

<h3>2. Форма — однакова для всіх осіб</h3>
<div class="table-wrap"><table>
  <tr><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>I / she / they <b>used to</b> play.</td><td>I <b>didn’t use to</b> play.</td><td><b>Did</b> you <b>use to</b> play?</td></tr>
  <tr><td colspan="3">Коротко: Yes, I did. / No, I didn’t.</td></tr>
</table></div>
<p>⚠️ Як і з іншими дієсловами після <b>did</b> — прибираємо -d: <b>didn’t use to</b>, <b>Did you use to</b>…?<br>
Після used to — <b>початкова форма</b> дієслова: used to <b>play</b> (не «played», не «playing»).</p>

<h3>3. used to чи Past Simple?</h3>
<div class="table-wrap"><table>
  <tr><th>used to</th><th>Past Simple</th></tr>
  <tr><td>повторювалось багато разів, довгий період</td><td>сталося <b>один раз</b> або з точним часом / кількістю</td></tr>
  <tr><td>I <b>used to visit</b> the village every summer.</td><td>I <b>visited</b> the village <b>last summer</b>.</td></tr>
  <tr><td>Grandpa <b>used to tell</b> stories.</td><td>Grandpa <b>told</b> me a story <b>yesterday</b>.</td></tr>
</table></div>
<p>💡 Past Simple теж можна вжити для звичок у минулому (I swam in the river every day), але used to підкреслює: <b>тепер так уже немає</b>.</p>
<p>⚠️ Для одноразової події used to <b>не можна</b>: <span class="no">I used to go to Paris in 2019.</span> → <span class="yes">I went to Paris in 2019.</span></p>

<h3>4. Вимова</h3>
<p>used to читається [ˈjuːstə] — «юста», з глухим [s].</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I use to play football.</span> (про минуле) → <span class="yes">I used to play football.</span><br>
<span class="no">I didn’t used to like fish.</span> → <span class="yes">I didn’t use to like fish.</span><br>
<span class="no">Did you used to…?</span> → <span class="yes">Did you use to…?</span><br>
<span class="no">She used to playing the piano.</span> → <span class="yes">She used to play the piano.</span></div>`
          },
          {
            id: 'gram-form',
            type: 'gap',
            title: 'used to: +, −, ?',
            instructions: 'Встав used to, didn’t use to або use to (у питанні).',
            items: [
              { id: 'g1', text: 'I {{used to}} climb trees when I was little.' },
              { id: 'g2', text: 'We {{didn’t use to|did not use to}} have a TV in the village. (−)' },
              { id: 'g3', text: 'Did you {{use to}} play outside a lot?' },
              { id: 'g4', text: 'My grandpa {{used to}} tell scary stories.' },
              { id: 'g5', text: 'She {{didn’t use to|did not use to}} like vegetables, but now she loves them. (−)' },
              { id: 'g6', text: 'Where did you {{use to}} spend your summers?' }
            ]
          },
          {
            id: 'gram-vs',
            type: 'choice',
            title: 'used to or Past Simple?',
            instructions: 'Звичка в минулому (used to) чи одноразова подія (Past Simple)?',
            items: [
              { id: 'c1', q: 'When I was a child, I ___ to the village every summer.', options: ['used to go', 'went once'], answer: 0 },
              { id: 'c2', q: 'Last July I ___ my old school.', options: ['used to visit', 'visited'], answer: 1 },
              { id: 'c3', q: 'My brother ___ me all the time when we were kids.', options: ['used to tease', 'teased once'], answer: 0 },
              { id: 'c4', q: 'I ___ my leg in 2015.', options: ['used to break', 'broke'], answer: 1 },
              { id: 'c5', q: 'We ___ a dog, but now we have a cat.', options: ['used to have', 'had yesterday'], answer: 0 },
              { id: 'c6', q: 'Yesterday Grandpa ___ me a funny story.', options: ['used to tell', 'told'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення з used to.',
            items: [
              { id: 'o1', prompt: 'Раніше я боялася темряви.', answer: 'I used to be scared of the dark.' },
              { id: 'o2', prompt: 'Ти колись носив окуляри?', answer: 'Did you use to wear glasses?', extra: ['used'] },
              { id: 'o3', prompt: 'Раніше ми не мали інтернету.', answer: "We didn't use to have the internet." },
              { id: 'o4', prompt: 'Мій тато раніше працював у банку.', answer: 'My dad used to work in a bank.', extra: ['worked'] }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: who / which / where + Past Simple',
            instructions: 'Згадаймо урок 2 і минулий час.',
            items: [
              { id: 'r1', text: 'I played with the children {{who|that}} lived on our street.' },
              { id: 'r2', text: 'This is the river {{where}} we used to swim.' },
              { id: 'r3', text: 'My grandparents {{moved}} to the city ten years ago. (move)' },
              { id: 'r4', text: 'Grandma gave me milk {{which|that}} was still warm.' }
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
            title: 'Then and now',
            instructions: 'Онука розпитує дідуся про його дитинство. Послухай.',
            audio: {
              title: 'Dialogue: Mila & Grandpa',
              lines: [
                { who: 'Mila', text: 'Grandpa, what did you use to do when you were my age?' },
                { who: 'Grandpa', text: 'Well, I didn’t use to have a phone, that’s for sure! I used to write letters to my friends.' },
                { who: 'Mila', text: 'Letters? On paper? Did you use to play computer games?' },
                { who: 'Grandpa', text: 'No, there weren’t any computers! We used to play football in the yard until it got dark.' },
                { who: 'Mila', text: 'Did you use to go to school on Saturdays?' },
                { who: 'Grandpa', text: 'Yes, we did. Six days a week! And I used to walk three kilometres to get there.' },
                { who: 'Mila', text: 'Wow. Were you a good student?' },
                { who: 'Grandpa', text: 'Not really. I used to sit at the back and draw cars in my notebook!' }
              ]
            },
            items: [
              { id: 'l1', q: 'How did Grandpa use to contact his friends?', options: ['By phone', 'He wrote letters.', 'By email'], answer: 1 },
              { id: 'l2', q: 'What did he use to play?', options: ['Computer games', 'Football in the yard', 'Chess'], answer: 1 },
              { id: 'l3', q: 'How many days a week did he go to school?', options: ['Five', 'Six', 'Seven'], answer: 1 },
              { id: 'l4', q: 'How did he get to school?', options: ['By bus', 'He walked three kilometres.', 'By bike'], answer: 1 },
              { id: 'l5', q: 'What did he use to do in class?', options: ['Sit at the front', 'Draw cars', 'Read books'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What did you use to do?' },
              { id: 'dc2', text: 'I used to write letters to my friends.' },
              { id: 'dc3', text: 'We didn’t use to have computers.' },
              { id: 'dc4', text: 'I used to walk to school.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-childhood',
            type: 'writing',
            title: 'My childhood',
            instructions: 'Напиши про своє дитинство: що ти робив(ла) тоді і що змінилося тепер.',
            prompt: 'Write about your childhood (100–120 words).\n• Where did you grow up? What was it like?\n• What did you use to do / play? Who with?\n• What didn’t you use to like? What were you scared of?\n• One special event (Past Simple, e.g. “One summer we…”).\n• What is different now?',
            minWords: 100,
            maxWords: 130,
            phrases: ['I grew up in', 'I used to', 'I didn’t use to', 'One summer', 'Now I'],
            checklist: ['Щонайменше 4 речення з used to', 'Є заперечення didn’t use to', 'Є одна подія в Past Simple', 'Є порівняння з теперішнім'],
            model: `I grew up in Zaporizhzhia, in a flat on the ninth floor. There was a big park next to our building, and I used to spend hours there with my best friend Andrii. We used to ride our bikes and build huts from old boxes.

I didn’t use to like school very much, but I loved our art teacher who let us paint on the walls. I was scared of dogs, and I used to cross the road when I saw one.

One summer we went to the Black Sea and I learned to swim. Now I live in Kyiv. I don’t ride a bike any more, but I have a dog!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-childhood',
            type: 'speaking',
            title: 'When I was a child…',
            instructions: 'Відповідай уголос, використовуючи used to і didn’t use to.',
            phrases: ['When I was a child, I used to…', 'I didn’t use to…', 'Did you use to…?', 'Now I…'],
            tasks: [
              { id: 'sp1', q: 'What did you use to do after school?', tips: 'I used to … with … We used to …', model: 'I used to play in the yard with my friends. We used to play hide and seek until dinner.' },
              { id: 'sp2', q: 'What food or activities didn’t you use to like? Do you like them now?', tips: 'I didn’t use to like …, but now I …', model: 'I didn’t use to like fish, but now I love sushi.' },
              { id: 'sp3', q: 'How is your life different now from ten years ago?', tips: 'Ten years ago I used to … Now I …', model: 'Ten years ago I used to live with my parents. Now I have my own flat.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'summers': 'літа', "grandma's": 'у бабусі', 'child': 'дитина', 'used to': 'раніше (регулярно)', 'spend': 'проводити', 'every summer': 'щоліта',
      "grandparents'": 'бабусі й дідуся', 'small': 'маленький', 'village': 'село', 'near': 'біля', 'river': 'річка', 'parents': 'батьки', 'worked': 'працювали',
      'city': 'місто', 'drive': 'возити', 'june': 'червень', 'pick me up': 'забирати мене', 'end': 'кінець', 'august': 'серпень', 'life': 'життя',
      'different from': 'відмінний від', "didn't use to": 'раніше не', 'internet': 'інтернет', 'instead': 'натомість', 'outside': 'надворі', 'all day': 'весь день',
      'children': 'діти', 'street': 'вулиця', 'climb': 'лазити', 'trees': 'дерева', 'hide and seek': 'хованки', 'swim': 'плавати', 'a bit': 'трохи',
      'naughty': 'неслухняний', 'steal': 'красти', 'cherries': 'вишні', "neighbour's": 'сусідський', 'garden': 'сад', 'get up': 'вставати', 'milk': 'доїти; молоко',
      'cow': 'корова', 'hated': 'ненавидів', 'early': 'рано', 'loved': 'любив', 'warm': 'тепле', 'gave': 'давала', 'breakfast': 'сніданок', 'evenings': 'вечори',
      'tell': 'розповідати', 'scary': 'страшні', 'stories': 'історії', 'forest': 'ліс', 'always': 'завжди', 'scared': 'наляканий', 'dark': 'темрява',
      'visit': 'відвідувати', 'moved': 'переїхали', 'ago': 'тому', 'still': 'досі', 'remember': 'пам’ятаю', 'smell': 'запах', 'fresh': 'свіжий', 'bread': 'хліб',
      'sound': 'звук', 'seaside': 'узбережжя', 'summer camp': 'літній табір', 'abroad': 'за кордоном', 'sold': 'продали', 'funny': 'смішні',
      'childhood': 'дитинство', 'grow up': 'виростати', 'grew up': 'виріс', 'pocket money': 'кишенькові гроші', 'kindergarten': 'дитячий садок',
      'memory': 'спогад', 'memories': 'спогади', 'tease': 'дражнити', 'older': 'старший', 'all the time': 'постійно', 'listened': 'слухав',
      'wonderful': 'чудові', 'those': 'ті', 'leg': 'нога', 'broke': 'зламав', 'once': 'один раз', 'kids': 'діти', 'wear': 'носити', 'glasses': 'окуляри',
      'bank': 'банк', 'age': 'вік', 'phone': 'телефон', "that's for sure": 'це точно', 'letters': 'листи', 'paper': 'папір', 'computer games': 'комп’ютерні ігри',
      'computers': 'комп’ютери', 'yard': 'двір', 'until': 'доки', 'got dark': 'стемніло', 'saturdays': 'суботи', 'six days a week': 'шість днів на тиждень',
      'kilometres': 'кілометри', 'get there': 'дістатися туди', 'not really': 'не дуже', 'back': 'задня частина', 'draw': 'малювати', 'cars': 'машини',
      'notebook': 'зошит', 'contact': 'зв’язуватися', 'front': 'передня частина', 'class': 'урок', 'ninth': 'дев’ятий', 'floor': 'поверх', 'park': 'парк',
      'next to': 'поруч з', 'building': 'будинок', 'hours': 'години', 'best friend': 'найкращий друг', 'ride': 'кататися', 'bikes': 'велосипеди', 'build': 'будувати',
      'huts': 'курені, хатинки', 'boxes': 'коробки', 'art': 'малювання', 'teacher': 'вчитель', 'let': 'дозволяв', 'paint': 'малювати фарбами', 'walls': 'стіни',
      'dogs': 'собаки', 'cross the road': 'переходити дорогу', 'saw': 'бачив', 'learned to swim': 'навчився плавати', 'any more': 'більше (не)',
      'after school': 'після школи', 'dinner': 'вечеря', 'food': 'їжа', 'activities': 'заняття', 'fish': 'риба', 'own': 'власний', 'flat': 'квартира'
    }
  });
})();
