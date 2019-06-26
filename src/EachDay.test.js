import EachDay from "./EachDay.js"

describe('EachDay', () => {
    describe('when enter example input', () => {
        it('should be return example output', () => {
            const input = {
                day: "Monday",
                type: "Sunny",
                temp: "32"
            }
            const output = {
                day: 'Monday',
                type: 'Sunny',
                temp: '32'
              }
            expect(EachDay(input)).toEqual(output)
        })
    })
})