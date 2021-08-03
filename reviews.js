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
    
    document.querySelector('#productName').innerText = data.products[productID].name;

    function calcStars() {

    }

    const reviewNode = document.querySelector('#reviewContainer');
    for (let i = 0; i < data.reviews.length; i++) {
        if (data.reviews[i].productId == 0) {
            let reviewItemNode = put(reviewNode, "div.col-12.review-item#reviewItem");
            reviewItemNode.id = "reviewItem" + i;
            put(reviewItemNode, "h4", data.reviews[i].headline);
            let starsNode = put(reviewItemNode, "p.subtitle", "A " + data.reviews[i].star_rating + " star review by " + data.reviews[i].author);
            put(reviewItemNode, "p", );
            put(reviewItemNode, "p", data.reviews[i].body);
        }
    }
});