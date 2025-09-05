import ButtonComponent from "./button";

// Testing server-side rendering
export default async function Catalog() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return (
        <>
        <h1 className="font-bold text-2xl">Catalog</h1>
        <p>We are just started creating this page.</p>
        <ButtonComponent />
        <h2 className="font-bold text-xl">Posts - Testing API fetchs</h2>
        {/* Rendering a list of posts fetched from an external API */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: { id: number; title: string }) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
    );
}