This project is to demonstrate the Jest issue with Ag-grid

## Available Scripts

In the project directory, you can run:

### `npm run build`

Runs the app in the development mode.<br />
Open the index.html from the dist folder to view it in the browser.

### `npm run unittest`

Start the unit test Jest runner.<br />
See the error
    _SampleGridApp\node_modules\@ag-grid-community\core\dist\esm\es6\main.mjs:15
    export { ColumnFactory } from "./columns/columnFactory.mjs";
    ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import { Grid, GridOptions, ModuleRegistry } from '@ag-grid-community/core';
        | ^
      2 | import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
      3 | import './styles.css';
      4 |

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1496:14)
      at Object.<anonymous> (src/main.ts:1:1)_
