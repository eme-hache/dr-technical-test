import { lazy } from 'react'

const Title = lazy(() => import('../Layout/Title'))
const Link = lazy(() => import('../Layout/Link'))

const About = () => {
  return (
    <article className='mb-6'>
      <Title type='h2'>
        About
      </Title>

      <p className='font-normal text-sm text-primary'>
        My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..
      </p>

      <Link>Read more</Link>
    </article>
  )
}

export default About
