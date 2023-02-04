import "./App.css";
import Header from "./components/Header/Header";
import Countdown from "./components/Countdown/Countdown";
import Features from "./components/Features/Features";
import Courses from "./components/Courses/Courses";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletters from "./components/Newsletter/Newsletters";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Countdown />
      <Features />
      <Courses />
      <Pricing />
      <Testimonials />
      <Newsletters />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
