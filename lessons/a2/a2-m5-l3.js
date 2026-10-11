/*
 * A2 · Module 5 · Lesson 3 — Healthy eating (a lot of, much / many, a few / a little, too much / too many)
 * Review: countable / uncountable (A1), should / have to (lessons 1–2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'What’s in your food diary?',
    text: `Nutritionist Maryna Koval looked at the food diaries of two clients for one week. Here are her comments.

Danylo, 26, programmer: “Danylo eats a lot of pasta and bread, but he doesn’t eat many vegetables — only a few tomatoes on his pizza! He drinks too much cola and too many cups of coffee: seven a day. He also eats a lot of snacks at his desk, especially crisps, which have too much salt. He should eat some fruit instead and drink more water. He doesn’t have much time to cook, so he should try simple homemade meals.”

Halyna, 58, teacher: “Halyna’s diet is quite healthy. She eats lots of vegetables and fish, and she cooks most of her meals at home. However, she doesn’t eat enough protein in the morning — just a little porridge and a cup of tea. She puts a little sugar in her tea, which is fine, but she eats a few biscuits every afternoon. That’s not a big problem, but she shouldn’t eat too many.”

Maryna’s advice for everyone: “You don’t have to stop eating your favourite food. Just eat less of it, and eat a lot more vegetables!”`
  };

  ENG.registerLesson({
    id: 'a2-m5-l3',
    level: 'a2',
    title: 'Healthy eating. Здорове харчування',
    subtitle: 'a lot of · much / many · a few / a little · too much / too many · enough',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Two food diaries',
            instructions: 'Прочитай коментарі нутриціологині до харчових щоденників.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What does Danylo eat a lot of?', options: ['Vegetables', 'Pasta and bread', 'Fish'], answer: 1 },
              { id: 'q2', q: 'How many cups of coffee does he drink a day?', options: ['Two', 'Five', 'Seven'], answer: 2 },
              { id: 'q3', q: 'What is the problem with crisps?', options: ['Too much sugar', 'Too much salt', 'Too expensive'], answer: 1 },
              { id: 'q4', q: 'What does Halyna not eat enough of in the morning?', options: ['Protein', 'Sugar', 'Fruit'], answer: 0 },
              { id: 'q5', q: 'What is Maryna’s general advice?', options: ['Stop eating your favourite food.', 'Eat less of it and more vegetables.', 'Only eat fish.'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Danylo eats a lot of vegetables.', answer: false, explain: '“…he doesn’t eat many vegetables.”' },
              { id: 's2', s: 'Danylo has a lot of time to cook.', answer: false, explain: '“He doesn’t have much time to cook.”' },
              { id: 's3', s: 'Halyna cooks most of her meals at home.', answer: true },
              { id: 's4', s: 'Halyna puts a lot of sugar in her tea.', answer: false, explain: '“She puts a little sugar in her tea.”' },
              { id: 's5', s: 'Halyna eats a few biscuits every afternoon.', answer: true }
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
            title: 'Food & nutrition',
            instructions: 'Слова про харчування. Зверни увагу, які з них злічувані, а які — ні.',
            cards: [
              { front: 'diet', ipa: '/ˈdaɪət/', back: 'раціон; дієта', example: 'She has a healthy diet.' },
              { front: 'protein', ipa: '/ˈprəʊtiːn/', back: 'білок', example: 'Eggs have a lot of protein.' },
              { front: 'salt / sugar (U)', back: 'сіль / цукор (незлічувані)', example: 'Crisps have too much salt.' },
              { front: 'fat (U)', back: 'жир', example: 'Fried food has a lot of fat.' },
              { front: 'vitamins', ipa: '/ˈvɪtəmɪnz/', back: 'вітаміни', example: 'Fruit is full of vitamins.' },
              { front: 'snack', back: 'перекус', example: 'I eat a snack at 4 p.m.' },
              { front: 'meal', ipa: '/miːl/', back: 'прийом їжі, страва', example: 'Breakfast is my favourite meal.' },
              { front: 'homemade', back: 'домашній (приготований удома)', example: 'Homemade soup is the best.' },
              { front: 'processed food', back: 'перероблена їжа', example: 'Try to eat less processed food.' },
              { front: 'portion', ipa: '/ˈpɔːʃn/', back: 'порція', example: 'The portions here are huge!' },
              { front: 'nutritionist', ipa: '/njuˈtrɪʃənɪst/', back: 'нутриціолог', example: 'My nutritionist says I need more fibre.' },
              { front: 'instead', ipa: '/ɪnˈsted/', back: 'натомість', example: 'Drink water instead of cola.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Match the words',
            instructions: 'Поєднай слово з перекладом.',
            pairs: [
              ['diet', 'раціон'],
              ['protein', 'білок'],
              ['salt', 'сіль'],
              ['snack', 'перекус'],
              ['meal', 'прийом їжі'],
              ['homemade', 'домашній'],
              ['portion', 'порція'],
              ['instead', 'натомість']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Healthy or not?',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Fish and eggs are full of {{protein}}.' },
              { id: 'd2', text: 'Oranges have a lot of {{vitamins}}.' },
              { id: 'd3', text: 'Fried chips have too much {{fat}}.' },
              { id: 'd4', text: 'Have an apple as a {{snack}}, not crisps.' },
              { id: 'd5', text: 'The {{portions}} in this restaurant are too big.' },
              { id: 'd6', text: 'Dinner is the biggest {{meal}} of the day for many people.' }
            ],
            distractors: ['nutritionist']
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
            title: 'Quantifiers: how much and how many?',
            instructions: 'Слова кількості залежать від того, злічуваний іменник чи ні. Згадаймо A1 і поглибимо.',
            html: `
<h3>1. Нагадування: злічувані й незлічувані</h3>
<p><b>Злічувані</b> (є множина): eggs, vegetables, biscuits, cups. <b>Незлічувані</b>: sugar, salt, water, bread, time, money, food.</p>

<h3>2. Велика кількість</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>злічувані</th><th>незлічувані</th></tr>
  <tr><td><b>+</b> (ствердження)</td><td><b>a lot of / lots of</b> vegetables</td><td><b>a lot of / lots of</b> water</td></tr>
  <tr><td><b>−</b> і <b>?</b></td><td>not <b>many</b> vegetables · How <b>many</b>?</td><td>not <b>much</b> time · How <b>much</b>?</td></tr>
</table></div>
<p>💡 У ствердженнях <b>a lot of</b> звучить природніше: <span class="muted">He eats much bread.</span> → <span class="yes">He eats a lot of bread.</span></p>

<h3>3. Невелика кількість: a few / a little</h3>
<div class="table-wrap"><table>
  <tr><th>a few + злічувані</th><th>a little + незлічувані</th></tr>
  <tr><td>a <b>few</b> tomatoes, a <b>few</b> biscuits (кілька)</td><td>a <b>little</b> sugar, a <b>little</b> porridge (трохи)</td></tr>
</table></div>

<h3>4. Занадто багато: too much / too many</h3>
<div class="ex-line">He drinks <b>too much</b> cola. <span class="muted">(незлічуване)</span> · He drinks <b>too many</b> cups of coffee. <span class="muted">(злічуване)</span></div>
<p>Протилежність: <b>not enough</b> + іменник: She doesn’t eat <b>enough</b> protein.</p>

<h3>5. Підсумкова таблиця</h3>
<div class="table-wrap"><table>
  <tr><th>Кількість</th><th>Злічувані (eggs)</th><th>Незлічувані (salt)</th></tr>
  <tr><td>занадто багато</td><td>too many</td><td>too much</td></tr>
  <tr><td>багато</td><td>a lot of / many (−?)</td><td>a lot of / much (−?)</td></tr>
  <tr><td>достатньо</td><td>enough</td><td>enough</td></tr>
  <tr><td>трохи, кілька</td><td>a few</td><td>a little</td></tr>
  <tr><td>немає</td><td>no / not any</td><td>no / not any</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">How much eggs?</span> → <span class="yes">How many eggs?</span><br>
<span class="no">a few sugar</span> → <span class="yes">a little sugar</span><br>
<span class="no">too much vegetables</span> → <span class="yes">too many vegetables</span><br>
<span class="no">I don’t have many time.</span> → <span class="yes">I don’t have much time.</span></div>`
          },
          {
            id: 'gram-muchmany',
            type: 'choice',
            title: 'much or many?',
            instructions: 'Обери much або many.',
            items: [
              { id: 'c1', q: 'How ___ cups of coffee do you drink?', options: ['much', 'many'], answer: 1 },
              { id: 'c2', q: 'How ___ sugar do you take in your tea?', options: ['much', 'many'], answer: 0 },
              { id: 'c3', q: 'I don’t have ___ time to cook.', options: ['much', 'many'], answer: 0 },
              { id: 'c4', q: 'There aren’t ___ vegetables in the fridge.', options: ['much', 'many'], answer: 1 },
              { id: 'c5', q: 'How ___ money did you spend?', options: ['much', 'many'], answer: 0 },
              { id: 'c6', q: 'He doesn’t eat ___ biscuits.', options: ['much', 'many'], answer: 1 }
            ]
          },
          {
            id: 'gram-fewlittle',
            type: 'gap',
            title: 'a few or a little?',
            instructions: 'Встав few або little.',
            items: [
              { id: 'g1', text: 'Add a {{little}} salt to the soup.' },
              { id: 'g2', text: 'I bought a {{few}} apples at the market.' },
              { id: 'g3', text: 'Can I have a {{little}} milk in my coffee?' },
              { id: 'g4', text: 'We have a {{few}} eggs, so let’s make an omelette.' },
              { id: 'g5', text: 'She eats a {{little}} porridge for breakfast.' },
              { id: 'g6', text: 'There are a {{few}} biscuits left.' }
            ]
          },
          {
            id: 'gram-too',
            type: 'gap',
            title: 'too much / too many / enough',
            instructions: 'Встав too much, too many або enough.',
            items: [
              { id: 't1', text: 'Danylo drinks {{too much}} cola.' },
              { id: 't2', text: 'He drinks {{too many}} cups of coffee.' },
              { id: 't3', text: 'Halyna doesn’t eat {{enough}} protein in the morning.' },
              { id: 't4', text: 'Crisps have {{too much}} salt.' },
              { id: 't5', text: 'There are {{too many}} people in this small café.' },
              { id: 't6', text: 'Do we have {{enough}} bread for everyone?' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Скільки води ти п’єш?', answer: 'How much water do you drink?', extra: ['many'] },
              { id: 'o2', prompt: 'Він їсть забагато солодощів.', answer: 'He eats too many sweets.' },
              { id: 'o3', prompt: 'У мене немає багато часу.', answer: "I don't have much time." },
              { id: 'o4', prompt: 'Додай трохи цукру.', answer: 'Add a little sugar.', extra: ['few'] }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: should, have to, some/any',
            instructions: 'Згадаймо уроки 1–2 і A1.',
            items: [
              { id: 'r1', q: 'Danylo ___ eat more fruit.', options: ['should', 'shoulds', 'should to'], answer: 0 },
              { id: 'r2', q: 'You ___ stop eating chocolate — just eat less.', options: ['mustn’t', 'don’t have to'], answer: 1 },
              { id: 'r3', q: 'Are there ___ vegetables in his diet?', options: ['some', 'any'], answer: 1 },
              { id: 'r4', q: 'He should eat ___ fruit instead of crisps.', options: ['some', 'any'], answer: 0 }
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
            title: 'Planning a healthy menu',
            instructions: 'Подружжя складає меню на тиждень і список покупок. Послухай.',
            audio: {
              title: 'Dialogue: Anna & Ihor',
              lines: [
                { who: 'Anna', text: 'OK, let’s make a healthy menu for next week. How many eggs do we have?' },
                { who: 'Ihor', text: 'Only a few. Three, I think. We need a lot more — let’s buy twelve.' },
                { who: 'Anna', text: 'And vegetables? We don’t eat enough.' },
                { who: 'Ihor', text: 'True. Let’s buy lots of broccoli and carrots. But not too many tomatoes — they go bad quickly.' },
                { who: 'Anna', text: 'How much rice is there?' },
                { who: 'Ihor', text: 'Not much. Just a little at the bottom of the packet.' },
                { who: 'Anna', text: 'And no more crisps, Ihor! You eat too many.' },
                { who: 'Ihor', text: 'Fine… but can I have a little dark chocolate on Friday?' }
              ]
            },
            items: [
              { id: 'l1', q: 'How many eggs do they have now?', options: ['None', 'A few — about three', 'Twelve'], answer: 1 },
              { id: 'l2', q: 'Why don’t they want too many tomatoes?', options: ['They’re expensive.', 'They go bad quickly.', 'Ihor doesn’t like them.'], answer: 1 },
              { id: 'l3', q: 'How much rice is there?', options: ['A lot', 'Not much — a little', 'None'], answer: 1 },
              { id: 'l4', q: 'What does Anna say Ihor eats too many of?', options: ['Biscuits', 'Crisps', 'Sweets'], answer: 1 },
              { id: 'l5', q: 'What does Ihor want on Friday?', options: ['A little dark chocolate', 'A pizza', 'Some crisps'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'How many eggs do we have?' },
              { id: 'dc2', text: 'We don’t eat enough vegetables.' },
              { id: 'dc3', text: 'There is just a little rice.' },
              { id: 'dc4', text: 'You eat too many crisps.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-diary',
            type: 'writing',
            title: 'My food diary',
            instructions: 'Опиши свій звичайний раціон і оціни, наскільки він здоровий.',
            prompt: 'Write about your diet (100–120 words).\n• What do you usually eat and drink every day? (a lot of, a few, a little)\n• What do you eat too much / too many of?\n• What don’t you eat enough of?\n• What should you change? (should / have to)\n• Use How much / How many in one question to the reader.',
            minWords: 100,
            maxWords: 130,
            phrases: ['I eat a lot of', 'a few', 'a little', 'too much', 'too many', 'enough', 'I should'],
            checklist: ['much / too much — з незлічуваними', 'many / too many / a few — зі злічуваними', 'a little — з незлічуваними', 'Є enough', 'Є план змін з should'],
            model: `My diet is not perfect. For breakfast I usually have a little porridge and a lot of coffee — three or four cups before lunch! At work I eat a few biscuits with my colleagues.

I eat lots of vegetables at dinner, because my husband loves cooking salads. But I don’t eat enough fruit, and I don’t drink much water.

I think I eat too much bread and too many sweets at the weekend. I should drink more water and buy a few apples for work instead of biscuits.

What about you? How many cups of coffee do you drink a day?`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-food',
            type: 'speaking',
            title: 'Food habits',
            instructions: 'Відповідай уголос, використовуючи слова кількості.',
            phrases: ['I eat a lot of…', 'I don’t eat much / many…', 'a few / a little', 'too much / too many', 'not enough'],
            tasks: [
              { id: 'sp1', q: 'What do you usually have for breakfast? How much / how many?', tips: 'I have a little … and a few …', model: 'I have a little yoghurt, a few strawberries and a big cup of tea.' },
              { id: 'sp2', q: 'What do you eat or drink too much of? What don’t you eat enough of?', tips: 'I eat too much … / too many … I don’t eat enough …', model: 'I drink too much coffee and eat too many sweets. I don’t eat enough fish.' },
              { id: 'sp3', q: 'Give advice to a friend who eats a lot of fast food.', tips: 'You should … You don’t have to … but …', model: 'You should cook at home more. You don’t have to stop eating burgers, but you should eat fewer of them.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'food diary': 'харчовий щоденник', 'nutritionist': 'нутриціолог', 'looked at': 'переглянула', 'clients': 'клієнти', 'week': 'тиждень',
      'comments': 'коментарі', 'programmer': 'програміст', 'a lot of': 'багато', 'pasta': 'макарони', 'bread': 'хліб', 'many': 'багато (злічуваних)',
      'vegetables': 'овочі', 'only': 'лише', 'a few': 'кілька', 'tomatoes': 'помідори', 'pizza': 'піца', 'drinks': 'п’є', 'too much': 'забагато (незлічуваного)',
      'cola': 'кола', 'too many': 'забагато (злічуваних)', 'cups': 'чашки', 'coffee': 'кава', 'a day': 'на день', 'also': 'також', 'snacks': 'перекуси',
      'desk': 'робочий стіл', 'especially': 'особливо', 'crisps': 'чипси', 'salt': 'сіль', 'should': 'варто', 'fruit': 'фрукти', 'instead': 'натомість',
      'water': 'вода', 'much': 'багато (незлічуваного)', 'time': 'час', 'cook': 'готувати', 'try': 'спробувати', 'simple': 'прості', 'homemade': 'домашні',
      'meals': 'страви', 'teacher': 'вчителька', 'diet': 'раціон', 'quite': 'досить', 'healthy': 'здоровий', 'lots of': 'багато', 'fish': 'риба',
      'most': 'більшість', 'at home': 'вдома', 'however': 'однак', 'enough': 'достатньо', 'protein': 'білок', 'morning': 'ранок', 'just': 'лише',
      'a little': 'трохи', 'porridge': 'каша', 'tea': 'чай', 'puts': 'кладе', 'sugar': 'цукор', 'fine': 'нормально', 'biscuits': 'печиво',
      'every afternoon': 'щодня після обіду', 'big problem': 'велика проблема', 'advice': 'порада', 'everyone': 'всі', "don't have to": 'не обов’язково',
      'stop': 'припиняти', 'favourite': 'улюблена', 'less': 'менше', 'more': 'більше', 'expensive': 'дорогі', 'general': 'загальна', 'fat': 'жир',
      'vitamins': 'вітаміни', 'snack': 'перекус', 'meal': 'прийом їжі', 'processed food': 'перероблена їжа', 'portion': 'порція', 'portions': 'порції',
      'huge': 'величезні', 'fibre': 'клітковина', 'eggs': 'яйця', 'fried': 'смажена', 'full of': 'повний', 'breakfast': 'сніданок', 'soup': 'суп',
      'oranges': 'апельсини', 'chips': 'картопля фрі', 'apple': 'яблуко', 'restaurant': 'ресторан', 'dinner': 'вечеря', 'biggest': 'найбільший',
      'add': 'додай', 'bought': 'купила', 'apples': 'яблука', 'market': 'ринок', 'milk': 'молоко', 'omelette': 'омлет', 'left': 'залишилося',
      'people': 'люди', 'café': 'кафе', 'money': 'гроші', 'spend': 'витратити', 'fridge': 'холодильник', 'sweets': 'солодощі', 'chocolate': 'шоколад',
      'menu': 'меню', 'next week': 'наступного тижня', 'twelve': 'дванадцять', 'true': 'правда', 'broccoli': 'броколі', 'carrots': 'морква',
      'go bad': 'псуються', 'quickly': 'швидко', 'rice': 'рис', 'not much': 'небагато', 'bottom': 'дно', 'packet': 'пачка', 'no more': 'більше ніяких',
      'dark chocolate': 'чорний шоколад', 'friday': 'п’ятниця', 'none': 'нічого', 'perfect': 'ідеальний', 'colleagues': 'колеги', 'husband': 'чоловік',
      'salads': 'салати', 'weekend': 'вихідні', 'what about you': 'а ти?', 'yoghurt': 'йогурт', 'strawberries': 'полуниці', 'fast food': 'фастфуд',
      'burgers': 'бургери', 'fewer': 'менше'
    }
  });
})();
