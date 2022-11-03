import { useState, useId } from 'react'

import done from '../../assets/Icons/done.svg'

interface ICheckboxProps {
  children?: React.ReactNode
  checked?: boolean
}

const Checkbox: React.FC<ICheckboxProps> = ({ children, checked = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)
  const id = useId()

  const toggleCheckbox = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(evt.target.checked)
  }

  return (
    <label
      className={`${isChecked ? 'border-red' : 'border-thin-gray'} w-[92px] h-[32px] bg-white border-1  rounded-md flex justify-center items-center gap-1 relative overflow-hidden`}
      htmlFor={id}
    >
      <input
        className='hidden'
        id={id}
        type='checkbox'
        checked={isChecked}
        onChange={toggleCheckbox}
      />

      <div className={`${isChecked ? 'visible' : 'hidden'} transition-all`}>
        <img
          className={`w-4 h-4 z-10`}
          src={done}
        />
      </div>

      <span className={`${isChecked ? 'font-bold text-red' : 'font-normal text-primary'} text-sm transition-all`}>
        {children}
      </span>
    </label>
  )
}

export default Checkbox
