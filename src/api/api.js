import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const signIn = () =>
  api
    .post('/signin', {
      email: 'yotamyakov.w@gmail.com',
      password: 'yotam123',
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
      throw err.response;
    });

export { signIn };
