import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FlowBackground from './components/FlowBackground'
import XMBBar from './components/XMBBar'
import type { XMBItemSpec } from './components/XMBBar'
import About from './panels/About'
import Skills from './panels/Skills'
import Projects from './panels/Projects'
import Contact from './panels/Contact'
import { playTick } from './utils/sound'
import './styles/xmb.css'

function Panel({ id }: { id: string }) {
  const content: Record<string, React.ReactNode> = {
    about: <About />, skills: <Skills />, projects: <Projects />, contact: <Contact />
  }
  return (
    <div className="panel-scroll">
      <div className="panel-content">{content[id] ?? null}</div>
    </div>
  )
}

export default function App() {
  const items: XMBItemSpec[] = [
    { id: 'about', label: 'About', subtitle: 'Who I am' },
    { id: 'skills', label: 'Skills', subtitle: 'What I use' },
    { id: 'projects', label: 'Projects', subtitle: 'What I built' },
    { id: 'contact', label: 'Contact', subtitle: 'Say hello' },
  ]

 const [index, setIndex] = useState(0)
  const [active, setActive] = useState(items[0].id)

  useEffect(() => setActive(items[index].id), [index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setIndex((i) => {
          const next = Math.min(i + 1, items.length - 1)
          if (next !== i) playTick()
          return next
        })
      }
      if (e.key === 'ArrowLeft') {
        setIndex((i) => {
          const prev = Math.max(i - 1, 0)
          if (prev !== i) playTick()
          return prev
        })
      }
      if (e.key === 'Enter') {
        setActive(items[index].id)
        playTick()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, items])

  return (
    <div className="root">
      <FlowBackground />

      <header className="topbar">
        <div className="brand">maciejm.dev</div>
        <div className="clock" aria-live="polite">{new Date().toLocaleString()}</div>
      </header>

      <main className="stage" role="main">
        <XMBBar items={items} index={index} setIndex={setIndex} onActivate={(id) => setActive(id)} />

        <section
          className="panel"
          aria-live="polite"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <Panel id={active} />
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <footer className="foot">Use ← → to move • Volume Up </footer>
    </div>
  )
}
