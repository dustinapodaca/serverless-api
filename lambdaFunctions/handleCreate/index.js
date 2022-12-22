const dynamoose = require('dynamoose');

const People = dynamoose.model('people-table', {
  id: String,
  name: String,
  age: Number,
  phone: String,
});

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const newPerson = new People({
    id: data.id,
    name: data.name,
    age: data.age,
    phone: data.phone,
  });

  try {
    await newPerson.save();
    return {
      statusCode: 201,
      body: JSON.stringify(newPerson)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};