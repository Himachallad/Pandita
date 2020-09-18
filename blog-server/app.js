const express = require ('express');
const app = express();
app.get('/',(req, res) => {
    res.send('Welcome');

});

app.listen(8080,function(){
    console.log('server started on port 8080');
});
