var socket=io.connect('http://192.168.1.102:3000');

socket.on('image', (data)=>{  
    document.getElementById('img1').src=data; 
    console.log('y');
});