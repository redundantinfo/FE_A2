# Dependencies

React (v16.8 or higher)

# Installation

1. Clone the repository:
   git clone https://github.com/redundantinfo/FE_A2.git

2. Navigate to the project directory:
   cd FE_A2

3. Install the necessary dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open the application in your browser:
   http://localhost:5173/

# App Component
The App component serves as the main entry point of the application, rendering the navigation bar, movie list, and footer components.

## Component Structure
Navbar: Renders the navigation bar for the application.  
MovieList: Renders the list of movies.  
Footer: Renders the footer information.

## CSS
.App: Styles the main container of the application.

# Navbar Component
The Navbar component provides a responsive navigation bar for the application, including a logo and links.

## State
isMenuOpen: Represents the state of the mobile menu.

## Methods
toggleMenu(): Toggles the state of the mobile menu between open and closed.

## CSS
.navbar: Applies styling to the navigation bar container.  
.navbar-logo: Styles the logo section of the navigation bar.  
.navbar-links: Styles the container for the navigation links.  
.open: Styles to display the menu links when the menu is open.  
.hamburger: Styles the hamburger icon for mobile menu.  
.line: Styles the individual lines of the hamburger icon.  
ul: Styles the unordered list of navigation links.  
li: Styles the individual list items of navigation links.  
a: Styles the anchor links in the navigation.

# MovieList Component

The MovieList component displays a list of movies along with their screening information. Users can choose sorting options to order the movies in different ways.

## State
screenings (array): Contains the list of movie screenings.  
movies (array): Contains the list of movies.  
sortOption (string): Represents the current selected sorting option.  

## Sorting Options
title: Sorts movies by their titles alphabetically.  
description.length: Sorts movies by their duration in minutes.  
description.categories: Sorts movies by their categories.  
date: Sorts movies by their screening dates.  

## Sorting Function

The sortedMovies() function sorts the movies based on the selected sorting option. It calculates values for comparison based on the chosen option and then sorts the movies accordingly. 

sortedMovies holds the sorted list of movies.  

movies.slice() creates a shallow copy of the movies array.  

The sort function is called on the copied array with a comparison function as an argument. The comparison function determines the order of elements in the sorted array.  

Inside the comparison function, aValue and bValue are calculated based on the sortOption. The sortOption represents the chosen sorting criteria.  

The conditional operators are used to calculate the values for aValue and bValue based on sortOption.  

If sortOption is 'description.length', the length of the movie's description is used for comparison.  

If sortOption is 'description.categories', the categories from the movie's description are joined into a comma-separated string and used for comparison.  

If sortOption is 'date', the screening is extracted using screenings.find(), based on the movieId and converted into a Date object for comparison.  

For other cases, the value of the selected sorting option is directly used for comparison.  

The if statement checks if both aValue and bValue are strings. If they are, a comparison using localeCompare is performed. If they are not strings (e.g., numbers), a numerical comparison is performed using subtraction.  

The result of the comparison determines the order of the elements. If the comparison result is negative, a comes before b in the sorted array. If the result is positive, b comes before a. If the result is zero, the order remains unchanged.  

The sorted array is then returned.  

__The sorting options and their respective values are:__  
title: Sorts alphabetically by movie title.  
description.length: Sorts by movie duration in minutes.  
description.categories: Sorts by movie categories.  
date: Sorts by screening date.   

# Footer Component
The Footer component displays footer information including links to privacy policy, terms of use, and contact, along with the copyright information.

## CSS
.footer: Applies styling to the footer container.  
.footer-links: Styles the container for the footer links.  
.footer-links a: Styles the individual footer links.  
.footer-copyright: Styles the copyright information.  

## License

This project is licensed under the MIT License.
