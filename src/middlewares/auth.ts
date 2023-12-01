const authValidation = async () => {

  if (!localStorage.getItem('jwtToken')) {
    return false
  }

  return true
}

export {
  authValidation
}