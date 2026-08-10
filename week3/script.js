/* ============================================================
   WEEK 3 TASK - MINI CINEMA BOOKING SYSTEM
   ============================================================ */


/* ============================================================
   PART 1 - Movie Information
   ============================================================ */

// Basic variables holding the movie details
let movieName = "Interstellar";
let ticketPrice = 120;
let availableTickets = 20;
let movieRating = 9;

console.log("=== Part 1: Movie Information (Variables) ===");
console.log("Movie Name: " + movieName);
console.log("Ticket Price: " + ticketPrice);
console.log("Available Tickets: " + availableTickets);
console.log("Movie Rating: " + movieRating);

// Same information stored as an object
let movie = {
    name: "Interstellar",
    price: 120,
    availableTickets: 20,
    rating: 9
};

console.log("=== Part 1: Movie Information (Object) ===");
// Accessing at least two properties from the object
console.log("Movie Object - Name: " + movie.name);
console.log("Movie Object - Price: " + movie.price);


/* ============================================================
   PART 2 - Ticket Category (if / else if / else)
   ============================================================ */

let age = 25; // change this value to test the other categories
let category;

if (age < 12) {
    category = "Child";
} else if (age >= 12 && age <= 17) {
    category = "Teen";
} else if (age >= 18 && age <= 59) {
    category = "Adult";
} else {
    category = "Senior";
}

console.log("=== Part 2: Ticket Category ===");
console.log("Age: " + age + " -> Category: " + category);


/* ============================================================
   PART 3 - Choose the Cinema Hall (switch)
   ============================================================ */

let hall = 2; // change this value to test other halls
let hallName;

switch (hall) {
    case 1:
        hallName = "Hall A";
        break;
    case 2:
        hallName = "Hall B";
        break;
    case 3:
        hallName = "VIP Hall";
        break;
    default:
        hallName = "Invalid Hall";
}

console.log("=== Part 3: Cinema Hall ===");
console.log("Selected Hall: " + hallName);


/* ============================================================
   PART 4 - Calculate the Total (with discount)
   ============================================================ */

let numberOfTickets = 6; // change this value to test the discount
let originalTotal = ticketPrice * numberOfTickets;
let discount = 0;
let finalTotal;

// 10% discount when buying 5 tickets or more
if (numberOfTickets >= 5) {
    discount = originalTotal * 0.10;
    finalTotal = originalTotal - discount;
} else {
    discount = 0;
    finalTotal = originalTotal;
}

console.log("=== Part 4: Calculate Total ===");
console.log("Original Total: " + originalTotal);
console.log("Discount: " + discount);
console.log("Final Total: " + finalTotal);


/* ============================================================
   PART 5 - Create a Function (calculateTotal)
   ============================================================ */

// This function receives price and number of tickets
// and RETURNS the total price (no discount logic here,
// discount is handled separately in Part 4 / Bonus)
function calculateTotal(price, tickets) {
    let total = price * tickets;
    return total;
}

// Calling the function and storing the returned value
let totalFromFunction = calculateTotal(ticketPrice, numberOfTickets);

console.log("=== Part 5: calculateTotal Function ===");
console.log("Total from function: " + totalFromFunction);


/* ============================================================
   PART 6 - Seat Numbers Using for
   ============================================================ */

console.log("=== Part 6: Seat Numbers (1 to 10) ===");
for (let i = 1; i <= 10; i++) {
    console.log("Seat " + i);
}

console.log("=== Part 6: Seat Numbers (only booked tickets) ===");
// Prints only the first "numberOfTickets" seats
for (let i = 1; i <= numberOfTickets; i++) {
    console.log("Seat " + i);
}


/* ============================================================
   PART 7 - Available Tickets Using while
   ============================================================ */

let remainingTickets = availableTickets;

console.log("=== Part 7: Selling Tickets (while loop) ===");
while (remainingTickets > 0) {
    remainingTickets--; // sell one ticket
    console.log("Ticket sold. Remaining tickets: " + remainingTickets);
}


/* ============================================================
   PART 8 - do...while
   ============================================================ */

let attempt = 1;

console.log("=== Part 8: Booking Attempts (do...while) ===");
do {
    console.log("Booking attempt: " + attempt);
    attempt++;
} while (attempt <= 3);


/* ============================================================
   PART 9 - Final Function (showBookingSummary)
   ============================================================ */

// Receives the movie name, number of tickets and final price
// and prints a full booking summary
function showBookingSummary(name, tickets, price) {
    console.log("Movie: " + name);
    console.log("Tickets: " + tickets);
    console.log("Final Price: " + price);

    if (tickets > 0) {
        console.log("Booking Status: Confirmed");
    } else {
        console.log("Booking Status: No tickets selected");
    }
}

console.log("=== Part 9: Booking Summary ===");
showBookingSummary(movieName, 3, 360);
showBookingSummary(movieName, 0, 0); // testing the "no tickets" case


/* ============================================================
   PART 10 - Self Learn: Arrays (Bonus)
   ============================================================ */

// An array holding at least 5 movie names
let movies = ["Interstellar", "Inception", "Titanic", "Avatar", "Gladiator"];

console.log("=== Part 10: Arrays ===");

// Print the whole array
console.log("All movies: " + movies);

// Print the first movie (index 0)
console.log("First movie: " + movies[0]);

// Print the last movie (index = length - 1)
console.log("Last movie: " + movies[movies.length - 1]);

// Add one new movie to the end of the array
movies.push("The Matrix");
console.log("After adding a movie: " + movies);

// Remove one movie from the end of the array
movies.pop();
console.log("After removing a movie: " + movies);

// Using a for loop to print all movie names
console.log("Looping through all movies:");
for (let i = 0; i < movies.length; i++) {
    console.log((i + 1) + ". " + movies[i]);
}


/* ============================================================
   BONUS CHALLENGE - Normal / VIP Tickets
   ============================================================ */

// Function that calculates the final price based on ticket type
// (Normal = 120, VIP = 200), with a 15% discount on 5+ VIP tickets
function calculateBonusTotal(ticketType, tickets) {
    let price;

    switch (ticketType) {
        case "normal":
            price = 120;
            break;
        case "vip":
            price = 200;
            break;
        default:
            console.log("Invalid ticket type");
            return 0;
    }

    let total = price * tickets;

    // Extra discount only applies to VIP tickets bought in bulk
    if (ticketType === "vip" && tickets >= 5) {
        total = total - (total * 0.15);
    }

    return total;
}

console.log("=== Bonus Challenge: Normal / VIP Tickets ===");
console.log("5 Normal tickets total: " + calculateBonusTotal("normal", 5));
console.log("5 VIP tickets total (with 15% discount): " + calculateBonusTotal("vip", 5));
console.log("2 VIP tickets total (no discount): " + calculateBonusTotal("vip", 2));