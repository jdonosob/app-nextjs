import { notFound } from "next/navigation";

async function fetchItemData(itemId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
   if (!res.ok) {
       return null;
   }
    const item = await res.json();
    return item;
}

export default async function CatalogItem({params}: {params: Promise<{itemId: string}>}) {
    const { itemId } = await params;
    const item = await fetchItemData(itemId);

    if (!item) {
        notFound();
    }

    return (
        <div>
            <h1>Catalog Item: {item.title}</h1>
            <p>{item.body}</p>
        </div>
    );
}