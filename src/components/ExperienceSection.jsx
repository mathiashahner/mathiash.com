import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Zap, Repeat, MessageCircle, Users } from 'lucide-react'

const ExperienceSection = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      icon: Repeat,
      title: 'Migração de Mensageria (PIX)',
      period: 'Projeto de Destaque',
      description:
        'Atuei na migração do serviço de mensageria RabbitMQ para Google Pub/Sub no ecossistema do PIX, garantindo maior escalabilidade, resiliência e performance para o sistema.',
      technologies: [
        'Java',
        'Spring Boot',
        'Google Pub/Sub',
        'RabbitMQ',
        'Apache Camel',
        'Microsserviços',
      ],
    },
    {
      icon: Zap,
      title: 'SPB Core (Integração BACEN)',
      period: 'Projeto de Destaque',
      description:
        'Participei da implementação do SPB Core, um sistema que se integra ao SPB do Banco Central do Brasil, desenvolvido com arquitetura orientada a eventos, tolerante a falhas e de alta disponibilidade.',
      technologies: [
        'Java',
        'Spring Boot',
        'Google Pub/Sub',
        'Arquitetura Orientada a Eventos',
        'Tolerância a Falhas',
      ],
    },
    {
      icon: Users,
      title: 'Monitoria no Programa Crescer',
      period: 'CWI Software',
      description:
        'Atuo como monitor no programa de formação de novos talentos da empresa CWI Software, mentorando desenvolvedores juniores em suas primeiras experiências com tecnologia e projetos reais.',
      technologies: [
        'Java',
        'Spring Boot',
        'Mentoria',
        'Desenvolvimento de Pessoas',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Experiências Anteriores',
      period: 'Fundamentos',
      description:
        'Minhas primeiras experiências incluiram o desenvolvimento de uma biblioteca gráfica (GUI) multiplataforma com OpenGL, implementação de bibliotecas criptográficas (CSP, KSP, PKCS#11) e firmware para dispositivos IoT.',
      technologies: ['C', 'C++', 'OpenGL', 'Criptografia', 'IoT', 'ESP32'],
    },
  ]

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
              <span className="gradient-text">Experiências</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gray-700 rounded-xl">
                    <exp.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {exp.title}
                    </h3>
                    <span className="text-yellow-400 font-medium text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
