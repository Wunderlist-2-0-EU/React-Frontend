import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
// <<<<<<< liam-sutton
    baseURL: 'https://wunderlist-2.herokuapp.com/',
// =======
//     baseUrl: 'https://wunderlist-2.herokuapp.com/',
// >>>>>>> master
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
};

export default axiosWithAuth;
