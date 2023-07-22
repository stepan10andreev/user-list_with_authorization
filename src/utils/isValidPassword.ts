export const isValidPassword = (password: string) => {
  const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g

  return PASSWORD_REGEXP.test(password)
}
