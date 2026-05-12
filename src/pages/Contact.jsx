import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, Clock, Globe } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@radheshyammopalwar.in',
      href: 'mailto:contact@radheshyammopalwar.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 22 2XXX XXXX',
      href: null
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Hazoor Multi Projects Ltd, Mumbai, Maharashtra, India',
      href: null
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Mon – Fri | 10:00 AM – 6:00 PM IST',
      href: null
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: '#',
      description: 'Connect for professional inquiries and infrastructure discourse'
    },
    {
      icon: Twitter,
      title: 'Twitter/X',
      href: '#',
      description: 'Active in official government-tagged discussions on Maharashtra infrastructure'
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-block px-4 py-1.5 bg-gold-500/8 border border-gold-500/20 rounded-full text-gold-600 text-xs font-semibold tracking-wide mb-5">
                Contact
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 mb-4">
                Connect with Radheshyam Mopalwar
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Strategic Advisory on Infrastructure, Governance, and Nation-Building.
                Available for consulting, high-level policy advisory, and mentorship.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 md:py-12 bg-cream-100">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href || undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`bg-cream-50 rounded-2xl p-5 text-center border border-cream-200/60 transition-all duration-300 ${item.href ? 'hover:bg-cream-100 hover:border-gold-500/20 cursor-pointer' : ''}`}
              >
                <div className="w-10 h-10 bg-gold-500/8 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-gold-500" size={18} />
                </div>
                <h3 className="text-navy-900 font-medium text-sm mb-0.5">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-snug">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <SectionHeading
                title="Send a Message"
                subtitle="Fill out the form below and I will get back to you within 48 hours."
              />

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-navy-900 font-medium text-sm mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-navy-900 font-medium text-sm mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="input-field text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-navy-900 font-medium text-sm mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="input-field text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select a topic</option>
                    <option value="infrastructure">Infrastructure Strategy Consulting</option>
                    <option value="governance">Corporate Governance</option>
                    <option value="ppp">PPP (Public-Private Partnership) Advisory</option>
                    <option value="mentorship">Mentorship for Civil Service Aspirants</option>
                    <option value="speaking">Speaking Engagements (Global Infra Summits)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy-900 font-medium text-sm mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message here..."
                    className="input-field text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary text-sm"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <SectionHeading
                title="Connect Online"
                subtitle="Follow me on social media for regular updates and insights."
              />

              <div className="space-y-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.href}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex items-center gap-3 p-3.5 bg-cream-100 rounded-xl border border-cream-200/60 hover:bg-cream-100 hover:border-gold-500/20 transition-all group"
                  >
                    <div className="w-10 h-10 bg-gold-500/8 rounded-xl flex items-center justify-center group-hover:bg-gold-500/15 transition-colors">
                      <social.icon className="text-gold-500" size={18} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-navy-900 font-medium text-sm">{social.title}</h3>
                      <p className="text-gray-500 text-xs">{social.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="bg-cream-100 rounded-2xl p-5 border border-cream-200/60">
                <div className="flex items-center gap-2.5 mb-3">
                  <Globe className="text-gold-500" size={20} />
                  <h3 className="text-navy-900 font-semibold text-sm">Response Policy</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">
                  Response Time: 48–72 hours for verified professional inquiries.
                  Please include details about your organization and specific areas where you seek guidance.
                </p>
                <p className="text-gray-400 text-xs">
                  Note: Available for strategic consulting, high-level policy advisory, and mentorship.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-100">
        <Container>
          <SectionHeading
            title="Office Location"
            subtitle="Based in Mumbai, available for meetings by appointment."
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg shadow-navy-900/5 border border-cream-200/80"
          >
            <MapContainer
              center={[18.925034, 72.824555]}
              zoom={13}
              className="w-full h-full"
              style={{ zIndex: 1 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[18.925034, 72.824555]}>
                <Popup>
                  <div className="text-center">
                    <p className="font-semibold text-navy-900 text-sm">Hazoor Multi Projects Ltd</p>
                    <p className="text-xs text-gray-600">Nariman Point, Mumbai</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-center mt-4 text-navy-900 font-semibold text-base"
          >
            Hazoor Multi Projects Limited
          </motion.p>
        </Container>
      </section>
    </div>
  )
}

export default Contact
