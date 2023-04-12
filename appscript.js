var workbook = SpreadsheetApp.openByUrl('EXEL SHARED URL GOES HERE');

var sheet = workbook.getSheetByName('SHEET NAME GOES HERE');

// step 2
function doPost(e){

  var action = e?.parameter?.action;
  if(action == 'addUser'){
    return addUser(e);
  }
}
function addUser(e){
  Logger.log(e.postData.contents);
  var user = JSON.parse(e.postData.contents);
  sheet.appendRow([user.id, user.name, user.date, user.pain, user.tiredness, user.drowsiness, user.nausea, user.lack_appetite, user.short_breath, user.depression, user.anxiety, user.well_being, user.additional_cmt ]);

  // step4
  return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);

}
