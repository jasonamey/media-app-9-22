export const isValidEmail = (submittedEmail: string): string => {
  if (submittedEmail.length === 0) {
    return "Can't be empty"
  } else if (!/\S+@\S+\.\S+/.test(submittedEmail)) {
    return 'Email invalid'
  } else {
    return ''
  }
}

export const isValidPassword = (submittedPassword: string): string => {
  if (submittedPassword.length === 0) {
    return "Can't be empty"
  } else if (submittedPassword.length < 8) {
    return 'Must be 8 characters'
  } else {
    return ''
  }
}

export const passwordsBothMatch = (pwd1: string, pwd2: string): boolean => {
  if (pwd2.length === 0) {
    return true
  } else {
    return pwd1.length > 7 && pwd1 === pwd2
  }
}

interface IValidationResult {
  error: boolean
  errorMessage: string
}

export class ValidationChecker {
  passwordsBothMatch(pwd1: string, pwd2: string): IValidationResult {
    if (pwd2.length === 0) {
      return { error: true, errorMessage: "Can't be empty" }
    } else if (pwd2 !== pwd1) {
      return {
        error: true,
        errorMessage: "Passwords dont't match",
      }
    } else {
      return { error: false, errorMessage: '' }
    }
  }
  isValidPassword = (submittedPassword: string): IValidationResult => {
    if (submittedPassword.length === 0) {
      return { error: true, errorMessage: "Can't be empty" }
    } else if (submittedPassword.length < 8) {
      return {
        error: true,
        errorMessage: 'Must be 8 characters',
      }
    } else {
      return { error: false, errorMessage: '' }
    }
  }
  isValidEmail = (submittedEmail: string): IValidationResult => {
    if (submittedEmail.length === 0) {
      return { error: true, errorMessage: "Can't be empty" }
    } else if (!/\S+@\S+\.\S+/.test(submittedEmail)) {
      return { error: true, errorMessage: 'Enter a valid email' }
    } else {
      return { error: false, errorMessage: '' }
    }
  }
}
