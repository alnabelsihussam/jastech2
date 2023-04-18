import React, { useState, useEffect } from "react";
import Axios from "axios";

//import Dashboard from "./Dashboard/Dashboard";
import Layout from "./Layout/Layout";
import SideNav from "./Layout/SideNav";
//import Header from "./Layout/Header";

const updateMitarbeiter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [vorname, setVorname] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [geschlecht, setGeschlecht] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Adresse, setAdresse] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [phone, setPhone] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fachbereich, setFachbereich] = useState("");

  const submit = () => {
    Axios.put("http://localhost:3002/api/mitarbeiter/update", {
      name: name,
      vorname: vorname,
      geschlecht: geschlecht,
      Adresse: Adresse,
      phone: phone,
      email: email,
      fachbereich: fachbereich,
    })
      .then((res) => {
        console.log(" successful insert ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>Update Mitarbeiter</h1>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <SideNav />
              </div>
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Update Mitarbeiter </h3>
                  </div>
                  <form
                    id="quickForm"
                    noValidate="novalidate"
                    onSubmit={submit}
                  >
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                          type="text"
                          name="name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Name "
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label>Vorname</label>
                        <input
                          type="text"
                          name="vorname"
                          onChange={(e) => {
                            setVorname(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Vorname "
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">geschlecht</label>
                        <input
                          type="text"
                          name="geschlecht"
                          onChange={(e) => {
                            setGeschlecht(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter setGeschlecht"
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label>Adresse</label>
                        <input
                          type="text"
                          name="Adresse"
                          onChange={(e) => {
                            setAdresse(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Adresse"
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">phone</label>
                        <input
                          type="text"
                          name="phone"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          name="phone"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label>fachbereich</label>
                        <input
                          type="text"
                          name="fachbereich"
                          onChange={(e) => {
                            setFachbereich(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Fachbereich"
                        />
                      </div>
                    </div>

                    <div className="card-footer">
                      <button
                        onClick={() => {
                          updateMitarbeiter(
                            name,
                            vorname,
                            geschlecht,
                            Adresse,
                            phone,
                            email,
                            fachbereich
                          );
                        }}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default updateMitarbeiter;
