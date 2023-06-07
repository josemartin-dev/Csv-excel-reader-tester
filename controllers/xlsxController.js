const xlsx = require('xlsx');

module.exports = {
  xlsxController: (req, res) => {
    console.time('xlsx');
    const workbook = xlsx.readFile('./files/ambassadors.xlsx');
    const workbook_sheet = workbook.SheetNames;
    const workbook_response = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook_sheet[0]], { header: 1 }
    );
    const rows = workbook_response.map((row) => ({ [row[0]]: row[1] }));

    res.status(200).send({
      message: rows,
    });
    console.timeEnd('xlsx');
  },
};