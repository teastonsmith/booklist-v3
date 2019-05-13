let id = 1;

let books = [
	{
		id: id++,
		title: 'The War of the Worlds',
		author: 'H.G. Wells',
		genre: 'Science Fiction',
		pages: 192,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/3/30/The_War_of_the_Worlds_first_edition.jpg',
	},
	{
		id: id++,
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		genre: 'Young Adult',
		pages: 277,
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg',
	},
	{
		id: id++,
		title: 'Slaughterhouse-Five',
		author: 'Kurt Vonnegut',
		genre: 'Historical Fiction',
		pages: 275,
		imageUrl: 'https://images.gr-assets.com/books/1440319389l/4981.jpg',
	},
	{
		id: id++,
		title: 'A Clockwork Orange',
		author: 'Anthony Burgess',
		genre: 'Dystopian Science Fiction',
		pages: 192,
		imageUrl: 'https://images.gr-assets.com/books/1348339306l/227463.jpg',
	},
	{
		id: id++,
		title: 'Harry Potter and the Goblet of Fire',
		author: 'J.K. Rowling',
		genre: 'Young Adult',
		pages: 734,
		imageUrl: 'https://images.gr-assets.com/books/1361482611l/6.jpg',
	},
];

module.exports = {
	create: (req, res) => {
		const { title, author, genre, pages, imageUrl } = req.body;
		// dry out with line 70

		const book = {
			id: id++,
			title,
			author,
			genre,
			pages: +pages,
			imageUrl,
		};

		books.push(book);
		res.send(books);
	},

	read: (req, res) => {
		res.send(books);
	},

	update: (req, res) => {
		const { title, author, genre, pages, imageUrl } = req.body;

		const updatedBook = {
			id: req.params.id,
			title,
			author,
			genre,
			pages: +pages,
			imageUrl,
		};

		const i = books.findIndex(book => +book.id === +req.params.id);

		books.splice(i, 1, updatedBook);
		res.send(books);
	},

	delete: (req, res) => {
		const { id } = req.params;

		const i = books.findIndex(book => +book.id === +id);
		books.splice(i, 1);
		res.send(books);
	},
};
