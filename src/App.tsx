import Hero from './sections/Hero';
import NavBar from './components/layout/Navbar';
import Reasons from './sections/Reasons';
import './App.css'

function App() {
    return (
        <div className="app-Container">
            <NavBar />
            <Hero />
            <Reasons />
        </div>
    )
}

export default App
