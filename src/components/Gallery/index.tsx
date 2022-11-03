import { lazy } from 'react'

import g1 from '../../assets/Gallery/g-1.svg'
import g2 from '../../assets/Gallery/g-2.svg'
import g3 from '../../assets/Gallery/g-3.svg'
import g4 from '../../assets/Gallery/g-4.svg'
import g5 from '../../assets/Gallery/g-5.svg'

const Link = lazy(() => import('../Layout/Link'))
const Title = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(import('../Layout/Title'))
    }, 3000);
  })
})

const Gallery = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Title type='h2' className='mb-3'>
          Gallery
        </Title>

        <Link>See all</Link>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='grid grid-cols-2 gap-3'>
          <img className='w-full object-cover' src={g1} />
          <img className='w-full object-cover' src={g2} />
        </div>

        <div className='grid grid-cols-3 gap-3'>
          <img className='w-full object-cover' src={g3} />
          <img className='w-full object-cover' src={g4} />
          <img className='w-full object-cover' src={g5} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
