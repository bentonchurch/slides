import { Link } from "react-router-dom";
import { Page } from "../components/Page.js";

function HomePage() { 
  return (
    <Page>
      <h1>Home</h1>
      <a href="import/">Import page</a>
    </Page>
  );
}

export { HomePage };
