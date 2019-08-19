// Закусочная

// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)

// Можно добавить добавки:

// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).

// Напишите программу, расчитывающую стоимость и калорийность гамбургера.



class Humburger {

    // Размеры гамбургеров:
    static sizeSmall = {
        cost : 50,
        calorie : 20
    };

    static sizeLarge = {
        cost : 100,
        calorie : 40
    };

    // Виды начинок:
    static cheese = {
        cost : 10,
        calorie : 20
    };

    static salad = {
        cost : 20,
        calorie : 5
    };

    static potatoes = {
        cost : 15,
        calorie : 10
    };

    // Добавки к гамбургеру:
    static flavoring = {
        cost : 15,
        calorie : 0
    };

    static mayonnaise = {
        cost : 20,
        calorie : 5
    };

    constructor (size, stuffing){
        this.addingToppings = []
        this.price = size.cost + stuffing.cost;
        this.calories = size.calorie + stuffing.calorie;
    }

    addTopping (toping) {  
        this.addingToppings.push(toping);
    }

    calculateCalories () {  
        
        return this.addingToppings.reduce((sum, addTopping) =>{
            return sum + addTopping.calorie;
        }, this.calories);
    }

    calculatePrice () {

        return this.addingToppings.reduce((sum, addTopping) =>{
            return sum + addTopping.cost;
        }, this.price)
    }
};

// Пример подсчета скопирован из примера задания:

// маленький гамбургер с начинкой из сыра

const hamburger = new Humburger (Humburger.sizeSmall, Humburger.cheese);

// // добавка из майонеза

hamburger.addTopping(Humburger.mayonnaise);

// // спросим сколько там калорий

console.log(`Calories: ${hamburger.calculateCalories()}`);

// // сколько стоит

console.log(`Price: ${hamburger.calculatePrice()}`);

// // я тут передумал и решил добавить еще приправу

hamburger.addTopping(Humburger.flavoring);

// // А сколько теперь стоит?

console.log(`Price with sauce: ${hamburger.calculatePrice()}`);