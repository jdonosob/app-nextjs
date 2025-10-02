import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <div>
        <Link href="/">Vimyl</Link>
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/catalog" className="hover:text-blue-500">Catalog</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        <Link href="/products" className="hover:text-blue-500">Products</Link>
      </div>
      <div></div>
    </nav>
  );
};