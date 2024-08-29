import axios from 'axios';
import refresh from './refresh.js';
import {getToken} from './token.js';
import storage from "./localStorage.js";
import origin fron '../../config/origin.json';

const updateImage = async (setLoad, image, navigate) => {
  setLoad(true);
    try {
      const url = `${origin.default.origin}/user?token=${getToken('__A')}`;
      const response = await axios.patch(url, {image}, {withCredentials: true});
      setLoad(false);
    } catch (err) {
      if ([401, 403].includes(err.response.status)) {
        const res = await refresh(navigate);
        if (res.status === 200) {
          updateImage(setLoad, image, navigate);
        }
      } else {
        console.log(err);
      }
    }
  };

  export default updateImage