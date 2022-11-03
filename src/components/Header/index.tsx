import { lazy } from 'react'

import send from '../../assets/Icons/send.svg'

const Button = lazy(() => import('../Layout/Button'))
const Title = lazy(() => import('../Layout/Title'))

const Header = () => {
  return (
    <header className='flex justify-between mb-6'>
      <div>
        <Title className='font-Sk-Modernist'>
          Jessica Parker, 23
        </Title>
        <p className='font-normal text-sm font-Sk-Modernist text-primary'>
          Professional model
        </p>
      </div>

      <Button
        className='border-[1px] border-thin-gray flex justify-center items-center w-[52px] h-[52px]'
        variant='square'
      >
        <img className='object-contain' src={send} />
      </Button>
    </header>
  )
}

export default Header
