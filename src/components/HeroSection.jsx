import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mb-8"
          >
            <img
              src="https://horizons-cdn.hostinger.com/6d8fc1b0-6262-4911-a4e7-d5d5084e2868/site-8laGV.jpeg"
              alt="Mathias Hahner - Backend Developer"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-gray-700"
            />
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Mathias Hahner</span>
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-6"
          >
            Backend Developer
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          ></motion.p>

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-medium hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Conheça meu trabalho
            <ChevronDown className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
