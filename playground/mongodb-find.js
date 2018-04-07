const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const db=client.db('TodoApp');
	// db.collection('Todos').find({
	// 	// _id:new ObjectID('5ac47962c576f429b015219f')
	// 	_id:'5ac47962c576f429b015219f'
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos count: ${count}`);
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });

	db.collection('User').find({name:'Trump'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});
	// db.close();
})