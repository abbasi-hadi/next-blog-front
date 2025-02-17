import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';
import { API } from '../config';

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json()
  }).catch(err => console.log(err));
}
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json()
  }).catch(err => console.log(err));
}

export const signuot = (next) => {
  removeCookie('token');
  removeLocalStorage('user')
  next();
  return fetch(`${API}/signout`, {
    method: "GET"
  }).then(response => {
    console.log('signout success');
  }).catch(err => console.log(err))
}

// set cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    Cookies.set(key, value, {
      expires: 1
    })
  }
}
export const removeCookie = (key) => {
  if (process.browser) {
    Cookies.remove(key, {
      expires: 1
    })
  }
}

//get cookie
export const getCookie = (key) => {
  if (process.browser) {
    return Cookies.get(key);
  }
}
//localstorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
}
export const authenticate = (data, next) => {
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
}

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}