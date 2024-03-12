let productContainer = document.getElementById("product");
let search = document.getElementById("search");
let productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup",function(event){
    let enteredValue = event.target.value.toUpperCase();
    for(let i=0;i<productList.length; i++){
        let productName = productList[i].querySelector("p").textContent;
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[i].style.display = "none";
        }
        else{
            productList[i].style.display = "block";
        }

    }
})