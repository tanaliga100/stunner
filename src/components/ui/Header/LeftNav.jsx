import { navLinksHeader } from '../../../utils/constants';
import Logo from '../../shared/Logo';

export default function LeftNav() {
  return (
    <div className="flex items-center gap-3">
      <Logo />
      <ul className="flex space-x-4  justify-center items-center uppercase font-bold tracking-wider">
        {navLinksHeader.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="ml-5 mt-1.5 text-red-600 hover:text-white hover:underline hover:underline-offset-8  "
          >
            {item.name}
          </a>
        ))}
      </ul>
    </div>
  );
}
