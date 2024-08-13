import { Link } from 'react-router-dom'
import { Footer } from '../sections/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
// import emailjs from '@emailjs/browser'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // const handleSubmit = e => {
  // e.preventDefault()
  // emailjs
  //   .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
  //   .then(
  //     result => {
  //       console.log(result.text)
  //       alert('Message sent successfully!')
  //     },
  //     error => {
  //       console.log(error.text)
  //       alert('Failed to send message. Please try again.')
  //     }
  //   )
  // }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div
      className='overflow-hidden relative'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='flex overflow-hidden space-x-10 w-screen border-y border-primary opacity-30 absolute top-[40%] rotate-6'>
        <div className='flex whitespace-nowrap py-2 space-x-10 animate-loop-scrol'>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
        </div>
        <div
          aria-hidden='true'
          className='flex whitespace-nowrap py-2 space-x-10 animate-loop-scrol'
        >
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
          <span className='text-4xl text-primary font-bold'>CONTACT ME</span>
        </div>
      </div>{' '}
      <motion.section
        className='p-12 md:px-[120px]'
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to='/'
            className='transition-all flex items-center gap-3 text-sm sm:text-base font-semibold hover:text-primary group w-fit'
          >
            <div className='transition-all border-[1.5px] p-1 rounded-full w-fit h-fit group-hover:border-primary'>
              <svg
                className='transition-all stroke-wht group-hover:stroke-primary h-3 w-3 sm:h-4 sm:w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='m14 7l-5 5m0 0l5 5'
                ></path>
              </svg>
            </div>
            Home{' '}
          </Link>
        </motion.div>
        <motion.div
          className='flex flex-col mt-5 w-full'
          variants={containerVariants}
        >
          <motion.h1
            className='text-2xl sm:text-3xl font-bold tracking-wide'
            variants={itemVariants}
          >
            Let&apos;s work together!
          </motion.h1>
          <motion.p
            className='text-base sm:text-lg font-medium'
            variants={itemVariants}
          >
            Please fill out this short form and I will contact you.
          </motion.p>
          <motion.form
            onSubmit={}
            className='mt-5 flex flex-col gap-5'
            variants={containerVariants}
          >
            <motion.input
              type='text'
              name='name'
              placeholder='Name'
              className='input-contact'
              onChange={handleChange}
              variants={itemVariants}
            />
            <motion.input
              type='email'
              name='email'
              placeholder='Email Address'
              className='input-contact'
              onChange={handleChange}
              variants={itemVariants}
            />
            <motion.textarea
              placeholder='Type Your Message Here'
              className='textarea-contact'
              name='message'
              cols='30'
              rows='10'
              onChange={handleChange}
              variants={itemVariants}
            ></motion.textarea>
            <motion.button
              className='transition-all border-2 border-wht text-wht rounded-full py-4 font-semibold tracking-wider text-base hover:bg-wht hover:text-blk'
              type='submit'
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
      <Footer />
    </motion.div>
  )
}
