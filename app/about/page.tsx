"use client"; // TAG to transform a server-side component into a client-side component

// There are features like the browser interactivity (like buttons) that cannot be executed with server-side rendering.
// so it should be created with client-side rendering.

// Server-side components are better for SEO because they are pre-rendered on the server and sent to the client as fully formed HTML.

// server-side components also provide a faster initial load time and can be cached more easily.
// And support async functions so they can fetch data on the server before rendering.

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>We are just started creating this page.</p>
    </>
  );
}
