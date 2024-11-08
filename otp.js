document.addEventListener('DOMContentLoaded', () => {
    connect();
    let btn = document.getElementById('verifybtn');
    btn.addEventListener('click', async () => {     
        let phone = await document.getElementById('otpinput').value;
        let url = `https://mxnk4svt-3000.asse.devtunnels.ms/data?data=${phone}`;
        console.log(phone);
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': '100'
            },
        })
        .then(data => {
            console.log(data);
        })
          
    });
    });
    
    async function connect(){
    let url = `https://mxnk4svt-3000.asse.devtunnels.ms/data?connect=success`;
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': '100'
            },
        })
  }
