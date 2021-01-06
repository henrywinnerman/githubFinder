class Github{
  constructor() {
    this.client_id = '4a86b0887f3599ce0a47';
    this.client_secret = 'd2c13ef41dbcdbe292daa212a4493e82636054e5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }


  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await reposResponse.json();


      return{
        profile,
        repos
      }
  }
}

