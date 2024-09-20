const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

const createContact = (req, res) => {
  res.status(200).json({ message: "Create Post" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Create Post ${req.parmas.id}` });
};

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update Post ${req.parmas.id}` });
  };

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Post ${req.parmas.id}` });
  };

  

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
