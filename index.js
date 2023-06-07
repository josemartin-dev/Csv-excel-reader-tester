const express = require('express')
const router_xlsx = require('./routes/xlsx-route');
const router_readExcelFile = require('./routes/read-excel-file-route');  
const router_nodeXlsx = require('./routes/node-xlsx-route');
const router_excelJS = require('./routes/exceljs-route');  
 
const app = express()

app.use('/xlsx', router_xlsx);
app.use('/node-xlsx', router_nodeXlsx);
app.use('/read-excel-file', router_readExcelFile);
app.use('/exceljs', router_excelJS);

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
});