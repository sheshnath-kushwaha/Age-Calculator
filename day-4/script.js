const quote=document.getElementById('quote');
const author=document.getElementById('author')
const api_url = "https://dummyjson.com/quotes/random";
 async function getQuote(url){
    const response=await fetch(url)
    const data=await response.json()
    console.log(data);
    quote.innerHTML=data.quote;
    author.innerHTML=data.author


}

getQuote(api_url)


function Tweet(){
    window.open(
        "https://twitter.com/intent/tweet?text="
        + quote.innerHTML
        + " ---- by "
        + author.innerHTML,
        "Tweet window",
        "width=500,height=300"
    );
}



