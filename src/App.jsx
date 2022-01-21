import { Outlet } from "react-router";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <section className="container my-4">
        <Outlet />
      </section>
    </>
  );
}

export default App;
