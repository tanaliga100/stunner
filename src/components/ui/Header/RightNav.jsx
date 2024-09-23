import { CircleUserRound, SearchIcon } from 'lucide-react';
import Button from '../../shared/Button';
import InstaIcon from '../../shared/Insta';
import TwitterIcon from '../../shared/Twitter';

export default function RightNav() {
  return (
    <main className="flex items-center gap-3">
      <SearchIcon />
      <span className="h-full w-3 flex items-center text-white"> | </span>
      <TwitterIcon />
      <InstaIcon />
      <section className="ml-5 flex gap-6">
        <Button className="w-[10dvw] items-center justify-center flex gap-2 border-2 border-red-500 font-bold p-1 uppercase tracking-wider">
          <CircleUserRound />
          Login
        </Button>
        <Button className="w-[10dvw] justify-center text-white bg-red-700 p-1 tracking-wider font-bold uppercase rounded-md ">
          Join Now
        </Button>
      </section>
    </main>
  );
}
