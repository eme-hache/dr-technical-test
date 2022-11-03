interface ITitleProps {
  type?: string
  className?: string
  children?: React.ReactNode
}

const Title: React.FC<ITitleProps> = ({ type = 'h1', className, children }) => {
  return (
    <h1 className={`${className} ${type === 'h1' ? 'text-2xl' : 'text-md'} font-bold `}>
      {children}
    </h1>
  )
}

export default Title
