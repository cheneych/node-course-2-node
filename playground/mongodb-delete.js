const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if (err){
		return console.log('Unable to connect');
	}
	console.log('Connected to MongoDB');

	const db=client.db('TodoApp');

	// db.collection('User').deleteMany({name:'Trump'}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text:'Eat'}).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('User').findOneAndDelete({_id:new ObjectID("5ac90a298d4bad244c557afa")}).then((result)=>{
		console.log(JSON.stringify(result,undefined,2));
	});
})