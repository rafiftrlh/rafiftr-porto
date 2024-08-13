import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const About = ({ scrollPos }) => {
  const techStack = [
    { url: 'https://html.com/', icon: 'icons/icon-html.svg' },
    {
      url: 'https://sass-lang.com/documentation/syntax/',
      icon: 'icons/icon-scss.svg'
    },
    { url: 'https://tailwindcss.com/', icon: 'icons/icon-tailwindcss.svg' },
    {
      url: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
      icon: 'icons/icon-javascript.svg'
    },
    { url: 'https://react.dev/', icon: 'icons/icon-react.svg' },
    { url: 'https://expressjs.com/', icon: 'icons/icon-expressjs.svg' },
    { url: 'https://www.mysql.com/', icon: 'icons/icon-mysql.svg' },
    { url: 'https://www.prisma.io/', icon: 'icons/icon-prisma.svg' },
    { url: 'https://laravel.com/', icon: 'icons/icon-laravel.svg' },
    { url: 'https://git-scm.com/', icon: 'icons/icon-git.svg' }
  ]

  return (
    <section id='aboutSect' className='relative flex flex-col gap-24'>
      <img
        src='icons/two-memphis-circle.svg'
        alt=''
        className='w-44 absolute top-20 -left-20 animate-pulse'
      />
      <span
        className='text-7xl font-extrabold font-sans text-stroke absolute top-[24%] sm:top-[18%] md:top-[30%] lg:top-[25%] -right-[20%] sm:-right-[15%] md:-right-[5%] transform opacity-30'
        style={{ transform: `translateX(${-scrollPos * 0.2}px)` }}
      >
        ABOUT ME
      </span>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='relative mx-12 md:mx-[120px] mt-12 md:mt-[120px]'
      >
        <h1 className='font-outfit font-black text-xl md:text-3xl tracking-wide text-wht text-pretty'>
          Halo, I&apos;m Rafi — a{' '}
          <span className='text-primary'>Web Developer</span> based in Depok
        </h1>
        <p className='text-lg md:text-xl text-wht/70 text-pretty'>
          I enjoy learning new things and try to overcome new challenges while
          analyzing how I improved through them.
        </p>
      </motion.div>
      <div className='flex justify-between flex-col md:flex-row gap-y-5 px-12 md:px-[120px]'>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='text-wht/60 font-montserrat uppercase font-black tracking-wider text-lg md:text-xl lg:text-2xl'
        >
          <span className='font-montserrat text-primary'>“WITHOUT</span>{' '}
          SELF-DISCIPLINE, <br />
          SUCCESS <span className='font-montserrat text-primary'>IS</span>{' '}
          IMPOSSIBLE, <br />
          <span className='font-montserrat text-primary'>AND EVERY</span> MOMENT
          WASTED <br />
          <span className='font-montserrat text-primary'>IS</span> MONEY LOST.”
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: '1', ease: 'easeOut' }}
          className='grid grid-cols-2 gap-4 relative w-40 h-40 place-items-center p-5 self-end'
        >
          <img
            src='/icons/two-memphis-square.png'
            alt=''
            className='absolute -z-10'
          />
          <Link target='_blank' to='https://www.instagram.com/rafi.ftrlh/'>
            <FaInstagram className='text-2xl transition-all hover:fill-primary size-8 md:size-9' />
          </Link>
          <Link target='_blank' to='https://github.com/rafiftrlh'>
            <AiFillGithub className='text-2xl transition-all hover:fill-primary size-8 md:size-9' />
          </Link>
          <Link
            target='_blank'
            to='https://www.linkedin.com/in/rafi-fitrotulloh-2b736928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
          >
            <AiFillLinkedin className='text-2xl transition-all hover:fill-primary size-8 md:size-9' />
          </Link>
          <Link target='_blank' to='mailto:rafifitro89@gmail.com'>
            <MdOutlineAlternateEmail className='text-2xl transition-all hover:fill-primary size-8 md:size-9' />
          </Link>
        </motion.div>
      </div>
      <div className='flex overflow-hidden space-x-10 w-screen border-y border-[#262626] mb-12 md:mb-[120px] relative'>
        <div className='absolute w-10 inset-y-0 bg-gradient-to-r from-blk to-transparent z-20 left-0'></div>
        <div className='absolute w-10 inset-y-0 bg-gradient-to-l from-blk to-transparent z-20 right-0'></div>
        <div className='flex whitespace-nowrap py-5 space-x-10 animate-loop-scrol'>
          {Array(8)
            .fill()
            .map((_, outerIndex) =>
              techStack.map((tech, index) => (
                <Link
                  key={`${outerIndex}-${index}`}
                  to={tech.url}
                  className='flex-shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all w-10 sm:w-12 md:w-14'
                >
                  <img src={tech.icon} alt='' />
                </Link>
              ))
            )}
        </div>
      </div>
    </section>
  )
}
