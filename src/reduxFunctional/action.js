import { API } from "../../backend";
import axios from 'axios';

export const signin = user => {
    return fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export async function LoginFunction(data) {
    let result = await axios.post(`${API}/signin`,data,
      {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      },
    );
    // dispatch({type: COUNTERSALE_LOGIN, payload: result});
    return result.data;
  }