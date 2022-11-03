import { lazy, Suspense } from 'react'

import dislike from './assets/Icons/dislike.svg'
import right from './assets/Icons/right.svg'
import star from './assets/Icons/star.svg'
import like from './assets/Icons/like.svg'

const Skeleton = lazy(() => import('./components/Layout/Skeleton'))
const Button = lazy(() => import('./components/Layout/Button'))

const Header = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(import('./components/Header'))
    }, 2000);
  })
})

const Location = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(import('./components/Location'))
    }, 2000);
  })
})

const About = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(import('./components/About'))
    }, 2000);
  })
})

const Interests = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(import('./components/Interests'))
    }, 2000);
  })
})

const Gallery = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(import('./components/Gallery'))
    }, 2000);
  })
})

const App = () => {
  return (
    <div className=' bg-slate-900'>
      <div className='min-h-screen relative flex justify-end items-end max-w-lg mx-auto'>
        <Button className='absolute z-10 top-10 left-10 bg-thin-gray border-1 border-thin-gray'>
          <img src={right} />
        </Button>

        <div className='fixed top-0 left-1/2 -translate-x-1/2 bg-cover background w-full h-[52vh] max-w-lg lg:rounded-t-[30px]' />

        <main className='bg-white rounded-t-[30px] lg:rounded-[30px] mt-[48vh] w-full px-10 pt-20 pb-10 relative'>
          <Suspense>
            <div className='absolute -top-[70px] left-1/2 -translate-x-1/2 max-w-lg flex items-center gap-6'>
              <Button
                className='bg-white drop-shadow-gray hover:animate-jump'
                variant='rounded'
                size='medium'
              >
                <img
                  src={dislike}
                />
              </Button>
              <Button
                className='bg-red drop-shadow-red mb-10 hover:animate-jump'
                variant='rounded'
                size='large'
              >
                <img
                  src={like}
                />
              </Button>
              <Button
                className='bg-white drop-shadow-gray hover:animate-jump'
                variant='rounded'
                size='medium'
              >
                <img
                  src={star}
                />
              </Button>
            </div>
          </Suspense>

          <Suspense fallback={<Skeleton className='mb-6 h-[52px]' />}>
            <Header />
          </Suspense>

          <Suspense fallback={<Skeleton className='mb-6 h-[44px]' />}>
            <Location />
          </Suspense>

          <Suspense fallback={<Skeleton className='mb-6 h-[108px]' />}>
            <About />
          </Suspense>

          <Suspense fallback={<Skeleton className='mb-6 h-[112px]' />}>
            <Interests />
          </Suspense>

          <Suspense fallback={<Skeleton className='mb-6 h-[365px]' />}>
            <Gallery />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default App
