const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const dataDisplay = document.getElementById("displayInfographs")

function searchTextQuery(){
    let query = new XMLHttpRequest();
    let searchTerm = searchBar.textContent;
    query.open("GET",`/search-infographs/text/${searchTerm}`);
    query.send(searchTerm);

    query.onload=()=>{
        console.log(query.response);
        }
    }

searchBtn.addEventListener("click",searchTextQuery());



function updateInfoDisplay (){
    let dataRequest = new XMLHttpRequest();
    dataRequest.onreadystatechange(()=>{

    });
}