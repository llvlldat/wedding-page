import './App.css'
import Content from './components/content'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { SideBar } from './components/sidebar'

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <SideBar />
            <Footer />
        </div>
    )
}

export default App
