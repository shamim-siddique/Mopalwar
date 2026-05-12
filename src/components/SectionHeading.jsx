import { motion } from 'framer-motion'

const SectionHeading = ({
  title,
  subtitle = '',
  centered = false,
  light = false,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 ${light ? 'text-navy-900' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-navy-700' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-0.5 w-16 bg-gradient-to-r from-gold-500 to-gold-300 mt-4 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}

export default SectionHeading
