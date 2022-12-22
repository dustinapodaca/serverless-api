const dynamoose = require('dynamoose');

const People = dynamoose.model('people-table', {
  id: String,
  name: String,
  age: Number,
  phone: String,
});

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const data = JSON.parse(event.body);
  try {
    const person = await People.update(
      { id: id },
      { name: data.name, age: data.age, phone: data.phone }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(person)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};