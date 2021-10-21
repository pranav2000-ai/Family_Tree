const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp').then((result) => console.log('connected')).catch((error) => console.log(error));