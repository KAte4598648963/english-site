/*
 * A2 · Module 3 · Lesson 4 — Review: Where shall we go?
 * Reviews: comparatives, superlatives, too / enough, (not) as … as.
 * Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Three holidays, one decision',
    text: `The Kravets family — Mum, Dad, and their teenagers Sasha and Dana — can’t decide where to go this summer. They have three options.

Option 1: Odesa. It’s the closest and the cheapest choice — only six hours by train. The beaches are crowded in July, but the food is the best of all three. Dana says it’s too boring: “We go there every year!”

Option 2: The Carpathians. It’s much cooler than the coast, which Dad loves because he hates hot weather. The hiking is amazing, and the guesthouse is the most comfortable of the three. But Sasha says the internet isn’t fast enough for his online games, and Mum thinks it’s too far to drive in one day.

Option 3: Croatia. It’s definitely the most exciting option. The sea is cleaner and warmer than the Black Sea, and the old towns are beautiful. However, it’s the most expensive trip by far — almost twice as expensive as Odesa. The flights alone cost more than the whole Odesa holiday.

In the end they voted. The Carpathians weren’t as popular as Croatia, but Croatia was too expensive this year. So … Odesa won again. Dana wasn’t happy, but she admitted the ice cream there is the best in the world.`
  };

  ENG.registerLesson({
    id: 'a2-m3-l4',
    level: 'a2',
    title: 'Review: Where shall we go?',
    subtitle: 'Повторення модуля 3: -er / more, the -est / the most, too / enough, as … as',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Choosing a holiday',
            instructions: 'Прочитай, як сім’я обирає, куди поїхати влітку.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Which option is the cheapest?', options: ['Odesa', 'The Carpathians', 'Croatia'], answer: 0 },
              { id: 'q2', q: 'Why does Dad like the Carpathians?', options: ['It’s cooler there.', 'The food is the best.', 'It’s the closest.'], answer: 0 },
              { id: 'q3', q: 'What is Sasha’s problem with the Carpathians?', options: ['It’s too cold.', 'The internet isn’t fast enough.', 'There are no beaches.'], answer: 1 },
              { id: 'q4', q: 'How expensive is Croatia compared to Odesa?', options: ['The same', 'Almost twice as expensive', 'A bit cheaper'], answer: 1 },
              { id: 'q5', q: 'Where are they going in the end?', options: ['Croatia', 'The Carpathians', 'Odesa'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Odesa is the closest option.', answer: true },
              { id: 's2', s: 'The guesthouse in the Carpathians is the least comfortable.', answer: false, explain: 'It’s the most comfortable.' },
              { id: 's3', s: 'The sea in Croatia is warmer than the Black Sea.', answer: true },
              { id: 's4', s: 'The Carpathians were more popular than Croatia in the vote.', answer: false, explain: '“The Carpathians weren’t as popular as Croatia.”' },
              { id: 's5', s: 'Dana thinks the ice cream in Odesa is the best in the world.', answer: true }
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
            title: 'Decisions + module review',
            instructions: 'Нові слова з тексту і повторення модуля 3.',
            cards: [
              { front: 'decide', ipa: '/dɪˈsaɪd/', back: 'вирішувати', example: 'We can’t decide where to go.' },
              { front: 'option / choice', ipa: '/ˈɒpʃn/ /tʃɔɪs/', back: 'варіант / вибір', example: 'We have three options.' },
              { front: 'definitely', ipa: '/ˈdefɪnətli/', back: 'безумовно', example: 'It’s definitely the best choice.' },
              { front: 'by far', back: 'значно, безумовно (з найвищим ступенем)', example: 'It’s by far the most expensive.' },
              { front: 'twice as … as', back: 'удвічі більш …, ніж', example: 'It’s twice as expensive as Odesa.' },
              { front: 'vote', ipa: '/vəʊt/', back: 'голосувати', example: 'In the end they voted.' },
              { front: 'admit', ipa: '/ədˈmɪt/', back: 'визнавати', example: 'She admitted it was good.' },
              { front: 'peaceful', back: 'спокійний', example: 'The village is peaceful.' },
              { front: 'coast', back: 'узбережжя', example: 'We stayed on the coast.' },
              { front: 'refund', back: 'повернення коштів', example: 'I asked for a refund.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Module 3 words',
            instructions: 'Поєднай слова модуля 3 з перекладом.',
            pairs: [
              ['polluted', 'забруднений'],
              ['traffic', 'затори'],
              ['desert', 'пустеля'],
              ['waterfall', 'водоспад'],
              ['tight', 'тісний'],
              ['receipt', 'чек'],
              ['option', 'варіант'],
              ['definitely', 'безумовно']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Holiday plans',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'We have two {{options}}: the sea or the mountains.' },
              { id: 'd2', text: 'It’s hard to {{decide}} — both are great!' },
              { id: 'd3', text: 'Let’s {{vote}}: hands up for the sea!' },
              { id: 'd4', text: 'Croatia is {{definitely}} more exciting.' },
              { id: 'd5', text: 'It’s {{twice}} as expensive as last year’s trip.' },
              { id: 'd6', text: 'I {{admit}} it — you were right.' }
            ],
            distractors: ['receipt']
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
            title: 'Module 3 grammar — summary',
            instructions: 'Уся система порівнянь в одній таблиці.',
            html: `
<h3>1. Три ступені</h3>
<div class="table-wrap"><table>
  <tr><th>Звичайний</th><th>Вищий (+ than)</th><th>Найвищий (the …)</th></tr>
  <tr><td>cheap</td><td>cheap<b>er</b></td><td>the cheap<b>est</b></td></tr>
  <tr><td>close</td><td>close<b>r</b></td><td>the close<b>st</b></td></tr>
  <tr><td>hot</td><td>ho<b>tt</b>er</td><td>the ho<b>tt</b>est</td></tr>
  <tr><td>busy</td><td>bus<b>ier</b></td><td>the bus<b>iest</b></td></tr>
  <tr><td>expensive</td><td><b>more</b> expensive</td><td><b>the most</b> expensive</td></tr>
  <tr><td>good / bad / far</td><td>better / worse / further</td><td>the best / the worst / the furthest</td></tr>
</table></div>
<p>Підсилення: <b>much / a lot / a bit</b> + вищий; <b>by far</b> + найвищий: by far the most expensive.</p>

<h3>2. too / enough</h3>
<div class="ex-line">It’s <b>too</b> far. · The internet isn’t fast <b>enough</b>. · We don’t have <b>enough</b> money.</div>

<h3>3. as … as</h3>
<div class="ex-line">The Carpathians weren’t <b>as</b> popular <b>as</b> Croatia. · It’s <b>twice as</b> expensive <b>as</b> Odesa.</div>

<div class="tip">✅ <b>Чек-лист модуля 3 (A2)</b> — я вмію:<br>
• порівнювати місця, речі й людей (bigger, more peaceful, better);<br>
• говорити про рекорди і найкраще / найгірше (the highest, the best);<br>
• пояснити проблему з річчю (too small, not warm enough);<br>
• сказати, що щось однакове або різне (as … as, not as … as).</div>`
          },
          {
            id: 'gram-mix',
            type: 'gap',
            title: 'Module 3 mix',
            instructions: 'Встав прикметник у потрібній формі або too / enough / as.',
            items: [
              { id: 'g1', text: 'Odesa is {{the cheapest}} of the three options. (cheap)' },
              { id: 'g2', text: 'The Carpathians are {{cooler}} than the coast. (cool)' },
              { id: 'g3', text: 'Croatia is {{the most expensive}} trip. (expensive)' },
              { id: 'g4', text: 'The internet isn’t fast {{enough}} for Sasha.' },
              { id: 'g5', text: 'Mum thinks it’s {{too}} far to drive in one day.' },
              { id: 'g6', text: 'The food in Odesa is {{the best}} of all. (good)' },
              { id: 'g7', text: 'Croatia is twice {{as}} expensive as Odesa.' }
            ]
          },
          {
            id: 'gram-correct',
            type: 'choice',
            title: 'Find the correct sentence',
            instructions: 'Яке речення правильне?',
            items: [
              { id: 'c1', q: 'Обери правильне:', options: ['It’s more cheaper.', 'It’s cheaper.', 'It’s the more cheap.'], answer: 1 },
              { id: 'c2', q: 'Обери правильне:', options: ['It’s the best hotel of the city.', 'It’s the best hotel in the city.', 'It’s best hotel in the city.'], answer: 1 },
              { id: 'c3', q: 'Обери правильне:', options: ['It isn’t enough warm.', 'It isn’t warm enough.', 'It isn’t too warm enough.'], answer: 1 },
              { id: 'c4', q: 'Обери правильне:', options: ['She’s as tall as her mum.', 'She’s as taller as her mum.', 'She’s as tall than her mum.'], answer: 0 },
              { id: 'c5', q: 'Обери правильне:', options: ['The weather is very worse today.', 'The weather is much worse today.', 'The weather is more bad today.'], answer: 1 },
              { id: 'c6', q: 'Обери правильне:', options: ['It’s one of the most beautiful city.', 'It’s one of the most beautiful cities.', 'It’s one of most beautiful cities.'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Holiday debate',
            instructions: 'Склади речення з суперечки родини.',
            items: [
              { id: 'o1', prompt: 'Одеса набагато ближча, ніж Хорватія.', answer: 'Odesa is much closer than Croatia.' },
              { id: 'o2', prompt: 'Це безумовно найдорожча поїздка.', answer: "It's by far the most expensive trip." },
              { id: 'o3', prompt: 'Інтернет недостатньо швидкий.', answer: "The internet isn't fast enough." },
              { id: 'o4', prompt: 'Море там не таке тепле, як у Хорватії.', answer: 'The sea there is not as warm as in Croatia.' }
            ]
          },
          {
            id: 'gram-m12',
            type: 'choice',
            title: '↺ Modules 1–2 review',
            instructions: 'Повторення модулів 1–2 рівня A2.',
            items: [
              { id: 'm1', q: 'Every summer they ___ to Odesa.', options: ['go', 'are going', 'were going'], answer: 0 },
              { id: 'm2', q: 'They ___ to go to Croatia when they were students.', options: ['use', 'used', 'using'], answer: 1 },
              { id: 'm3', q: 'While they ___ about the trip, Dana was sending messages.', options: ['talked', 'were talking', 'talk'], answer: 1 },
              { id: 'm4', q: 'It’s a guesthouse ___ the owners cook breakfast for you.', options: ['which', 'who', 'where'], answer: 2 },
              { id: 'm5', q: 'Sasha played ___ and won the game.', options: ['good', 'well', 'better than'], answer: 1 }
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
            title: 'At the travel agency',
            instructions: 'Клієнтка обирає готель у турагентстві. Послухай.',
            audio: {
              title: 'Dialogue: Agent & Client',
              lines: [
                { who: 'Agent', text: 'So, we have three hotels in Odesa. The Sea Breeze is the closest to the beach — just two minutes away.' },
                { who: 'Client', text: 'Is it expensive?' },
                { who: 'Agent', text: 'It’s the most expensive of the three. The Park Hotel is cheaper, but it’s further from the sea — about fifteen minutes on foot.' },
                { who: 'Client', text: 'Hmm, fifteen minutes is too far with two teenagers. They’re too lazy!' },
                { who: 'Agent', text: 'Then there’s the Riviera. It isn’t as close as the Sea Breeze, but it has the biggest pool and the best breakfast.' },
                { who: 'Client', text: 'Is the Wi-Fi good enough? My son plays games online.' },
                { who: 'Agent', text: 'It’s the fastest of the three, actually.' },
                { who: 'Client', text: 'Perfect. We’ll take the Riviera!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Which hotel is the closest to the beach?', options: ['The Park Hotel', 'The Sea Breeze', 'The Riviera'], answer: 1 },
              { id: 'l2', q: 'Which hotel is the most expensive?', options: ['The Park Hotel', 'The Sea Breeze', 'The Riviera'], answer: 1 },
              { id: 'l3', q: 'Why doesn’t the client want the Park Hotel?', options: ['It’s too far from the sea.', 'It’s too expensive.', 'It has no pool.'], answer: 0 },
              { id: 'l4', q: 'What does the Riviera have?', options: ['The biggest pool and the best breakfast', 'The cheapest rooms', 'A sea view'], answer: 0 },
              { id: 'l5', q: 'Which hotel does she choose?', options: ['The Sea Breeze', 'The Park Hotel', 'The Riviera'], answer: 2 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'It’s the most expensive of the three.' },
              { id: 'dc2', text: 'Fifteen minutes is too far.' },
              { id: 'dc3', text: 'It isn’t as close as the Sea Breeze.' },
              { id: 'dc4', text: 'Is the Wi-Fi good enough?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-holiday',
            type: 'writing',
            title: 'Help the family decide',
            instructions: 'Напиши родині Кравців лист-пораду: куди їм варто поїхати і чому.',
            prompt: 'Write an email with advice (110–140 words).\n• Compare the three options (comparatives).\n• Say which is the best / the worst for this family and why (superlatives).\n• Mention problems: too …, not … enough.\n• Use as … as at least once.\n• Give your final recommendation.',
            minWords: 110,
            maxWords: 150,
            phrases: ['I think', 'is cheaper than', 'the best option', 'too', 'enough', 'not as … as', 'I would choose'],
            checklist: ['Порівняння всіх трьох варіантів', 'Є найвищий ступінь з the', 'Є too і enough', 'Є as … as', 'Чітка рекомендація'],
            model: `Dear Kravets family,

I think the Carpathians are the best option for you this year.

Croatia is definitely the most exciting choice, but it’s much more expensive than the other two — and I’m not sure two weeks there is worth the money. Odesa is the cheapest and the closest, but Dana is right: it isn’t as interesting as a new place, and the beaches are too crowded in July.

The Carpathians are cooler, quieter and more peaceful. Dad will be happy, and the guesthouse is the most comfortable. The internet isn’t fast enough for games — but maybe that’s a good thing! Sasha can try hiking instead.

If the drive is too long, stop for a night in Lviv. It’s one of the most beautiful cities in Ukraine.

Best wishes,
Iryna`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-holiday',
            type: 'speaking',
            title: 'Let’s decide!',
            instructions: 'Відповідай уголос. Порівнюй і аргументуй.',
            phrases: ['… is much…er than…', 'the best / the most…', 'It’s too…', '…isn’t…enough', 'It’s not as … as…'],
            tasks: [
              { id: 'sp1', q: 'Which option would you choose for the Kravets family? Why?', tips: 'I’d choose … because it’s … than … The problem with … is that it’s too …', model: 'I’d choose Croatia because it’s the most exciting. Odesa is cheaper, but it’s too boring for teenagers.' },
              { id: 'sp2', q: 'What was the best holiday you’ve ever had? Why was it better than others?', tips: 'The best holiday I’ve ever had was … It was … than …', model: 'The best holiday I’ve ever had was in Georgia. The food was better and the people were friendlier than anywhere else.' },
              { id: 'sp3', q: 'Compare the sea and the mountains. Which do you prefer?', tips: 'The mountains are … The sea isn’t as … as …', model: 'The mountains are cooler and quieter. The sea isn’t as peaceful, but swimming is the best!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'holidays': 'відпустки', 'decision': 'рішення', 'family': 'сім’я', 'teenagers': 'підлітки', "can't decide": 'не можуть вирішити', 'where to go': 'куди поїхати',
      'summer': 'літо', 'options': 'варіанти', 'option': 'варіант', 'closest': 'найближчий', 'cheapest': 'найдешевший', 'choice': 'вибір', 'hours': 'години',
      'by train': 'потягом', 'beaches': 'пляжі', 'crowded': 'переповнені', 'july': 'липень', 'food': 'їжа', 'best': 'найкращий', 'of all': 'з усіх',
      'too': 'занадто', 'boring': 'нудний', 'every year': 'щороку', 'carpathians': 'Карпати', 'much': 'набагато', 'cooler': 'прохолодніше', 'coast': 'узбережжя',
      'hates': 'ненавидить', 'hot': 'спекотна', 'weather': 'погода', 'hiking': 'піші походи', 'amazing': 'чудові', 'guesthouse': 'гостьовий будинок',
      'most comfortable': 'найзручніший', 'internet': 'інтернет', 'fast': 'швидкий', 'enough': 'достатньо', 'online games': 'онлайн-ігри', 'far': 'далеко',
      'drive': 'їхати машиною', 'in one day': 'за один день', 'croatia': 'Хорватія', 'definitely': 'безумовно', 'most exciting': 'найзахопливіший',
      'sea': 'море', 'cleaner': 'чистіше', 'warmer': 'тепліше', 'black sea': 'Чорне море', 'old towns': 'старі міста', 'beautiful': 'гарні',
      'however': 'однак', 'most expensive': 'найдорожчий', 'trip': 'поїздка', 'by far': 'значно', 'almost': 'майже', 'twice as expensive as': 'удвічі дорожчий за',
      'flights': 'перельоти', 'alone': 'лише', 'cost': 'коштують', 'more than': 'більше ніж', 'whole': 'весь', 'in the end': 'зрештою', 'voted': 'проголосували',
      'popular': 'популярний', 'won': 'переміг', 'again': 'знову', 'happy': 'задоволена', 'admitted': 'визнала', 'ice cream': 'морозиво', 'compared to': 'порівняно з',
      'same': 'однаковий', 'decide': 'вирішувати', 'vote': 'голосувати', 'admit': 'визнавати', 'peaceful': 'спокійний', 'refund': 'повернення коштів',
      'polluted': 'забруднений', 'traffic': 'затори', 'desert': 'пустеля', 'waterfall': 'водоспад', 'tight': 'тісний', 'receipt': 'чек', 'hard': 'важко',
      'both': 'обидва', 'great': 'чудові', 'hands up': 'руки вгору', 'exciting': 'захопливий', 'right': 'правий', 'travel agency': 'турагентство',
      'agent': 'агент', 'client': 'клієнтка', 'hotels': 'готелі', 'beach': 'пляж', 'minutes': 'хвилини', 'away': 'звідти', 'cheaper': 'дешевший',
      'further': 'далі', 'on foot': 'пішки', 'lazy': 'ліниві', 'close': 'близько', 'biggest': 'найбільший', 'pool': 'басейн', 'breakfast': 'сніданок',
      'son': 'син', 'plays': 'грає', 'fastest': 'найшвидший', 'actually': 'насправді', 'perfect': 'ідеально', 'take': 'візьмемо', 'rooms': 'номери',
      'sea view': 'вид на море', 'advice': 'порада', 'email': 'лист', 'worth the money': 'варте грошей', 'interesting': 'цікавий', 'new': 'нове',
      'quieter': 'тихіше', 'more peaceful': 'спокійніше', 'maybe': 'можливо', 'good thing': 'добре', 'instead': 'натомість', 'stop': 'зупиніться',
      'night': 'ніч', 'one of the most': 'одне з най…', 'cities': 'міста', 'best wishes': 'з найкращими побажаннями', 'georgia': 'Грузія',
      'friendlier': 'привітніші', 'anywhere else': 'будь-де інде', 'mountains': 'гори', 'swimming': 'плавання', 'prefer': 'віддавати перевагу',
      "it's": 'це (є)', "isn't": 'не є', "weren't": 'не були', "wasn't": 'не була'
    }
  });
})();
