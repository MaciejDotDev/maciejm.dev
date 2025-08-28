import React from "react";
import { motion } from "framer-motion";

export interface XMBItemSpec {
  id: string;
  label: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export default function XMBItem({
  spec,
  isActive,
  onActivate,
  onFocus,
}: {
  spec: XMBItemSpec;
  isActive: boolean;
  onActivate: () => void;
  onFocus: () => void;
}) {
  return (
    <motion.button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${spec.id}`}
      id={`tab-${spec.id}`}
      onMouseEnter={onFocus}
      onFocus={onFocus}
      onClick={onActivate}
      className="xmb-item"
      initial={false}
      animate={{ scale: isActive ? 1.08 : 1, y: isActive ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      aria-pressed={isActive}
    >
      <div className="xmb-icon" aria-hidden>
        {spec.icon ?? "★"}
      </div>
      <div className="xmb-text">
        <div className="xmb-label">{spec.label}</div>
        {spec.subtitle && <div className="xmb-sub">{spec.subtitle}</div>}
      </div>
    </motion.button>
  );
}
