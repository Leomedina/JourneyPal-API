/**
 * 
 *  Helper Function for hashing passwords
 * 
 */

const bcrypt = require('bcrypt');
const BCRYPT_WORK_FACTOR = 12;

async function hashPass(password) {
  return await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
};

module.exports = hashPass;