/* from https://www.npmjs.com/package/indeed-job-scraper */
//import the required modules
let { getJobsList , getJobsPDF, release, config } = require("indeed-job-scraper");
// let fs   = require("fs");
// let path = require("path");


//get job list data
// Extracting the data from asynchronous function
async function extractData() {
	// 'getJobsList' returns a promise;
	// when the promise resolves (in the "then" block), we then return the fetched data
	return getJobsList({
	  query: "php",
	  fromdays: 1,
	  sitetype: "employer",
	  sort: "date",
	  maxperpage: 20,
	  level: "senior_level",
	  location: "remote",
	})
	  .then((data) => {
		return data;
	  })
	  .catch((error) => {
		return error;
	  });
}

// Immediately-invoked function expression (IIFE);
(async function () {
	// "await" waits for the return value of 'extractData',
	// which ends up returning the jobs data;
	// We need to await for the data WHITHIN AN ASYNC FUNCTION
	const results = await extractData();
	console.log(results);
	// Do what you want with the data
	release(); // force the 'browser page' to close and allows Node to run other tasks
})();