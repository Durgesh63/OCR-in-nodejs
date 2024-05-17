const {app} = require('./src/App.js');
const bdConnect = require('./src/db/db.connection.js');


bdConnect()
.then(()=>{
    app.listen(3000,()=>{
        console.log(`Server is running at 3000`);
    })

})
.catch((err)=>{
    console.log("Error :",err);
})