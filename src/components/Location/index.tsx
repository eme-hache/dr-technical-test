import { lazy } from 'react'

import local from '../../assets/Icons/location.svg'

const Title = lazy(() => import('../Layout/Title'))

const Location = () => {
  return (
    <section className='mb-6 flex'>
      <div className='flex-1'>
        <Title type='h2'>
          Location
        </Title>

        <p className='font-normal text-sm text-primary'>
          Chicago, IL United States
        </p>
      </div>

      <div className='w-[61px] h-[34px] relative flex justify-center items-center gap-1'>
        <div
          className='absolute w-full h-full bg-red opacity-10 rounded-md'
        />
        <img
          className='w-[14px] h-[14px]'
          src={local}
        />
        <span className='text-xs text-red font-bold'>
          1 Km
        </span>
      </div>
    </section>
  )
}

export default Location
