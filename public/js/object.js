 function objToArray(obj){
    let arr =[];
    Object.values(obj.info).forEach((element,index) =>{
      if(typeof element !== 'object'){
        arr.push(element)   
      } 
    }); 
     arr.push(obj.reference[0],obj.reference[1],obj.reference[2]);
    arr.unshift(obj.first, obj.last);
    
     arr.splice(7,4);
  return arr;
  }

  const sheetObj ={
    /**for updating spreadsheet */
    spreadsheetId: '',
    range: 'sheet1!A2',
    valueInputOption: 'USER_ENTERED',
    resource: { values:[] },
    /**for getting spreadsheet information */
  
    majorDimension: 'ROWS',
    valueRenderOption: 'UNFORMATTED_VALUE',
     changeRange(val){  
       let regex = /[a-zA-Z0-9]:?/g; typeof val =='string'&& (regex.test(val)&&!val.endsWith(":"))? sheetObj.range = `sheet1!${val}`:console.log('invalid value');return sheetObj.range},
      addValues(func){let val = sheetObj.resource.values; return val.push(func);}
  }
  module.exports={
      sheetObj,
      objToArray
  }