import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "components/ThemeToggler";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <aside className="flex flex-col absolute top-0 left-0 h-screen">
        <nav className="flex-1 w-80"></nav>
        <ThemeToggler className="absolute bottom-0 p-4 z-10"></ThemeToggler>
      </aside>
      <div className="relative ps-80 flex-1">
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
    </main>
  );
}
