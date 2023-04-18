import React, { useState, useEffect } from "react";
import Axios from "axios";

//import Dashboard from "./Dashboard/Dashboard";
//import Layout from "./Layout/Layout";
import SideNav from "./Layout/SideNav";
//import Header from "./Layout/Header";
//import Mitarbeiter from "../Pages/Mitarbeiter";

// Add Gerät
const AddGereat = () => {
  const [name, setName] = useState("");
  const [gereatetyp, setGereatetyp] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [datum, setDatum] = useState("");
  const [mitarbeiterId, setmitarbeiterId] = useState("");

  const handleChange = (event) => {
    setmitarbeiterId(event.target.value);
  };

  const submit = () => {
    Axios.post("http://localhost:3002/api/insert/AddGereat", {
      name: name,
      gereatetyp: gereatetyp,
      beschreibung: beschreibung,
      datum: datum,
      mitarbeiterId: mitarbeiterId,
    })
      .then((res) => {
        console.log(" successful insert ");
        console.log(name, "gggggggg");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add Mitarbeiter Select

  const [mitarbeiterList, setMitarbeiterList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get/mitarbeiter").then((response) => {
      setMitarbeiterList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>AddGerät</h1>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <SideNav />
              </div>
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add Gerät </h3>
                  </div>
                  <form
                    id="quickForm"
                    noValidate="novalidate"
                    onSubmit={submit}
                  >
                    <div className="card-body">
                      <div className="form-group">
                        <label>Name</label>
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
                        <label>Gerätetyp</label>
                        <input
                          type="text"
                          name="gereatetyp"
                          onChange={(e) => {
                            setGereatetyp(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Gerätetyp "
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label>Beschreibung</label>
                        <input
                          type="text"
                          name="beschreibung"
                          onChange={(e) => {
                            setBeschreibung(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Beschreibung"
                        />
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-group">
                        <label>Datum</label>
                        <input
                          type="date"
                          name="datum"
                          onChange={(e) => {
                            setDatum(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Enter Adresse"
                        />
                      </div>
                    </div>

                    {/* <div className="card-body">
                      <div className="form-group">
                        <label>Mitarbeiter</label>

                        {mitarbeiterList.map((item) => (
                          <select
                            className="custom-select form-control-border"
                            name="mitarbeiterId"
                          >
                            <option value="{item.name}">{item.name}</option>
                          </select>
                        ))}
                      </div>
                    </div> */}
                    <div className="card-body">
                      <div className="form-group">
                        <label>Mitarbeiter</label>

                        <select
                          onChange={handleChange}
                          className="custom-select form-control-border"
                          name="mitarbeiterId"
                        >
                          <option selected> select Mitarbeiter</option>
                          {mitarbeiterList.map((item) => (
                            <option value={item.id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button
                        onClick={() => submit}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Submit
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

export default AddGereat;
