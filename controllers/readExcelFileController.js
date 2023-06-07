const readExcel = require('read-excel-file/node')

module.exports = {
  readExcelFileController: (req, res) => {
    console.time('read-excel-file');
  
    // CSV not supported for this package
    readExcel('./files/ambassadors.xlsx').then((data) => {
      const rows = data.map((row) => ({ [row[0]]: row[1] }));
      
      res.status(200).send({
        message: rows,
      });
    })

    console.timeEnd('read-excel-file');
  },
};