import { HiDownload } from 'react-icons/hi'

export const Home = () => {
  return (
    <section
      id='homeSect'
      className='flex flex-col justify-center py-32 p-12 md:p-[120px]'
    >
      <h2 className='flex items-center gap-2 text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold'>
        <div className='w-5 sm:w-8 md:w-10 lg:w-12  border rounded-full'></div>
        RAFI FITROTULLOH
      </h2>
      <div className='relative w-fit'>
        <h1 className='transition-all text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>
          <span className='text-primary'>FRONTEND</span> <br /> AND{' '}
          <span className='text-primary'>BACKEND</span> <br />{' '}
          <span className='text-primary'>WEB</span> DEVELOPER
        </h1>
        <img
          src='/icons/memphis-circle.svg'
          alt=''
          className='absolute -z-10 bottom-0 -right-14 h-full'
        />
      </div>
      <div className='relative w-fit mt-10'>
        <img
          src='/icons/memphis-arrow.svg'
          alt=''
          className='absolute -z-10 -left-[150px] sm:-left-[170px] h-full'
        />
        <button
          className='transition-all flex items-center gap-5 border w-fit px-6 py-3 rounded-full hover:bg-wht hover:border-wht group'
          type='button'
        >
          <HiDownload className='transition-all size-4 sm:size-5 md:size-6 group-hover:fill-blk' />{' '}
          <span className='transition-all tracking-[7px] font-semibold text-sm sm:text-base md:text-lg group-hover:text-blk'>
            Download CV
          </span>
        </button>
      </div>
      <img
        src='/icons/memphis-wave.svg'
        alt=''
        className='absolute -z-10 bottom-0 -right-10 h-[10%] md:h-[15%]'
      />
      {/* <div className="absolute inset-x-0 bottom-0 h-32  bg-gradient-to-b from-transparent to-blk"></div> */}
    </section>
  )
}
