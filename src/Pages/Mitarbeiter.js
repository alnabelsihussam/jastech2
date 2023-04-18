import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

// import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Layout/Header";
import SideNav from "../components/Layout/SideNav";

function Mitarbeiter() {
  const [mitarbeiterList, setMitarbeiterList] = useState([]);
  // const [mitarbeiterListdelete, deleteMitarbeiterList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get/mitarbeiter").then((response) => {
      setMitarbeiterList(response.data);
      console.log(response.data);
    });
  }, []);

  const deleteItem = (id) => {
    Axios.delete(`http://localhost:3002/api/mitarbeiter/delete/${id}`).then(
      () => {
        Axios.get("http://localhost:3002/api/get/mitarbeiter").then(
          (response) => {
            setMitarbeiterList(response.data);
          }
        );
      }
    );
  };

  // const deleteItem = (id) => {
  //  Axios.delete(`http://localhost:3002/api/mitarbeiter/delete/${id}`);
  // };

  // deleteMitarbeiterList([...mitarbeiterListdelete, {}]);

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
                <div className="d-flex justify-content-end pr-3">
                  <Link to="/AddMitarbeiter" className="nav-link active">
                    <button type="button" className="btn btn-success btn-la">
                      Add Mitarbeiter
                    </button>
                  </Link>
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
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        {mitarbeiterList.map((item) => (
                          <tbody>
                            <tr>
                              <th key={item.id} scope="row">
                                {item.id}
                              </th>
                              <td>{item.name}</td>
                              <td>{item.vorname}</td>
                              <td>{item.geschlecht}</td>
                              <td>{item.Adresse}</td>
                              <td>{item.phone}</td>
                              <td>{item.email}</td>
                              <td>{item.fachbereich}</td>
                              <td className="row">
                                <button
                                  onClick={(id) => {
                                    deleteItem(item.id);
                                  }}
                                  type="button"
                                  className="btn btn-block btn-danger btn-xs"
                                >
                                  Delete
                                </button>

                                <Link
                                  to="/updateMitarbeiter"
                                  className="nav-link active"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-block btn-primary btn-xs"
                                  >
                                    Update
                                  </button>
                                </Link>
                              </td>
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
