class Github {
constructor(){
    this.client_id = 'd8f2d19100a689a74c01'
    this.client_secret = 'fde4363d7ee7d36cfa30804136ab4a433f66973e'
    this.repos_count = 9 ;
    this.repos_sort = 'created: asc' ;
}

async  getUser(user){
   const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

   const repoResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

const profile = await profileResponse.json() ;

const repos = await repoResponse.json() ;

return {
    profile ,
    repos
}

}

} ;