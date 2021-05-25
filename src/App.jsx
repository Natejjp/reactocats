import React, { Component } from 'react'
import Octocat from './components/Octocat'
import OctocatHeader from './components/OctocatHeader'
import articles from './components/Cats.json'

export class App extends Component {
  render() {
    const newsArticlesFromData = articles.map(article => (
      <Octocat
        key={article.id}
        name={article.name}
        image={article.image}
        link={article.link}
        icon={article.icon}
      />
    ))
    return (
      <div>
        <OctocatHeader />
        <main>{newsArticlesFromData}</main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}
