Mongodb:
PROS:
- Fast in place updates
- Fast queries
CONS
-No joins


More info: 6 Rules of Thumb for MongoDB Schema Design: Part 1

http://blog.mongodb.org/post/87200945828/6-rules-of-thumb-for-mongodb-schema-design-part-1

Remember: Arrays that **grow without bound are always a bad choice on mongodb**.

Siempre crearemos nuestra base de datos en función de lo que necesitaremos preguntar.

### Database Design principles:
1- **Store what you query for**.
		
	The way you store data should reflect how you use it in your application.

	Example:
	We want to store users and the reviews that user made. So we create two collections:

	Users = {
		username : 'jorge'
	}
	
	Reviews = [
		{
			score: 6,
			author: 'jorge'
		},
		{
			score: 10,
			author: 'jorge'
		}
	]

	So jorge, has 2 reviews. And the average is 8. Instead of making 2 queries, one to get the user and other to get the reviews. Is a good design principle to store what we want to ask for.

	In this case, a possible solution could be to store the average value on the user document:

	Users = {
		username : 'jorge',
		average: 8
	}

	So we only need to ask in one place. And we don't need to traverse all the reviews documents.

2- **Least cardinality principle**
	
	Guideline to solve one to many and many to many relationships.

	1 to many.
	**Instead of saving an array** of documents in the user.

	Users = {
		username : 'jorge',
		reviews : [ 
			1010201021021,
			2302302032032
		]
	}
	
	Reviews = [
		{
			_id: 1010201021021
			score: 6
		},
		{
			_id: 2302302032032
			score: 10
		}
	]

	**Reference each review** to the user posted the review.

	Users = {
		username : 'jorge'
	}
	
	Reviews = [
		{
			score: 6,
			author: 'jorge'
		},
		{
			score: 10,
			author: 'jorge'
		}
	]


	That's because the number of reviews of a user can grow a lot. so the documents of the user could be really huge. And also, because if we have to update the user each time we add new reviews, we also need to update or erase when we delete a review. So our database complexity could be increase.

	- Another example:

	If we have users and events (where user can join the events). It's better to store the user attendes on the events instead of users.

	Users
	{
		name: 'Jorge'
	},
	{
		name: 'Jack'
	}

	Events:
	{
		name: 'Meetup',
		attendes: []
	}
	{
		name: 'Meetup2',
		attendes: []
	}


