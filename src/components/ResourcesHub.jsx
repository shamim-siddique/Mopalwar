import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

const resourceCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'policy', label: 'Policy & Legal' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'strategy', label: 'Strategy & Execution' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'technical', label: 'Technical Reports' }
]

const resources = [
  {
    id: 1,
    title: 'The Maharashtra Groundwater (Development and Management) Act',
    category: 'policy',
    type: 'Policy & Legal',
    size: 'Official Act',
    pages: 'Act 26 of 2013',
    date: '2009',
    summary: 'Official legal framework for state-wide groundwater governance, conservation, and sustainable use.',
    description: 'India Code record for the Maharashtra Groundwater Act, marking a major policy framework for water resource governance and sustainability across the state.',
    pdfUrl: 'https://mwrra.maharashtra.gov.in/wp-content/uploads/2022/08/6-Maharashtra-Groundwater-Development-Management-Act-2009.pdf'
  },
  {
    id: 2,
    title: 'Samruddhi Mahamarg: Lessons in Greenfield Development',
    category: 'technical',
    type: 'Technical Reports',
    size: '2.8 MB',
    pages: '12 pages',
    date: '2023',
    summary: 'Engineering whitepaper on the 701-km expressway, technical specifications, and greenfield development model.',
    description: 'IJIRSET case study documenting the Samruddhi Mahamarg project, including engineering specifications, design parameters, and the land acquisition model that enabled rapid execution.',
    pdfUrl: 'http://www.ijirset.com/upload/2023/may/419_Samruddhi_NC.pdf'
  },
  {
    id: 3,
    title: 'Infrastructure Project Execution & Fast-Tracking Framework',
    category: 'strategy',
    type: 'Strategy & Execution',
    size: 'BSE filing',
    pages: 'Profile archive',
    date: '2025',
    summary: 'Public governance archive verifying War Room leadership and fast-tracking of major infrastructure projects.',
    description: 'BSE-hosted professional profile confirming Radheshyam Mopalwar as former VC & MD of MSRDC and Director General of the Infrastructure War Room in the CMO of Maharashtra.',
    pdfUrl: 'https://bsmedia.business-standard.com/_media/bs/data/announcements/bse/05022025/2ac9c8fa-861f-4a01-9ce6-8fe7eee44365.pdf'
  },
  {
    id: 4,
    title: 'Hazoor Multi Projects 2026 Strategic Outlook & Financial Report',
    category: 'corporate',
    type: 'Corporate',
    size: 'Financial PDF',
    pages: 'Quarterly result',
    date: '2025-2026',
    summary: 'Official corporate financial disclosure for the 2025-2026 reporting cycle and current leadership context.',
    description: 'Hazoor Multi Projects financial-result disclosure for the 2026 reporting period, supporting the company\'s current corporate status and financial growth narrative.',
    pdfUrl: 'https://hazoormultiproject.com/wp-content/uploads/2026/04/31-12-2025-2.pdf'
  },
  {
    id: 5,
    title: 'MSRDC Consolidated Financials & Project Progress',
    category: 'infrastructure',
    type: 'Infrastructure',
    size: '4.5 MB',
    pages: 'Annual accounts',
    date: '2019',
    summary: 'Official MSRDC consolidated financial archive covering infrastructure finance and project-progress benchmarks.',
    description: 'MSRDC annual report and bond archive containing consolidated financial statements tied to the infrastructure project portfolio overseen during the VC & MD tenure.',
    pdfUrl: 'https://msrdc.in/site/upload/pdf/MSRDC-CONSOLIDATED-31032019.pdf'
  }
]

const ResourcesHub = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredResources = activeCategory === 'all'
    ? resources
    : resources.filter(r => r.category === activeCategory)

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="space-y-8">
      {/* Category Labels */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="text-gray-400 text-xs font-medium">Filter:</span>
        {resourceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gold-500/10 text-gold-700 border border-gold-500/20'
                : 'text-gray-500 hover:text-gold-600 border border-transparent hover:border-cream-200/60'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
        <AnimatePresence mode="wait">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group h-full bg-cream-50 rounded-2xl overflow-hidden border border-cream-200/60 shadow-sm hover:shadow-lg hover:shadow-gold-500/5 hover:border-gold-500/20 transition-all duration-300"
            >
              {/* Card Content */}
              <div className="p-5">
                {/* Type & Size */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-gold-500/8 text-gold-600 text-[10px] font-semibold rounded-full uppercase tracking-wide">
                    {resource.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <FileText size={14} />
                    <span>{resource.size}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-navy-900 mb-1.5 group-hover:text-gold-600 transition-colors line-clamp-2 leading-snug">
                  {resource.title}
                </h3>

                {/* Summary */}
                <p className="text-gold-600 text-xs font-medium mb-2">
                  {resource.summary}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-3">
                  {resource.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 pb-3 border-b border-cream-200/60">
                  <span>{resource.pages}</span>
                  <span>·</span>
                  <span>{resource.date}</span>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(resource.pdfUrl)}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 text-xs font-semibold rounded-xl hover:shadow-md hover:shadow-gold-500/15 transition-all duration-300"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ResourcesHub
