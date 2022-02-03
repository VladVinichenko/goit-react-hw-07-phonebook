export const logger = (store) => (next) => (action) => {
  return next(action)
}