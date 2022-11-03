interface ISkeletonProps {
  className?: string
}

const Skeleton: React.FC<ISkeletonProps> = ({ className }) => {
  return (
    <div className={`${className} bg-slate-200 animate-pulse rounded w-full mx-auto min-h-[20px]`}>
    </div>
  )
}

export default Skeleton
