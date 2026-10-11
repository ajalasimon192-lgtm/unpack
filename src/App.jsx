import { Nav } from "./components/nav"
import { Header } from "./components/Header"
import { AboutUs } from "./components/AboutUs"
import { Services } from "./components/Services"
import { ExpSection } from "./components/ExpSection"
import { WhyChoose } from "./components/WhyChoose"

function App() {

  return (
    <div className="w-full h-screen">
      <Nav />
      <Header />
      <AboutUs />
      <Services />
      <ExpSection />
      <WhyChoose />
    </div>
  )
}

export default App
