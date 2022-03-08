# Sudoku Master
Sudoku game website.

Link to [website](https://kristiancolville1.github.io/sudoku-master/)

![Sudoku Master](assets/images/responsive.png)

## Table of Contents
* [Project Goals](#project-goals)
    * [User Goals](#user-goals)
    * [Site Owners Goals](#site-owners-goals)
* [User Experience](#user-experience-ux)
    * [Target Audience](#target-audience)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
* [User Stories](#user-stories)
    * [Site User](#site-user)
    * [Site Owner](#site-owner)
* [Design](#design)
    * [Color Scheme](#color-scheme)
    * [Fonts](#color-scheme)
    * [Structure](#color-scheme)
    * [Wireframes](#wireframes)
    * [How to build Sudoku](#how-to-build-sudoko)
* [Technologies & Tools](#technologies--tools)
* [Features](#features)
* [Validation](#validation)
* [Testing](#testing)
* [Bugs](#bugs)
* [Deployment](#deployment)
    * [Version Control](#version-control)
    * [GitHub Pages](#github-pages)
    * [Cloning this Repository](#cloning-this-repository)
* [credits](#credits)
* [acknowledgements](#acknowledgements)

## Project Goals
The goal of this project was to create an interactive and user-friendly version of the popular game Sudoku.

### User Goals

- To play a puzzle based game that is both challanging and easy to use
- Be able to choose exactly how challanging the game is

### Site Owners Goals

- Create a puzzle based game that is engaging and challanging
- Create a visually attractive design
- Make navigating around the website simplistic
- Build a responsive and accessible website for all users of the website

[Back to the top](#table-of-contents)
## User Experience (UX)

### Target Audience

- This game can be played by anyone that enjoys puzzle based games
- Any user who likes challanging number games with easy to understand rules

### User Requirements and Expectations

- Simplistic game rules
- Simplistic navigation through website
- Responsive website that allows any user to play the game
- Actions which work as expected such as buttons or links
- A way to contact the developer responsible for creating the game
- Ease of accessibility for visually imparied users

[Back to the top](#table-of-contents)

## User Stories

### Site User

1. I want to be able to understand the rules of the game
2. I want to have the ability to enter my name and show it on screen while playing the game
3. I want the ability to choose how difficult the game is
4. I want to play the game by just clicking with the mouse
5. I want the ability to undo my last move in the game
6. I want the ability to see my position in the game
7. I want the ability to keep track of my guesses in the game
8. I want to see how long it takes me to solve the game
9. I want the ability to play the game in darkmode
10. I want to be able to contact the developer responsible for creating the game
11. I want to know that my message to the developer has been sent

### Site Owner

12. I want the user to understand the rules of the game
13. I want the user of the website to have the ability to choose difficulty settings
14. I want my website to be fully responsive so all users can play
15. I want a 404 error page incase the user enters a url that does not exist within the website
16. I want the user to have the ability to contact me about the game and provide feedback for the game


[Back to the top](#table-of-contents)
## Design

### Color Scheme
The color scheme was inspired by the colors of the earth. Other colors were chosen for contrasting reasons between the various shades to add a cohesive style.

- For contrast reasons, the color black was used to increase accessibility scores in areas such as the footer

- The main colors in light mode are the default & they are specifically orientated around the color green. In dark mode, the darker colors are predominately shown with the lighter blue.

- The background image is also affected by the dark mode and has a soft light effect of green and then blue in dark mode.

![Color Palette one](assets/images/colors.png)
![Color Palette Two](assets/images/colors-two.png)

### Fonts
[Google fonts](https://fonts.google.com/) were used and implemented in the website. After user feedback, I chose Raleway sans-serif and Lato sans-serif as my final two fonts for the website. I also found these fonts to be visually appealing and easy to read.

Handwriting fonts were initially considered in the design process but were not implemented after user feedback suggested they drastically affected the visual appeal of the site and were harder to read.

### Structure
The structure of the website was designed to be easily navigated. The whole game is within a single container directly in the centre of the screen. Each menu of the game appears on the screen only when needed.

- The game contains the following screens:

    - Home page with an instructions icon and dark mode icon in the top right corner, a welcome message with game title, and a user login
    - Next is a difficulty menu that informs the user to select a choice
    - The main game screen displays once the user selects a difficulty, it contains the user's name in the top left corner, a digital clock to count how long the user takes to solve the board, the numbers 1 through 9 for selection and three additional choices for eraser, pencil and undoing moves
    - Once the game is finished either by losing or winning the whole board turns the same color and a message appears informing the user of a win or lose
    - Additionally, another smaller screen appears shortly after to check if the user wishes to play another game or to change the difficulty
- If the user clicks the question mark a modal menu pops open showing game rules and basic instructions with a link to a sudoku wikipedia page if the user needs more information about the game and how to play it
- I've also added a contage page form which allows users of the website to send an email through EmailJs to the developer responsible for creating the website so they can share feedback and provide insights
- Incase the user enters a URL that does not exist within the site I have also added a 404 error page to display with a link to the home page

### Wireframes

<details>
<summary>Desktop and large screens</summary>

![Desktop](assets/images/sudoku-master.png)

</details>

<details>
<summary>Tablet and medium screens</summary>

![Tablet](assets/images/sudoku-master-two.png)

</details>

<details>
<summary>Mobile and smaller screens</summary>

![Mobile](assets/images/sudoku-master-three.png)

</details>

#### How to build Sudoko
Here is a [PDF](assets/docs/sudoku.pdf) I created called 'How to generate sudoku game boards by Kristian Colville' it attempts to describe my thought process on how to build the game, the pitfalls encountered and the solutions I implemented for solving the sudoku boards.

[Back to the top](#table-of-contents)
## Technologies & Tools

### Languages Used

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Tools

- [Am I Responsive](http://ami.responsivedesign.is/) was used to generate an image showcasing the websites ability to adapt to different screen sizes at the start of this README.md file
- [Balsamiq](https://balsamiq.com/) was used to create wireframes for use during project development
- [Coolors](https://coolors.co/4e5340-697268-95a3a4-b7d1da-e2e8dd) to generate color palattes and root Hex codes
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) for making the site responsive and debugging the site in a browser
- [EmailJs](https://www.emailjs.com/) provided the ability for users to send email from the contact form
- [Favicon](https://favicon.io/) for the favicon in the website
- [Git](https://git-scm.com/) for version control within [VSCode](https://code.visualstudio.com/) to push commits to [GitHub](https://github.com/)
- [GitHub](https://github.com/) as a remote repository for project development
- [Google Fonts](https://fonts.google.com/) for the fonts used on the website
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) for validating CSS code
- [JShint](https://jshint.com/) for validating JavaScript code
- [Wave Validator](https://wave.webaim.org/) for accessibility validation
- [WC3 Validator](https://validator.w3.org/) for validating HTML code


[Back to the top](#table-of-contents)
## Features
[Back to the top](#table-of-contents)
## Validation
[Back to the top](#table-of-contents)
## Testing
[Back to the top](#table-of-contents)
## Bugs

|    Bug    |    Fix    |
| --- | --- |
| The second array I set up showed the players position in the wrong location between grids 5 & 9 | Created new array for indexs starting from 0 put the players position in the correct location|
| Creating a backtracking algorithm to solve the board with one array for horizontal navigation | Using mutiple arrays for the index helped simplify creating boards, without this no boards could be created|
| The vertical array to hold the values generating the sudoku board not in the correct position | Swapping the outer index with the inner index positioned the value correctly |
| The 3x3 array to hold the values generating the sudoku board not in the correct position | Removed code and started over |
| Generating 3x3 and horizontal values successful but vertical values conflicting | Removed code for vertically populating the grid |
| Grid only capable of generating 12 random values successfully and it needs 17 to generate a single outcome each time | pushing the values generated vertically and horizontally to empty arrays for use later in conflict checking |
| Solving for the above bug has somehow generated another bug where the vertical and horizontal indexes are behaving in the same manner | Isolating the code in its own for loop solved the problem, the cell was not updating the previous values accordingly as the horizontal and 3x3 filled |
| Solving the board unsuccessful, values in wrong positions each time | Went with my fourth approach and removed all code and used a solved sudoku board to generate values correctly |
| Moving on from situations the boards are generating but the current issue is user input to the board, I can successfully seperate user input from the system numbers but once the user puts a number on the board it acts like a system number | I removed the classes from the spans and added them to the divs instead and used classList.Contains to locate them and decide the appropiate outcome so the user could not change the displayed numbers |
| Shaded cells not showing on pencil marks to help guide user | Added a function to check the inner cells each time user clicks on board and highlights these cells |
| When user enters number over a cell with pencil marks the highlighted cells showing when no numbers to see | Added code to check if user has entered a number on top of pencil marks and then empties that cell of pencil marks |
| Erased cells are showing highlighted background | Created seperate strings with different values for the eraser and the actual blank space on the board |
| Pencil marks showing the same problem as above | Added a different blank string with two blank spaces to seperate different inputs on the board |
| The inner pencil arrays can only hold 9 values or the numbers dont appear on smaller screens | Discovered the eraser was at fault and removed the ability to use it within pencil marks and only on top of them instead |
| Highlighted cells showing on top of pencil marks after undo button removes value in a cell if pencil marks underneath | Walked through code and discovered that the undo button adds the initial value back to board. Added code so if initial value is a blank space just empty the pencil mark array underneath |


[Back to the top](#table-of-contents)

## Deployment
### Version Control
I used [Visual Studio Code](https://code.visualstudio.com/) as a local repository and IDE & [GitHub](https://github.com/) as a remote repository.

1. Firstly, I needed to create a new repository on Github [sudoku-master](https://github.com/KristianColville1/sudoku-master).
2. I opened that repository on my local machine by copying the URL from that repository and cloning it from my IDE for use.
3. Visual Studio Code opened a new workspace for me.
4. I created files and folders to use.
5. To push my newly created files to GitHub I used the terminal by pressing Ctrl + shift + `.
6. A new terminal opened and then I used the below steps.

    - git add (name of file) *This selects the file for the commit*
    - git commit -m "Commit message: (i.e. Initial commit)" *Allows the developer to assign a specific concise statement to the commit*
    - git push *The final command sends the code to GitHub*

### GitHub Pages
When I finished setting up my workstation and getting everything set up to use the repository I decided to deploy the website using [GitHub Pages](https://pages.github.com/). This is a resource developers can use to test how their websites behave on a cloud platform. It's an excellent resource provided by GitHub to publicly display websites.

1. To begin, I went to the repository and selected 'settings.'

2. I went to the 'pages' section.

3. I chose the master branch as the 'main' branch under 'source.'

4. I ensured that it was deployed from the 'root' directory.

5. Once completed, I got the website's URL.

### Cloning this Repository
In order to clone this repository for use on your local machine please follow the below steps.

1. Navigate to the repository you wish to clone.

2. Click the green button labelled 'Code'.

3. Copy the URL under the HTTPS option.

4. Open an [IDE](https://www.codecademy.com/article/what-is-an-ide) of your choosing that has [Git](https://git-scm.com/) installed.

5. Then open a new terminal in your IDE.

6. Type this exactly: git clone the-URL-you-copied

7. Hit enter.

You now have a local copy of this repository to use on your machine.

[Back to the top](#table-of-contents)
## Credits

I sourced a function from [Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to generate some of my random numbers to help with the game logic.

I sourced a function from [StackOverFlow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) called the Fisher Yates Shuffle. I needed a way of shuffling numbers quickly to help generate the game boards.

[Back to the top](#table-of-contents)
## Acknowledgements
[Back to the top](#table-of-contents)
