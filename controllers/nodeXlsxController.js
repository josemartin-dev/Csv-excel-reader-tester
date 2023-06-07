const nodeXlsx = require('node-xlsx');

module.exports = {
  nodeXlsxController: (req, res) => {
    console.time('node-xlsx');
    const workSheetsFromFile = nodeXlsx.parse(`${__dirname}/files/ambassadors.xlsx`);
    const rows = workSheetsFromFile[0].data.map((row) => ({ [row[0]]: row[1] }));
  
    res.status(200).send({
      message: rows,
    });
    console.timeEnd('node-xlsx');
  },
};