import { Grid, GridOptions, ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import './styles.css';

let gridOptions: GridOptions;
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export function render() {
    const colDefs = [
        {headerName: 'Make', field: 'make', },
        {headerName: 'Model', field: 'model', },
        {headerName: 'Price', field: 'price'}
    ];
    const rData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
    ];

    gridOptions = {
      columnDefs: colDefs,
      rowData: rData,
      rowSelection: "single",
      pagination: true,
      defaultColDef: {
        width: 170,
        sortable: true,
      },
    };
  
    const gridDiv: HTMLElement = document.getElementById("grid") as HTMLElement;
    new Grid(gridDiv, gridOptions);
  }

render();


/*
import { Grid, GridOptions, ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

ModuleRegistry.register(ClientSideRowModelModule);

import './styles.css';

export class SimpleGrid {
    private gridOptions: GridOptions = <GridOptions>{};

    constructor() {
        this.gridOptions = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };

        let eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#grid');
        new Grid(eGridDiv, this.gridOptions);
    }

    // specify the columns
    private createColumnDefs() {
        return [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" }
        ];
    }

    // specify the data
    private createRowData() {
        return [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];
    }
}

new SimpleGrid();

*/