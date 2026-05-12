import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  onClick = null,
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-cream-50/80 border border-cream-200/80',
    elevated: 'bg-cream-50 border border-cream-200 shadow-md shadow-navy-900/5',
    glass: 'glass border border-white/40 shadow-lg shadow-navy-900/5',
    dark: 'bg-navy-900 border border-navy-800/60',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.005 } : {}}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className={`
        ${variants[variant]}
        rounded-2xl p-5 sm:p-6 lg:p-7
        ${hover ? 'hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/8 cursor-default' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        transition-all duration-350
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

export default Card
