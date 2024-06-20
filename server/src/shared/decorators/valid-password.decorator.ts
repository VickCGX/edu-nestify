import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'

@ValidatorConstraint({ async: false })
export class IsValidPasswordConstraint implements ValidatorConstraintInterface {
  validate(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password)
  }

  defaultMessage(): string {
    return 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
  }
}

export function IsValidPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidPasswordConstraint
    })
  }
}
