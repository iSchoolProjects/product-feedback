import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Roadmapcard({ item }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/feedback/${item.id}`);
  };

  return (
    <div className={`card ${item.status}`} onClick={handleNavigation}>
      <div className="card-content">
        <div className="plans">
          <p className={`planned ${item.status}`}>
            <span></span>
          </p>
          {item.status}
        </div>
        <div className="info">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <div className="feature">
          <button>{item.category}</button>
        </div>
        <div className="impressions">
          <div className="upvotes">
            <img src="./assets/shared/icon-arrow-up.svg" alt="" />
            <p>{item.upvotes}</p>
          </div>
          <div className="comments">
            <img src="./assets/shared/icon-comments.svg" alt="" />
            <p>{item?.comments?.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
