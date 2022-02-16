class UserService {

    async getFetchWithHeader(apiURL){
        return fetch(apiURL, {
            method: 'GET',
            headers:{'Authorization': 'Bearer ' + localStorage.access_token}
          })
    }

    async postFetchWithHeader(apiURL, body){
        return fetch(apiURL, {
            method: 'POST',
            headers:{'Authorization': 'Bearer ' + localStorage.access_token, 'Content-Type': 'application/json'},
            body: body
          })
    }

    async putFetchWithHeader(apiURL, body){
        return fetch(apiURL, {
            method: 'PUT',
            headers:{'Authorization': 'Bearer ' + localStorage.access_token},
            body: body
          })
    }

    async deleteFetchWithHeader(apiURL, body){
        return fetch(apiURL, {
            method: 'DELETE',
            headers:{'Authorization': 'Bearer ' + localStorage.access_token},
            body: body
          })
    }

}

export default new UserService();

