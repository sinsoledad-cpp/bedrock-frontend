import request from '../index'

export function signup(data) {
  return request.post('/users/signup', data)
}

export function login(data) {
  return request.post('/users/login', data)
}

export function sendLoginSmsCode(data) {
  return request.post('/users/login_sms/code/send', data)
}

export function loginWithSms(data) {
  return request.post('/users/login_sms', data)
}

export function sendResetPasswordCode(data) {
  return request.post('/users/password_reset/code/send', data)
}

export function resetPassword(data) {
  return request.post('/users/password_reset', data)
}

