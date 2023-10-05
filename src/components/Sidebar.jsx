import React, { useState, useEffect } from "react";

export default function Sidebar({ products, label, status }) {
  const [filters, setFilter] = useState([]);
  const [item, setItem] = useState();
  const getByStatus = () => {
    const newObject = {};
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
  const handleClick = (pill) => {
    let filteredData = [...filters];
    if (filters.includes(pill)) {
      filteredData = filteredData.filter((element) => element !== pill);
    } else {
      filteredData.push(pill);
    }
    if (pill === "All") filteredData = [];
    if (filteredData.length === pills.length - 1) filteredData = [];
    setFilter(filteredData);
  };
  //da li je pill all
  //handleClick funkcija koja prima naziv kliknutog elementa i radi
  // provjerava state koji se zove filters, ima li tog elementa
  // ako ima izbacuje ga, u suprotnom ga dodaje
  // nakon tih provjera, setuje filter state na nove vrijednosti
  //ptreban nam je state, prazan niz je pocetna vr
  console.log(filters);
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
              <label
                active={(
                  filters.includes(pill) ||
                  (pill === "All" && filters.length === 0)
                ).toString()}
                htmlFor={pill}
                onClick={() => handleClick(pill)}
              >
                {pill}{" "}
              </label>
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
