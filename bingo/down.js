function down(str){

    // let str = "62"

    fetch("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "headers": {
        "accept": "*/*",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6",
        "content-type": "application/json",
        "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    },
    "referrer": "https://tiktokvoicegenerator.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"text\":\""+str+"\",\"voice\":\"br_004\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
    })
    .then(e=>e.json())
    .then(e=>{
        var binaryString = atob(e.data);
        
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        
        
        var blob = new Blob([bytes], { type: "audio/mp3" });
        
        var downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = str;
        downloadLink.innerHTML = "Download MP3";
        
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
    })

}

// for(i=1;i<100;i++){
//     down(i)
// }
i = 1
let s = setInterval(()=>{
    down(i)
    i++
    if(i==100) clearInterval(s)
}, 500)

// clearInterval(s)