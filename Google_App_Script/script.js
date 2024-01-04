function onFormSubmit(event) {

    record_array = []
  
    var form = FormApp.openById('1pJskZSLLbQk0m4MyzAMHzyacw0D3MaJDgkYKwfGiTOs'); // Form ID
    var formResponses = form.getResponses();
    var formCount = formResponses.length;
  
    var formResponse = formResponses[formCount - 1];
    var itemResponses = formResponse.getItemResponses();
  
    for (var j = 0; j < itemResponses.length; j++) {
    var itemResponse = itemResponses[j];
      var title = itemResponse.getItem().getTitle();
      var answer = itemResponse.getResponse();
  
      Logger.log(title);
      Logger.log(answer);
  
      record_array.push(answer);
    }
     
    AddRecord(record_array[0], record_array[1], record_array[2], record_array[3], record_array[4]);
  
  }
  
  function AddRecord(nama, jenis_kelamin, tanggal_lahir, alamat) {
    var url = 'https://docs.google.com/spreadsheets/d/1owYJ6s-taiWAJok3d5WyO3CFfCLdJKqkmVeYingjasg/edit#gid=0';
    var ss= SpreadsheetApp.openByUrl(url);
    var dataSheet = ss.getSheetByName("Sheet1");
    dataSheet.appendRow([nama, jenis_kelamin, tanggal_lahir, alamat, new Date()]);
  }