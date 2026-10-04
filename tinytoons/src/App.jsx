import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'

import Home from './pages/Home'
import Cartoons from './pages/Cartoons'
import Details from './pages/Details'
import Watch from './pages/Watch'
import Favorites from './pages/Favorites'
import Categories from './pages/Categories'
import New from './pages/New'
import Learn from './pages/Learn'
import Profile from './pages/Profile'
import Parents from './pages/Parents'
import SearchPage from './pages/SearchPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/cartoons" element={<Cartoons />} />

        <Route
          path="/cartoons/:id"
          element={<Details />}
        />

        <Route
          path="/watch/:id"
          element={<Watch />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/new"
          element={<New />}
        />

        <Route
          path="/learn"
          element={<Learn />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/parents"
          element={<Parents />}
        />

        <Route
          path="/search"
          element={<SearchPage />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}