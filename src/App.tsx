import Hero from './sections/Hero';
import NavBar from './components/layout/Navbar';
import Reasons from './sections/Reasons';
import './App.css'
import StoryDonation from './sections/storyDonation';
import Medicals from './sections/medicals';
import Hands from './sections/hands';
import Update from './sections/updates';
import FAQ from './sections/faq';

function App() {
    return (
        <div className="app-Container">
            <NavBar />
            <Hero />
            <Reasons />
            <StoryDonation />
            <Medicals />
            <Hands />
            <Update />
            <FAQ />
        </div>
    )
}

export default App
