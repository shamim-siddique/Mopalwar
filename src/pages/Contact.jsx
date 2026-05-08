import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, Clock, Globe } from 'lucide-react'

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
      value: '+91 (22) 1234 5678',
      href: 'tel:+912212345678'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Mumbai, Maharashtra, India',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Mon - Fri, 10:00 AM - 5:00 PM IST',
      href: null
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: '#',
      description: 'Professional updates and articles'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      href: '#',
      description: 'Thoughts on governance and policy'
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-6">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6">
                Let\'s Start a <span className="text-gold-500">Conversation</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you have questions about my work, seek mentorship, or wish to 
                discuss potential collaborations, I welcome your message.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-cream-100">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href || undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-cream-50 rounded-lg p-6 text-center ${item.href ? 'hover:bg-cream-200 transition-colors cursor-pointer' : ''}`}
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-gold-500" size={22} />
                </div>
                <h3 className="text-navy-900 font-medium mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionHeading
                title="Send a Message"
                subtitle="Fill out the form below and I will get back to you within 48 hours."
              />

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-navy-900 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-lg text-navy-900 placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-navy-900 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-lg text-navy-900 placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-navy-900 font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-lg text-navy-900 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="mentorship">Mentorship Request</option>
                    <option value="media">Media/Press</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy-900 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-lg text-navy-900 placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <SectionHeading
                title="Connect Online"
                subtitle="Follow me on social media for regular updates and insights."
              />

              <div className="space-y-4 mb-12">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-cream-100 rounded-lg hover:bg-cream-200 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <social.icon className="text-gold-500" size={22} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-navy-900 font-medium">{social.title}</h3>
                      <p className="text-gray-600 text-sm">{social.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="bg-cream-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-gold-500" size={24} />
                  <h3 className="text-navy-900 font-semibold">Response Policy</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  I aim to respond to all inquiries within 48 hours. For mentorship requests, 
                  please include details about your background and specific areas where you seek guidance.
                </p>
                <p className="text-gray-500 text-sm">
                  Note: While I review every message, due to volume, I may not be able to respond to every inquiry personally.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Office Location"
            subtitle="Based in Mumbai, available for meetings by appointment."
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="aspect-video bg-cream-200 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-gold-500/50 mb-4" size={60} />
                <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                <p className="text-gray-500 text-sm mt-2">Map placeholder</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}

export default Contact
