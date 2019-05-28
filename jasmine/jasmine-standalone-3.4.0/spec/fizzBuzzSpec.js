describe("fizzBuzz", function () { 
    // var fizzbuzz;

    // beforeEach(function() {
    //     fizzbuzz = new fizzBuzz();
    // });

    describe("multiples of 3", function() {
        it("should return fizz", function() {
            expect(fizzBuzz(3)).toEqual("Fizz");
        });

        it("should return fizz", function() {
            expect(fizzBuzz(6)).toEqual("Fizz");
        });

    });

    describe("multiples of 5", function() {
        it("should return buzz", function() {
            expect(fizzBuzz(5)).toEqual("Buzz");
        });

        it("should return buzz", function() {
            expect(fizzBuzz(10)).toEqual("Buzz");
        });

    });

    describe("multiples of 3 and 5", function () {
        it("should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toEqual("FizzBuzz");
        });
    });
}); 