import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

// import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Layout/Header";
import SideNav from "../components/Layout/SideNav";

function Geräte() {
  const [geratList, setGeratList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get/gerat").then((response) => {
      setGeratList(response.data);
      console.log(response.data);
    });
  }, []);

  const deleteItem = (id) => {
    Axios.delete(`http://localhost:3002/api/gerat/delete/${id}`).then(() => {
      Axios.get("http://localhost:3002/api/get/gerat").then((response) => {
        setGeratList(response.data);
      });
    });
  };

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
                  <h3 className="card-title"> Geräten </h3>
                </div>
                <div className="d-flex justify-content-end pr-3">
                  <Link to="/AddGereat" className="nav-link active">
                    <button
                      type="button"
                      className="btn btn-block btn-success btn-lg"
                    >
                      AddGerät
                    </button>
                  </Link>
                </div>
                <h1>Geräte </h1>
                <div className="card">
                  <div className="card-header border-transparent">
                    <h3 className="card-title"> Alle Geräten </h3>
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
                            <th scope="col">Gereatetyp</th>
                            <th scope="col">Beschreibung</th>
                            <th scope="col">Datum</th>
                            <th scope="col">Mitarbeiter</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        {geratList.map((item) => (
                          <tbody>
                            <tr>
                              <th scope="row">{item.id}</th>
                              <td>{item.name}</td>
                              <td>{item.gereatetyp}</td>
                              <td>{item.beschreibung}</td>
                              <td>{item.datum}</td>
                              <td>{item.name}</td>
                              <td className="row">
                                <div>
                                  <button
                                    onClick={(id) => {
                                      deleteItem(item.id);
                                    }}
                                    type="button"
                                    className="btn btn-block btn-danger btn-xs"
                                  >
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-block btn-primary btn-xs"
                                  >
                                    Update
                                  </button>
                                </div>
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

export default Geräte;

//  {data.map((user) => (
//         <div className="user">{user}</div>
//       ))}
