# Sudoku Master
Sudoku game website.

Link to [website](https://kristiancolville1.github.io/sudoku-master/)

(image here of finished website)

## Table of Contents
* [Project Goals](#project-goals)
    * [External User Goals](#external-user-goals)
    * [Site Owners Goals](#site-owners-goals)
* [UX](#ux)
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
This project's goal was to create an interactive and user-friendly version of the popular game Sudoku.

### External User Goals
### Site Owners Goals

## UX
[Back to the top](#table-of-contents)
## Design
### How to build Sudoko
Here is a [PDF](assets/pdf/sudoku.pdf) I created called How to generate sudoku game boards by Kristian Colville. It describes my thought process for this project and my ideas on how to build the game.

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
| 1| 2|
| 1| 2|
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

[Back to the top](#table-of-contents)
## Acknowledgements
[Back to the top](#table-of-contents)
