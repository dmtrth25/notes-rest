import { body, ValidationChain } from 'express-validator'

export const validateCreateNote: ValidationChain[] = [
  body('name').isString().notEmpty(),
  body('time').isString().notEmpty(),
  body('content').isString().notEmpty(),
  body('category').isString().notEmpty(),
]

export const validateEditNote: ValidationChain[] = [
  body('name').optional().isString(),
  body('time').optional().isString(),
  body('content').optional().isString(),
  body('category').optional().isString(),
]
