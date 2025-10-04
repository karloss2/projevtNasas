import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let rafId
    const DPR = Math.min(2, window.devicePixelRatio || 1)

    function resize() {
      canvas.width = canvas.clientWidth * DPR
      canvas.height = canvas.clientHeight * DPR
    }

    const stars = Array.from({ length: 240 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.9 + 0.1,
      v: Math.random() * 0.0008 + 0.0003
    }))

    function draw() {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // subtle nebula haze
      const grd = ctx.createRadialGradient(w*0.5, h*0.1, 0, w*0.5, h*0.1, h*0.9)
      grd.addColorStop(0, 'rgba(139,92,246,0.15)')
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, w, h)

      for (const s of stars) {
        s.y += s.v
        if (s.y > 1) s.y = 0

        const sx = s.x * w
        const sy = s.y * h
        const r = (s.z * 1.8 + 0.2) * DPR
        ctx.beginPath()
        ctx.arc(sx, sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.4 + s.z * 0.6})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  )
}
