import { motion } from 'framer-motion'

const SectionHeading = ({ 
  title, 
  subtitle = '', 
  centered = false,
  light = false 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 ${light ? 'text-navy-900' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-navy-700' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-gold-500 mt-6 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}

export default SectionHeading
