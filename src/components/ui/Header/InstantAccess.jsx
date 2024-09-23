import { LockKeyholeOpen } from 'lucide-react';
import Button from '../../shared/Button';

export default function InstantAccess() {
  return (
    <Button className="flex items-center justify-center gap-3">
      <h1 className="flex items-center rounded-xl p-2 px-4 gap-2 text-4xl font-extrabold bg-gradient-to-b from-custom-yellow-1 to-custom-yellow-4 text-black">
        <LockKeyholeOpen size={50} />
        Get Instant Access
      </h1>
    </Button>
  );
}
