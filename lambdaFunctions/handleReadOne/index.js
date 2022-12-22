const dynamoose = require('dynamoose');

const People = dynamoose.model('people-table', {
  id: String,
  name: String,
  age: Number,
  phone: String,
});

exports.handler = async (event) => {
  let id;
  if (typeof event.pathParameters.id !== 'undefined' || null) {
    id = event.pathParameters.id;
  }
  if (id) {
    // retrieve single record
    try {
      const person = await People.get(id);
      if (person) {
        return {
          statusCode: 200,
          body: JSON.stringify(person)
        };
      } else {
        return {
          statusCode: 404,
          body: 'Record not found'
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error)
      };
    }
  }
};