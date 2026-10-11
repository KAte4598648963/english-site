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

## Формули в граматиці (обов’язково в кожному `rule`)
Розділ «Як утворюються: формули» з таблицею `ftable` (+ / − / ? / Wh-? / короткі відповіді) і прикладами. Розмітка:

```html
<p class="formula-legend"><span class="f-s">Підмет</span> … <span class="f-aux">Допоміжне</span> … <span class="f-v">Дієслово</span> … <span class="f-neg">not</span></p>
<div class="table-wrap"><table class="ftable">
  <tr><th>Форма</th><th>Формула</th><th>Приклади</th></tr>
  <tr><td><b>+</b> he / she / it</td>
      <td><div class="formula"><span class="f-s">Підмет</span><span class="f-op">+</span><span class="f-v">V1 + s / es</span></div></td>
      <td>She <b>works</b> online.</td></tr>
</table></div>
```
Еталон — `lessons/a2/a2-m1-l1.js`.
