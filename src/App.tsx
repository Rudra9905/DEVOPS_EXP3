import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState<'team' | 'history'>('team')

  if (page === 'history') {
    return <DriverHistory onBack={() => setPage('team')} />
  }

  return (
    <main className="app-shell">
      <header className="topbar"><a className="brand" href="#top" aria-label="Apex GP home"><span className="brand-mark">A</span><span>APEX <b>GP</b></span></a><nav aria-label="Primary navigation"><a className="active" href="#team">Team</a><button className="nav-button" type="button" onClick={() => setPage('history')}>Driver history</button><a href="#race">Race calendar</a><a href="#garage">The garage</a></nav><button className="menu-button" type="button" aria-label="Open menu">☰</button></header>
      <section className="hero-section" id="top"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Next up · Singapore GP</p><h1>Built for<br /><em>the apex.</em></h1><p className="intro">Precision in every component. Instinct in every corner. Meet the people and machine behind Apex GP.</p><a className="primary-action" href="#team">Meet the team <span>↗</span></a></div><div className="car-stage" aria-label="Apex GP Formula One car illustration"><div className="speed-lines" /><div className="car-shadow" /><div className="f1-car"><div className="rear-wing" /><div className="front-wing" /><div className="nose" /><div className="cockpit"><span /></div><div className="sidepod left" /><div className="sidepod right" /><div className="wheel rear-wheel" /><div className="wheel front-wheel" /><div className="car-stripe" /><div className="number">07</div></div><span className="car-label">AX-07 / 2025 SPEC</span></div></section>
      <section className="team-section" id="team"><div className="section-heading"><p className="eyebrow">The drivers</p><h2>One team.<br /><em>Two instincts.</em></h2></div><article className="driver-card featured"><div className="driver-portrait"><div className="portrait-ring" /><div className="driver-initials">LH</div><span className="portrait-number">07</span></div><div className="driver-details"><p className="driver-role">Driver 01 <span>•</span> Great Britain</p><h3>Leo Hart</h3><p className="driver-note">“The car tells you what it needs. You just have to listen faster than everyone else.”</p><div className="driver-stats"><span><b>04</b> Podiums</span><span><b>02</b> Wins</span><span><b>178</b> Points</span></div></div><span className="arrow-link">↗</span></article><article className="driver-card second-driver"><div className="mini-portrait"><span>MC</span></div><div><p className="driver-role">Driver 02 <span>•</span> Brazil</p><h3>Mateo Cruz</h3></div><span className="arrow-link">↗</span></article></section>
      <footer><span>APEX GP / 2025</span><span>Engineered without compromise <b>✦</b></span><span>07 — 22</span></footer>
    </main>
  )
}

export default App

type DriverHistoryProps = { onBack: () => void }

function DriverHistory({ onBack }: DriverHistoryProps) {
  return (
    <main className="app-shell history-page">
      <header className="topbar"><button className="brand brand-button" type="button" onClick={onBack} aria-label="Back to Apex GP home"><span className="brand-mark">A</span><span>APEX <b>GP</b></span></button><nav aria-label="History navigation"><button className="nav-button active" type="button">Driver history</button><button className="nav-button" type="button" onClick={onBack}>Back to team</button></nav><button className="menu-button" type="button" aria-label="Open menu">☰</button></header>
      <section className="history-hero"><div><p className="eyebrow"><span className="status-dot" /> Driver archive / 07</p><h1>Leo<br /><em>Hart.</em></h1><p className="history-summary">A decade of speed, measured in titles, late-braking moves, and the quiet work between Sundays.</p><button className="text-action" type="button" onClick={onBack}>← Return to team</button></div><div className="history-number">07</div><div className="history-portrait"><span>LH</span><small>APEX GP / DRIVER 01</small></div></section>
      <section className="career-overview"><div className="overview-heading"><p className="eyebrow">Career overview</p><h2>Numbers that<br /><em>carry weight.</em></h2></div><div className="stat-grid"><div><strong>02</strong><span>World titles</span></div><div><strong>18</strong><span>Race wins</span></div><div><strong>47</strong><span>Podiums</span></div><div><strong>11</strong><span>Pole positions</span></div><div><strong>09</strong><span>Fastest laps</span></div><div><strong>412</strong><span>Career points</span></div></div></section>
      <section className="history-details"><div className="titles-panel"><p className="eyebrow">Championship record</p><h2>Title<br /><em>seasons.</em></h2><div className="title-row"><span>2023</span><b>World champion</b><strong>1st</strong></div><div className="title-row"><span>2021</span><b>World champion</b><strong>1st</strong></div><div className="title-row muted-row"><span>2024</span><b>Runner-up</b><strong>2nd</strong></div></div><div className="results-panel"><p className="eyebrow">Latest results</p><h2>Race<br /><em>form.</em></h2><div className="result-row"><span>Singapore GP</span><b>01</b><small>WIN</small></div><div className="result-row"><span>Monza GP</span><b>03</b><small>PODIUM</small></div><div className="result-row"><span>Dutch GP</span><b>02</b><small>PODIUM</small></div><div className="result-row"><span>Hungarian GP</span><b>05</b><small>POINTS</small></div></div></section>
      <footer><span>APEX GP / DRIVER ARCHIVE</span><span>Leo Hart <b>✦</b> 07</span><span>2021 — 2025</span></footer>
    </main>
  )
}
