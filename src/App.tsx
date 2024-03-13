import './App.css'
import Content from './components/content'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Loading } from './components/loading'
import { SideBar } from './components/sidebar'

function App() {
    return (
        <div className="App">
            <Loading />
            <Header />
            <Content />
            <SideBar />
            <Footer />
        </div>
    )
}

export default App
