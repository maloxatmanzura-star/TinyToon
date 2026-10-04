import {
  cartoons
} from '../data/cartoons'

import {
  CartoonGrid,
  SectionHeader
} from '../components/UI'

export default function New() {
  return (
    <div className="container-page py-10">
      <SectionHeader
        title="New adventures"
        subtitle="Recently added to TinyToons"
      />

      <CartoonGrid
        items={cartoons.filter(
          (cartoon) =>
            cartoon.isNew
        )}
      />
    </div>
  )
}