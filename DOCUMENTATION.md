# Project Documentation: Simple Calculator

## 1. Introduction

The Simple Calculator is a small front-end web application developed as a beginner programming project. It helps a user perform common mathematical calculations such as addition, subtraction, multiplication and division. The project uses HTML for structure, CSS for design and JavaScript for functionality.

## 2. Objective

The main objective is to understand how a basic web application works and apply programming fundamentals in a practical project. The project demonstrates variables, functions, conditions, a `switch` statement, event handling and DOM manipulation.

## 3. Problem Statement

A user may need a quick way to perform basic calculations. This project provides a simple interface where the user can enter numbers and select an arithmetic operation using buttons or a keyboard.

## 4. Scope

The current version supports the four basic arithmetic operations, decimal values, percentage conversion, clearing and deleting input, keyboard interaction and a message for division by zero. It is a client-side project and does not store calculation history.

## 5. Requirements

### Hardware
- A computer, laptop or smartphone capable of running a modern web browser.

### Software
- A modern web browser such as Chrome, Firefox or Edge.
- A text editor such as Visual Studio Code (optional, for viewing or editing code).

### Technologies
- HTML5
- CSS3
- Vanilla JavaScript

## 6. System Design

### Input
The user enters digits and selects an operation. Input can come from the on-screen buttons or supported keyboard keys.

### Processing
JavaScript stores the current number, previous number and selected operator. When the user presses `=`, a `switch` statement selects the required arithmetic operation and calculates the result.

### Output
The result is displayed in the calculator display area. If the user tries to divide by zero, the display shows `Error` and a short message is shown below the keypad.

### Basic flow

```text
Start
  |
  v
Open calculator
  |
  v
Enter first number
  |
  v
Choose operator
  |
  v
Enter second number
  |
  v
Press equals (=)
  |
  v
Perform selected calculation
  |
  v
Display result or error
  |
  v
Continue or clear
```

## 7. Module Description

| Module | Responsibility |
|---|---|
| `appendNumber()` | Adds a digit to the current input |
| `chooseOperator()` | Stores the selected arithmetic operator |
| `calculate()` | Performs the selected calculation |
| `clearCalculator()` | Resets all calculator values |
| `deleteNumber()` | Removes the last entered character |
| `addDecimal()` | Adds a decimal point when valid |
| `applyPercent()` | Converts the current value to a percentage |
| `updateDisplay()` | Updates the values shown on screen |

## 8. Algorithm

1. Start the application and initialise the calculator values.
2. Wait for a button click or supported keyboard input.
3. If a digit is entered, add it to the current number.
4. If an operator is selected, store the current number and operator.
5. Read the next number.
6. When equals is selected, check the stored operator.
7. Perform the corresponding arithmetic operation.
8. For division, check whether the second number is zero.
9. Display the result or an error message.
10. Allow the user to continue or clear the calculator.

## 9. Validation and Error Handling

- A second decimal point is not added to the same number.
- The calculator prevents division by zero and displays an error.
- The display length is limited while entering digits to keep the interface readable.
- The calculation result is rounded to a practical precision to reduce floating-point display noise.

## 10. Testing

Manual test cases are listed in `TESTING.md`. The project should be tested in a modern browser on both a desktop and a mobile-sized screen.

## 11. Limitations

- This is a basic calculator, not a scientific calculator.
- Calculation history is not saved.
- Percentage currently means dividing the current displayed number by 100.
- The calculator does not use order-of-operations expression parsing; it calculates the stored operation as the user proceeds.

## 12. Future Enhancements

- Add calculation history.
- Add scientific functions such as square root and power.
- Add keyboard-accessible focus states and further accessibility improvements.
- Add a theme switcher.

## 13. Conclusion

This project provides practical experience with front-end web development and basic programming logic. It is a starting point for building more advanced projects and improving problem-solving skills.

## 14. Author

**Avinash Kumar**  
BCA, Semester 3  
Beginner-level academic mini project
