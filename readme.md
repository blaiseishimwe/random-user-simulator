# Random User Simulator

[UI Image](Screenshot (47).png)

Vanilla JS project to simulate a random user generator.
In this app, we utilize the **Fetch API** to make **HTTP requests** and process the responses.
The promise-based request is sent to https://randomuser.me/api/, check
**res.ok** and **throw** a new error in case of failure, else convert the **res to json** and invoke the **displayUser** function passing the converted response into the function params as argument. This app implements a **spinner** from "https://cdn.tailwindcss.com", programmatically displayed during the fetching process. An **HTML element** is dynamically created to contain the random user's info, including a profile picture, name, gender, location, and email address. Finally, we check the gender and assign a gender-based background color and append the info to the **DOM**. Please
clone the repository locally, open the index file and click **Generate User**
button to simulate random users. Feedbacks are welcomed and can be emailed at
**bishimwe@gmail.com**. Thank you!
