const people = [
    {
        firstName: false,
        lastName: 2,
    },
    {
        firstName: "Roman",
        lastName: "Kowalski",
    },

    {
        firstName: "Halina",
        lastName: "Malina",
    },
    {
        firstName: "B",
        lastName: "22",
    },
    {
        firstName: "Jan",
        lastName: "Nowak",
    },
    {
        firstName: "Kamil",
        lastName: null,
    },
];

const nickNames = people.map((person) => {
    if (
        typeof person.firstName === "string" &&
        typeof person.lastName === "string" &&
        person.firstName.length >= 3 &&
        person.lastName.length >= 3
    ) {
        const names = person.firstName
            .toLowerCase()
            .slice(-3)
            .split("")
            .reverse()
            .join("");
        const bigLetter = names.slice(0, 1).toUpperCase();
        const smallLetter = names.slice(1, 3);
        const newNames = `${bigLetter}${smallLetter}`;

        const lastNames = person.lastName
            .slice(0, 3)
            .toLowerCase()
            .split("")
            .reverse()
            .join("");
        const nickNames = `${newNames}${lastNames}`;

        return {
            firstName: person.firstName,
            lastName: person.lastName,
            nickname: nickNames,
        };
    } else return { firstName: person.firstName, lastName: person.lastName };
});
// console.log(nickNames)

const newArray = nickNames.filter((person) => {
    return person.nickname;
});
const ageUsers = newArray.map((person) => {
    const lengthFirstName = person.firstName.length;
    const lengthLastName = person.lastName.length;
    const age = lengthFirstName + lengthLastName;

    {
        if (age % 2 === 0) {
            return {
                firstName: person.firstName,
                lastName: person.lastName,
                nickname: person.nickname,
                age: age,
            };
        } else {
            const array = Object.keys(person);
            const sumKeys = array
                .toString()
                .split("")
                .filter((string) => string !== ",")
                .reduce((total) => total + 1, 0);
            let indexPeople = newArray.indexOf(person);

            if (indexPeople <= 0) {
                indexPeople = 1;
            }
            const ageUser = sumKeys / indexPeople;
            const ceilAgeUser = Math.ceil(ageUser);
            return {
                firstName: person.firstName,
                lastName: person.lastName,
                nickname: person.nickname,
                age: ceilAgeUser,
            };
        }
    }
});
// console.log(ageUsers)

const moreLetter = ageUsers.map((person) => {
    const connectLetter = `${person.firstName.toLowerCase()}${person.lastName.toLowerCase()}${person.nickname.toLowerCase()}`;
    const sumLetter = {};
    for (const letter of connectLetter) {
        if (sumLetter[letter]) {
            sumLetter[letter]++;
        } else {
            sumLetter[letter] = 1;
        }
    }
    let count = 0;
    let letterCount = "ź";
    for (const letter in sumLetter) {
        if (
            sumLetter[letter] > count ||
            (sumLetter[letter] === count &&
                letterCount.charCodeAt(0) >= letter.charCodeAt(0))
        ) {
            count = sumLetter[letter];
            letterCount = letter;
        }
    }
    return {
        firstName: person.firstName,
        lastName: person.lastName,
        nickname: person.nickname,
        age: person.age,
        mostCommonLetter: `{letter: ${letterCount} , count: ${count}}`,
    };
});
console.log(moreLetter);
