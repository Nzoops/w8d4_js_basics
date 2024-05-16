# JavaScript Basics Exercises

## Introduction

In this project, you'll practice JavaScript to master the basic syntax of the language. This project mainly consists of variable declarations, loops, and other programming constructs introduced in the resource of the day. The goal is to master the basics before learning how to animate your site in JS. We'll start light, and you'll simply create an index.html page that will call the script.js file containing your code for the day.

## The Project

For this project, we'll revisit basic programming exercises you've already done during your first weeks at THP. It's an opportunity for you to see the progress you've made and the journey you've taken because your challenge won't be to solve the problem (you've already done that) but to switch from one language to another.

### 1. Hello World

#### 1.1. Hello

Create a script script_1.js that will display "Hello, world!" in the console. You should see the following lines in your console:

"Hello world"

#### 1.2. Hi

Customize the script script_1.js to ask for your first name with a prompt. Store this input in a variable and display: "Hello, first name!" in the console.

### 2. Operations & Loops

#### 2.1 Quick Calculations

Create a script script_2.js that defines the factorial function and calculates the factorial of the number entered by the user. Quick example: factorial(5) = 5*4*3*2*1 and factorial(10) = 10*9*8*7*6*5*4*3*2*1

Here's what the script should do:

// A prompt appears with the following question
"What number do you want to calculate the factorial of?"
// User enters a number (e.g., 4)
// The following result is displayed in the console
"The result is: 24"

#### 2.2 Mario's Pyramid

Ah, Mario's pyramid from the pre-course. What good memories. You'll write a script called script_3.js

Here's what the console should display:

"Hi, welcome to my super pyramid! How many floors do you want?"
  // User enters a number (e.g., 5)
    #
   ##
  ###
 ####
#####

### 3. Data Analysis

#### 3.1. Startup Nation

You're writing a book about American entrepreneurs and researching their birth dates to see if you can identify a successful vintage.

During your research, you come across an array containing famous entrepreneurs and their birth years.

```javascript
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  // other entries...
];
