import { fakerEN_IN as faker } from '@faker-js/faker';

interface RandomObject {
    id: number;
    name: string;
}

const randomObjects: RandomObject[] = [];

for (let i = 1; i < 101; i++) {
    const randomName = faker.commerce.product();
    const randomObject: RandomObject = {
        id: i,
        name: randomName
    };
    randomObjects.push(randomObject);
}

export default randomObjects;
