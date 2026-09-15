import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="topbar"><a className="brand" href="#top" aria-label="Apex GP home"><span className="brand-mark">A</span><span>APEX <b>GP</b></span></a><nav aria-label="Primary navigation"><a className="active" href="#team">Team</a><a href="#race">Race calendar</a><a href="#garage">The garage</a></nav><button className="menu-button" type="button" aria-label="Open menu">☰</button></header>
      <section className="hero-section" id="top"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Next up · Singapore GP</p><h1>Built for<br /><em>the apex.</em></h1><p className="intro">Precision in every component. Instinct in every corner. Meet the people and machine behind Apex GP.</p><a className="primary-action" href="#team">Meet the team <span>↗</span></a></div><div className="car-stage" aria-label="Apex GP Formula One car illustration"><div className="speed-lines" /><div className="car-shadow" /><div className="f1-car"><div className="rear-wing" /><div className="front-wing" /><div className="nose" /><div className="cockpit"><span /></div><div className="sidepod left" /><div className="sidepod right" /><div className="wheel rear-wheel" /><div className="wheel front-wheel" /><div className="car-stripe" /><div className="number">07</div></div><span className="car-label">AX-07 / 2025 SPEC</span></div></section>
      <section className="team-section" id="team"><div className="section-heading"><p className="eyebrow">The drivers</p><h2>One team.<br /><em>Two instincts.</em></h2></div><article className="driver-card featured"><div className="driver-portrait"><div className="portrait-ring" /><div className="driver-initials">LH</div><span className="portrait-number">07</span></div><div className="driver-details"><p className="driver-role">Driver 01 <span>•</span> Great Britain</p><h3>Leo Hart</h3><p className="driver-note">“The car tells you what it needs. You just have to listen faster than everyone else.”</p><div className="driver-stats"><span><b>04</b> Podiums</span><span><b>02</b> Wins</span><span><b>178</b> Points</span></div></div><span className="arrow-link">↗</span></article><article className="driver-card second-driver"><div className="mini-portrait"><span>MC</span></div><div><p className="driver-role">Driver 02 <span>•</span> Brazil</p><h3>Mateo Cruz</h3></div><span className="arrow-link">↗</span></article></section>
      <footer><span>APEX GP / 2025</span><span>Engineered without compromise <b>✦</b></span><span>07 — 22</span></footer>
    </main>
  )
}

export default App
