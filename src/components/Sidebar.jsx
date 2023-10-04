import React, { useState, useEffect } from "react";

export default function Sidebar({ products, label, status }) {
  const [item, setItem] = useState();
  const getByStatus = () => {
    const newObject = {};
    console.log(products);
    for (const current of products) {
      if (newObject[current.status]) {
        newObject[current.status]++;
      } else {
        newObject[current.status] = 1;
      }
    }

    setItem(newObject);
  };
  useEffect(() => {
    getByStatus();
  }, []);
  const pills = ["All", "UI", "UX", "Enchancement", "Bug", "Feature"];
  return (
    <>
      <aside className="d-none d-md-flex">
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
            {/* link */}
          </div>
          <ul>
            {Object.entries(item ?? {}).map(([name, count]) => (
              <li className={name}>
                <span>{name}</span>
                <span>{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <nav className="d-md-none">
        <div className="navbar fixed-top">
          <div className="container-fluid">
            <div className="container-header">
              <h6>Frontend Mentor</h6>
              <p>Feedback Board</p>
            </div>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

            <button
              className="navbar-toggler d-md-none "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon navbar-toggler-icon-white "></span>
            </button>
            <div
              className="offcanvas-sm offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-body">
                {" "}
                <aside>
                  <div className="buttons">
                    {pills.map((pill) => (
                      <>
                        <label htmlFor={pill}>{pill} </label>
                        <input
                          type="checkbox"
                          label={label}
                          name="maja"
                          id={pill}
                        />
                      </>
                    ))}
                  </div>
                  <div className="road-map">
                    <div className="title">
                      <h4>Roadmap</h4>
                      <p>View</p>
                      {/* link */}
                    </div>
                    <ul>
                      {Object.entries(item ?? {}).map(([name, count]) => (
                        <li className={name}>
                          <span>{name}</span>
                          <span>{count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
//praviom niz stringova BadghLabels
//kad provrtimo niz map ce praviti button i imace klasu da zna da li je
//aktivan ili ne
//da bi raidlo treba nam stejt, koji je prazan niz za pocetak,
//  prazan niz je all
//klikom na odr element, mi toglujemo element u nizu,
// tj ako je el
//u nizu izbacujemo ga, a ako nije ubacujemo
//u momentu kad duzina niza bude ista kao duzina labe
// kroz niz u kojem se nalaze objekti sa statusom,
// na svaki prolaz postavljamo pitanje o objektu da li se
// dati status nalazi u tom objektu, ako se nalazi povecavamo
// vr za 1 a ako ne pravimo kljuc u objeektu sa vr koju nam
// daje status i dajemo inicijalnu vr 1

// pravimo state za iteme, kad se komponenta
// ucita pokrenucemo fiju getByStatus i njen rezultat upisujemo u state,
//  a sam state cemo ispisivati na mjestu gdje treba ispisati iteme
// kad setujemo state, posto znamo da je objekat, putem objectEntries
// cemo ispisati podatke, on vraca niz nizova, na taj metod
// vezujemo map da bi mogli ispisati
// pravimo state za iteme, kad se komponenta ucita pokrenucemo fiju
//getByStatus i njen rezultat upisujemo u state,
// a sam state cemo ispisivati na mjestu gdje treba ispisati iteme
// kad setujemo state, posto znamo da je objekat,
//putem objectEntries cemo ispisati podatke, on vraca niz nizova, na taj metod vezujemo map da bi mogli ispisati
