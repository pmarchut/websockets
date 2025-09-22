const express = require('express');

// App setup
const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})

// Static files
app.use(express.static('public'));
