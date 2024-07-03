import './index.css'

const RepositoryItem = props => {
  const {eachRepository} = props
  const {
    name,
    id,
    issuesCount,
    forksCount,
    starsCount,
    imageUrl,
  } = eachRepository

  return (
    <li className="repository-languages">
      <div className="languages-container">
        <img src={imageUrl} alt="avatar" className="avatar-image" />
      </div>
    </li>
  )
}
export default RepositoryItem
