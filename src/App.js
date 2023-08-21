import {
  Header,
  Navbar,
  Divider,
  Projects,
  Techs,
  About,
  AboutHeader,
  Resume,
  ResumeDivider,
  ContactHeader,
  Contact,
  Footer,
} from "./components";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Divider />
      <Projects />
      <Techs />
      <AboutHeader />
      <About />
      <ResumeDivider />
      <Resume />
      <ContactHeader />
      <Contact />
      <Footer />
    </>
  );
}
