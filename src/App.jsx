import './App.css'
import backgroundColor from './component/backgroundcolor'
import Counter from './component/counter'
import Input from './component/input'
import Nama from './component/name'

function App() {

  return (
    <div className="App">
      <Input />
      <Nama nama="Adrian Reynaldi" npm="2428250011" github="https://github.com/Thzvin" />
      <Counter />
      <Rcolor />
    </div>
  )
}

export default App
