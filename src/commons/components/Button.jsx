export default function Button({ onClick , className, children }) {
  return (
    <div
      className={
        "inline-block rounded-full cursor-pointer shadow-md px-3 pb-1.5 pt-2 text-[7px] leading-normal font-semibold uppercase " +
        className
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
}
