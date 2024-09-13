import axios from 'axios';
import Cookies from 'js-cookie';

const isLoggedIn = Cookies.get('token') ? true : false;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: isLoggedIn ? `Bearer ${Cookies.get('token')}` : '',
  },
});

const getUser = () =>
  api
    .get('/users')
    .then((res) => res.data)
    .catch((err) => {
      throw err.response;
    });

const signIn = ({ email, password }) =>
  api
    .post('/signin', {
      email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => {
      if (!err.response) {
        err.response = { data: 'Server had an error!' };
      }
      throw err.response;
    });

const getWorkplace = () =>
  api
    .get('workplaces')
    .then((res) => res.data)
    .catch((err) => console.log(err));

const editWorkplace = (values) =>
  api
    .post('workplaces', values)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export { getUser, signIn, getWorkplace, editWorkplace };
