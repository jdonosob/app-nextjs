import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">Vimyl</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/catalog" className="hover:text-blue-500">Catalog</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
      <div></div>
    </nav>
  );
};