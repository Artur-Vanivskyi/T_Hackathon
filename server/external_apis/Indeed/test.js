//import the required modules
let { getJobsList , getJobsPDF, release, config } = require("indeed-job-scraper");
// let fs   = require("fs");
// let path = require("path");


//get job list data
// async function sampleSearch() {
// 	let res = await getJobsList({
// 		query : "php",
// 		fromdays : 1,
// 		sitetype: "employer",
// 		sort     : "date",
// 		maxperpage : 20,
// 		level      : "senior_level",
// 		location: 'remote',
// 	});
// 	// res.then(release);
// 	return res;
// }
// let sampleJobs;
let sampleResults = [];

// const sampleQuery = 
getJobsList({
	query : "php",
	fromdays : 1,
	sitetype: "employer",
	sort     : "date",
	maxperpage : 20,
	level      : "senior_level",
	location: 'remote',
})
.then(console.log)
.then(release);
// sampleQuery.then(values => {
// 	sampleResults =	values;
//   }).catch(error => {
// 	error;
//   });
// console.log(`resultant array has length ${sampleResults.length}`);