interface IPropType {
  [key: string]: string
}

interface ButtonProps {
  size?: string
  variant?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

const VARIANTS: IPropType = {
  square: 'rounded-2xl',
  rounded: 'rounded-full'
}

const SIZES: IPropType = {
  small: 'w-[52px] h-[52px]',
  medium: 'w-[78px] h-[78px]',
  large: 'w-[99px] h-[99px]'
}

const Button: React.FC<ButtonProps> = ({ size = 'small', variant = 'square', background, className, children }) => {
  return (
    <button
      className={`${className} ${VARIANTS[variant]} ${SIZES[size]} flex justify-center items-center`}
    >
      {children}
    </button>
  )
}

export default Button
