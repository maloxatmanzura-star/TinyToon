import {
  useState
} from 'react'

import {
  BarChart3,
  LockKeyhole,
  ShieldCheck
} from 'lucide-react'

import {
  cartoons
} from '../data/cartoons'

import {
  Button,
  ProgressBar,
  SectionHeader,
  Stat
} from '../components/UI'

import {
  useApp
} from '../context/AppContext'

function Toggle({
  value,
  onChange,
  label
}) {
  return (
    <button
      type="button"
      onClick={() =>
        onChange(!value)
      }
      className="flex w-full items-center justify-between gap-4 rounded-2xl border border-[var(--line)] p-4 text-left"
    >
      <span className="font-bold">
        {label}
      </span>

      <span
        className={`h-7 w-12 rounded-full p-1 transition ${
          value
            ? 'bg-[var(--primary)]'
            : 'bg-[var(--surface2)]'
        }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white shadow transition ${
            value
              ? 'translate-x-5'
              : ''
          }`}
        />
      </span>
    </button>
  )
}

function PinGate({
  children
}) {
  const {
    parent
  } = useApp()

  const [pin, setPin] =
    useState('')

  const [unlocked, setUnlocked] =
    useState(!parent.pin)

  const [error, setError] =
    useState(false)

  if (unlocked) {
    return children
  }

  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-10">
      <div className="card w-full max-w-sm p-7 text-center">
        <LockKeyhole
          className="mx-auto"
          size={42}
        />

        <h1 className="mt-4 text-2xl font-black">
          Parent Mode locked
        </h1>

        <p className="mt-2 text-sm text-[var(--muted)]">
          Enter the demo 4-digit parent PIN.
        </p>

        <input
          className="input mt-5 text-center text-2xl tracking-[.5em]"
          inputMode="numeric"
          maxLength={4}
          value={pin}
          onChange={(event) =>
            setPin(
              event.target.value.replace(
                /\D/g,
                ''
              )
            )
          }
          placeholder="••••"
        />

        <Button
          className="mt-4 w-full"
          onClick={() => {
            if (
              pin === parent.pin
            ) {
              setUnlocked(true)
              setError(false)
            } else {
              setError(true)
            }
          }}
        >
          Unlock
        </Button>

        {error && (
          <p className="mt-3 text-sm font-bold text-pink-500">
            That PIN does not match.
          </p>
        )}
      </div>
    </div>
  )
}

export default function Parents() {
  const {
    parent,
    setParent
  } = useApp()

  const [pin, setPin] =
    useState('')

  const update = (
    key,
    value
  ) => {
    setParent(
      (current) => ({
        ...current,
        [key]: value
      })
    )
  }

  const savePin = () => {
    if (
      /^\d{4}$/.test(pin)
    ) {
      update('pin', pin)
    }

    setPin('')
  }

  return (
    <PinGate>
      <div className="container-page py-10">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface2)] px-3 py-2 text-xs font-black">
              <ShieldCheck
                size={15}
              />
              Family dashboard
            </div>

            <h1 className="mt-3 text-4xl font-black">
              Parent Mode
            </h1>

            <p className="mt-1 text-[var(--muted)]">
              A simple frontend demo for
              healthy viewing habits.
            </p>
          </div>

          <div className="rounded-3xl bg-[var(--surface)] p-4 shadow-sm">
            <b className="block">
              Child profile
            </b>

            <span className="text-sm text-[var(--muted)]">
              Milo · 7–9
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon="⏱️"
            value="42m"
            label="Today’s screen time"
            sub={`Limit ${parent.limit} minutes`}
          />

          <Stat
            icon="🌙"
            value={parent.bedtime}
            label="Bedtime"
            sub="quiet hours"
          />

          <Stat
            icon="🎓"
            value={
              parent.educational
                ? 'On'
                : 'Off'
            }
            label="Educational mode"
            sub="learning boost"
          />

          <Stat
            icon="🛡️"
            value="Active"
            label="Safety settings"
            sub="family-friendly demo"
          />
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          <section className="card p-5 lg:col-span-2">
            <SectionHeader
              title="Screen time"
              subtitle="Demo usage for today"
            />

            <div className="flex items-end justify-between">
              <div>
                <b className="text-4xl">
                  42
                </b>

                <span className="ml-2 text-[var(--muted)]">
                  minutes
                </span>
              </div>

              <span className="text-sm font-bold">
                {parent.limit} min limit
              </span>
            </div>

            <ProgressBar
              value={
                (42 /
                  parent.limit) *
                100
              }
            />

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <label className="text-sm font-bold">
                Daily limit

                <select
                  className="select mt-2 w-full"
                  value={parent.limit}
                  onChange={(event) =>
                    update(
                      'limit',
                      Number(
                        event.target.value
                      )
                    )
                  }
                >
                  <option value="60">
                    60 min
                  </option>

                  <option value="90">
                    90 min
                  </option>

                  <option value="120">
                    120 min
                  </option>
                </select>
              </label>

              <label className="text-sm font-bold">
                Bedtime

                <select
                  className="select mt-2 w-full"
                  value={
                    parent.bedtime
                  }
                  onChange={(event) =>
                    update(
                      'bedtime',
                      event.target.value
                    )
                  }
                >
                  <option>
                    19:30
                  </option>

                  <option>
                    20:30
                  </option>

                  <option>
                    21:00
                  </option>
                </select>
              </label>

              <label className="text-sm font-bold">
                Age group

                <select
                  className="select mt-2 w-full"
                  value={
                    parent.age
                  }
                  onChange={(event) =>
                    update(
                      'age',
                      event.target.value
                    )
                  }
                >
                  <option>
                    0–3
                  </option>

                  <option>
                    4–6
                  </option>

                  <option>
                    7–9
                  </option>

                  <option>
                    10–12
                  </option>
                </select>
              </label>
            </div>
          </section>

          <section className="card p-5">
            <SectionHeader
              title="Quick controls"
            />

            <div className="grid gap-3">
              <Toggle
                label="Educational mode"
                value={
                  parent.educational
                }
                onChange={(value) =>
                  update(
                    'educational',
                    value
                  )
                }
              />

              <Toggle
                label="Kid-safe search"
                value={
                  parent.safeSearch
                }
                onChange={(value) =>
                  update(
                    'safeSearch',
                    value
                  )
                }
              />
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <section className="card p-5">
            <SectionHeader
              title="Content filter"
            />

            <div className="grid gap-2">
              {[
                'Balanced',
                'Learning first',
                'Calm'
              ].map((option) => (
                <label
                  key={option}
                  className="rounded-2xl border border-[var(--line)] p-4"
                >
                  <input
                    type="radio"
                    name="content"
                    checked={
                      parent.content ===
                      option
                    }
                    onChange={() =>
                      update(
                        'content',
                        option
                      )
                    }
                  />

                  <b className="ml-2">
                    {option}
                  </b>
                </label>
              ))}
            </div>
          </section>

          <section className="card p-5">
            <SectionHeader
              title="Language"
            />

            <select
              className="select w-full"
              value={
                parent.language
              }
              onChange={(event) =>
                update(
                  'language',
                  event.target.value
                )
              }
            >
              <option>
                English
              </option>

              <option>
                Uzbek
              </option>

              <option>
                Russian
              </option>
            </select>

            <div className="mt-6 rounded-2xl bg-[var(--surface2)] p-4">
              <b>
                Favorite categories
              </b>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Space · Science · Animals ·
                Math
              </p>
            </div>
          </section>

          <section className="card p-5">
            <SectionHeader
              title="Viewing insights"
            />

            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Adventure
                </span>

                <span className="font-black">
                  32%
                </span>
              </div>

              <ProgressBar value={32} />

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Learning
                </span>

                <span className="font-black">
                  41%
                </span>
              </div>

              <ProgressBar value={41} />

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Stories
                </span>

                <span className="font-black">
                  27%
                </span>
              </div>

              <ProgressBar value={27} />
            </div>
          </section>
        </div>

        <section className="card mt-5 p-5">
          <SectionHeader
            title="Parent PIN"
            subtitle="Demo-only lock stored in localStorage; not real security."
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="input max-w-xs"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(event) =>
                setPin(
                  event.target.value.replace(
                    /\D/g,
                    ''
                  )
                )
              }
              placeholder="Set a 4-digit PIN"
            />

            <Button
              onClick={savePin}
            >
              <LockKeyhole
                size={16}
              />
              Save PIN
            </Button>
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--muted)]">
            <BarChart3 size={17} />

            Demo recently watched:
            {' '}
            {cartoons
              .slice(0, 3)
              .map(
                (cartoon) =>
                  cartoon.title
              )
              .join(' · ')}
          </div>
        </section>
      </div>
    </PinGate>
  )
}