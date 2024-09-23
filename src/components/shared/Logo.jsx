// eslint-disable-next-line react/prop-types
export default function Logo({ isLanding }) {
  return (
    <div className="flex font-sans">
      <span
        className={
          isLanding
            ? 'text-5xl font-extrabold text-red-600'
            : 'text-3xl font-bold  text-red-600'
        }
      >
        Kings
      </span>
      <span
        className={
          isLanding
            ? 'text-5xl font-extrabold  text-white'
            : 'text-3xl font-bold  text-white'
        }
      >
        Landings
      </span>
    </div>
  );
}
