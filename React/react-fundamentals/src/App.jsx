import Section1 from "../components/Section1";
import Student from "../components/Student";

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Today we'll learn about JSX, Components, and props</p>

      <Section1 />
      <Section1 />
      <Section1 />

      <Student name="Maria" batch="2" />
      <Student name="Anne" batch="1" />
    </>
  );
}

export default App;
