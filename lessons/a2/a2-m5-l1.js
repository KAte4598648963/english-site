/*
 * A2 · Module 5 · Lesson 1 — At the doctor’s (should / shouldn’t; What’s the matter?)
 * Review: imperatives (A1), will for offers (module 4). Exercise IDs are PERMANENT.
 */
(function () {
  const PASSAGE = {
    title: 'Ask Dr Olha',
    text: `Every week Dr Olha answers readers’ health questions.

“I work in an office and I get headaches almost every afternoon. What should I do?” — Ivan, 34

Dr Olha: Headaches at work are very common. First, you should drink more water — at least two litres a day. You should also take short breaks: every hour, stand up and look out of the window for a few minutes. You shouldn’t drink too much coffee, and you definitely shouldn’t skip lunch. If the headaches don’t stop, you should see a doctor and check your eyes.

“My son is eleven. He has a sore throat and a temperature of 38. Should I send him to school?” — Natalka, 41

Dr Olha: No, you shouldn’t. He should stay at home and rest. He should drink lots of warm drinks, like tea with honey. You shouldn’t give him antibiotics without a doctor’s advice — most sore throats are caused by viruses. If his temperature goes above 39, or he feels worse after three days, you should call your doctor.`
  };

  ENG.registerLesson({
    id: 'a2-m5-l1',
    level: 'a2',
    title: 'At the doctor’s. У лікаря',
    subtitle: 'should / shouldn’t · поради · симптоми й хвороби',

    sections: [
      {
        id: 'reading',
        title: 'Reading',
        exercises: [
          {
            id: 'read-mcq',
            type: 'choice',
            title: 'Health advice',
            instructions: 'Прочитай поради лікарки читачам журналу.',
            passage: PASSAGE,
            items: [
              { id: 'q1', q: 'When does Ivan get headaches?', options: ['In the morning', 'Almost every afternoon', 'At night'], answer: 1 },
              { id: 'q2', q: 'How much water should Ivan drink?', options: ['At least one litre', 'At least two litres', 'Five glasses'], answer: 1 },
              { id: 'q3', q: 'What should Ivan do every hour?', options: ['Drink coffee', 'Stand up and look out of the window', 'Eat a snack'], answer: 1 },
              { id: 'q4', q: 'What’s wrong with Natalka’s son?', options: ['A headache', 'A sore throat and a temperature', 'A broken arm'], answer: 1 },
              { id: 'q5', q: 'When should Natalka call the doctor?', options: ['Immediately', 'If the temperature goes above 39', 'Never'], answer: 1 }
            ]
          },
          {
            id: 'read-tf',
            type: 'truefalse',
            title: 'True or False?',
            instructions: 'Правда чи неправда?',
            passage: PASSAGE,
            items: [
              { id: 's1', s: 'Dr Olha says headaches at work are rare.', answer: false, explain: '“Headaches at work are very common.”' },
              { id: 's2', s: 'Ivan shouldn’t skip lunch.', answer: true },
              { id: 's3', s: 'Natalka’s son should go to school.', answer: false, explain: '“No, you shouldn’t. He should stay at home and rest.”' },
              { id: 's4', s: 'Tea with honey is a good idea for a sore throat.', answer: true },
              { id: 's5', s: 'Natalka should give her son antibiotics immediately.', answer: false, explain: '“You shouldn’t give him antibiotics without a doctor’s advice.”' }
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
            title: 'Health problems',
            instructions: 'Симптоми й хвороби. Зверни увагу: I have a … / I’ve got a …',
            cards: [
              { front: 'a headache', ipa: '/ˈhedeɪk/', back: 'головний біль', example: 'I’ve got a terrible headache.' },
              { front: 'a sore throat', ipa: '/sɔː θrəʊt/', back: 'біль у горлі', example: 'He has a sore throat.' },
              { front: 'a temperature / a fever', back: 'температура', example: 'She has a temperature of 38.' },
              { front: 'a cough', ipa: '/kɒf/', back: 'кашель', example: 'I have a bad cough.' },
              { front: 'a cold / the flu', ipa: '/fluː/', back: 'застуда / грип', example: 'I think I have the flu.' },
              { front: 'a stomach ache', ipa: '/ˈstʌmək eɪk/', back: 'біль у животі', example: 'I ate too much and now I have a stomach ache.' },
              { front: 'a runny nose', back: 'нежить', example: 'My son has a runny nose.' },
              { front: 'toothache', ipa: '/ˈtuːθeɪk/', back: 'зубний біль', example: 'You should see a dentist about your toothache.' },
              { front: 'feel sick / dizzy', ipa: '/ˈdɪzi/', back: 'нудити / паморочитися', example: 'I feel dizzy when I stand up.' },
              { front: 'rest', back: 'відпочивати', example: 'You should rest for a few days.' },
              { front: 'take medicine / tablets', back: 'приймати ліки / пігулки', example: 'Take two tablets after meals.' },
              { front: 'What’s the matter?', back: 'Що сталося? Що турбує?', example: 'What’s the matter? You look pale.' }
            ]
          },
          {
            id: 'vocab-match',
            type: 'match',
            title: 'Problem → advice',
            instructions: 'Поєднай проблему з порадою.',
            pairs: [
              ['toothache', 'see a dentist'],
              ['a sore throat', 'drink tea with honey'],
              ['a stomach ache', 'don’t eat heavy food'],
              ['a temperature', 'stay in bed'],
              ['a runny nose', 'use tissues'],
              ['a headache', 'take a painkiller'],
              ['feel tired', 'go to bed earlier'],
              ['a cough', 'stop smoking']
            ]
          },
          {
            id: 'vocab-dnd',
            type: 'dragdrop',
            title: 'What’s the matter?',
            instructions: 'Встав слово. Одне слово зайве.',
            items: [
              { id: 'd1', text: 'I can’t eat anything. I have a {{stomach}} ache.' },
              { id: 'd2', text: 'He can’t talk because he has a sore {{throat}}.' },
              { id: 'd3', text: 'She feels hot. I think she has a {{temperature}}.' },
              { id: 'd4', text: 'I stood up too quickly and felt {{dizzy}}.' },
              { id: 'd5', text: 'The doctor told me to {{rest}} for three days.' },
              { id: 'd6', text: 'I can’t stop coughing. This {{cough}} is terrible!' }
            ],
            distractors: ['toothache']
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
            title: 'should / shouldn’t',
            instructions: 'Як давати поради і питати поради. Модальне дієслово should — просте й дуже корисне.',
            html: `
<h3>1. Значення</h3>
<p><b>should</b> = «слід, варто, треба б» (порада, думка). <b>shouldn’t</b> = «не варто, не слід».</p>
<div class="ex-line">You <mark>should</mark> drink more water. — Тобі <u>варто</u> пити більше води.</div>
<div class="ex-line">You <mark>shouldn’t</mark> drink too much coffee. — Тобі <u>не варто</u> пити забагато кави.</div>

<h3>2. Форма — як у can: однакова для всіх</h3>
<div class="table-wrap"><table>
  <tr><th>+</th><th>−</th><th>?</th></tr>
  <tr><td>I / he / they <b>should</b> rest.</td><td>She <b>shouldn’t</b> (should not) go.</td><td><b>Should</b> I call a doctor? — Yes, you should. / No, you shouldn’t.</td></tr>
</table></div>
<p>⚠️ Після should — дієслово <b>без to і без -s</b>: <span class="no">He should to rest.</span> <span class="no">He should rests.</span> → <span class="yes">He should rest.</span></p>
<p>⚠️ Не потрібні do/does: <span class="no">Do I should…?</span> → <span class="yes">Should I…?</span></p>

<h3>3. Питаємо поради</h3>
<div class="ex-line"><b>What should I do?</b> · <b>Should I</b> send him to school? · <b>Where should we</b> go?</div>

<h3>4. Як пом’якшити пораду</h3>
<ul>
  <li><b>I think</b> you should… — Я думаю, тобі варто…</li>
  <li><b>I don’t think</b> you should… — Я не думаю, що тобі варто… <span class="muted">(частіше, ніж «I think you shouldn’t»)</span></li>
  <li><b>Maybe</b> you should… — Можливо, тобі варто…</li>
</ul>

<h3>5. should vs imperative vs will</h3>
<div class="table-wrap"><table>
  <tr><th>Порада</th><th>Наказ, інструкція</th><th>Пропозиція допомоги</th></tr>
  <tr><td>You <b>should</b> rest.</td><td><b>Rest!</b> <b>Take</b> two tablets.</td><td>I<b>’ll</b> get you some tea.</td></tr>
</table></div>

<div class="tip">⚠️ <b>Типові помилки</b><br>
<span class="no">You should to see a doctor.</span> → <span class="yes">You should see a doctor.</span><br>
<span class="no">She shoulds stay at home.</span> → <span class="yes">She should stay at home.</span><br>
<span class="no">Do I should go?</span> → <span class="yes">Should I go?</span><br>
<span class="no">I have headache.</span> → <span class="yes">I have a headache.</span></div>`
          },
          {
            id: 'gram-should',
            type: 'gap',
            title: 'should or shouldn’t?',
            instructions: 'Встав should або shouldn’t за змістом.',
            items: [
              { id: 'g1', text: 'You have a temperature. You {{should}} stay in bed.' },
              { id: 'g2', text: 'You {{shouldn’t|should not}} go to work with the flu.' },
              { id: 'g3', text: 'He has toothache. He {{should}} see a dentist.' },
              { id: 'g4', text: 'You {{shouldn’t|should not}} eat sweets before bed.' },
              { id: 'g5', text: 'Kids {{should}} sleep at least nine hours.' },
              { id: 'g6', text: 'You {{shouldn’t|should not}} take antibiotics without a doctor’s advice.' }
            ]
          },
          {
            id: 'gram-choice',
            type: 'choice',
            title: 'Choose the correct form',
            instructions: 'Обери правильний варіант.',
            items: [
              { id: 'c1', q: 'You should ___ more water.', options: ['drink', 'to drink', 'drinks'], answer: 0 },
              { id: 'c2', q: '___ I take these tablets before or after meals?', options: ['Do', 'Should', 'Am'], answer: 1 },
              { id: 'c3', q: 'I don’t think you ___ go out today.', options: ['should', 'shouldn’t', 'should to'], answer: 0, explain: 'I don’t think you should… — вже має заперечення в «don’t think».' },
              { id: 'c4', q: 'What ___ I do? My back hurts.', options: ['should', 'do', 'will'], answer: 0 },
              { id: 'c5', q: 'She has ___ terrible headache.', options: ['—', 'a', 'the'], answer: 1 },
              { id: 'c6', q: 'You look pale. — ___? — I feel sick.', options: ['What’s the matter', 'What matter', 'What’s matter'], answer: 0 }
            ]
          },
          {
            id: 'gram-advice',
            type: 'choice',
            title: 'Give the best advice',
            instructions: 'Обери найкращу пораду до кожної проблеми.',
            items: [
              { id: 'a1', q: '“I’m always tired.”', options: ['You should go to bed earlier.', 'You should drink more coffee at night.', 'You shouldn’t sleep.'], answer: 0 },
              { id: 'a2', q: '“I have a cough.”', options: ['You should smoke less.', 'You should eat ice cream.', 'You shouldn’t drink tea.'], answer: 0 },
              { id: 'a3', q: '“I feel dizzy.”', options: ['You should sit down.', 'You should run.', 'You should drive home.'], answer: 0 },
              { id: 'a4', q: '“I can’t sleep at night.”', options: ['You shouldn’t use your phone in bed.', 'You should drink coffee at 10 p.m.', 'You should watch horror films.'], answer: 0 }
            ]
          },
          {
            id: 'gram-order',
            type: 'order',
            title: 'Build the sentences',
            instructions: 'Склади речення.',
            items: [
              { id: 'o1', prompt: 'Що мені робити?', answer: 'What should I do?' },
              { id: 'o2', prompt: 'Тобі варто звернутися до лікаря.', answer: 'You should see a doctor.', extra: ['to'] },
              { id: 'o3', prompt: 'Я не думаю, що тобі варто йти на роботу.', answer: "I don't think you should go to work." },
              { id: 'o4', prompt: 'У нього болить горло.', answer: 'He has a sore throat.' }
            ]
          },
          {
            id: 'gram-review',
            type: 'choice',
            title: '↺ Повторення: накази і will',
            instructions: 'Згадаймо A1 (наказовий спосіб) і модуль 4 (will).',
            items: [
              { id: 'r1', q: '___ two tablets after breakfast.', options: ['Take', 'Taking', 'You take to'], answer: 0 },
              { id: 'r2', q: '___ drink alcohol with this medicine.', options: ['Not', 'Don’t', 'No'], answer: 1 },
              { id: 'r3', q: 'You look ill. I ___ make you some tea.', options: ['’ll', '’m going to every day', 'make'], answer: 0 },
              { id: 'r4', q: 'I think you ___ feel better tomorrow.', options: ['will', 'are', 'should to'], answer: 0 }
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
            title: 'At the doctor’s',
            instructions: 'Пацієнт на прийомі в лікаря. Послухай.',
            audio: {
              title: 'Dialogue: Doctor & Patient',
              lines: [
                { who: 'Doctor', text: 'Good morning. What’s the matter?' },
                { who: 'Patient', text: 'I feel terrible. I have a bad cough and a sore throat, and I had a temperature last night.' },
                { who: 'Doctor', text: 'How long have you felt like this?' },
                { who: 'Patient', text: 'Since Monday. Three days.' },
                { who: 'Doctor', text: 'Let me listen to your chest… OK, it’s a bad cold, not the flu. You should stay at home for three or four days.' },
                { who: 'Patient', text: 'Should I take antibiotics?' },
                { who: 'Doctor', text: 'No, you shouldn’t. They won’t help with a cold. You should drink lots of water and hot tea, and take this medicine for the cough.' },
                { who: 'Patient', text: 'Can I go to the gym?' },
                { who: 'Doctor', text: 'No — you shouldn’t do any sport this week. Rest!' }
              ]
            },
            items: [
              { id: 'l1', q: 'What are the patient’s symptoms?', options: ['A headache and a stomach ache', 'A cough, a sore throat and a temperature', 'A runny nose only'], answer: 1 },
              { id: 'l2', q: 'How long has he felt ill?', options: ['One day', 'Three days', 'A week'], answer: 1 },
              { id: 'l3', q: 'What does he have?', options: ['The flu', 'A bad cold', 'Toothache'], answer: 1 },
              { id: 'l4', q: 'Should he take antibiotics?', options: ['Yes, he should.', 'No, he shouldn’t.'], answer: 1 },
              { id: 'l5', q: 'What shouldn’t he do this week?', options: ['Drink tea', 'Do sport', 'Sleep'], answer: 1 }
            ]
          },
          {
            id: 'listen-dict',
            type: 'dictation',
            title: 'Dictation',
            instructions: 'Послухай і запиши.',
            items: [
              { id: 'dc1', text: 'What’s the matter?' },
              { id: 'dc2', text: 'I have a bad cough and a sore throat.' },
              { id: 'dc3', text: 'Should I take antibiotics?' },
              { id: 'dc4', text: 'You should stay at home for three days.' }
            ]
          }
        ]
      },

      {
        id: 'writing',
        title: 'Writing',
        exercises: [
          {
            id: 'write-advice',
            type: 'writing',
            title: 'Reply to a friend',
            instructions: 'Подруга пише: «I have exams next week, but I can’t sleep, I have headaches and I feel stressed all the time. What should I do?» Напиши відповідь з порадами.',
            prompt: 'Write a reply (90–120 words).\n• Show you understand the problem.\n• Give at least 5 pieces of advice with should / shouldn’t.\n• Use I think you should… / I don’t think you should… / Maybe you should…\n• Offer to help (I’ll…).\n• End with a positive wish.',
            minWords: 90,
            maxWords: 130,
            phrases: ['I’m sorry to hear', 'I think you should', 'I don’t think you should', 'Maybe you should', 'You shouldn’t', 'I’ll', 'Good luck'],
            checklist: ['Щонайменше 5 порад з should / shouldn’t', 'Після should — дієслово без to', 'Є I don’t think you should…', 'Є пропозиція допомоги з I’ll', 'Є позитивна кінцівка'],
            model: `Hi Dasha,

I’m sorry to hear you feel so stressed. Exams are hard, but you can do it!

First, I think you should make a timetable for studying, with short breaks every hour. You shouldn’t study late at night — your brain needs sleep. Maybe you should go for a walk every evening; fresh air really helps with headaches.

I don’t think you should drink so much coffee. Try herbal tea instead. And you shouldn’t look at your phone in bed!

If you want, I’ll come over on Saturday and we can study together. I’ll bring snacks.

Good luck — I know you’ll do well!
Ira`
          }
        ]
      },

      {
        id: 'speaking',
        title: 'Speaking',
        exercises: [
          {
            id: 'speak-advice',
            type: 'speaking',
            title: 'Doctor, doctor!',
            instructions: 'Відповідай уголос: опиши проблему або дай пораду.',
            phrases: ['What’s the matter?', 'I’ve got a…', 'You should…', 'You shouldn’t…', 'I don’t think you should…'],
            tasks: [
              { id: 'sp1', q: 'You are the patient. Describe your symptoms to the doctor.', tips: 'I feel … I have a … since …', model: 'I feel terrible. I have a headache and a runny nose since yesterday, and I feel very tired.' },
              { id: 'sp2', q: 'You are the doctor. Give advice to someone with a stomach ache.', tips: 'You should … You shouldn’t …', model: 'You should drink water and eat plain rice. You shouldn’t eat spicy or fried food for a few days.' },
              { id: 'sp3', q: 'What should people do to stay healthy? Give four tips.', tips: 'People should … They shouldn’t …', model: 'People should walk every day and sleep eight hours. They shouldn’t eat too much sugar or sit all day.' }
            ]
          }
        ]
      }
    ],

    glossary: {
      'ask': 'запитай', 'every week': 'щотижня', 'answers': 'відповідає на', 'readers': 'читачі', 'health': 'здоров’я', 'questions': 'питання',
      'office': 'офіс', 'headaches': 'головні болі', 'headache': 'головний біль', 'almost': 'майже', 'every afternoon': 'щодня після обіду',
      'should': 'варто, слід', "shouldn't": 'не варто', 'common': 'поширені', 'first': 'по-перше', 'drink': 'пити', 'water': 'вода', 'at least': 'щонайменше',
      'litres': 'літри', 'a day': 'на день', 'take': 'робити, брати', 'short breaks': 'короткі перерви', 'every hour': 'щогодини', 'stand up': 'вставати',
      'look out of the window': 'дивитися у вікно', 'a few minutes': 'кілька хвилин', 'too much': 'забагато', 'coffee': 'кава', 'definitely': 'точно',
      'skip': 'пропускати', 'lunch': 'обід', 'stop': 'припиняються', 'see a doctor': 'звернутися до лікаря', 'check': 'перевірити', 'eyes': 'очі',
      'son': 'син', 'eleven': 'одинадцять', 'sore throat': 'біль у горлі', 'temperature': 'температура', 'send': 'відправляти', 'school': 'школа',
      'stay at home': 'залишатися вдома', 'rest': 'відпочивати', 'lots of': 'багато', 'warm drinks': 'теплі напої', 'tea': 'чай', 'honey': 'мед',
      'give': 'давати', 'antibiotics': 'антибіотики', 'without': 'без', "doctor's advice": 'порада лікаря', 'most': 'більшість', 'caused by': 'спричинені',
      'viruses': 'віруси', 'goes above': 'піднімається вище', 'feels worse': 'почувається гірше', 'call': 'зателефонувати', 'morning': 'ранок',
      'night': 'ніч', 'glasses': 'склянки', 'snack': 'перекус', "what's wrong": 'що не так', 'broken arm': 'зламана рука', 'immediately': 'негайно',
      'never': 'ніколи', 'rare': 'рідкісні', 'idea': 'ідея', 'cough': 'кашель', 'cold': 'застуда', 'flu': 'грип', 'stomach ache': 'біль у животі',
      'runny nose': 'нежить', 'toothache': 'зубний біль', 'dentist': 'стоматолог', 'feel sick': 'нудить', 'dizzy': 'паморочиться в голові',
      'medicine': 'ліки', 'tablets': 'пігулки', 'meals': 'їжа (прийоми)', "what's the matter": 'що сталося', 'pale': 'блідий', 'terrible': 'жахливий',
      'ate': 'з’їв', 'heavy food': 'важка їжа', 'stay in bed': 'лежати в ліжку', 'tissues': 'серветки', 'painkiller': 'знеболювальне', 'tired': 'втомлений',
      'earlier': 'раніше', 'smoking': 'паління', "can't eat": 'не можу їсти', 'anything': 'нічого', 'talk': 'говорити', 'hot': 'гаряча', 'stood up': 'встав',
      'quickly': 'швидко', 'told': 'сказав', "can't stop coughing": 'не можу перестати кашляти', 'flu (the)': 'грип', 'sweets': 'солодощі',
      'before bed': 'перед сном', 'kids': 'діти', 'sleep': 'спати', 'hours': 'години', 'back': 'спина', 'hurts': 'болить', 'always': 'завжди',
      'smoke': 'палити', 'less': 'менше', 'ice cream': 'морозиво', 'sit down': 'сісти', 'run': 'бігти', 'drive': 'їхати', 'phone': 'телефон',
      'horror films': 'фільми жахів', 'go to work': 'йти на роботу', 'alcohol': 'алкоголь', 'breakfast': 'сніданок', 'better': 'краще',
      'tomorrow': 'завтра', 'patient': 'пацієнт', 'good morning': 'доброго ранку', 'feel': 'почуватися', 'last night': 'учора ввечері',
      'how long': 'як довго', 'since monday': 'з понеділка', 'three days': 'три дні', 'listen to': 'послухати', 'chest': 'груди', "won't help": 'не допоможуть',
      'gym': 'спортзал', 'sport': 'спорт', 'this week': 'цього тижня', 'symptoms': 'симптоми', 'exams': 'іспити', 'next week': 'наступного тижня',
      "can't sleep": 'не можу спати', 'stressed': 'в стресі', 'all the time': 'постійно', 'reply': 'відповідь', "i'm sorry to hear": 'мені шкода це чути',
      'hard': 'важкі', 'timetable': 'розклад', 'studying': 'навчання', 'late at night': 'пізно вночі', 'brain': 'мозок', 'needs': 'потребує',
      'go for a walk': 'піти на прогулянку', 'every evening': 'щовечора', 'fresh air': 'свіже повітря', 'helps': 'допомагає', 'so much': 'так багато',
      'herbal tea': 'трав’яний чай', 'instead': 'натомість', 'come over': 'прийду', 'together': 'разом', 'bring': 'принесу', 'snacks': 'перекуси',
      'good luck': 'удачі', 'do well': 'добре впораєшся', 'since yesterday': 'з учора', 'plain': 'простий', 'rice': 'рис', 'spicy': 'гостра',
      'fried': 'смажена', 'a few days': 'кілька днів', 'stay healthy': 'залишатися здоровим', 'tips': 'поради', 'walk': 'ходити пішки',
      'sugar': 'цукор', 'sit': 'сидіти', 'all day': 'весь день', "i've got": 'у мене є'
    }
  });
})();
