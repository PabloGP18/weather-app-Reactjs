# React JS Weather App

Welcome to the documentation of my new weather application project, this time, built using ReactJS. After building a weather app using Next JS, I decided to challenge myself by recreating it using ReactJS, to compare and understand the different dynamics of both frameworks.

## Description

This application uses JavaScript's built-in [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make API calls to [Open Weather Map](https://openweathermap.org/). As with the previous app, the response comes as JSON data, which is then parsed and displayed on the screen. However, there are several differences in this iteration:

- **Fetch API**: I used the Fetch API for making HTTP requests. The Fetch API is built into modern browsers and doesn't require any additional libraries.

- **Services for data fetching**: To manage and isolate the data fetching logic, I utilized service functions. This helps keep components lean and focused on rendering, improving readability and maintainability.

- **Custom Hook**: To consume the fetched data, I used a custom React hook. This allows for more reusable and cleaner code.

- **React Context API**: To manage global state throughout the application, I leveraged the power of the React Context API. This helps to pass data through the component tree without having to pass props down manually at every level.

- **CSS**: Instead of Tailwind CSS, I used traditional CSS to style the application. While Tailwind CSS is a powerful tool, I wanted to demonstrate that beautiful, responsive designs can also be achieved with pure CSS.

## Why build the same application twice?

It might seem redundant to create the same application twice. However, I found it a great way to practice and solidify my understanding of both Next JS and React JS. It allowed me to see the differences and similarities between the two, and appreciate the strengths and use-cases for each.

Feel free to explore the code and see how the same application can be built differently with different tools and approaches. Enjoy the journey!
