fetch('./data.json')
.then(response => {
    return data = response.json();
})
.then(data => {

    const reviewNode = document.querySelector('#productContainer');
    for (let i = 0; i < data.products.length; i++) {
        let productItemNode = put(reviewNode, "div.col-12.col-sm-6.col-md-3.d-flex.flex-column");
        put(productItemNode, "b", data.products[i].name);
        put(productItemNode, "br");
        let productLink = put(productItemNode, "a.btn.btn-secondary", "See It");
        productLink.href = "reviews.html?id=" + data.products[i].id;
    }
});