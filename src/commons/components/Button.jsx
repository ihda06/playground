export default function Button({ onClick, size = "sm", className, children }) {
  let sizes = {
    sm: " px-3 pb-1.5 pt-2 text-[7px]",
    md: " px-6 pb-2 pt-2.5 text-xs",
  };
  return (
    <div
      className={
        "inline-block rounded-full cursor-pointer shadow-md px-3 pb-1.5 pt-2 leading-normal font-semibold uppercase " +
        className +
        sizes[size]
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
}
