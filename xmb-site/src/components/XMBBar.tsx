import XMBItem, { type XMBItemSpec } from './XMBItem'
import { playTick } from '../utils/sound'

export type { XMBItemSpec }

export default function XMBBar({
  items,
  index,
  setIndex,
  onActivate,
}: {
  items: XMBItemSpec[]
  index: number
  setIndex: (i: number) => void
  onActivate: (id: string) => void
}) {
  return (
    <nav className="xmb" aria-label="Main" role="tablist" aria-orientation="horizontal">
      {items.map((spec, i) => (
        <XMBItem
          key={spec.id}
          spec={spec}
          isActive={i === index}
          onFocus={() => {
            if (i !== index) playTick()
            setIndex(i)
          }}
          onActivate={() => {
            onActivate(spec.id)
            playTick()
          }}
        />
      ))}
    </nav>
  )
}
