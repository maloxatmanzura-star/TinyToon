import {
  cartoons
} from '../data/cartoons'

import {
  useApp
} from '../context/AppContext'

import {
  Button,
  CartoonGrid,
  EmptyState,
  SectionHeader
} from '../components/UI'

export default function Favorites() {
  const {
    favorites
  } = useApp()

  const items =
    cartoons.filter(
      (cartoon) =>
        favorites.includes(
          cartoon.id
        )
    )

  return (
    <div className="container-page py-10">
      <SectionHeader
        title="My favorites"
        subtitle="Your saved TinyToons adventures"
      />

      {items.length ? (
        <CartoonGrid
          items={items}
        />
      ) : (
        <EmptyState
          title="Your shelf is waiting"
          text="Tap the heart on a cartoon to save it here."
          action={
            <Button to="/cartoons">
              Find cartoons
            </Button>
          }
        />
      )}
    </div>
  )
}