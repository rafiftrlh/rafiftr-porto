import { HiDownload } from 'react-icons/hi'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const Home = ({ isLoaderDone }) => {
  const controls = useAnimation()
  const sectionRef = useRef(null)

  useEffect(() => {
    if (isLoaderDone) {
      controls.start('visible')
    }
  }, [isLoaderDone, controls])

  return (
    <section
      id='homeSect'
      ref={sectionRef}
      className='flex flex-col justify-center py-32 p-12 md:p-[120px]'
    >
      <motion.h2
        className='flex items-center gap-2 text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold'
        initial='hidden'
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 }
          }
        }}
      >
        <motion.div
          className='w-5 sm:w-8 md:w-10 lg:w-12 border rounded-full flex-shrink-0'
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: 'easeOut' }
            }
          }}
        ></motion.div>
        {'RAFI FITROTULLOH'.split('').map((char, index) => (
          <motion.span
            className='text-sm md:text-lg'
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' }
              }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        className='relative w-fit'
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -20, scale: 0.95 },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeOut', delay: 1.5 }
          }
        }}
      >
        <h1 className='transition-all text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>
          <span className='text-primary'>FRONTEND</span> <br /> AND{' '}
          <span className='text-primary'>BACKEND</span> <br />{' '}
          <span className='text-primary'>WEB</span> DEVELOPER
        </h1>
        <motion.img
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20, rotate: -10 },
            visible: {
              opacity: 1,
              y: 0,
              rotate: 0,
              transition: { duration: 0.8, ease: 'easeOut', delay: 3 }
            }
          }}
          src='icons/memphis-circle.svg'
          alt=''
          className='absolute -z-10 bottom-0 -right-14 h-full animate-pulse'
        />
      </motion.div>

      <div className='relative w-fit mt-10'>
        <motion.img
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -20, scale: 0.9 },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { duration: 0.8, ease: 'easeOut', delay: 2 }
            }
          }}
          src='icons/memphis-arrow.svg'
          alt=''
          className='absolute -z-10 -left-[150px] sm:-left-[170px] h-full'
        />
        <motion.button
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: 'easeOut', delay: 2.5 }
            }
          }}
          className='transition-all flex items-center gap-5 border w-fit px-6 py-3 rounded-full hover:bg-wht hover:border-wht group'
          type='button'
        >
          <HiDownload className='transition-all size-4 sm:size-5 group-hover:fill-blk' />{' '}
          <span className='transition-all tracking-[7px] font-semibold text-xs sm:text-base group-hover:text-blk'>
            Download CV
          </span>
        </motion.button>
      </div>

      <motion.img
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 3, ease: 'easeOut', delay: 1 }
          }
        }}
        src='icons/memphis-wave.svg'
        alt=''
        className='absolute -z-10 bottom-0 -right-10 h-[10%] md:h-[15%]'
      />
    </section>
  )
}
