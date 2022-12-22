const dynamoose = require('dynamoose');

const People = dynamoose.model('people-table', {
  id: String,
  name: String,
  age: Number,
  phone: String,
});

exports.handler = async (event) => {
  let id = event.pathParameters.id;
  try {
    const person = await People.get(id);
    if (person) {
      await person.delete();
      return {
        statusCode: 204,
        body: {}
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
};