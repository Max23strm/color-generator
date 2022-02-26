import React, {useState} from "react";
import './App.css';
import Values from "values.js";
import AreaColores from "./components/AreaColores";

function App() {

  const [color, setColor]=useState("")
  const [error, setError]=useState(false)
  const [list, setList]=useState(new Values ("#FF7777").all(10))

  const handleSubmit=(e)=>{
    e.preventDefault()
    try{
      let colors=new Values(color).all(10)
      setList(colors)
    }catch(err){
      setError(true)
    }
  }
  return (
    <section className="App">
      <header>
      <h2>Color generator</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Escribe un color"
          onChange={(e)=>setColor(e.target.value)} 
          className={`${error? "error": null}`} />
        <button
          type="submit">
          Buscar colores
          </button>
      </form>

      </header>
      <AreaColores lista={list}/>
    </section>
  );
}

export default App;
