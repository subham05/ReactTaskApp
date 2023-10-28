import axios from 'axios';
import APIConstant from '../Constants/APIConstant';

const {BASEURL} = APIConstant;

export const GetApi = async (url: string) => {
  console.log('GetApi: ', `${BASEURL}/${url}`);
  const response: any = await axios.get(`${BASEURL}/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return response;
};

export const PostApi = async (url: string, body: any) => {
  const response: any = await axios.post(`${BASEURL}/${url}`, body, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return response;
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
