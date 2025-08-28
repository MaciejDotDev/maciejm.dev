import { useEffect, useMemo, useRef } from 'react'

export default function FlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const blobs = useMemo(() => {
    const colors = [
      'rgba(120, 180, 255, 0.22)',
      'rgba(150, 120, 255, 0.20)',
      'rgba(90, 200, 230, 0.18)',
      'rgba(200, 150, 255, 0.16)',
    ]
    return new Array(8).fill(0).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.12 + Math.random() * 0.18,
      dx: (Math.random() * 2 - 1) * 0.00035,
      dy: (Math.random() * 2 - 1) * 0.00035,
      color: colors[i % colors.length],
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio)
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio)
    ctx.scale(devicePixelRatio, devicePixelRatio)

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = (t: number) => {
      const grd = ctx.createLinearGradient(0, 0, 0, h)
      grd.addColorStop(0, '#0c1024')
      grd.addColorStop(1, '#0a0f20')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      blobs.forEach((b, idx) => {
        b.x += b.dx; b.y += b.dy
        if (b.x < 0 || b.x > 1) b.dx *= -1
        if (b.y < 0 || b.y > 1) b.dy *= -1
        const px = b.x * (w / devicePixelRatio)
        const py = b.y * (h / devicePixelRatio)
        const pr = b.r * Math.min(w, h) * 0.0015 + 120 + 60 * Math.sin(t * 0.0005 + idx)
        const g = ctx.createRadialGradient(px, py, 0, px, py, pr)
        g.addColorStop(0, b.color)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2); ctx.fill()
      })
      ctx.globalCompositeOperation = 'source-over'

      const v = ctx.createRadialGradient(
        w / 2, h / 2, Math.min(w, h) * 0.2,
        w / 2, h / 2, Math.max(w, h) * 0.7
      )
      v.addColorStop(0, 'rgba(0,0,0,0)')
      v.addColorStop(1, 'rgba(0,0,0,0.35)')
      ctx.fillStyle = v
      ctx.fillRect(0, 0, w, h)

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); ro.disconnect() }
  }, [blobs])

  return (
 <canvas
    ref={canvasRef}
    style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      filter: 'blur(0.2px)',
      pointerEvents: 'none',  
    }}
    aria-hidden
  />
  )
}
