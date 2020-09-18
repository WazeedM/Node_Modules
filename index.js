
// const Person = require('./person');

// const person1 = new Person('Wazeed Mohammad','26');

// person1.greeting();

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener: ${data.id} ${data.msg}`));

logger.log('Hello World!');

