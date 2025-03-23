import { Navbar } from "./Navbar/index.js";

function Page({ title, children }) {
  return <>
    <Navbar />
    <main class="body-column use-default">
        {title && <h1>{ title }</h1>}
        {children}
    </main>
  </>;
}

export { Page };
