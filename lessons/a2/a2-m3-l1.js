/*
 * A2 · Module 3 · Lesson 1 — City or village? (comparative adjectives; than; much / a bit)
 * Review: there is / there are (A1), Past Simple vs Continuous (module 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'From Kyiv to a village: one year later',
    text: `A year ago Andrii and Kateryna left their flat in Kyiv and moved to a village in the Carpathian mountains. They now run a small guesthouse. We asked them: is village life better than city life?

“In many ways, yes,” says Kateryna. “The air is much cleaner and the nights are quieter. In Kyiv we used to sleep badly because of the traffic. Here we sleep like babies! Life is also cheaper. Our house is bigger than our old flat, but we pay less.”

Andrii agrees, but he is more careful. “Some things are more difficult here. The shops are further away, and the nearest hospital is forty kilometres from us. In winter the roads are worse, and sometimes we can’t drive anywhere. The internet is slower too, which is a problem for our business.”

What about people? “People here are friendlier,” Kateryna says. “Our neighbours know us by name. In Kyiv we didn’t even know the people next door.”

Would they go back? “Never,” they both say. “We are busier than before, but we’re much happier.”`
  };

  ENG.registerLesson({
    id: 'a2-m3-l1',
    level: 'a2',
    title: 'City or village? Місто чи село?',
    subtitle: 'вищий ступінь порівняння: -er / more · than · much / a bit',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'A new life in the mountains',
            instructions: 'Прочитай інтерв’ю з подружжям, яке переїхало з Києва в село.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What do Andrii and Kateryna do now?', options: ['They work in Kyiv.', 'They run a guesthouse.', 'They are farmers.'], answer: 1 },
              { id: 'q2', q: 'Why did they use to sleep badly in Kyiv?', options: ['Because of the traffic', 'Because of their neighbours', 'Because of work'], answer: 0 },
              { id: 'q3', q: 'How far is the nearest hospital?', options: ['4 km', '14 km', '40 km'], answer: 2 },
              { id: 'q4', q: 'Why is the slow internet a problem?', options: ['They can’t watch films.', 'It’s bad for their business.', 'Their children need it for school.'], answer: 1 },
              { id: 'q5', q: 'Would they go back to Kyiv?', options: ['Yes, soon', 'Maybe one day', 'Never'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда? Порівнюй уважно.',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Their house is smaller than their old flat.', answer: false, explain: '“Our house is bigger than our old flat.”' },
              { id: 's2', s: 'They pay more for their house than for the flat.', answer: false, explain: '“…but we pay less.”' },
              { id: 's3', s: 'The roads are worse in winter.', answer: true },
              { id: 's4', s: 'People in the village are friendlier.', answer: true },
              { id: 's5', s: 'They are less busy than before.', answer: false, explain: '“We are busier than before.”' }
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
            title: 'City & country life',
            instructions: 'Прикметники й слова, щоб порівнювати місця.',
            cards: [
              { front: 'crowded / peaceful', ipa: '/ˈpiːsfl/', back: 'людний / спокійний', example: 'The village is more peaceful.' },
              { front: 'noisy / quiet', back: 'галасливий / тихий', example: 'The city is noisier.' },
              { front: 'polluted / clean', ipa: '/pəˈluːtɪd/', back: 'забруднений / чистий', example: 'The air is cleaner here.' },
              { front: 'expensive / cheap', back: 'дорогий / дешевий', example: 'Life is cheaper in the village.' },
              { front: 'safe / dangerous', ipa: '/seɪf/ /ˈdeɪndʒərəs/', back: 'безпечний / небезпечний', example: 'Is the city more dangerous?' },
              { front: 'traffic', ipa: '/ˈtræfɪk/', back: 'дорожній рух, затори', example: 'There’s a lot of traffic in Kyiv.' },
              { front: 'countryside', back: 'сільська місцевість', example: 'I love the countryside.' },
              { front: 'guesthouse', back: 'гостьовий будинок', example: 'They run a guesthouse.' },
              { front: 'run (a business)', back: 'керувати (бізнесом)', example: 'She runs a café.' },
              { front: 'nearest', ipa: '/ˈnɪərɪst/', back: 'найближчий', example: 'The nearest shop is far.' },
              { front: 'neighbour', back: 'сусід', example: 'Our neighbours are friendly.' },
              { front: 'in many ways', back: 'багато в чому', example: 'In many ways, it’s better.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Opposites',
            instructions: 'Поєднай протилежності.',
            pairs: [
              ['crowded', 'empty'],
              ['noisy', 'quiet'],
              ['polluted', 'clean'],
              ['expensive', 'cheap'],
              ['safe', 'dangerous'],
              ['modern', 'old-fashioned'],
              ['boring', 'exciting'],
              ['near', 'far']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Describe places',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'There are too many cars. The air is very {{polluted}}.' },
              { id: 'd2', text: 'I can’t sleep here — the street is so {{noisy}}!' },
              { id: 'd3', text: 'The metro at 8 a.m. is always {{crowded}}.' },
              { id: 'd4', text: 'It’s a {{peaceful}} village with no cars.' },
              { id: 'd5', text: 'There was a lot of {{traffic}} on the bridge.' },
              { id: 'd6', text: 'This area is {{safe}} — you can walk at night.' }
            ],
            distractors: ['cheap']
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
            title: 'Comparative adjectives',
            instructions: 'Як порівняти два місця, дві речі чи двох людей: «більший, ніж…», «цікавіший, ніж…».',
            html: `
<h3>1. Як утворити вищий ступінь</h3>
<div class="table-wrap"><table>
  <tr><th>Прикметник</th><th>Правило</th><th>Приклади</th></tr>
  <tr><td>короткий (1 склад)</td><td><b>+ er</b></td><td>cheap → cheap<b>er</b>, clean → clean<b>er</b>, quiet → quiet<b>er</b></td></tr>
  <tr><td>закінчується на -e</td><td><b>+ r</b></td><td>safe → safe<b>r</b>, nice → nice<b>r</b></td></tr>
  <tr><td>голосна + приголосна</td><td>подвоюємо + <b>er</b></td><td>big → bi<b>gg</b>er, hot → ho<b>tt</b>er, thin → thi<b>nn</b>er</td></tr>
  <tr><td>2 склади на -y</td><td>y → <b>ier</b></td><td>busy → bus<b>ier</b>, friendly → friendl<b>ier</b>, noisy → nois<b>ier</b></td></tr>
  <tr><td>довгий (2+ склади)</td><td><b>more</b> + прикм.</td><td><b>more</b> expensive, <b>more</b> dangerous, <b>more</b> peaceful</td></tr>
  <tr><td><b>неправильні</b></td><td>—</td><td>good → <b>better</b>, bad → <b>worse</b>, far → <b>further</b></td></tr>
</table></div>

<h3>2. than = «ніж»</h3>
<div class="ex-line">Our house is <mark>bigger than</mark> our old flat.</div>
<div class="ex-line">The village is <mark>more peaceful than</mark> the city.</div>
<p>Після than можна вжити займенник: He’s taller <b>than me</b>. (у розмові) / than I am.</p>

<h3>3. Наскільки? much / a lot / a bit / a little</h3>
<div class="table-wrap"><table>
  <tr><th>Значна різниця</th><th>Маленька різниця</th></tr>
  <tr><td><b>much / a lot</b> + -er: The air is <b>much</b> cleaner.</td><td><b>a bit / a little</b> + -er: The internet is <b>a bit</b> slower.</td></tr>
</table></div>
<p>⚠️ <span class="no">very cleaner</span> → <span class="yes">much cleaner</span>. Very з вищим ступенем не вживаємо!</p>

<h3>4. less = «менш»</h3>
<div class="ex-line">The village is <b>less crowded</b> than the city. · We pay <b>less</b>.</div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">more cheaper</span> → <span class="yes">cheaper</span><br>
<span class="no">expensiver</span> → <span class="yes">more expensive</span><br>
<span class="no">gooder / badder</span> → <span class="yes">better / worse</span><br>
<span class="no">bigger that</span> → <span class="yes">bigger than</span></div>`
          },
          {
            id: 'gram-form',
            type: 'gap',
            title: 'Make comparatives',
            instructions: 'Напиши вищий ступінь порівняння.',
            items: [
              { id: 'g1', text: 'cheap → {{cheaper}}' },
              { id: 'g2', text: 'big → {{bigger}}' },
              { id: 'g3', text: 'busy → {{busier}}' },
              { id: 'g4', text: 'expensive → {{more expensive}}' },
              { id: 'g5', text: 'good → {{better}}' },
              { id: 'g6', text: 'bad → {{worse}}' },
              { id: 'g7', text: 'safe → {{safer}}' },
              { id: 'g8', text: 'far → {{further|farther}}' }
            ]
          },
          {
            id: 'gram-sent',
            type: 'gap',
            title: 'Compare the places',
            instructions: 'Встав прикметник у вищому ступені + than.',
            items: [
              { id: 's1', text: 'The air in the village is {{cleaner than}} in Kyiv. (clean)' },
              { id: 's2', text: 'The roads in winter are {{worse than}} in summer. (bad)' },
              { id: 's3', text: 'Life in the city is {{more expensive than}} in the village. (expensive)' },
              { id: 's4', text: 'People here are {{friendlier than|more friendly than}} in the city. (friendly)' },
              { id: 's5', text: 'Kyiv is much {{bigger than}} Lviv. (big)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Choose the correct option',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'c1', q: 'The village is ___ than the city.', options: ['more quiet', 'quieter', 'quietest'], answer: 1 },
              { id: 'c2', q: 'My new job is ___ than my old one.', options: ['gooder', 'more good', 'better'], answer: 2 },
              { id: 'c3', q: 'The internet is ___ slower.', options: ['very', 'a bit', 'more'], answer: 1 },
              { id: 'c4', q: 'Taxis are ___ than buses.', options: ['more expensive', 'expensiver', 'more expensiver'], answer: 0 },
              { id: 'c5', q: 'She’s older ___ her brother.', options: ['that', 'then', 'than'], answer: 2 },
              { id: 'c6', q: 'The city is ___ crowded than the village.', options: ['more', 'much', 'very'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Наш будинок більший, ніж наша стара квартира.', answer: 'Our house is bigger than our old flat.' },
              { id: 'o2', prompt: 'Повітря тут набагато чистіше.', answer: 'The air is much cleaner here.', extra: ['very'] },
              { id: 'o3', prompt: 'Місто небезпечніше, ніж село.', answer: 'The city is more dangerous than the village.' },
              { id: 'o4', prompt: 'Взимку дороги гірші.', answer: 'The roads are worse in winter.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: there is / are + Past Simple / Continuous',
            instructions: 'Згадаймо A1 і модуль 2.',
            items: [
              { id: 'r1', q: 'There ___ a lot of traffic in Kyiv.', options: ['is', 'are'], answer: 0 },
              { id: 'r2', q: 'There ___ no shops near our house.', options: ['is', 'are'], answer: 1 },
              { id: 'r3', q: 'We ___ in Kyiv when we decided to move.', options: ['lived', 'were living'], answer: 1 },
              { id: 'r4', q: 'A year ago they ___ to the village.', options: ['moved', 'were moving'], answer: 0 }
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
            title: 'Choosing a flat',
            instructions: 'Пара обирає між двома квартирами для оренди. Послухай.',
            audio: {
              title: 'Dialogue: Ira & Max',
              lines: [
                { who: 'Ira', text: 'So, which flat do you prefer, the one in the centre or the one in Obolon?' },
                { who: 'Max', text: 'Well, the one in the centre is smaller and more expensive. It costs fifteen thousand a month.' },
                { who: 'Ira', text: 'Yes, but it’s much closer to my work. I can walk there in ten minutes.' },
                { who: 'Max', text: 'True. But the flat in Obolon is bigger and lighter. And the street is quieter.' },
                { who: 'Ira', text: 'It’s further from the metro, though. And the kitchen is a bit older.' },
                { who: 'Max', text: 'The balcony is better — it has a view of the river!' },
                { who: 'Ira', text: 'OK, OK. You win. Let’s take the bigger one. I can take the metro.' }
              ]
            },
            items: [
              { id: 'l1', q: 'Which flat is more expensive?', options: ['The one in the centre', 'The one in Obolon'], answer: 0 },
              { id: 'l2', q: 'Why does Ira like the flat in the centre?', options: ['It’s bigger.', 'It’s closer to her work.', 'It has a balcony.'], answer: 1 },
              { id: 'l3', q: 'What is better about the Obolon flat?', options: ['It’s bigger, lighter and quieter.', 'It’s cheaper and newer.', 'It’s near the metro.'], answer: 0 },
              { id: 'l4', q: 'What does the balcony have?', options: ['A view of the river', 'A view of the park', 'Lots of plants'], answer: 0 },
              { id: 'l5', q: 'Which flat do they choose?', options: ['The one in the centre', 'The one in Obolon'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'It’s much closer to my work.' },
              { id: 'dc2', text: 'The flat is bigger and lighter.' },
              { id: 'dc3', text: 'It’s further from the metro.' },
              { id: 'dc4', text: 'The kitchen is a bit older.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-compare',
            type: 'writing',
            title: 'Two places',
            instructions: 'Порівняй два місця, які ти добре знаєш (два міста, місто і село, два райони).',
            prompt: 'Compare two places (100–120 words).\n• Introduce the places.\n• Compare: size, prices, people, transport, nature, nightlife…\n• Use at least 8 comparatives, including better / worse and more…\n• Use much / a bit at least twice.\n• Which place do you prefer and why?',
            minWords: 100,
            maxWords: 130,
            phrases: ['is bigger than', 'more', 'much', 'a bit', 'better', 'worse', 'less', 'I prefer'],
            checklist: ['Щонайменше 8 прикметників у вищому ступені', 'Є than', 'Є much / a bit (не very!)', 'Є better / worse', 'Є висновок: що ти обираєш'],
            model: `I grew up in Kremenchuk, but now I live in Kyiv. The two cities are very different.

Kyiv is much bigger and busier than Kremenchuk. There are more theatres, museums and restaurants, so the nightlife is better. The metro is faster than the buses in my home town. But Kyiv is also more expensive — a flat here costs three times more!

Kremenchuk is quieter and a bit greener. People are friendlier and less stressed. The traffic is much worse in Kyiv, too.

I prefer Kyiv for work, but when I need to relax, I go back to Kremenchuk. My mum’s cooking is better there!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-compare',
            type: 'speaking',
            title: 'Compare and decide',
            instructions: 'Порівнюй уголос, використовуючи вищий ступінь.',
            phrases: ['…is much…er than…', '…is a bit more…', '…is better / worse…', 'I prefer… because…'],
            tasks: [
              { id: 'sp1', q: 'City or village: which is better for families with children? Why?', tips: 'The village is … than … but …', model: 'The village is safer and cleaner, but the city is better for education.' },
              { id: 'sp2', q: 'Compare your home town now with ten years ago.', tips: 'Now it’s … than it used to be.', model: 'Now it’s much more modern, but the traffic is worse than it used to be.' },
              { id: 'sp3', q: 'Compare two things you use every day (two phones, two cafés, two apps).', tips: '… is faster / cheaper / more useful than …', model: 'My new phone is faster and lighter than my old one, but it’s more expensive.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'village': 'село', 'city': 'місто', 'year later': 'рік потому', 'ago': 'тому', 'left': 'залишили', 'flat': 'квартира', 'moved': 'переїхали',
      'carpathian mountains': 'Карпати', 'mountains': 'гори', 'run': 'керують', 'guesthouse': 'гостьовий будинок', 'asked': 'запитали', 'better': 'кращий',
      'than': 'ніж', 'life': 'життя', 'in many ways': 'багато в чому', 'air': 'повітря', 'much': 'набагато', 'cleaner': 'чистіший', 'nights': 'ночі',
      'quieter': 'тихіший', 'used to': 'раніше', 'sleep': 'спати', 'badly': 'погано', 'because of': 'через', 'traffic': 'затори, рух', 'like babies': 'як немовлята',
      'cheaper': 'дешевший', 'bigger': 'більший', 'old': 'старий', 'pay': 'платимо', 'less': 'менше', 'agrees': 'погоджується', 'careful': 'обережний',
      'more careful': 'обережніший', 'things': 'речі', 'more difficult': 'складніший', 'shops': 'магазини', 'further': 'далі', 'away': 'віддалік',
      'nearest': 'найближчий', 'hospital': 'лікарня', 'kilometres': 'кілометри', 'winter': 'зима', 'roads': 'дороги', 'worse': 'гірший',
      'sometimes': 'іноді', 'drive': 'їхати', 'anywhere': 'кудись', 'internet': 'інтернет', 'slower': 'повільніший', 'problem': 'проблема',
      'business': 'бізнес', 'what about': 'а як щодо', 'people': 'люди', 'friendlier': 'привітніші', 'neighbours': 'сусіди', 'by name': 'на ім’я',
      'even': 'навіть', 'next door': 'по сусідству', 'go back': 'повернутися', 'never': 'ніколи', 'both': 'обоє', 'busier': 'зайнятіші', 'before': 'раніше',
      'happier': 'щасливіші', 'farmers': 'фермери', 'films': 'фільми', 'children': 'діти', 'soon': 'скоро', 'maybe': 'можливо', 'one day': 'колись',
      'smaller': 'менший', 'crowded': 'людний', 'peaceful': 'спокійний', 'noisy': 'галасливий', 'quiet': 'тихий', 'polluted': 'забруднений',
      'clean': 'чистий', 'expensive': 'дорогий', 'cheap': 'дешевий', 'safe': 'безпечний', 'dangerous': 'небезпечний', 'countryside': 'сільська місцевість',
      'neighbour': 'сусід', 'empty': 'порожній', 'modern': 'сучасний', 'old-fashioned': 'старомодний', 'boring': 'нудний', 'exciting': 'захопливий',
      'near': 'близько', 'far': 'далеко', 'too many': 'забагато', 'cars': 'машини', 'street': 'вулиця', 'metro': 'метро', 'always': 'завжди',
      'bridge': 'міст', 'area': 'район', 'walk': 'гуляти', 'at night': 'вночі', 'big': 'великий', 'busy': 'зайнятий', 'good': 'добрий', 'bad': 'поганий',
      'nice': 'приємний', 'hot': 'гарячий', 'thin': 'тонкий', 'friendly': 'привітний', 'more': 'більш', 'a bit': 'трохи', 'a little': 'трохи',
      'a lot': 'набагато', 'job': 'робота', 'taxis': 'таксі', 'buses': 'автобуси', 'older': 'старший', 'brother': 'брат', 'decided': 'вирішили',
      'which': 'яка', 'prefer': 'віддавати перевагу', 'centre': 'центр', 'costs': 'коштує', 'thousand': 'тисяча', 'a month': 'на місяць',
      'closer': 'ближчий', 'work': 'робота', 'minutes': 'хвилини', 'true': 'правда', 'lighter': 'світліший', 'though': 'однак', 'kitchen': 'кухня',
      'balcony': 'балкон', 'view': 'вид', 'river': 'річка', 'you win': 'ти переміг', "let's": 'давай', 'take': 'візьмемо', 'newer': 'новіший',
      'park': 'парк', 'plants': 'рослини', 'grew up': 'виріс', 'different': 'різні', 'theatres': 'театри', 'museums': 'музеї', 'restaurants': 'ресторани',
      'nightlife': 'нічне життя', 'faster': 'швидший', 'home town': 'рідне місто', 'three times more': 'втричі більше', 'greener': 'зеленіший',
      'stressed': 'напружений', 'relax': 'відпочити', 'cooking': 'кухня, куховарство', 'families': 'сім’ї', 'education': 'освіта', 'apps': 'застосунки',
      'useful': 'корисний', 'phone': 'телефон', "it's": 'це (є)', "we're": 'ми (є)'
    }
  });
})();
