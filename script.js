let head = document.querySelector("h1");
let head1 = document.querySelector("h2");



function quotes(){
    fetch("https://type.fit/api/quotes").then((res)=>res.json()).then((data)=>{
        let random = Math.floor(Math.random() * data.length);
        head.innerText = data[random].text;
        head1.innerText = data[random].author;
        

    })
}