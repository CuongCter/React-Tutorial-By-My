
import './App.css'
import Button from './components/Button'
import ParentComponents from './components/ParentComponents'
import Profile from './components/Profile'

function App() {

  return (
    <>
     <section>
      <h1>Amazing scientists</h1>
      <Profile color={`red`}/>
      <Profile/>
      <ParentComponents/>
      <Button>Click hello</Button>
    </section>
    </>
  )
}

export default App
