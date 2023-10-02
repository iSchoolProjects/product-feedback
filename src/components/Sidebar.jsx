import React from "react";

export default function Sidebar(label) {
  const pills = ["All", "UI", "UX", "Enchancement", "Bug", "Feature"];
  return (
    <aside>
      <div className="sidebar-header">
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>
      <div className="buttons">
        {pills.map((pill) => (
          <>
            <label htmlFor={pill}>{pill} </label>
            <input type="checkbox" label={label} name="maja" id={pill} />
          </>
        ))}
      </div>
      <div className="road-map">
        <div className="title">
          <h4>Roadmap</h4>
          <p>View</p>
        </div>
        <ul>
          <div>
            <li>Planed</li>
            <span>0</span>
          </div>
          <div>
            <li>In-progres</li>
            <span>0</span>
          </div>
          <div>
            <li>Live</li>
            <span>0</span>
          </div>
        </ul>
      </div>
    </aside>
  );
}
//praviom niz stringova BadghLabels
//kad provrtimo niz map ce praviti button i imace klasu da zna da li je
//aktivan ili ne
//da bi raidlo treba nam stejt, koji je prazan niz za pocetak, prazan niz je all
//klikom na odr element, mi toglujemo element u nizu, tj ako je el
//u nizu izbacujemo ga, a ako nije ubacujemo
//u momentu kad duzina niza bude ista kao duzina labela,ispraznicemo niz
//gdje radimo klase tu pitamo da li se eleemnt nalazi u stejtu i n osnovu toga dajemo klasu active
