/*
 * A1 · Module 7 · Lesson 1 — What is he doing? (Mr Bean video lesson)
 * Easy review lesson: Present Continuous (module 5) + "with" for tools. Video: Mr Bean Official, "Sandwich Making"
 * (park sandwich scene from Episode 3, “The Curse of Mr Bean”).
 * Exercise IDs are PERMANENT.
 */
(function () {
  const VIDEO = { youtube: 'bS1ePEZZCDY', title: 'Mr Bean: Sandwich Making (Mr Bean Official)' };

  const PASSAGE = {
    title: 'Who is Mr Bean?',
    text: `Mr Bean is a very funny man from British TV. He is tall and thin. He has got brown hair and big eyes. He usually wears a brown jacket and a red tie.

Mr Bean doesn’t talk a lot. He makes funny faces and does very strange things. That’s why people all over the world love him — you don’t need English to understand him!

He has got a small green car and a brown teddy bear. His teddy is his best friend.

In today’s video, Mr Bean is in a park. It’s lunchtime and he is very hungry…`
  };

  ENG.registerLesson({
    id: 'a1-m7-l1',
    level: 'a1',
    title: 'What is he doing? Mr Bean',
    subtitle: 'Відео-урок · повторення Present Continuous · cut it with scissors!',

    sections: [
      {
        id: 'listening',
        title: 'Video',
        exercises: [
          {
            id: 'video-watch',
            type: 'video',
            title: '🎬 Just watch and laugh',
            instructions: 'Перший перегляд — просто для задоволення. Слів майже немає, тож нічого перекладати не треба! Під час перегляду зверни увагу:',
            video: VIDEO,
            notice: ['What food has Mr Bean got?', 'What strange things is he using?', 'What happens at the end?'],
            button: 'Подивився(-лась)! 😂'
          },
          {
            id: 'video-gist',
            type: 'choice',
            title: 'What did you see?',
            instructions: 'Легкі питання після першого перегляду. Можеш дивитися відео ще раз скільки завгодно.',
            video: VIDEO,
            items: [
              { id: 'v1', q: 'Where is Mr Bean?', options: ['In a kitchen', 'In a park', 'In a café'], answer: 1 },
              { id: 'v2', q: 'What is he making?', options: ['A cake', 'A sandwich', 'A pizza'], answer: 1 },
              { id: 'v3', q: 'Where are the food and things?', options: ['In his bag', 'In his car', 'In his coat'], answer: 2, explain: 'Він дістає все з кишень пальта — як фокусник! 🎩' },
              { id: 'v4', q: 'Who is sitting next to him?', options: ['A man', 'A dog', 'His teddy bear'], answer: 0 },
              { id: 'v5', q: 'What is he drinking?', options: ['Coffee', 'Juice', 'Tea'], answer: 2 }
            ]
          },
          {
            id: 'video-tools',
            type: 'dragdrop',
            title: 'Crazy tools 🤪',
            instructions: 'Мр Бін використовує дуже дивні речі! Подивись ще раз і встав слово. Два слова зайві — це те, що використала б звичайна людина 😉',
            video: VIDEO,
            items: [
              { id: 't1', text: 'He is cutting the bread with {{scissors}}.' },
              { id: 't2', text: 'He is putting butter on the bread with a {{credit card}}.' },
              { id: 't3', text: 'He is washing the lettuce in the fountain and drying it with his {{sock}}.' },
              { id: 't4', text: 'He is crushing the pepper with his {{shoe}}.' },
              { id: 't5', text: 'He is making tea in a {{hot water bottle}}.' }
            ],
            distractors: ['knife', 'towel']
          },
          {
            id: 'video-lie',
            type: 'truefalse',
            title: 'Spot the lie 🕵️',
            instructions: 'Детектив, увага! Які речення про відео — правда, а які — брехня?',
            video: VIDEO,
            items: [
              { id: 'l1', s: 'Mr Bean is cutting the bread with a knife.', answer: false, explain: 'Ні — ножицями! ✂️' },
              { id: 'l2', s: 'He is washing the lettuce in the fountain.', answer: true },
              { id: 'l4', s: 'The man on the bench is watching Mr Bean.', answer: true, explain: 'Так, і дуже здивовано 😳' },
              { id: 'l3', s: 'He is talking a lot to the man.', answer: false, explain: 'Мр Бін майже не говорить — у цьому вся фішка!' },
              { id: 'l6', s: 'The pepper makes him sneeze.', answer: true, explain: 'Atchoo! 🤧' },
              { id: 'l5', s: 'Mr Bean is drinking coffee from a cup.', answer: false, explain: 'Він робить чай у грілці!' }
            ]
          }
        ]
      },

      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-bean',
            type: 'choice',
            title: 'Meet Mr Bean',
            instructions: 'Прочитай короткий текст про героя нашого відео й обери відповідь. Тут усе знайоме! 🙂',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Where is Mr Bean from?', options: ['American films', 'A book', 'British TV'], answer: 2 },
              { id: 'q2', q: 'What does he usually wear?', options: ['A brown jacket and a red tie', 'A black T-shirt', 'A blue coat and a hat'], answer: 0 },
              { id: 'q3', q: 'Does he talk a lot?', options: ['Yes, he does.', 'No, he doesn’t.'], answer: 1 },
              { id: 'q4', q: 'Who is his best friend?', options: ['His cat', 'His car', 'His teddy bear'], answer: 2 },
              { id: 'q5', q: 'Where is he in today’s video?', options: ['In a park', 'At home', 'In a shop'], answer: 0 }
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
            title: 'Mr Bean’s picnic',
            instructions: 'Слова з відео. Більшість ти вже знаєш — просто згадай!',
            cards: [
              { front: 'a park bench', back: 'лавка в парку', example: 'He is sitting on a park bench.' },
              { front: 'lunch', back: 'обід', example: 'It’s lunchtime.' },
              { front: 'bread', ipa: '/bred/', back: 'хліб', example: 'He is cutting the bread.' },
              { front: 'butter', back: 'вершкове масло', example: 'He is putting butter on the bread.' },
              { front: 'lettuce', ipa: '/ˈletɪs/', back: 'салат (листя)', example: 'He is washing the lettuce.' },
              { front: 'pepper', back: 'перець', example: 'Pepper makes you sneeze!' },
              { front: 'scissors', ipa: '/ˈsɪzəz/', back: 'ножиці', example: 'He is cutting bread with scissors!' },
              { front: 'a sock', back: 'шкарпетка', example: 'He is drying the lettuce with his sock.' },
              { front: 'a shoe', ipa: '/ʃuː/', back: 'черевик', example: 'He is using his shoe.' },
              { front: 'a credit card', back: 'банківська картка', example: 'He is spreading butter with a credit card.' },
              { front: 'a hot water bottle', back: 'грілка', example: 'He is making tea in a hot water bottle!' },
              { front: 'sneeze', ipa: '/sniːz/', back: 'чхати', example: 'Atchoo! He is sneezing.' }
            ]
          },
          {
            id: 'vocab-emoji',
            type: 'match',
            title: 'Emoji match',
            instructions: 'Поєднай слово з емодзі. Швидко, як у грі! ⚡',
            pairs: [
              ['bread', '🍞'],
              ['scissors', '✂️'],
              ['a sock', '🧦'],
              ['a shoe', '👞'],
              ['lettuce', '🥬'],
              ['tea', '🍵'],
              ['a credit card', '💳'],
              ['sneeze', '🤧']
            ]
          },
          {
            id: 'vocab-sort',
            type: 'sort',
            title: 'Food or not food?',
            instructions: 'Мр Бін робить бутерброд із дуже дивних речей. Розклади слова: це їжа чи ні?',
            columns: [
              { title: 'Food & drink 🍽', ua: 'їжа і напої', items: ['bread', 'butter', 'lettuce', 'pepper', 'tea', 'milk'] },
              { title: 'Not food 🙅', ua: 'не їжа', items: ['scissors', 'a sock', 'a shoe', 'a credit card', 'a hot water bottle', 'a bench'] }
            ]
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
            title: 'Present Continuous — ти це вже знаєш! 💪',
            instructions: 'Нічого нового: це повторення модуля 5. Плюс одне маленьке слово — with.',
            html: `
<h3>1. Що робить Мр Бін зараз?</h3>
<p>Коли описуємо, що відбувається <b>на екрані зараз</b>, вживаємо <b>Present Continuous</b>.</p>
<div class="ex-line">Look! He <mark>is cutting</mark> the bread. — Дивись! Він ріже хліб.</div>
<div class="ex-line">The man <mark>is watching</mark> him. — Чоловік на нього дивиться.</div>

<h3>2. Як утворюється: формули</h3>
<p class="formula-legend"><span class="f-s">Підмет</span> <span class="f-aux">am / is / are</span> <span class="f-v">V-ing</span> <span class="f-neg">not</span></p>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b></td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-v">V-ing</span></div></td>
      <td>He <b>is eating</b>.<br>I<b>’m watching</b> a video.<br>They <b>are sitting</b> on a bench.</td></tr>
  <tr><td><b>−</b></td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-neg">not</span><span class="f-op">+</span><span class="f-v">V-ing</span></div></td>
      <td>He <b>isn’t talking</b>.<br>I<b>’m not laughing</b>… OK, I am! 😂</td></tr>
  <tr><td><b>?</b></td>
      <td><div class="formula"><span class="f-aux">Am / Is / Are</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V-ing</span><span class="f-op">?</span></div></td>
      <td><b>Is</b> he <b>making</b> a sandwich?<br><b>Are</b> they <b>eating</b>?</td></tr>
  <tr><td><b>?</b> з питальним словом</td>
      <td><div class="formula"><span class="f-s">What / Where…</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V-ing</span><span class="f-op">?</span></div></td>
      <td><b>What is</b> he <b>doing</b>?<br><b>Where are</b> they <b>sitting</b>?</td></tr>
  <tr><td>Короткі відповіді</td>
      <td><div class="formula"><span class="f-s">Yes / No, підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">(</span><span class="f-neg">not</span><span class="f-op">)</span></div></td>
      <td>Yes, he <b>is</b>. / No, he <b>isn’t</b>.<br>Yes, they <b>are</b>. / No, they <b>aren’t</b>.</td></tr>
</table></div>
<p><b>Правопис -ing:</b> cut → cu<b>tt</b>ing, sit → si<b>tt</b>ing · make → mak<b>ing</b> (без -e) · wash → wash<b>ing</b>, eat → eat<b>ing</b>.</p>

<h3>3. Бонус: чим? → with ✂️</h3>
<p>Щоб сказати, <b>чим</b> він щось робить, додай <b>with</b> + річ:</p>
<div class="ex-line">He is cutting the bread <mark>with scissors</mark>. — ножицями</div>
<div class="ex-line">He is drying the lettuce <mark>with his sock</mark>. — своєю шкарпеткою</div>

<div class="tip">⚠️ <b>Найчастіша помилка — забути is / are</b><br>
<span class="no">He cutting the bread.</span> → <span class="yes">He is cutting the bread.</span><br>
<span class="no">He is cut the bread.</span> → <span class="yes">He is cutting the bread.</span></div>`
          },
          {
            id: 'gram-captions',
            type: 'gap',
            title: 'Write the captions 📺',
            instructions: 'Ти робиш субтитри до відео. Напиши дієслово в Present Continuous (is / are + -ing).',
            items: [
              { id: 'g1', text: 'Mr Bean {{is sitting|’s sitting}} on a bench. (sit)' },
              { id: 'g2', text: 'He {{is cutting|’s cutting}} the bread with scissors. (cut)' },
              { id: 'g3', text: 'He {{is making|’s making}} a sandwich. (make)' },
              { id: 'g4', text: 'The man {{is eating|’s eating}} his lunch. (eat)' },
              { id: 'g5', text: 'Mr Bean {{isn’t talking|is not talking}}. (− talk)' },
              { id: 'g6', text: 'The man and Mr Bean {{are sitting|’re sitting}} together. (sit)' },
              { id: 'g7', text: 'I {{am laughing|’m laughing}}! (laugh)' }
            ]
          },
          {
            id: 'gram-freeze',
            type: 'choice',
            title: 'Freeze frame ⏸',
            instructions: 'Уяви, що ставиш відео на паузу. Обери правильне речення.',
            items: [
              { id: 'f1', q: 'Пауза! Що робить Мр Бін?', options: ['He washing the lettuce.', 'He is washing the lettuce.', 'He is wash the lettuce.'], answer: 1 },
              { id: 'f2', q: '___ he making a sandwich? — Yes, he is.', options: ['Does', 'Are', 'Is'], answer: 2 },
              { id: 'f3', q: 'What ___ they doing?', options: ['are', 'is', 'am'], answer: 0 },
              { id: 'f4', q: 'Is the man sneezing? — No, he ___.', options: ['isn’t', 'doesn’t', 'aren’t'], answer: 0 },
              { id: 'f5', q: 'He is crushing the pepper ___ his shoe.', options: ['on', 'with', 'in'], answer: 1 },
              { id: 'f6', q: 'Look! It ___!', options: ['rains', 'raining', 'is raining'], answer: 2, explain: 'Look! → зараз → Present Continuous.' }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення про відео.',
            items: [
              { id: 'o1', prompt: 'Що він робить?', answer: 'What is he doing?' },
              { id: 'o2', prompt: 'Він робить бутерброд.', answer: 'He is making a sandwich.' },
              { id: 'o3', prompt: 'Він ріже хліб ножицями.', answer: 'He is cutting the bread with scissors.', extra: ['knife'] },
              { id: 'o4', prompt: 'Чоловік не їсть.', answer: "The man isn't eating.", extra: ["doesn't"] }
            ]
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-commentator',
            type: 'speaking',
            title: 'Be the commentator 🎙',
            instructions: 'Увімкни відео без звуку і коментуй, як спортивний коментатор: що він робить зараз? Не страшно, якщо речення короткі!',
            video: VIDEO,
            phrases: ['Look! He is…', 'Now he is…', 'He is …ing with his…', 'The man is…', 'Oh no! He is…'],
            tasks: [
              { id: 'sp1', q: 'The start: where is he? What is he doing?', tips: 'He is sitting… He is taking … out of his coat.', model: 'Mr Bean is in the park. He is sitting on a bench. He is taking bread out of his coat.' },
              { id: 'sp2', q: 'The middle: describe 3 crazy things he is doing.', tips: 'He is cutting… with… / He is washing… / He is drying…', model: 'He is cutting the bread with scissors. He is washing the lettuce in the fountain. Now he is drying it with his sock!' },
              { id: 'sp3', q: 'What is the man on the bench doing? How does he feel?', tips: 'He is watching… He is surprised.', model: 'The man is eating his sandwich. He is watching Mr Bean. He is very surprised!' },
              { id: 'sp4', q: 'The end: what happens?', tips: 'He is sneezing… The man is giving…', model: 'The pepper makes him sneeze. Oh no! Now he hasn’t got a sandwich. The man is giving him half of his sandwich. That’s nice!' }
            ]
          },
          {
            id: 'speak-mime',
            type: 'speaking',
            title: 'Mime game: What am I doing? 🎭',
            instructions: 'Гра без слів, як у Мр Біна! Покажи дію жестами — викладач / партнер вгадує. Потім навпаки.',
            phrases: ['Are you…ing?', 'Yes, I am! / No, I’m not.', 'Are you …ing with…?', 'I know! You are…'],
            tasks: [
              { id: 'm1', q: 'Mime: making a sandwich. Partner asks: Are you…?', tips: 'Are you cooking? — No, I’m not. Are you making a sandwich? — Yes, I am!', model: '— Are you cooking? — No, I’m not. — Are you making a sandwich? — Yes, I am!' },
              { id: 'm2', q: 'Mime: brushing your teeth / washing your hair / dancing.', tips: 'Are you washing…? Are you dancing?', model: '— Are you washing your face? — No, I’m not. — Are you brushing your teeth? — Yes, I am!' },
              { id: 'm3', q: 'Your idea! Mime something funny, like Mr Bean.', tips: 'Are you … with a …?', model: '— Are you cutting your hair with scissors? — Yes, I am! 😄' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-sandwich',
            type: 'writing',
            title: 'My crazy sandwich 🥪',
            instructions: 'Уяви, що ти — Мр Бін. Ти в парку і робиш свій божевільний бутерброд. Напиши, що ти робиш зараз і чим.',
            prompt: 'Write 6–8 sentences (40–70 words).\n• Where are you? What are you doing? (I’m sitting…)\n• What food have you got? (I’ve got…)\n• 3 crazy actions with “with”: I’m cutting… with…\n• What are the people around you doing?',
            minWords: 40,
            maxWords: 80,
            phrases: ['I’m sitting in', 'I’ve got', 'I’m cutting', 'with my', 'People are', 'Now I’m'],
            checklist: ['am / is / are + -ing (не забувай is!)', 'Є 3 речення з with', 'Є речення про інших людей', 'Перевір правопис: cutting, sitting, making'],
            model: `I’m sitting in the park. It’s sunny and I’m very hungry! I’ve got some bread, cheese and an apple in my bag.

I’m cutting the bread with my keys. Now I’m putting the cheese on the bread with my phone. I’m washing the apple in the fountain.

A woman is looking at me. She is laughing. Two dogs are watching my sandwich. They are hungry too!`
          }
        ]
      }
    ],

    glossary: {
      'mr': 'містер', 'bean': 'біб (ім’я героя)', 'who': 'хто', 'funny': 'смішний', 'man': 'чоловік', 'british': 'британський', 'tv': 'телебачення',
      'tall': 'високий', 'thin': 'худий', 'brown': 'коричневий', 'hair': 'волосся', 'eyes': 'очі', 'usually': 'зазвичай', 'wears': 'носить',
      'jacket': 'піджак', 'red': 'червоний', 'tie': 'краватка', "doesn't": 'не', 'talk': 'говорити', 'a lot': 'багато', 'makes': 'робить',
      'faces': 'обличчя; гримаси', 'strange': 'дивний', 'things': 'речі', "that's why": 'ось чому', 'people': 'люди', 'all over the world': 'по всьому світу',
      'love': 'любити', 'need': 'потребувати', 'understand': 'розуміти', 'small': 'маленький', 'green': 'зелений', 'car': 'машина',
      'teddy bear': 'плюшевий ведмедик', 'teddy': 'ведмедик', 'best friend': 'найкращий друг', 'today': 'сьогодні', 'video': 'відео', 'park': 'парк',
      'lunchtime': 'час обіду', 'hungry': 'голодний', 'where': 'де', 'from': 'з', 'american': 'американський', 'films': 'фільми', 'book': 'книга',
      'black': 'чорний', 't-shirt': 'футболка', 'blue': 'синій', 'coat': 'пальто', 'hat': 'капелюх', 'cat': 'кіт', 'home': 'дім', 'shop': 'магазин',
      'picnic': 'пікнік', 'bench': 'лавка', 'park bench': 'лавка в парку', 'lunch': 'обід', 'bread': 'хліб', 'butter': 'вершкове масло', 'lettuce': 'салат (листя)',
      'pepper': 'перець', 'scissors': 'ножиці', 'sock': 'шкарпетка', 'shoe': 'черевик', 'credit card': 'банківська картка', 'card': 'картка',
      'hot water bottle': 'грілка', 'bottle': 'пляшка', 'sneeze': 'чхати', 'sneezing': 'чхає', 'tea': 'чай', 'milk': 'молоко', 'food': 'їжа',
      'drink': 'напій; пити', 'sandwich': 'бутерброд', 'cutting': 'ріже', 'cut': 'різати', 'putting': 'кладе', 'put': 'класти', 'washing': 'миє',
      'wash': 'мити', 'drying': 'сушить', 'dry': 'сушити', 'using': 'використовує', 'spreading': 'намащує', 'making': 'робить', 'make': 'робити',
      'crushing': 'розчавлює', 'fountain': 'фонтанчик', 'with': 'з; чим (інструмент)', 'knife': 'ніж', 'towel': 'рушник', 'sitting': 'сидить',
      'sit': 'сидіти', 'eating': 'їсть', 'eat': 'їсти', 'drinking': 'п’є', 'talking': 'говорить', 'watching': 'дивиться', 'watch': 'дивитися',
      'laugh': 'сміятися', 'laughing': 'сміється', 'together': 'разом', 'next to': 'поруч з', 'dog': 'собака', 'kitchen': 'кухня', 'café': 'кафе',
      'cake': 'торт', 'pizza': 'піца', 'bag': 'сумка', 'juice': 'сік', 'coffee': 'кава', 'cup': 'чашка', 'surprised': 'здивований', 'happens': 'стається',
      'end': 'кінець', 'start': 'початок', 'middle': 'середина', 'look': 'дивись', 'now': 'зараз', 'doing': 'робить', 'what': 'що', 'is': 'є',
      'raining': 'йде дощ', 'taking': 'бере', 'out of': 'з (зсередини)', 'crazy': 'божевільний', 'giving': 'дає', 'half': 'половина', 'nice': 'мило',
      'oh no': 'о ні', 'feel': 'почуватися', 'mime': 'пантоміма; показувати жестами', 'brushing': 'чистить', 'teeth': 'зуби', 'face': 'обличчя',
      'dancing': 'танцює', 'cooking': 'готує', 'idea': 'ідея', 'sunny': 'сонячно', 'cheese': 'сир', 'apple': 'яблуко', 'keys': 'ключі', 'phone': 'телефон',
      'woman': 'жінка', 'looking at': 'дивиться на', 'dogs': 'собаки', 'too': 'теж', 'around': 'навколо', 'commentator': 'коментатор',
      'captions': 'субтитри', 'freeze frame': 'стоп-кадр', 'lie': 'брехня', 'spot': 'помітити', 'tools': 'інструменти', "i'm": 'я (є)', "he's": 'він (є)',
      "isn't": 'не (є)', "aren't": 'не (є)', "i've got": 'у мене є'
    }
  });
})();
