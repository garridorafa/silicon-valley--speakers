import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SpeakerSearchBar from '../SpeakerSearchBar/SpeakerSearchBar';
import Speaker from '../Speaker/Speaker';

const Speakers = () => {
  
  function toggleSpeakerFavorite(speakerRec) {
    return {
      ...speakerRec,
      isFavorite: !speakerRec.isFavorite,
    };
  }

  async function onFavoriteToggleHandler(speakerRec) {
    const toggleSpeakerRec = toggleSpeakerFavorite(speakerRec);
    const speakerIndex = speakers.map((speaker) => speaker.id).indexOf(speakerRec.id);

    await axios.put(`http://localhost:4000/speaker/${speaker.id}`, toggleSpeakerRec);
    setSpeakers
      ([...speakers.slice(0,speakerIndex), toggleSpeakerRec, ...speakers.slice(speakerIndex + 1)]);
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [speakers, setSpeakers] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const res =  await axios.get("http://localhost:4000/speakers");
      setSpeakers(res.data);
    }
    fetchData();
  },[])

  return (
    <div>
      <SpeakerSearchBar searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
         />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {speakers
          .filter(rec => {
            const targetString = `${rec.firstName} ${rec.lastName}`.toLocaleLowerCase();
            return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLocaleLowerCase());
          })
          .map((speaker) => (
            <Speaker key={speaker.id} {...speaker} 
              onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}  />
        ))}
      </div>
    </div>
  );
};
export default Speakers;
