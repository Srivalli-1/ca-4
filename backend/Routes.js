const express = require('express');
const router = express.Router();
const Book = require('./schema');


router.get('/abc', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({books});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

	
router.post('/def', async (req, res) => {
  const { genre,author,title } = req.body;
try{
  if (!title|| !author ||!genre) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existing = await Book.findOne({ title });
  if (existing) {
    return res.status(400).json({ message: 'Book already exists' });
  }

  const newBook = new Book({ title,author,genre });
  await newBook.save();
  res.status(200).json({ message: 'Book created successfully' });
}catch(e){
    res.status(500).json({msg:e.message})
}
});


router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Updated successfully', book: updatedBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
