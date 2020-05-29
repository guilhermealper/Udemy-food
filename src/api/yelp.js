import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorazation:'Bearer -qiwZ8_uFStKod8rIFAF-hOmbxaBLlRs_xvZeXerRXtJ7PoJVJiPsSd2ROqyYiVMbaG2A1PwM5hIb2HqHIVKX7cbohrmzU2738dEmbvFW84ANhjiQslpgdBOO3rOXnYx'
    }

});