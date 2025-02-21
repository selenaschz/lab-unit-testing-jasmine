describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        
        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(5, 1)).toEqual(5);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(100, 47)).toEqual(4700);
        });
        
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea(1, "2")).toEqual(undefined);
            expect(calculateArea("3", 6)).toEqual(undefined);
            expect(calculateArea("prueba", "2")).toEqual(undefined);
        })
    })    
})