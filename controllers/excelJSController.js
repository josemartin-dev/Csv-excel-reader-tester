const exceljs = require('exceljs');

module.exports = {
  excelJSController: async (req, res) => {
    console.time('exceljs');
    const filename = './files/ambassadors.xlsx';
    let rows = [];

    if (filename.at(-1) === 'v') {
      const workbook = new exceljs.Workbook();
      const worksheet = await workbook.csv.readFile(filename);
      worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        rows = [...rows, { [row.values[1]]: row.values[2] }];
      });
    } else {
      const workbook = new exceljs.Workbook();
      await workbook.xlsx.readFile(filename)
      
      const worksheet = workbook.getWorksheet(1);
      worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        rows = [...rows, { [row.values[1]]: row.values[2] }];
      });  
    }


    res.status(200).send({
      message: rows,
    });
    console.timeEnd('exceljs');
  },
};