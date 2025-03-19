function Page({ title, children }) {
  return (
    <main class="body-column">
        {title && <h1>{ title }</h1>}
        {children}
    </main>
  );
}

export { Page };
