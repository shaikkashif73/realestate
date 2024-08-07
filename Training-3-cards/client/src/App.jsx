import './App.css'
import Card from './Card';

function App() {
  const cards = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
    { id: 5, title: "Card 5", content: "Content for Card 5" },
    { id: 6, title: "Card 6", content: "Content for Card 6" },
  ]

  console.log("First Total Count :", cards.length);

  const cardGenerator = () => {
     let id = cards.length + 1;
     let objCard = {
       id: id,
       title : "Card " + id,
       content: "Content for Card " + id
     }
     cards.push(objCard);
     console.log("button Total Count :", cards.length);

  }
  
  return (
    <>
      <div className='card-container'>

        {cards.map((card) => {
          return (
            <Card key={card.id} title={card.title} content={card.content}/>
          );
        })}
      </div>

      <button onClick={cardGenerator}>Card Generator</button>
    </>
  )
}

export default App
