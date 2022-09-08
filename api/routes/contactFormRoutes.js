const express = require('express');
const router = express.Router();
const {
  getForms,
  getFormByID,
  setForm,
  // updateForm,
  deleteForm,
} = require('../controller/contactFormController');

router.route('/').get(getForms).post(setForm);
router.route('/:id').delete(deleteForm).get(getFormByID);

module.exports = router;
