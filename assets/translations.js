

const translationsArr = [4, 5, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63];

// map to store tranlation
const translations = {};


translationsArr.forEach((image, index) => {

    switch (translationsArr[index]) {
        case 4:
            // Your code for case 4
            translations[translationsArr[index]] = 'Banana';
            break;
        case 5:
            // Your code for case 5
            translations[translationsArr[index]] = 'Bread';
            break;

        case 35:
            // Your code for case 5
            translations[translationsArr[index]] = 'Cake';
            break;

        case 36:
            // Your code for case 5
            translations[translationsArr[index]] = 'Chicken';
            break;

        case 37:
            // Your code for case 5
            translations[translationsArr[index]] = 'Chip';
            break;

        case 38:
            // Your code for case 5
            translations[translationsArr[index]] = 'Cookie';
            break;

        case 39:
            // Your code for case 5
            translations[translationsArr[index]] = 'Egg';
            break;

        case 40:
            // Your code for case 5
            translations[translationsArr[index]] = 'Fish';
            break;

        case 41:
            // Your code for case 5
            translations[translationsArr[index]] = 'Green Onion';
            break;



        case 42:
            // Your code for case 5
            translations[translationsArr[index]] = 'Green Tea';
            break;

        case 43:
            // Your code for case 5
            translations[translationsArr[index]] = 'Juice';
            break;

        case 44:
            // Your code for case 5
            translations[translationsArr[index]] = 'Lemon';
            break;

        case 45:
            // Your code for case 5
            translations[translationsArr[index]] = 'Melon';
            break;

        case 46:
            // Your code for case 5
            translations[translationsArr[index]] = 'Octopus';
            break;


        case 47:
            // Your code for case 5
            translations[translationsArr[index]] = 'Sake';
            break;

        case 48:
            // Your code for case 5
            translations[translationsArr[index]] = 'Persimmon';
            break;

        case 49:
            // Your code for case 5
            translations[translationsArr[index]] = 'Pie';
            break;

        case 50:
            // Your code for case 5
            translations[translationsArr[index]] = 'Pizza';
            break;

        case 51:
            // Your code for case 5
            translations[translationsArr[index]] = 'Potato';
            break;

        case 52:
            // Your code for case 5
            translations[translationsArr[index]] = 'Ramen';
            break;



        case 53:
            // Your code for case 5
            translations[translationsArr[index]] = 'Rice';
            break;

        case 54:
            // Your code for case 5
            translations[translationsArr[index]] = 'Salad';
            break;

        case 55:
            // Your code for case 5
            translations[translationsArr[index]] = 'Shrimp';
            break;

        case 56:
            // Your code for case 5
            translations[translationsArr[index]] = 'Soba';
            break;

        case 57:
            // Your code for case 5
            translations[translationsArr[index]] = 'Soup';
            break;

        case 58:
            // Your code for case 5
            translations[translationsArr[index]] = 'Strawberry';
            break;

        case 59:
            // Your code for case 5
            translations[translationsArr[index]] = 'Sushi';
            break;

        case 60:
            // Your code for case 5
            translations[translationsArr[index]] = 'Tomato';
            break;

        case 61:
            // Your code for case 5
            translations[translationsArr[index]] = 'Udon';
            break;


        case 62:
            // Your code for case 5
            translations[translationsArr[index]] = 'Wasabi';
            break;


        case 63:
            // Your code for case 5
            translations[translationsArr[index]] = 'Watermelon';
            break;


        // ... additional cases ...
        default:
            return;
    }

    console.log(translations);

});


export default translations; 