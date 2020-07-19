import fetch from 'isomorphic-fetch';
import { API_URL } from './constants';
import { toast } from 'react-nextjs-toast';

const BUSINESS_API = `${API_URL }business/`;

const saveBusiness = (name, email, message) => {
  fetch(BUSINESS_API, {
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  }).then((response) => {
    toast.notify(`Mensaje Enviado. Gracias por ser parte de Guan.`, {duration: 5, type: "success"});
    return response.json();
  }).catch((error) => {
    toast.notify(`Mensaje no Enviado. Resolveremos el problema pronto.`, {duration: 5, type: "error"});
  });
};

export default saveBusiness;
