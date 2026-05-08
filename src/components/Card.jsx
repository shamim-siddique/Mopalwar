import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '',
  hover = true,
  onClick = null
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className={`
        bg-cream-50 border border-cream-200 rounded-lg p-6 md:p-8
        ${hover ? 'hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/10' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

export default Card
