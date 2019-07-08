const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json())

const courses = [
	{id: 1, name: 'course1'},
	{id: 2, name: 'course2'},
	{id: 3, name: 'course3'},
	{id: 4, name: 'course4'},
	{id: 5, name: 'course5'},
];

//400 for bad request body no name or name was not long enough exct.

app.get('/', (req, res) => {
	res.send('hello world!!')
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id))
	if (!course) res.status(404).send('The course with the given id was not found')// 404
	res.send(course)
});

app.get('/api/posts/:year/:month', (req, res) => {
	res.send(req.params)
	//res.send(req.query) for query parameters
});


app.post('/api/courses', (req, res) => {

	console.log(req.body)

	const schema = {
		name: Joi.string().min(3).required(),
	};

	const result = Joi.validate(req.body, schema);

	if (result.error){
		res.status(400).send(result.error.details[0].message)
		return
	}


	const course = {
		id: courses.length + 1,
		name: req.body.name
	};

	courses.push(course);
	res.send(course);
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`listening on port ${port}`)
});
