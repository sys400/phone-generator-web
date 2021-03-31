import React from "react";
import ExportExcel from "react-export-excel";

const ExcelDownload = ({ data }) => {
  const ExcelFile = ExportExcel.ExcelFile;
  const ExcelSheet = ExportExcel.ExcelFile.ExcelSheet;
  const ExcelColumn = ExportExcel.ExcelFile.ExcelColumn;

  return (
    <div>
      <ExcelFile
        element={<button>Exportar a Excel</button>}
        filename={`GeneratorNumber-${data?.length}`}
      >
        <ExcelSheet data={data} name="Detalle de facturas">
          <ExcelColumn label="ID" value="id" />
          <ExcelColumn label="Numero Telefonico" value="phone" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default ExcelDownload;
