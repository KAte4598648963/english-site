/*
 * Lesson registry: levels → modules → lessons.
 * New lesson = new file lessons/<level>/<lesson-id>.js + ONE line in the `lessons` array of its module.
 *   id   — permanent lesson ID (used in storage keys eng:<id>:…). Never change it.
 *   slug — part of the URL: #/<level>/<module>/<slug>
 *   file — path to the lesson file (it calls ENG.registerLesson({ id, ... }))
 */
window.ENG.registry = [
  {
    id: 'a1',
    name: 'A1',
    title: 'Beginner',
    ua: 'Початковий',
    desc: 'Перші кроки: знайомимось, говоримо про себе, сім’ю, день, дім і вільний час.',
    modules: [
      {
        id: 'module-1',
        num: 1,
        title: 'Hello!',
        ua: 'Знайомство',
        lessons: [
          { id: 'a1-m1-l1', slug: 'lesson-1', title: 'Hi, I’m… Знайомство', ua: 'to be: am / is / are', file: 'lessons/a1/a1-m1-l1.js' },
          { id: 'a1-m1-l2', slug: 'lesson-2', title: 'Where are you from?', ua: 'to be: − / ?, питальні слова', file: 'lessons/a1/a1-m1-l2.js' },
          { id: 'a1-m1-l3', slug: 'lesson-3', title: 'My things', ua: 'a/an, множина, this/these', file: 'lessons/a1/a1-m1-l3.js' },
          { id: 'a1-m1-l4', slug: 'lesson-4', title: 'Review: Meet my new friend', ua: 'Повторення модуля 1', file: 'lessons/a1/a1-m1-l4.js' }
        ]
      },
      {
        id: 'module-2',
        num: 2,
        title: 'Family & People',
        ua: 'Сім’я та люди',
        lessons: [
          { id: 'a1-m2-l1', slug: 'lesson-1', title: 'My family', ua: 'my/his/her, присвійний ’s', file: 'lessons/a1/a1-m2-l1.js' },
          { id: 'a1-m2-l2', slug: 'lesson-2', title: 'What do they look like?', ua: 'have got / has got', file: 'lessons/a1/a1-m2-l2.js' },
          { id: 'a1-m2-l3', slug: 'lesson-3', title: 'Personality', ua: 'прикметники, very/quite, and/but', file: 'lessons/a1/a1-m2-l3.js' },
          { id: 'a1-m2-l4', slug: 'lesson-4', title: 'Review: A family photo', ua: 'Повторення модуля 2', file: 'lessons/a1/a1-m2-l4.js' }
        ]
      },
      {
        id: 'module-3',
        num: 3,
        title: 'Daily Life',
        ua: 'Щоденне життя',
        lessons: [
          { id: 'a1-m3-l1', slug: 'lesson-1', title: 'My day', ua: 'Present Simple: I/you/we/they, час', file: 'lessons/a1/a1-m3-l1.js' },
          { id: 'a1-m3-l2', slug: 'lesson-2', title: 'He works, she studies', ua: 'he/she/it + -s, професії', file: 'lessons/a1/a1-m3-l2.js' },
          { id: 'a1-m3-l3', slug: 'lesson-3', title: 'Do you…?', ua: 'do/does, частотні прислівники', file: 'lessons/a1/a1-m3-l3.js' },
          { id: 'a1-m3-l4', slug: 'lesson-4', title: 'Review: A day in my life', ua: 'Повторення модуля 3', file: 'lessons/a1/a1-m3-l4.js' }
        ]
      },
      {
        id: 'module-4',
        num: 4,
        title: 'Home & Town',
        ua: 'Дім і місто',
        lessons: [
          { id: 'a1-m4-l1', slug: 'lesson-1', title: 'My home', ua: 'there is / there are, прийменники місця', file: 'lessons/a1/a1-m4-l1.js' },
          { id: 'a1-m4-l2', slug: 'lesson-2', title: 'In my town', ua: 'some / any, накази, як пройти', file: 'lessons/a1/a1-m4-l2.js' },
          { id: 'a1-m4-l3', slug: 'lesson-3', title: 'Shopping', ua: 'злічувані / незлічувані, how much / many', file: 'lessons/a1/a1-m4-l3.js' },
          { id: 'a1-m4-l4', slug: 'lesson-4', title: 'Review: Welcome to my town', ua: 'Повторення модуля 4', file: 'lessons/a1/a1-m4-l4.js' }
        ]
      },
      {
        id: 'module-5',
        num: 5,
        title: 'Free Time',
        ua: 'Вільний час',
        lessons: [
          { id: 'a1-m5-l1', slug: 'lesson-1', title: 'Hobbies', ua: 'like / love + -ing, me / him / them', file: 'lessons/a1/a1-m5-l1.js' },
          { id: 'a1-m5-l2', slug: 'lesson-2', title: 'I can swim!', ua: 'can / can’t', file: 'lessons/a1/a1-m5-l2.js' },
          { id: 'a1-m5-l3', slug: 'lesson-3', title: 'What are you doing now?', ua: 'Present Continuous', file: 'lessons/a1/a1-m5-l3.js' },
          { id: 'a1-m5-l4', slug: 'lesson-4', title: 'Review: My weekend', ua: 'Повторення модуля 5', file: 'lessons/a1/a1-m5-l4.js' }
        ]
      },
      {
        id: 'module-6',
        num: 6,
        title: 'Yesterday',
        ua: 'Минуле',
        lessons: [
          { id: 'a1-m6-l1', slug: 'lesson-1', title: 'Where were you?', ua: 'was / were', file: 'lessons/a1/a1-m6-l1.js' },
          { id: 'a1-m6-l2', slug: 'lesson-2', title: 'Last weekend', ua: 'Past Simple: правильні дієслова', file: 'lessons/a1/a1-m6-l2.js' },
          { id: 'a1-m6-l3', slug: 'lesson-3', title: 'My first trip', ua: 'неправильні дієслова, did / didn’t', file: 'lessons/a1/a1-m6-l3.js' },
          { id: 'a1-m6-l4', slug: 'lesson-4', title: 'Review A1: My English story', ua: 'Підсумкове повторення A1', file: 'lessons/a1/a1-m6-l4.js' }
        ]
      }
    ]
  },
  {
    id: 'a2',
    name: 'A2',
    title: 'Elementary',
    ua: 'Елементарний',
    modules: [
      {
        id: 'module-1',
        num: 1,
        title: 'People & Lifestyles',
        ua: 'Люди та спосіб життя',
        lessons: [
          { id: 'a2-m1-l1', slug: 'lesson-1', title: 'My lifestyle', ua: 'Present Simple vs Continuous, дієслова стану', file: 'lessons/a2/a2-m1-l1.js' },
          { id: 'a2-m1-l2', slug: 'lesson-2', title: 'People I admire', ua: 'who / which / that / where', file: 'lessons/a2/a2-m1-l2.js' },
          { id: 'a2-m1-l3', slug: 'lesson-3', title: 'Childhood memories', ua: 'used to', file: 'lessons/a2/a2-m1-l3.js' },
          { id: 'a2-m1-l4', slug: 'lesson-4', title: 'Review: The school reunion', ua: 'Повторення модуля 1', file: 'lessons/a2/a2-m1-l4.js' }
        ]
      },
      {
        id: 'module-2',
        num: 2,
        title: 'Stories',
        ua: 'Історії',
        lessons: [
          { id: 'a2-m2-l1', slug: 'lesson-1', title: 'What were you doing?', ua: 'Past Continuous', file: 'lessons/a2/a2-m2-l1.js' },
          { id: 'a2-m2-l2', slug: 'lesson-2', title: 'It happened when…', ua: 'Past Simple vs Continuous, when / while', file: 'lessons/a2/a2-m2-l2.js' },
          { id: 'a2-m2-l3', slug: 'lesson-3', title: 'Telling a story', ua: 'прислівники способу дії, слова-зв’язки', file: 'lessons/a2/a2-m2-l3.js' },
          { id: 'a2-m2-l4', slug: 'lesson-4', title: 'Review: The wrong train', ua: 'Повторення модуля 2', file: 'lessons/a2/a2-m2-l4.js' }
        ]
      },
      {
        id: 'module-3',
        num: 3,
        title: 'Places & Comparisons',
        ua: 'Місця та порівняння',
        lessons: [
          { id: 'a2-m3-l1', slug: 'lesson-1', title: 'City or village?', ua: 'вищий ступінь порівняння', file: 'lessons/a2/a2-m3-l1.js' },
          { id: 'a2-m3-l2', slug: 'lesson-2', title: 'The best place on Earth', ua: 'найвищий ступінь', file: 'lessons/a2/a2-m3-l2.js' },
          { id: 'a2-m3-l3', slug: 'lesson-3', title: 'Is it big enough?', ua: 'too / enough, as … as', file: 'lessons/a2/a2-m3-l3.js' },
          { id: 'a2-m3-l4', slug: 'lesson-4', title: 'Review: Where shall we go?', ua: 'Повторення модуля 3', file: 'lessons/a2/a2-m3-l4.js' }
        ]
      },
      {
        id: 'module-4',
        num: 4,
        title: 'Plans & Future',
        ua: 'Плани та майбутнє',
        lessons: [
          { id: 'a2-m4-l1', slug: 'lesson-1', title: 'Plans and hopes', ua: 'be going to, want / hope to', file: 'lessons/a2/a2-m4-l1.js' },
          { id: 'a2-m4-l2', slug: 'lesson-2', title: 'My diary', ua: 'Present Continuous для домовленостей', file: 'lessons/a2/a2-m4-l2.js' },
          { id: 'a2-m4-l3', slug: 'lesson-3', title: 'Predictions', ua: 'will / won’t', file: 'lessons/a2/a2-m4-l3.js' },
          { id: 'a2-m4-l4', slug: 'lesson-4', title: 'Review: The big day', ua: 'Повторення модуля 4', file: 'lessons/a2/a2-m4-l4.js' }
        ]
      },
      {
        id: 'module-5',
        num: 5,
        title: 'Health & Rules',
        ua: 'Здоров’я та правила',
        lessons: [
          { id: 'a2-m5-l1', slug: 'lesson-1', title: 'At the doctor’s', ua: 'should / shouldn’t', file: 'lessons/a2/a2-m5-l1.js' },
          { id: 'a2-m5-l2', slug: 'lesson-2', title: 'Rules', ua: 'must / have to / mustn’t / don’t have to', file: 'lessons/a2/a2-m5-l2.js' },
          { id: 'a2-m5-l3', slug: 'lesson-3', title: 'Healthy eating', ua: 'a lot of, much / many, a few / a little', file: 'lessons/a2/a2-m5-l3.js' },
          { id: 'a2-m5-l4', slug: 'lesson-4', title: 'Review: The 30-day challenge', ua: 'Повторення модуля 5', file: 'lessons/a2/a2-m5-l4.js' }
        ]
      },
      {
        id: 'module-6',
        num: 6,
        title: 'Experiences',
        ua: 'Досвід',
        lessons: [
          { id: 'a2-m6-l1', slug: 'lesson-1', title: 'Have you ever…?', ua: 'Present Perfect: ever / never', file: 'lessons/a2/a2-m6-l1.js' },
          { id: 'a2-m6-l2', slug: 'lesson-2', title: 'Not yet!', ua: 'just / already / yet', file: 'lessons/a2/a2-m6-l2.js' },
          { id: 'a2-m6-l3', slug: 'lesson-3', title: 'If it rains…', ua: 'First Conditional', file: 'lessons/a2/a2-m6-l3.js' },
          { id: 'a2-m6-l4', slug: 'lesson-4', title: 'Review A2: The time capsule', ua: 'Підсумкове повторення A2', file: 'lessons/a2/a2-m6-l4.js' }
        ]
      }
    ]
  },
  {
    id: 'b1',
    name: 'B1',
    title: 'Intermediate',
    ua: 'Середній',
    desc: 'Впевнено говоримо про досвід, плани й події; читаємо та слухаємо тексти на знайомі теми.',
    modules: [
      {
        id: 'module-1',
        num: 1,
        title: 'Travel & Experiences',
        ua: 'Подорожі та досвід',
        lessons: [
          { id: 'b1-m1-l1', slug: 'lesson-1', title: 'Have you ever…? Travel stories', ua: 'Present Perfect vs Past Simple', file: 'lessons/b1/b1-m1-l1.js' }
        ]
      }
    ]
  },
  { id: 'b2', name: 'B2', title: 'Upper-Intermediate', ua: 'Вище середнього', modules: [] },
  { id: 'c1', name: 'C1', title: 'Advanced', ua: 'Просунутий', advanced: true, desc: 'Окремий просунутий трек: автентичні тексти, нюанси стилю, академічне та професійне мовлення.', modules: [] },
  { id: 'c2', name: 'C2', title: 'Proficiency', ua: 'Вільне володіння', advanced: true, desc: 'Рівень носія: ідіоматика, регістр, складна аргументація.', modules: [] }
];
