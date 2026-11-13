import reactCoreConceptsImg from "../assets/react-core-concepts.png";

const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}

export default function Header(props) {
  return (
    <header>
      <img src={reactCoreConceptsImg} alt="Stylized atom" />
      <h1>{props.title} Essentials</h1>
      <p>
        {titles[getRandomInt()]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}
