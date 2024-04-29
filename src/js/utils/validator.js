/**
 *
 * @param {string} value
 */
export const validator = (value) => {
  return {
    test(rules) {
      const result = {}

      for (let key in rules) {
        switch (key) {
          case 'include':
            result[key] = rules[key].map((regExp) => regExp.test(value))
            break
          case 'maxLength':
            result[key] = value.length <= rules[key]
            break
          case 'minLength':
            result[key] = value.length >= rules[key]
        }
      }
      return result
    }
  }
}
