import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const TechnologiesSection = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
  })

  const technologies = {
    'Linguagens de Programação': ['Java', 'JavaScript', 'C', 'C++', 'Python'],
    'Frameworks e Bibliotecas': [
      'Spring Boot',
      'Spring Framework',
      'Apache Camel',
      'React',
      'OpenGL',
    ],
    'Bancos de Dados': [
      'SQL Server',
      'MySQL',
      'PostgreSQL',
      'Redis',
      'MongoDB',
    ],
    Ferramentas: [
      'Docker',
      'RabbitMQ',
      'Google PubSub',
      'Git',
      'Linux',
      'Maven',
      'Gradle',
    ],
    'Padrões e Arquiteturas': [
      'Microsserviços',
      'Arquitetura Hexagonal',
      'Arquitetura Orientada a Eventos',
      'REST APIs',
      'SOLID',
    ],
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const categoryVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <section className="section-padding bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Tecnologias</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {Object.entries(technologies).map(
              ([category, techs], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={categoryVariants}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-semibold text-gray-100 mb-6 text-center md:text-left">
                    {category}
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {techs.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        variants={itemVariants}
                        transition={{
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        className="px-6 py-3 bg-gray-800 text-gray-300 rounded-full font-medium tech-badge cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesSection
