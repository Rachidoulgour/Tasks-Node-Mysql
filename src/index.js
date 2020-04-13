const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3500)


app.listen(app.get('port'), ()=>{
    console.log('Server is lintening on port', app.get('port'))
})