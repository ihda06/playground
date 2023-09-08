

export const Container = ({ children, className }) => {
  return (
    <div className={`mt-20 mb-10 lg:mt-0 p-8 ${className}`}>{children}</div>
  )
}
