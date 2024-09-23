import Logo from '../../shared/Logo';

export default function Landing() {
  return (
    <div className="relative h-[50dvh] bg-black flex justify-center flex-col m-auto items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-30 z-0" />

      <h3 className="uppercase text-[#FFBC48] z-10">Welcome to</h3>
      <Logo isLanding />
      <p className="w-[80%] tracking-widest text-xl justify-center flex items-center font-medium mt-10 z-10 ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
  );
}
