const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;
const app = express();

// Serve build if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(__dirname + '/client/build/'));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
