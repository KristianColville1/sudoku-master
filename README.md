# Sudoku Master
Sudoku game website.

Link to [website](https://kristiancolville1.github.io/sudoku-master/)

(image here of finished website)

## Table of Contents
* [Project Goals](#project-goals)
    * [User Goals](#user-goals)
    * [Site Owners Goals](#site-owners-goals)
* [User Experience](#user-experience-ux)
    * [Target Audience](#target-audience)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
* [Design](#design)
    * [How to build Sudoko](#how-to-build-sudoko)
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
- Responsive wesite that allows any user to play the game
- Actions which work as expected such as buttons or links
- A way to contact the developer responsible for creating the game
- Ease of accessibility for visually imparied users

[Back to the top](#table-of-contents)
## Design
### How to build Sudoko
Here is a [PDF](assets/pdf/sudoku.pdf) I created called How to generate sudoku game boards by Kristian Colville. It attempts to describe my thought process on how to build the game, the pitfalls encountered and the solutions I implemented for solving the sudoku boards.

[Back to the top](#table-of-contents)
## Technologies & Tools
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
| 1 | 2|
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
