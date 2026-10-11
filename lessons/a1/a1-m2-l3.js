/*
 * A1 · Module 2 · Lesson 3 — Personality (adjectives: position, very/quite/not very; and / but)
 * Review: have got / has got (lesson 2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'My classmates',
    text: `There are fifteen students in my English class. They are all very different!

Olga is a very clever girl. She has got good marks in every subject. She is quiet, but she is really friendly.

Max is funny. He has got a lot of jokes and our class is never boring with him. But he isn’t very hard-working — his homework is often late!

Sara is quite shy. She hasn’t got many friends in the class, but she is kind and polite. She is a great artist.

And our teacher, Mr Wood? He is strict but fair. He has got a loud voice and a warm smile. We all love him!`
  };

  ENG.registerLesson({
    id: 'a1-m2-l3',
    level: 'a1',
    title: 'Personality. Характер',
    subtitle: 'прикметники: місце в реченні · very / quite / not very · and / but',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Different classmates',
            instructions: 'Прочитай про однокласників і обери правильну відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'How many students are in the class?', options: ['Five', 'Fifteen', 'Fifty'], answer: 1 },
              { id: 'q2', q: 'Olga is…', options: ['clever and friendly', 'funny and lazy', 'shy and rude'], answer: 0 },
              { id: 'q3', q: 'What is Max’s problem?', options: ['He is shy.', 'His homework is often late.', 'He is rude.'], answer: 1 },
              { id: 'q4', q: 'What is Sara good at?', options: ['Sport', 'Maths', 'Art'], answer: 2 },
              { id: 'q5', q: 'Mr Wood is…', options: ['strict but fair', 'lazy and funny', 'shy and quiet'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Olga is noisy.', answer: false, explain: '“She is quiet.”' },
              { id: 's2', s: 'The class is boring with Max.', answer: false, explain: '“our class is never boring with him”' },
              { id: 's3', s: 'Sara has got a lot of friends in the class.', answer: false, explain: '“She hasn’t got many friends in the class.”' },
              { id: 's4', s: 'Sara is polite.', answer: true },
              { id: 's5', s: 'Mr Wood has got a quiet voice.', answer: false, explain: '“He has got a loud voice.”' }
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
            title: 'Personality adjectives',
            instructions: 'Слова, щоб описати характер людини. Багато з них мають протилежність — шукай пари!',
            cards: [
              { front: 'friendly', ipa: '/ˈfrendli/', back: 'привітний, дружній', example: 'Olga is really friendly.' },
              { front: 'clever', ipa: '/ˈklevə/', back: 'розумний', example: 'She’s a very clever girl.' },
              { front: 'funny', ipa: '/ˈfʌni/', back: 'смішний, з гумором', example: 'Max is funny.' },
              { front: 'shy', ipa: '/ʃaɪ/', back: 'сором’язливий', example: 'Sara is quite shy.' },
              { front: 'kind', ipa: '/kaɪnd/', back: 'добрий', example: 'My grandmother is very kind.' },
              { front: 'polite / rude', ipa: '/pəˈlaɪt/ /ruːd/', back: 'ввічливий / грубий', example: 'Be polite, don’t be rude!' },
              { front: 'hard-working / lazy', ipa: '/ˈleɪzi/', back: 'працьовитий / лінивий', example: 'He isn’t very hard-working.' },
              { front: 'quiet / noisy', ipa: '/ˈkwaɪət/ /ˈnɔɪzi/', back: 'тихий / галасливий', example: 'Olga is quiet. Max is noisy.' },
              { front: 'strict', ipa: '/strɪkt/', back: 'суворий', example: 'Our teacher is strict.' },
              { front: 'fair', ipa: '/feə/', back: 'справедливий', example: 'He is strict but fair.' },
              { front: 'brave', ipa: '/breɪv/', back: 'хоробрий', example: 'Firefighters are brave.' },
              { front: 'boring / interesting', back: 'нудний / цікавий', example: 'The lesson isn’t boring. It’s interesting!' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Opposites',
            instructions: 'Поєднай протилежні за значенням прикметники.',
            pairs: [
              ['polite', 'rude'],
              ['hard-working', 'lazy'],
              ['quiet', 'noisy'],
              ['boring', 'interesting'],
              ['friendly', 'unfriendly'],
              ['kind', 'unkind'],
              ['clever', 'stupid'],
              ['happy', 'sad']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What are they like?',
            instructions: 'Обери прикметник за описом. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'Tom always says “please” and “thank you”. He is {{polite}}.' },
              { id: 'd2', text: 'Ann doesn’t like to talk to new people. She is {{shy}}.' },
              { id: 'd3', text: 'My cat sleeps all day. It is {{lazy}}.' },
              { id: 'd4', text: 'Dan’s jokes are great. He is {{funny}}.' },
              { id: 'd5', text: 'Our neighbours have loud parties. They are {{noisy}}.' },
              { id: 'd6', text: 'She works a lot and never stops. She is {{hard-working}}.' }
            ],
            distractors: ['strict']
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
            title: 'Adjectives + very / quite + and / but',
            instructions: 'Прикметники (який?) в англійській — простіші, ніж в українській. Ось 4 правила.',
            html: `
<h3>1. Прикметник не змінюється</h3>
<p>В українській: добр<b>ий</b>, добр<b>а</b>, добр<b>е</b>, добр<b>і</b>. В англійській — завжди однаково:</p>
<div class="ex-line">a <b>kind</b> man · a <b>kind</b> woman · <b>kind</b> people</div>
<p>⚠️ Прикметник <b>ніколи не отримує -s</b>: <span class="no">kinds people</span> → <span class="yes">kind people</span>.</p>

<h3>2. Де стоїть прикметник?</h3>
<div class="table-wrap"><table>
  <tr><th>Місце</th><th>Схема</th><th>Приклад</th></tr>
  <tr><td><b>перед іменником</b></td><td>a/an + прикметник + іменник</td><td>She is a <mark>clever</mark> girl.<br>He has got a <mark>loud</mark> voice.</td></tr>
  <tr><td><b>після to be</b></td><td>хто + am/is/are + прикметник</td><td>She is <mark>clever</mark>.<br>They are <mark>friendly</mark>.</td></tr>
</table></div>
<p>💡 a чи an — дивимось на перше слово після артикля: <b>an</b> interesting girl, <b>a</b> funny boy.</p>

<h3>3. Наскільки? very / really / quite / not very</h3>
<div class="table-wrap"><table>
  <tr><th>Слово</th><th>Значення</th><th>Приклад</th></tr>
  <tr><td><b>very / really</b></td><td>дуже</td><td>Olga is <b>very</b> clever. She is <b>really</b> friendly.</td></tr>
  <tr><td><b>quite</b></td><td>досить, доволі</td><td>Sara is <b>quite</b> shy.</td></tr>
  <tr><td><b>not very</b></td><td>не дуже</td><td>Max is<b>n’t very</b> hard-working.</td></tr>
</table></div>
<p>Ці слова стоять <b>перед прикметником</b>: very kind, quite tall. З артиклем: <b>a very</b> kind man, <b>quite a</b> shy girl.</p>

<h3>4. Сполучники and / but</h3>
<ul>
  <li><b>and</b> (і) — дві схожі думки: She is clever <b>and</b> friendly.</li>
  <li><b>but</b> (але) — протилежні думки: He is strict <b>but</b> fair. Max is funny, <b>but</b> he is lazy.</li>
</ul>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">She is a girl clever.</span> → <span class="yes">She is a clever girl.</span><br>
<span class="no">They are friendlys.</span> → <span class="yes">They are friendly.</span><br>
<span class="no">He is very much funny.</span> → <span class="yes">He is very funny.</span><br>
<span class="no">She is clever but friendly.</span> → <span class="yes">She is clever and friendly.</span> <span class="muted">(обидві якості хороші → and)</span></div>`
          },
          {
            id: 'gram-position',
            type: 'order',
            title: 'Where is the adjective?',
            instructions: 'Склади речення. Прикметник — перед іменником або після to be.',
            items: [
              { id: 'o1', prompt: 'Вона розумна дівчина.', answer: 'She is a clever girl.' },
              { id: 'o2', prompt: 'Мої друзі дуже привітні.', answer: 'My friends are very friendly.', extra: ['friendlys'] },
              { id: 'o3', prompt: 'У нього гучний голос.', answer: 'He has got a loud voice.' },
              { id: 'o4', prompt: 'Він не дуже працьовитий.', answer: "He isn't very hard-working." }
            ]
          },
          {
            id: 'gram-andbut',
            type: 'choice',
            title: 'and or but?',
            instructions: 'Обери and (схожі думки) або but (протилежні).',
            items: [
              { id: 'a1', q: 'Olga is clever ___ friendly.', options: ['and', 'but'], answer: 0 },
              { id: 'a2', q: 'Mr Wood is strict ___ fair.', options: ['and', 'but'], answer: 1 },
              { id: 'a3', q: 'Max is funny, ___ he is lazy.', options: ['and', 'but'], answer: 1 },
              { id: 'a4', q: 'Sara is kind ___ polite.', options: ['and', 'but'], answer: 0 },
              { id: 'a5', q: 'My dog is small, ___ it is very brave!', options: ['and', 'but'], answer: 1 },
              { id: 'a6', q: 'The lesson is interesting ___ useful.', options: ['and', 'but'], answer: 0 }
            ]
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Correct the mistakes',
            instructions: 'У кожному реченні є помилка. Напиши правильний варіант пропущеного фрагмента.',
            items: [
              { id: 'g1', text: 'She is a girl clever. → She is a {{clever girl}}.' },
              { id: 'g2', text: 'They are nices people. → They are {{nice}} people.' },
              { id: 'g3', text: 'It’s a interesting book. → It’s {{an}} interesting book.' },
              { id: 'g4', text: 'He very is funny. → He is {{very funny}}.' },
              { id: 'g5', text: 'She is clever but kind. → She is clever {{and}} kind.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'gap',
            title: '↺ Повторення: have got / has got',
            instructions: 'Згадаймо урок 2. Встав have got, has got, haven’t got або hasn’t got.',
            items: [
              { id: 'r1', text: 'Max {{has got|’s got}} a lot of jokes.' },
              { id: 'r2', text: 'Sara {{hasn’t got|has not got}} many friends. (−)' },
              { id: 'r3', text: 'We {{have got|’ve got}} a strict teacher.' },
              { id: 'r4', text: '{{Has}} Mr Wood got a loud voice? — Yes, he has.' },
              { id: 'r5', text: 'I {{haven’t got|have not got}} a brother. (−)' }
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
            title: 'A new flatmate',
            instructions: 'Анна шукає сусідку по квартирі й говорить з подругою про двох кандидаток. Послухай і дай відповіді.',
            audio: {
              title: 'Dialogue: Anna & Lucy',
              lines: [
                { who: 'Lucy', text: 'So, Anna, who is your new flatmate? Kim or Jess?' },
                { who: 'Anna', text: 'Hmm. Kim is very friendly and funny, but she is quite noisy. She has got a lot of parties.' },
                { who: 'Lucy', text: 'And Jess?' },
                { who: 'Anna', text: 'Jess is quiet and polite. She is a student and she is really hard-working.' },
                { who: 'Lucy', text: 'Is she shy?' },
                { who: 'Anna', text: 'Yes, a little. But she is very kind. And she has got a cat!' },
                { who: 'Lucy', text: 'A cat? You love cats! So, it’s Jess!' },
                { who: 'Anna', text: 'Yes, it’s Jess!' }
              ]
            },
            items: [
              { id: 'l1', q: 'Kim is friendly, but…', options: ['she is lazy', 'she is noisy', 'she is rude'], answer: 1 },
              { id: 'l2', q: 'Jess is…', options: ['quiet and polite', 'noisy and funny', 'lazy and rude'], answer: 0 },
              { id: 'l3', q: 'What is Jess?', options: ['A teacher', 'A student', 'A doctor'], answer: 1 },
              { id: 'l4', q: 'What has Jess got?', options: ['A dog', 'A cat', 'A lot of parties'], answer: 1 },
              { id: 'l5', q: 'Who is Anna’s new flatmate?', options: ['Kim', 'Jess', 'Lucy'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'She is very friendly.' },
              { id: 'dc2', text: 'He is strict but fair.' },
              { id: 'dc3', text: 'My sister is quite shy.' },
              { id: 'dc4', text: 'They are kind and polite.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-friend',
            type: 'writing',
            title: 'My best friend',
            instructions: 'Опиши свого найкращого друга чи подругу: зовнішність і характер. Використай very / quite і and / but.',
            prompt: 'Write about your best friend (60–80 words).\n• Who is he/she? How old?\n• Appearance: has got… (from lesson 2)\n• Personality: 3–4 adjectives with very / quite / not very.\n• Use and and but.\n• Why is he/she your best friend?',
            minWords: 60,
            maxWords: 90,
            phrases: ['My best friend is', 'very', 'quite', 'not very', 'and', 'but', 'has got'],
            checklist: ['Є зовнішність з has got', 'Є 3–4 прикметники характеру', 'Є very / quite / not very перед прикметником', 'Є and і but', 'Прикметники без -s'],
            model: `My best friend is Kate. She’s twenty-six. She is quite tall and she has got curly red hair and green eyes.

Kate is very funny and kind. She is really hard-working, but she isn’t very organised — her bag is always a mess! She is a little shy with new people, but with friends she is noisy and happy.

She is my best friend because she is always there for me.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-personality',
            type: 'speaking',
            title: 'What are they like?',
            instructions: 'Відповідай уголос 2–3 реченнями. Додавай very / quite / not very.',
            phrases: ['I’m quite…', 'He/She is very…', '…but…', 'I’m not very…', 'a … person'],
            tasks: [
              { id: 'sp1', q: 'What are you like? Describe your personality.', tips: 'I’m quite … I’m very … but I’m not very …', model: 'I’m quite shy, but I’m very friendly. I’m hard-working, but I’m not very organised.' },
              { id: 'sp2', q: 'Describe a good teacher. What is he or she like?', tips: 'A good teacher is … and …', model: 'A good teacher is strict but fair. He or she is kind and very patient.' },
              { id: 'sp3', q: 'Describe someone in your family: appearance and personality.', tips: 'My … has got … He/She is …', model: 'My dad has got short grey hair. He is very funny and really kind.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'classmates': 'однокласники', 'fifteen': 'п’ятнадцять', 'fifty': 'п’ятдесят', 'students': 'учні', 'class': 'клас', 'all': 'всі', 'very': 'дуже',
      'different': 'різний', 'clever': 'розумний', 'girl': 'дівчина', 'marks': 'оцінки', 'mark': 'оцінка', 'every': 'кожен', 'subject': 'предмет',
      'quiet': 'тихий', 'but': 'але', 'really': 'справді, дуже', 'friendly': 'привітний', 'funny': 'смішний', 'a lot of': 'багато', 'jokes': 'жарти',
      'joke': 'жарт', 'never': 'ніколи', 'boring': 'нудний', 'with': 'з', 'him': 'ним', 'hard-working': 'працьовитий', 'homework': 'домашнє завдання',
      'often': 'часто', 'late': 'пізно, із запізненням', 'quite': 'досить', 'shy': 'сором’язливий', 'many': 'багато', 'kind': 'добрий', 'polite': 'ввічливий',
      'great': 'чудовий', 'artist': 'художник', 'art': 'мистецтво, малювання', 'teacher': 'вчитель', 'strict': 'суворий', 'fair': 'справедливий',
      'loud': 'гучний', 'voice': 'голос', 'warm': 'теплий', 'smile': 'усмішка', 'love': 'любити', 'lazy': 'лінивий', 'rude': 'грубий', 'problem': 'проблема',
      'good at': 'добре вміє', 'sport': 'спорт', 'maths': 'математика', 'noisy': 'галасливий', 'brave': 'хоробрий', 'interesting': 'цікавий',
      'unfriendly': 'непривітний', 'unkind': 'недобрий', 'stupid': 'дурний', 'happy': 'щасливий', 'sad': 'сумний', 'always': 'завжди', 'says': 'каже',
      'please': 'будь ласка', 'thank you': 'дякую', "doesn't like": 'не любить', 'talk': 'говорити', 'new': 'новий', 'people': 'люди', 'sleeps': 'спить',
      'all day': 'весь день', 'neighbours': 'сусіди', 'parties': 'вечірки', 'party': 'вечірка', 'works': 'працює', 'a lot': 'багато', 'stops': 'зупиняється',
      'firefighters': 'пожежники', "don't be": 'не будь', 'lesson': 'урок', 'useful': 'корисний', 'book': 'книга', 'nice': 'приємний', 'man': 'чоловік',
      'woman': 'жінка', 'flatmate': 'сусід(ка) по квартирі', 'so': 'отже, тож', 'little': 'трохи; маленький', 'a little': 'трохи', 'cat': 'кіт',
      'cats': 'коти', 'best friend': 'найкращий друг', 'organised': 'організований', 'mess': 'безлад', 'because': 'тому що', 'there for me': 'поруч зі мною',
      'patient': 'терплячий', 'someone': 'хтось', 'family': 'сім’я', 'appearance': 'зовнішність', 'personality': 'характер', 'grey': 'сивий',
      'describe': 'описати', 'like': 'подобатися; як', 'what are they like': 'які вони (за характером)', 'adjective': 'прикметник', 'adjectives': 'прикметники',
      'correct': 'виправити', 'mistakes': 'помилки', 'dog': 'собака', 'small': 'маленький', 'has got': 'має', 'have got': 'мати', "hasn't got": 'не має',
      "isn't": 'не є', "he's": 'він є', "she's": 'вона є', "it's": 'це є', "i'm": 'я є'
    }
  });
})();
