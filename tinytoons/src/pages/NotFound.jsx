import {
  Link
} from 'react-router-dom'

import {
  Home
} from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-10">
      <div className="card max-w-lg p-10 text-center">
        <div className="text-7xl">
          🧭
        </div>

        <h1 className="mt-5 text-4xl font-black">
          Oops! This adventure doesn’t exist.
        </h1>

        <p className="mt-3 text-(--muted)">
          The map got a little mixed up.
          Let’s head back to TinyToons.
        </p>

        <Link
          className="btn btn-primary mt-6"
          to="/"
        >
          <Home size={17} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}