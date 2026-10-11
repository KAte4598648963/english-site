/*
 * A2 · Module 3 · Lesson 3 — Is it big enough? (too / enough; (not) as … as)
 * Review: comparatives & superlatives (lessons 1–2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Online shopping: my returns diary',
    text: `I love online shopping, but it doesn’t always love me. Here’s my diary from last month.

Monday: My new jeans arrived. Unfortunately, they were too small — I couldn’t close them! I ordered size 28, but I think I need a 30. I sent them back.

Wednesday: A beautiful red dress arrived. The size was perfect, but it was too short for the office. It’s not as elegant as it looked in the photo. Back it went!

Friday: I bought some winter boots. They fit well, but they aren’t warm enough for minus twenty. My old boots are warmer, actually.

Saturday: A jacket for my husband. It was big enough, but the sleeves were too long. He looked like a child in his dad’s coat. We laughed for ten minutes.

Sunday: I finally found the perfect coat. It’s warm enough, long enough and not too expensive. It’s as comfortable as my favourite pyjamas!

My lesson? Read the size guide carefully — and don’t buy things late at night.`
  };

  ENG.registerLesson({
    id: 'a2-m3-l3',
    level: 'a2',
    title: 'Is it big enough? Занадто чи достатньо',
    subtitle: 'too / enough · (not) as … as · одяг і розміри',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A returns diary',
            instructions: 'Прочитай щоденник онлайн-покупок і повернень.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What was the problem with the jeans?', options: ['They were too long.', 'They were too small.', 'They were the wrong colour.'], answer: 1 },
              { id: 'q2', q: 'Why did she return the red dress?', options: ['It was too short for the office.', 'It was too big.', 'It was too expensive.'], answer: 0 },
              { id: 'q3', q: 'What was wrong with the boots?', options: ['They didn’t fit.', 'They weren’t warm enough.', 'They were too heavy.'], answer: 1 },
              { id: 'q4', q: 'Why did they laugh at the jacket?', options: ['The colour was strange.', 'The sleeves were too long.', 'It was too small.'], answer: 1 },
              { id: 'q5', q: 'What is her advice?', options: ['Never shop online.', 'Read the size guide and don’t shop late at night.', 'Always buy a bigger size.'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'The dress was as elegant as in the photo.', answer: false, explain: '“It’s not as elegant as it looked in the photo.”' },
              { id: 's2', s: 'Her old boots are warmer than the new ones.', answer: true },
              { id: 's3', s: 'The jacket wasn’t big enough.', answer: false, explain: '“It was big enough.”' },
              { id: 's4', s: 'The perfect coat was too expensive.', answer: false, explain: '“…not too expensive.”' },
              { id: 's5', s: 'The coat is as comfortable as her pyjamas.', answer: true }
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
            title: 'Clothes & shopping',
            instructions: 'Слова для покупок одягу і повернення товарів.',
            cards: [
              { front: 'fit', ipa: '/fɪt/', back: 'пасувати за розміром', example: 'These boots fit well.' },
              { front: 'suit', ipa: '/suːt/', back: 'пасувати, личити', example: 'Red really suits you!' },
              { front: 'try on', back: 'приміряти', example: 'Can I try on this dress?' },
              { front: 'size', ipa: '/saɪz/', back: 'розмір', example: 'What size are you?' },
              { front: 'tight / loose', ipa: '/taɪt/ /luːs/', back: 'тісний / вільний', example: 'The jeans are too tight.' },
              { front: 'sleeve', ipa: '/sliːv/', back: 'рукав', example: 'The sleeves are too long.' },
              { front: 'send back / return', back: 'надіслати назад, повернути', example: 'I sent the jeans back.' },
              { front: 'refund', ipa: '/ˈriːfʌnd/', back: 'повернення грошей', example: 'Can I get a refund?' },
              { front: 'exchange', ipa: '/ɪksˈtʃeɪndʒ/', back: 'обміняти', example: 'I’d like to exchange these shoes.' },
              { front: 'receipt', ipa: '/rɪˈsiːt/', back: 'чек', example: 'Do you have the receipt?' },
              { front: 'unfortunately', ipa: '/ʌnˈfɔːtʃənətli/', back: 'на жаль', example: 'Unfortunately, it was too small.' },
              { front: 'comfortable', ipa: '/ˈkʌmftəbl/', back: 'зручний', example: 'These shoes are very comfortable.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Shopping phrases',
            instructions: 'Поєднай англійську фразу з перекладом.',
            pairs: [
              ['Can I try it on?', 'Можна приміряти?'],
              ['It doesn’t fit.', 'Не підходить за розміром.'],
              ['It really suits you.', 'Тобі дуже личить.'],
              ['I’d like a refund.', 'Я хочу повернути гроші.'],
              ['Here’s the receipt.', 'Ось чек.'],
              ['What size are you?', 'Який у вас розмір?'],
              ['It’s too tight.', 'Занадто тісне.'],
              ['Can I exchange it?', 'Можна обміняти?']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'At the shop',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Excuse me, where can I {{try}} on these trousers?' },
              { id: 'd2', text: 'They’re too {{tight}}. Do you have a bigger size?' },
              { id: 'd3', text: 'This colour really {{suits}} you!' },
              { id: 'd4', text: 'Keep the {{receipt}} if you want to return it.' },
              { id: 'd5', text: 'I don’t want another shirt — I want a {{refund}}.' },
              { id: 'd6', text: 'The {{sleeves}} are too short for my long arms.' }
            ],
            distractors: ['loose']
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
            title: 'too / enough · (not) as … as',
            instructions: 'Як сказати «занадто маленький», «недостатньо теплий» і «такий же зручний, як…».',
            html: `
<h3>1. too = занадто (більше, ніж треба — це проблема)</h3>
<div class="ex-line">The jeans were <mark>too small</mark>. — Джинси були <u>занадто</u> малі.</div>
<p><b>too + прикметник</b>. Часто з <b>for</b> або <b>to + дієслово</b>:</p>
<div class="ex-line">The dress was too short <b>for</b> the office. · It’s too cold <b>to</b> swim.</div>
<p>⚠️ <b>too</b> ≠ <b>very</b>: very = дуже (не обов’язково проблема), too = занадто (проблема!).<br>
It’s <b>very</b> expensive, but I can buy it. · It’s <b>too</b> expensive — I can’t buy it.</p>

<h3>2. enough = достатньо</h3>
<div class="table-wrap"><table>
  <tr><th>з прикметником — ПІСЛЯ</th><th>з іменником — ПЕРЕД</th></tr>
  <tr><td>warm <b>enough</b>, big <b>enough</b><br>The boots aren’t warm <b>enough</b>.</td><td><b>enough</b> money, <b>enough</b> time<br>I don’t have <b>enough</b> money.</td></tr>
</table></div>
<p>⚠️ <span class="no">enough warm</span> → <span class="yes">warm enough</span></p>
<p>Також: It’s warm enough <b>for</b> winter. · He’s old enough <b>to</b> drive.</p>

<h3>3. not … enough = too + протилежне</h3>
<div class="ex-line">The coat isn’t <b>long enough</b>. = The coat is <b>too short</b>.</div>

<h3>4. as … as = такий самий … як</h3>
<div class="table-wrap"><table>
  <tr><th>Однаково</th><th>Не так, як</th></tr>
  <tr><td>It’s <b>as comfortable as</b> my pyjamas.<br>(такий же зручний, як)</td><td>It’s <b>not as elegant as</b> in the photo.<br>(не такий елегантний, як)</td></tr>
</table></div>
<p>💡 <b>not as … as</b> = less … than: The dress is <b>not as elegant as</b> the photo = <b>less elegant than</b> the photo.</p>
<p>Між as … as — <b>звичайна форма</b> прикметника: <span class="no">as bigger as</span> → <span class="yes">as big as</span>.</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">It’s too much expensive.</span> → <span class="yes">It’s too expensive.</span><br>
<span class="no">I’m not enough tall.</span> → <span class="yes">I’m not tall enough.</span><br>
<span class="no">She’s as tall than me.</span> → <span class="yes">She’s as tall as me.</span><br>
<span class="no">This tea is too hot, it’s great!</span> → <span class="yes">This tea is very hot / nice and hot.</span></div>`
          },
          {
            id: 'gram-tooenough',
            type: 'choice',
            title: 'too or enough?',
            instructions: 'Обери too або enough, і правильний порядок слів.',
            items: [
              { id: 'c1', q: 'I can’t close these jeans. They’re ___.', options: ['too small', 'small enough', 'enough small'], answer: 0 },
              { id: 'c2', q: 'These boots aren’t ___ for minus twenty.', options: ['too warm', 'warm enough', 'enough warm'], answer: 1 },
              { id: 'c3', q: 'I don’t have ___ to buy a new coat.', options: ['money enough', 'enough money', 'too money'], answer: 1 },
              { id: 'c4', q: 'He’s 16. He isn’t ___ to drive a car.', options: ['old enough', 'too old', 'enough old'], answer: 0 },
              { id: 'c5', q: 'This soup is ___ to eat. Wait a minute.', options: ['hot enough', 'too hot', 'very hot enough'], answer: 1 },
              { id: 'c6', q: 'The dress is ___ expensive, but I love it, so I’m buying it!', options: ['too', 'very', 'enough'], answer: 1, explain: 'Це не проблема (купую!), тому very, а не too.' }
            ]
          },
          {
            id: 'gram-rewrite',
            type: 'gap',
            title: 'Say it differently',
            instructions: 'Перепиши речення з too або enough, зберігши зміст.',
            items: [
              { id: 'w1', text: 'The coat isn’t long enough. = The coat is {{too short}}.' },
              { id: 'w2', text: 'The room is too small. = The room isn’t {{big enough}}.' },
              { id: 'w3', text: 'The tea isn’t hot enough. = The tea is {{too cold}}.' },
              { id: 'w4', text: 'He’s too young to vote. = He isn’t {{old enough}} to vote.' },
              { id: 'w5', text: 'The boots are too cold for winter. = The boots aren’t {{warm enough}} for winter.' }
            ]
          },
          {
            id: 'gram-asas',
            type: 'gap',
            title: 'as … as',
            instructions: 'Встав as … as (=) або isn’t as … as (≠) з прикметником у дужках.',
            items: [
              { id: 'a1', text: 'The new coat is {{as comfortable as}} my pyjamas. (comfortable, =)' },
              { id: 'a2', text: 'The dress {{isn’t as elegant as|is not as elegant as}} the photo. (elegant, ≠)' },
              { id: 'a3', text: 'My sister is {{as tall as}} me. (tall, =)' },
              { id: 'a4', text: 'Online shopping {{isn’t as fun as|is not as fun as}} shopping with friends. (fun, ≠)' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Ці черевики недостатньо теплі.', answer: "These boots aren't warm enough.", extra: ['too'] },
              { id: 'o2', prompt: 'Рукава занадто довгі.', answer: 'The sleeves are too long.' },
              { id: 'o3', prompt: 'Він не такий високий, як його брат.', answer: 'He is not as tall as his brother.', extra: ['than'] },
              { id: 'o4', prompt: 'У мене недостатньо часу.', answer: "I don't have enough time." }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: вищий і найвищий ступінь',
            instructions: 'Згадаймо уроки 1–2.',
            items: [
              { id: 'r1', q: 'My old boots are ___ than the new ones.', options: ['warm', 'warmer', 'the warmest'], answer: 1 },
              { id: 'r2', q: 'This is ___ coat I’ve ever had.', options: ['better', 'the best', 'best'], answer: 1 },
              { id: 'r3', q: 'Online shops are often ___ than normal shops.', options: ['cheaper', 'more cheap', 'the cheapest'], answer: 0 },
              { id: 'r4', q: 'Monday was ___ day of the week.', options: ['worse', 'the worst', 'the baddest'], answer: 1 }
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
            title: 'Returning a jacket',
            instructions: 'Покупець повертає куртку в магазин. Послухай.',
            audio: {
              title: 'Dialogue: Shop assistant & Customer',
              lines: [
                { who: 'Assistant', text: 'Good afternoon. How can I help you?' },
                { who: 'Customer', text: 'Hello. I bought this jacket last week, but it doesn’t fit. It’s too tight across the shoulders.' },
                { who: 'Assistant', text: 'I’m sorry about that. Would you like to exchange it for a bigger size?' },
                { who: 'Customer', text: 'I tried the bigger size, but the sleeves were too long. And honestly, the colour isn’t as nice as it looked online.' },
                { who: 'Assistant', text: 'I see. So you’d like a refund. Do you have the receipt?' },
                { who: 'Customer', text: 'Yes, here it is.' },
                { who: 'Assistant', text: 'Thank you. You’ll get the money back on your card in three to five days.' }
              ]
            },
            items: [
              { id: 'l1', q: 'When did the customer buy the jacket?', options: ['Yesterday', 'Last week', 'Last month'], answer: 1 },
              { id: 'l2', q: 'What was the problem?', options: ['Too tight across the shoulders', 'Too short', 'Too expensive'], answer: 0 },
              { id: 'l3', q: 'Why didn’t the bigger size work?', options: ['The sleeves were too long.', 'It was too expensive.', 'It wasn’t in stock.'], answer: 0 },
              { id: 'l4', q: 'What does the customer want?', options: ['An exchange', 'A refund', 'A different colour'], answer: 1 },
              { id: 'l5', q: 'When will the money come back?', options: ['Today', 'In 3–5 days', 'In a month'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'It’s too tight across the shoulders.' },
              { id: 'dc2', text: 'The sleeves were too long.' },
              { id: 'dc3', text: 'The colour isn’t as nice as it looked online.' },
              { id: 'dc4', text: 'Do you have the receipt?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-review',
            type: 'writing',
            title: 'A product review',
            instructions: 'Напиши відгук про річ, яку ти купив(ла) (одяг, взуття, гаджет).',
            prompt: 'Write an online review (90–110 words).\n• What did you buy and why?\n• What is good about it? (… enough, as … as)\n• What is the problem? (too …, not … enough)\n• Compare it with something similar (comparatives).\n• Would you recommend it? Give it a score out of 5.',
            minWords: 90,
            maxWords: 120,
            phrases: ['I bought', 'enough', 'too', 'as … as', 'not as', 'better than', 'I would recommend'],
            checklist: ['Є too + прикметник', 'Є прикметник + enough або enough + іменник', 'Є as … as або not as … as', 'Є вищий ступінь', 'Є оцінка і рекомендація'],
            model: `★★★★☆ Good boots, but not for real winter

I bought these boots last month because my old ones were falling apart. They look great and they’re as comfortable as trainers. The size was right, so they fit perfectly.

However, they aren’t warm enough for very cold days. At minus fifteen my feet were freezing! They are also a bit too heavy for long walks.

They’re cheaper than most leather boots, and much more stylish than my old pair. I would recommend them for autumn and spring, but not for January in Kharkiv. Four stars out of five.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-shop',
            type: 'speaking',
            title: 'Too much or not enough?',
            instructions: 'Відповідай уголос, використовуючи too, enough і as … as.',
            phrases: ['It’s too…', 'It isn’t…enough', 'I don’t have enough…', 'It’s (not) as…as…'],
            tasks: [
              { id: 'sp1', q: 'Role play: you want to return shoes to a shop. Explain the problem.', tips: 'I bought … They’re too … They aren’t … enough. I’d like …', model: 'I bought these shoes on Saturday, but they’re too tight. I’d like to exchange them for a bigger size.' },
              { id: 'sp2', q: 'What is there too much of and not enough of in your life?', tips: 'I have too much … I don’t have enough …', model: 'I have too much work and I don’t have enough time for sport.' },
              { id: 'sp3', q: 'Compare your town with the capital using as … as.', tips: 'My town is (not) as … as …', model: 'My town isn’t as big as Kyiv, but it’s as green as any city in Europe.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'online shopping': 'онлайн-шопінг', 'returns': 'повернення', 'diary': 'щоденник', 'always': 'завжди', 'arrived': 'прибули', 'unfortunately': 'на жаль',
      'too': 'занадто', 'small': 'малий', "couldn't": 'не могла', 'close': 'застебнути', 'ordered': 'замовила', 'size': 'розмір', 'need': 'потрібен',
      'sent them back': 'відправила назад', 'beautiful': 'гарна', 'dress': 'сукня', 'perfect': 'ідеальний', 'short': 'короткий', 'office': 'офіс',
      'as … as': 'такий … як', 'elegant': 'елегантний', 'looked': 'виглядала', 'photo': 'фото', 'back it went': 'і пішла назад', 'bought': 'купила',
      'winter': 'зимові', 'boots': 'черевики', 'fit': 'пасують за розміром', 'well': 'добре', 'warm': 'теплий', 'enough': 'достатньо', 'minus': 'мінус',
      'twenty': 'двадцять', 'warmer': 'тепліші', 'actually': 'насправді', 'jacket': 'куртка', 'husband': 'чоловік', 'big': 'великий', 'sleeves': 'рукави',
      'long': 'довгий', 'child': 'дитина', 'coat': 'пальто', 'laughed': 'сміялися', 'minutes': 'хвилини', 'finally': 'нарешті', 'found': 'знайшла',
      'expensive': 'дорогий', 'comfortable': 'зручний', 'favourite': 'улюблені', 'pyjamas': 'піжама', 'lesson': 'урок', 'read': 'читати',
      'size guide': 'таблиця розмірів', 'carefully': 'уважно', 'buy': 'купувати', 'late at night': 'пізно вночі', 'wrong': 'не той', 'colour': 'колір',
      'heavy': 'важкий', 'strange': 'дивний', 'advice': 'порада', 'never': 'ніколи', 'bigger': 'більший', 'suit': 'личити', 'try on': 'приміряти',
      'tight': 'тісний', 'loose': 'вільний', 'sleeve': 'рукав', 'send back': 'надіслати назад', 'return': 'повернути', 'refund': 'повернення коштів',
      'exchange': 'обміняти', 'receipt': 'чек', 'excuse me': 'перепрошую', 'trousers': 'штани', 'keep': 'зберігайте', 'another': 'інша', 'shirt': 'сорочка',
      'arms': 'руки', 'very': 'дуже', 'cold': 'холодно', 'swim': 'плавати', 'money': 'гроші', 'time': 'час', 'old': 'дорослий', 'drive': 'водити',
      'vote': 'голосувати', 'young': 'молодий', 'soup': 'суп', 'hot': 'гарячий', 'wait': 'зачекай', 'minute': 'хвилина', 'room': 'кімната', 'tea': 'чай',
      'sister': 'сестра', 'tall': 'висока', 'fun': 'весело', 'friends': 'друзі', 'brother': 'брат', 'normal': 'звичайні', 'shops': 'магазини',
      'cheaper': 'дешевші', 'week': 'тиждень', 'good afternoon': 'добрий день', 'help': 'допомогти', 'shoulders': 'плечі', 'across': 'в',
      "i'm sorry about that": 'мені шкода', 'would you like': 'чи не хотіли б ви', 'tried': 'приміряла', 'honestly': 'чесно', 'nice': 'гарний',
      'online': 'в інтернеті', 'i see': 'зрозуміло', 'here it is': 'ось він', 'card': 'картка', 'days': 'дні', 'yesterday': 'вчора', 'month': 'місяць',
      'in stock': 'в наявності', 'different': 'інший', 'review': 'відгук', 'product': 'товар', 'real': 'справжня', 'falling apart': 'розвалювалися',
      'look great': 'чудово виглядають', 'trainers': 'кросівки', 'right': 'правильний', 'perfectly': 'ідеально', 'however': 'однак', 'feet': 'ноги',
      'freezing': 'мерзли', 'walks': 'прогулянки', 'most': 'більшість', 'leather': 'шкіряні', 'stylish': 'стильні', 'pair': 'пара', 'recommend': 'рекомендувати',
      'autumn': 'осінь', 'spring': 'весна', 'stars': 'зірки', 'out of': 'з', 'shoes': 'туфлі', 'saturday': 'субота', 'too much': 'забагато', 'work': 'робота',
      'sport': 'спорт', 'capital': 'столиця', 'green': 'зелене', 'europe': 'Європа', "it's": 'це (є)', "they're": 'вони (є)', "doesn't": 'не', "aren't": 'не є'
    }
  });
})();
