import axios from 'axios';
import { IAuth } from '../redux/types';
import * as constants from '../utils/constants';

export const GetToken = async (authInfo: IAuth) => {
    try {
      let result = await axios.post(constants.AUTH.POST, authInfo);
      let data = await result;
      return data;
    } catch (e) {
      console.log(e);
      return { status: 500 };
    }
  }