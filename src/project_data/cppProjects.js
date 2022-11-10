import Pokedex from "../images/pokedex.png"
import Mineswepper from "../images/minesweeper.png"
import FileSystem from "../images/filesystem.png"

export const cppProjects = [
    {
        title: "Pokedex Application",
        description:
            "Worked in collaboration with two other students from the University of Florida to create a GUI Pokedex that allows users to search for information about a Pokemon and compare the search times of unsorted versus unsorted maps.\n" +
            "Made using C++ with SFML and MnGW libraries. I coded a GUI Pokedex to display search results and coded the Pokedex search bar to pass user input to the searching algorithms.",
        image: Pokedex,
        youtube: "https://youtu.be/fD8sFl3_5_A",
        github: "https://github.com/adehoog/Project3_COP3530",
        gdd: "",
    },
    {
        title: "Minesweeper Recreation",
        description:
            "Worked individually to recreate the game Minesweeper.\n" +
            "Made using C++ with SFML. I coded all game functionalities and implemented GUI using provided images.\n"+
            "Due to the nature of the project, I cannot publicly share the code of this project because it would violate academic integrity. Please feel free to send me an email at audrey.dehoog@gmail.com to ask for any project code.",
        image: Mineswepper,
        youtube: "https://youtu.be/3QE3EQZcuYU",
        github: "",
        gdd: "",
    },
    {
        title: ".WAD Directory",
        description:
            "Worked individually to code a program that read the contents of a .WAD files, create a directory of the content, and mount it to a file system.\n"+
            "Made using C++ and mounted using WSL. I coded the file reading and the methods used to create the directory and store the file content.",
        image: FileSystem,
        youtube: "https://youtu.be/hXXAW2cZP84",
        github: "",
        gdd: "",
    },
];