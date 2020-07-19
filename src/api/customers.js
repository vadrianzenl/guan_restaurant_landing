import fetch from 'isomorphic-fetch';
import { API_URL } from './constants';
import { toast } from 'react-nextjs-toast';

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
    toast.notify(`Mensaje Enviado. Gracias por ser parte de Guan.`, {duration: 5, type: "success"});
    return response.json();
  }).catch((error) => {
    toast.notify(`Mensaje no Enviado. Resolveremos el problema pronto.`, {duration: 5, type: "error"});
  });
};

export default saveCustomer;
