// eslint-disable-next-line react/prop-types
export default function Button({ className, children, ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
