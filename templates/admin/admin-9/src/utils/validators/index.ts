// Email validation
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Phone validation
export function isValidPhone(phone: string): boolean {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phone);
}

// Password validation (min 8 chars, 1 letter, 1 number)
export function isStrongPassword(password: string): boolean {
  return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}
