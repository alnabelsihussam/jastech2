import React, { useState, useEffect } from "react";
import Axios from "axios";

// import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Layout/Header";
import SideNav from "../components/Layout/SideNav";

function Mitarbeiter() {
  const [mitarbeiterList, setMitarbeiterList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get/mitarbeiter").then((response) => {
      setMitarbeiterList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <section className="content">
        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SideNav />
            </div>

            <div className="col-md-9">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title"> Mitarbeiter </h3>
                </div>
                <h1>Mitarbeiter </h1>
                <div className="card">
                  <div className="card-header border-transparent">
                    <h3 className="card-title"> Alle Mitarbeiter </h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="table-responsive">
                      {/* // <div key={item.id} className="user">
                        //   {item.name}
                        // </div> */}

                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Vorname</th>
                            <th scope="col">geschlecht</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">phone</th>
                            <th scope="col">email</th>
                            <th scope="col">fachbereich</th>
                          </tr>
                        </thead>
                        {mitarbeiterList.map((item) => (
                          <tbody>
                            <tr>
                              <th scope="row">{item.id}</th>
                              <td>{item.name}</td>
                              <td>{item.vorname}</td>
                              <td>{item.geschlecht}</td>
                              <td>{item.Adresse}</td>
                              <td>{item.phone}</td>
                              <td>{item.email}</td>
                              <td>{item.fachbereich}</td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">11111</div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mitarbeiter;

//  {data.map((user) => (
//         <div className="user">{user}</div>
//       ))}
