import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <article>
        <a href="https://octodex.github.com//terracottocat/">
          <img
            src={this.props.image}
            width="400"
            height="400"
            alt="Terracottocat"
          />
        </a>
        <ul>
          <li>
            #{this.props.number}:
            <a href="https://octodex.github.com//terracottocat/">
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/chubbmo">
              <img
                src="https://github.com/chubbmo.png"
                width="24px"
                height="24px"
                alt="chubbmo"
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

export default Octocat
