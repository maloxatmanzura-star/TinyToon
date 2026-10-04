import {
  Link
} from 'react-router-dom'

import {
  ArrowRight,
  Play,
  Sparkles
} from 'lucide-react'

import {
  cartoons,
  categories,
  educational
} from '../data/cartoons'

import {
  CartoonCard,
  CategoryCard,
  ContinueWatching,
  SectionHeader,
  Button
} from '../components/UI'

export default function Home() {
  const popular = [...cartoons]
    .sort(
      (a, b) =>
        b.rating - a.rating
    )
    .slice(0, 8)

  const fresh = cartoons
    .filter((cartoon) => cartoon.isNew)
    .slice(0, 8)

  return (
    <div>
      <section className="container-page relative overflow-hidden py-10 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--surface2)] px-3 py-2 text-xs font-black">
              <Sparkles size={15} />
              A happy corner for curious minds
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[.98] tracking-tight md:text-7xl">
              Big adventures for{' '}
              <span className="text-[var(--primary)]">
                little explorers.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Discover playful cartoons,
              gentle stories, and clever
              learning moments—all in one
              bright TinyToons universe.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/cartoons">
                <Play
                  size={18}
                  fill="currentColor"
                />
                Watch now
              </Button>

              <Button
                to="/categories"
                variant="soft"
              >
                Explore worlds
                <ArrowRight size={18} />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div>
                <b className="text-xl">
                  18
                </b>

                <span className="ml-2 text-[var(--muted)]">
                  original shows
                </span>
              </div>

              <div>
                <b className="text-xl">
                  100%
                </b>

                <span className="ml-2 text-[var(--muted)]">
                  kid-friendly demo
                </span>
              </div>

              <div>
                <b className="text-xl">
                  8
                </b>

                <span className="ml-2 text-[var(--muted)]">
                  learning tracks
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden p-2 rotate-[1deg]">
              <img
                src={cartoons[0].banner}
                alt="Lumi's Little Lab"
                className="aspect-[1.5] w-full rounded-[20px] object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 floaty rounded-3xl bg-[var(--accent)] px-4 py-3 text-3xl shadow-xl">
              🦊
            </div>

            <div className="absolute -right-3 -top-5 floaty2 rounded-full bg-white px-4 py-3 text-2xl shadow-xl">
              ✨
            </div>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-12 pb-8">
        <ContinueWatching />

        <section>
          <SectionHeader
            title="Explore categories"
            subtitle="Pick a world and start exploring"
            to="/categories"
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {categories
              .slice(0, 12)
              .map((category, index) => (
                <CategoryCard
                  key={category}
                  name={category}
                  index={index}
                />
              ))}
          </div>
        </section>

        <section>
          <SectionHeader
            title="Popular with explorers"
            subtitle="The TinyToons community is watching these"
            to="/cartoons"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {popular.map((cartoon) => (
              <CartoonCard
                key={cartoon.id}
                cartoon={cartoon}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            title="Fresh from the Toon Lab"
            subtitle="New adventures have landed"
            to="/new"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {fresh.map((cartoon) => (
              <CartoonCard
                key={cartoon.id}
                cartoon={cartoon}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            title="Learn and have fun!"
            subtitle="Short, friendly learning adventures"
            to="/learn"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {educational.map(
              (item) => (
                <Link
                  to="/learn"
                  key={item.id}
                  className="card hover-card flex gap-4 p-5"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--surface2)] text-3xl">
                    {item.emoji}
                  </span>

                  <div>
                    <h3 className="font-black">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.text}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  )
}