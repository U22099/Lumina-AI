import axios from 'axios';
import origin from '../../config/origin.json';
import storage from './localStorage.js';
import {getToken} from './token.js';

const logOut = async (navigate) => {
    try {
      const url = `${origin.default.origin}/logout?token=${getToken('__A')}`;
      const response = await axios.post(url, {});
      if (response.status === 200) {
        storage.setValue("logged", false);
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
};

export default logOut