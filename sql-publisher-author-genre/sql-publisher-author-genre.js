var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema = Schemas.OPTION_6; // TODO: Update this constant
// As publisher has many authors and author has many publishers,
// we need another table which explain their relationship

var sqlPublisherGenreSchema = Schemas.OPTION_4; // TODO: Update this constant
// if publisher have only one genre, publisher should have id_genre. 
// option 6 is still available, but it will spend more database

var sqlAuthorGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// As Author has many genres and genre has many Authors,
// we need another table which explain their relationship
