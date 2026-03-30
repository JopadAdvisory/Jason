import Hero from './sections/Hero';
import NavBar from './components/layout/Navbar';
import Reasons from './sections/Reasons';
import StoryDonation from './sections/storyDonation';
import Medicals from './sections/medicals';
import Hands from './sections/hands';
import Update from './sections/updates';
import FAQ from './sections/faq';
import Footer from './components/layout/Footer';
import './App.css'

function App() {
    return (
        <main className="app-Container">
            <NavBar />
            <Hero />
            <Reasons />
            <StoryDonation />
            <Medicals />
            <Hands />
            <Update />
            <FAQ />
            <Footer />
        </main>
    )
}

export default App
