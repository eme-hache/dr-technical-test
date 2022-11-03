import { lazy } from 'react'

const Checkbox = lazy(() => import('../Layout/Checkbox'))
const Title = lazy(() => import('../Layout/Title'))

const Interests = () => {
  return (
    <section className='mb-6 flex flex-col'>
      <Title type='h2' className='mb-2'>
        Interests
      </Title>

      <div className='flex-1 flex flex-wrap gap-3'>

        <Checkbox checked>Traveling</Checkbox>
        <Checkbox checked>Books</Checkbox>
        <Checkbox>Music</Checkbox>
        <Checkbox>Dancing</Checkbox>
        <Checkbox>Modeling</Checkbox>
      </div>
    </section>
  )
}

export default Interests
