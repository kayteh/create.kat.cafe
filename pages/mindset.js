import { Component } from 'react'
import CYOAPage from '../components/CYOAPage'
import { mindset } from '../data/cards.json'

export default class Mindset extends Component {
  render = () => (
    <CYOAPage
      title='Mindset'
      layoutClassName=''
      nextPage='/psych'
      stage={4}
      cards={mindset}
    >
      <h1 className='f3'>Mindset</h1>
      <p className='tj'>
        Ah, now this is exciting. We're always looking for ways to improve the quality and
        diversity of our catgirls. R&amp;D works hard coming up with interesting new creations.
        Now's when you get the chance to participate in the trial for a new adjustment to the
        formula. Participation in a trial is mandatory, but you do get to pick which one you get.
      </p>
    </CYOAPage>
  )
}
