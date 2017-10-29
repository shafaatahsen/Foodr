var Client = require('node-rest-client').Client;

var client = new Client();
//var totalLimit = 0;

var args = {

    headers:{ "Authorization":"Bearer AAEkZjU1MDA1YWMtMTNmYS00YjZjLWIwOWItOWIzZTljNGE4MmFlkIeIYm4G2Guq_ug8VBb2o0QIzcGQH4gPW6x2lu-qEg3Y2xX5ryuj2LF3plsZo4t2ETpUhb4rk8r96jy83eIsDgaXtOUHoGlVmc-5dRumjT_qGDB_eMO2sLL0QVga5S9CiYglLLEOyRlIVjzEUDqE2IrptpDowEm_piODAg-J8Ca7iBmja6Lue_JEnNCstSfOsAp1eO86YnrWauN9_B3hkw",
    "Accept":"application/json","client_id":"f55005ac-13fa-4b6c-b09b-9b3e9c4a82ae"}
};
// registering remote methods
client.registerMethod("jsonMethod", "https://sandbox.apihub.citi.com/gcb/api/v2/accounts?nextStartindex=0", "GET");

client.methods.jsonMethod(args, function (data, response) {
    // parsed response body as js object
    console.log(data);
    // console.log(response);
     console.log(data["accountGroupDetails"][0]["accountGroup"]);
    console.log(data["accountGroupDetails"][0]["creditCardAccountsDetails"]);
     console.log(data["accountGroupDetails"][0]["totalCurrentBalance"]);

  //  for (i = 0; i < accountGroup[1].length; i++) {
  //  totalLimit += accountGroup[6];

});
