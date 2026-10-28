/*
 * A1 · Module 4.1 · Lesson 1 — Review A1: grammar
 * there is / there are · Present Simple vs Present Continuous · countable / uncountable · plural -s / -es / -ies
 * Uses vocabulary from Modules 1–4. Exercise IDs are PERMANENT.
 */
(function () {
  ENG.registerLesson({
    id: 'a1-m41-l1',
    level: 'a1',
    title: 'Review A1: Grammar. Повторення граматики',
    subtitle: 'there is / there are · Present Simple vs Present Continuous · countable / uncountable · множина -s / -es / -ies',

    sections: [
      /* ============ 1. THERE IS / THERE ARE ============ */
      {
        id: 'grammar',
        title: '1 · There is / There are',
        exercises: [
          {
            id: 'there-rule',
            type: 'rule',
            title: 'There is / There are',
            instructions: 'Так ми кажемо, що щось є / знаходиться десь: у кімнаті, у місті, у сумці.',
            html: `
<h3>Коли is, а коли are?</h3>
<div class="table-wrap"><table>
  <tr><th></th><th>Однина / незлічуване</th><th>Множина</th></tr>
  <tr><td><b>+</b></td><td>There <b>is</b> (There’s) a sofa in the living room.<br>There <b>is</b> some milk in the fridge.</td><td>There <b>are</b> two beds in the bedroom.<br>There <b>are</b> some flowers in the garden.</td></tr>
  <tr><td><b>−</b></td><td>There <b>isn’t</b> a bank in my street.<br>There <b>isn’t any</b> bread.</td><td>There <b>aren’t any</b> shops near my house.</td></tr>
  <tr><td><b>?</b></td><td><b>Is there</b> a pharmacy near here?</td><td><b>Are there</b> any chairs in the kitchen?</td></tr>
  <tr><td>коротка відповідь</td><td>Yes, there <b>is</b>. / No, there <b>isn’t</b>.</td><td>Yes, there <b>are</b>. / No, there <b>aren’t</b>.</td></tr>
</table></div>

<h3>Як утворюється: формули</h3>
<p class="formula-legend"><span class="f-s">there</span> «там / є» · <span class="f-aux">is / are</span> дієслово to be · <span class="f-v">що?</span> предмет · <span class="f-neg">not</span> заперечення</p>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b></td><td><div class="formula"><span class="f-s">There</span><span class="f-aux">is / are</span><span class="f-op">+</span><span class="f-v">a / some + предмет</span><span class="f-op">+</span><span>місце</span></div></td><td>There <b>is</b> a desk in my study.<br>There <b>are</b> some coats in the hall.</td></tr>
  <tr><td><b>−</b></td><td><div class="formula"><span class="f-s">There</span><span class="f-aux">is / are</span><span class="f-neg">not</span><span class="f-op">+</span><span class="f-v">a / any + предмет</span></div></td><td>There <b>isn’t</b> a garage.<br>There <b>aren’t</b> any cinemas in my town.</td></tr>
  <tr><td><b>?</b></td><td><div class="formula"><span class="f-aux">Is / Are</span><span class="f-s">there</span><span class="f-op">+</span><span class="f-v">a / any + предмет</span><span class="f-op">?</span></div></td><td><b>Is there</b> a shower in the bathroom?<br><b>Are there</b> any museums here?</td></tr>
  <tr><td><b>?</b> з питальним словом</td><td><div class="formula"><span class="f-aux">How many</span><span class="f-op">+</span><span class="f-v">предмети</span><span class="f-aux">are</span><span class="f-s">there</span><span class="f-op">?</span></div></td><td><b>How many</b> rooms <b>are there</b> in your flat?</td></tr>
  <tr><td>коротка відповідь</td><td><div class="formula"><span class="f-op">Yes,</span><span class="f-s">there</span><span class="f-aux">is / are</span></div> <div class="formula"><span class="f-op">No,</span><span class="f-s">there</span><span class="f-aux">isn’t / aren’t</span></div></td><td>Yes, there <b>is</b>. / No, there <b>aren’t</b>.</td></tr>
</table></div>
<p>💡 У <b>+</b> кажемо <b>a</b> (одна річ) або <b>some</b> (кілька), у <b>−</b> і <b>?</b> — <b>any</b>.<br>
💡 Дивимось на <b>перше</b> слово після is / are: There <b>is a</b> sofa and two chairs. — There <b>are two</b> chairs and a sofa.</p>
<div class="tip">🔑 Не плутай: <span class="no">In my room is a bed.</span> → <span class="yes">There is a bed in my room.</span></div>`
          },
          {
            id: 'there-choice',
            type: 'choice',
            title: 'is чи are?',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'q1', q: 'There ___ a fridge in the kitchen.', options: ['is', 'are'], answer: 0 },
              { id: 'q2', q: 'There ___ three bedrooms in our house.', options: ['is', 'are'], answer: 1 },
              { id: 'q3', q: '___ there a pharmacy near here?', options: ['Is', 'Are'], answer: 0 },
              { id: 'q4', q: 'There aren’t ___ books on the desk.', options: ['some', 'any', 'a'], answer: 1 },
              { id: 'q5', q: 'There ___ some water in the bottle.', options: ['is', 'are'], answer: 0, explain: 'water — незлічуване, тому is.' },
              { id: 'q6', q: '___ there any flowers in the garden? — Yes, there ___.', options: ['Is … is', 'Are … are', 'Are … is'], answer: 1 }
            ]
          },
          {
            id: 'there-gap',
            type: 'gap',
            title: 'My town',
            instructions: 'Впиши there is / there are / is there / are there / there isn’t / there aren’t. Підказка в дужках.',
            items: [
              { id: 'g1', text: 'In my town {{there is|there’s}} a big library.', hint: '(+)' },
              { id: 'g2', text: '{{There are}} two bakeries in my street.', hint: '(+)' },
              { id: 'g3', text: '{{There isn’t|There is not}} a museum, but {{there is|there’s}} a cinema.', hint: '(− / +)' },
              { id: 'g4', text: '{{Is there}} a post office near the train station?', hint: '(?)' },
              { id: 'g5', text: '{{There aren’t|There are not}} any banks in the park.', hint: '(−)' },
              { id: 'g6', text: 'How many shops {{are there}} in your town?', hint: '(?)' }
            ]
          }
        ]
      },

      /* ============ 2. PRESENT SIMPLE vs PRESENT CONTINUOUS ============ */
      {
        id: 'grammar',
        title: '2 · Present Simple vs Present Continuous',
        exercises: [
          {
            id: 'pspc-rule',
            type: 'rule',
            title: 'Present Simple vs Present Continuous',
            instructions: 'Present Simple — що ми робимо зазвичай. Present Continuous — що відбувається прямо зараз.',
            html: `
<h3>1. Коли що використовувати</h3>
<div class="table-wrap"><table>
  <tr><th>Present Simple</th><th>Present Continuous</th></tr>
  <tr><td><b>звички, розклад</b>, що робимо регулярно<br>I <b>drink</b> coffee every morning.<br>She <b>wakes up</b> at 7.</td><td>дія відбувається <b>зараз</b>, у цю хвилину<br>I<b>’m drinking</b> tea now.<br>Look! She<b>’s sleeping</b>.</td></tr>
  <tr><td><b>факти</b>, що завжди правда<br>My father <b>is</b> a pilot. He <b>works</b> on a plane.</td><td><b>сьогодні</b>, не як завжди<br>Today he <b>isn’t working</b>. He<b>’s cooking</b> dinner.</td></tr>
</table></div>
<p>💡 Порівняй: She usually <b>watches</b> TV in the evening. (звичка) — She<b>’s watching</b> TV <b>now</b>. (зараз)</p>

<h3>2. Як утворюються: формули</h3>
<p class="formula-legend"><span class="f-s">Підмет</span> хто? · <span class="f-aux">Допоміжне</span> do / does / am / is / are · <span class="f-v">Дієслово</span> V1 (work) або V-ing (working) · <span class="f-neg">not</span> заперечення</p>

<h4>Present Simple</h4>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b> I / you / we / they</td><td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-v">V1</span></div></td><td>I <b>cook</b> dinner every day.</td></tr>
  <tr><td><b>+</b> he / she / it</td><td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-v">V1 + s / es</span></div></td><td>She <b>works</b> in a hospital.<br>He <b>watches</b> TV.</td></tr>
  <tr><td><b>−</b></td><td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">don’t / doesn’t</span><span class="f-op">+</span><span class="f-v">V1</span></div></td><td>I <b>don’t drink</b> coffee.<br>He <b>doesn’t eat</b> vegetables.</td></tr>
  <tr><td><b>?</b></td><td><div class="formula"><span class="f-aux">Do / Does</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V1</span><span class="f-op">?</span></div></td><td><b>Do</b> you <b>do</b> yoga?<br><b>Does</b> she <b>skip</b> breakfast?</td></tr>
  <tr><td><b>?</b> з питальним словом</td><td><div class="formula"><span class="f-aux">Wh-</span><span class="f-op">+</span><span class="f-aux">do / does</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V1</span><span class="f-op">?</span></div></td><td>Where <b>does</b> your uncle <b>work</b>?</td></tr>
  <tr><td>коротка відповідь</td><td><div class="formula"><span class="f-op">Yes,</span><span class="f-s">підмет</span><span class="f-aux">do / does</span></div> <div class="formula"><span class="f-op">No,</span><span class="f-s">підмет</span><span class="f-aux">don’t / doesn’t</span></div></td><td>Yes, I <b>do</b>. / No, she <b>doesn’t</b>.</td></tr>
</table></div>

<h4>Present Continuous</h4>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b></td><td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-v">V-ing</span></div></td><td>I<b>’m reading</b> a book.<br>They<b>’re taking</b> a photo.</td></tr>
  <tr><td><b>−</b></td><td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-neg">not</span><span class="f-op">+</span><span class="f-v">V-ing</span></div></td><td>She <b>isn’t sleeping</b>.<br>We <b>aren’t watching</b> TV.</td></tr>
  <tr><td><b>?</b></td><td><div class="formula"><span class="f-aux">Am / Is / Are</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V-ing</span><span class="f-op">?</span></div></td><td><b>Are</b> you <b>cooking</b>?<br><b>Is</b> he <b>working</b>?</td></tr>
  <tr><td><b>?</b> з питальним словом</td><td><div class="formula"><span class="f-aux">Wh-</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V-ing</span><span class="f-op">?</span></div></td><td>What <b>are</b> you <b>doing</b>?</td></tr>
  <tr><td>коротка відповідь</td><td><div class="formula"><span class="f-op">Yes,</span><span class="f-s">підмет</span><span class="f-aux">am / is / are</span></div> <div class="formula"><span class="f-op">No,</span><span class="f-s">підмет</span><span class="f-aux">’m not / isn’t / aren’t</span></div></td><td>Yes, I <b>am</b>. / No, he <b>isn’t</b>.</td></tr>
</table></div>
<p>💡 <b>-ing:</b> cook → cook<b>ing</b> · take → tak<b>ing</b> (прибираємо -e) · sit → si<b>tt</b>ing · swim → swi<b>mm</b>ing.</p>

<h3>3. Time markers — слова-підказки</h3>
<div class="table-wrap"><table>
  <tr><th>Present Simple</th><th>Present Continuous</th></tr>
  <tr><td>always, usually, often, sometimes, never<br>every day / every morning / every week<br>on Mondays, at the weekend, in the evening</td><td>now, right now, at the moment<br>today, this morning, this week<br><b>Look!</b> <b>Listen!</b></td></tr>
</table></div>
<div class="tip">🔑 Present Simple у − і ? потребує <b>do / does</b>, а Present Continuous — <b>am / is / are</b>: <span class="no">Do you cooking?</span> <span class="no">Are you cook?</span> → <span class="yes">Do you cook?</span> / <span class="yes">Are you cooking?</span></div>`
          },
          {
            id: 'pspc-markers',
            type: 'sort',
            title: 'Time markers',
            instructions: 'Розклади слова-підказки у дві колонки.',
            columns: [
              { title: 'Present Simple', items: ['every day', 'usually', 'never', 'on Mondays', 'often', 'at the weekend'] },
              { title: 'Present Continuous', items: ['now', 'at the moment', 'right now', 'today', 'Look!', 'this week'] }
            ]
          },
          {
            id: 'pspc-story',
            type: 'gap',
            title: 'Saturday at our house',
            instructions: 'Історія про сім’ю Олі. Постав дієслово в дужках у Present Simple або Present Continuous. Шукай слова-підказки: usually, every day, now, today, Look!',
            items: [
              { id: 'p1', text: 'My sister Kate is a nurse. She {{works}} at the hospital every day.', hint: '(work)' },
              { id: 'p2', text: 'But today is Saturday, so she {{isn’t working|is not working}}.', hint: '(not / work)' },
              { id: 'p3', text: 'Right now she {{is sitting}} on the sofa in the living room.', hint: '(sit)' },
              { id: 'p4', text: 'She usually {{drinks}} coffee in the morning, but at the moment she {{is drinking}} tea.', hint: '(drink / drink)' },
              { id: 'p5', text: 'Our grandmother is very kind. She {{cooks}} dinner for us every Sunday.', hint: '(cook)' },
              { id: 'p6', text: 'Look! Dad {{is buying}} a loaf of bread at the bakery.', hint: '(buy)' },
              { id: 'p7', text: 'My brother is hard-working. He never {{stays}} up late.', hint: '(stay)' },
              { id: 'p8', text: '— What {{are}} you {{doing}}? — I {{am looking|’m looking}} for my wallet!', hint: '(do / look)' },
              { id: 'p9', text: '{{Does}} your uncle {{take}} the train to work every day?', hint: '(take)' },
              { id: 'p10', text: 'It {{is raining}} now. Take your umbrella!', hint: '(rain)' }
            ]
          }
        ]
      },

      /* ============ 3. COUNTABLE / UNCOUNTABLE ============ */
      {
        id: 'grammar',
        title: '3 · Countable & uncountable',
        exercises: [
          {
            id: 'count-rule',
            type: 'rule',
            title: 'Countable & uncountable nouns',
            instructions: 'Злічувані — можна порахувати (one apple, two apples). Незлічувані — не можна (water, bread).',
            html: `
<div class="table-wrap"><table>
  <tr><th></th><th>Countable — злічувані</th><th>Uncountable — незлічувані</th></tr>
  <tr><td>приклади</td><td>an apple, a key, a bottle, a biscuit, a chair</td><td>water, milk, bread, coffee, tea, juice, money, jam</td></tr>
  <tr><td>множина</td><td>✅ apple<b>s</b>, key<b>s</b>, biscuit<b>s</b></td><td>❌ немає: <span class="no">breads</span> <span class="no">waters</span></td></tr>
  <tr><td>a / an</td><td>✅ <b>a</b> key, <b>an</b> apple</td><td>❌ <span class="no">a bread</span> → <span class="yes">a loaf of bread</span></td></tr>
  <tr><td>some / any</td><td>some apples · any apples</td><td>some milk · any milk</td></tr>
  <tr><td>скільки?</td><td><b>How many</b> apples?</td><td><b>How much</b> water?</td></tr>
</table></div>
<h3>Як утворюється: формули</h3>
<p class="formula-legend"><span class="f-aux">How many / How much</span> · <span class="f-v">іменник</span> · <span class="f-s">there / підмет</span></p>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>?</b> злічувані</td><td><div class="formula"><span class="f-aux">How many</span><span class="f-op">+</span><span class="f-v">іменник + s</span><span class="f-op">+</span><span class="f-aux">are there / do you…</span><span class="f-op">?</span></div></td><td><b>How many</b> eggs do you need?</td></tr>
  <tr><td><b>?</b> незлічувані</td><td><div class="formula"><span class="f-aux">How much</span><span class="f-op">+</span><span class="f-v">іменник</span><span class="f-op">+</span><span class="f-aux">is there / do you…</span><span class="f-op">?</span></div></td><td><b>How much</b> milk is there?</td></tr>
</table></div>
<div class="tip">🔑 Незлічуване можна «порахувати» упаковкою: <b>a bottle of</b> water, <b>a loaf of</b> bread, <b>a cup of</b> tea, <b>a bar of</b> chocolate, <b>a jar of</b> jam.</div>`
          },
          {
            id: 'count-sort',
            type: 'sort',
            title: 'Countable or uncountable?',
            instructions: 'Розподіли слова у дві колонки.',
            columns: [
              { title: 'Countable', ua: 'злічувані', items: ['apple', 'key', 'biscuit', 'umbrella', 'egg', 'bottle', 'flower', 'notebook'] },
              { title: 'Uncountable', ua: 'незлічувані', items: ['water', 'bread', 'milk', 'coffee', 'money', 'juice', 'cheese', 'tea'] }
            ]
          }
        ]
      },

      /* ============ 4. PLURAL -S / -ES / -IES ============ */
      {
        id: 'grammar',
        title: '4 · Plural: -s / -es / -ies',
        exercises: [
          {
            id: 'plural-rule',
            type: 'rule',
            title: 'Множина: -s, -es, -ies',
            instructions: 'Як зробити з одного предмета багато.',
            html: `
<div class="table-wrap"><table class="ftable">
  <tr><th>Правило</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td>більшість слів</td><td><div class="formula"><span class="f-v">слово</span><span class="f-op">+</span><span class="f-aux">s</span></div></td><td>key → key<b>s</b> · car → car<b>s</b> · apple → apple<b>s</b></td></tr>
  <tr><td>-s, -ss, -sh, -ch, -x, -o</td><td><div class="formula"><span class="f-v">слово</span><span class="f-op">+</span><span class="f-aux">es</span></div></td><td>bus → bus<b>es</b> · glass → glass<b>es</b> · watch → watch<b>es</b> · box → box<b>es</b> · tomato → tomato<b>es</b></td></tr>
  <tr><td><b>приголосна + y</b></td><td><div class="formula"><span class="f-v">слово без y</span><span class="f-op">+</span><span class="f-aux">ies</span></div></td><td>city → cit<b>ies</b> · family → famil<b>ies</b> · baby → bab<b>ies</b> · library → librar<b>ies</b></td></tr>
  <tr><td><b>голосна + y</b> (ay, ey, oy)</td><td><div class="formula"><span class="f-v">слово</span><span class="f-op">+</span><span class="f-aux">s</span></div></td><td>key → key<b>s</b> · boy → boy<b>s</b> · day → day<b>s</b></td></tr>
  <tr><td>-f / -fe</td><td><div class="formula"><span class="f-v">слово без f</span><span class="f-op">+</span><span class="f-aux">ves</span></div></td><td>knife → kni<b>ves</b> · wife → wi<b>ves</b></td></tr>
  <tr><td>винятки</td><td><div class="formula"><span class="f-neg">запам’ятати</span></div></td><td>man → <b>men</b> · woman → <b>women</b> · child → <b>children</b> · person → <b>people</b></td></tr>
</table></div>
<div class="tip">🔑 Як зрозуміти, чи -ies? Подивись на букву <b>перед y</b>: ci<b>t</b>y (t — приголосна) → cit<b>ies</b>; k<b>e</b>y (e — голосна) → key<b>s</b>.</div>`
          },
          {
            id: 'plural-gap',
            type: 'gap',
            title: 'Make it plural',
            instructions: 'Напиши слово у множині.',
            items: [
              { id: 'w1', text: 'one wallet → two {{wallets}}' },
              { id: 'w2', text: 'one watch → two {{watches}}' },
              { id: 'w3', text: 'one city → two {{cities}}' },
              { id: 'w4', text: 'one key → two {{keys}}' },
              { id: 'w5', text: 'one bus → two {{buses}}' },
              { id: 'w6', text: 'one family → two {{families}}' },
              { id: 'w7', text: 'one box → two {{boxes}}' },
              { id: 'w8', text: 'one boy → two {{boys}}' },
              { id: 'w9', text: 'one library → two {{libraries}}' },
              { id: 'w10', text: 'one woman → two {{women}}' }
            ]
          },
          {
            id: 'plural-sort',
            type: 'sort',
            title: '-s, -es чи -ies?',
            instructions: 'Яке закінчення отримає слово в множині? Розклади по колонках.',
            columns: [
              { title: '+ s', items: ['bottle', 'day', 'umbrella', 'toy'] },
              { title: '+ es', items: ['glass', 'dish', 'potato', 'sandwich'] },
              { title: 'y → ies', items: ['baby', 'party', 'country', 'strawberry'] }
            ]
          }
        ]
      }
    ],

    glossary: {
      there: 'там / є', fridge: 'холодильник', kitchen: 'кухня', bedroom: 'спальня', 'living room': 'вітальня', bathroom: 'ванна кімната',
      sofa: 'диван', desk: 'письмовий стіл', study: 'кабінет', hall: 'передпокій', coat: 'пальто', garage: 'гараж', garden: 'сад', flower: 'квітка',
      shower: 'душ', chair: 'стілець', bed: 'ліжко', pharmacy: 'аптека', bakery: 'пекарня', library: 'бібліотека', museum: 'музей', cinema: 'кінотеатр',
      bank: 'банк', 'post office': 'пошта', 'train station': 'вокзал', street: 'вулиця', town: 'місто', shop: 'магазин', park: 'парк', near: 'біля', here: 'тут',
      nurse: 'медсестра', hospital: 'лікарня', sister: 'сестра', brother: 'брат', grandmother: 'бабуся', uncle: 'дядько', dad: 'тато', father: 'батько',
      kind: 'добрий', 'hard-working': 'працьовитий', 'stay up late': 'лягати пізно', 'look for': 'шукати', wallet: 'гаманець', umbrella: 'парасолька',
      'a loaf of': 'буханець', bread: 'хліб', coffee: 'кава', tea: 'чай', water: 'вода', milk: 'молоко', juice: 'сік', money: 'гроші', cheese: 'сир',
      jam: 'варення', apple: 'яблуко', egg: 'яйце', biscuit: 'печиво', bottle: 'пляшка', key: 'ключ', notebook: 'зошит', watch: 'годинник',
      glass: 'склянка', glasses: 'окуляри', dish: 'тарілка', potato: 'картопля', tomato: 'помідор', sandwich: 'бутерброд', box: 'коробка', bus: 'автобус',
      city: 'місто', family: 'сім’я', baby: 'немовля', party: 'вечірка', country: 'країна', strawberry: 'полуниця', toy: 'іграшка', day: 'день', boy: 'хлопчик',
      man: 'чоловік', men: 'чоловіки', woman: 'жінка', women: 'жінки', child: 'дитина', children: 'діти', person: 'людина', people: 'люди', knife: 'ніж', wife: 'дружина',
      work: 'працювати', sit: 'сидіти', drink: 'пити', cook: 'готувати', dinner: 'вечеря', buy: 'купувати', take: 'брати / їздити', rain: 'дощ / йти (про дощ)',
      today: 'сьогодні', now: 'зараз', 'at the moment': 'в цей момент', 'right now': 'прямо зараз', usually: 'зазвичай', always: 'завжди', often: 'часто',
      sometimes: 'іноді', never: 'ніколи', 'every day': 'щодня', 'at the weekend': 'на вихідних', look: 'дивитися', listen: 'слухати',
      countable: 'злічуваний', uncountable: 'незлічуваний', plural: 'множина', some: 'трохи / кілька', any: 'якийсь (у − і ?)', 'how many': 'скільки (штук)', 'how much': 'скільки (кількість)'
    }
  });
})();
