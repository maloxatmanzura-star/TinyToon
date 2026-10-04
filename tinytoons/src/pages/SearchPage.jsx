import {
  useMemo
} from 'react'

import {
  useSearchParams
} from 'react-router-dom'

import {
  cartoons
} from '../data/cartoons'

import {
  CartoonGrid,
  SectionHeader
} from '../components/UI'

export default function SearchPage() {
  const [params] =
    useSearchParams()

  const query =
    params.get('q') || ''

  const items = useMemo(
    () =>
      cartoons.filter(
        (cartoon) =>
          `${cartoon.title} ${cartoon.genre} ${cartoon.category} ${cartoon.description}`
            .toLowerCase()
            .includes(
              query.toLowerCase()
            )
      ),
    [query]
  )

  return (
    <div className="container-page py-10">
      <SectionHeader
        title={`Search${
          query
            ? ` for “${query}”`
            : ''
        }`}
        subtitle={`${items.length} result${
          items.length === 1
            ? ''
            : 's'
        }`}
      />

      <CartoonGrid
        items={items}
      />
    </div>
  )
}