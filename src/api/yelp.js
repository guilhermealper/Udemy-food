import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer i6Zj__siS5hiRDZyr6Jmg56ymD92xmTaSRKnximhRRpVuP7Q6NVnXwHoTX0KesQY21m0Pi4aRyFj02DwyTepp8Id9ubBRvIaH1_Aa0V0tPQu7fHA5HRgozwaXfzQXnYx'
    }

});