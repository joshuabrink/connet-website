// var axios         = require('axios'),
//     csv           = require('csv'),
//     fs            = require('fs'),
//     XLSX          = require('xlsx-style'),
//     path          = require('path'),
//     config        = require('./config'),
//     jsdom         = require('jsdom'),
//     async         = require("async"),
//     _             = require('underscore'),
//     http          = require('http'),
//     request       = require("request")



// const { JSDOM } = jsdom;
    

// /*axios(config.signIn)
//  .then(axios({
//     method: 'get',
//     url: 'http://www.axiz.com/wp-content/uploads/Axiz-Lenovo_Customer.xlsx',
//     responseType: 'stream'
// }).then(function(response) {
//    response.data.pipe(fs.createWriteStream('Axiz-Lenovo_Customer.xlsx'))

// }));*/

// var headers = ['Stock', 'Number', 'Product code', 'Price', 'Description','Type','Brand'];
// var types = [['Ring', 'Security'], ['Peplink', 'Router']]
// var extractedHead = [];



// /*class Workbook {
 
//   constructor(wb, ws) {
//     this.workbook = wb;
//     this.worksheet = ws;
//     this.range = XLSX.utils.decode_range(ws["!ref"]);
//   }
  
//   delete_rows = (row_index) => {
//     var range = this.range;
//     var ws = this.ws;
//   //  let range = XLSX.utils.decode_range(ws["!ref"]);
//     for(var i = 0; i < row_index.length; i++) { 
//       for(var C = range.s.c; C <= range.e.c; ++C ){
//           for(var R = row_index[i] - i; R <= range.e.r; ++R){
//               ws[ec(R, C)] = ws[ec(R+1, C)];
//           }
//       }
//     range.e.r--;
// //    console.log(range.e);
//     }
//     ws['!ref'] = XLSX.utils.encode_range(range.s, range.e);
 
// };


// }*/


// /*//*/
 
// async function download (href, path, cb) {
//   return new Promise(function(resolve, reject) {
//   request({url: href, encoding: null}, function(err, resp, body) {
//     if(err) throw reject(err);
//     resolve(fs.writeFile(path, body, function(err) {
//       if(err) {cb(err)};
//       cb("file written!");
//     }));
//   });
// });

// }
 

// /*async function download(url, dest, cb) {
//     var file = fs.createWriteStream(dest);
//     var request = http.get(url, function(response) {

//         // check if response is success
//         if (response.statusCode !== 200) {
//             return cb('Response status was ' + response.statusCode);
//         }

//         response.pipe(file);

//         file.on('finish', function() {
//             file.close(cb);  // close() is async, call cb after close completes.
//         });
//     });

//     // check for request error too
//     request.on('error', function (err) {
//         fs.unlink(dest);
//         return cb(err.message);
//     });

//     file.on('error', function(err) { // Handle errors
//         fs.unlink(dest); // Delete the file async. (But we don't check the result) 
//         return cb(err.message);
//     });
// };
// */

// const ec = (r, c) => {
//     return XLSX.utils.encode_cell({r:r,c:c});
// };

// const delete_rows = (ws, row_index) => {
//     let range = XLSX.utils.decode_range(ws["!ref"]);
//     for(var i = 0; i < row_index.length; i++) { 
//       for(var C = range.s.c; C <= range.e.c; ++C ){
//           for(var R = row_index[i] - i; R <= range.e.r; ++R){
//               ws[ec(R, C)] = ws[ec(R+1, C)];
//           }
//       }
//     range.e.r--;
// //    console.log(range.e);
//     }
//     ws['!ref'] = XLSX.utils.encode_range(range.s, range.e);
 
// };

// const delete_cols = (ws, col_index) => {
//   let range = XLSX.utils.decode_range(ws["!ref"]);
//   for(var i = 0; i < col_index.length; i++) {
//     for(var R = range.s.r; R <= range.e.r; ++R){
//         for(var C = col_index[i] - i; C <= range.e.c; ++C){
//          // console.log(C)
//             ws[ec(R, C)] = ws[ec(R, C+1)];
//         }
//     }
//     range.e.c--;
//   //  console.log(range.e);
//   }
//     ws['!ref'] = XLSX.utils.encode_range(range.s, range.e);
   
// };

// const findCellRow = (ws, cell) => {
//     let range = XLSX.utils.decode_range(ws["!ref"]);
//     for(var R = range.s.r; R <= range.e.r; ++R){
//         for(var C = range.s.c; C <= range.e.c; ++C){
//             if(ws[ec(R, C)] && ws[ec(R, C)].w && ws[ec(R, C)].w.includes(cell) ) {
//               return R + 1;
//             }
//         }
//     }
//   /*  cycleRef(ws, function(R, C) {
//          if(ws[ec(R, C)] && ws[ec(R, C)].w && ws[ec(R, C)].w.includes(cell) ) {
//               return R + 1;
//             }
//         })*/
// };

// const findCellCol = (ws, cell) => {
//     let range = XLSX.utils.decode_range(ws["!ref"]);
//     for(var R = range.s.r; R <= range.e.r; ++R){
//         for(var C = range.s.c; C <= range.e.c; ++C){
//      //   cycleRef(ws, function(R, C) {
//           if(ws[ec(R, C)] && ws[ec(R, C)].w && ws[ec(R, C)].w.includes(cell) ) {
//               return C;
//             }
//        // })
          
//         }
//     }
// };

// function cycleRef(ws, everyCol, everyRow, colStart, rowStart) {
  
//     let range = XLSX.utils.decode_range(ws["!ref"]);

//     for(var R = rowStart ? range.s.r + rowStart : range.s.r; R <= range.e.r; ++R){
//         for(var C = colStart ? range.s.c + colStart : range.s.c; C <= range.e.c; ++C){
//           if(everyCol) {
//              everyCol(R, C);
           
//           }
//         }
//         if(everyRow) {
//           everyRow(R, C);
//         }
//     }
// }


// function delEmptyCols(ws)  {
//     var cellDetected = false;
//     var emptyCols = [];
//     var range = XLSX.utils.decode_range(ws["!ref"]);
//       for(var C = range.s.c; C <= range.e.c; ++C){
//         for(var R = range.s.r + 1; R <= range.e.r; ++R){
//            if (ws[ec(R, C)] !== undefined && ws[ec(R, C)].v !== '') {
//              cellDetected = true;
//            }
//           }
//           if(!cellDetected) {
//              emptyCols.push(C);
//           }
//           cellDetected = false;
//         }
 
//   //      console.log(emptyCols);
//     delete_cols(ws, emptyCols);
// }

// function arrayContainsArray (superset, subset) {
  
//     if (subset.length < 2) {
//       return false;
//     }
//     return subset.some(function (value) {
//     //  console.log(superset.indexOf(value) >= 3)
//     //  console.log(superset.includes(value))
//       return (superset.includes(value));
//     });
 
//   }
  
 

// function findInvalidRows (ws, validCols)  {
//   var cellDetected = false;
//   var emptyRows = [];
//   var collKeys = [];
// //  var rowArray = [];
//   let range = XLSX.utils.decode_range(ws["!ref"]);
  
//       for(var R = range.s.r; R <= range.e.r; ++R){
//         for(var C = range.s.c; C < range.e.c; ++C ){
//          // console.log(cellDetected);
//          // console.log(C);
//            if (ws[ec(R, C)] && ws[ec(R, C)].v !== '') {
//              collKeys.push(C);
//        //      rowArray.push(ws[ec(R, C)].v)
//            }
//           } 
//             if(!arrayContainsArray(validCols, collKeys)) {
//               emptyRows.push(R);
//             }
            
           
//   /*    console.log(!extractedHead.some(function(eH) {
//        return value.includes(eH) && value !== 'Quote for Stock';
//         }))*/
//       //   console.log(arrayContainsArray(rowArray, extractedHead))
//    //       console.log(colls)
//             collKeys = [];
//          //   rowArray = [];
//         }
//        // console.log(rowArray)

//     return emptyRows;
// }


// async function formatStock(ws) {
//   try {
//   const range = XLSX.utils.decode_range(ws['!ref']);
 
//   const stockStyle = [
//     ['In Stock', 72, 229], [ 'Limited Stock', 69, 223], ['No Stock', 71, 228], 
//     ['In Stock', 74, 75, 232, 236, 230, 231], ['Limited Stock', 71, 72, 225, 226, 227, 228, 234], ['No Stock', 73, 66, 229, 233, 235, 211]
//     ];
//   const C = 0;
  
//   var replaceStock = false;
//   return new Promise(function(resolve, reject) {
//     for(var i = 0; i < 2; i++) {
//       for(var R = range.s.r; R <= range.e.r; ++R){
//         if(!replaceStock) {
//           if(ws[ec(R, C)]) {
//             R < 1 ? ws[ec(R,C)].v = 'Stock': ws[ec(R,C)].v = 'Quote for Stock';
//           }
          
          
//         } else {
//             for(var i = 0; i< stockStyle.length; i++) {
//                if(ws[ec(R, C)] && ws[ec(R, C)].XF && ws[ec(R, C)].ixfe) {
//                  if(stockStyle[i].includes(ws[ec(R, C)].XF.ifnt) && stockStyle[i].includes(ws[ec(R, C)].ixfe)) {
//                    resolve(ws[ec(R,C)].w = stockStyle[i][0]);
//                    break;
//                  } 
//                 }  
//               }
//             } 
//           }
//           replaceStock = true;
//       }
//     })
//   } catch(e) {
//     console.log(e)
//   }
   
// }

// function formatInnerType(ws) {
//   var type, brand;
  
//   const oneOnly = arr => arr.filter(v => v !== '').length == 1;
//   const typeList = ['notebook', 'notebooks', 'desktop', 'desktops', 'tablet', 'tablets', 'accessories', 'monitor', 'monitors']
//   var trueCount = [];
  
//   let range = XLSX.utils.decode_range(ws["!ref"]);
   
//     for(var R = range.s.r; R <= range.e.r; ++R){
//       for(var C = range.s.c; C < range.e.c; ++C){
//         if(ws[ec(R,C)] && ws[ec(R,C)].v !== '' && typeof ws[ec(R,C)].v === 'string') {
//           trueCount.push(ws[ec(R,C)].v);
//         }
//       }
//       if(oneOnly(trueCount)) {
//         trueCount = trueCount.filter(function(tC) {
//           return typeList.some( function(tL) { 
//             return tC.toLowerCase().indexOf(tL) > -1;
//           });
//         });
//         if(trueCount.length > 0) {
//            console.log(trueCount)
//         }
//       }
//       trueCount = [];
//     }
        
// }

// function formatBT(ws, wsName, fileName) {
  
//   var type = '';
//   var brand = '';
//   const sheetTypes = ['notebook', 'desktop', 'tablet', 'accessories', 'monitor', 'software']
//  // console.log(wsName)
   

//    if(fileName.includes('_')) {
//     if(fileName.includes('.xlsx')) {
//       type = fileName.indexOf('s', fileName.length - 6) === fileName.length - 6 ? fileName.substring((fileName.indexOf('_')) + 1, fileName.length - 6) : fileName.substring((fileName.indexOf('_')) + 1, fileName.length - 5)
//     } else {
//       type = fileName.indexOf('s', fileName.length - 5) === fileName.length - 5 ? fileName.substring((fileName.indexOf('_')) + 1, fileName.length - 5): fileName.substring((fileName.indexOf('_')) + 1, fileName.length - 4)
//     }
//   //  type = fileName.includes('.xlsx') ? fileName.substring((fileName.indexOf('_')) + 1, fileName.length - 5) : fileName.substring((fileName.indexOf('_')) + 1, fileName.length - 4);
//      brand = fileName.substring(fileName.indexOf('-') + 1, fileName.indexOf('_'))
//   } else {
//     if(fileName.includes('.xlsx')) {
//        brand = fileName.substring(fileName.indexOf('-') + 1, fileName.length - 5)
       
//     } else {
//        brand = fileName.substring(fileName.indexOf('-') + 1, fileName.length - 4)
//     }
//   }
  
 
//     if(sheetTypes.filter(sheet => fileName.toLowerCase().includes(sheet)).length > 0) {
//       type = sheetTypes.filter(sheet => fileName.toLowerCase().includes(sheet))[0];
//      // type = type.charAt(0).toUpperCase();
//     } 
//     if (sheetTypes.filter(sheet => wsName.toLowerCase().includes(sheet)).length > 0){
//       type = sheetTypes.filter(sheet => wsName.toLowerCase().includes(sheet))[0];
//     //  type = type.charAt(0).toUpperCase();
//     }
    
//    console.log('TYPE: ' + sheetTypes.filter(sheet => wsName.toLowerCase().includes(sheet)))
  

// /*  var tHeads = ['Type', 'Brand']*/
//   var heads = [type, brand];
//   var rowCount = 0;
  
//   heads.forEach(function(head, index) {
    
//     var range = XLSX.utils.decode_range(ws['!ref']);
//  //   var emptyRows = findInvalidRows(ws);
//   //  console.log('The head: ' + head)
//       var C = range.e.c+1;
//       range.e.c++
     
//        for(var R = range.s.r; R <= range.e.r; ++R){
//          /* R < 1 ? head = tHeads[index] : head = heads[index];*/
//           ws[ec(R,C)] = {v: head, t: 's', w: head};
//            }

//       ws['!ref'] = XLSX.utils.encode_range(range.s, range.e);
      
//     })
// }

  
// function getList (html) {
  
//   const dom = new JSDOM(html);
//   var hrefs = _.pluck(dom.window.document.querySelectorAll("a"), 'href');
// //  console.log(hrefs)
//   const discludeList = ["MicroFocus", "RedHat", "Microsoft_Reseller" ] //ring, targus adjustments


//   hrefs = hrefs.filter(function(href) {
//      if(href.includes('.xls')) {
//       return !discludeList.some( function(dL) { 
//         return href.indexOf(dL) > -1;
//       })
//      }
//   })
//   return hrefs;
// }

// /*function addB(ws, Brand) {

//   var range = XLSX.utils.decode_range(ws['!ref']);
//   var emptyRows = findEmptyRows(ws);
//   var cAdd = Brand;
//     var C = range.e.c+1;
//     range.e.c++
   
//      for(var R = range.s.r; R <= range.e.r; ++R){
//         for(var i = 0; i < emptyRows.length; i++) {
//          if(R === emptyRows[i]) {
//            ws[ec(R,C)] = undefined;
         
//            break;
//          } else {
//            ws[ec(R,C)] = {v: cAdd, t: 's', w: cAdd};
      
//          }
//        }
//     }
//     ws['!ref'] = XLSX.utils.encode_range(range.s, range.e);
  
// }

// function addT(ws, Type) {

//   var range = XLSX.utils.decode_range(ws['!ref']);
//   var emptyRows = findEmptyRows(ws);
//   var cAdd = Type;
//     var C = range.e.c+1;
//     range.e.c++;
   
//      for(var R = range.s.r; R <= range.e.r; ++R){
//         for(var i = 0; i < emptyRows.length; i++) {
//          if(R === emptyRows[i]) {
//            ws[ec(R,C)] = undefined;
//            break;
//          } else {
//            ws[ec(R,C)] = {v: cAdd, t: 's', w: cAdd};
       
//          }
//        }
//     }
//     ws['!ref'] = XLSX.utils.encode_range(range.s, range.e);
  
// }

// function shiftColR(ws) {
//   var range = XLSX.utils.decode_range(ws['!ref']);
//       for(var C = range.s.c; C <= range.e.c; ++C){
//         for(var R = range.s.r; R <= range.e.r; ++R ){
//          // console.log(C)
//             ws[ec(R, C)] = ws[ec(R, C+1)];
//         }
       
//     }
//     range.e.c ++ 
//     ws['!ref'] = XLSX.utils.encode_range(range.s, range.e);
// }*/


// async function formatWs(ws , head) {
//   try {
//     var validHead = false;
//     var invalidCols = [];
//     var validCols = [];
//     var header = head;
//     var stockCheck = true;
//     var firstFromCol = true;
    
//   return new Promise(function(resolve, reject) {

//     var range = XLSX.utils.decode_range(ws["!ref"]);
  
//   if (range.e.c > 20) {
//     ws['!ref'] = XLSX.utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 20, r: range.e.r } });
//     range = XLSX.utils.decode_range(ws["!ref"]);
//   }
//   if(range.e.r > 200) {
//    ws['!ref'] = XLSX.utils.encode_range({ s: { c: 0, r: 0 }, e: { c: range.e.c, r: 200 } });
//    range = XLSX.utils.decode_range(ws["!ref"]);
//   }
//   if(stockCheck) {
//     ws[ec(findCellRow(ws, header[1])-1, findCellCol(ws, header[1])-1)] = {v: 'Stock', t: 's', w: 'Stock'};
//   //  console.log(ws[ec(findCellRow(ws, header[1])-1, findCellCol(ws, header[1])-1)])
//   }

//       for(var C = range.s.c; C <= range.e.c; ++C){
//         for(var R = range.s.r; R <= 30; ++R){
//           for(var i = 0; i < header.length; i++) {
//            if (ws[ec(R, C)] && ws[ec(R, C)].w && ws[ec(R, C)].w.includes(header[i]) && !ws[ec(R, C)].w.includes('USD Price') && !ws[ec(R, C)].w.includes('LENOVO')) {
//              validHead = true;
//              if(firstFromCol) {
//                extractedHead.push(header[i]);
//                firstFromCol = false;
//              }
//            }
//           }
//         }
//           if(!validHead) {
//              invalidCols.push(C);
//             // console.log(invalidCols)
//           } else {
//             validCols.push(C);
//           }
          
//           stockCheck = false;
//           validHead = false;
//           firstFromCol = true;
//       }
      
//         var invalidRows = findInvalidRows(ws, validCols);
//         console.log('INVALID COLS: ' + invalidCols);
//         console.log('VALID COLS: ' + validCols);
//         console.log('INVALID ROWS: ' + invalidRows);
        
//         resolve(delete_cols(ws, invalidCols));
//         resolve(delete_rows(ws, invalidRows));
//       })
        
//   } catch(e) {
//     console.log(e)
//   }
        
// }


// async function convertWb (fileName) {
//   try{
//     const workbook = await XLSX.readFile('./public/ProductList/' + fileName, {cellStyles: true})
//     const testWorkbook = await XLSX.readFile('./public/ProductList/Axiz-Dell_Client.xls', {cellStyles: true})
//     const excludeSheets = ['disclaimer', 'sheet', 'menu', 'contact', 'detailed spec', 'warranties', 'sonicwall', 'end of range sale']

//     workbook.SheetNames = workbook.SheetNames.filter(function(sN) {
//         return !excludeSheets.some( function(eS) { 
//           return sN.toLowerCase().indexOf(eS) > -1;
//         })
       
//     })
//   var worksheet = testWorkbook.SheetNames[3];
//     //console.log(workbook.SheetNames)
    
//  // async.eachOf(workbook.SheetNames , function(worksheet, key, ecb) {
//       var ws = testWorkbook.Sheets[worksheet];
//      console.log("WORKSHEET: " + worksheet)
//     formatInnerType(ws)
//     formatWs(ws, headers); //use '' as  header for blank headers of col
//     formatBT(ws, worksheet, fileName)
//     formatStock(ws);
    
//     extractedHead.push('Type', 'Brand')
  
//     var jsonObj = XLSX.utils.sheet_to_json(ws , {header: extractedHead, skipHeader: 1});
//     jsonObj.splice(0, 1) // removes extractedhead line
//    // console.log(jsonObj)
// /*    for(var key in jsonObj) {
//       for(var k in jsonObj[key]) {
//         if(jsonObj[key] !== undefined) {
//           var value = jsonObj[key][k]
//         }
//           if(typeof value === 'string') {
//            var validRow = extractedHead.some(function(eH) {
//               return value.includes(eH) && value !== 'Quote for Stock';
//             })
//         }
//         if(validRow) {
          
//           jsonObj.splice(0, 1)
//         }
//       }
 
//   }*/
//    // console.log(extractedHead)
 
//     var json = JSON.stringify(jsonObj);
//   //  var json = JSON.stringify(omitKeys(jsonObj, extractedHead));
  
//   // console.log(json)
//      extractedHead = [];
      
//   return new Promise(function(resolve, reject) {
//      fs.writeFile('./public/jsonList/' + worksheet + ' : ' + fileName.substring(0,  fileName.includes('.xlsx') ? fileName.length - 5 : fileName.length - 4) +'.json', json, 'utf8', (err, data) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })
  
// // })
   
//  } catch(e) {
//    console.log(e)
//  }
// }



// /*request({uri: "http://www.axiz.com/pricelists_templates/"}, 
//   function(error, response, body) {
//     const dest = 'http://www.axiz.com/wp-content/uploads/'
//     async.eachOf(getList(body), function(currentlist, key, ecb){ 
//        console.log(currentlist + ' : '+ key);
//        const fileName = currentlist.substring(dest.length, currentlist.length);

//     //    download(currentlist, fileName, function(res) {
//      //    console.log(res)}
//      //    ).then(()=> {
//         convertWb(fileName).then(() => {
//           ecb(null)
//       //  });
//       //  ecb(null)
 
//   })
//  // getList(body);
// });
// })*/

  
// /*  const dom = new JSDOM(html.data);
//   var links = dom.window.document.querySelectorAll("a");
//   const discludeList = ["MicroFocus", "RedHat", "Microsoft_Reseller" ] //ring, targus adjustments
//   var xlsLinks = []
  
//   for(var i = 0; i < links.length; i++) {
//       if(links[i].href.includes('.xls')) {
//         xlsLinks.push(links[i]);
//         console.log(links[i].href + " : " + i);
//       }
//   }*/

//  // console.log(xlsLinks[0].href)
//   // console.log(downloadList(links[15].href))
//    //loadList(links[15].href)
 
// convertWb('Axiz-Dell_Client.xls')
// //convertWb('Axiz-HP-DesktopsNotebooks.xlsx')
// // }))
 
 
 
// /* var output_file_name = "out.csv";
//  var stream = XLSX.stream.to_csv(worksheet);
//  console.log(XLSX.utils.decode_range(worksheet['!ref']))

// var parser = csv.parse({skip_lines_with_empty_values: true, columns: true, ltrim: true});

// stream.pipe(parser)
//   .pipe(csv.transform(function(record){
  
//             console.log(record)
//             return extractFields
//             .map(nm => { return record[nm]; })
        
//   }))
//   .pipe(csv.stringify({delimiter: ',',
//     relax_column_count: true,
//     skip_empty_lines: true,
//     header: true,
//     // This names the resulting columns for the output file.
//     columns: outputFields}))
//   .pipe(fs.createWriteStream(output_file_name));

// */