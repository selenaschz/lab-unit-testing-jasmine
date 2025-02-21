describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
          });

        it("should return the division of the two numbers",  () => {
            expect(divide(5, 1)).toEqual(5);
            expect(divide(8, 4)).toEqual(2);
            expect(divide(100, 5)).toEqual(20);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide(1, "2")).toEqual(undefined);
            expect(divide("3", 4)).toEqual(undefined);
            expect(divide("prueba", "2")).toEqual(undefined);
        });
    })    
})