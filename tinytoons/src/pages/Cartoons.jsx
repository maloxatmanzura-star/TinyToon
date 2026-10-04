import {
  useMemo,
  useState
} from 'react'

import {
  useSearchParams
} from 'react-router-dom'

import {
  Search,
  SlidersHorizontal
} from 'lucide-react'

import {
  cartoons,
  categories
} from '../data/cartoons'

import {
  CartoonGrid,
  SectionHeader
} from '../components/UI'

export default function Cartoons() {
  const [params] =
    useSearchParams()

  const [query, setQuery] =
    useState('')

  const [category, setCategory] =
    useState(
      params.get('category') ||
        'All'
    )

  const [age, setAge] =
    useState('All')

  const [genre, setGenre] =
    useState('All')

  const [sort, setSort] =
    useState('popular')

  const genres = [
    'All',
    ...new Set(
      cartoons.map(
        (cartoon) =>
          cartoon.genre
      )
    )
  ]

  const ages = [
    'All',
    '0–3',
    '4–6',
    '7–9',
    '10–12'
  ]

  const results = useMemo(() => {
    let filtered =
      cartoons.filter(
        (cartoon) =>
          (category === 'All' ||
            cartoon.category ===
              category) &&
          (age === 'All' ||
            cartoon.age === age) &&
          (genre === 'All' ||
            cartoon.genre ===
              genre) &&
          `${cartoon.title} ${cartoon.genre} ${cartoon.category}`
            .toLowerCase()
            .includes(
              query.toLowerCase()
            )
      )

    return [...filtered].sort(
      (a, b) => {
        if (sort === 'newest') {
          return b.year - a.year
        }

        if (sort === 'rating') {
          return (
            b.rating - a.rating
          )
        }

        return (
          b.rating - a.rating
        )
      }
    )
  }, [
    query,
    category,
    age,
    genre,
    sort
  ])

  return (
    <div className="container-page py-10">
      <SectionHeader
        title="Cartoon library"
        subtitle={`${results.length} adventures ready to explore`}
      />

      <div className="card mb-7 grid gap-3 p-4 md:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-[var(--muted)]"
          />

          <input
            className="input pl-10"
            aria-label="Search cartoons"
            placeholder="Search by title, genre, or category"
            value={query}
            onChange={(event) =>
              setQuery(
                event.target.value
              )
            }
          />
        </div>

        <select
          className="select"
          value={category}
          onChange={(event) =>
            setCategory(
              event.target.value
            )
          }
        >
          <option>All</option>

          {categories.map(
            (item) => (
              <option
                key={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <select
          className="select"
          value={genre}
          onChange={(event) =>
            setGenre(
              event.target.value
            )
          }
        >
          {genres.map(
            (item) => (
              <option
                key={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <select
          className="select"
          value={age}
          onChange={(event) =>
            setAge(
              event.target.value
            )
          }
        >
          {ages.map(
            (item) => (
              <option
                key={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <select
          className="select"
          value={sort}
          onChange={(event) =>
            setSort(
              event.target.value
            )
          }
        >
          <option value="popular">
            Popular
          </option>

          <option value="newest">
            Newest
          </option>

          <option value="rating">
            Highest rated
          </option>
        </select>
      </div>

      <div className="mb-5 flex items-center gap-2 text-sm text-[var(--muted)]">
        <SlidersHorizontal
          size={16}
        />
        Filters update instantly
      </div>

      <CartoonGrid
        items={results}
      />
    </div>
  )
}