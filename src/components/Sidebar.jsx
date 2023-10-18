import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";

export default function Sidebar({ products, label, status }) {
  const [filters, setFilter] = useState([]);
  const [item, setItem] = useState();
  const getByStatus = (products) => {
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
    getByStatus(products);
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

  const pills = ["All", "UI", "UX", "Enchancement", "Bug", "Feature"];
  return (
    <>
      <aside className="d-none d-md-flex">
        <div className="sidebar-header">
          <h3>Frontend Mentor</h3>
          <p>Feedback Board</p>
        </div>
        <Buttons
          label={label}
          filters={filters}
          handleClick={handleClick}
          pills={pills}
        />
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
              className="btn-close btn-close-white"
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
                  <Buttons
                    label={label}
                    filters={filters}
                    handleClick={handleClick}
                    pills={pills}
                  />
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
