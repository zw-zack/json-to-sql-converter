const jsonFile = require("./" + process.argv[2]);
const fs = require("fs");

const arr = jsonFile.countries;
let data = null;
for (let i = 0; i < arr.length; i++) {
	data =
		"INSERT INTO countries" +
		"\n" +
		"(" +
		Object.keys(arr[i])[0] +
		", " +
		Object.keys(arr[i])[1] +
		")" +
		"\n" +
		"VALUES" +
		"\n" +
		"('" +
		arr[i].name +
		"'),'(" +
		arr[i].code +
		"');" +
		"\n" +
		"\n";

	fs.appendFile(process.argv[3], data, err => {
		if (err) throw err;
		console.log("Added country " + (i + 1) + "!");
	});
}
