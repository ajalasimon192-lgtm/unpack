import { Nav } from "./components/nav"
import { Header } from "./components/Header"
import { AboutUs } from "./components/AboutUs"
import { Services } from "./components/Services"
import { ExpSection } from "./components/ExpSection"
import { WhyChoose } from "./components/WhyChoose"
import { Testimonials } from "./components/Testimonials"
import { Ad } from "./components/Ad"
import { News } from "./components/News"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="flex flex-col gap-30">
        <Header />
        <AboutUs />
        <Services />
        <ExpSection />
        <WhyChoose />
        <Testimonials />
        <Ad />
        <News />
        <Footer />
      </div>
    </div>
  )
}

export default App
