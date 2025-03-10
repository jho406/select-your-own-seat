import React from 'react'
import RailsTag from '@jho406/breezy/components/RailsTag'

export default class extends React.Component {
  render() {
    const {
      floors,
    } = this.props

    return (
      <nav className="syos-frame__floor-nav syos-floor-nav">
        <div className="syos-floor-nav__header">
          <p className="syos-u-margin-bottom-3 syos-u-font-weight-bold">
            Floors
          </p>
        </div>

        <div className="syos-floor-nav__diagram-wrapper">
          <ul className="syos-block-stack">
            {
              floors.map(({activeLink}) => (
                <li className="syos-block-stack__item">
                  <RailsTag html={activeLink} data-bz-visit={true} />
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    )
  }
}
