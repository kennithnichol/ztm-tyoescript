import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
	encoding: 'utf-8'
})
	.split('\n')
	.map((line: string): string[] => {
		return line.split(',')
	})

console.log(matches);