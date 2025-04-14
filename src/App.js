import { Layout } from "./components/layout/index.js";
import Markdown from "react-markdown";

const markdown = `
# Welcome to WorshipHub!
The Benton Youth slides application.
`;

function App() {
  return (
    <Layout>
      <Markdown>{markdown}</Markdown>
    </Layout>
  );
}

export { App };
