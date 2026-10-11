/*
 * A1 · Module 4 · Lesson 3 — Shopping (countable / uncountable; how much / how many; Can I have…?)
 * Review: some / any (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Saturday at the market',
    text: `Every Saturday morning my grandad and I go to the market. He always has a shopping list, but he never follows it!

First we go to the fruit and vegetable stall. Grandad buys a kilo of tomatoes, some potatoes and six apples. “How much are the strawberries?” he asks. “Four euros a box,” says the woman. “Hmm, that’s expensive. No strawberries today!”

Then we go to the cheese stall. There are a lot of different cheeses. Grandad tries some cheese and buys a big piece. We don’t need any milk — there’s some at home. But we need some eggs: a box of twelve.

Our last stop is the bakery. “Can I have a loaf of bread and two croissants, please?” Grandad says. “How much is that?” — “Three euros fifty.”

We go home with three heavy bags — and only half of the things on the list!`
  };

  ENG.registerLesson({
    id: 'a1-m4-l3',
    level: 'a1',
    title: 'Shopping. Покупки',
    subtitle: 'злічувані й незлічувані іменники · how much / how many · Can I have…?',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'At the market',
            instructions: 'Прочитай розповідь про суботній ринок з дідусем.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'When do they go to the market?', options: ['On Saturday mornings', 'On Sunday evenings', 'Every day'], answer: 0 },
              { id: 'q2', q: 'How many apples does Grandad buy?', options: ['Two', 'Six', 'Twelve'], answer: 1 },
              { id: 'q3', q: 'Why doesn’t he buy strawberries?', options: ['They aren’t fresh.', 'They are expensive.', 'There aren’t any.'], answer: 1 },
              { id: 'q4', q: 'Why don’t they buy milk?', options: ['There is some at home.', 'It’s expensive.', 'Grandad doesn’t like milk.'], answer: 0 },
              { id: 'q5', q: 'How much is the bread and two croissants?', options: ['€3.50', '€4.00', '€5.30'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Grandad always follows his shopping list.', answer: false, explain: '“…he never follows it!”' },
              { id: 's2', s: 'The strawberries are four euros a box.', answer: true },
              { id: 's3', s: 'There is only one kind of cheese at the stall.', answer: false, explain: '“There are a lot of different cheeses.”' },
              { id: 's4', s: 'They buy a box of twelve eggs.', answer: true },
              { id: 's5', s: 'They buy everything on the list.', answer: false, explain: '“…only half of the things on the list!”' }
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
            title: 'Food and quantities',
            instructions: 'Продукти та «упаковки». Незлічуване (milk, bread) рахуємо через упаковку: a bottle of milk.',
            cards: [
              { front: 'a kilo of tomatoes', back: 'кілограм помідорів', example: 'I need a kilo of tomatoes.' },
              { front: 'a bottle of water', back: 'пляшка води', example: 'Can I have a bottle of water?' },
              { front: 'a loaf of bread', ipa: '/ləʊf/', back: 'буханець хліба', example: 'A loaf of bread, please.' },
              { front: 'a packet of pasta', back: 'пачка макаронів', example: 'Two packets of pasta.' },
              { front: 'a box of eggs', back: 'коробка яєць', example: 'We need a box of eggs.' },
              { front: 'a piece of cheese', back: 'шматок сиру', example: 'He buys a big piece of cheese.' },
              { front: 'potatoes', ipa: '/pəˈteɪtəʊz/', back: 'картопля', example: 'Some potatoes, please.' },
              { front: 'strawberries', ipa: '/ˈstrɔːbəriz/', back: 'полуниця', example: 'How much are the strawberries?' },
              { front: 'rice', ipa: '/raɪs/', back: 'рис', example: 'We haven’t got any rice.' },
              { front: 'shopping list', back: 'список покупок', example: 'Grandad has a shopping list.' },
              { front: 'expensive / cheap', ipa: '/ɪkˈspensɪv/ /tʃiːp/', back: 'дорогий / дешевий', example: 'The strawberries are expensive.' },
              { front: 'stall', ipa: '/stɔːl/', back: 'прилавок, ятка', example: 'The cheese stall is busy.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Containers',
            instructions: 'Поєднай «упаковку» і продукт.',
            pairs: [
              ['a bottle of', 'water'],
              ['a loaf of', 'bread'],
              ['a packet of', 'biscuits'],
              ['a kilo of', 'apples'],
              ['a carton of', 'juice'],
              ['a jar of', 'jam'],
              ['a bar of', 'chocolate'],
              ['a cup of', 'tea']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'My shopping list',
            instructions: 'Заповни список покупок. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'a {{loaf}} of bread' },
              { id: 'd2', text: 'a {{bottle}} of olive oil' },
              { id: 'd3', text: 'two {{packets}} of pasta' },
              { id: 'd4', text: 'a {{kilo}} of oranges' },
              { id: 'd5', text: 'a {{box}} of eggs' },
              { id: 'd6', text: 'a {{piece}} of cheese' }
            ],
            distractors: ['cup']
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
            title: 'Countable & uncountable nouns',
            instructions: 'Чому «apples», але не «breads»? Розбираємося зі злічуваними і незлічуваними іменниками.',
            html: `
<h3>1. Злічувані й незлічувані</h3>
<div class="table-wrap"><table>
  <tr><th>Злічувані (countable)</th><th>Незлічувані (uncountable)</th></tr>
  <tr><td>можна порахувати: one apple, two apples<br>є множина: eggs, tomatoes</td><td>не рахуємо поштучно: milk, bread, cheese, water, rice, money, information<br><b>немає множини</b>: <span class="no">breads</span>, <span class="no">milks</span></td></tr>
  <tr><td><b>an</b> apple, <b>some</b> apples</td><td><b>some</b> milk <span class="muted">(не «a milk»)</span></td></tr>
  <tr><td>There <b>are</b> some eggs.</td><td>There <b>is</b> some cheese.</td></tr>
</table></div>
<p>💡 Як порахувати незлічуване? Через упаковку чи міру: <b>a bottle of</b> milk, <b>two loaves of</b> bread, <b>a piece of</b> cheese, <b>a kilo of</b> rice.</p>
<p>💡 Увага: <b>bread, fruit, money, information, hair</b> — в англійській незлічувані (хоча в українській «гроші» — множина!). Money <b>is</b> important.</p>

<h3>2. how much чи how many? (скільки?)</h3>
<div class="table-wrap"><table>
  <tr><th>how many + злічувані (множина)</th><th>how much + незлічувані</th></tr>
  <tr><td><b>How many</b> eggs do we need?</td><td><b>How much</b> milk do we need?</td></tr>
  <tr><td><b>How many</b> apples are there?</td><td><b>How much</b> cheese is there?</td></tr>
</table></div>

<h3>3. Ціна: How much is / are…?</h3>
<div class="ex-line"><b>How much is</b> the bread? — It’s two euros. <span class="muted">(одна річ / незлічуване)</span></div>
<div class="ex-line"><b>How much are</b> the strawberries? — They’re four euros a box. <span class="muted">(множина)</span></div>
<div class="ex-line"><b>How much is that?</b> — Three euros fifty. <span class="muted">(разом)</span></div>
<p>Читаємо ціни: €3.50 = three euros fifty, £1.20 = one pound twenty, $10 = ten dollars.</p>

<h3>4. Ввічливе прохання в магазині</h3>
<div class="ex-line"><b>Can I have</b> a loaf of bread, <b>please</b>?</div>
<div class="ex-line"><b>I’d like</b> some cheese, please. <span class="muted">(I’d like = I would like — я б хотів)</span></div>
<div class="ex-line">Here you are. — Thank you!</div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">Can I have a bread?</span> → <span class="yes">Can I have some bread / a loaf of bread?</span><br>
<span class="no">How many milk?</span> → <span class="yes">How much milk?</span><br>
<span class="no">The money are on the table.</span> → <span class="yes">The money is on the table.</span><br>
<span class="no">two cheeses</span> (про кількість) → <span class="yes">two pieces of cheese</span></div>`
          },
          {
            id: 'gram-cu',
            type: 'choice',
            title: 'a / an or some?',
            instructions: 'Обери a / an (одна злічувана річ) або some (множина чи незлічуване).',
            items: [
              { id: 'c1', q: '___ apple', options: ['an', 'some'], answer: 0 },
              { id: 'c2', q: '___ bread', options: ['a', 'some'], answer: 1 },
              { id: 'c3', q: '___ milk', options: ['a', 'some'], answer: 1 },
              { id: 'c4', q: '___ egg', options: ['an', 'some'], answer: 0 },
              { id: 'c5', q: '___ tomatoes', options: ['a', 'some'], answer: 1 },
              { id: 'c6', q: '___ money', options: ['a', 'some'], answer: 1 },
              { id: 'c7', q: '___ banana', options: ['a', 'some'], answer: 0 }
            ]
          },
          {
            id: 'gram-much',
            type: 'gap',
            title: 'How much or how many?',
            instructions: 'Встав much або many.',
            items: [
              { id: 'm1', text: 'How {{many}} eggs do you need?' },
              { id: 'm2', text: 'How {{much}} water do you drink a day?' },
              { id: 'm3', text: 'How {{many}} apples are there?' },
              { id: 'm4', text: 'How {{much}} cheese is there in the fridge?' },
              { id: 'm5', text: 'How {{much}} is this bag? — It’s £20.' },
              { id: 'm6', text: 'How {{many}} people are there in your family?' }
            ]
          },
          {
            id: 'gram-isare',
            type: 'choice',
            title: 'is or are?',
            instructions: 'Незлічуване → is, множина → are.',
            items: [
              { id: 'i1', q: 'There ___ some milk in the fridge.', options: ['is', 'are'], answer: 0 },
              { id: 'i2', q: 'There ___ some eggs on the table.', options: ['is', 'are'], answer: 1 },
              { id: 'i3', q: 'The bread ___ fresh.', options: ['is', 'are'], answer: 0 },
              { id: 'i4', q: 'How much ___ the strawberries?', options: ['is', 'are'], answer: 1 },
              { id: 'i5', q: 'My money ___ in my wallet.', options: ['is', 'are'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'At the shop',
            instructions: 'Склади фрази для магазину.',
            items: [
              { id: 'o1', prompt: 'Можна мені буханець хліба, будь ласка?', answer: 'Can I have a loaf of bread, please?' },
              { id: 'o2', prompt: 'Скільки коштує сир?', answer: 'How much is the cheese?', extra: ['many'] },
              { id: 'o3', prompt: 'Скільки яєць нам потрібно?', answer: 'How many eggs do we need?' },
              { id: 'o4', prompt: 'Я б хотіла трохи води.', answer: "I'd like some water." }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: some / any',
            instructions: 'Згадаймо урок 2. Встав some або any.',
            items: [
              { id: 'r1', text: 'We need {{some}} eggs.' },
              { id: 'r2', text: 'We don’t need {{any}} milk.' },
              { id: 'r3', text: 'Are there {{any}} strawberries today?' },
              { id: 'r4', text: 'Grandad buys {{some}} potatoes.' },
              { id: 'r5', text: 'There isn’t {{any}} rice at home.' }
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
            title: 'At the café counter',
            instructions: 'Покупець замовляє в кафе. Послухай і дай відповіді.',
            audio: {
              title: 'Dialogue: Customer & Barista',
              lines: [
                { who: 'Barista', text: 'Hi! What can I get you?' },
                { who: 'Customer', text: 'Can I have a cappuccino and a bottle of water, please?' },
                { who: 'Barista', text: 'Sure. Still or sparkling water?' },
                { who: 'Customer', text: 'Still, please. And how much are the muffins?' },
                { who: 'Barista', text: 'They’re two pounds fifty each.' },
                { who: 'Customer', text: 'OK, two chocolate muffins, please. Have you got any milk without lactose?' },
                { who: 'Barista', text: 'Yes, we have some oat milk.' },
                { who: 'Customer', text: 'Great. How much is that?' },
                { who: 'Barista', text: 'That’s nine pounds twenty, please.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What does the customer drink?', options: ['Tea and juice', 'A cappuccino and water', 'Hot chocolate'], answer: 1 },
              { id: 'l2', q: 'What kind of water?', options: ['Still', 'Sparkling', 'Hot'], answer: 0 },
              { id: 'l3', q: 'How much is one muffin?', options: ['£1.50', '£2.50', '£2.15'], answer: 1 },
              { id: 'l4', q: 'How many muffins does the customer buy?', options: ['One', 'Two', 'Three'], answer: 1 },
              { id: 'l5', q: 'How much is it in total?', options: ['£9.20', '£7.20', '£9.02'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Can I have a bottle of water, please?' },
              { id: 'dc2', text: 'How much are the muffins?' },
              { id: 'dc3', text: 'We need some eggs.' },
              { id: 'dc4', text: 'How many apples do you want?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-party',
            type: 'writing',
            title: 'Shopping for a party',
            instructions: 'Ти готуєш вечірку на 10 гостей. Напиши повідомлення другові: що вже є вдома, що треба купити і скільки.',
            prompt: 'Write a message to a friend (60–80 words).\n• What is there at home? (There is some… / There are some…)\n• What isn’t there? (We haven’t got any… / There isn’t any…)\n• What do we need to buy? Use quantities: a bottle of, two kilos of, a packet of…\n• Ask one question with How much or How many.',
            minWords: 60,
            maxWords: 90,
            phrases: ['There is some', 'There aren’t any', 'We need', 'a bottle of', 'a kilo of', 'How many', 'How much'],
            checklist: ['Незлічувані без -s і без a (some bread, a loaf of bread)', 'some у ствердженнях, any у запереченнях', 'Є 3 «упаковки» (a bottle of…)', 'Є питання How much / How many'],
            model: `Hi Andrii! Here is the plan for the party.

There is some cheese and there are some apples at home. But there isn’t any bread and there aren’t any drinks!

Please buy two loaves of bread, three bottles of juice and a bottle of lemonade. We also need a kilo of tomatoes and two packets of crisps. I’ve got some money for you.

How many people from your office are coming? And how much cake do we need?

Thanks! Olena`
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
            title: 'Role play: at the shop',
            instructions: 'Ти в магазині. Скажи свої репліки вголос (ти — покупець).',
            phrases: ['Can I have…, please?', 'I’d like…', 'How much is…?', 'How much are…?', 'Here you are.'],
            tasks: [
              { id: 'sp1', q: 'Shop assistant: “Hello! Can I help you?” — Ask for three things you need.', tips: 'Can I have … and …, please?', model: 'Yes, please. Can I have a loaf of bread, a bottle of milk and six eggs?' },
              { id: 'sp2', q: 'Ask about prices: one thing and something plural.', tips: 'How much is …? How much are …?', model: 'How much is the cheese? And how much are the oranges?' },
              { id: 'sp3', q: 'What is in your fridge now? What isn’t there?', tips: 'There is some … There are some … There isn’t any …', model: 'There is some milk and there are some eggs. There isn’t any cheese.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'saturday': 'субота', 'market': 'ринок', 'every': 'кожен', 'morning': 'ранок', 'grandad': 'дідусь', 'always': 'завжди', 'shopping list': 'список покупок',
      'never': 'ніколи', 'follows': 'дотримується', 'first': 'спочатку', 'fruit': 'фрукти', 'vegetable': 'овоч', 'vegetables': 'овочі', 'stall': 'прилавок, ятка',
      'buys': 'купує', 'kilo': 'кілограм', 'tomatoes': 'помідори', 'some': 'трохи, кілька', 'potatoes': 'картопля', 'apples': 'яблука', 'how much': 'скільки (незлічуване; ціна)',
      'how many': 'скільки (злічуване)', 'strawberries': 'полуниця', 'asks': 'питає', 'euros': 'євро', 'box': 'коробка', 'says': 'каже', 'woman': 'жінка',
      'expensive': 'дорогий', 'cheap': 'дешевий', 'today': 'сьогодні', 'then': 'потім', 'cheese': 'сир', 'a lot of': 'багато', 'different': 'різний',
      'cheeses': 'сири (сорти)', 'tries': 'куштує', 'big': 'великий', 'piece': 'шматок', 'need': 'потребувати', 'any': 'якийсь (у − і ?)', 'milk': 'молоко',
      'home': 'дім', 'eggs': 'яйця', 'twelve': 'дванадцять', 'last': 'останній', 'stop': 'зупинка', 'bakery': 'пекарня', 'can i have': 'можна мені',
      'loaf': 'буханець', 'bread': 'хліб', 'croissants': 'круасани', 'please': 'будь ласка', 'fifty': 'п’ятдесят', 'heavy': 'важкий', 'bags': 'сумки',
      'only': 'лише', 'half': 'половина', 'things': 'речі', 'list': 'список', 'mornings': 'ранки', 'evenings': 'вечори', 'fresh': 'свіжий', 'kind': 'вид, сорт',
      'everything': 'все', 'bottle': 'пляшка', 'water': 'вода', 'packet': 'пачка', 'pasta': 'макарони', 'rice': 'рис', 'biscuits': 'печиво', 'carton': 'пакет (рідини)',
      'juice': 'сік', 'jar': 'банка', 'jam': 'варення', 'bar': 'плитка', 'chocolate': 'шоколад', 'cup': 'чашка', 'tea': 'чай', 'olive oil': 'оливкова олія',
      'oranges': 'апельсини', 'money': 'гроші', 'information': 'інформація', 'banana': 'банан', 'fridge': 'холодильник', 'bag': 'сумка', 'people': 'люди',
      'family': 'сім’я', 'wallet': 'гаманець', "i'd like": 'я б хотів(ла)', 'here you are': 'ось, будь ласка (даючи)', 'café': 'кафе', 'counter': 'прилавок',
      'barista': 'бариста', 'what can i get you': 'що вам подати', 'cappuccino': 'капучино', 'sure': 'звісно', 'still': 'негазований', 'sparkling': 'газований',
      'muffins': 'мафіни', 'each': 'кожен, за штуку', 'pounds': 'фунти', 'without': 'без', 'lactose': 'лактоза', 'oat milk': 'вівсяне молоко',
      'that’s': 'це', "that's": 'це', 'in total': 'загалом', 'hot': 'гарячий', 'party': 'вечірка', 'plan': 'план', 'drinks': 'напої', 'lemonade': 'лимонад',
      'also': 'також', 'crisps': 'чипси', 'office': 'офіс', 'coming': 'приходять', 'cake': 'торт', 'thanks': 'дякую', 'shop assistant': 'продавець',
      'help': 'допомогти', 'prices': 'ціни', 'plural': 'множина', 'want': 'хотіти', 'message': 'повідомлення', 'friend': 'друг'
    }
  });
})();
