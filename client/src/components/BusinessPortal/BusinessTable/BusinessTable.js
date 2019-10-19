import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Descripton", field: "description" },
      { title: "Quantity", field: "quantity", type: "numeric" }
    ],
    data: [
      {
        name: "Cinco De Mayo",
        description: "15% off on all beers",
        quantity: 10
      },
      {
        name: "Independence Day",
        description: "Buy 1 get 1 free",
        quantity: 15
      },
      {
        name: "SuperBowl",
        description: "1 Free Appetizer",
        quantity: 5
      }
    ]
  });

  return (
    <MaterialTable
      style={{ marginTop: "100px" }}
      title="Promotions"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
