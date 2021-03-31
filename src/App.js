import { useState } from "react";
import ExcelDownloads from "./ExcelDownload";

import "./App.css";
import UseLocalStorageState from "./useLocalStorage";

const App = () => {
  const [phone, setPhone] = useState();

  const data = JSON.parse(localStorage.getItem("data")) ?? [];

  const dataExcel = () => {
    return data.map((res, index) => {
      return {
        id: index + 1,
        phone: res,
      };
    });
  };
  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:92/randomphonenumbers/?phone=${phone}`)
      .then((res) => res.json())
      .then((record) =>
        record.result.forEach((ele) => UseLocalStorageState(ele))
      );
  };

  const renderTableData = () => {
    return data.map((phone, index) => {
      return (
        <>
          <tr key={index}>
            <td>{phone}</td>
          </tr>
        </>
      );
    });
  };
  console.log(JSON.parse(localStorage.getItem("data"))?.length);
  const dataRender = dataExcel();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Filtro para buscar telefonos</h1>
        <form onSubmit={onSubmit}>
          <label>Codigo de area: </label>
          <input type="number" onChange={handleChange} />
          <label>prefijo: </label>
          <input type="number" onChange={handleChange} min={200} max={500} />
          <input type="submit" />
        </form>
        <ExcelDownloads data={dataRender} />
        {`Existen: ${
          JSON.parse(localStorage.getItem("data"))?.length ?? 0
        } filas de numero telefonicos.`}
        <table id="phones">
          <thead>
            <tr>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </header>
    </div>
  );
};

export default App;
