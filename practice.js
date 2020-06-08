const dateFns = require('date-fns')


// For convenience in handling dates I used date-fns to avoid making date handling functions by self
// date-fns functions that I used:
// 1. format() = to format a date in YYYY-MM-DD order
// 2. addDays() = to get date of after adding days to a given date
// 3. differenceInCalendarDays() = to calculate number of days between two dates

// Sorry if this doesn't suits you but I did this only for saving time, else I can also implement all those functions (1-3) by self




function main(dict) {

	// result container
	let newObj = {}

	let dates = Object.keys(dict);

	// sort all dates if not in ascending order
	dates.sort()


	for(let i=0; i<dates.length-1; i++) {

		newObj[dates[i]] = dict[dates[i]];

		let date1 = dates[i].split("-"), date2 = dates[i+1].split("-")


		// forming dates with two successive elements ordered in ascending
		date1 = new Date(date1[0], date1[1]-1, date1[2]), date2 = new Date(date2[0], date2[1]-1, date2[2]);


		// calculating difference between days
		let diff = dateFns.differenceInCalendarDays(date2, date1)

		
		// check for missing dates in between
		if(diff > 1) {

			// generate a constant value to increment
			let inc = (dict[dates[i+1]] - dict[dates[i]])/diff;

			// loop to inserting all missing dates with respective values
			for(let j=1; j<diff; j++) {

				newObj[dateFns.format(dateFns.addDays(date1, j), 'yyyy-MM-dd')] = dict[dates[i]] + j*inc;

			}
	
		}

	}

	// pushing final date in dates array
	newObj[dates[dates.length-1]] = dict[dates[dates.length-1]]

	return newObj;

}


module.exports = main;