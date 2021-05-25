import React, { Component } from 'react'
import Octocat from './components/Octocat'
import OctocatHeader from './components/OctocatHeader'

export class App extends Component {
  render() {
    return (
      <div>
        <OctocatHeader />
        <main>
          <section>
            <Octocat
              name="Terracottocat"
              number="149"
              image="https://octodex.github.com//images/Terracottocat_Single.png"
            />

            <article>
              <a href="https://octodex.github.com//octogatos/">
                <img
                  src="https://octodex.github.com//images/Octogatos.png"
                  width="400"
                  height="400"
                  alt="Octogatos"
                />
              </a>
              <ul>
                <li>
                  #148:
                  <a href="https://octodex.github.com//octogatos/">
                    <strong>Octogatos</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//sentrytocat/">
                <img
                  src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Sentrytocat"
                />
              </a>
              <ul>
                <li>
                  #143:
                  <a href="https://octodex.github.com//sentrytocat/">
                    <strong>Sentrytocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronmcefee">
                    <img
                      src="https://github.com/cameronmcefee.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//boxertocat/">
                <img
                  src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Boxertocat"
                />
              </a>
              <ul>
                <li>
                  #141:
                  <a href="https://octodex.github.com//boxertocat/">
                    <strong>Boxertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rubyjazzy">
                    <img
                      src="https://github.com/rubyjazzy.png"
                      width="24px"
                      height="24px"
                      alt="rubyjazzy"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//suftocat/">
                <img
                  src="https://octodex.github.com//images/surftocat.png"
                  width="400"
                  height="400"
                  alt="Surftocat"
                />
              </a>
              <ul>
                <li>
                  #140:
                  <a href="https://octodex.github.com//suftocat/">
                    <strong>Surftocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//scubatocat/">
                <img
                  src="https://octodex.github.com//images/scubatocat.png"
                  width="400"
                  height="400"
                  alt="Scubatocat"
                />
              </a>
              <ul>
                <li>
                  #138:
                  <a href="https://octodex.github.com//scubatocat/">
                    <strong>Scubatocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//dinotocat/">
                <img
                  src="https://octodex.github.com//images/dinotocat.png"
                  width="400"
                  height="400"
                  alt="Dinotocat"
                />
              </a>
              <ul>
                <li>
                  #130:
                  <a href="https://octodex.github.com//dinotocat/">
                    <strong>Dinotocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/kimestoesta">
                    <img
                      src="https://github.com/kimestoesta.png"
                      width="24px"
                      height="24px"
                      alt="kimestoesta"
                    />
                  </a>
                  <a href="https://github.com/heyhayhay">
                    <img
                      src="https://github.com/heyhayhay.png"
                      width="24px"
                      height="24px"
                      alt="heyhayhay"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//spidertocat/">
                <img
                  src="https://octodex.github.com//images/spidertocat.png"
                  width="400"
                  height="400"
                  alt="Spidertocat"
                />
              </a>
              <ul>
                <li>
                  #88:
                  <a href="https://octodex.github.com//spidertocat/">
                    <strong>Spidertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}
