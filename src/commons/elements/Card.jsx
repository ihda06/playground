

export const Card = ({children, className = "", onClick}) => {
  return (
    <div className={"rounded-lg border border-neutral-300 shadow-sm "+(className)} onClick={onClick}>{children}</div>
  )
}
