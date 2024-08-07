import './App.css'
import { useState } from 'react';
import Card from './Card';

function App() {

  // const cards = [
  //   { id: 1, title: "Card 1", content: "Content for Card 1" }
  // ]

  const [cards, setCards] = useState([]);

  

  const cardGenerator = () => {
    let id = cards.length + 1;
    let title = "Card " + id;
    let content = "Content for Card " + id

    let objNewCard = {
      id: id,
      title: title,
      content: content
    }
    // cards.push(objCard);
    setCards([...cards, objNewCard])
   

  }

  return (
    <>
      <div className='app'>
      <button onClick={cardGenerator}>Card Generator</button>
      <div className='card-container'>

        {cards.map((card) => {
          return (
            <Card key={card.id} title={card.title} content={card.content} />
          );
        })}
      </div>
      </div>
      


    </>
  )
}

export default App
