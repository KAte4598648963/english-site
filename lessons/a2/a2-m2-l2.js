/*
 * A2 · Module 2 · Lesson 2 — It happened when… (Past Simple vs Past Continuous; when / while)
 * Review: Past Continuous (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'My most embarrassing moment',
    text: `We asked our readers to share their most embarrassing moments. Here are our favourites.

“I was walking to an important job interview when it started to rain. I was running across the road when I slipped and fell into a big puddle. My white shirt was brown! I went to the interview anyway. The manager laughed — and gave me the job.” — Artem

“While I was waiting in a long queue at the bank, I was singing quietly to myself. Or I thought it was quietly! Suddenly the woman in front of me turned around and said, ‘Lovely voice!’ Everybody was looking at me.” — Oksana

“I was carrying a tray of coffee in a busy café when I bumped into a man. I dropped the tray and spilled coffee all over his laptop. He was working on a presentation. He wasn’t happy at all.” — Danylo

“My boyfriend and I were having dinner at a fancy restaurant. While he was telling me a story, I was trying to cut a hard piece of steak. Suddenly the steak flew off my plate and landed on the next table!” — Vira`
  };

  ENG.registerLesson({
    id: 'a2-m2-l2',
    level: 'a2',
    title: 'It happened when… Несподіванки',
    subtitle: 'Past Simple vs Past Continuous · when / while · дія, яку перервали',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Embarrassing moments',
            instructions: 'Прочитай історії читачів про найніяковіші моменти.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where was Artem going?', options: ['To work', 'To a job interview', 'To the bank'], answer: 1 },
              { id: 'q2', q: 'What happened to Artem’s shirt?', options: ['It got wet and dirty.', 'He lost it.', 'He tore it.'], answer: 0 },
              { id: 'q3', q: 'What was Oksana doing in the queue?', options: ['Talking on the phone', 'Singing', 'Reading'], answer: 1 },
              { id: 'q4', q: 'What did Danylo spill coffee on?', options: ['A woman’s dress', 'A man’s laptop', 'The floor'], answer: 1 },
              { id: 'q5', q: 'Where did Vira’s steak land?', options: ['On the floor', 'On her boyfriend', 'On the next table'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Artem didn’t go to the interview.', answer: false, explain: '“I went to the interview anyway.”' },
              { id: 's2', s: 'Artem got the job.', answer: true },
              { id: 's3', s: 'Oksana was singing very loudly on purpose.', answer: false, explain: 'She thought she was singing quietly.' },
              { id: 's4', s: 'The man with the laptop was happy.', answer: false, explain: '“He wasn’t happy at all.”' },
              { id: 's5', s: 'Vira’s boyfriend was telling a story.', answer: true }
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
            title: 'Accidents & incidents',
            instructions: 'Дієслова для «маленьких катастроф». Подивись на форму минулого часу!',
            cards: [
              { front: 'slip (slipped)', ipa: '/slɪp/', back: 'посковзнутися', example: 'I slipped on the ice.' },
              { front: 'fall (fell)', back: 'падати', example: 'She fell into a puddle.' },
              { front: 'trip over (tripped)', back: 'спіткнутися об', example: 'He tripped over a cable.' },
              { front: 'drop (dropped)', back: 'впустити', example: 'I dropped my phone.' },
              { front: 'spill (spilled / spilt)', back: 'розлити', example: 'He spilled coffee on the laptop.' },
              { front: 'bump into', back: 'наштовхнутися на; випадково зустріти', example: 'I bumped into a man.' },
              { front: 'break (broke)', back: 'розбити, зламати', example: 'She broke a glass.' },
              { front: 'burn (burned / burnt)', back: 'обпекти(ся)', example: 'I burned my finger.' },
              { front: 'embarrassing', ipa: '/ɪmˈbærəsɪŋ/', back: 'ніяковий, соромний', example: 'It was so embarrassing!' },
              { front: 'embarrassed', back: 'збентежений (про людину)', example: 'I felt very embarrassed.' },
              { front: 'puddle', ipa: '/ˈpʌdl/', back: 'калюжа', example: 'There was a big puddle.' },
              { front: 'queue', ipa: '/kjuː/', back: 'черга', example: 'I was waiting in a queue.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'What happened?',
            instructions: 'Поєднай дію з ситуацією.',
            pairs: [
              ['slipped', 'on the ice'],
              ['tripped over', 'a cable'],
              ['dropped', 'my phone in the toilet'],
              ['spilled', 'wine on the carpet'],
              ['bumped into', 'an old friend'],
              ['burned', 'my hand on the oven'],
              ['broke', 'my favourite cup'],
              ['fell', 'off my bike']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the sentences',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'It was icy and I {{slipped}} outside the shop.' },
              { id: 'd2', text: 'I was so {{embarrassed}} — my face was red!' },
              { id: 'd3', text: 'There was a long {{queue}} at the post office.' },
              { id: 'd4', text: 'Be careful! Don’t {{spill}} the soup.' },
              { id: 'd5', text: 'I {{bumped}} into my teacher at the supermarket.' },
              { id: 'd6', text: 'The kids jumped in every {{puddle}} on the way home.' }
            ],
            distractors: ['embarrassing']
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
            title: 'Past Simple + Past Continuous: when / while',
            instructions: 'Найпопулярніша комбінація для історій: довга дія + коротка подія, яка її перервала.',
            html: `
<h3>1. Довга дія + коротка подія</h3>
<p><b>Past Continuous</b> — довга дія, «фон». <b>Past Simple</b> — коротка подія, яка сталася посередині.</p>
<div class="ex-line">I <mark>was running</mark> across the road (довга) <b>when</b> I <mark>slipped</mark> (коротка).</div>
<div class="ex-line">Я <u>біг</u> через дорогу, <u>коли посковзнувся</u>.</div>
<p>Уяви часову лінію: ════ was running ════ ⚡slipped ════</p>

<h3>2. when чи while?</h3>
<div class="table-wrap"><table>
  <tr><th>when + Past Simple (коротка дія)</th><th>while + Past Continuous (довга дія)</th></tr>
  <tr><td>I was carrying coffee <b>when</b> I bumped into a man.</td><td><b>While</b> I was carrying coffee, I bumped into a man.</td></tr>
  <tr><td>She was singing <b>when</b> the woman turned around.</td><td><b>While</b> she was waiting, she was singing.</td></tr>
</table></div>
<p>💡 <b>while</b> = «поки, у той час як» — після нього майже завжди Past Continuous. <b>when</b> = «коли» — частіше з Past Simple.</p>
<p>💡 Кома: якщо речення <b>починається</b> з when / while, ставимо кому: <b>While</b> he was talking<b>,</b> I was eating.</p>

<h3>3. Дві довгі дії одночасно — while + Continuous + Continuous</h3>
<div class="ex-line"><b>While</b> he <b>was telling</b> a story, I <b>was trying</b> to cut the steak.</div>

<h3>4. Дві короткі дії одна за одною — Past Simple + Past Simple</h3>
<div class="ex-line">When the manager <b>saw</b> me, he <b>laughed</b>. <span class="muted">(спочатку побачив, потім засміявся)</span></div>
<p>⚠️ Порівняй: When I arrived, they <b>were having</b> dinner (вже їли) ↔ When I arrived, they <b>had</b> dinner (почали їсти після мого приходу).</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I walked to work when I was seeing an accident.</span> → <span class="yes">I was walking to work when I saw an accident.</span><br>
<span class="no">While I cooked, the phone was ringing.</span> → <span class="yes">While I was cooking, the phone rang.</span><br>
<span class="no">When I was falling, I hurt my leg.</span> → <span class="yes">When I fell, I hurt my leg.</span></div>`
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Long or short action?',
            instructions: 'Постав дієслова в Past Simple або Past Continuous.',
            items: [
              { id: 'g1', text: 'I {{was walking}} home when I {{saw}} an accident. (walk / see)' },
              { id: 'g2', text: 'While we {{were having}} dinner, the lights {{went}} out. (have / go)' },
              { id: 'g3', text: 'She {{was reading}} when her phone {{rang}}. (read / ring)' },
              { id: 'g4', text: 'He {{broke}} his leg while he {{was skiing}}. (break / ski)' },
              { id: 'g5', text: 'When I {{arrived}}, the guests {{were dancing}}. (arrive / dance)' }
            ]
          },
          {
            id: 'gram-whenwhile',
            type: 'choice',
            title: 'when or while?',
            instructions: 'Обери when або while.',
            items: [
              { id: 'c1', q: 'I was cooking ___ I burned my hand.', options: ['when', 'while'], answer: 0 },
              { id: 'c2', q: '___ I was cooking, I burned my hand.', options: ['When', 'While'], answer: 1 },
              { id: 'c3', q: 'He fell asleep ___ he was watching TV.', options: ['when', 'while'], answer: 1 },
              { id: 'c4', q: '___ the teacher came in, everyone stopped talking.', options: ['When', 'While'], answer: 0 },
              { id: 'c5', q: 'My dog was sleeping ___ the cat stole its food.', options: ['when', 'while'], answer: 0 },
              { id: 'c6', q: '___ I was waiting for the bus, I read a whole chapter.', options: ['When', 'While'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the stories',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Я біг, коли посковзнувся.', answer: 'I was running when I slipped.' },
              { id: 'o2', prompt: 'Поки вона чекала, вона співала.', answer: 'While she was waiting, she was singing.' },
              { id: 'o3', prompt: 'Він ніс каву, коли наштовхнувся на чоловіка.', answer: 'He was carrying coffee when he bumped into a man.' },
              { id: 'o4', prompt: 'Коли я прийшла, усі дивилися телевізор.', answer: 'When I arrived, everyone was watching TV.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: Past Continuous',
            instructions: 'Згадаймо урок 1.',
            items: [
              { id: 'r1', q: 'At 9 p.m. we ___ a film.', options: ['were watching', 'was watching', 'watched at'], answer: 0 },
              { id: 'r2', q: '___ you sleeping when I called?', options: ['Did', 'Were', 'Was'], answer: 1 },
              { id: 'r3', q: 'It ___ raining, so we went out.', options: ['didn’t', 'wasn’t', 'weren’t'], answer: 1 },
              { id: 'r4', q: 'What ___ she doing at the party?', options: ['was', 'were', 'did'], answer: 0 }
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
            title: 'A bad day',
            instructions: 'Марія розповідає подрузі про свій жахливий день. Послухай.',
            audio: {
              title: 'Dialogue: Maria & Kate',
              lines: [
                { who: 'Kate', text: 'Maria, what happened to your arm?' },
                { who: 'Maria', text: 'Oh, it was a terrible day! I was riding my bike to work when a dog ran into the road.' },
                { who: 'Kate', text: 'Oh no! Did you fall?' },
                { who: 'Maria', text: 'Yes. I fell off and hurt my arm. While I was sitting on the ground, a man stopped and helped me.' },
                { who: 'Kate', text: 'That was kind of him.' },
                { who: 'Maria', text: 'Yes, but that’s not all! When I got to the office, I realised I didn’t have my keys. I lost them when I fell!' },
                { who: 'Kate', text: 'Did you find them?' },
                { who: 'Maria', text: 'Yes — the man who helped me found them and brought them to my office. And he invited me for coffee!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What was Maria doing when the dog ran into the road?', options: ['Walking', 'Riding her bike', 'Driving'], answer: 1 },
              { id: 'l2', q: 'What did she hurt?', options: ['Her leg', 'Her arm', 'Her head'], answer: 1 },
              { id: 'l3', q: 'Who helped her?', options: ['A man', 'A police officer', 'Her colleague'], answer: 0 },
              { id: 'l4', q: 'When did she lose her keys?', options: ['When she fell', 'At the office', 'At home'], answer: 0 },
              { id: 'l5', q: 'How did the story end?', options: ['She never found the keys.', 'The man brought the keys and invited her for coffee.', 'She went to hospital.'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'I was riding my bike when a dog ran into the road.' },
              { id: 'dc2', text: 'While I was sitting on the ground, a man helped me.' },
              { id: 'dc3', text: 'I lost my keys when I fell.' },
              { id: 'dc4', text: 'He invited me for coffee.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-moment',
            type: 'writing',
            title: 'An embarrassing moment',
            instructions: 'Напиши про ніяковий або смішний випадок з твого життя (реальний чи вигаданий).',
            prompt: 'Write your story (90–120 words).\n• Set the scene: where were you, what were you doing, what was happening around you? (Past Continuous)\n• What happened suddenly? (Past Simple + when)\n• What did you / other people do next?\n• How did you feel? How did it end?\n• Use when at least twice and while at least once.',
            minWords: 90,
            maxWords: 130,
            phrases: ['I was', 'when', 'while', 'suddenly', 'I felt so embarrassed', 'In the end'],
            checklist: ['Фон у Past Continuous', 'Подія в Past Simple', '2× when і 1× while', 'Є почуття (embarrassed, scared…)', 'Є кінцівка'],
            model: `Last winter I was taking the metro to work. It was very crowded and I was standing next to the doors. I was listening to music and I was dancing a little, because it was my favourite song.

Suddenly the train stopped and I lost my balance. While I was trying to catch the handle, I grabbed a man’s scarf instead! He was talking on the phone when it happened, and he dropped it.

I felt so embarrassed. I said sorry about ten times. But when he looked at me, he started laughing. In the end we laughed together all the way to my station.`
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
            title: 'Tell a short story',
            instructions: 'Розкажи уголос коротку історію. Почни з фону, потім — подія.',
            phrases: ['I was…ing when…', 'While I was…', 'Suddenly…', 'In the end…', 'It was so embarrassing!'],
            tasks: [
              { id: 'sp1', q: 'Tell me about a time you dropped, broke or spilled something.', tips: 'I was … when I dropped …', model: 'I was carrying a cake to the table when I tripped and dropped it on the floor.' },
              { id: 'sp2', q: 'Where were you and what were you doing when you heard some big news?', tips: 'I was … when I heard / my friend called …', model: 'I was sitting in a lecture when my sister called and told me she was getting married.' },
              { id: 'sp3', q: 'Describe a funny moment with a friend.', tips: 'While we were …, …', model: 'While we were walking in the park, a duck followed us all the way home!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'embarrassing': 'ніяковий, соромний', 'embarrassed': 'збентежений', 'moment': 'момент', 'moments': 'моменти', 'asked': 'попросили', 'readers': 'читачі',
      'share': 'поділитися', 'favourites': 'улюблені', 'walking': 'ішов', 'important': 'важлива', 'job interview': 'співбесіда', 'when': 'коли',
      'started to rain': 'почався дощ', 'running': 'біг', 'across': 'через', 'road': 'дорога', 'slipped': 'посковзнувся', 'fell': 'впав', 'into': 'у',
      'big': 'велика', 'puddle': 'калюжа', 'white': 'біла', 'shirt': 'сорочка', 'brown': 'коричнева', 'anyway': 'все одно', 'manager': 'менеджер',
      'laughed': 'засміявся', 'gave': 'дав', 'job': 'робота', 'while': 'поки', 'waiting': 'чекала', 'long': 'довга', 'queue': 'черга', 'bank': 'банк',
      'singing': 'співала', 'quietly': 'тихо', 'to myself': 'собі під ніс', 'thought': 'думала', 'suddenly': 'раптом', 'woman': 'жінка', 'in front of': 'перед',
      'turned around': 'обернулася', 'said': 'сказала', 'lovely': 'чудовий', 'voice': 'голос', 'everybody': 'усі', 'looking at': 'дивилися на',
      'carrying': 'ніс', 'tray': 'тацю', 'coffee': 'кава', 'busy': 'людне', 'café': 'кафе', 'bumped into': 'наштовхнувся на', 'man': 'чоловік',
      'dropped': 'впустив', 'spilled': 'розлив', 'all over': 'по всьому', 'laptop': 'ноутбук', 'working on': 'працював над', 'presentation': 'презентація',
      'happy': 'задоволений', 'at all': 'зовсім', 'boyfriend': 'хлопець', 'having dinner': 'вечеряли', 'fancy': 'шикарний', 'restaurant': 'ресторан',
      'telling': 'розповідав', 'story': 'історія', 'trying': 'намагалася', 'cut': 'розрізати', 'hard': 'тверда', 'piece': 'шматок', 'steak': 'стейк',
      'flew off': 'злетів з', 'plate': 'тарілка', 'landed': 'приземлився', 'next table': 'сусідній столик', 'wet': 'мокрий', 'dirty': 'брудний',
      'tore': 'порвав', 'talking': 'розмовляла', 'phone': 'телефон', 'dress': 'сукня', 'floor': 'підлога', 'loudly': 'голосно', 'on purpose': 'навмисно',
      'slip': 'посковзнутися', 'ice': 'лід', 'fall': 'падати', 'trip over': 'спіткнутися об', 'tripped': 'спіткнувся', 'cable': 'кабель', 'drop': 'впустити',
      'spill': 'розлити', 'bump into': 'наштовхнутися на', 'break': 'розбити', 'broke': 'розбила', 'glass': 'склянка', 'burn': 'обпекти', 'burned': 'обпік',
      'finger': 'палець', 'toilet': 'унітаз', 'wine': 'вино', 'carpet': 'килим', 'old friend': 'старий друг', 'hand': 'рука', 'oven': 'духовка',
      'favourite': 'улюблена', 'cup': 'чашка', 'bike': 'велосипед', 'icy': 'слизько, ожеледь', 'outside': 'біля', 'shop': 'магазин', 'face': 'обличчя',
      'red': 'червоне', 'post office': 'пошта', 'careful': 'обережний', 'soup': 'суп', 'teacher': 'вчитель', 'supermarket': 'супермаркет', 'kids': 'діти',
      'jumped': 'стрибали', 'on the way home': 'дорогою додому', 'accident': 'аварія', 'went out': 'згасло', 'reading': 'читала', 'rang': 'задзвонив',
      'leg': 'нога', 'skiing': 'катався на лижах', 'arrived': 'прийшла', 'guests': 'гості', 'dancing': 'танцювали', 'fell asleep': 'заснув',
      'came in': 'увійшов', 'stopped': 'перестали', 'dog': 'собака', 'cat': 'кіт', 'stole': 'вкрав', 'food': 'їжа', 'whole': 'цілий', 'chapter': 'розділ',
      'arm': 'рука', 'terrible': 'жахливий', 'riding': 'їхала', 'ran into': 'вибіг на', 'fell off': 'впала з', 'hurt': 'забила, поранила', 'sitting': 'сиділа',
      'ground': 'земля', 'helped': 'допоміг', 'kind of him': 'мило з його боку', 'got to': 'дісталася до', 'realised': 'зрозуміла', 'keys': 'ключі',
      'lost': 'загубила', 'find': 'знайти', 'brought': 'приніс', 'invited': 'запросив', 'head': 'голова', 'hospital': 'лікарня', 'colleague': 'колега',
      'winter': 'зима', 'metro': 'метро', 'crowded': 'людно', 'standing': 'стояла', 'doors': 'двері', 'listening': 'слухала', 'music': 'музика',
      'a little': 'трохи', 'song': 'пісня', 'balance': 'рівновага', 'catch': 'вхопитися', 'handle': 'поручень', 'grabbed': 'схопила', 'scarf': 'шарф',
      'instead': 'натомість', 'sorry': 'вибачте', 'laughing': 'сміятися', 'in the end': 'зрештою', 'together': 'разом', 'all the way': 'всю дорогу',
      'station': 'станція', 'cake': 'торт', 'heard': 'почув', 'news': 'новини', 'lecture': 'лекція', 'sister': 'сестра', 'called': 'подзвонила',
      'getting married': 'виходить заміж', 'funny': 'смішний', 'park': 'парк', 'duck': 'качка', 'followed': 'йшла за'
    }
  });
})();
