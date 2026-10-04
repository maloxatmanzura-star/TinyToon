import {
  cartoons
} from '../data/cartoons'

import {
  useApp
} from '../context/AppContext'

import {
  CartoonGrid,
  SectionHeader,
  Stat,
  ThemePanel
} from '../components/UI'

import {
  Link
} from 'react-router-dom'

export default function Profile() {
  const {
    favorites,
    history,
    theme
  } = useApp()

  const favoriteCartoons =
    cartoons.filter(
      (cartoon) =>
        favorites.includes(
          cartoon.id
        )
    )

  const recent =
    history
      .map((item) =>
        cartoons.find(
          (cartoon) =>
            cartoon.id ===
            item.id
        )
      )
      .filter(Boolean)

  return (
    <div className="container-page py-10">
      <div className="card overflow-hidden">
        <div className="h-32 bg-[linear-gradient(120deg,var(--primary),var(--secondary),var(--accent))]" />

        <div className="-mt-10 flex flex-col gap-5 p-6 sm:flex-row sm:items-end">
          <div className="grid h-24 w-24 place-items-center rounded-[28px] border-4 border-[var(--surface)] bg-[var(--accent)] text-5xl shadow-xl">
            🧒
          </div>

          <div>
            <h1 className="text-3xl font-black">
              Milo’s Explorer Profile
            </h1>

            <p className="text-sm text-[var(--muted)]">
              Age group 7–9 · Curious mode
              enabled
            </p>
          </div>

          <Link
            to="/parents"
            className="btn btn-soft sm:ml-auto"
          >
            Parent settings
          </Link>
        </div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          icon="⏱️"
          value="74m"
          label="Watch time"
          sub="this week"
        />

        <Stat
          icon="⭐"
          value={favorites.length}
          label="Favorites"
          sub="saved adventures"
        />

        <Stat
          icon="🎓"
          value="8"
          label="Learn streak"
          sub="days exploring"
        />

        <Stat
          icon="🌈"
          value={theme}
          label="Theme"
          sub="your current world"
        />
      </div>

      <section className="mt-10">
        <SectionHeader
          title="Recently watched"
        />

        {recent.length ? (
          <CartoonGrid
            items={recent.slice(
              0,
              4
            )}
          />
        ) : (
          <p className="text-sm text-[var(--muted)]">
            Start an episode and it
            will appear here.
          </p>
        )}
      </section>

      <section className="mt-10">
        <SectionHeader
          title="Favorite cartoons"
        />

        {favoriteCartoons.length ? (
          <CartoonGrid
            items={favoriteCartoons}
          />
        ) : (
          <p className="text-sm text-[var(--muted)]">
            Your favorites will appear
            here.
          </p>
        )}
      </section>

      <section className="mt-10">
        <SectionHeader
          title="Choose your TinyToons world"
          subtitle="This changes the whole interface."
        />

        <ThemePanel />
      </section>
    </div>
  )
}