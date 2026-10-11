# Як додати урок

1. Створи файл `lessons/<level>/<lesson-id>.js` (зразок: `b1/b1-m1-l1.js`), що викликає `ENG.registerLesson({ id, title, subtitle, sections, glossary })`.
2. Додай **один рядок** у `lessons/index.js` у масив `lessons` потрібного модуля:
   `{ id: 'b1-m1-l2', slug: 'lesson-2', title: '…', ua: '…', file: 'lessons/b1/b1-m1-l2.js' }`

## Правила ID
- `id` уроку та `id` кожної вправи — **постійні**. Не перейменовуй і не перевикористовуй їх: прогрес зберігається як `eng:<lessonId>:<exerciseId>`.
- ID вправи не може починатися з `_` (зарезервовано: `_notes`, `_vocab`, `_pos`, `_timer`, `_summary`).
- Нові вправи додавай з новими ID: старий прогрес лишається.

## Розділи
`sections: [{ id: 'reading' | 'vocabulary' | 'grammar' | 'listening' | 'writing' | 'speaking', title, exercises: [...] }]`

## Типи вправ
Спільні поля: `id`, `type`, `title`, `instructions`, опційно `passage: { title, text }` (текст для читання) та `audio: { title, lines: [{ who, text }] }` (озвучення браузером).

| type | поля |
|---|---|
| `rule` | `html` — теорія (таблиці, `.ex-line`, `.tip`, `<mark>`) |
| `choice` | `items: [{ id, q, options: [], answer: <index>, explain? }]` |
| `truefalse` | `items: [{ id, s, answer: true/false, explain? }]` |
| `gap` | `items: [{ id, text: 'I {{went|did go}} home.', hint? }]` — у `{{…}}` правильні варіанти через `|` |
| `dragdrop` | `items` як у `gap` + `distractors: []` (зайві слова) |
| `match` | `pairs: [['journey', 'подорож'], …]` |
| `order` | `items: [{ id, prompt, answer: 'Full sentence.', extra?: ['зайве'] }]` |
| `flashcards` | `cards: [{ front, back, ipa?, example? }]` |
| `dictation` | `items: [{ id, text }]` |
| `writing` | `prompt, minWords, maxWords, phrases[], checklist[], model` |
| `speaking` | `tasks: [{ id, q, tips?, model? }], phrases[]` |

У рядках JS у одинарних лапках використовуй типографський апостроф `’` (I’ve) — порівняння відповідей його розуміє.

`glossary: { 'word': 'переклад', 'set off': 'вирушати' }` — для перекладача (A1–B2); закінчення -s/-ed/-ing знаходяться автоматично.
