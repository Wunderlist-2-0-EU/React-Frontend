import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  axios.create({
    baseUrl: 'https://wunderlist-2.herokuapp.com/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
};

export default axiosWithAuth;