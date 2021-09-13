import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";

// @ts-ignore
const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})
class QuoteService{
    async getQuote(){
    let res = await api.get('quotes')
    console.log('get the quote', res)
    ProxyState.quotes = [...ProxyState.quotes, new Quote(res.data)]
}
constructor(){
    console.log('quote service working')
}
}
export const quoteService = new QuoteService();