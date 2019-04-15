import axios from 'axios'

const ROOT_URL = 'http://localhost:8000/api'

export function getTags(sample,callback) {
    const fs = require('fs')
    fs.readFile(sample,'binary',function(err,data){


    var xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    xhr.withCredentials = true;
    var jsonResponse
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        jsonResponse = this.response;
        var obj = JSON.parse(jsonResponse);
        callback(obj['tags']);
      }
    });
    
    xhr.open("PUT", "http://localhost:8000/api/get-tags/", false);
    xhr.setRequestHeader("Content-Disposition", "Content-Disposition: attachment; filename="+sample);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "b6168484-d917-4fcc-8e4d-93a6204e5a64");
    var nBytes = data.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = data.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
    xhr.send(ui8Data);

    
    
});

    

    
 
}