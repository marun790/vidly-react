const movies = [
  {
    _id: '1234567891',
    title: 'Terminator',
    genere: { _id: '9876543211', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2010-01-03T19:04:28.809Z'
  },
  {
    _id: '1234567892',
    title: 'Die Hard',
    genere: { _id: '9876543212', name: 'Action' },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: '1234567893',
    title: 'Trip to Italy',
    genere: { _id: '9876543213', name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: '1234567894',
    title: 'Airplane',
    genere: { _id: '9876543214', name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: '1234567895',
    title: 'Wedding Crashers',
    genere: { _id: '9876543215', name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: '1234567896',
    title: 'Gone Girl',
    genere: { _id: '9876543215', name: 'Thriller' },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m.movies === id);
}
