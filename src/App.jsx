import Home from './pages/Home'

function App() {
  return (
    <div className="relative min-h-screen bg-mesh font-sans antialiased">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 grid-overlay opacity-60" aria-hidden />
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  )
}

export default App
