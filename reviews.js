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

    document.querySelector("#writeReviewBtn").href="review-new.html?id=" + productID;
    
    document.querySelector('#productName').innerText = data.products[productID].name;

    let reviewsNum = 0,
        starsTotal = 0;

    const reviewNode = document.querySelector('#reviewContainer');
    for (let i = 0; i < data.reviews.length; i++) {
        if (data.reviews[i].productId == productID) {
            let reviewItemNode = put(reviewNode, "div.col-12.review-item#reviewItem");
            reviewItemNode.id = "reviewItem" + i;
            put(reviewItemNode, "h4", data.reviews[i].headline);
            let starsNode = put(reviewItemNode, "p.subtitle", "A " + data.reviews[i].star_rating + " star review by " + data.reviews[i].author);
            put(reviewItemNode, "p", );
            put(reviewItemNode, "p", data.reviews[i].body);
            starsTotal += data.reviews[i].star_rating;
            reviewsNum++;
        }
        console.log(reviewsNum);
    }
    if (reviewsNum == 0) {
        put(reviewNode, "h3", "No reviews... yet!");
        document.querySelector('.average-rating').innerText = "None yet!";
    } else {
        let avgStars = starsTotal / reviewsNum;
        document.querySelector('.average-rating').innerText = avgStars;
    }
});