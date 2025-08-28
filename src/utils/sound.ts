let ctx: AudioContext | null = null

export function playTick(volume = 0.15) {
  try {
    if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    const now = ctx.currentTime
    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(volume, now + 0.005)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08)

    osc.type = 'square'
    osc.frequency.setValueAtTime(1200, now)
    osc.frequency.exponentialRampToValueAtTime(2000, now + 0.04)

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(now)
    osc.stop(now + 0.09)
  } catch {
  }
}
