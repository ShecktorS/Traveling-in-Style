import "./Home.css";
import Header from "./components/header";
import Footer from "./components/footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="content">
        <h1>Content Home Page</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
