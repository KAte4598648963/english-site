/*
 * A2 · Module 3 · Lesson 2 — The best place on Earth (superlative adjectives)
 * Review: comparatives (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'A world of records',
    text: `Our planet is full of amazing places. Here are some of the most extraordinary.

The highest mountain in the world is Mount Everest in the Himalayas. It is 8,849 metres high, and the weather at the top is the coldest you can imagine. Every year hundreds of climbers try to reach the top, but it is one of the most dangerous trips on Earth.

The longest river is the Nile in Africa — about 6,650 kilometres long. However, the Amazon in South America carries the most water. Around it grows the largest rainforest on the planet, where you can find the greatest number of animal and plant species.

The deepest lake in the world is Lake Baikal. It is also the oldest lake — about 25 million years old! And the driest place? That’s the Atacama Desert in Chile. In some parts of it, it hasn’t rained for hundreds of years.

What about Ukraine? Hoverla is the highest mountain in our country, and the Dnipro is the longest river that flows entirely through Ukraine. And for many of us, the most beautiful place on Earth is simply home.`
  };

  ENG.registerLesson({
    id: 'a2-m3-l2',
    level: 'a2',
    title: 'The best place on Earth. Найкращі місця',
    subtitle: 'найвищий ступінь порівняння: the -est / the most · in / of',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'World records',
            instructions: 'Прочитай про рекордні місця планети.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'How high is Mount Everest?', options: ['6,650 m', '8,849 m', '2,061 m'], answer: 1 },
              { id: 'q2', q: 'Which is the longest river?', options: ['The Amazon', 'The Nile', 'The Dnipro'], answer: 1 },
              { id: 'q3', q: 'Which river carries the most water?', options: ['The Amazon', 'The Nile', 'The Danube'], answer: 0 },
              { id: 'q4', q: 'What is special about Lake Baikal?', options: ['It’s the largest and the warmest.', 'It’s the deepest and the oldest.', 'It’s the newest.'], answer: 1 },
              { id: 'q5', q: 'Where is the driest place?', options: ['In Africa', 'In Chile', 'In Ukraine'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Climbing Everest is very safe.', answer: false, explain: '“…one of the most dangerous trips on Earth.”' },
              { id: 's2', s: 'The largest rainforest is around the Amazon.', answer: true },
              { id: 's3', s: 'Lake Baikal is about 25 million years old.', answer: true },
              { id: 's4', s: 'Hoverla is the highest mountain in the world.', answer: false, explain: 'It’s the highest in Ukraine.' },
              { id: 's5', s: 'It rains a lot in some parts of the Atacama.', answer: false, explain: 'In some parts it hasn’t rained for hundreds of years.' }
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
            title: 'Geography',
            instructions: 'Слова про природу та географію.',
            cards: [
              { front: 'mountain / the top', ipa: '/ˈmaʊntɪn/', back: 'гора / вершина', example: 'We reached the top of the mountain.' },
              { front: 'river', back: 'річка', example: 'The Nile is the longest river.' },
              { front: 'lake', back: 'озеро', example: 'Baikal is the deepest lake.' },
              { front: 'desert', ipa: '/ˈdezət/', back: 'пустеля', example: 'The Sahara is a hot desert.' },
              { front: 'rainforest', back: 'тропічний ліс', example: 'Many animals live in the rainforest.' },
              { front: 'ocean / sea', ipa: '/ˈəʊʃn/', back: 'океан / море', example: 'The Pacific is the biggest ocean.' },
              { front: 'island', ipa: '/ˈaɪlənd/', back: 'острів', example: 'Greenland is the largest island.' },
              { front: 'waterfall', back: 'водоспад', example: 'Angel Falls is the highest waterfall.' },
              { front: 'coast', ipa: '/kəʊst/', back: 'узбережжя', example: 'They live on the coast.' },
              { front: 'population', ipa: '/ˌpɒpjuˈleɪʃn/', back: 'населення', example: 'Kyiv has a population of 3 million.' },
              { front: 'species', ipa: '/ˈspiːʃiːz/', back: 'вид (тварин, рослин)', example: 'There are thousands of species here.' },
              { front: 'reach', ipa: '/riːtʃ/', back: 'досягати', example: 'Few climbers reach the top.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Adjective → noun',
            instructions: 'Поєднай прикметник з іменником (high → height).',
            pairs: [
              ['high', 'height'],
              ['long', 'length'],
              ['deep', 'depth'],
              ['wide', 'width'],
              ['hot', 'heat'],
              ['dry', 'dryness'],
              ['large', 'size'],
              ['old', 'age']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Where is it?',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Hoverla is the highest {{mountain}} in Ukraine.' },
              { id: 'd2', text: 'There is no water in a {{desert}}.' },
              { id: 'd3', text: 'Crimea is a peninsula, not an {{island}}.' },
              { id: 'd4', text: 'We heard the {{waterfall}} before we saw it.' },
              { id: 'd5', text: 'Odesa is on the Black Sea {{coast}}.' },
              { id: 'd6', text: 'Kyiv has the largest {{population}} in Ukraine.' }
            ],
            distractors: ['lake']
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
            title: 'Superlative adjectives',
            instructions: 'Як сказати «найвищий», «найдорожчий», «найкращий». Правила дуже схожі на вищий ступінь!',
            html: `
<h3>1. Як утворити найвищий ступінь</h3>
<div class="table-wrap"><table>
  <tr><th>Прикметник</th><th>Вищий</th><th>Найвищий</th></tr>
  <tr><td>короткий: high, long, cold</td><td>higher</td><td><b>the</b> high<b>est</b>, the long<b>est</b>, the cold<b>est</b></td></tr>
  <tr><td>на -e: large, safe</td><td>larger</td><td><b>the</b> large<b>st</b>, the safe<b>st</b></td></tr>
  <tr><td>подвоєння: big, hot</td><td>bigger</td><td><b>the</b> bi<b>gg</b>est, the ho<b>tt</b>est</td></tr>
  <tr><td>на -y: dry, busy</td><td>drier</td><td><b>the</b> dr<b>iest</b>, the bus<b>iest</b></td></tr>
  <tr><td>довгий: dangerous, beautiful</td><td>more dangerous</td><td><b>the most</b> dangerous, <b>the most</b> beautiful</td></tr>
  <tr><td><b>неправильні</b>: good / bad / far</td><td>better / worse / further</td><td><b>the best</b> / <b>the worst</b> / <b>the furthest</b></td></tr>
</table></div>
<p>⚠️ Майже завжди з <b>the</b>: the highest, the most beautiful. Можна замінити на присвійний: <b>my best</b> friend.</p>

<h3>2. in чи of?</h3>
<div class="table-wrap"><table>
  <tr><th>in + місце / група</th><th>of + період / кількість</th></tr>
  <tr><td>the highest mountain <b>in</b> the world<br>the best student <b>in</b> the class</td><td>the best day <b>of</b> my life<br>the cheapest <b>of</b> the three hotels</td></tr>
</table></div>
<p>⚠️ <span class="no">the highest mountain of the world</span> → <span class="yes">…in the world</span></p>

<h3>3. Корисні вирази</h3>
<ul>
  <li><b>one of the</b> + найвищий ступінь + іменник у <b>множині</b>: one of the most dangerous <b>trips</b>.</li>
  <li>найвищий ступінь + <b>I’ve ever…</b>: It’s the best film <b>I’ve ever seen</b>.</li>
  <li><b>the least</b> = найменш: the least expensive hotel.</li>
</ul>

<h3>4. Порівняльний vs найвищий</h3>
<div class="ex-line">The Dnipro is <b>longer than</b> the Desna. <span class="muted">(два об’єкти)</span></div>
<div class="ex-line">The Dnipro is <b>the longest</b> river in Ukraine. <span class="muted">(один з багатьох)</span></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">It’s the most big city.</span> → <span class="yes">It’s the biggest city.</span><br>
<span class="no">She is best student.</span> → <span class="yes">She is the best student.</span><br>
<span class="no">one of the most beautiful place</span> → <span class="yes">one of the most beautiful places</span></div>`
          },
          {
            id: 'gram-form',
            type: 'gap',
            title: 'Make superlatives',
            instructions: 'Напиши найвищий ступінь (разом з the).',
            items: [
              { id: 'g1', text: 'high → {{the highest}}' },
              { id: 'g2', text: 'big → {{the biggest}}' },
              { id: 'g3', text: 'dry → {{the driest}}' },
              { id: 'g4', text: 'dangerous → {{the most dangerous}}' },
              { id: 'g5', text: 'good → {{the best}}' },
              { id: 'g6', text: 'bad → {{the worst}}' },
              { id: 'g7', text: 'large → {{the largest}}' },
              { id: 'g8', text: 'beautiful → {{the most beautiful}}' }
            ]
          },
          {
            id: 'gram-sent',
            type: 'choice',
            title: 'Comparative or superlative?',
            instructions: 'Обери вищий чи найвищий ступінь.',
            items: [
              { id: 'c1', q: 'Everest is ___ mountain in the world.', options: ['higher', 'the highest'], answer: 1 },
              { id: 'c2', q: 'The Nile is ___ than the Dnipro.', options: ['longer', 'the longest'], answer: 0 },
              { id: 'c3', q: 'That was ___ day of my life!', options: ['the best', 'better'], answer: 0 },
              { id: 'c4', q: 'This is the coldest month ___ the year.', options: ['in', 'of'], answer: 1 },
              { id: 'c5', q: 'She is the youngest ___ our team.', options: ['in', 'of'], answer: 0 },
              { id: 'c6', q: 'Kyiv is one of the oldest ___ in Europe.', options: ['city', 'cities'], answer: 1 }
            ]
          },
          {
            id: 'gram-quiz',
            type: 'gap',
            title: 'Ukraine quiz',
            instructions: 'Встав прикметник у найвищому ступені.',
            items: [
              { id: 'u1', text: 'Hoverla is {{the highest}} mountain in Ukraine. (high)' },
              { id: 'u2', text: 'Kyiv is {{the biggest|the largest}} city in Ukraine. (big)' },
              { id: 'u3', text: 'January is usually {{the coldest}} month. (cold)' },
              { id: 'u4', text: 'For me, Lviv is {{the most beautiful}} city in the country. (beautiful)' },
              { id: 'u5', text: 'Borscht is {{the most famous}} Ukrainian dish. (famous)' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Це найкращий фільм, який я колись бачив.', answer: "It's the best film I've ever seen." },
              { id: 'o2', prompt: 'Байкал — найглибше озеро у світі.', answer: 'Baikal is the deepest lake in the world.', extra: ['of'] },
              { id: 'o3', prompt: 'Це одне з найнебезпечніших місць на Землі.', answer: 'It is one of the most dangerous places on Earth.' },
              { id: 'o4', prompt: 'Це найдешевший з трьох готелів.', answer: 'This is the cheapest of the three hotels.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: вищий ступінь',
            instructions: 'Згадаймо урок 1. Встав вищий ступінь + than.',
            items: [
              { id: 'r1', text: 'The Nile is {{longer than}} the Danube. (long)' },
              { id: 'r2', text: 'The Atacama is {{drier than}} the Sahara. (dry)' },
              { id: 'r3', text: 'Climbing Everest is {{more dangerous than}} climbing Hoverla. (dangerous)' },
              { id: 'r4', text: 'Today the weather is {{better than}} yesterday. (good)' }
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
            title: 'A travel quiz show',
            instructions: 'Учасники телевікторини відповідають на питання про світ. Послухай.',
            audio: {
              title: 'Quiz show: Host, Olena & Petro',
              lines: [
                { who: 'Host', text: 'Question one: what is the largest ocean in the world?' },
                { who: 'Olena', text: 'The Pacific Ocean!' },
                { who: 'Host', text: 'Correct! Question two: what is the smallest country in the world?' },
                { who: 'Petro', text: 'Is it Monaco?' },
                { who: 'Host', text: 'No, sorry. It’s the Vatican City. Monaco is the second smallest. Question three: which is the busiest airport in Europe?' },
                { who: 'Olena', text: 'I think it’s Istanbul.' },
                { who: 'Host', text: 'Yes! In recent years it’s been one of the busiest. Final question: what is the most visited city in the world?' },
                { who: 'Petro', text: 'Paris? No — Bangkok!' },
                { who: 'Host', text: 'Correct! Well done. Olena has three points, Petro has one. Olena is the winner!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What is the largest ocean?', options: ['The Atlantic', 'The Pacific', 'The Indian Ocean'], answer: 1 },
              { id: 'l2', q: 'What is the smallest country?', options: ['Monaco', 'The Vatican City', 'Malta'], answer: 1 },
              { id: 'l3', q: 'Which airport did Olena name?', options: ['London Heathrow', 'Istanbul', 'Paris'], answer: 1 },
              { id: 'l4', q: 'Which city is the most visited?', options: ['Paris', 'London', 'Bangkok'], answer: 2 },
              { id: 'l5', q: 'Who won?', options: ['Olena', 'Petro', 'Nobody'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What is the largest ocean in the world?' },
              { id: 'dc2', text: 'It’s the smallest country in the world.' },
              { id: 'dc3', text: 'It’s one of the busiest airports.' },
              { id: 'dc4', text: 'Olena is the winner.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-best',
            type: 'writing',
            title: 'The best of my country',
            instructions: 'Напиши статтю для іноземних туристів «The best of Ukraine» (або твого регіону).',
            prompt: 'Write a short article (100–130 words).\n• The most beautiful place to visit — and why.\n• The best food to try.\n• The most interesting city / the oldest building / the highest mountain…\n• The worst time to visit (weather?).\n• Use at least 8 superlatives, including “one of the…” and “…I’ve ever…”.',
            minWords: 100,
            maxWords: 140,
            phrases: ['the most beautiful', 'the best', 'one of the', 'the oldest', 'the highest', 'the worst', 'I’ve ever seen'],
            checklist: ['Щонайменше 8 прикметників у найвищому ступені', 'Є the перед кожним', 'in + місце, of + період', 'one of the + множина'],
            model: `The Best of Ukraine

Ukraine is one of the largest countries in Europe, and it has some of the most beautiful places I’ve ever seen.

The most magical place is the Carpathian mountains. Hoverla is the highest mountain in the country, and the views from the top are the best in Ukraine. The oldest city is probably Chernihiv, and Kyiv has some of the most impressive churches.

The best food to try is varenyky — the most popular ones have potato or cherries inside. The worst time to visit is November: it’s the greyest and wettest month of the year. Come in May — it’s the greenest month!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-best',
            type: 'speaking',
            title: 'The best and the worst',
            instructions: 'Відповідай уголос, використовуючи найвищий ступінь.',
            phrases: ['The best… I’ve ever…', 'one of the most…', 'the worst…', 'the most… in my life'],
            tasks: [
              { id: 'sp1', q: 'What is the most beautiful place you’ve ever visited?', tips: 'The most beautiful place I’ve ever visited is … because …', model: 'The most beautiful place I’ve ever visited is Lake Synevyr. The water is the clearest I’ve ever seen.' },
              { id: 'sp2', q: 'What was the best and the worst day of last year?', tips: 'The best day was … The worst day was …', model: 'The best day was my sister’s wedding. The worst day was when I lost my phone.' },
              { id: 'sp3', q: 'Who is the funniest / the kindest / the most interesting person you know?', tips: 'The funniest person I know is …', model: 'The funniest person I know is my uncle. He tells the best jokes in our family.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'world': 'світ', 'records': 'рекорди', 'planet': 'планета', 'full of': 'повний', 'amazing': 'дивовижні', 'places': 'місця', 'most': 'най- (найбільш)',
      'extraordinary': 'надзвичайні', 'highest': 'найвищий', 'mountain': 'гора', 'mount everest': 'гора Еверест', 'himalayas': 'Гімалаї', 'metres': 'метри',
      'high': 'висотою', 'weather': 'погода', 'top': 'вершина', 'coldest': 'найхолодніший', 'imagine': 'уявити', 'every year': 'щороку', 'hundreds': 'сотні',
      'climbers': 'альпіністи', 'try': 'намагаються', 'reach': 'досягти', 'one of the': 'один з', 'dangerous': 'небезпечний', 'trips': 'подорожі',
      'earth': 'Земля', 'longest': 'найдовша', 'river': 'річка', 'nile': 'Ніл', 'africa': 'Африка', 'kilometres': 'кілометри', 'long': 'завдовжки',
      'however': 'однак', 'amazon': 'Амазонка', 'south america': 'Південна Америка', 'carries': 'несе', 'water': 'вода', 'around': 'навколо', 'grows': 'росте',
      'largest': 'найбільший', 'rainforest': 'тропічний ліс', 'greatest': 'найбільший', 'number': 'кількість', 'animal': 'тварина', 'plant': 'рослина',
      'species': 'види', 'deepest': 'найглибше', 'lake': 'озеро', 'baikal': 'Байкал', 'also': 'також', 'oldest': 'найстаріше', 'million': 'мільйон',
      'years old': 'років', 'driest': 'найсухіше', 'desert': 'пустеля', 'chile': 'Чилі', 'parts': 'частини', "hasn't rained": 'не було дощу',
      'country': 'країна', 'flows': 'тече', 'entirely': 'повністю', 'through': 'через', 'beautiful': 'гарний', 'simply': 'просто', 'home': 'дім',
      'warmest': 'найтепліше', 'newest': 'найновіше', 'danube': 'Дунай', 'safe': 'безпечний', 'climbing': 'сходження', 'ocean': 'океан', 'sea': 'море',
      'island': 'острів', 'waterfall': 'водоспад', 'coast': 'узбережжя', 'population': 'населення', 'greenland': 'Гренландія', 'pacific': 'Тихий океан',
      'falls': 'водоспад', 'few': 'небагато', 'height': 'висота', 'length': 'довжина', 'depth': 'глибина', 'wide': 'широкий', 'width': 'ширина',
      'heat': 'спека', 'dry': 'сухий', 'dryness': 'сухість', 'large': 'великий', 'size': 'розмір', 'age': 'вік', 'peninsula': 'півострів',
      'heard': 'почули', 'black sea': 'Чорне море', 'best': 'найкращий', 'worst': 'найгірший', 'furthest': 'найдальший', 'least': 'найменш',
      'ever': 'коли-небудь', 'film': 'фільм', 'seen': 'бачив', 'student': 'студент', 'class': 'клас', 'day': 'день', 'life': 'життя', 'cheapest': 'найдешевший',
      'hotels': 'готелі', 'month': 'місяць', 'year': 'рік', 'youngest': 'наймолодша', 'team': 'команда', 'cities': 'міста', 'europe': 'Європа',
      'january': 'січень', 'usually': 'зазвичай', 'famous': 'відомий', 'dish': 'страва', 'quiz': 'вікторина', 'show': 'шоу', 'question': 'питання',
      'correct': 'правильно', 'smallest': 'найменша', 'monaco': 'Монако', 'vatican city': 'Ватикан', 'second': 'другий', 'busiest': 'найзавантаженіший',
      'airport': 'аеропорт', 'recent years': 'останні роки', 'final': 'останнє', 'visited': 'відвідуване', 'well done': 'молодці', 'points': 'бали',
      'winner': 'переможець', 'atlantic': 'Атлантичний', 'indian ocean': 'Індійський океан', 'nobody': 'ніхто', 'article': 'стаття', 'magical': 'чарівний',
      'views': 'краєвиди', 'probably': 'мабуть', 'impressive': 'вражаючі', 'churches': 'церкви', 'food': 'їжа', 'popular': 'популярні', 'potato': 'картопля',
      'cherries': 'вишні', 'inside': 'всередині', 'greyest': 'найсіріший', 'wettest': 'найвологіший', 'greenest': 'найзеленіший', 'clearest': 'найпрозоріша',
      'wedding': 'весілля', 'lost': 'загубив', 'funniest': 'найсмішніша', 'kindest': 'найдобріша', 'interesting': 'цікава', 'uncle': 'дядько',
      'jokes': 'жарти', 'family': 'сім’я', "it's": 'це (є)', "i've ever seen": 'я колись бачив'
    }
  });
})();
