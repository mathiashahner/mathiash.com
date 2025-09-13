import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Code, Music, GraduationCap } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
  })

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
    <section id="about" className="section-padding bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl">
                <Code className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">
                    Desenvolvimento de Software
                  </h4>
                  <p className="text-gray-400 text-md">
                    Nesses 5 anos atuando como desenvolvedor backend, sempre
                    busquei construir sistemas distribuídos, resilientes e de
                    alta performance. Atualmente, trabalho no setor financeiro,
                    utilizando tecnologias e padrões de código modernos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl">
                <GraduationCap className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">
                    Formação Acadêmica
                  </h4>
                  <p className="text-gray-400 text-md">
                    Estudante do último semestre do curso de Ciência da
                    Computação na UNISINOS, buscando sempre aliar o conhecimento
                    acadêmico com os desafios práticos do mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl">
                <Music className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-100 mb-2">
                    Gostos pessoais
                  </h4>
                  <p className="text-gray-400 text-md">
                    Sou entusiasta do Linux, contribuidor da comunidade open
                    source e um curioso quando o assunto é Inteligência
                    artificial. Nas horas vagas toco violão, guitarra e piano.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
