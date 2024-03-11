// add ingredients to the arrays for the dropdown lists
const bunobjects = ['sesame', 'whole grain', 'gluten-free'];
const garnishobjects = ['lettuce and tomato', 'onions and pickles', 'jalapenos and olives'];
const cheeseobjects = ['cheddar', 'swiss', 'american'];
const sauceobjects = ['mayo', 'ketchup', 'bbq'];
const meatobjects = ['beef', 'chicken', 'vegetarian'];
const pattyCountobjects = ['single', 'double', 'triple'];
const extrasobjects = ['bacon', 'mushrooms', 'avocado'];

// add items to the dropdown lists
window.onload = function() {
    populateDropdown('bun', bunobjects);
    populateDropdown('garnish', garnishobjects);
    populateDropdown('cheese', cheeseobjects);
    populateDropdown('sauce', sauceobjects);
    populateDropdown('meat', meatobjects);
    populateDropdown('pattyCount', pattyCountobjects);
    populateDropdown('extras', extrasobjects);
};

// Function to populate a dropdown list
function populateDropdown(id, objects) {
    const select = document.getElementById(id);
    objects.forEach(function(option) {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

// Function to create and describe a hamburger
function createAndDescribeHamburger() {
    const objects = {
        bun: document.getElementById('bun').value,
        garnish: document.getElementById('garnish').value,
        cheese: document.getElementById('cheese').value,
        sauce: document.getElementById('sauce').value,
        meat: document.getElementById('meat').value,
        pattyCount: document.getElementById('pattyCount').value,
        extras: document.getElementById('extras').value
    };

    const hamburgerDescription = `Ohh nice, you got a ${objects.pattyCount} patty ${objects.meat} burger with ${objects.bun} bun, ${objects.garnish}, ${objects.cheese} cheese, a bit of ${objects.sauce}, and extra ${objects.extras}.`;
    document.getElementById('hamburgerDescription').textContent = hamburgerDescription;
}