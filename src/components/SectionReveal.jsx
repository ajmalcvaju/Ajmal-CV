import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: delay ?? 0,
    },
  }),
}

/**
 * Scroll-triggered fade/slide-in wrapper for sections or blocks.
 */
export default function SectionReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      variants={variants}
      custom={delay}
    >
      <div className={className}>{children}</div>
    </motion.div>
  )
}
