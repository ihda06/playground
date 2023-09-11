

export const Card = ({children, className = ""}) => {
  return (
    <div className={"rounded-lg border border-neutral-300 shadow-sm "+(className)}>{children}</div>
  )
}
