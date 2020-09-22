/**
 * 
 * Middleware for validating JSON schemas
 * 
 */

const jsonschema = require("jsonschema");
const userSchema = require("../schemas/usersSchema.json");
const ExpressError = require("../helpers/ExpressError");

/** Validator for User JSON Schema */
function valUserSchema(req, res, next) {
  try {
    const result = jsonschema.validate(req.body, userSchema);
    if (!result.valid) {
      const errorStack = result.errors.map(e => e.stack);
      throw new ExpressError(errorStack, 400);
    };
    return next();
  } catch (error) {
    return next(error);
  };
};

module.exports = { valUserSchema };