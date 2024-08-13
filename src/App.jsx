import { useEffect, useRef, useState } from 'react'
import { NavBottom } from './components/NavBottom'
import { NavTop } from './components/NavTop'
import { LoaderHome } from './components/loaderHome/LoaderHome'
import { About } from './sections/About'
import { Footer } from './sections/Footer'
import { Home } from './sections/Home'

export default function App () {
  const appSect = useRef()
  const [num, setNum] = useState(0)
  const [scrollPos, setScrollPos] = useState(0)
  const [isAlreadyEntered, setIsAlreadyEntered] = useState(
    sessionStorage.getItem('isAlreadyEntered')
  )
  const [showNav, setShowNav] = useState(false)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (appSect.current) {
        setScrollPos(appSect.current.scrollTop)
      }
    }

    const currentAppSect = appSect.current
    if (currentAppSect) {
      currentAppSect.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (currentAppSect) {
        currentAppSect.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Fetch data from localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await localStorage.getItem('isAlreadyEntered')
        setIsAlreadyEntered(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  // Handle side effects based on isAlreadyEntered
  useEffect(() => {
    if (isAlreadyEntered === 'true') {
      setShowNav(true)
    } else {
      const timer = setTimeout(() => {
        setNum(50)
        setShowNav(true)
        localStorage.setItem('isAlreadyEntered', 'true')
      }, 3500)

      return () => clearTimeout(timer) // Cleanup timer on unmount
    }
  }, [isAlreadyEntered]) // Dependency array to run effect when isAlreadyEntered changes

  return (
    <div className='w-screen h-screen relative overflow-hidden'>
      {/* Conditionally render NavTop and NavBottom */}
      {showNav && <NavTop />}
      {showNav && <NavBottom />}
      <div
        className='flex flex-col transition-transform duration-1000 ease-in-out'
        style={{ transform: `translateY(-${num}%)` }}
      >
        {/* Komponen pertama */}
        {isAlreadyEntered === 'false' && <LoaderHome />}

        {/* Komponen kedua */}
        <div
          className='relative w-screen h-screen overflow-y-scroll overflow-x-hidden'
          ref={appSect}
        >
          <div className='absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-wht/5 to-blk/10'></div>
          {/* White Circle */}
          <div className='absolute left-0 top-0 -z-10 h-full w-full'>
            <div className='relative h-full w-full'>
              <div className='absolute h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-3xl'></div>
            </div>{' '}
          </div>

          <main>
            {/* Sections */}
            <Home isAlreadyEntered={isAlreadyEntered} isLoaderDone={showNav} />
            <About appSect={appSect} scrollPos={scrollPos} />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
