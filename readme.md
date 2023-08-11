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

The sorting options and their respective values are:  
title: Sorts alphabetically by movie title.  
description.length: Sorts by movie duration in minutes.  
description.categories: Sorts by movie categories.  
date: Sorts by screening date.  
For string comparisons, localeCompare is used. For numerical comparisons, subtraction is used.  

# Footer Component
The Footer component displays footer information including links to privacy policy, terms of use, and contact, along with the copyright information.

## CSS
.footer: Applies styling to the footer container.  
.footer-links: Styles the container for the footer links.  
.footer-links a: Styles the individual footer links.  
.footer-copyright: Styles the copyright information.  

## License

This project is licensed under the MIT License.
