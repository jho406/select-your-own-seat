import React from 'react'
import SeatDialog from 'components/SeatDialog'
import Cart from 'components/Cart'
import SeatFilter from 'components/SeatFilter'
import SeatingMap from 'components/SeatingMap'
import SeatingLegend from 'components/SeatingLegend'
import FloorSwitcher from 'components/FloorSwitcher'
import Layout from 'components/Layout'

export default (props) => {
  const {
    venueName,
    sections,
    cart,
    seatingMap,
    seat,
    floors,
    filters,
    setMaximum,
    pageKey,
  } = props

  const handleFilter = (event, maximum) => {
    setMaximum(pageKey, maximum)
    event.stopPropagation()
  }

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
            <FloorSwitcher floors={floors}/>
            <SeatingLegend />
            <SeatingMap {...seatingMap} />
          </div>
          <div className="syos-frame__sidebar">
            <SeatFilter {...filters} onFilter={handleFilter}/>
            <Cart cart={cart} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
