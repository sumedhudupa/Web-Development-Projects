const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://admin:admin@learningmongodb.wpbc2.mongodb.net/?retryWrites=true&w=majority&appName=LearningMongodb"
console.log(uri)
const client = new MongoClient(uri);
const dbname = "blog"
const connectToDatabase = async()=>{
    try{
        await client.connect();
        console.log(`Connected to ${dbname} database`);
    } catch(err){
        console.error("Error connecting to database: ",err)
    }
};

const main = async()=>{
    try{
        await connectToDatabase();
        const dblist = await client.db().admin().listDatabases();
        dblist.databases.forEach(db=> console.log(db.name));
        
    }catch(err){
        console.error(`Error connecting to database: ${err}`)
    }finally{
        await client.close();
    }
};
main();