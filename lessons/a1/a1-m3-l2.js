/*
 * A1 · Module 3 · Lesson 2 — He works, she studies (Present Simple: he / she / it + -s)
 * Review: Present Simple I/you/we/they, at/in/on (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Two jobs, one family',
    text: `Sofia and Dan are married. They live in a small flat in Odesa. They work at night and in the day, so they don’t see each other very often!

Sofia is a nurse. She works in a big hospital. She starts work at eight o’clock in the evening and finishes at eight in the morning. She helps doctors and looks after patients. She has a lot of work, but she loves her job.

Dan is a chef. He works in a restaurant near the sea. He gets up at ten, goes to the market and buys fresh fish. Then he cooks lunch and dinner for the customers. He finishes work at eleven at night.

On Sunday they don’t work. Dan cooks breakfast for Sofia, and she tells him funny stories from the hospital. Their cat, Pirate, watches them and waits for fish!`
  };

  ENG.registerLesson({
    id: 'a1-m3-l2',
    level: 'a1',
    title: 'He works, she studies. Професії',
    subtitle: 'Present Simple: he / she / it + -s · правопис -s / -es / -ies · професії',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Sofia and Dan',
            instructions: 'Прочитай про подружжя з різними графіками роботи.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'Sofia is a…', options: ['doctor', 'nurse', 'chef'], answer: 1 },
              { id: 'q2', q: 'When does Sofia work?', options: ['In the day', 'At night', 'At the weekend'], answer: 1 },
              { id: 'q3', q: 'Where does Dan work?', options: ['In a hospital', 'In a market', 'In a restaurant'], answer: 2 },
              { id: 'q4', q: 'What does Dan buy at the market?', options: ['Bread', 'Fish', 'Fruit'], answer: 1 },
              { id: 'q5', q: 'What do they do on Sunday?', options: ['They work.', 'They don’t work; Dan cooks breakfast.', 'They go to the market.'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Sofia and Dan live in a big house.', answer: false, explain: '“They live in a small flat.”' },
              { id: 's2', s: 'Sofia finishes work at eight in the morning.', answer: true },
              { id: 's3', s: 'Sofia doesn’t like her job.', answer: false, explain: '“she loves her job”' },
              { id: 's4', s: 'Dan gets up at ten.', answer: true },
              { id: 's5', s: 'Their cat waits for fish.', answer: true }
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
            title: 'Jobs and workplaces',
            instructions: 'Професії та місця роботи. Пам’ятай: перед професією ставимо a / an (She’s a nurse).',
            cards: [
              { front: 'nurse → hospital', back: 'медсестра → лікарня', example: 'She works in a hospital.' },
              { front: 'chef → restaurant', ipa: '/ʃef/', back: 'шеф-кухар → ресторан', example: 'He cooks in a restaurant.' },
              { front: 'waiter / waitress', ipa: '/ˈweɪtə/', back: 'офіціант / офіціантка', example: 'The waiter brings the food.' },
              { front: 'shop assistant', ipa: '/əˈsɪstənt/', back: 'продавець-консультант', example: 'She’s a shop assistant in a clothes shop.' },
              { front: 'police officer', ipa: '/pəˈliːs ˈɒfɪsə/', back: 'поліцейський', example: 'He’s a police officer.' },
              { front: 'office worker → office', back: 'офісний працівник → офіс', example: 'My dad works in an office.' },
              { front: 'farmer → farm', back: 'фермер → ферма', example: 'A farmer works on a farm.' },
              { front: 'vet', ipa: '/vet/', back: 'ветеринар', example: 'A vet helps animals.' },
              { front: 'hairdresser', ipa: '/ˈheədresə/', back: 'перукар', example: 'My hairdresser is very good.' },
              { front: 'pilot', ipa: '/ˈpaɪlət/', back: 'пілот', example: 'A pilot flies planes.' },
              { front: 'look after', back: 'доглядати', example: 'Nurses look after patients.' },
              { front: 'customer', ipa: '/ˈkʌstəmə/', back: 'клієнт, покупець', example: 'Dan cooks for the customers.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Who works where?',
            instructions: 'Поєднай професію і місце роботи.',
            pairs: [
              ['nurse', 'hospital'],
              ['chef', 'kitchen'],
              ['teacher', 'school'],
              ['farmer', 'farm'],
              ['shop assistant', 'shop'],
              ['pilot', 'plane'],
              ['office worker', 'office'],
              ['vet', 'animal clinic']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What’s my job?',
            instructions: 'Вгадай професію за описом. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'I cut and wash hair. I’m a {{hairdresser}}.' },
              { id: 'd2', text: 'I help sick animals. I’m a {{vet}}.' },
              { id: 'd3', text: 'I bring food to the tables in a café. I’m a {{waiter}}.' },
              { id: 'd4', text: 'I fly planes. I’m a {{pilot}}.' },
              { id: 'd5', text: 'I sell clothes in a shop. I’m a {{shop assistant}}.' },
              { id: 'd6', text: 'I catch criminals. I’m a {{police officer}}.' }
            ],
            distractors: ['farmer']
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
            title: 'Present Simple: he / she / it + -s',
            instructions: 'Найважливіше правило Present Simple! Для he / she / it дієслово отримує закінчення -s.',
            html: `
<h3>1. Головне правило</h3>
<div class="table-wrap"><table>
  <tr><th>I / you / we / they</th><th>he / she / it</th></tr>
  <tr><td>I <b>work</b><br>we <b>live</b><br>they <b>cook</b></td><td>she <b>work<mark>s</mark></b><br>he <b>live<mark>s</mark></b><br>it <b>cook<mark>s</mark></b></td></tr>
</table></div>
<p>he / she / it = <b>одна людина чи річ</b>: Sofia, Dan, my mum, the cat, the shop.</p>
<div class="ex-line">Sofia <mark>works</mark> in a hospital. — Sofia and Dan <mark>work</mark> a lot.</div>
<div class="ex-line">The shop <mark>opens</mark> at seven. — The shops <mark>open</mark> at seven.</div>

<h3>2. Правопис -s / -es / -ies</h3>
<div class="table-wrap"><table>
  <tr><th>Закінчення дієслова</th><th>Додаємо</th><th>Приклади</th></tr>
  <tr><td>більшість дієслів</td><td><b>-s</b></td><td>work → work<b>s</b>, start → start<b>s</b>, play → play<b>s</b></td></tr>
  <tr><td>-s, -sh, -ch, -x, -o</td><td><b>-es</b></td><td>watch → watch<b>es</b>, finish → finish<b>es</b>, go → go<b>es</b>, do → do<b>es</b></td></tr>
  <tr><td>приголосна + y</td><td>y → <b>-ies</b></td><td>study → stud<b>ies</b>, fly → fl<b>ies</b>, try → tr<b>ies</b></td></tr>
  <tr><td>голосна + y</td><td><b>-s</b></td><td>play → play<b>s</b>, buy → buy<b>s</b></td></tr>
  <tr><td>особливе дієслово</td><td>—</td><td>have → <b>has</b></td></tr>
</table></div>

<h3>3. Як читати -s?</h3>
<ul>
  <li>[s] — після глухих звуків: works, cooks, helps</li>
  <li>[z] — після дзвінких і голосних: lives, plays, goes</li>
  <li>[ɪz] — після s, sh, ch, x: watches, finishes, washes</li>
</ul>

<h3>4. Заперечення — без -s! (doesn’t)</h3>
<div class="ex-line">She <mark>doesn’t work</mark> on Sunday. <span class="muted">(не «doesn’t works»)</span></div>
<p>-s «переходить» у <b>does</b>, тому саме дієслово лишається без змін. Детально — наступного уроку.</p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">She work in a hospital.</span> → <span class="yes">She works in a hospital.</span><br>
<span class="no">He haves a cat.</span> → <span class="yes">He has a cat.</span><br>
<span class="no">She studys English.</span> → <span class="yes">She studies English.</span><br>
<span class="no">They works at night.</span> → <span class="yes">They work at night.</span></div>`
          },
          {
            id: 'gram-spell',
            type: 'gap',
            title: 'Spelling: -s, -es or -ies?',
            instructions: 'Напиши форму для he / she / it.',
            items: [
              { id: 'g1', text: 'work → she {{works}}' },
              { id: 'g2', text: 'watch → he {{watches}}' },
              { id: 'g3', text: 'study → she {{studies}}' },
              { id: 'g4', text: 'go → it {{goes}}' },
              { id: 'g5', text: 'play → he {{plays}}' },
              { id: 'g6', text: 'have → she {{has}}' },
              { id: 'g7', text: 'finish → he {{finishes}}' },
              { id: 'g8', text: 'fly → it {{flies}}' }
            ]
          },
          {
            id: 'gram-gap',
            type: 'gap',
            title: 'Complete the text',
            instructions: 'Встав дієслово в правильній формі. Дивись, хто виконує дію: одна людина (-s) чи багато (без -s).',
            items: [
              { id: 't1', text: 'Dan {{gets}} up at ten. (get)' },
              { id: 't2', text: 'He {{buys}} fish at the market. (buy)' },
              { id: 't3', text: 'Sofia and Dan {{live}} in Odesa. (live)' },
              { id: 't4', text: 'Sofia {{looks}} after patients. (look)' },
              { id: 't5', text: 'The restaurant {{closes}} at midnight. (close)' },
              { id: 't6', text: 'My parents {{work}} in an office. (work)' },
              { id: 't7', text: 'My brother {{studies}} at university. (study)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Choose the correct form',
            instructions: 'Обери правильну форму дієслова.',
            items: [
              { id: 'c1', q: 'A vet ___ animals.', options: ['help', 'helps', 'helpes'], answer: 1 },
              { id: 'c2', q: 'Pilots ___ planes.', options: ['fly', 'flys', 'flies'], answer: 0 },
              { id: 'c3', q: 'My sister ___ two children.', options: ['have', 'haves', 'has'], answer: 2 },
              { id: 'c4', q: 'The bus ___ at 8:15.', options: ['go', 'goes', 'gos'], answer: 1 },
              { id: 'c5', q: 'We ___ TV in the evening.', options: ['watch', 'watches', 'watchs'], answer: 0 },
              { id: 'c6', q: 'Our cat ___ all day.', options: ['sleep', 'sleeps', 'sleepes'], answer: 1 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення. Не забудь про -s!',
            items: [
              { id: 'o1', prompt: 'Вона працює в лікарні.', answer: 'She works in a hospital.', extra: ['work'] },
              { id: 'o2', prompt: 'Він закінчує роботу об одинадцятій.', answer: 'He finishes work at eleven.' },
              { id: 'o3', prompt: 'Мій брат вивчає англійську.', answer: 'My brother studies English.', extra: ['studys'] },
              { id: 'o4', prompt: 'Магазин відкривається о сьомій.', answer: 'The shop opens at seven.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: at / in / on',
            instructions: 'Згадаймо урок 1. Обери прийменник.',
            items: [
              { id: 'r1', q: 'Sofia works ___ night.', options: ['in', 'at', 'on'], answer: 1 },
              { id: 'r2', q: 'They don’t work ___ Sunday.', options: ['in', 'at', 'on'], answer: 2 },
              { id: 'r3', q: 'Dan goes to the market ___ the morning.', options: ['in', 'at', 'on'], answer: 0 },
              { id: 'r4', q: 'He finishes work ___ eleven o’clock.', options: ['in', 'at', 'on'], answer: 1 }
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
            title: 'Guess my job!',
            instructions: 'Ведучий радіогри описує людину, а слухачі вгадують професію. Послухай.',
            audio: {
              title: 'Radio game: Guess the job',
              lines: [
                { who: 'Host', text: 'Hello and welcome to “Guess the job”! Our first person is Mike.' },
                { who: 'Host', text: 'Mike gets up at five o’clock. He has a uniform. He drives a big vehicle.' },
                { who: 'Host', text: 'He doesn’t work in an office. He works in the city. He helps people in emergencies, and he puts out fires.' },
                { who: 'Caller', text: 'Is he a firefighter?' },
                { who: 'Host', text: 'Yes, he is! Well done! Now, our second person is Julia. She works in a school, but she doesn’t teach. She cooks lunch for three hundred children every day.' },
                { who: 'Caller', text: 'She’s a school cook!' },
                { who: 'Host', text: 'Correct!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What time does Mike get up?', options: ['At four', 'At five', 'At six'], answer: 1 },
              { id: 'l2', q: 'What does Mike drive?', options: ['A taxi', 'A big vehicle', 'A bus'], answer: 1 },
              { id: 'l3', q: 'Mike is a…', options: ['police officer', 'firefighter', 'pilot'], answer: 1 },
              { id: 'l4', q: 'Where does Julia work?', options: ['In a restaurant', 'In a hospital', 'In a school'], answer: 2 },
              { id: 'l5', q: 'How many children does Julia cook for?', options: ['30', '300', '3000'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши. Чітко чуй закінчення -s!',
            items: [
              { id: 'dc1', text: 'He gets up at five o’clock.' },
              { id: 'dc2', text: 'She works in a school.' },
              { id: 'dc3', text: 'My sister studies English.' },
              { id: 'dc4', text: 'He watches TV in the evening.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-person',
            type: 'writing',
            title: 'A person and their job',
            instructions: 'Опиши робочий день людини, яку ти знаєш (мама, друг, сусід). Пиши в 3-й особі: he / she + -s.',
            prompt: 'Write about someone’s working day (60–80 words).\n• Who is he/she? What’s his/her job?\n• Where does he/she work?\n• What time does he/she get up, start and finish work?\n• What does he/she do at work? (3–4 verbs with -s)\n• Does he/she like the job?',
            minWords: 60,
            maxWords: 90,
            phrases: ['My mum is a', 'She works in', 'She gets up at', 'He starts', 'He finishes', 'She loves', 'has'],
            checklist: ['Кожне дієслово після he/she має -s/-es/-ies', 'have → has', 'Є час з at і частина дня з in', 'Є професія з a / an'],
            model: `My aunt Olena is a vet. She works in an animal clinic in Lviv. She gets up at half past six and goes to work by tram. She starts work at eight.

At work she looks after dogs, cats and sometimes horses. She talks to their owners and gives the animals medicine. She has a lot of work, but she loves animals. She finishes work at five and goes home to her two cats!`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-jobs',
            type: 'speaking',
            title: 'Talk about jobs',
            instructions: 'Відповідай уголос. Стеж за -s у he / she!',
            phrases: ['He/She is a…', 'He/She works in…', 'He/She gets up at…', 'He/She has…', 'He/She doesn’t…'],
            tasks: [
              { id: 'sp1', q: 'What does your mum or dad (or a friend) do? Describe his or her day.', tips: 'My dad is a … He works … He starts …', model: 'My dad is a driver. He works for a bus company. He gets up at five and starts work at six.' },
              { id: 'sp2', q: 'Choose a job: nurse, chef or pilot. What does this person do?', tips: 'A chef cooks … A nurse helps …', model: 'A pilot flies planes. He or she travels a lot and sleeps in hotels.' },
              { id: 'sp3', q: 'What is your dream job? Why?', tips: 'My dream job is … A … works … and …', model: 'My dream job is a travel blogger. A blogger visits new countries and writes about them.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'married': 'одружені', 'live': 'жити', 'lives': 'живе', 'small': 'маленький', 'flat': 'квартира', 'work': 'працювати', 'works': 'працює',
      'night': 'ніч', 'day': 'день', 'so': 'тому', 'see': 'бачити', 'each other': 'одне одного', 'often': 'часто', 'nurse': 'медсестра', 'big': 'великий',
      'hospital': 'лікарня', 'starts': 'починає', 'finishes': 'закінчує', 'evening': 'вечір', 'morning': 'ранок', 'helps': 'допомагає', 'help': 'допомагати',
      'doctors': 'лікарі', 'looks after': 'доглядає', 'look after': 'доглядати', 'patients': 'пацієнти', 'a lot of': 'багато', 'loves': 'любить',
      'job': 'робота', 'chef': 'шеф-кухар', 'restaurant': 'ресторан', 'near': 'біля', 'sea': 'море', 'gets up': 'встає', 'goes': 'іде', 'market': 'ринок',
      'buys': 'купує', 'fresh': 'свіжий', 'fish': 'риба', 'then': 'потім', 'cooks': 'готує', 'lunch': 'обід', 'dinner': 'вечеря', 'customers': 'клієнти',
      'customer': 'клієнт', 'eleven': 'одинадцять', 'sunday': 'неділя', 'breakfast': 'сніданок', 'tells': 'розповідає', 'him': 'йому', 'funny': 'смішний',
      'stories': 'історії', 'cat': 'кіт', 'pirate': 'пірат', 'watches': 'спостерігає, дивиться', 'waits for': 'чекає на', 'fruit': 'фрукти',
      'bread': 'хліб', 'house': 'будинок', "doesn't": 'не (does not)', "don't": 'не (do not)', 'like': 'подобатися', 'waiter': 'офіціант',
      'waitress': 'офіціантка', 'brings': 'приносить', 'food': 'їжа', 'shop assistant': 'продавець', 'clothes': 'одяг', 'police officer': 'поліцейський',
      'office': 'офіс', 'office worker': 'офісний працівник', 'farmer': 'фермер', 'farm': 'ферма', 'vet': 'ветеринар', 'animals': 'тварини',
      'animal': 'тварина', 'clinic': 'клініка', 'hairdresser': 'перукар', 'pilot': 'пілот', 'flies': 'літає; керує літаком', 'fly': 'літати',
      'planes': 'літаки', 'plane': 'літак', 'kitchen': 'кухня', 'teacher': 'вчитель', 'school': 'школа', 'cut': 'стригти, різати', 'wash': 'мити',
      'hair': 'волосся', 'sick': 'хворий', 'tables': 'столи', 'café': 'кафе', 'sell': 'продавати', 'catch': 'ловити', 'criminals': 'злочинці',
      'studies': 'навчається', 'study': 'навчатися', 'university': 'університет', 'closes': 'зачиняється', 'midnight': 'північ', 'parents': 'батьки',
      'english': 'англійська', 'bus': 'автобус', 'sleeps': 'спить', 'all day': 'весь день', 'guess': 'вгадати', 'welcome': 'ласкаво просимо',
      'first': 'перший', 'person': 'людина', 'uniform': 'форма (одяг)', 'drives': 'водить, керує', 'vehicle': 'транспортний засіб', 'city': 'місто',
      'people': 'люди', 'emergencies': 'надзвичайні ситуації', 'puts out': 'гасить', 'fires': 'пожежі', 'firefighter': 'пожежник', 'well done': 'молодець',
      'second': 'другий', 'teach': 'викладати', 'three hundred': 'триста', 'children': 'діти', 'every day': 'щодня', 'cook': 'кухар; готувати',
      'correct': 'правильно', 'host': 'ведучий', 'caller': 'слухач (що дзвонить)', 'aunt': 'тітка', 'tram': 'трамвай', 'sometimes': 'іноді',
      'horses': 'коні', 'talks': 'розмовляє', 'owners': 'власники', 'gives': 'дає', 'medicine': 'ліки', 'company': 'компанія', 'driver': 'водій',
      'choose': 'обери', 'travels': 'подорожує', 'hotels': 'готелі', 'dream job': 'робота мрії', 'blogger': 'блогер', 'visits': 'відвідує',
      'countries': 'країни', 'writes': 'пише', 'about': 'про', 'them': 'них', 'why': 'чому', 'has': 'має', 'have': 'мати'
    }
  });
})();
