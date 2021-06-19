class Github {
constructor(){
    this.client_id = 'your key here'
    this.client_secret = 'your key here'
}

async  getUser(user){
   const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

const profile = await profileResponse.json() ;

return {
    profile 
}

}

} ;