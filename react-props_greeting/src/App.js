import "./styles.css";

export default function App() {
  return <Greeting name="Jane Doe" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Andrea" ? "Coach" : name}!</h1>;
}
