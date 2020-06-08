const main = require("../practice.js")
const expect = require("expect.js")

describe("Input 1: {'2019-01-01': 100,'2019-01-04': 115}", function() {

	it('should return 4 as the total number of dates after adding missing dates', function() {

		let dict = {
			'2019-01-01': 100,
			'2019-01-04': 115
		}

		let result = main(dict)

		expect(Object.keys(result)).to.length(4)

	});

	it('should return true, matched with actual result dictionary', function() {

		let dict = {
			'2019-01-01': 100,
			'2019-01-04': 115
		}

		let result = main(dict)

		expect(result).to.eql({
			'2019-01-01': 100,
			'2019-01-02': 105,
			'2019-01-03': 110,
			'2019-01-04': 115
		})

  });

});



describe("Input 2: {'2019-01-10': 10,'2019-01-11': 40, '2019-01-13': 10}", function() {

	let dict = {
		'2019-01-10': 10,
		'2019-01-14': 10,
		'2019-01-11': 40
	}

	let result = main(dict)

	it('should return 4 as the total number of dates after adding missing dates', function() {

		expect(Object.keys(result)).to.length(5)

	});

	it('should return true, matched with actual result dictionary', function() {

		expect(result).to.eql({
			'2019-01-10': 10,
			'2019-01-11': 40,
			'2019-01-12': 30,
			'2019-01-13': 20,
			'2019-01-14': 10
		})

  });

});