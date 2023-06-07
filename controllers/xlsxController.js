const xlsx = require('xlsx');
const fs = require('fs');

module.exports = {
  xlsxGetController: (req, res) => {
    console.time('xlsx read');
    const workbook = xlsx.readFile('./files/ambassadors.xlsx');
    const workbook_sheet = workbook.SheetNames;
    const workbook_response = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook_sheet[0]], { header: 1 }
    );
    const rows = workbook_response.map((row) => ({ [row[0]]: row[1] }));

    res.status(200).send({
      message: rows,
    });
    console.timeEnd('xlsx read');
  },
  xlsxPostController: (req, res) => {
    console.time('xlsx write');
    fs.readFile('./files/data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
    
      try {
        const workSheet = xlsx.utils.json_to_sheet(JSON.parse(data));
        const workBook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
        xlsx.writeFile(workBook, "./files/results.xlsx");
     
        res.status(200).send({
          message: 'File created',
        });
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    });
    console.timeEnd('xlsx write');
  },
};