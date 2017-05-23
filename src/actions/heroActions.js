import axios from 'axios'

import {FETCH_HERO} from './constants'


export const getHerolist = () => {
  return dispatch =>
    axios.get('http://api.herostats.io/heroes/all')
    .then(response =>{
      return dispatch({
        type : FETCH_HERO,
        payload : response.data
      })
    })
    .catch(err=>{
      console.log(err);
    })

}
