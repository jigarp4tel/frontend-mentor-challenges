const priceToggle = document.querySelector('.price-switch input[type="checkbox"]');
const priceMonthly = document.querySelectorAll('.price-monthly');
const priceAnually = document.querySelectorAll('.price-anually');

function switchPrice(e) {
    if (e.target.checked) {
        console.log('Anually');
        console.log(priceAnually);
        priceAnually.forEach(price => {
            price.style.display = 'block';
        })
        priceMonthly.forEach(price => {
            price.style.display = 'none'
        })
    }
    else {
        console.log('Monthly')
        console.log(priceMonthly)
        priceAnually.forEach(price => {
            price.style.display = 'none';
        })
        priceMonthly.forEach(price => {
            price.style.display = 'block'
        })
    }
}

priceToggle.addEventListener('change', switchPrice);

