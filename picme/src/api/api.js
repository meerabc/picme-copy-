import axios from 'axios';
import {getAccessToken} from '../utils/localStorage';

export const BASE_URL = 'https://api-dev.thepicmeapp.com/api/v1'
axios.defaults.baseURL = BASE_URL;

export const postAPIWithoutAuth = async (url, body) => {
  try {
    const res = await axios.post(url, body);

    return {
      data: res.data,
      status: res.status,
      success: true,
      headers: res.headers,
    };
  } catch (err) {
    return {data: err.response.data, success: false};
  }
};

export const postAPIWithAuth = async (url, body, headers) => {
  try {
    await setApiHeader();
    let res = {};
    if (headers) {
      res = await axios.post(url, body, {headers});
    } else {
      res = await axios.post(url, body);
    }
    return {data: res.data, status: res.status, success: true};
  } catch (err) {
    console.log(err, 'error in post api');
    return {data: err.response.data, success: false};
  }
};

export const putAPIWithAuth = async (url, body) => {
  try {
    await setApiHeader();
    const res = await axios.put(url, body);
    return {data: res.data, status: res.status, success: true};
  } catch (err) {
    console.log(err, 'err');
    return {data: err.response.data, success: false};
  }
};

export const getApiWithAuth = async url => {
  try {
    await setApiHeader();
    const res = await axios.get(url);
    return {data: res?.data, status: res.status, success: true};
  } catch (err) {
    return {data: err?.response?.data, success: false};
  }
};

export const patchApiWithAuth = async (url, body) => {
  try {
    await setApiHeader();
    const res = await axios.patch(url, body);
    return {data: res.data, status: res.status, success: true};
  } catch (err) {
    return {data: err.response.data, success: false};
  }
};

export const deleteApi = async url => {
  try {
    await setApiHeader();
    const res = await axios.delete(url);
    return {data: res.data, status: res.status, success: true};
  } catch (err) {
    return {data: err.response.data, success: false};
  }
};

const setApiHeader = async () => {
  axios.defaults.headers.common.Authorization = await getAccessToken();
};

const RemoveApiHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};
