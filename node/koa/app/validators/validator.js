const {
  Validator,
  Rule
} = require('../../core/_validator')

class PositiveIntegerValidator extends Validator {
  constructor() {
    super()
    this.id = [
      new Rule('isInt', '必须是正整数', { min: 1 })
    ]
  }
}

module.exports = {
  PositiveIntegerValidator
}
