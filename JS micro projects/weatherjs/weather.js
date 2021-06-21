class Weather {
    constructor(city , state) {
        this.apiKey ='748d347c2d025bdc5982cf9933e72201' ;
        this.city =city ;
        this.state = state ;
    }

    async getWeather() {
        const response = fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${city}.json`)

        const responseData = await response.json()

        return responseData ;

    }

    changeLocation(city ,state){
        this.city =city ;
        this.state = state ;
    }
}