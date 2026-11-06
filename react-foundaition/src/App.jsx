import {CORE_CONCEPTS} from "./data.js"


const titles = ["fundamentials" , "crucial" , "core"]

function GetRandomInt(){ 
  return Math.floor(Math.random()* titles.lengths)
}




function Header() {
  return (
<header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {titles[GetRandomInt()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
function CoreConcepts(props){
return (
  <li>
    <img {props.img}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
)   
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id = "core-concepts">
          <ul>
            <CoreConcepts img={CORE_CONCEPTS[0].image}  title={CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description}/>
            <CoreConcepts img={CORE_CONCEPTS[1].image}  title={CORE_CONCEPTS[1].title} description = {CORE_CONCEPTS[1].description}/>
            <CoreConcepts img={CORE_CONCEPTS[2].image}  title={CORE_CONCEPTS[2].title} description = {CORE_CONCEPTS[2].description}/>
            <CoreConcepts img={CORE_CONCEPTS[3].image}  title={CORE_CONCEPTS[3].title} description = {CORE_CONCEPTS[3].description}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
