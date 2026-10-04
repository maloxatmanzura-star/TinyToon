import {
  useEffect,
  useMemo
} from 'react'

import {
  Link,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom'

import {
  ArrowLeft,
  ChevronRight,
  Heart,
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
  SectionHeader,
  VideoPlayer
} from '../components/UI'

import {
  useApp
} from '../context/AppContext'

export default function Watch() {
  const { id } = useParams()

  const [params] =
    useSearchParams()

  const navigate =
    useNavigate()

  const cartoon =
    cartoons.find(
      (item) => item.id === id
    )

  const {
    addHistory,
    favorites,
    toggleFavorite,
    list,
    toggleList
  } = useApp()

  const episodeIndex =
    Math.max(
      0,
      cartoon?.episodes.findIndex(
        (episode) =>
          episode.id ===
          params.get('episode')
      ) ?? 0
    )

  const episode =
    cartoon?.episodes[
      episodeIndex
    ] || cartoon?.episodes[0]

  const nextEpisode =
    cartoon?.episodes[
      episodeIndex + 1
    ]

  useEffect(() => {
    if (cartoon) {
      addHistory(
        cartoon.id,
        12,
        episode?.id
      )
    }
  }, [
    cartoon?.id,
    episode?.id
  ])

  const similar = useMemo(
    () =>
      cartoons
        .filter(
          (item) =>
            item.id !== id &&
            item.category ===
              cartoon?.category
        )
        .slice(0, 4),
    [id, cartoon]
  )

  if (!cartoon) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-black">
          Episode not found
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
        to={`/cartoons/${cartoon.id}`}
        className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--muted)]"
      >
        <ArrowLeft size={16} />
        Back to {cartoon.title}
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.65fr_.7fr]">
        <div>
          <VideoPlayer
            episode={episode}
            onEnded={() => {
              if (nextEpisode) {
                navigate(
                  `/watch/${cartoon.id}?episode=${nextEpisode.id}`
                )
              }
            }}
          />

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>
                  Season 1
                </Badge>

                <Badge>
                  Episode{' '}
                  {episodeIndex + 1}
                </Badge>
              </div>

              <h1 className="mt-2 text-2xl font-black">
                {episode.title}
              </h1>
            </div>

            <div className="flex gap-2">
              <button
                className="btn btn-soft"
                onClick={() =>
                  toggleFavorite(
                    cartoon.id
                  )
                }
              >
                <Heart
                  size={17}
                  fill={
                    favorite
                      ? 'currentColor'
                      : 'none'
                  }
                />
              </button>

              <button
                className="btn btn-soft"
                onClick={() =>
                  toggleList(
                    cartoon.id
                  )
                }
              >
                <Plus size={17} />
              </button>

              {nextEpisode && (
                <Button
                  to={`/watch/${cartoon.id}?episode=${nextEpisode.id}`}
                >
                  Next
                  <ChevronRight
                    size={17}
                  />
                </Button>
              )}
            </div>
          </div>

          <p className="mt-3 leading-7 text-[var(--muted)]">
            {cartoon.description}
          </p>
        </div>

        <aside>
          <SectionHeader
            title="Episodes"
          />

          <div className="grid gap-3">
            {cartoon.episodes.map(
              (
                item,
                index
              ) => (
                <EpisodeCard
                  key={item.id}
                  episode={item}
                  index={index}
                  active={
                    index ===
                    episodeIndex
                  }
                  onClick={() =>
                    navigate(
                      `/watch/${cartoon.id}?episode=${item.id}`
                    )
                  }
                />
              )
            )}
          </div>
        </aside>
      </div>

      <section className="mt-12">
        <SectionHeader
          title="You may also like"
        />

        <CartoonGrid
          items={similar}
        />
      </section>
    </div>
  )
}