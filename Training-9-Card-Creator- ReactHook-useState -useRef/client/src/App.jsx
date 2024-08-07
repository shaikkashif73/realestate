import './App.css'
import { useState } from 'react';
import Card from './Card';
import Form from './Form';


function App() {

  const [cards, setCards] = useState([]);

  const cardGenerator = (name, age) => {
    let id = cards.length + 1;
    

    let objNewCard = {    
      title: name,
      content: age
    }
    
    setCards([...cards, objNewCard])
   

  }

  return (
    <>
    <Form cardGenerator={cardGenerator}/>
      <div className='app'>

      {/* <button onClick={cardGenerator}>Card Generator</button> */}
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
