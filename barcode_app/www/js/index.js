document.getElementById('scan').addEventListener('click',function(){
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      document.getElementById('result').innerHTML = `
        We got a code\n
        Result: ${result.text}\n
        Format: ${result.format}\n
        Cancelled:  ${result.cancelled}\n
      `;
    },
    function (error) {
        alert("Scanning failed: " + error);
    }
  );  
});