import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import WordListItem from './components/WordListItem/index'
import './App.css'

// Replace your code here
const App = () => {
  const [userInput, setUserInput] = useState('')
  const [wordsList, setWordsList] = useState([])

  const submitTheUserInput = event => {
    event.preventDefault()
    const details = {
      id: uuidv4(),
      userInput,
    }

    setWordsList(prevState => [...prevState, details])
    setUserInput('')
  }

  console.log(wordsList)

  return (
    <div className="bg-container">
      <div className="user-content-container">
        <div className="content-heading-container">
          <h1 className="view-heading-element">
            Count the characters like a Boss...
          </h1>
        </div>
        <div className="view-input-container">
          {wordsList.length !== 0 ? (
            <>
              <ul>
                {wordsList.map(eachItem => (
                  <WordListItem key={eachItem.id} wordDetails={eachItem} />
                ))}
              </ul>
            </>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            </>
          )}
        </div>
      </div>
      <div className="user-input-container">
        <h1 className="user-input-heading">Character Counter</h1>
        <div className="input-container">
          <form onSubmit={submitTheUserInput}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={event => setUserInput(event.target.value)}
              value={userInput}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
