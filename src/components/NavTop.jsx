import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const NavTop = () => {
  const [isHome, setIsHome] = useState(true)
  const [isAbout, setIsAbout] = useState(false)
  // const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      const aboutSection = document.getElementById('aboutSect')
      // const projectSection = document.getElementById("projectSect");

      const aboutSectionTop = aboutSection.offsetTop
      // const projectSectionTop = projectSection.offsetTop;

      setIsHome(scrollTop < aboutSectionTop)
      setIsAbout(scrollTop >= aboutSectionTop)
      // setIsProject(scrollTop >= projectSectionTop);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1.5,
        ease: 'easeOut'
      }}
      className='fixed top-5 left-1/2 -translate-x-1/2 w-full px-12 md:px-[120px] text-sm'
      style={{ zIndex: 999 }}
    >
      <div className='flex relative justify-end md:justify-between items-center'>
        {/* Start Nav */}
        <nav className='hidden md:inline-block bg-blk px-8 py-4 rounded-full border border-primary'>
          <ul className='flex items-center gap-5 h-full font-medium'>
            <li>
              <a
                href='#homeSect'
                className={`${
                  isHome ? 'link-navbar-active' : 'link-navbar'
                } text-nav`}
              >
                Home
              </a>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 17V7'
                ></path>
              </svg>
            </li>
            <li>
              <a
                href='#aboutSect'
                className={`${
                  isAbout ? 'link-navbar-active' : 'link-navbar'
                } text-nav`}
              >
                About
              </a>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 17V7'
                ></path>
              </svg>
            </li>
            <li>
              <a href='#' className='link-navbar text-nav'>
                Project
              </a>
            </li>
          </ul>
        </nav>
        {/* End Nav */}
        {/* Start Button to Page Contact */}
        <Link
          onClick={() =>
            window.scrollTo({
              top: 0
            })
          }
          to='/contact'
          className='transition-all flex items-center gap-5 py-2 bg-blk border border-primary rounded-full pr-2 pl-4 group hover:bg-wht'
        >
          <div className='flex items-center gap-2'>
            <svg
              className='fill-primary'
              xmlns='http://www.w3.org/2000/svg'
              width='2em'
              height='2em'
              viewBox='0 0 24 24'
            >
              <path d='M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 10a2 2 0 0 0-1.977 1.697l-.018.154L10 12l.005.15A2 2 0 1 0 12 10'></path>
            </svg>
            <span className='transition-all group-hover:text-blk text-nav'>
              Get in touch.
            </span>
          </div>
          <div className='transition-all bg-wht text-blk font-semibold px-6 py-2 rounded-full group-hover:bg-blk group-hover:text-wht text-nav'>
            Contact
          </div>
        </Link>
        {/* End Button to Page Contact */}
      </div>
    </motion.header>
  )
}
