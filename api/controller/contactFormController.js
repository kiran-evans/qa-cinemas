const asyncHandler = require('express-async-handler'); //have functions in controller

const contactFormSchema = require('../model/formModel');

const getForms = asyncHandler(async (req, res) => {
  const schema = await contactFormSchema.find();
  res.status(200).json(schema);
});

const getFormByID = asyncHandler(async (req, res) => {
  const schema = await contactFormSchema.findById(req.params.id);
  res.status(200).json(schema);
});

const setForm = asyncHandler(async (req, res) => {
  const schema = await contactFormSchema.create({
    header: req.body.header,
    userEmail: req.body.userEmail,
    body: req.body.body,
  });
  res.status(200).json(schema);
});

// const updateForm = asyncHandler(async (req, res) => {
//   const schema = await contactFormSchema.findById(req.params.id);

//   if (!schema) {
//     res.status(400).json({ message: `Form not found` });
//   }

//   const updateSchema = await contactFormSchema.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true,
//     }
//   );
//   res.status(200).json(updateSchema);
// });

const deleteForm = asyncHandler(async (req, res) => {
  const schema = await contactFormSchema.findById(req.params.id);
  await schema.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getForms,
  getFormByID,
  setForm,
  // updateForm,
  deleteForm,
};
