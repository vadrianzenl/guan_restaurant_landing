import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:8000/api/';
const CUSTOMER_API = `${API_URL }customers/`;

const saveCustomer = (name, email) => {
  fetch(CUSTOMER_API, {
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.log(`Error:${  JSON.stringify(error)}`);
  });
};

export default saveCustomer;
