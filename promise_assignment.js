/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*


function getData(uId) {
    setTimeout(() => {
    console.log("Fetched the data!");
    return "skc@gmail.com";
    }, 4000);
    }
    
    console.log("start");
    var email = getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
    
How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?
    */
   
   function getData(_uId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 4000);
    });
}

async function main() {
    console.log("start");
    
    // Wait for the data to be fetched
    const email = await getData("skc");
    
    // Now we can use the fetched email
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

// Call the main function to execute the code
main();