import Cat from './components/Cat';
import Controlado from './components/Controlado';
import NoControlado from './components/NoControlado';

function App() {
  return (
    <>
      <div className="container py-5">
        <Cat className="mb-5"/>
        <h1>Formularios</h1>
        <Controlado/>
        {/* <NoControlado/> */}
      </div>
    </>
  )
}

export default App