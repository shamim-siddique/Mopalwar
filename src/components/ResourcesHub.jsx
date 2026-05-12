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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center gap-2 text-sm"
      >
        <span className="text-gray-500 font-medium">Categories:</span>
        {resourceCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`transition-all duration-300 ${
              activeCategory === category.id
                ? 'text-gold-600 font-semibold'
                : 'text-gray-700 hover:text-gold-600'
            }`}
          >
            {category.label}
            {index < resourceCategories.length - 1 && (
              <span className="text-gray-400 mx-2">|</span>
            )}
          </button>
        ))}
      </motion.div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group h-full bg-cream-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-cream-200 hover:border-gold-500/30"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Type & Size */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-medium rounded-full">
                    {resource.type}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FileText className="w-4 h-4" />
                    <span>{resource.size}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {resource.title}
                </h3>

                {/* Summary */}
                <p className="text-gold-600 text-sm font-medium mb-3">
                  {resource.summary}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {resource.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-cream-200">
                  <span>{resource.pages}</span>
                  <span>-</span>
                  <span>{resource.date}</span>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(resource.pdfUrl)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
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
