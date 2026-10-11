/*
 * A1 · Module 5 · Lesson 1 — Hobbies (like / love / hate + -ing; object pronouns)
 * Review: Present Simple (module 3). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Find a hobby buddy!',
    text: `Our website helps people find friends with the same hobbies. Here are three new profiles.

DARYNA, 24, Kharkiv: I love dancing! I go to salsa classes twice a week. I also like cooking — my friends say my pizza is the best. I don’t like running. I hate it, really! I’m looking for a dance partner. Write to me!

PAUL, 31, Kyiv: I really like taking photos. I usually walk around the city at the weekend with my camera. I like reading too, especially detective stories. I don’t mind watching football, but I don’t play it. Do you like photography? Message me!

LENA & ROMAN, 40 and 42, Odesa: We enjoy hiking. We love the mountains, and our dog loves them too! We don’t like staying at home at the weekend. We’re looking for a hiking group. Join us!`
  };

  ENG.registerLesson({
    id: 'a1-m5-l1',
    level: 'a1',
    title: 'Hobbies. Хобі',
    subtitle: 'like / love / enjoy / hate + -ing · me, him, her, us, them',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Hobby buddies',
            instructions: 'Прочитай анкети на сайті, де люди шукають друзів за хобі.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What does Daryna love?', options: ['Running', 'Dancing', 'Hiking'], answer: 1 },
              { id: 'q2', q: 'How often does Daryna go to salsa classes?', options: ['Once a week', 'Twice a week', 'Every day'], answer: 1 },
              { id: 'q3', q: 'What does Paul like reading?', options: ['Detective stories', 'Love stories', 'Magazines'], answer: 0 },
              { id: 'q4', q: 'What do Lena and Roman enjoy?', options: ['Staying at home', 'Hiking', 'Cooking'], answer: 1 },
              { id: 'q5', q: 'Who is looking for a group?', options: ['Daryna', 'Paul', 'Lena and Roman'], answer: 2 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Daryna likes running.', answer: false, explain: '“I don’t like running. I hate it!”' },
              { id: 's2', s: 'Paul plays football.', answer: false, explain: '“I don’t mind watching football, but I don’t play it.”' },
              { id: 's3', s: 'Paul takes photos at the weekend.', answer: true },
              { id: 's4', s: 'Lena and Roman’s dog loves the mountains.', answer: true },
              { id: 's5', s: 'Lena and Roman like staying at home at the weekend.', answer: false, explain: '“We don’t like staying at home at the weekend.”' }
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
            title: 'Hobbies & free time',
            instructions: 'Популярні хобі. Зверни увагу на дієслова: go + -ing, play + гра, do + заняття.',
            cards: [
              { front: 'dancing', ipa: '/ˈdɑːnsɪŋ/', back: 'танці', example: 'I love dancing.' },
              { front: 'cooking', back: 'кулінарія, готування', example: 'She likes cooking Italian food.' },
              { front: 'taking photos', back: 'фотографування', example: 'He enjoys taking photos.' },
              { front: 'hiking', ipa: '/ˈhaɪkɪŋ/', back: 'піші походи', example: 'We go hiking in the mountains.' },
              { front: 'reading', back: 'читання', example: 'I like reading in bed.' },
              { front: 'painting / drawing', back: 'малювання (фарбами / олівцем)', example: 'My son loves drawing.' },
              { front: 'playing the guitar', ipa: '/ɡɪˈtɑː/', back: 'гра на гітарі', example: 'He is good at playing the guitar.' },
              { front: 'gardening', back: 'садівництво', example: 'My grandma loves gardening.' },
              { front: 'go swimming / go cycling', back: 'плавати / кататися на велосипеді', example: 'We go cycling on Sundays.' },
              { front: 'play football / chess', back: 'грати у футбол / шахи', example: 'Do you play chess?' },
              { front: 'free time', back: 'вільний час', example: 'What do you do in your free time?' },
              { front: 'I don’t mind…', back: 'я не проти…', example: 'I don’t mind cooking.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'go, play or do?',
            instructions: 'Поєднай дієслово з заняттям (go swimming, play the piano, do yoga…).',
            pairs: [
              ['go', 'swimming'],
              ['play', 'the piano'],
              ['do', 'yoga'],
              ['take', 'photos'],
              ['listen to', 'music'],
              ['ride', 'a bike'],
              ['watch', 'films'],
              ['read', 'detective stories']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What’s the hobby?',
            instructions: 'Встав хобі за описом. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'You need a camera for {{photography}}.' },
              { id: 'd2', text: 'You need boots and a backpack for {{hiking}}.' },
              { id: 'd3', text: 'You need a pan and good food for {{cooking}}.' },
              { id: 'd4', text: 'You need plants and flowers for {{gardening}}.' },
              { id: 'd5', text: 'You need music and good shoes for {{dancing}}.' },
              { id: 'd6', text: 'You need a bike for {{cycling}}.' }
            ],
            distractors: ['chess']
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
            title: 'like + -ing · object pronouns',
            instructions: 'Як сказати, що тобі подобається робити, і як вживати me, him, her, them.',
            html: `
<h3>1. like / love / enjoy / hate + дієслово з -ing</h3>
<p>Після дієслів «смаку» друге дієслово отримує <b>-ing</b>:</p>
<div class="ex-line">I <b>like</b> cook<mark>ing</mark>. — Мені подобається готувати.</div>
<div class="ex-line">She <b>loves</b> danc<mark>ing</mark>. — Вона обожнює танцювати.</div>
<div class="table-wrap"><table>
  <tr><th>Шкала</th><th>Приклад</th></tr>
  <tr><td>😍 <b>love</b></td><td>I love reading.</td></tr>
  <tr><td>😊 <b>like / enjoy</b></td><td>We enjoy hiking.</td></tr>
  <tr><td>😐 <b>don’t mind</b> (не проти)</td><td>I don’t mind cooking.</td></tr>
  <tr><td>🙁 <b>don’t like</b></td><td>He doesn’t like running.</td></tr>
  <tr><td>😠 <b>hate</b></td><td>I hate getting up early.</td></tr>
</table></div>
<p>💡 Пам’ятаємо Present Simple: he/she <b>likes, loves, enjoys, hates</b>; заперечення — <b>doesn’t like</b>; питання — <b>Do you like…? Does she enjoy…?</b></p>

<h3>2. Правопис -ing</h3>
<div class="table-wrap"><table>
  <tr><th>Правило</th><th>Приклади</th></tr>
  <tr><td>більшість: + ing</td><td>read → read<b>ing</b>, cook → cook<b>ing</b></td></tr>
  <tr><td>-e в кінці → прибираємо e</td><td>dance → danc<b>ing</b>, ride → rid<b>ing</b></td></tr>
  <tr><td>коротке слово: голосна + приголосна → подвоюємо</td><td>swim → swi<b>mm</b>ing, run → ru<b>nn</b>ing, shop → sho<b>pp</b>ing</td></tr>
</table></div>

<h3>3. Об’єктні займенники (кого? кому?)</h3>
<div class="table-wrap"><table>
  <tr><th>Хто? (підмет)</th><th>Кого? Кому? (додаток)</th><th>Приклад</th></tr>
  <tr><td>I</td><td><b>me</b></td><td>Write to <b>me</b>!</td></tr>
  <tr><td>you</td><td><b>you</b></td><td>I love <b>you</b>.</td></tr>
  <tr><td>he</td><td><b>him</b></td><td>I know <b>him</b>.</td></tr>
  <tr><td>she</td><td><b>her</b></td><td>Call <b>her</b>.</td></tr>
  <tr><td>it</td><td><b>it</b></td><td>I hate <b>it</b>!</td></tr>
  <tr><td>we</td><td><b>us</b></td><td>Join <b>us</b>!</td></tr>
  <tr><td>they</td><td><b>them</b></td><td>Our dog loves <b>them</b>.</td></tr>
</table></div>
<p>Підмет — <b>перед</b> дієсловом, об’єктний займенник — <b>після</b> дієслова або прийменника (to, with, for):<br>
<b>She</b> likes <b>him</b>, but <b>he</b> doesn’t like <b>her</b>. · Come with <b>us</b>!</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">I like cook.</span> → <span class="yes">I like cooking.</span><br>
<span class="no">She like dancing.</span> → <span class="yes">She likes dancing.</span><br>
<span class="no">Write to I.</span> → <span class="yes">Write to me.</span><br>
<span class="no">I love swiming.</span> → <span class="yes">I love swimming.</span></div>`
          },
          {
            id: 'gram-ing',
            type: 'gap',
            title: 'Write the -ing form',
            instructions: 'Напиши дієслово з -ing. Зверни увагу на правопис!',
            items: [
              { id: 'g1', text: 'I love {{reading}}. (read)' },
              { id: 'g2', text: 'She enjoys {{dancing}}. (dance)' },
              { id: 'g3', text: 'We like {{swimming}} in the sea. (swim)' },
              { id: 'g4', text: 'He hates {{running}}. (run)' },
              { id: 'g5', text: 'Do you like {{cooking}}? (cook)' },
              { id: 'g6', text: 'They don’t mind {{shopping}}. (shop)' },
              { id: 'g7', text: 'My son loves {{riding}} his bike. (ride)' }
            ]
          },
          {
            id: 'gram-pron',
            type: 'choice',
            title: 'Object pronouns',
            instructions: 'Обери правильний займенник.',
            items: [
              { id: 'p1', q: 'Daryna is my friend. I like ___ a lot.', options: ['she', 'her', 'hers'], answer: 1 },
              { id: 'p2', q: 'Paul is nice. Do you know ___?', options: ['him', 'he', 'his'], answer: 0 },
              { id: 'p3', q: 'We’re going hiking. Come with ___!', options: ['we', 'our', 'us'], answer: 2 },
              { id: 'p4', q: 'I love mountains. I visit ___ every summer.', options: ['they', 'them', 'their'], answer: 1 },
              { id: 'p5', q: 'Running? I hate ___!', options: ['it', 'him', 'them'], answer: 0 },
              { id: 'p6', q: 'Please write to ___. I’m waiting!', options: ['I', 'my', 'me'], answer: 2 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Мені подобається фотографувати.', answer: 'I like taking photos.', extra: ['take'] },
              { id: 'o2', prompt: 'Вона не любить бігати.', answer: "She doesn't like running." },
              { id: 'o3', prompt: 'Тобі подобається готувати?', answer: 'Do you like cooking?' },
              { id: 'o4', prompt: 'Наш собака їх любить.', answer: 'Our dog loves them.', extra: ['they'] }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: Present Simple',
            instructions: 'Згадаймо модуль 3. Встав дієслово в правильній формі.',
            items: [
              { id: 'r1', text: 'Daryna {{goes}} to salsa classes twice a week. (go)' },
              { id: 'r2', text: 'Paul {{doesn’t play|does not play}} football. (− play)' },
              { id: 'r3', text: '{{Does}} Paul like reading? — Yes, he does.' },
              { id: 'r4', text: 'Lena and Roman usually {{walk}} in the mountains. (walk)' },
              { id: 'r5', text: 'What {{do}} you do in your free time?' }
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
            title: 'A first meeting',
            instructions: 'Даря і Павло знайомляться через сайт. Послухай їхню розмову.',
            audio: {
              title: 'Dialogue: Daryna & Paul',
              lines: [
                { who: 'Paul', text: 'Hi, Daryna! So, you love dancing?' },
                { who: 'Daryna', text: 'Yes, I do! I go to salsa classes. Do you like dancing, Paul?' },
                { who: 'Paul', text: 'Hmm, not really. I don’t mind it, but I’m not good at it. I love taking photos.' },
                { who: 'Daryna', text: 'Oh, I like photography too! My sister is a photographer. Do you know her? Her name is Kira.' },
                { who: 'Paul', text: 'Kira Lysenko? Yes, I know her! Her photos are amazing.' },
                { who: 'Daryna', text: 'Great! Come to our salsa party on Friday. Take photos of us!' },
                { who: 'Paul', text: 'Good idea. I can take photos and you can dance!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Does Paul like dancing?', options: ['He loves it.', 'He doesn’t mind it.', 'He hates it.'], answer: 1 },
              { id: 'l2', q: 'Who is Kira?', options: ['Daryna’s sister', 'Paul’s sister', 'A dance teacher'], answer: 0 },
              { id: 'l3', q: 'What is Kira’s job?', options: ['Dancer', 'Photographer', 'Cook'], answer: 1 },
              { id: 'l4', q: 'When is the salsa party?', options: ['On Friday', 'On Saturday', 'On Sunday'], answer: 0 },
              { id: 'l5', q: 'What can Paul do at the party?', options: ['Dance', 'Cook', 'Take photos'], answer: 2 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'Do you like dancing?' },
              { id: 'dc2', text: 'I love taking photos.' },
              { id: 'dc3', text: 'Do you know her?' },
              { id: 'dc4', text: 'Take photos of us!' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-profile',
            type: 'writing',
            title: 'Your hobby profile',
            instructions: 'Напиши свою анкету для сайту «Find a hobby buddy».',
            prompt: 'Write your profile (60–80 words).\n• Name, age, city.\n• What do you love / like / enjoy doing? How often?\n• What don’t you like doing? What do you hate?\n• What kind of buddy are you looking for?\n• Finish with an invitation using an object pronoun (Write to me! Join us!).',
            minWords: 60,
            maxWords: 90,
            phrases: ['I love', 'I enjoy', 'I don’t mind', 'I hate', 'I’m looking for', 'Write to me', 'with me'],
            checklist: ['Після like/love/enjoy/hate — дієслово з -ing', 'Правопис -ing (dancing, swimming)', 'Є частотний прислівник або twice a week', 'Є об’єктний займенник (me, us, him…)'],
            model: `IRYNA, 29, Lviv

I love playing board games! I usually play with my friends on Friday evenings. I also enjoy cycling — I often go to the park by bike at the weekend. I don’t mind cooking, but I’m not very good at it.

I hate watching horror films. They scare me!

I’m looking for people for a board game club. Do you like strategy games? Write to me and play with us!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-hobbies',
            type: 'speaking',
            title: 'Talk about your free time',
            instructions: 'Відповідай уголос 2–3 реченнями.',
            phrases: ['I love…ing', 'I really enjoy…', 'I don’t mind…', 'I can’t stand / I hate…', 'In my free time I…'],
            tasks: [
              { id: 'sp1', q: 'What do you like doing in your free time?', tips: 'I love … I also enjoy … I usually … at the weekend.', model: 'I love reading and I really enjoy cooking. I usually cook something new at the weekend.' },
              { id: 'sp2', q: 'What housework don’t you mind? What do you hate?', tips: 'I don’t mind … but I hate …', model: 'I don’t mind washing the dishes, but I hate ironing.' },
              { id: 'sp3', q: 'What does your best friend like doing? Do you do it with him or her?', tips: 'He/She loves … I sometimes … with him/her.', model: 'My friend Olia loves hiking. I sometimes go hiking with her.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'find': 'знайти', 'hobby': 'хобі', 'hobbies': 'хобі (мн.)', 'buddy': 'друзяка, напарник', 'website': 'вебсайт', 'helps': 'допомагає', 'people': 'люди',
      'friends': 'друзі', 'same': 'однакові', 'new': 'нові', 'profiles': 'анкети', 'profile': 'анкета', 'love': 'любити, обожнювати', 'dancing': 'танці',
      'salsa': 'сальса', 'classes': 'заняття', 'twice a week': 'двічі на тиждень', 'once a week': 'раз на тиждень', 'also': 'також', 'like': 'подобатися',
      'cooking': 'готування', 'say': 'кажуть', 'pizza': 'піца', 'best': 'найкращий', 'running': 'біг', 'hate': 'ненавидіти', 'really': 'справді',
      "i'm looking for": 'я шукаю', 'looking for': 'шукати', 'partner': 'партнер', 'write to me': 'напиши мені', 'taking photos': 'фотографування',
      'take photos': 'фотографувати', 'walk around': 'гуляти по', 'city': 'місто', 'weekend': 'вихідні', 'camera': 'фотоапарат', 'reading': 'читання',
      'too': 'теж', 'especially': 'особливо', 'detective stories': 'детективи', "don't mind": 'не проти', 'watching': 'дивитися', 'football': 'футбол',
      'play': 'грати', 'photography': 'фотографія', 'message me': 'напиши мені', 'enjoy': 'насолоджуватися, любити', 'hiking': 'піші походи', 'mountains': 'гори',
      'dog': 'собака', 'them': 'їх', 'staying at home': 'сидіти вдома', 'group': 'група', 'join us': 'приєднуйтеся до нас', 'us': 'нас', 'me': 'мене, мені',
      'him': 'його, йому', 'her': 'її, їй', 'it': 'це, його', 'how often': 'як часто', 'magazines': 'журнали', 'love stories': 'любовні історії',
      'painting': 'малювання фарбами', 'drawing': 'малювання олівцем', 'guitar': 'гітара', 'good at': 'добре вміти', 'gardening': 'садівництво',
      'swimming': 'плавання', 'cycling': 'їзда на велосипеді', 'chess': 'шахи', 'free time': 'вільний час', 'tennis': 'теніс', 'yoga': 'йога',
      'piano': 'піаніно', 'karate': 'карате', 'listen to': 'слухати', 'music': 'музика', 'need': 'потрібен', 'boots': 'черевики', 'backpack': 'рюкзак',
      'pan': 'сковорідка', 'food': 'їжа', 'plants': 'рослини', 'flowers': 'квіти', 'shoes': 'взуття', 'bike': 'велосипед', 'know': 'знати', 'come': 'приходь',
      'with': 'з', 'visit': 'відвідувати', 'summer': 'літо', 'waiting': 'чекаю', 'sea': 'море', 'shopping': 'шопінг', 'riding': 'їзда', 'son': 'син',
      'not really': 'не дуже', 'photographer': 'фотограф', 'sister': 'сестра', 'amazing': 'дивовижні', 'great': 'чудово', 'party': 'вечірка', 'friday': 'п’ятниця',
      'good idea': 'гарна ідея', 'can': 'можу, вмію', 'dance': 'танцювати', 'board games': 'настільні ігри', 'evenings': 'вечори', 'park': 'парк',
      'horror films': 'фільми жахів', 'scare': 'лякають', 'club': 'клуб', 'strategy games': 'стратегічні ігри', 'housework': 'хатня робота',
      'washing the dishes': 'миття посуду', 'ironing': 'прасування', "can't stand": 'терпіти не можу', 'something': 'щось', 'best friend': 'найкращий друг',
      "i'm": 'я є', "we're": 'ми є', "don't": 'не', "doesn't": 'не'
    }
  });
})();
