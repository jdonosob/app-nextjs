import Image from 'next/image';
export default async function Home() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-2 flex flex-col items-center justify-items-center min-h-screen p-100">
          <div className="max-w-md space-y-4">
            <h2 className="text-2xl font-bold">Bienvenido a Vimyl</h2>
          </div>
          <Image 
            src="/logo.png" 
            alt="Vimyl Logo" 
            width={200} 
            height={200} 
            className="rounded" 
          />
        </div>
      </section>
    </div>
  );
}
