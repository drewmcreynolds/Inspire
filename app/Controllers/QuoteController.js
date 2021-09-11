import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"


function _drawQuote(){
    let template = ''
    ProxyState.quotes.forEach(q => template += q.Template)
    document.getElementById('quotes').innerHTML = template
}

export class QuoteController{
    constructor(){
        console.log('hello from the quote controller')
        ProxyState.on('quotes', _drawQuote)
        quoteService.getQuote()
    }
}