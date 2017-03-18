import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import PostModel from './models/Post';

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// mongoose.Promise = global.Promise; only if the browser-console shows promise Warning
mongoose.connect("mongodb://abroad:dansko123@ds113650.mlab.com:13650/abroad", err => {
	if(err) console.log(err);
});

app.get('/api/posts',(req,res) => {
	PostModel.find(req.query,(err,posts) => {
		if(err) console.log(err);
		res.json(posts);
	});
});

// app.get('/api/todos/:id',(req,res) => {
// 	const todoId = mongoose.Types.ObjectId(req.params.id);
// 	TodoModel.findOne({_id:todoId},(err,todo) => {
// 		if(err) console.log(err);
// 		res.json(todo);
// 	});
// });

app.get('*',(req, res) => {
  		res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.put('/api/todos/:id',(req,res) => {

// 	const todoId = mongoose.Types.ObjectId(req.body._id);

// 	TodoModel.findOneAndUpdate({_id:todoId}, req.body,(err, doc) => {
//     if (err) return res.status(500).send({ error: err });
//     return res.send(doc);
// 	});
// });

// app.delete('/api/todos/:id',(req,res) => {
// 	const todoId = mongoose.Types.ObjectId(req.params.id);
// 	TodoModel.remove({_id:todoId},err => {
// 		if (err) return res.status(500).send({ error: err });
// 		return res.status(200).send();
// 	});
// });

// app.post('/api/todos/', (req, res) => {
//   const newTodo = new TodoModel(req.body);
//   newTodo.save(err => {
// 	if(err) console.log(err);
//   });
//   res.json(newTodo);
//  });

const server = app.listen(process.env.PORT || 8080, () => {
	const port = server.address().port;
	console.log("Started server at port", port);
});