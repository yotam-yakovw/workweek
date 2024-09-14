import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
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

const getUser = () =>
  api
    .get('/users', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
    .then((res) => res.data);

const getWorkplace = () =>
  api
    .get('workplaces', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
    .then((res) => res.data);

const editWorkplace = (values) =>
  api
    .post('workplaces', values, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
    .then((res) => console.log(res));

const getAllData = () => {
  const user = getUser();
  const workplace = getWorkplace();

  return Promise.all([user, workplace]).then((data) => {
    return { user: data[0], workplace: data[1] };
  });
};

export { getAllData, signIn, editWorkplace };
