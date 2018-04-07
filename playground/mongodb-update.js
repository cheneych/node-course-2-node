const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if (err){
		return console.log('Unable to connect');
	}
	console.log('Connected to MongoDB');

	const db=client.db('TodoApp');

	db.collection('User').findOneAndUpdate({
		_id:new ObjectID("5ac47a7df30e7614e8fa6953"),
	},{
		$set:{
			name:'Trump'
		},
		$inc:{
			age:1
		}
	},{
			returnOriginal:false
		}).then((result)=>{
			console.log(result);
		});
	});