
const {google} = require("googleapis");
const keys = require("../../credentials.json");
 process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;



  

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });
    const client =  auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });

  
     const writeData = async function(val){ 
        await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: keys.spreadsheetId,
        range: "Sheet1!a2",
        valueInputOption: 'USER_ENTERED',
        resource: {values:[
            val
        ]}
        })
    };
    const getData=async function(){
       return await (googleSheets.spreadsheets.values.get({
            auth,
            range: "Sheet1!2:200",
            spreadsheetId: keys.spreadsheetId,
            majorDimension: "ROWS",
            valueRenderOption: "FORMATTED_VALUE"

        }));
        
    }
    const getHeaders = async function(){
        return await (googleSheets.spreadsheets.values.get({
            auth,
            range: 'Sheet1!1:1',
            spreadsheetId: keys.spreadsheetId,
            majorDimension: "ROWS",
            valueRenderOption: "FORMATTED_VALUE"
        }))
    };
    const deleteData = async function(){
        await googleSheets.spreadsheets.values.clear({

        })
    }
   
    module.exports = {writeData,getData,getHeaders};