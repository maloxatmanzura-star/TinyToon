import React, {
  useState
} from 'react'

import {
  Heart,
  Star,
  Play,
  Plus,
  Search,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize2,
  Pause,
  Menu,
  X,
  LockKeyhole,
  CheckCircle2
} from 'lucide-react'

import {
  Link,
  useNavigate
} from 'react-router-dom'

import {
  useApp
} from '../context/AppContext'

import {
  cartoons
} from '../data/cartoons'

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-black text-xl"
    >
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-lg rotate-[-5deg]">
        ✦
      </span>

      <span>
        Tiny
        <span className="text-[var(--secondary)]">
          Toons
        </span>
      </span>
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const submitSearch = (event) => {
    event.preventDefault()

    if (search.trim()) {
      navigate(
        `/search?q=${encodeURIComponent(
          search.trim()
        )}`
      )
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-5 text-sm font-bold">
          <Link to="/">Home</Link>
          <Link to="/cartoons">Cartoons</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/new">New</Link>
          <Link to="/categories">
            Categories
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <form
            onSubmit={submitSearch}
            className="relative"
          >
            <Search
              size={17}
              className="absolute left-3 top-3 text-[var(--muted)]"
            />

            <input
              aria-label="Search cartoons"
              className="input w-44 pl-9"
              placeholder="Search..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </form>

          <ThemeSelector />

          <Link
            className="btn btn-soft text-sm"
            to="/parents"
          >
            <LockKeyhole size={16} />
            Parents
          </Link>

          <Link
            className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)]"
            to="/profile"
          >
            🧒
          </Link>
        </div>

        <button
          className="icon-btn lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden container-page pb-4 page-enter">
          <div className="grid gap-2 rounded-3xl p-3 glass">
            <Link
              className="p-3"
              onClick={() => setOpen(false)}
              to="/"
            >
              Home
            </Link>

            <Link
              className="p-3"
              onClick={() => setOpen(false)}
              to="/cartoons"
            >
              Cartoons
            </Link>

            <Link
              className="p-3"
              onClick={() => setOpen(false)}
              to="/favorites"
            >
              Favorites
            </Link>

            <Link
              className="p-3"
              onClick={() => setOpen(false)}
              to="/new"
            >
              New
            </Link>

            <Link
              className="p-3"
              onClick={() => setOpen(false)}
              to="/categories"
            >
              Categories
            </Link>

            <Link
              className="p-3"
              onClick={() => setOpen(false)}
              to="/learn"
            >
              Learn
            </Link>

            <Link
              className="p-3"
              onClick={() => setOpen(false)}
              to="/parents"
            >
              Parent Mode
            </Link>

            <ThemeSelector />
          </div>
        </div>
      )}
    </header>
  )
}

export const themes = [
  ['rainbow', '🌈', 'Dreamy Rainbow'],
  ['pixel', '🎮', 'Pixel Game'],
  ['horror', '🌙', 'Cute Aesthetic Horror'],
  ['fairy', '🧚', 'Fairy Garden'],
  ['space', '🚀', 'Space Adventure'],
  ['cozy', '🧸', 'Cozy Toy Room'],
  ['dino', '🦕', 'Dino World'],
  ['science', '🧪', 'Science Lab'],
  ['math', '➗', 'Math World'],
  ['art', '🎨', 'Creative Art'],
  ['ocean', '🌊', 'Ocean Adventure'],
  ['candy', '🍭', 'Candy Land']
]

export function ThemeSelector() {
  const {
    theme,
    setTheme
  } = useApp()

  return (
    <select
      aria-label="Choose theme"
      className="select max-w-44"
      value={theme}
      onChange={(event) =>
        setTheme(event.target.value)
      }
    >
      {themes.map((themeItem) => (
        <option
          key={themeItem[0]}
          value={themeItem[0]}
        >
          {themeItem[1]} {themeItem[2]}
        </option>
      ))}
    </select>
  )
}

export function FloatingMascots() {
  const { theme } = useApp()

  const mascots = {
    horror: ['👻', '⭐', '🐈'],
    space: ['🚀', '🪐', '⭐'],
    dino: ['🦕', '🌿', '🥚'],
    fairy: ['🧚', '🦋', '🌸'],
    ocean: ['🐳', '🫧', '🐠'],
    candy: ['🍭', '🍬', '✨'],
    pixel: ['👾', '🎮', '⭐'],
    science: ['🧪', '⚛️', '🔬'],
    math: ['➗', '🔺', '🔢'],
    art: ['🎨', '✏️', '🖌️'],
    cozy: ['🧸', '🧩', '🌙'],
    rainbow: ['☁️', '🌈', '✨']
  }

  const current =
    mascots[theme] || mascots.rainbow

  return (
    <div
      className="theme-decor"
      aria-hidden="true"
    >
      <span
        className="floaty text-4xl"
        style={{
          left: '3%',
          top: '18%'
        }}
      >
        {current[0]}
      </span>

      <span
        className="floaty2 text-3xl"
        style={{
          right: '5%',
          top: '28%'
        }}
      >
        {current[1]}
      </span>

      <span
        className="floaty text-2xl"
        style={{
          right: '15%',
          bottom: '12%'
        }}
      >
        {current[2]}
      </span>
    </div>
  )
}

export function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  className = ''
}) {
  const Component = to
    ? Link
    : 'button'

  return (
    <Component
      to={to}
      onClick={onClick}
      className={`btn ${
        variant === 'primary'
          ? 'btn-primary'
          : 'btn-soft'
      } ${className}`}
    >
      {children}
    </Component>
  )
}

export function SectionHeader({
  title,
  subtitle,
  to
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-2xl md:text-3xl font-black">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-[var(--muted)]">
            {subtitle}
          </p>
        )}
      </div>

      {to && (
        <Link
          to={to}
          className="flex items-center gap-1 text-sm font-extrabold text-[var(--primary)]"
        >
          See all
          <ChevronRight size={16} />
        </Link>
      )}
    </div>
  )
}

export function FavoriteButton({
  id
}) {
  const {
    favorites,
    toggleFavorite
  } = useApp()

  const active =
    favorites.includes(id)

  return (
    <button
      aria-label={
        active
          ? 'Remove from favorites'
          : 'Add to favorites'
      }
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggleFavorite(id)
      }}
      className={`icon-btn ${
        active
          ? 'text-pink-500'
          : ''
      }`}
    >
      <Heart
        size={19}
        fill={
          active
            ? 'currentColor'
            : 'none'
        }
      />
    </button>
  )
}

export function CartoonCard({
  cartoon
}) {
  return (
    <Link
      to={`/cartoons/${cartoon.id}`}
      className="card hover-card group overflow-hidden"
    >
      <div className="relative aspect-[1.45] overflow-hidden">
        <img
          src={cartoon.image}
          alt={cartoon.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {cartoon.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-black">
            NEW
          </span>
        )}

        <div className="absolute right-3 top-3">
          <FavoriteButton
            id={cartoon.id}
          />
        </div>

        <button
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}
          className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--primary)] shadow-lg opacity-0 transition group-hover:opacity-100"
          aria-label={`Watch ${cartoon.title}`}
        >
          <Play
            size={17}
            fill="currentColor"
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-black clamp-2">
            {cartoon.title}
          </h3>

          <span className="flex shrink-0 items-center gap-1 text-xs font-bold">
            <Star
              size={13}
              fill="currentColor"
            />
            {cartoon.rating}
          </span>
        </div>

        <p className="mt-1 text-xs text-[var(--muted)]">
          {cartoon.category} · {cartoon.age} ·{' '}
          {cartoon.duration}
        </p>
      </div>
    </Link>
  )
}

export function CartoonGrid({
  items
}) {
  if (!items.length) {
    return (
      <EmptyState
        title="No toons found"
        text="Try another search or loosen your filters."
      />
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((cartoon) => (
        <CartoonCard
          key={cartoon.id}
          cartoon={cartoon}
        />
      ))}
    </div>
  )
}

export function CategoryCard({
  name,
  index = 0
}) {
  const emojis = [
    '🧭',
    '🦊',
    '😂',
    '🧚',
    '🚀',
    '🦕',
    '🎵',
    '📚',
    '➗',
    '🧪',
    '🧩',
    '📖',
    '🔷'
  ]

  return (
    <Link
      to={`/cartoons?category=${encodeURIComponent(
        name
      )}`}
      className="card hover-card flex min-h-32 flex-col justify-between p-5"
    >
      <span className="text-3xl">
        {emojis[index % emojis.length]}
      </span>

      <div>
        <h3 className="font-black">
          {name}
        </h3>

        <p className="text-xs text-[var(--muted)]">
          Explore stories
        </p>
      </div>
    </Link>
  )
}

export function ProgressBar({
  value = 0
}) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-[var(--surface2)]">
      <div
        className="progress-fill h-full rounded-full bg-[var(--primary)]"
        style={{
          width: `${Math.min(
            100,
            Math.max(0, value)
          )}%`
        }}
      />
    </div>
  )
}

export function ContinueWatching() {
  const {
    history
  } = useApp()

  const items = history
    .map((historyItem) => {
      const cartoon = cartoons.find(
        (item) =>
          item.id === historyItem.id
      )

      return cartoon
        ? {
            ...cartoon,
            ...historyItem
          }
        : null
    })
    .filter(Boolean)

  if (!items.length) {
    return null
  }

  return (
    <section>
      <SectionHeader
        title="Continue watching"
        subtitle="Pick up where you left off"
        to="/profile"
      />

      <div className="flex gap-4 overflow-x-auto pb-3 hide-scrollbar">
        {items.slice(0, 6).map((item) => (
          <Link
            key={item.id}
            to={`/watch/${item.id}`}
            className="card hover-card min-w-[270px] overflow-hidden"
          >
            <img
              src={item.image}
              alt=""
              className="aspect-video w-full object-cover"
            />

            <div className="p-4">
              <div className="flex justify-between gap-2">
                <b>{item.title}</b>

                <span className="text-xs text-[var(--muted)]">
                  {item.progress}%
                </span>
              </div>

              <ProgressBar
                value={item.progress}
              />

              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[var(--primary)]">
                Continue
                <Play
                  size={14}
                  fill="currentColor"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function Rating({
  value
}) {
  return (
    <span className="inline-flex items-center gap-1 font-bold">
      <Star
        size={17}
        fill="currentColor"
      />
      {value}
    </span>
  )
}

export function Badge({
  children
}) {
  return (
    <span className="rounded-full bg-[var(--surface2)] px-3 py-1 text-xs font-extrabold">
      {children}
    </span>
  )
}

export function EpisodeCard({
  episode,
  index,
  active,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className={`card hover-card flex w-full items-center gap-3 p-3 text-left ${
        active
          ? 'ring-2 ring-[var(--primary)]'
          : ''
      }`}
    >
      <img
        src={episode.thumbnail}
        alt=""
        className="h-16 w-24 rounded-xl object-cover"
      />

      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--surface2)] text-sm font-black">
        {index + 1}
      </span>

      <span className="min-w-0 flex-1">
        <b className="block truncate">
          {episode.title}
        </b>

        <small className="text-[var(--muted)]">
          {episode.duration}
        </small>
      </span>

      <Play size={17} />
    </button>
  )
}

export function EmptyState({
  title,
  text,
  action
}) {
  return (
    <div className="card flex min-h-64 flex-col items-center justify-center p-8 text-center">
      <div className="mb-3 text-5xl">
        🪄
      </div>

      <h3 className="text-xl font-black">
        {title}
      </h3>

      <p className="mt-1 max-w-md text-sm text-[var(--muted)]">
        {text}
      </p>

      {action && (
        <div className="mt-5">
          {action}
        </div>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)]">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />

          <p className="mt-4 max-w-sm text-sm text-[var(--muted)]">
            Big adventures for little explorers.
            TinyToons is a playful educational
            streaming demo built for learning
            React.
          </p>
        </div>

        <div>
          <h3 className="font-black">
            Explore
          </h3>

          <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            <Link to="/cartoons">
              Cartoons
            </Link>

            <Link to="/categories">
              Categories
            </Link>

            <Link to="/learn">
              Learn
            </Link>

            <Link to="/new">
              What's new
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-black">
            For families
          </h3>

          <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            <Link to="/parents">
              Parents
            </Link>

            <span>Safety</span>
            <span>Privacy</span>
            <span>Contact</span>
          </div>

          <div className="mt-4 flex gap-2">
            <span className="icon-btn">
              ◎
            </span>

            <span className="icon-btn">
              ◉
            </span>

            <span className="icon-btn">
              ✦
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)] py-5 text-center text-xs text-[var(--muted)]">
        © 2026 TinyToons. Educational demo
        project.
      </div>
    </footer>
  )
}

export function VideoPlayer({
  episode,
  onEnded
}) {
  const videoRef =
    React.useRef(null)

  const [playing, setPlaying] =
    useState(false)

  const [muted, setMuted] =
    useState(false)

  const [progress, setProgress] =
    useState(0)

  const toggle = () => {
    if (!videoRef.current) {
      return
    }

    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div className="video-shell relative">
      <video
        ref={videoRef}
        src={episode.videoUrl}
        poster={episode.thumbnail}
        className="h-full w-full object-cover"
        muted={muted}
        onTimeUpdate={(event) => {
          const video =
            event.currentTarget

          setProgress(
            video.duration
              ? (video.currentTime /
                  video.duration) *
                  100
              : 0
          )
        }}
        onEnded={() => {
          setPlaying(false)
          onEnded?.()
        }}
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-white">
        <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full bg-white"
            style={{
              width: `${progress}%`
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white/15"
            onClick={toggle}
            aria-label={
              playing
                ? 'Pause'
                : 'Play'
            }
          >
            {playing ? (
              <Pause size={18} />
            ) : (
              <Play
                size={18}
                fill="currentColor"
              />
            )}
          </button>

          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white/15"
            onClick={() =>
              setMuted(!muted)
            }
            aria-label={
              muted
                ? 'Unmute'
                : 'Mute'
            }
          >
            {muted ? (
              <VolumeX size={18} />
            ) : (
              <Volume2 size={18} />
            )}
          </button>

          <div className="flex-1" />

          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white/15"
            onClick={() =>
              videoRef.current?.requestFullscreen?.()
            }
            aria-label="Fullscreen"
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export function ThemePanel() {
  const {
    theme,
    setTheme
  } = useApp()

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {themes.map(
        ([id, emoji, name]) => (
          <button
            key={id}
            onClick={() =>
              setTheme(id)
            }
            className={`card hover-card p-4 text-left ${
              theme === id
                ? 'ring-2 ring-[var(--primary)]'
                : ''
            }`}
          >
            <div className="mb-4 grid h-20 place-items-center rounded-2xl bg-[var(--surface2)] text-4xl">
              {emoji}
            </div>

            <b>{name}</b>

            {theme === id && (
              <div className="mt-2 flex items-center gap-1 text-xs font-bold text-[var(--primary)]">
                <CheckCircle2
                  size={14}
                />
                Selected
              </div>
            )}
          </button>
        )
      )}
    </div>
  )
}

export function Stat({
  icon,
  label,
  value,
  sub
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <span className="text-2xl">
          {icon}
        </span>

        <b className="text-2xl">
          {value}
        </b>
      </div>

      <p className="mt-3 font-bold">
        {label}
      </p>

      <p className="text-xs text-[var(--muted)]">
        {sub}
      </p>
    </div>
  )
}