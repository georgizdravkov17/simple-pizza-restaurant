import axios from 'axios';

class Service {
  constructor(apiUrl){
     this.apiUrl = apiUrl;
  }

  getAll(){
      return axios.get(this.apiUrl);
  }

  getLimitedCount(limit){
      return axios.get(this.apiUrl, { params: { _limit: limit } });
  }
}

export default Service;