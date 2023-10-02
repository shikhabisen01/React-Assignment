import Person from "./Person";
import OurButton from "./OurButton";
import Header from "./Header";
import List from "./List";

function App() {

  return(
  <>
    <Person name="Shikha" age="22" />
 
    <OurButton text="Press me" onClick={() => console.log("Button clicked")} />

    <Header title= "REACT ASSIGNMENT" />

    <List items={['one', 'two', 'three']} />


  

  </>  



  )
  
}

export default App;