fetch('./data.json')
.then(response => {
    return data = response.json();
})
.then(data => {


    console.log(data);

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    const productID = urlParams.get('id');

    document.querySelector("#backBtn").href="reviews.html?id=" + productID;
    
    document.querySelector('#productName').innerText = data.products[productID].name;

});