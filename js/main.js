import {apiKeyQuote} from "./apiKey.js";
document.querySelector('input').addEventListener('click', generateQuoteCloud);

function generateQuoteCloud() {
    const author = document.querySelector('#author')
    const quote = document.querySelector('#quote');
    // https://api-ninjas.com/api/quotes
    const urlQuote = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${apiKeyQuote}`
    fetch(urlQuote)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            console.log(data[0].author)
            console.log(data[0].quote)
            author.innerText = data[0].author;
            quote.innerText = data[0].quote;
            generateCloud(data[0].quote);
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }

    function generateCloud(quoteText) {
        const wordCloud = document.querySelector('#word-cloud')
        // https://quickchart.io/wordcloud?text=To be or not to be
        const urlCloud = `https://quickchart.io/wordcloud?text=${quoteText}`
        fetch(urlCloud)
            document.querySelector('#word-cloud').src = urlCloud;
        }