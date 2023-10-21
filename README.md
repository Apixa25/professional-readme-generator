# Professional README Generator useing Node.js 🗒️

## Technology Used 🏗️

<p float="left"> 
  
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white">
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">

## Description 

[Find the Github REPO to this project here](https://github.com/Apixa25/professional-readme-generator) ⬅️

[Watch a demonstration of the README Generator in action](https://drive.google.com/file/d/1fB_Dzy4b6OWUXN2c1KGBdFEExbUOBHUH/view) 👀


If you're a person who often generates code repositories you need to make a professional README.  I made this Node.js application to take a lot of the heavy lifting out of generating README’s.  Running the application will cause the user to be asked a series of questions which are then used by the application to auto-populate a README. Not only is the time to make a README dramatically reduced but the formatting and layout are also in a high quality standardized manner. One of the really cool things is that it also generates badges for the use license that is selected. 

## How to use the README generator
1. Copy to your local drive the files from the Github Repository
2. Open your terminal and go to the folder where you placed the Repositry files
3. In the terminal run "npm init" to build the node.js modules
4. In ther terminal run "npm i inquirer@8.2.4" to install the inquirer dependencies
5. then in the terminal enter "node index.js" to run the application
6. Answer the questions and when you are done a new README.md will be generated for you

## Example of questions and answers

![Terminal Questions](../utils/terminal%20.png)

## The markdown and the preview of the answers
![Terminal Questions](../utils/functioning%20app.png)


## Some Interesting Things About the Code
Some thing to note about this project is that two JavaScript files were used and linked together. An “index.js” and “generateMarkdown.js” this project could have been put into one file, but I chose to put into another js file the markdown generation function of the README generator.  What’s interesting is how they then get linked together.  The index.js file must call to the generateMarkdown.js file as a requirement. The same as it does for the file system and inquirer dependencies. See the snipped below for how this was done.

![Terminal Questions](../utils/packages%20needed.png)

I also found it fun and interesting how the questions were generated using Inquirer.  See below for an example of the question:  “What is the Title of the project?” Note that this format can be used over and over again to make an unlimited number of additional questions.  Inquirer includes several other question formats. If you would like to see what those are take a look here:  https://www.npmjs.com/package/inquirer

![Terminal Questions](../utils/inquirer%20question.png)

Here is the part of the function that renders the license badge (the actual graphic) by pulling the .svg graphic file using an HTTP request and injecting it into the generated README. 

![Terminal Questions](../utils/how%20MIT%20badge%20graphic.png)


### Steven Sills II
If you made it this far THANK YOU! I appreciate the time you put into checking this project out. If you would like to contact me or look at some more of my work please feel free with the links below. 😃

<a href="mailto: stevensills2@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/steven-sills-ii-90781b53/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://apixa25.github.io/steven-sills-portfolio/" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

