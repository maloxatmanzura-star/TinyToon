import { Outlet } from 'react-router-dom'

import {
  Navbar,
  Footer,
  FloatingMascots
} from '../components/UI'

import { useApp } from '../context/AppContext'

export default function Layout() {
  const { theme } = useApp()

  return (
    <div
      className={`theme-shell theme-${theme}`}
    >
      <FloatingMascots />

      <Navbar />

      <main className="relative z-10 page-enter">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}