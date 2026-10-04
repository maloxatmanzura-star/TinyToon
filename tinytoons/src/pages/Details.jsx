import {
  useMemo
} from 'react'

import {
  Link,
  useNavigate,
  useParams
} from 'react-router-dom'

import {
  ArrowLeft,
  Heart,
  Play,
  Plus
} from 'lucide-react'

import {
  cartoons
} from '../data/cartoons'

import {
  Badge,
  Button,
  CartoonGrid,
  EpisodeCard,
  Rating,
  SectionHeader
} from '../components/UI'

import {
  useApp
} from '../context/AppContext'

export default function Details() {
  const { id } = useParams()

  const navigate =
    useNavigate()

  const cartoon =
    cartoons.find(
      (item) => item.id === id
    )

  const {
    favorites,
    toggleFavorite,
    list,
    toggleList
  } = useApp()

  const similar = useMemo(
    () =>
      cartoons
        .filter(
          (item) =>
            item.id !== id &&
            (
              item.category ===
                cartoon?.category ||
              item.genre ===
                cartoon?.genre
            )
        )
        .slice(0, 4),
    [id, cartoon]
  )

  if (!cartoon) {
    return (
      <div className="container-page py-20 text-center">
        <div className="text-6xl">
          🧭
        </div>

        <h1 className="mt-4 text-3xl font-black">
          This toon wandered away.
        </h1>

        <Button
          to="/cartoons"
          className="mt-5"
        >
          Browse cartoons
        </Button>
      </div>
    )
  }

  const favorite =
    favorites.includes(
      cartoon.id
    )

  const saved =
    list.includes(cartoon.id)

  return (
    <div className="container-page py-8">
      <Link
        to="/cartoons"
        className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--muted)]"
      >
        <ArrowLeft size={16} />
        Back to cartoons
      </Link>

      <section className="card overflow-hidden">
        <img
          src={cartoon.banner}
          alt=""
          className="h-56 w-full object-cover md:h-80"
        />

        <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>
                {cartoon.age}
              </Badge>

              <Badge>
                {cartoon.genre}
              </Badge>

              <Badge>
                {cartoon.duration}
              </Badge>

              <Badge>
                {cartoon.year}
              </Badge>
            </div>

            <h1 className="mt-4 text-4xl font-black md:text-5xl">
              {cartoon.title}
            </h1>

            <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
              {cartoon.description}
            </p>

            <div className="mt-5 flex items-center gap-5">
              <Rating
                value={cartoon.rating}
              />

              <span className="text-sm text-[var(--muted)]">
                {cartoon.episodes.length}{' '}
                episodes
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                to={`/watch/${cartoon.id}`}
              >
                <Play
                  size={18}
                  fill="currentColor"
                />
                Watch now
              </Button>

              <button
                className="btn btn-soft"
                onClick={() =>
                  toggleFavorite(
                    cartoon.id
                  )
                }
              >
                <Heart
                  size={18}
                  fill={
                    favorite
                      ? 'currentColor'
                      : 'none'
                  }
                />

                {favorite
                  ? 'Saved'
                  : 'Favorite'}
              </button>

              <button
                className="btn btn-soft"
                onClick={() =>
                  toggleList(
                    cartoon.id
                  )
                }
              >
                <Plus size={18} />

                {saved
                  ? 'In my list'
                  : 'Add to list'}
              </button>
            </div>
          </div>

          <div className="hidden rounded-3xl bg-[var(--surface2)] p-6 text-center md:block">
            <div className="text-5xl">
              {cartoon.isNew
                ? '✨'
                : '🌟'}
            </div>

            <b className="mt-3 block">
              TinyToons pick
            </b>

            <p className="mt-1 text-xs text-[var(--muted)]">
              Made for curious explorers
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          title="Episodes"
          subtitle="Choose an episode to start watching"
        />

        <div className="grid gap-3 md:grid-cols-2">
          {cartoon.episodes.map(
            (episode, index) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                index={index}
                onClick={() =>
                  navigate(
                    `/watch/${cartoon.id}?episode=${episode.id}`
                  )
                }
              />
            )
          )}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          title="More like this"
        />

        <CartoonGrid
          items={similar}
        />
      </section>
    </div>
  )
}