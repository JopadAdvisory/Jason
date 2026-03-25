import Hero from './sections/Hero';
import NavBar from './components/layout/Navbar';
import Reasons from './sections/Reasons';
import './App.css'
import StoryDonation from './sections/storyDonation';

function App() {
    return (
        <div className="app-Container">
            <NavBar />
            <Hero />
            <Reasons />
            <StoryDonation />
        </div>
    )
}

export default App
