import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DogGallery from './pages/DogGallery'
import CatGallery  from './pages/CatGallery'

function Home() {
  return <div className="p-8 text-xl">Welcome to the Dog App!</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-zinc-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/dogs">Dog Gallery</Link>
        <Link to="/cats">Cats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogGallery />} />
        <Route path="/cats" element={<CatGallery />} />
      </Routes>
    </BrowserRouter>
  )
}