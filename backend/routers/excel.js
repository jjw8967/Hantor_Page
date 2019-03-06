const excel = require('excel4node');

module.exports = function(res,data){

    let workbook = new excel.Workbook();

    let worksheet = workbook.addWorksheet('Sheet 1');

    let style = workbook.createStyle({
        font: {
            
            color: '#000000',
            size : 12
        },
    })

    let element;

    for(let i=0;i<data.length;i++){
        element=data[i];
        worksheet.cell(i+1,1).number(element.num).style(style);
        worksheet.cell(i+1,2).string(element.name).style(style);
        worksheet.cell(i+1,3).string(element.stdID).style(style);
        worksheet.cell(i+1,4).string(element.phoneNum).style(style);
 
    }

    workbook.write('member.xlsx',res);
    
}