const express = require('express');
require('app-module-path').addPath(__dirname);
const router = express.Router();

router.get('/', (req, res) => {
        res.sendFile('index.html', {
          root: './views'
        });
  
})


module.exports = router;