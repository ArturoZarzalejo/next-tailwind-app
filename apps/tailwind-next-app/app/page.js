import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <div className="p-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Link className="p-4" href="/user-profile">
          <h2>User Profile</h2>
        </Link>
      </div>
    </div>
  );
}
