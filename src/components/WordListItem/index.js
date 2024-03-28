import './index.css'

export default function WordListItem(props) {
  const {wordDetails} = props
  const {userInput} = wordDetails
  return (
    <li>
      <p>{`${userInput}: ${userInput.length}`}</p>
    </li>
  )
}
