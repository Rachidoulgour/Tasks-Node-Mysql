const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3500)

app.use(require('./routes'));



app.use('/public', express.static(path.resolve('public')));
app.listen(app.get('port'), ()=>{
    console.log('Server is lintening on port', app.get('port'))
})