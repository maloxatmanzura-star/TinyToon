import {
  useState
} from 'react'

import {
  CheckCircle2,
  Lightbulb
} from 'lucide-react'

import {
  educational
} from '../data/cartoons'

import {
  SectionHeader
} from '../components/UI'

const lessons = {
  alphabet: [
    'Find the first letter in CAT: C, M, T',
    'Which word starts with B? Ball, Sun, Fish'
  ],

  numbers: [
    'What comes after 4? 5, 7, 9',
    'Which is bigger? 8 or 3'
  ],

  math: [
    '2 + 3 = ?',
    'What is 3 × 2?'
  ],

  colors: [
    'Which shape has 3 sides?',
    'What color do blue + yellow make?'
  ],

  animals: [
    'Which animal says “meow”?',
    'Which animal has a long trunk?'
  ],

  english: [
    'Choose the greeting: Hello / Goodbye / Chair',
    'What is the English word for “olma”?'
  ],

  science: [
    'What do plants need from the Sun?',
    'Which can be a magnet: paperclip or leaf?'
  ],

  logic: [
    'What comes next: 2, 4, 6, ?',
    'Which does not belong: apple, pear, car?'
  ]
}

export default function Learn() {
  const [done, setDone] =
    useState({})

  return (
    <div className="container-page py-10">
      <SectionHeader
        title="Learn and have fun!"
        subtitle="Tiny lessons with quick interactive questions."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {educational.map(
          (item) => {
            const questions =
              lessons[item.id] ||
              lessons.logic

            return (
              <article
                key={item.id}
                className="card p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--surface2)] text-3xl">
                    {item.emoji}
                  </div>

                  <div>
                    <h2 className="text-xl font-black">
                      {item.title}
                    </h2>

                    <p className="text-sm text-[var(--muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {questions.map(
                    (
                      question,
                      index
                    ) => {
                      const key =
                        item.id +
                        index

                      return (
                        <button
                          key={
                            question
                          }
                          onClick={() =>
                            setDone(
                              {
                                ...done,
                                [key]: true
                              }
                            )
                          }
                          className={`rounded-2xl border border-[var(--line)] p-4 text-left transition hover:-translate-y-0.5 ${
                            done[key]
                              ? 'bg-[var(--surface2)]'
                              : ''
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-bold">
                              {question}
                            </span>

                            {done[key] ? (
                              <CheckCircle2
                                className="shrink-0"
                                size={20}
                              />
                            ) : (
                              <Lightbulb
                                className="shrink-0"
                                size={18}
                              />
                            )}
                          </div>
                        </button>
                      )
                    }
                  )}
                </div>
              </article>
            )
          }
        )}
      </div>
    </div>
  )
}