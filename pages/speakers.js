import Header from '../src/components/Header/Header'
import Menu from '../src/components/Menu/Menu'
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar'
import Speakers from '../src/components/Speakers/Speakers'
import Footer from '../src/components/Footer/Footer'

import SpeakerContext from '../src/components/Speakers/SpeakerContext'



function SpeakersPage() {

  const speakers = [
    {
      imageSrc: 'speaker-component-1',
      name: 'Douglas Crockford'
    },
    {
      imageSrc: 'speaker-component-2',
      name: 'Tamara Baker'
    },
    {
      imageSrc: 'speaker-component-3',
      name: 'Eugene Chuvyrov'
    }
  ];

  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContext.Provider value={speakers}>
        <SpeakerSearchBar />
        <Speakers />
      </SpeakerContext.Provider>
      <Footer />
    </div>
  )
}

export default SpeakersPage;