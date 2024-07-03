import {Component} from 'react'
import LanguagesFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeElementId: languageFiltersData[0].id,
    repositoryData: [],
  }

  componentDidMount = () => {
    this.getPopularLanguages()
  }

  getPopularLanguages = async () => {
    const {activeElementId} = this.state

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeElementId}`
    const response = await fetch(apiUrl)

    if (response.ok) {
      const fetchData = await response.json()
      const languagesData = fetchData.popular_repos.map(eachRepository => ({
        id: eachRepository.id,
        name: eachRepository.name,
        imageUrl: eachRepository.avatar_url,
        issueCount: eachRepository.issues_count,
        forksCount: eachRepository.forks_count,
        starsCount: eachRepository.stars_count,
      }))
      this.setState({
        repositoryData: languagesData,
      })
    }
  }

  renderRepositoriesListView = () => {
    const {repositoryData} = this.state
    return (
      <ul className="repository-list">
        {repositoryData.map(eachRepository => (
          <RepositoryItem
            eachRepository={eachRepository}
            key={eachRepository.id}
          />
        ))}
      </ul>
    )
  }

  renderLanguagesFilterItem = () => {
    const {activeElementId} = this.state
    return (
      <ul className="events-list-container">
        {languageFiltersData.map(eachFilterItem => (
          <LanguagesFilterItem
            eventDetails={eachFilterItem}
            key={eachFilterItem.id}
            setActiveElementId={activeElementId}
            isActive={eachFilterItem.id === activeElementId}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="popular-heading">Popular</h1>
        {this.renderLanguagesFilterItem()}
        {this.renderRepositoriesListView()}
      </div>
    )
  }
}
export default GithubPopularRepos
