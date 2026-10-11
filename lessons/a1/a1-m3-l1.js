/*
 * A1 · Module 3 · Lesson 1 — My day (Present Simple: I / you / we / they; time & at/in/on)
 * Review: to be, possessives (modules 1–2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'A day in the life of a baker',
    text: `Hi! I’m Roman and I’m a baker. My job is great, but my day is very different from your day!

I get up at three o’clock in the morning. Yes, at night! I have a shower and drink a big cup of coffee. I don’t have breakfast at home — I eat at work. I start work at four o’clock. My colleagues and I make bread, cakes and croissants.

Our shop opens at seven. People buy fresh bread for breakfast. We finish work at one o’clock in the afternoon. I go home and have lunch with my wife. In the evening we walk in the park with our children.

I go to bed at eight o’clock in the evening. My friends watch films and play games at that time — but I sleep!`
  };

  ENG.registerLesson({
    id: 'a1-m3-l1',
    level: 'a1',
    title: 'My day. Мій день',
    subtitle: 'Present Simple: I / you / we / they · час · at / in / on',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Roman’s day',
            instructions: 'Прочитай про день пекаря Романа й обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What time does Roman get up?', options: ['At 3 a.m.', 'At 7 a.m.', 'At 8 p.m.'], answer: 0 },
              { id: 'q2', q: 'Where does Roman eat breakfast?', options: ['At home', 'At work', 'In a café'], answer: 1 },
              { id: 'q3', q: 'What time does the shop open?', options: ['At four', 'At seven', 'At one'], answer: 1 },
              { id: 'q4', q: 'Who does he have lunch with?', options: ['His colleagues', 'His friends', 'His wife'], answer: 2 },
              { id: 'q5', q: 'What does Roman do at 8 p.m.?', options: ['He watches films.', 'He goes to bed.', 'He walks in the park.'], answer: 1 }
            ]
          },
          {
            id: 'read-order',
            type: 'dragdrop',
            title: 'Roman’s timetable',
            instructions: 'Заповни розклад Романа. Перетягни правильний час.',
            items: [
              { id: 't1', text: 'get up — {{3:00}}' },
              { id: 't2', text: 'start work — {{4:00}}' },
              { id: 't3', text: 'the shop opens — {{7:00}}' },
              { id: 't4', text: 'finish work — {{13:00}}' },
              { id: 't5', text: 'go to bed — {{20:00}}' }
            ],
            distractors: ['9:00']
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
            title: 'Daily routine',
            instructions: 'Дієслова для розпорядку дня. Багато з них — сталі вирази з have, go, get.',
            cards: [
              { front: 'wake up', back: 'прокидатися', example: 'I wake up at 7 o’clock.' },
              { front: 'get up', back: 'вставати', example: 'We get up early.' },
              { front: 'have a shower', back: 'приймати душ', example: 'I have a shower in the morning.' },
              { front: 'have breakfast', ipa: '/ˈbrekfəst/', back: 'снідати', example: 'They have breakfast at home.' },
              { front: 'go to work / school', back: 'іти на роботу / до школи', example: 'I go to work by bus.' },
              { front: 'start / finish work', back: 'починати / закінчувати роботу', example: 'We start work at nine.' },
              { front: 'have lunch', ipa: '/lʌntʃ/', back: 'обідати', example: 'I have lunch at one o’clock.' },
              { front: 'come home', back: 'приходити додому', example: 'I come home at six.' },
              { front: 'cook dinner', ipa: '/ˈdɪnə/', back: 'готувати вечерю', example: 'We cook dinner together.' },
              { front: 'watch TV', back: 'дивитися телевізор', example: 'They watch TV in the evening.' },
              { front: 'go to bed', back: 'лягати спати', example: 'I go to bed at eleven.' },
              { front: 'o’clock / half past', back: 'рівно (про час) / пів на', example: 'It’s seven o’clock. It’s half past seven (7:30).' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Make phrases',
            instructions: 'Поєднай дієслово з другою частиною виразу.',
            pairs: [
              ['have', 'breakfast'],
              ['wake', 'up'],
              ['go to', 'bed'],
              ['watch', 'TV'],
              ['cook', 'dinner'],
              ['come', 'home'],
              ['take', 'a photo'],
              ['drink', 'coffee']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'My morning',
            instructions: 'Встав слова, щоб розповісти про ранок. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'My alarm rings and I {{wake}} up.' },
              { id: 'd2', text: 'I get up and have a {{shower}}.' },
              { id: 'd3', text: 'I have {{breakfast}} — eggs and coffee.' },
              { id: 'd4', text: 'I {{go}} to work by metro.' },
              { id: 'd5', text: 'I {{start}} work at nine o’clock.' },
              { id: 'd6', text: 'At one o’clock I have {{lunch}} with my colleagues.' }
            ],
            distractors: ['bed']
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
            title: 'Present Simple (I / you / we / they) + time',
            instructions: 'Перший «справжній» час англійської. Сьогодні — форма для I, you, we, they. Наступного уроку додамо he / she / it.',
            html: `
<h3>1. Коли вживаємо Present Simple?</h3>
<ul>
  <li><b>звички й розпорядок</b> — що ми робимо регулярно: I get up at seven.</li>
  <li><b>факти</b> — що завжди правда: Bakers make bread. We live in Kyiv.</li>
</ul>
<p>Українською: «Я <u>встаю</u> о сьомій» (щодня, зазвичай).</p>

<h3>2. Форма: просто дієслово!</h3>
<p>Для <b>I / you / we / they</b> беремо дієслово без змін (як у словнику, без to):</p>
<div class="table-wrap"><table>
  <tr><th>to work — працювати</th><th>to get up — вставати</th></tr>
  <tr><td>I <b>work</b><br>you <b>work</b><br>we <b>work</b><br>they <b>work</b></td><td>I <b>get up</b><br>you <b>get up</b><br>we <b>get up</b><br>they <b>get up</b></td></tr>
</table></div>
<div class="ex-line">My colleagues and I <mark>make</mark> bread. <span class="muted">(= we make)</span></div>
<div class="ex-line">My friends <mark>watch</mark> films. <span class="muted">(= they watch)</span></div>
<p>⚠️ <b>Не додаємо am/is/are</b> до звичайного дієслова: <span class="no">I am work.</span> → <span class="yes">I work.</span></p>

<h3>3. Заперечення: don’t + дієслово</h3>
<div class="ex-line">I <mark>don’t have</mark> breakfast at home. <span class="muted">(don’t = do not)</span></div>
<div class="ex-line">We <mark>don’t watch</mark> TV in the morning.</div>
<p>(Детально заперечення й питання — в уроці 3.)</p>

<h3>4. Котра година?</h3>
<div class="table-wrap"><table>
  <tr><th>Час</th><th>Кажемо</th></tr>
  <tr><td>7:00</td><td>seven <b>o’clock</b></td></tr>
  <tr><td>7:30</td><td><b>half past</b> seven / seven thirty</td></tr>
  <tr><td>7:15</td><td><b>quarter past</b> seven / seven fifteen</td></tr>
  <tr><td>7:45</td><td><b>quarter to</b> eight / seven forty-five</td></tr>
</table></div>
<p>a.m. — до полудня (3 a.m. = 3 ночі), p.m. — після полудня (8 p.m. = 20:00).</p>

<h3>5. at / in / on — прийменники часу</h3>
<div class="table-wrap"><table>
  <tr><th>at</th><th>in</th><th>on</th></tr>
  <tr><td>точний час:<br><b>at</b> 7 o’clock, <b>at</b> half past six<br>+ <b>at</b> night, <b>at</b> the weekend</td><td>частина дня:<br><b>in</b> the morning<br><b>in</b> the afternoon<br><b>in</b> the evening</td><td>дні тижня:<br><b>on</b> Monday<br><b>on</b> Sunday</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I am get up at seven.</span> → <span class="yes">I get up at seven.</span><br>
<span class="no">I go to bed in 11 o’clock.</span> → <span class="yes">I go to bed at 11 o’clock.</span><br>
<span class="no">at the morning</span> → <span class="yes">in the morning</span> (але <b>at night</b>!)<br>
<span class="no">I go to home.</span> → <span class="yes">I go home.</span></div>`
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Write the verb',
            instructions: 'Встав дієслово з дужок у Present Simple (для I / you / we / they воно не змінюється).',
            items: [
              { id: 'g1', text: 'I {{get}} up at seven o’clock. (get)' },
              { id: 'g2', text: 'We {{have}} lunch at one. (have)' },
              { id: 'g3', text: 'My parents {{drink}} tea in the evening. (drink)' },
              { id: 'g4', text: 'You {{start}} work very early! (start)' },
              { id: 'g5', text: 'They {{go}} to bed at eleven. (go)' },
              { id: 'g6', text: 'I {{don’t|do not}} have breakfast at home. (not have)' },
              { id: 'g7', text: 'We {{walk}} in the park on Sunday. (walk)' }
            ]
          },
          {
            id: 'gram-prep',
            type: 'choice',
            title: 'at, in or on?',
            instructions: 'Обери прийменник часу.',
            items: [
              { id: 'p1', q: 'I get up ___ six o’clock.', options: ['at', 'in', 'on'], answer: 0 },
              { id: 'p2', q: 'We have dinner ___ the evening.', options: ['at', 'in', 'on'], answer: 1 },
              { id: 'p3', q: 'They play football ___ Saturday.', options: ['at', 'in', 'on'], answer: 2 },
              { id: 'p4', q: 'Roman works ___ night.', options: ['at', 'in', 'on'], answer: 0, explain: 'at night — виняток, запам’ятай!' },
              { id: 'p5', q: 'I have a shower ___ the morning.', options: ['at', 'in', 'on'], answer: 1 },
              { id: 'p6', q: 'We visit our grandparents ___ the weekend.', options: ['at', 'in', 'on'], answer: 0 }
            ]
          },
          {
            id: 'gram-time',
            type: 'choice',
            title: 'What time is it?',
            instructions: 'Обери, як сказати час англійською.',
            items: [
              { id: 'c1', q: '8:00', options: ['eight o’clock', 'half past eight', 'quarter to eight'], answer: 0 },
              { id: 'c2', q: '6:30', options: ['half past six', 'half past seven', 'six o’clock'], answer: 0 },
              { id: 'c3', q: '9:15', options: ['quarter to nine', 'quarter past nine', 'nine fifty'], answer: 1 },
              { id: 'c4', q: '10:45', options: ['quarter past ten', 'quarter to ten', 'quarter to eleven'], answer: 2, explain: '10:45 = за чверть одинадцята → quarter to eleven.' },
              { id: 'c5', q: '20:00', options: ['8 a.m.', '8 p.m.', '2 p.m.'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення. Зайві слова не використовуй!',
            items: [
              { id: 'o1', prompt: 'Я встаю о сьомій.', answer: 'I get up at seven.', extra: ['am'] },
              { id: 'o2', prompt: 'Ми обідаємо о першій.', answer: 'We have lunch at one.', extra: ['in'] },
              { id: 'o3', prompt: 'Вони дивляться телевізор увечері.', answer: 'They watch TV in the evening.' },
              { id: 'o4', prompt: 'Я не снідаю вдома.', answer: "I don't have breakfast at home." }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: to be і присвійні',
            instructions: 'Згадаймо модулі 1–2. Обери правильне слово.',
            items: [
              { id: 'r1', q: 'Roman ___ a baker.', options: ['is', 'has', 'are'], answer: 0 },
              { id: 'r2', q: '___ job is great.', options: ['He', 'His', 'Him'], answer: 1 },
              { id: 'r3', q: 'The bread ___ fresh.', options: ['are', 'is', 'am'], answer: 1 },
              { id: 'r4', q: 'We walk in the park with ___ children.', options: ['our', 'we', 'us'], answer: 0 }
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
            title: 'Morning people',
            instructions: 'Двоє колег порівнюють свої ранки. Послухай і дай відповіді.',
            audio: {
              title: 'Dialogue: Alex & Nina',
              lines: [
                { who: 'Alex', text: 'You are always at work so early, Nina! What time do you get up?' },
                { who: 'Nina', text: 'At half past five. I go to the gym, then I have a shower and breakfast.' },
                { who: 'Alex', text: 'Wow! I get up at eight o’clock. I don’t have breakfast at home, I drink coffee here.' },
                { who: 'Nina', text: 'And you start work at nine?' },
                { who: 'Alex', text: 'Yes, at nine. And in the evening I play video games with my friends.' },
                { who: 'Nina', text: 'I don’t play games. I read books and go to bed at ten.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What time does Nina get up?', options: ['5:30', '6:30', '8:00'], answer: 0 },
              { id: 'l2', q: 'Where does Nina go in the morning?', options: ['To the park', 'To the gym', 'To a café'], answer: 1 },
              { id: 'l3', q: 'Alex has breakfast…', options: ['at home', 'at the gym', 'he doesn’t have breakfast, only coffee at work'], answer: 2 },
              { id: 'l4', q: 'What does Alex do in the evening?', options: ['He reads books.', 'He plays video games.', 'He goes to the gym.'], answer: 1 },
              { id: 'l5', q: 'When does Nina go to bed?', options: ['At nine', 'At ten', 'At eleven'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'I get up at half past five.' },
              { id: 'dc2', text: 'We start work at nine.' },
              { id: 'dc3', text: 'I don’t have breakfast at home.' },
              { id: 'dc4', text: 'They go to bed at ten.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-day',
            type: 'writing',
            title: 'My typical day',
            instructions: 'Опиши свій звичайний будній день від ранку до вечора. Пиши про себе (I) або про себе і сім’ю (we).',
            prompt: 'Write about your typical day (60–80 words).\n• What time do you get up?\n• What do you do in the morning, afternoon and evening?\n• Use at / in / on with times.\n• Use one negative: I don’t…\n• Use first, then, after that to connect ideas.',
            minWords: 60,
            maxWords: 90,
            phrases: ['I get up at', 'in the morning', 'then', 'after that', 'I don’t', 'in the evening', 'I go to bed at'],
            checklist: ['Дієслова без am/is/are (I work, не I am work)', 'at + годинник, in + the morning/evening', 'Є заперечення з don’t', 'Є first / then / after that'],
            model: `I get up at seven o’clock. First, I have a shower and then I have breakfast with my husband. We drink coffee and eat toast.

I go to work by bus at eight. I start work at nine and I have lunch at one o’clock. I finish work at six.

In the evening I cook dinner. After that we watch TV or walk in the park. I don’t watch TV for a long time — I go to bed at eleven.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-day',
            type: 'speaking',
            title: 'Talk about your routine',
            instructions: 'Відповідай уголос. Кажи точний час і використовуй at / in.',
            phrases: ['I get up at…', 'in the morning', 'Then I…', 'I don’t…', 'at the weekend'],
            tasks: [
              { id: 'sp1', q: 'What do you do in the morning? Say five things.', tips: 'I wake up at … Then I … After that I …', model: 'I wake up at seven. I get up, have a shower and have breakfast. Then I go to work.' },
              { id: 'sp2', q: 'What time do you start and finish work or school?', tips: 'I start … at … and finish at …', model: 'I start work at nine and finish at half past five.' },
              { id: 'sp3', q: 'What do you and your family or friends do in the evening?', tips: 'We … We don’t …', model: 'We cook dinner together and watch films. We don’t go to bed late.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'baker': 'пекар', 'job': 'робота', 'great': 'чудовий', 'very': 'дуже', 'different': 'інший, відмінний', 'day': 'день', 'get up': 'вставати',
      'wake up': 'прокидатися', 'three': 'три', "o'clock": 'рівно (година)', 'morning': 'ранок', 'in the morning': 'вранці', 'night': 'ніч', 'at night': 'вночі',
      'have a shower': 'приймати душ', 'shower': 'душ', 'drink': 'пити', 'big': 'великий', 'cup': 'чашка', 'coffee': 'кава', "don't": 'не (do not)',
      'breakfast': 'сніданок', 'have breakfast': 'снідати', 'home': 'дім; додому', 'at home': 'вдома', 'eat': 'їсти', 'work': 'робота; працювати',
      'at work': 'на роботі', 'start': 'починати', 'four': 'чотири', 'colleagues': 'колеги', 'make': 'робити, готувати', 'bread': 'хліб', 'cakes': 'тістечка',
      'croissants': 'круасани', 'shop': 'магазин', 'opens': 'відкривається', 'open': 'відкриватися', 'seven': 'сім', 'people': 'люди', 'buy': 'купувати',
      'fresh': 'свіжий', 'for': 'для, на', 'finish': 'закінчувати', 'one': 'перша (година); один', 'afternoon': 'день (після полудня)',
      'in the afternoon': 'вдень', 'go home': 'іти додому', 'lunch': 'обід', 'have lunch': 'обідати', 'with': 'з', 'wife': 'дружина',
      'evening': 'вечір', 'in the evening': 'увечері', 'walk': 'гуляти, ходити пішки', 'park': 'парк', 'children': 'діти', 'go to bed': 'лягати спати',
      'bed': 'ліжко', 'eight': 'вісім', 'friends': 'друзі', 'watch': 'дивитися', 'films': 'фільми', 'play': 'грати', 'games': 'ігри', 'time': 'час',
      'at that time': 'у цей час', 'sleep': 'спати', 'what time': 'о котрій', 'café': 'кафе', 'timetable': 'розклад', 'routine': 'розпорядок',
      'daily': 'щоденний', 'go': 'іти, їхати', 'school': 'школа', 'come': 'приходити', 'cook': 'готувати', 'dinner': 'вечеря', 'tv': 'телевізор',
      'half past': 'пів на (+30 хв)', 'quarter past': 'чверть на (+15 хв)', 'quarter to': 'за чверть (−15 хв)', 'early': 'рано', 'late': 'пізно',
      'by bus': 'автобусом', 'by metro': 'метро', 'together': 'разом', 'eleven': 'одинадцять', 'nine': 'дев’ять', 'six': 'шість', 'ten': 'десять',
      'tea': 'чай', 'take': 'брати; робити (фото)', 'photo': 'фото', 'alarm': 'будильник', 'rings': 'дзвонить', 'eggs': 'яйця', 'football': 'футбол',
      'saturday': 'субота', 'sunday': 'неділя', 'monday': 'понеділок', 'weekend': 'вихідні', 'at the weekend': 'на вихідних', 'visit': 'відвідувати',
      'grandparents': 'бабуся й дідусь', 'always': 'завжди', 'gym': 'спортзал', 'then': 'потім', 'here': 'тут', 'video games': 'відеоігри',
      'read': 'читати', 'books': 'книги', 'typical': 'типовий', 'first': 'спочатку', 'after that': 'після цього', 'husband': 'чоловік', 'toast': 'тост',
      'long': 'довгий', 'for a long time': 'довго', 'or': 'або', 'things': 'речі', 'family': 'сім’я', 'say': 'сказати', 'his': 'його', 'our': 'наш',
      "i'm": 'я є', "it's": 'зараз (it is)', 'a.m.': 'до полудня', 'p.m.': 'після полудня'
    }
  });
})();
