/*
 * A1 · Module 8 · Lesson 1 — Weather (Present Simple vs Present Continuous)
 * Easy review lesson: "usually" vs "now" through the weather. Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Weather chat: What’s the weather like?',
    text: `Olena (Kyiv): Hi friends! It’s November. In Kyiv it’s usually cold and cloudy in November. But today the sun is shining! I’m walking in the park.

Tom (London): Lucky you! In London it rains a lot. And guess what? It’s raining now, again! I’m sitting at home and I’m drinking tea.

Maria (Barcelona): Here it’s usually warm and sunny. But today it’s very windy. My umbrella is flying away! 😄

Ken (Tokyo): It isn’t raining here. It’s cold, but it’s not windy. I’m wearing my big coat and a warm hat.

Olena: Ha ha! Do you like cold weather, Ken?

Ken: No, I don’t. I love summer. In summer it’s hot and I swim every day.`
  };

  ENG.registerLesson({
    id: 'a1-m8-l1',
    level: 'a1',
    title: 'Weather: usually… but today!',
    subtitle: 'Погода · Present Simple (зазвичай) і Present Continuous (зараз)',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Weather chat',
            instructions: 'Прочитай чат друзів з різних міст і обери відповідь.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What is the weather usually like in Kyiv in November?', options: ['Hot and sunny', 'Warm and windy', 'Cold and cloudy'], answer: 2 },
              { id: 'q2', q: 'What is Olena doing today?', options: ['She’s walking in the park.', 'She’s drinking tea.', 'She’s swimming.'], answer: 0 },
              { id: 'q3', q: 'What is the weather like in London now?', options: ['It’s snowing.', 'It’s raining.', 'It’s sunny.'], answer: 1 },
              { id: 'q4', q: 'What is the problem in Barcelona today?', options: ['It’s very cold.', 'It’s raining.', 'It’s very windy.'], answer: 2 },
              { id: 'q5', q: 'What is Ken wearing?', options: ['A big coat and a warm hat', 'Shorts and a T-shirt', 'A raincoat'], answer: 0 },
              { id: 'q6', q: 'What does Ken do every day in summer?', options: ['He walks in the park.', 'He swims.', 'He drinks tea.'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'It rains a lot in London.', answer: true },
              { id: 's2', s: 'Tom is walking in the park now.', answer: false, explain: 'Він сидить удома і п’є чай.' },
              { id: 's4', s: 'It’s raining in Tokyo now.', answer: false, explain: '“It isn’t raining here.”' },
              { id: 's3', s: 'It’s usually warm in Barcelona.', answer: true },
              { id: 's5', s: 'Ken doesn’t like cold weather.', answer: true, explain: '“No, I don’t. I love summer.”' },
              { id: 's6', s: 'Olena is sitting at home today.', answer: false, explain: 'Вона гуляє в парку — світить сонце!' }
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
            title: 'Weather words',
            instructions: 'Слова про погоду. Натисни на картку, щоб побачити переклад.',
            cards: [
              { front: 'sunny', ipa: '/ˈsʌni/', back: 'сонячно', example: 'It’s sunny today.' },
              { front: 'cloudy', ipa: '/ˈklaʊdi/', back: 'хмарно', example: 'It’s cloudy and grey.' },
              { front: 'rainy', back: 'дощово', example: 'London is often rainy.' },
              { front: 'windy', back: 'вітряно', example: 'It’s very windy today.' },
              { front: 'snowy', back: 'сніжно', example: 'It’s snowy in winter.' },
              { front: 'hot / warm', back: 'спекотно / тепло', example: 'It’s hot in summer.' },
              { front: 'cold', back: 'холодно', example: 'It’s cold in November.' },
              { front: 'It’s raining.', back: 'Йде дощ (зараз).', example: 'Take an umbrella — it’s raining!' },
              { front: 'It’s snowing.', back: 'Йде сніг (зараз).', example: 'Look! It’s snowing!' },
              { front: 'The sun is shining.', back: 'Світить сонце.', example: 'The sun is shining today.' },
              { front: 'umbrella', ipa: '/ʌmˈbrelə/', back: 'парасолька', example: 'My umbrella is flying away!' },
              { front: 'What’s the weather like?', back: 'Яка погода?', example: 'What’s the weather like in Kyiv?' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Sun → sunny',
            instructions: 'Поєднай слово з прикметником про погоду.',
            pairs: [
              ['sun', 'sunny'],
              ['cloud', 'cloudy'],
              ['rain', 'rainy'],
              ['wind', 'windy'],
              ['snow', 'snowy'],
              ['fog', 'foggy']
            ]
          },
          {
            id: 'vocab-sort',
            type: 'sort',
            title: 'Hot or cold?',
            instructions: 'Розклади слова: це про спеку чи про холод?',
            columns: [
              { title: 'Hot weather', ua: 'спека', items: ['sunny', 'summer', 'shorts', 'sunglasses', 'swim', 'ice cream'] },
              { title: 'Cold weather', ua: 'холод', items: ['snowy', 'winter', 'a coat', 'a warm hat', 'gloves', 'hot tea'] }
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
            title: 'Usually… but now! Present Simple і Present Continuous',
            instructions: 'Обидва часи ти вже знаєш. Сьогодні просто вчимося їх розрізняти — на прикладі погоди.',
            html: `
<h3>1. Головна ідея</h3>
<div class="table-wrap"><table>
  <tr><th>Present Simple — зазвичай, завжди</th><th>Present Continuous — зараз</th></tr>
  <tr><td>It <b>rains</b> a lot in London.</td><td>Look! It<b>’s raining</b> now.</td></tr>
  <tr><td>It <b>snows</b> in winter.</td><td>It<b>’s snowing</b> today!</td></tr>
  <tr><td>I usually <b>wear</b> a coat in November.</td><td>Today I<b>’m wearing</b> a T-shirt.</td></tr>
  <tr><td><b>usually, always, often, every day, in winter</b></td><td><b>now, right now, today, at the moment, Look!</b></td></tr>
</table></div>

<div class="tip">💡 <b>Нагадай собі!</b><br>
<b>Does</b> it <b>rain</b> a lot in London? — Yes, it <b>does</b>. / No, it <b>doesn’t</b>.<br>
<b>Is</b> it <b>raining</b> now? — Yes, it <b>is</b>. / No, it <b>isn’t</b>.<br>
<b>Do</b> you <b>like</b> snow? — Yes, I <b>do</b>. / No, I <b>don’t</b>.<br>
<b>Are</b> you <b>wearing</b> a coat today? — Yes, I <b>am</b>. / No, I<b>’m not</b>.</div>

<h3>2. Як утворюється: формули</h3>
<p class="formula-legend"><span class="f-s">Підмет</span> <span class="f-aux">Допоміжне</span> <span class="f-v">Дієслово</span> <span class="f-neg">not</span></p>

<p><b>Present Simple</b> (зазвичай)</p>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b> I / you / we / they</td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-v">V1</span></div></td>
      <td>I <b>wear</b> a coat in winter.</td></tr>
  <tr><td><b>+</b> he / she / it</td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-v">V1 + s / es</span></div></td>
      <td>It <b>rains</b> a lot.<br>She <b>swims</b> in summer.</td></tr>
  <tr><td><b>−</b></td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">do / does</span><span class="f-op">+</span><span class="f-neg">not</span><span class="f-op">+</span><span class="f-v">V1</span></div></td>
      <td>It <b>doesn’t snow</b> in Barcelona.<br>I <b>don’t like</b> rain.</td></tr>
  <tr><td><b>?</b></td>
      <td><div class="formula"><span class="f-aux">Do / Does</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V1</span><span class="f-op">?</span></div></td>
      <td><b>Does</b> it <b>snow</b> in Kyiv?<br><b>Do</b> you <b>like</b> winter?</td></tr>
  <tr><td><b>?</b> з питальним словом</td>
      <td><div class="formula"><span class="f-s">What / When…</span><span class="f-op">+</span><span class="f-aux">do / does</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V1</span><span class="f-op">?</span></div></td>
      <td><b>When does</b> it <b>snow</b> in Ukraine?</td></tr>
  <tr><td>Короткі відповіді</td>
      <td><div class="formula"><span class="f-s">Yes / No, підмет</span><span class="f-op">+</span><span class="f-aux">do / does</span><span class="f-op">(</span><span class="f-neg">n’t</span><span class="f-op">)</span></div></td>
      <td>Yes, it <b>does</b>. / No, I <b>don’t</b>.</td></tr>
</table></div>

<p><b>Present Continuous</b> (зараз)</p>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b></td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-v">V-ing</span></div></td>
      <td>It<b>’s raining</b>.<br>We<b>’re walking</b> in the park.</td></tr>
  <tr><td><b>−</b></td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-neg">not</span><span class="f-op">+</span><span class="f-v">V-ing</span></div></td>
      <td>It <b>isn’t snowing</b>.<br>I<b>’m not wearing</b> a hat.</td></tr>
  <tr><td><b>?</b></td>
      <td><div class="formula"><span class="f-aux">Am / Is / Are</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V-ing</span><span class="f-op">?</span></div></td>
      <td><b>Is</b> it <b>raining</b>?<br><b>Are</b> you <b>wearing</b> a coat?</td></tr>
  <tr><td><b>?</b> з питальним словом</td>
      <td><div class="formula"><span class="f-s">What / Where…</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">+</span><span class="f-s">підмет</span><span class="f-op">+</span><span class="f-v">V-ing</span><span class="f-op">?</span></div></td>
      <td><b>What are</b> you <b>doing</b>?</td></tr>
  <tr><td>Короткі відповіді</td>
      <td><div class="formula"><span class="f-s">Yes / No, підмет</span><span class="f-op">+</span><span class="f-aux">am / is / are</span><span class="f-op">(</span><span class="f-neg">not</span><span class="f-op">)</span></div></td>
      <td>Yes, it <b>is</b>. / No, it <b>isn’t</b>.</td></tr>
</table></div>

<p><b>Правопис:</b> rain → rain<b>s</b>, wash → wash<b>es</b> · snow → snow<b>ing</b>, shine → shin<b>ing</b> (без -e), swim → swi<b>mm</b>ing.</p>

<h3>3. Погода: просто запам’ятай</h3>
<div class="ex-line">It’s <mark>sunny / cold / windy</mark>. — It’s + прикметник</div>
<div class="ex-line">What’s the weather like? — Яка погода?</div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">Look! It rains.</span> → <span class="yes">Look! It’s raining.</span><br>
<span class="no">It is snow in winter.</span> → <span class="yes">It snows in winter.</span><br>
<span class="no">Is cold today.</span> → <span class="yes">It’s cold today.</span></div>`
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Usually or now?',
            instructions: 'Встав дієслово в Present Simple (зазвичай) або Present Continuous (зараз).',
            items: [
              { id: 'g1', text: 'It often {{rains}} in London. (rain)' },
              { id: 'g2', text: 'Look! It {{is snowing|’s snowing}}! (snow)' },
              { id: 'g3', text: 'The sun {{is shining|’s shining}} today. (shine)' },
              { id: 'g4', text: 'It {{doesn’t snow|does not snow}} in Barcelona. (− snow)' },
              { id: 'g5', text: 'I usually {{wear}} a coat in winter. (wear)' },
              { id: 'g6', text: 'Today I {{am wearing|’m wearing}} a T-shirt. (wear)' },
              { id: 'g7', text: 'It {{isn’t raining|is not raining}} now. Let’s go out! (− rain)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Simple or Continuous?',
            instructions: 'Подивись на слова-підказки й обери правильний варіант.',
            items: [
              { id: 'c1', q: 'It ___ a lot in autumn.', options: ['is raining', 'rains'], answer: 1 },
              { id: 'c2', q: 'Take an umbrella! It ___ now.', options: ['is raining', 'rains'], answer: 0 },
              { id: 'c3', q: '___ it snow in Kyiv in winter? — Yes, it does.', options: ['Is', 'Do', 'Does'], answer: 2 },
              { id: 'c4', q: '___ it raining at the moment? — No, it isn’t.', options: ['Is', 'Does', 'Are'], answer: 0 },
              { id: 'c5', q: 'We usually ___ in the sea in summer.', options: ['are swimming', 'swim', 'swims'], answer: 1 },
              { id: 'c6', q: 'Look! The children ___ a snowman.', options: ['make', 'makes', 'are making'], answer: 2 },
              { id: 'c7', q: 'I ___ cold weather.', options: ['don’t like', 'am not liking'], answer: 0, explain: 'like — дієслово почуттів, з -ing не вживаємо.' }
            ]
          },
          {
            id: 'gram-sort',
            type: 'sort',
            title: 'Signal words',
            instructions: 'Слова-підказки: до якого часу вони пасують?',
            columns: [
              { title: 'Present Simple', ua: 'зазвичай', items: ['usually', 'always', 'often', 'every day', 'in winter', 'never'] },
              { title: 'Present Continuous', ua: 'зараз', items: ['now', 'right now', 'today', 'at the moment', 'Look!', 'Listen!'] }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Яка сьогодні погода?', answer: 'What’s the weather like today?' },
              { id: 'o2', prompt: 'Взимку зазвичай холодно.', answer: 'It is usually cold in winter.' },
              { id: 'o3', prompt: 'Дивись! Йде сніг!', answer: 'Look! It is snowing!', extra: ['snows'] },
              { id: 'o4', prompt: 'Зараз не йде дощ.', answer: "It isn't raining now.", extra: ["doesn't"] }
            ]
          }
        ]
      },

      {
        id: 'listening',
        title: 'Listening',
        exercises: [
          {
            id: 'listen-forecast',
            type: 'choice',
            title: 'A phone call about the weather',
            instructions: 'Аня телефонує бабусі. Послухай і дай відповіді.',
            audio: {
              title: 'Phone call: Anya & Granny',
              lines: [
                { who: 'Anya', text: 'Hi, Granny! How are you? What’s the weather like in your village?' },
                { who: 'Granny', text: 'Hello, Anya! Oh, it’s snowing here! Everything is white.' },
                { who: 'Anya', text: 'Really? Here in Odesa it isn’t snowing. It’s raining.' },
                { who: 'Granny', text: 'It usually rains in Odesa in November. What are you doing?' },
                { who: 'Anya', text: 'I’m sitting at home and I’m reading a book. And you?' },
                { who: 'Granny', text: 'I’m making soup. Your grandad is cleaning the snow in the garden.' },
                { who: 'Anya', text: 'Ha ha! He always does that. Bye, Granny!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What’s the weather like in Granny’s village?', options: ['It’s raining.', 'It’s sunny.', 'It’s snowing.'], answer: 2 },
              { id: 'l2', q: 'What’s the weather like in Odesa?', options: ['It’s raining.', 'It’s snowing.', 'It’s hot.'], answer: 0 },
              { id: 'l3', q: 'What is Anya doing?', options: ['She’s making soup.', 'She’s reading a book.', 'She’s walking.'], answer: 1 },
              { id: 'l4', q: 'What is Granny doing?', options: ['She’s cleaning the snow.', 'She’s sleeping.', 'She’s making soup.'], answer: 2 },
              { id: 'l5', q: 'Who is in the garden?', options: ['Grandad', 'Anya', 'The cat'], answer: 0 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'It is snowing here.' },
              { id: 'dc2', text: 'It usually rains in November.' },
              { id: 'dc3', text: 'I am reading a book.' },
              { id: 'dc4', text: 'What is the weather like?' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-weather',
            type: 'writing',
            title: 'Weather message',
            instructions: 'Напиши другові повідомлення про погоду у твоєму місті: яка вона зазвичай і яка сьогодні.',
            prompt: 'Write a message (40–60 words).\n• Where are you? What’s the weather like today?\n• What is the weather usually like in this season?\n• What are you doing / wearing right now?\n• Do you like this weather?',
            minWords: 40,
            maxWords: 70,
            phrases: ['Today it’s', 'It’s usually', 'but today', 'Right now I’m', 'I’m wearing', 'I like / I don’t like'],
            checklist: ['Є речення з usually (Present Simple)', 'Є речення з today / now (Present Continuous)', 'It’s + прикметник: It’s cold / sunny', 'Не забувай is / am / are перед -ing'],
            model: `Hi Tom! I’m in Kyiv. It’s usually cold and cloudy in November, but today it’s sunny and warm!

Right now I’m sitting in a café and I’m drinking coffee. I’m not wearing my coat today — only a jacket.

I like this weather! What’s the weather like in London? Is it raining again? 😄`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-weather',
            type: 'speaking',
            title: 'Look out of the window',
            instructions: 'Подивись у вікно й відповідай уголос. Короткі речення — це нормально!',
            phrases: ['Today it’s…', 'It’s raining / snowing / The sun is shining.', 'It’s usually…', 'I usually…, but today I’m…', 'I like / I don’t like…'],
            tasks: [
              { id: 'sp1', q: 'What’s the weather like today?', tips: 'It’s … The sun is … / It’s raining …', model: 'Today it’s cloudy and cold. It isn’t raining.' },
              { id: 'sp2', q: 'What is the weather usually like in your city in winter? And in summer?', tips: 'In winter it’s usually… In summer it’s…', model: 'In winter it’s usually cold and it snows. In summer it’s hot and sunny.' },
              { id: 'sp3', q: 'What are you wearing today? What do you usually wear in winter?', tips: 'Today I’m wearing… In winter I usually wear…', model: 'Today I’m wearing jeans and a sweater. In winter I usually wear a big coat and a warm hat.' },
              { id: 'sp4', q: 'What weather do you like? Why?', tips: 'I like … because I can …', model: 'I like sunny weather because I can walk in the park.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'weather': 'погода', "what's the weather like": 'яка погода', 'chat': 'чат', 'friends': 'друзі', 'november': 'листопад', 'usually': 'зазвичай',
      'cold': 'холодно', 'cloudy': 'хмарно', 'cloud': 'хмара', 'today': 'сьогодні', 'sun': 'сонце', 'shining': 'світить', 'sunny': 'сонячно',
      'walking': 'гуляю', 'park': 'парк', 'lucky you': 'щастить тобі', 'rains': 'йде дощ', 'rain': 'дощ', 'raining': 'йде дощ', 'rainy': 'дощово',
      'a lot': 'багато', 'guess what': 'уяви собі', 'again': 'знову', 'sitting': 'сиджу', 'home': 'дім', 'drinking': 'п’ю', 'tea': 'чай',
      'here': 'тут', 'warm': 'тепло', 'windy': 'вітряно', 'wind': 'вітер', 'umbrella': 'парасолька', 'flying away': 'відлітає', 'wearing': 'вдягнений',
      'coat': 'пальто', 'hat': 'шапка', 'like': 'подобатися', 'love': 'любити', 'summer': 'літо', 'hot': 'спекотно', 'swim': 'плавати',
      'every day': 'щодня', 'winter': 'зима', 'spring': 'весна', 'autumn': 'осінь', 'snow': 'сніг; йде сніг', 'snows': 'йде сніг', 'snowing': 'йде сніг',
      'snowy': 'сніжно', 'fog': 'туман', 'foggy': 'туманно', 'shorts': 'шорти', 'sunglasses': 'сонцезахисні окуляри', 'ice cream': 'морозиво',
      'gloves': 'рукавиці', 'look': 'дивись', 'now': 'зараз', 'right now': 'просто зараз', 'at the moment': 'в даний момент', 'always': 'завжди',
      'often': 'часто', 'never': 'ніколи', 'listen': 'слухай', 'take': 'візьми', 'children': 'діти', 'snowman': 'сніговик', 'making': 'роблять, готую',
      'sea': 'море', 'village': 'село', 'everything': 'все', 'white': 'білий', 'really': 'справді', 'reading': 'читаю', 'book': 'книга',
      'soup': 'суп', 'grandad': 'дідусь', 'granny': 'бабуся', 'cleaning': 'прибирає', 'garden': 'сад', 'message': 'повідомлення', 'city': 'місто',
      'season': 'пора року', 'café': 'кафе', 'coffee': 'кава', 'jacket': 'куртка', 'only': 'лише', 'jeans': 'джинси', 'sweater': 'светр',
      'because': 'тому що', 'window': 'вікно', 'out of the window': 'у вікно', 'go out': 'вийти на вулицю', "let's": 'давай', 'problem': 'проблема',
      "it's": 'це (є)', "isn't": 'не (є)', "doesn't": 'не', "don't": 'не', "i'm": 'я (є)'
    }
  });
})();
