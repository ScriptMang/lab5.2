# Reflection Questions

## How did event.preventDefault() help in handling form submission?

* It stopped the page from refreshing and sending the form data. By stopping those actions it allowed me to process the form submission however I wanted. In my case I cleared the input fields and the local-storage items after submitting the form. I only did this if no custom error message was visible in the form. 

## What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

* When using HTML5 validation the input fields are validated based on the type of the input tag and the validation keyword attributes inside the html. Keywords such as required , minlength, and pattern. Once these attributes are setup the browser handles the logic. It displays the correct error messages based on the attributes you gave your html. 

* The Javascript validation first requires setting 'novalidation' keyword at the end of a html form. This allows for custom error messages when validating input fields. It also removes the built-in browser based form validation via html. Through the use of the validation properties you can set custom error message for all input fields in a form. You control how and when error messages can be displayed.

* The best case to use both HTML validation and Javascript validation is when you want to use the builtin browser validation for simple validation of input fields and custom error message values
for input fields that aren't a type handled by HTML.


## Explain how you used localStorage to persist and retrieve the username. What are the  limitations of localStorage for storing sensitive data?

* To use localStorage you need manually store the key value pair with the method localStorage.setItem(key, value). The key and the value have to be strings for the function to work properly. Once you set the key, value pair you retrieve it using the method localStorage.getItem("key"). When storing values in localStorage you are not meant to store data like passwords. Its mainly used to store preferences and requires you to manually set an expiration date.

## Describe a challenge you faced in implementing the real-time validation and how you solved it.

* I didn't know what keyword I needed for the event listener to track the keyboard input.
I solved this issue using the mdn docs. Another Issue I ran into was the logic in my validation being incorrect, it required alot of manually console log testing to figure weird javascript quirks. For example I tried doing an if check manually for strings that failed to convert to numbers. I compared the value of NaN from parseInt(str) against '===' NaN  and it was never true. I only solved this issue by using mdn docs and finding isNaN() and placing the function parseInt(str) inside.

## How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

* I made sure to manually test the custom error messages and checked if they lacked context.