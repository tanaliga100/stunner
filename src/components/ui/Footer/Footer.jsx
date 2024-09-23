import { navLinksFooter } from '../../../utils/constants';
import InstaIcon from '../../shared/Insta';
import Logo from '../../shared/Logo';
import TwitterIcon from '../../shared/Twitter';

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-evenly py-5 bg-black">
        <Column1 />
        <Column2 />
        <Column3 />
      </div>
      <div className="h-[40dvh] bg-black mx-auto flex pt-28 justify-center">
        <HoriBar />
        <LastRow />
      </div>
    </footer>
  );
}

const Column1 = () => {
  return (
    <div className="flex flex-col gap-3">
      <Logo isLanding />
      <LastRow />
    </div>
  );
};

const Column2 = () => {
  return (
    <section className="flex gap-5">
      <ul className="flex space-x-4 flex-col justify-center items-center uppercase font-bold tracking-wider">
        {navLinksFooter.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="ml-5 mt-1.5 text-red-600 hover:text-white hover:underline hover: +underline-offset-4 hover:decoration-2 "
          >
            {item.name}
          </a>
        ))}
      </ul>
      <ul className="flex space-x-4 flex-col justify-center items-center uppercase font-bold tracking-wider">
        {navLinksFooter.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="ml-5 mt-1.5 text-red-600 hover:text-white hover:underline hover: +underline-offset-4 hover:decoration-2 "
          >
            {item.name}
          </a>
        ))}
      </ul>
    </section>
  );
};

const Column3 = () => {
  return (
    <div className="flex flex-col gap-3 w-[25%] font-medium">
      <h1 className="text-xl">ABOUT KingsLanding</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
        alias, praesentium aut provident quibusdam blanditiis asperiores eos
        accusantium illum impedit repudiandae atque incidunt illo similique
      </p>
      <div className="flex gap-4">
        <TwitterIcon />
        <InstaIcon />
      </div>
    </div>
  );
};

const LastRow = () => {
  return (
    <div>
      <div>&copy; 2024 KingsLanding.All rights reserved.</div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const HoriBar = ({ className }) => {
  return <span className={className}></span>;
};
