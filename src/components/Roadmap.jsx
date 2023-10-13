import React, { useEffect, useState } from 'react';
import { data } from '../data';
import Roadmapcard from './Roadmapcard';
import { RoadmapMapEnum } from '../RoadmapMap';
export default function Roadmap({ item = data.productRequests }) {
  const [activeTab, setActiveTab] = useState('Planned');
  const [cards, setCard] = useState({});
  const getCard = () => {
    const newArray = {};

    for (const current of item) {
      if (newArray[current.status]) {
        newArray[current.status].push(current);
      } else {
        newArray[current.status] = [current];
      }
    }

    setCard(newArray);
  };
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    getCard();
  }, []);
  return (
    <>
      <div className="roadmap-holder">
        <div className="navigation">
          {Object.entries(cards).map(([key, card]) => (
            <button
              className={`${key === activeTab ? 'active-tab' : ''} ${key}`}
              onClick={() => handleClick(key)}
            >
              {key.replace('-', ' ')} ({card.length})
            </button>
          ))}
        </div>
        {Object.entries(cards).map(([key, card]) => (
          <div className="main-container">
            <div className="schedule">
              <h2>
                {key.replace('-', ' ')} ({card.length})
              </h2>

              <p> {RoadmapMapEnum[key]}</p>
            </div>

            {card.map((c) => (
              <Roadmapcard item={c} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

// {activeTab ? key === 'Planned' && <div>Tab 1 content</div>:
// <div>{card?.filter((item)=> activeTab===item['status']).map(({id,...rest})=><Roadmapcard {...{...
// }

//

// ?
