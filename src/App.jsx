import logo from './assets/Logo.png' // import your logo
import './App.css'
import Card from './components/Card'
import EmailAuthorization from './components/EmailAuthorization'

function App() {
  return (
    <div className="App">
      <div className='First'>
        <img className='logo' src={logo} alt='Logo' />
        <h2>Suite Of Business Support Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        <div className='contact'>
          <EmailAuthorization />
        </div>
      </div>
      <div className='Second'>
      <Card className="grid-item" Topic={`Presentation Design`} Image={`Analytics`}/>
      <Card className="grid-item" Topic={`Audio - Visual Production`} Image={`Audio_visual`} />
      <Card className="grid-item" Topic={`Translation Services`} Image={`Translate`} />
      <Card className="grid-item" Topic={`Graphic Design`} Image={`Graphic`} />
      <Card className="grid-item" Topic={`Research & Analytics`}  Image={`Research`} />
      <Card className="grid-item" Topic={`Data Processing`} Image={`Data-processing`} />
      </div>
      <div className='contact-mobile'>
          <EmailAuthorization />
      </div>
      
    </div>
  )
}

export default App
