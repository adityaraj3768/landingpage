import './App.css'

function App() {
  return (
    <div className="app">
      {/* Snow Effect */}
      <div className="snow"></div>

      {/* Main Content */}
      <main className="main-content">
        <div className="brand">
          <h1 className="brand-title">Coming Soon</h1>
        </div>
        
        <p className="tagline">Something amazing is on the way</p>

        <div className="features">
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <span>Launching Soon</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <span>Innovative</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <span>Stay Tuned</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
      </footer>
    </div>
  )
}

export default App
