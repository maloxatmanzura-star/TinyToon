import {
  categories
} from '../data/cartoons'

import {
  CategoryCard,
  SectionHeader
} from '../components/UI'

export default function Categories() {
  return (
    <div className="container-page py-10">
      <SectionHeader
        title="Choose your world"
        subtitle="Every category opens a different little adventure."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map(
          (category, index) => (
            <CategoryCard
              key={category}
              name={category}
              index={index}
            />
          )
        )}
      </div>
    </div>
  )
}