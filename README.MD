Name: Irshad Badarpura
e-mail: ibadar2@uic.edu
phone: (832)235-5759

#Files/Folders:
##The GitHub file has the following structure:
-Pyramid
	-node_modules
	-server
		-pyramid.js [This file contains the JavaScript code which helps to connect to the python file]	
		-pyramid.py [This file conatins the logic to check for pyramid words]
	-readme	  [This file contains the instructions to run the code and get output from the code]	
	-package-lock.json
#System Requirements:
The system should have the following to execute :
-Visual Studio Code
-python 3.6+
-node v12.13.0
-express 


#How to implement the code:
-Clone the Pyramid Repo from GitHub
-Using Visual Studio Code,open the folder-Pyramid in Visual Studio Code and then open server folder.Then, open the terminal and change the path to point the server
-Then, enter the command node pyramid.js
-Then, on your browser enter the following url : http://localhost:3000/pyramid?check=your_word
						-where: your_word indicates the word you want to check
						// E.g : http://localhost:3000/pyramid?check=banana

#Output:
-If the word you entered is a pyramid word, then, you will the output on the browser and also on the terminal as following:
	Pyramid can be made:True
-If the word you entered is not a pyramid word, then, you will the output on the browser and also on the terminal as following:
	Pyramid can be made:False





