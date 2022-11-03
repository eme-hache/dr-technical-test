interface ILinkProps {
  children?: React.ReactNode
}

const Link: React.FC<ILinkProps> = ({ children }) => {
  return (
    <a className='font-bold text-sm text-red' href='#'>
      {children}
    </a>
  )
}

export default Link
