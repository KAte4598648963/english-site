/*
 * A2 · Module 6 · Lesson 3 — If it rains… (First Conditional: if + Present Simple, will)
 * Review: will / won’t (module 4), Present Perfect (lessons 1–2). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Are you superstitious?',
    text: `Many people say they don’t believe in superstitions — but they still knock on wood “just in case”. Here are some popular superstitions from Ukraine and around the world.

In Ukraine, many people believe that if you whistle inside the house, you will lose money. If you forget something and go back home, you should look in the mirror — or the rest of the day will go badly. And if you sit at the corner of the table, you won’t get married for seven years!

In Britain, people say that if you break a mirror, you will have seven years of bad luck. If a black cat crosses your path, some people think it will bring bad luck — but in Scotland it means good luck!

In Japan, if you cut your nails at night, people say you won’t be with your parents when they die. And in Turkey, if you chew gum at night, some believe it will turn into the flesh of the dead. Scary!

Do you believe any of these? If you do, you aren’t alone. Surveys show that about a third of people are a little superstitious.`
  };

  ENG.registerLesson({
    id: 'a2-m6-l3',
    level: 'a2',
    title: 'If it rains… Умовні речення',
    subtitle: 'First Conditional: If + Present Simple, … will … · if чи when',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Superstitions',
            instructions: 'Прочитай про забобони в Україні та світі.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'In Ukraine, what will happen if you whistle inside the house?', options: ['You’ll get married.', 'You’ll lose money.', 'You’ll be lucky.'], answer: 1 },
              { id: 'q2', q: 'What should you do if you go back home for something?', options: ['Knock on wood', 'Look in the mirror', 'Sit down'], answer: 1 },
              { id: 'q3', q: 'What happens in Britain if you break a mirror?', options: ['Seven years of bad luck', 'Good luck', 'You’ll find money'], answer: 0 },
              { id: 'q4', q: 'What does a black cat mean in Scotland?', options: ['Bad luck', 'Good luck', 'Rain'], answer: 1 },
              { id: 'q5', q: 'How many people are a little superstitious?', options: ['About a half', 'About a third', 'Almost nobody'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'In Ukraine, if you sit at the corner of the table, you won’t get married for seven years.', answer: true },
              { id: 's2', s: 'In Britain, a black cat always means good luck.', answer: false, explain: 'Some people think it brings bad luck; in Scotland it means good luck.' },
              { id: 's3', s: 'In Japan, you shouldn’t cut your nails at night.', answer: true },
              { id: 's4', s: 'The Turkish superstition is about chewing gum in the morning.', answer: false, explain: 'It’s about chewing gum at night.' },
              { id: 's5', s: 'Nobody believes in superstitions any more.', answer: false, explain: 'About a third of people are a little superstitious.' }
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
            title: 'Luck & superstitions',
            instructions: 'Слова про удачу, забобони й прикмети.',
            cards: [
              { front: 'superstition / superstitious', ipa: '/ˌsuːpəˈstɪʃn/', back: 'забобон / забобонний', example: 'Are you superstitious?' },
              { front: 'luck / lucky / unlucky', back: 'удача / щасливий / нещасливий', example: 'Thirteen is an unlucky number.' },
              { front: 'bad luck / good luck', back: 'невдача / удача', example: 'Good luck with your exam!' },
              { front: 'believe in', ipa: '/bɪˈliːv/', back: 'вірити в', example: 'Do you believe in ghosts?' },
              { front: 'knock on wood', back: 'постукати по дереву', example: 'I’ve never been ill — knock on wood!' },
              { front: 'mirror', ipa: '/ˈmɪrə/', back: 'дзеркало', example: 'Don’t break the mirror!' },
              { front: 'whistle', ipa: '/ˈwɪsl/', back: 'свистіти', example: 'Don’t whistle in the house.' },
              { front: 'cross somebody’s path', back: 'перейти дорогу комусь', example: 'A black cat crossed my path.' },
              { front: 'horseshoe', ipa: '/ˈhɔːsʃuː/', back: 'підкова', example: 'A horseshoe brings luck.' },
              { front: 'wish (n / v)', back: 'бажання / бажати', example: 'Make a wish!' },
              { front: 'just in case', back: 'про всяк випадок', example: 'Take an umbrella, just in case.' },
              { front: 'survey', ipa: '/ˈsɜːveɪ/', back: 'опитування', example: 'The survey shows interesting results.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Superstition halves',
            instructions: 'Поєднай початок прикмети з її кінцем.',
            pairs: [
              ['If you break a mirror,', 'you’ll have seven years of bad luck.'],
              ['If you whistle inside,', 'you’ll lose money.'],
              ['If you find a four-leaf clover,', 'you’ll be lucky.'],
              ['If your nose itches,', 'you’ll drink with friends.'],
              ['If you sit at the table corner,', 'you won’t marry for seven years.'],
              ['If you see a falling star,', 'you can make a wish.'],
              ['If you open an umbrella indoors,', 'it will bring bad luck.'],
              ['If you spill salt,', 'you’ll argue with someone.']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'Lucky or not?',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'My grandmother is very {{superstitious}}. She never whistles at home.' },
              { id: 'd2', text: 'Some people think thirteen is an {{unlucky}} number.' },
              { id: 'd3', text: 'There’s a {{horseshoe}} above our door for good luck.' },
              { id: 'd4', text: 'Blow out the candles and make a {{wish}}!' },
              { id: 'd5', text: 'I don’t {{believe}} in ghosts.' },
              { id: 'd6', text: 'Good {{luck}} in your new job!' }
            ],
            distractors: ['mirror']
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
            title: 'First Conditional',
            instructions: 'Як говорити про реальні можливі ситуації в майбутньому та їхні наслідки: «Якщо…, то…».',
            html: `
<h3>1. Формула</h3>
<div class="table-wrap"><table>
  <tr><th>Умова</th><th>Результат</th></tr>
  <tr><td><b>If</b> + Present Simple</td><td><b>will / won’t</b> + дієслово</td></tr>
  <tr><td>If you <b>break</b> a mirror,</td><td>you <b>will have</b> bad luck.</td></tr>
  <tr><td>If it <b>rains</b> tomorrow,</td><td>we <b>won’t go</b> to the beach.</td></tr>
</table></div>
<p>Значення: <b>реальна</b> ситуація в майбутньому — це цілком може статися.</p>

<h3>2. ⚠️ Після if — НЕ will!</h3>
<p>В українській кажемо «Якщо завтра <u>піде</u> дощ» (майбутній). В англійській після <b>if</b> — <b>Present Simple</b>:</p>
<div class="ex-line"><span class="no">If it will rain, we will stay at home.</span> → <span class="yes">If it <b>rains</b>, we will stay at home.</span></div>

<h3>3. Порядок частин і кома</h3>
<div class="ex-line"><b>If</b> you whistle inside<b>,</b> you’ll lose money. <span class="muted">(if на початку → кома)</span></div>
<div class="ex-line">You’ll lose money <b>if</b> you whistle inside. <span class="muted">(if у середині → без коми)</span></div>

<h3>4. Інші варіанти результату</h3>
<ul>
  <li>з <b>can / might</b>: If you see a falling star, you <b>can</b> make a wish.</li>
  <li>з <b>наказом</b>: If you forget something, <b>look</b> in the mirror.</li>
  <li>з <b>should</b>: If you feel ill, you <b>should</b> stay at home.</li>
</ul>

<h3>5. Питання</h3>
<div class="ex-line">What <b>will</b> you <b>do</b> if you <b>lose</b> your job? · <b>Will</b> you <b>come</b> if I <b>invite</b> you?</div>

<h3>6. if чи when?</h3>
<div class="table-wrap"><table>
  <tr><th>if — можливо станеться</th><th>when — точно станеться</th></tr>
  <tr><td><b>If</b> I see Olia, I’ll tell her. <span class="muted">(не знаю, чи побачу)</span></td><td><b>When</b> I see Olia tomorrow, I’ll tell her. <span class="muted">(точно побачу)</span></td></tr>
</table></div>
<p>Після <b>when</b> — теж Present Simple: <span class="no">When I will get home</span> → <span class="yes">When I get home, I’ll call you.</span></p>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">If I will have time, I will help you.</span> → <span class="yes">If I have time, I will help you.</span><br>
<span class="no">If she don’t hurry, she’ll be late.</span> → <span class="yes">If she doesn’t hurry, she’ll be late.</span><br>
<span class="no">If you will be hungry, eat something.</span> → <span class="yes">If you are hungry, eat something.</span></div>`
          },
          {
            id: 'gram-form',
            type: 'gap',
            title: 'Complete the conditionals',
            instructions: 'Постав дієслова в правильну форму: Present Simple після if, will у результаті.',
            items: [
              { id: 'g1', text: 'If it {{rains}} tomorrow, we {{will stay|’ll stay}} at home. (rain / stay)' },
              { id: 'g2', text: 'If you {{whistle}} inside, you {{will lose|’ll lose}} money. (whistle / lose)' },
              { id: 'g3', text: 'If she {{doesn’t hurry|does not hurry}}, she {{will miss|’ll miss}} the bus. (− hurry / miss)' },
              { id: 'g4', text: 'I {{will call|’ll call}} you if I {{have}} time. (call / have)' },
              { id: 'g5', text: 'If they {{win}} the match, they {{will be|’ll be}} champions. (win / be)' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Choose the correct form',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'c1', q: 'If you ___ a mirror, you’ll have bad luck.', options: ['break', 'will break', 'broke'], answer: 0 },
              { id: 'c2', q: 'If I see a black cat, I ___ the other way.', options: ['go', 'will go', 'went'], answer: 1 },
              { id: 'c3', q: 'What will you do if you ___ the lottery?', options: ['will win', 'win', 'won'], answer: 1 },
              { id: 'c4', q: 'We won’t go to the park if it ___ cold.', options: ['is', 'will be', 'be'], answer: 0 },
              { id: 'c5', q: '___ I get home, I’ll make dinner. (I’m sure I’ll get home)', options: ['If', 'When'], answer: 1 },
              { id: 'c6', q: '___ I have enough money, I’ll buy a car. (I’m not sure)', options: ['If', 'When'], answer: 0 }
            ]
          },
          {
            id: 'gram-match',
            type: 'match',
            title: 'Match the halves',
            instructions: 'Поєднай умову з логічним результатом.',
            pairs: [
              ['If you don’t sleep,', 'you’ll be tired.'],
              ['If you study hard,', 'you’ll pass the exam.'],
              ['If you eat too much,', 'you’ll feel sick.'],
              ['If it snows,', 'we’ll build a snowman.'],
              ['If you’re cold,', 'close the window.'],
              ['If we leave now,', 'we won’t be late.']
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Якщо піде дощ, ми залишимося вдома.', answer: "If it rains, we'll stay at home.", extra: ['will'] },
              { id: 'o2', prompt: 'Що ти робитимеш, якщо загубиш паспорт?', answer: 'What will you do if you lose your passport?' },
              { id: 'o3', prompt: 'Коли я прийду додому, я тобі подзвоню.', answer: "When I get home, I'll call you." },
              { id: 'o4', prompt: 'Якщо вона не поспішить, то запізниться.', answer: "If she doesn't hurry, she'll be late." }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: Present Perfect і will',
            instructions: 'Згадаймо уроки 1–2 та модуль 4.',
            items: [
              { id: 'r1', q: 'Have you ever ___ a black cat?', options: ['see', 'saw', 'seen'], answer: 2 },
              { id: 'r2', q: 'I’ve ___ broken a mirror. Oh no!', options: ['just', 'yet', 'ever'], answer: 0 },
              { id: 'r3', q: 'I don’t think it ___ rain tomorrow.', options: ['will', 'is', 'won’t'], answer: 0 },
              { id: 'r4', q: 'Have you made a wish ___?', options: ['already', 'yet', 'just'], answer: 1 }
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
            title: 'Weekend plans',
            instructions: 'Друзі планують вихідні, але погода невизначена. Послухай.',
            audio: {
              title: 'Dialogue: Ostap & Dasha',
              lines: [
                { who: 'Ostap', text: 'What are we going to do on Saturday?' },
                { who: 'Dasha', text: 'Well, if the weather is good, we’ll go cycling by the river.' },
                { who: 'Ostap', text: 'And if it rains?' },
                { who: 'Dasha', text: 'If it rains, we’ll go to the new museum. My cousin says it’s great.' },
                { who: 'Ostap', text: 'OK. But if we go cycling, I’ll need to fix my bike. The back tyre is flat.' },
                { who: 'Dasha', text: 'If you don’t fix it by Friday, you can use my brother’s bike.' },
                { who: 'Ostap', text: 'Perfect. And if we’re hungry after, let’s try that Georgian restaurant.' },
                { who: 'Dasha', text: 'Deal! If it’s busy, we’ll get takeaway.' }
              ]
            },
            items: [
              { id: 'l1', q: 'What will they do if the weather is good?', options: ['Go to the museum', 'Go cycling by the river', 'Stay at home'], answer: 1 },
              { id: 'l2', q: 'What will they do if it rains?', options: ['Go to the new museum', 'Watch a film', 'Go swimming'], answer: 0 },
              { id: 'l3', q: 'What is the problem with Ostap’s bike?', options: ['The chain is broken.', 'The back tyre is flat.', 'It’s too small.'], answer: 1 },
              { id: 'l4', q: 'What will happen if Ostap doesn’t fix his bike?', options: ['They won’t go.', 'He can use Dasha’s brother’s bike.', 'He’ll buy a new one.'], answer: 1 },
              { id: 'l5', q: 'What will they do if the restaurant is busy?', options: ['Wait', 'Get takeaway', 'Go home'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'If the weather is good, we’ll go cycling.' },
              { id: 'dc2', text: 'If it rains, we’ll go to the museum.' },
              { id: 'dc3', text: 'If you don’t fix it, you can use my bike.' },
              { id: 'dc4', text: 'If it’s busy, we’ll get takeaway.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-ifs',
            type: 'writing',
            title: 'Plans with “if”',
            instructions: 'Напиши, що ти робитимеш у різних ситуаціях наступних вихідних і в житті.',
            prompt: 'Write about your plans and possibilities (90–120 words).\n• Weekend: what will you do if the weather is good / bad?\n• What will you do if you have more free time this year?\n• Describe one superstition from your family (If you…, you’ll…). Do you believe it?\n• Use at least 6 first conditional sentences, including one with when.',
            minWords: 90,
            maxWords: 130,
            phrases: ['If the weather is', 'I’ll', 'If I have', 'I won’t', 'When I', 'If you'],
            checklist: ['Після if і when — Present Simple (не will!)', 'Щонайменше 6 умовних речень', 'Кома, коли if на початку', 'Є одне речення з when'],
            model: `If the weather is good on Saturday, I’ll take my kids to the forest. We’ll have a picnic if they don’t complain about the walk! If it rains, we’ll stay at home and bake a cake.

If I have more free time this year, I’ll finally start learning the guitar. When I finish my project at work, I’ll book a holiday.

My grandmother has a funny superstition. She says that if your left hand itches, you’ll get money soon. If your right hand itches, you’ll lose money! I don’t really believe it, but when my left hand itches, I always smile.`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-if',
            type: 'speaking',
            title: 'What will you do if…?',
            instructions: 'Відповідай уголос першим типом умовних речень.',
            phrases: ['If…, I’ll…', 'If…, I won’t…', 'When…, I’ll…', 'I’ll…if…'],
            tasks: [
              { id: 'sp1', q: 'What will you do if you lose your phone today?', tips: 'If I lose my phone, I’ll …', model: 'If I lose my phone, I’ll call it from my friend’s phone. If nobody answers, I’ll block my bank card.' },
              { id: 'sp2', q: 'What will you do this evening if you aren’t too tired?', tips: 'If I’m not too tired, I’ll …', model: 'If I’m not too tired, I’ll go for a walk and then watch a new series.' },
              { id: 'sp3', q: 'Tell me a superstition you know. Do you believe it?', tips: 'People say that if you …, you’ll …', model: 'People say that if you sit on the corner of a table, you won’t get married. I don’t believe it!' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'superstitious': 'забобонний', 'superstitions': 'забобони', 'superstition': 'забобон', 'believe in': 'вірити в', 'still': 'все одно', 'knock on wood': 'стукати по дереву',
      'just in case': 'про всяк випадок', 'popular': 'популярні', 'around the world': 'по всьому світу', 'believe': 'вірити', 'if': 'якщо', 'whistle': 'свистіти',
      'inside': 'всередині', 'house': 'будинок', 'lose': 'втратити', 'money': 'гроші', 'forget': 'забути', 'something': 'щось', 'go back': 'повернутися',
      'look in the mirror': 'подивитися в дзеркало', 'mirror': 'дзеркало', 'rest of the day': 'решта дня', 'go badly': 'піде погано', 'sit': 'сидіти',
      'corner': 'кут', 'table': 'стіл', 'get married': 'одружитися', 'seven years': 'сім років', 'britain': 'Британія', 'break': 'розбити', 'bad luck': 'невдача',
      'black cat': 'чорний кіт', 'crosses your path': 'перейде дорогу', 'bring': 'принести', 'scotland': 'Шотландія', 'means': 'означає', 'good luck': 'удача',
      'japan': 'Японія', 'cut': 'стригти', 'nails': 'нігті', 'at night': 'вночі', 'parents': 'батьки', 'die': 'помирати', 'turkey': 'Туреччина', 'chew': 'жувати',
      'gum': 'жуйка', 'turn into': 'перетворитися на', 'flesh': 'плоть', 'the dead': 'мерці', 'scary': 'страшно', 'alone': 'самотні', 'surveys': 'опитування',
      'show': 'показують', 'about': 'приблизно', 'a third': 'третина', 'a little': 'трохи', 'happen': 'статися', 'lucky': 'щасливий', 'unlucky': 'нещасливий',
      'rain': 'дощ', 'half': 'половина', 'almost nobody': 'майже ніхто', 'always': 'завжди', 'morning': 'ранок', 'any more': 'більше (не)', 'luck': 'удача',
      'ghosts': 'привиди', 'horseshoe': 'підкова', 'wish': 'бажання', 'make a wish': 'загадати бажання', 'survey': 'опитування', 'results': 'результати',
      'four-leaf clover': 'конюшина з чотирма листками', 'nose': 'ніс', 'itches': 'свербить', 'drink': 'пити', 'falling star': 'падаюча зірка',
      'umbrella': 'парасолька', 'indoors': 'у приміщенні', 'spill': 'розсипати', 'salt': 'сіль', 'argue': 'сваритися', 'grandmother': 'бабуся',
      'number': 'число', 'above': 'над', 'door': 'двері', 'blow out': 'задути', 'candles': 'свічки', 'job': 'робота', 'tomorrow': 'завтра', 'beach': 'пляж',
      'stay at home': 'залишатися вдома', 'hurry': 'поспішати', 'miss': 'пропустити', 'call': 'дзвонити', 'time': 'час', 'win': 'виграти', 'match': 'матч',
      'champions': 'чемпіони', 'the other way': 'іншою дорогою', 'lottery': 'лотерея', 'park': 'парк', 'cold': 'холодно', 'get home': 'прийти додому',
      'make dinner': 'приготувати вечерю', 'enough': 'достатньо', 'car': 'машина', 'tired': 'втомлений', 'study': 'вчитися', 'pass': 'скласти', 'exam': 'іспит',
      'feel sick': 'нудитиме', 'snows': 'йде сніг', 'build': 'зліпити', 'snowman': 'сніговик', 'close': 'зачини', 'window': 'вікно', 'leave': 'вийти',
      'late': 'запізнюватися', 'passport': 'паспорт', 'saturday': 'субота', 'weather': 'погода', 'cycling': 'кататися на велосипеді', 'river': 'річка',
      'cousin': 'двоюрідна сестра', 'great': 'чудовий', 'fix': 'полагодити', 'bike': 'велосипед', 'back tyre': 'задня шина', 'flat': 'спущена',
      'by friday': 'до п’ятниці', 'brother': 'брат', 'hungry': 'голодні', "let's try": 'давай спробуємо', 'georgian': 'грузинський', 'restaurant': 'ресторан',
      'deal': 'домовились', 'busy': 'людно', 'takeaway': 'їжа на винос', 'chain': 'ланцюг', 'possibilities': 'можливості', 'kids': 'діти', 'forest': 'ліс',
      'picnic': 'пікнік', 'complain': 'скаржитися', 'walk': 'прогулянка', 'bake': 'спекти', 'cake': 'торт', 'free time': 'вільний час', 'finally': 'нарешті',
      'guitar': 'гітара', 'finish': 'закінчити', 'project': 'проєкт', 'book': 'забронювати', 'holiday': 'відпустка', 'funny': 'кумедний', 'left hand': 'ліва рука',
      'soon': 'скоро', 'right hand': 'права рука', 'really': 'насправді', 'smile': 'усміхаюся', 'phone': 'телефон', 'answers': 'відповідає',
      'block': 'заблокувати', 'bank card': 'банківська картка', 'evening': 'вечір', 'series': 'серіал', 'people say': 'кажуть', "i'll": 'я (зроблю)',
      "you'll": 'ти (будеш)', "won't": 'не буде', "we'll": 'ми (зробимо)'
    }
  });
})();
