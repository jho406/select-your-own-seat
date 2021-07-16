import React from 'react'
import SeatDialog from 'components/SeatDialog'
import Cart from 'components/Cart'
import Layout from 'components/Layout'

const buildSectionElements = (sections) => {
  return sections.map((section) => {
    const seatElements = section.seats.map((seat) => (
      <a
        href={seat.venueFloorSeatPath}
        aria-label={seat.ariaLabel}
       >
        <svg width="12px" height="12px" viewBox="0 0 24 24" x={seat.x} y={seat.y}>
          <circle fill="#37b24d" r="12" cx="12" cy="12"></circle>
          <circle fill="#ffffff" r="6" cx="12" cy="12"></circle>
        </svg>
      </a>
    ))

    return <g>{seatElements}</g>
  })
}

export default (props) => {
  const sectionElements = buildSectionElements(sections)
  const {
    venueName,
    sections,
    cart,
    seat,
  } = props

  return (
    <Layout {...props}>
      <SeatDialog {...seat} />
      <header className="syos-site-frame__header syos-site-header">
        <p className="syos-site-header__subtext">
          Venue Name
        </p>
      </header>

      <main className="syos-site-frame__main">
        <section
          className="syos-frame"
        >
          <div className="syos-frame__map">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="syos-seat-map"
              width="1600px"
              height="1600px"
              viewBox="0 0 1600 1600"
            >
              <rect fill="none" x="0" y="0" width="1600" height="1600"></rect>
              { sectionElements }
            </svg>
          </div>

          <div className="syos-frame__sidebar">
            <Cart cart={cart} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
