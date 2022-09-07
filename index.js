async function retrieveBooks(){
    let murakami = document.getElementById("search").value;
    let contactApi = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${murakami}&key=AIzaSyDx7A6ecxNy2JLVpg3fGUHdtE2rSxsfvCY`)
    let convertJson = await contactApi.json();
    let newResult = document.createElement("div");
    let resultsContainer = document.getElementById("results")
    resultsContainer.appendChild(newResult); 
    newResult.className = "bookInfo";
    
    
}


   