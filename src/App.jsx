
import './App.css'
import Card from "./components/Card/Card"
import data from "./data.json"
function App() {

  return (
    <div className='w-[90%] flex flex-wrap gap-5'>
      {
        data.map((extesion, index)=>(
          <Card
          key={index}
          name={extesion.name}
          description={extesion.description}
          logo={extesion.logo}
          
          />
        ))
      }
    </div>
  )
}

export default App
