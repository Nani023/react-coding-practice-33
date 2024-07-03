import './index.css'

const LanguagesFilterItem = props => {
  const {eventDetails} = props
  const {language} = eventDetails

  return (
    <li className="buttons-list">
      <button className="buttons" type="button">
        {language}
      </button>
    </li>
  )
}
export default LanguagesFilterItem
