/*
 * A2 · Module 1 · Lesson 2 — People I admire (defining relative clauses: who / which / that / where)
 * Review: Present Simple vs Continuous (lesson 1). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Everyday heroes',
    text: `Our magazine asked readers: “Who is a person that you really admire?” Here are three of the answers.

“I admire my neighbour, Pani Halyna. She’s a retired nurse who still helps everyone in our building. When someone is ill, she’s the first person who knocks on the door with soup and medicine. She’s the most generous woman I know.” — Ivan, 28

“My hero is Mr Novak, the teacher who taught me maths at school. I was a student who hated numbers, but he was patient and creative. He used games and stories that made maths interesting. Now I’m an engineer — thanks to him!” — Olha, 35

“I really admire the volunteers who work at the animal shelter where I got my dog. It’s a place which never has enough money, but they never give up. They are people that work for free, at weekends and at night, because they love animals.” — Maks, 19`
  };

  ENG.registerLesson({
    id: 'a2-m1-l2',
    level: 'a2',
    title: 'People I admire. Люди, якими я захоплююсь',
    subtitle: 'підрядні означальні: who / which / that / where · риси характеру',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Everyday heroes',
            instructions: 'Прочитай відповіді читачів журналу про людей, якими вони захоплюються.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'What was Pani Halyna’s job?', options: ['Teacher', 'Nurse', 'Doctor'], answer: 1 },
              { id: 'q2', q: 'What does she do when someone is ill?', options: ['She calls a doctor.', 'She brings soup and medicine.', 'She sends a card.'], answer: 1 },
              { id: 'q3', q: 'How did Mr Novak make maths interesting?', options: ['With games and stories', 'With tests', 'With computers'], answer: 0 },
              { id: 'q4', q: 'What is Olha’s job now?', options: ['Maths teacher', 'Engineer', 'Nurse'], answer: 1 },
              { id: 'q5', q: 'What is the problem at the animal shelter?', options: ['It never has enough money.', 'It has no volunteers.', 'It is closed at weekends.'], answer: 0 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Pani Halyna still works as a nurse.', answer: false, explain: 'She’s a retired nurse.' },
              { id: 's2', s: 'Olha loved maths when she was a student.', answer: false, explain: '“I was a student who hated numbers.”' },
              { id: 's3', s: 'Mr Novak was patient.', answer: true },
              { id: 's4', s: 'Maks got his dog from the animal shelter.', answer: true },
              { id: 's5', s: 'The volunteers get a good salary.', answer: false, explain: '“They are people that work for free.”' }
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
            title: 'Describing people',
            instructions: 'Прикметники й дієслова, щоб описати людину, якою захоплюєшся.',
            cards: [
              { front: 'admire', ipa: '/ədˈmaɪə/', back: 'захоплюватися', example: 'I really admire my grandmother.' },
              { front: 'generous', ipa: '/ˈdʒenərəs/', back: 'щедрий', example: 'She’s very generous with her time.' },
              { front: 'patient', ipa: '/ˈpeɪʃnt/', back: 'терплячий', example: 'A good teacher is patient.' },
              { front: 'creative', ipa: '/kriˈeɪtɪv/', back: 'креативний, творчий', example: 'He has creative ideas.' },
              { front: 'reliable', ipa: '/rɪˈlaɪəbl/', back: 'надійний', example: 'She’s reliable — she always helps.' },
              { front: 'honest', ipa: '/ˈɒnɪst/', back: 'чесний', example: 'He’s an honest person.' },
              { front: 'brave', ipa: '/breɪv/', back: 'сміливий', example: 'Firefighters are brave.' },
              { front: 'hard-working', back: 'працьовитий', example: 'My mum is very hard-working.' },
              { front: 'inspire', ipa: '/ɪnˈspaɪə/', back: 'надихати', example: 'His story inspires me.' },
              { front: 'give up', back: 'здаватися, кидати', example: 'They never give up.' },
              { front: 'for free', back: 'безкоштовно', example: 'Volunteers work for free.' },
              { front: 'role model', back: 'приклад для наслідування', example: 'My dad is my role model.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Definitions',
            instructions: 'Поєднай прикметник з поясненням.',
            pairs: [
              ['generous', 'likes giving to others'],
              ['reliable', 'you can always trust them'],
              ['honest', 'never tells lies'],
              ['patient', 'doesn’t get angry quickly'],
              ['creative', 'has a lot of new ideas'],
              ['brave', 'isn’t afraid of danger'],
              ['hard-working', 'works a lot'],
              ['ambitious', 'wants to be successful']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Complete the sentences',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'My grandmother is my {{role model}}. She’s kind and strong.' },
              { id: 'd2', text: 'He’s very {{honest}}. He never lies.' },
              { id: 'd3', text: 'Her story {{inspires}} me to work harder.' },
              { id: 'd4', text: 'The exam was difficult, but she didn’t {{give up}}.' },
              { id: 'd5', text: 'They cleaned the park {{for free}}.' },
              { id: 'd6', text: 'I {{admire}} people who help others.' }
            ],
            distractors: ['lazy']
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
            title: 'Relative clauses: who, which, that, where',
            instructions: 'Як поєднати два речення в одне, щоб пояснити, про яку людину чи річ іде мова.',
            html: `
<h3>1. Навіщо вони?</h3>
<p>Підрядне означальне речення пояснює, <b>яка саме</b> людина / річ / місце. Українською — «який, яка, яке, де».</p>
<div class="ex-line">She’s a nurse. She helps everyone. → She’s a nurse <mark>who helps everyone</mark>.</div>
<div class="ex-line">Він — вчитель, <u>який</u> навчав мене математики. → He’s the teacher <mark>who taught me maths</mark>.</div>

<h3>2. Яке слово обрати?</h3>
<div class="table-wrap"><table>
  <tr><th>Слово</th><th>Для чого</th><th>Приклад</th></tr>
  <tr><td><b>who</b></td><td>люди</td><td>the volunteers <b>who</b> work at the shelter</td></tr>
  <tr><td><b>which</b></td><td>речі, тварини, ідеї</td><td>a place <b>which</b> never has enough money</td></tr>
  <tr><td><b>that</b></td><td>люди <b>або</b> речі (розмовне)</td><td>a person <b>that</b> I admire · games <b>that</b> made maths fun</td></tr>
  <tr><td><b>where</b></td><td>місця (= в якому)</td><td>the shelter <b>where</b> I got my dog</td></tr>
</table></div>

<h3>3. Важливо: не повторюй займенник!</h3>
<p>Who / which / that <b>замінює</b> he, she, it, they — тому їх більше не пишемо:</p>
<div class="ex-line"><span class="no">She’s a woman who she helps everyone.</span> → <span class="yes">She’s a woman who helps everyone.</span></div>
<div class="ex-line"><span class="no">This is the book which I read it.</span> → <span class="yes">This is the book which I read.</span></div>

<h3>4. Коли who / which / that можна пропустити?</h3>
<p>Якщо після нього йде <b>інший підмет</b> (I, you, she…), слово можна пропустити:</p>
<div class="ex-line">a person <s>(that)</s> <b>I</b> admire = a person I admire</div>
<div class="ex-line">the film <s>(which)</s> <b>we</b> watched = the film we watched</div>
<p>Але <b>не можна</b>, якщо після нього одразу дієслово: the teacher <b>who taught</b> me (who обов’язкове).</p>

<h3>5. where vs which</h3>
<div class="ex-line">the café <b>where</b> we met <span class="muted">(ми зустрілися В ньому)</span> — the café <b>which</b> is near my house <span class="muted">(кафе, яке…)</span></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">the man which lives here</span> → <span class="yes">the man who lives here</span><br>
<span class="no">the city who I was born</span> → <span class="yes">the city where I was born</span><br>
<span class="no">a teacher what helped me</span> → <span class="yes">a teacher who / that helped me</span></div>`
          },
          {
            id: 'gram-choose',
            type: 'choice',
            title: 'who, which or where?',
            instructions: 'Обери правильне слово.',
            items: [
              { id: 'c1', q: 'A vet is a doctor ___ looks after animals.', options: ['who', 'which', 'where'], answer: 0 },
              { id: 'c2', q: 'This is the café ___ I first met my husband.', options: ['who', 'which', 'where'], answer: 2 },
              { id: 'c3', q: 'I lost the ring ___ my grandmother gave me.', options: ['who', 'which', 'where'], answer: 1 },
              { id: 'c4', q: 'People ___ volunteer are often very happy.', options: ['who', 'which', 'where'], answer: 0 },
              { id: 'c5', q: 'Kyiv is the city ___ I was born.', options: ['who', 'which', 'where'], answer: 2 },
              { id: 'c6', q: 'It’s a film ___ always makes me cry.', options: ['who', 'which', 'where'], answer: 1 }
            ]
          },
          {
            id: 'gram-join',
            type: 'gap',
            title: 'Join the sentences',
            instructions: 'Поєднай два речення в одне: встав who, which або where.',
            items: [
              { id: 'j1', text: 'I have a friend. She speaks five languages. → I have a friend {{who|that}} speaks five languages.' },
              { id: 'j2', text: 'That’s the shop. I bought my dress there. → That’s the shop {{where}} I bought my dress.' },
              { id: 'j3', text: 'This is a book. It changed my life. → This is a book {{which|that}} changed my life.' },
              { id: 'j4', text: 'He’s the doctor. He helped my mum. → He’s the doctor {{who|that}} helped my mum.' },
              { id: 'j5', text: 'We visited a village. My grandparents live there. → We visited the village {{where}} my grandparents live.' }
            ]
          },
          {
            id: 'gram-define',
            type: 'order',
            title: 'Write definitions',
            instructions: 'Склади визначення слова за допомогою who / which / where.',
            items: [
              { id: 'o1', prompt: 'A pilot — це людина, яка керує літаками.', answer: 'A pilot is a person who flies planes.' },
              { id: 'o2', prompt: 'A library — місце, де можна позичити книжки.', answer: 'A library is a place where you can borrow books.' },
              { id: 'o3', prompt: 'A fridge — машина, яка зберігає їжу холодною.', answer: 'A fridge is a machine which keeps food cold.' },
              { id: 'o4', prompt: 'Це людина, якою я захоплююсь.', answer: 'This is a person I admire.', extra: ['her'] }
            ]
          },
          {
            id: 'gram-correct',
            type: 'choice',
            title: 'Correct or not?',
            instructions: 'Обери правильне речення.',
            items: [
              { id: 'e1', q: 'Обери правильне:', options: ['She’s the woman who she helped me.', 'She’s the woman who helped me.', 'She’s the woman which helped me.'], answer: 1 },
              { id: 'e2', q: 'Обери правильне:', options: ['The cake that you made was great.', 'The cake that you made it was great.', 'The cake who you made was great.'], answer: 0 },
              { id: 'e3', q: 'Обери правильне:', options: ['Lviv is the city which I study.', 'Lviv is the city where I study.', 'Lviv is the city who I study.'], answer: 1 },
              { id: 'e4', q: 'Обери правильне:', options: ['The people I met were friendly.', 'The people I met them were friendly.', 'The people which I met were friendly.'], answer: 0, explain: 'who/that можна пропустити, якщо далі йде інший підмет (I).' }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: Present Simple vs Continuous',
            instructions: 'Згадаймо урок 1.',
            items: [
              { id: 'r1', q: 'Pani Halyna ___ everyone in the building.', options: ['helps', 'is helping'], answer: 0 },
              { id: 'r2', q: 'This week the volunteers ___ a new shelter.', options: ['build', 'are building'], answer: 1 },
              { id: 'r3', q: 'I ___ people who are honest.', options: ['like', 'am liking'], answer: 0 },
              { id: 'r4', q: 'Maks ___ his dog in the park right now.', options: ['walks', 'is walking'], answer: 1 }
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
            title: 'A radio interview',
            instructions: 'Ведучий радіо говорить з жінкою, яка відкрила безкоштовну бібліотеку. Послухай.',
            audio: {
              title: 'Radio: Presenter & Larysa',
              lines: [
                { who: 'Presenter', text: 'Today I’m talking to Larysa, a woman who started a free library in her village. Larysa, how did it begin?' },
                { who: 'Larysa', text: 'Well, our village didn’t have a library. There were a lot of children who wanted to read, but books are expensive.' },
                { who: 'Presenter', text: 'So what did you do?' },
                { who: 'Larysa', text: 'I put a small bookcase outside my house — the house where I grew up. People who have old books bring them, and people who want books take them.' },
                { who: 'Presenter', text: 'That’s wonderful. How many books are there now?' },
                { who: 'Larysa', text: 'More than two thousand! We now use the old school which closed ten years ago.' },
                { who: 'Presenter', text: 'Who helps you?' },
                { who: 'Larysa', text: 'My neighbours, and a teenager called Oleh who comes every Saturday. He’s very reliable.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What did Larysa start?', options: ['A school', 'A free library', 'A bookshop'], answer: 1 },
              { id: 'l2', q: 'Why did the children need it?', options: ['Books are expensive.', 'The school was far.', 'They had no internet.'], answer: 0 },
              { id: 'l3', q: 'Where did she put the first bookcase?', options: ['In the school', 'Outside her house', 'In the shop'], answer: 1 },
              { id: 'l4', q: 'How many books are there now?', options: ['About 200', 'More than 2,000', '20,000'], answer: 1 },
              { id: 'l5', q: 'Who is Oleh?', options: ['Her son', 'A teenager who helps every Saturday', 'The teacher'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'There were a lot of children who wanted to read.' },
              { id: 'dc2', text: 'This is the house where I grew up.' },
              { id: 'dc3', text: 'We use the old school which closed ten years ago.' },
              { id: 'dc4', text: 'He’s a teenager who comes every Saturday.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-admire',
            type: 'writing',
            title: 'A person I admire',
            instructions: 'Напиши відповідь у журнал: людина, якою ти захоплюєшся.',
            prompt: 'Write about a person you admire (90–120 words).\n• Who is he/she? How do you know him/her?\n• What is he/she like? (3–4 adjectives)\n• What does he/she do? Give an example.\n• Why do you admire him/her?\n• Use at least four relative clauses (who / which / that / where).',
            minWords: 90,
            maxWords: 130,
            phrases: ['I really admire', 'who', 'which', 'where', 'He/She is the kind of person who', 'inspires me'],
            checklist: ['Щонайменше 4 підрядні з who / which / that / where', 'Немає зайвого займенника (who she…)', 'Є 3–4 прикметники характеру', 'Є приклад з життя'],
            model: `The person I really admire is my aunt Natalia. She’s a doctor who works in a small hospital in a village near Chernihiv.

Natalia is very hard-working and patient. She’s the kind of person who never says no. Last winter there was a storm which closed the roads, but she walked five kilometres to help a man who was very ill.

She also organises a summer camp where children from poor families can play and learn. She does it for free.

I admire her because she’s brave and generous. She inspires me to help others.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-admire',
            type: 'speaking',
            title: 'People and places',
            instructions: 'Відповідай уголос, використовуючи who / which / where.',
            phrases: ['…is a person who…', '…is a place where…', '…is something which…', 'I admire…because…'],
            tasks: [
              { id: 'sp1', q: 'Who is a person that you admire? Why?', tips: 'I admire … He/She is someone who …', model: 'I admire my mum. She’s someone who never gives up and always helps others.' },
              { id: 'sp2', q: 'Describe a place where you feel happy.', tips: 'It’s a place where …', model: 'It’s my grandparents’ garden. It’s a place where I can relax and forget about work.' },
              { id: 'sp3', q: 'Play a game: explain these words without saying them — teacher, airport, umbrella.', tips: 'It’s a person who … / a place where … / a thing which …', model: 'It’s a thing which you use when it’s raining. — An umbrella!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'everyday': 'повсякденний', 'heroes': 'герої', 'hero': 'герой', 'magazine': 'журнал', 'asked': 'запитав', 'readers': 'читачі', 'person': 'людина',
      'that': 'який (означальне)', 'who': 'який (про людей)', 'which': 'який (про речі)', 'where': 'де (в якому)', 'really': 'справді', 'admire': 'захоплюватися',
      'answers': 'відповіді', 'neighbour': 'сусідка, сусід', 'retired': 'на пенсії', 'nurse': 'медсестра', 'still': 'досі', 'helps': 'допомагає', 'everyone': 'всім',
      'building': 'будинок', 'someone': 'хтось', 'ill': 'хворий', 'first': 'перший', 'knocks': 'стукає', 'door': 'двері', 'soup': 'суп', 'medicine': 'ліки',
      'most generous': 'найщедріша', 'generous': 'щедрий', 'woman': 'жінка', 'know': 'знаю', 'taught': 'навчав (teach)', 'maths': 'математика',
      'student': 'учень', 'hated': 'ненавидів', 'numbers': 'числа', 'patient': 'терплячий', 'creative': 'креативний', 'used': 'використовував', 'games': 'ігри',
      'stories': 'історії', 'made': 'зробили', 'interesting': 'цікавий', 'engineer': 'інженер', 'thanks to': 'завдяки', 'volunteers': 'волонтери',
      'animal shelter': 'притулок для тварин', 'shelter': 'притулок', 'got': 'отримав, взяв', 'place': 'місце', 'enough': 'достатньо', 'money': 'гроші',
      'give up': 'здаватися', 'for free': 'безкоштовно', 'weekends': 'вихідні', 'love': 'люблять', 'animals': 'тварини', 'brings': 'приносить',
      'calls': 'дзвонить', 'card': 'листівка', 'tests': 'тести', 'computers': 'комп’ютери', 'closed': 'зачинений', 'salary': 'зарплата',
      'reliable': 'надійний', 'honest': 'чесний', 'brave': 'сміливий', 'hard-working': 'працьовитий', 'inspire': 'надихати', 'inspires': 'надихає',
      'role model': 'приклад для наслідування', 'ambitious': 'амбітний', 'likes giving': 'любить давати', 'others': 'інші', 'trust': 'довіряти',
      'tells lies': 'бреше', 'lies': 'брехня', 'angry': 'злий', 'quickly': 'швидко', 'ideas': 'ідеї', 'afraid': 'боїться', 'danger': 'небезпека',
      'successful': 'успішний', 'grandmother': 'бабуся', 'strong': 'сильна', 'harder': 'старанніше', 'exam': 'іспит', 'cleaned': 'прибрали', 'park': 'парк',
      'lazy': 'лінивий', 'vet': 'ветеринар', 'looks after': 'доглядає', 'husband': 'чоловік', 'lost': 'загубила', 'ring': 'перстень', 'gave': 'дала',
      'volunteer': 'волонтерити', 'born': 'народився', 'film': 'фільм', 'cry': 'плакати', 'languages': 'мови', 'shop': 'магазин', 'dress': 'сукня',
      'changed': 'змінила', 'doctor': 'лікар', 'village': 'село', 'pilot': 'пілот', 'flies': 'керує (літаком)', 'planes': 'літаки', 'library': 'бібліотека',
      'borrow': 'позичати', 'books': 'книжки', 'fridge': 'холодильник', 'machine': 'машина, пристрій', 'keeps': 'зберігає', 'cold': 'холодним',
      'cake': 'торт', 'study': 'навчаюся', 'build': 'будувати', 'walking': 'вигулює', 'radio': 'радіо', 'interview': 'інтерв’ю', 'presenter': 'ведучий',
      'started': 'заснувала', 'free': 'безкоштовний', 'begin': 'почалося', "didn't have": 'не мало', 'children': 'діти', 'wanted': 'хотіли', 'read': 'читати',
      'expensive': 'дорогі', 'bookcase': 'книжкова шафа', 'outside': 'біля, ззовні', 'grew up': 'виросла', 'old': 'старі', 'bring': 'приносять',
      'take': 'беруть', 'wonderful': 'чудово', 'more than': 'більше ніж', 'thousand': 'тисяча', 'school': 'школа', 'years ago': 'років тому',
      'teenager': 'підліток', 'called': 'на ім’я', 'comes': 'приходить', 'saturday': 'субота', 'bookshop': 'книгарня', 'far': 'далеко', 'internet': 'інтернет',
      'aunt': 'тітка', 'hospital': 'лікарня', 'kind of person': 'така людина', 'never says no': 'ніколи не відмовляє', 'winter': 'зима', 'storm': 'буря',
      'roads': 'дороги', 'kilometres': 'кілометри', 'organises': 'організовує', 'summer camp': 'літній табір', 'poor': 'бідний', 'families': 'сім’ї',
      'play': 'гратися', 'learn': 'вчитися', 'feel happy': 'почуватися щасливим', 'garden': 'сад', 'relax': 'відпочити', 'forget': 'забути',
      'airport': 'аеропорт', 'umbrella': 'парасолька', 'raining': 'йде дощ', 'thing': 'річ', "she's": 'вона (є)', "he's": 'він (є)', "it's": 'це (є)',
      "i'm": 'я (є)', "that's": 'це (є)'
    }
  });
})();
