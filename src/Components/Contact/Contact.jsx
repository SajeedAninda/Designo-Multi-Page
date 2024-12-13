import React from 'react'

const Contact = () => {
  return (
    <div className='pb-[340px]'>
      <div className='w-[1000px] mx-auto px-8 py-10 bg-[#e88069] rounded-2xl flex justify-between items-center'>
        <div className='flex-1'>
          <h2 className='text-[50px] font-medium text-white leading-[40px]'>
            Contact Us
          </h2>
          <p className='mt-8 text-white text-[16px]'>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <div className='flex-1 px-8'>
          <form>
            <div>
              <input
                className='w-full pl-6 py-4 bg-transparent text-white border-b border-white focus:border-b-4 focus:border-b-white focus:outline-none placeholder:text-gray-300 placeholder:font-medium'
                type='text'
                name='name'
                placeholder='Name'
                required
              />
            </div>

            <div>
              <input
                className='w-full mt-4 pl-6 py-4 bg-transparent text-white border-b border-white focus:border-b-4 focus:border-b-white focus:outline-none placeholder:text-gray-300 placeholder:font-medium'
                type='email'
                name='email'
                placeholder='Email'
                required
              />
            </div>

            <div>
              <input
                className='w-full mt-4 pl-6 py-4 bg-transparent text-white border-b border-white focus:border-b-4 focus:border-b-white focus:outline-none placeholder:text-gray-300 placeholder:font-medium'
                type='tel'
                name='phone'
                placeholder='Phone'
                required
              />
            </div>

            <div>
              <textarea
                className='w-full mt-4 pl-6 py-4 bg-transparent text-white border-b border-white focus:border-b-4 focus:border-b-white focus:outline-none placeholder:text-gray-300 placeholder:font-medium'
                name='message'
                id=''
                placeholder='Message'
                rows={3}
              ></textarea>
            </div>

            <div className='flex justify-end'>
              <button className='uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-white text-[#1c1b1d] hover:bg-[#ffac99] hover:text-white transition duration-500 ease-in-out'>
                Submit{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
