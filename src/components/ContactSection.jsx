import { useRef } from 'react'
import { toast } from './ui/use-toast'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
  })

  const contacts = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mathiashahner',
      link: 'https://www.linkedin.com/in/mathiashahner/',
      color: 'hover:bg-blue-700',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'mathias_hahner@hotmail.com',
      link: 'mailto:mathias_hahner@hotmail.com',
      color: 'hover:bg-red-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'mathiashahner',
      link: 'https://github.com/mathiashahner',
      color: 'hover:bg-gray-700',
    },
  ]

  const handleContactClick = (contact) => {
    if (contact.label === 'E-mail') {
      navigator.clipboard.writeText(contact.value)
      toast({
        title: 'E-mail copiado!',
        description:
          'O endereço de e-mail foi copiado para a área de transferência.',
      })
    } else {
      window.open(contact.link, '_blank')
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="contact-gradient section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Vamos Conversar?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact) => (
              <motion.div
                key={contact.label}
                variants={itemVariants}
                className="group"
              >
                <button
                  onClick={() => handleContactClick(contact)}
                  className={`w-full bg-black bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-opacity-20 hover:transform hover:-translate-y-2 ${contact.color} hover:shadow-2xl`}
                >
                  <contact.icon className="w-12 h-12 text-gray-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-gray-800 text-sm mb-4">{contact.value}</p>
                  <ExternalLink className="w-5 h-5 text-gray-800 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
