import { motion } from 'framer-motion'
import './loaderHome.css'

export const LoaderHome = () => {
  return (
    <motion.div
      className='bg-blk flex-shrink-0 h-screen w-screen relative'
    >
      <div className='containerLoaderHome'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: { display: 'none' }
          }}
          className='loaderText'
        >
          Halo
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1 },
            transitionEnd: { display: 'none' }
          }}
          className='loaderText'
        >
          Hello
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5 },
            transitionEnd: { display: 'none' }
          }}
          className='loaderText'
        >
          مرحباً بكم
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2 },
            transitionEnd: { display: 'none' }
          }}
          className='loaderText'
        >
          Здравствуйте
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.5 },
            transitionEnd: { display: 'none' }
          }}
          className='loaderText'
        >
          こんにちは
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 3 }
          }}
          className='loaderText'
        >
          안녕하세요.
        </motion.span>
      </div>
      <div className='h-10 absolute bottom-0 inset-x-0 bg-gradient-to-t from-wht/5 to-blk'></div>
    </motion.div>
  )
}
