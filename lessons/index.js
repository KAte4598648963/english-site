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
      }
    ]
  },
  { id: 'a2', name: 'A2', title: 'Elementary', ua: 'Елементарний', modules: [] },
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
