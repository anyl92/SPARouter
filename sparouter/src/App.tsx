import './App.css'
import About from './about'
import Route from './component/route'

function App() {
  const router = (path: string) => {
    window.history.pushState("", null, path);
  };

  return (
    <div className="App">
      <Route path="/about" component={<About />} />
      <div onClick={() => router("about")}>about</div>
    </div>
  )
}

export default App
