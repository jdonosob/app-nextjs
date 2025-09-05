// Testing API requests inside NextJS
// Backend logic

async function PostContact() {
    // When the requests is made with a server-side component it should have the full URL
    // The full URL is constructed using the NEXTJS_URL environment variable
    // The other way around, with a client-side component, it will use the relative URL (ex: /api/hello)
    const response = await fetch(`${process.env.NEXTJS_URL}/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "José" }),
    });
    const data = await response.json();
    console.log(data);
    return { data }
}

export default async function Contact() {
    const { data } = await PostContact();
    return (
        <div>
            <h1>Contact</h1>
            <p>{data.message}</p>
        </div>
    );
}
