const enhancer = require('./enhancer.js');
// test away!
describe('enhancer functions', () => {
    let item;
    let item2;
    beforeEach(() => {
        item = {
            name: 'item',
            durability: 30,
            enhancement: 10
        };
        item2 = {
            name: 'item',
            durability: 30,
            enhancement: 20
        };
    });
    it('exists', () => {
        expect(enhancer).toBeDefined();
    });
    it('has "repair" function', () => {
        expect(enhancer.repair).toBeDefined();
    });
    it('"repair" method functions', () => {
        expect(enhancer.repair(item)).toHaveProperty('durability', 100);
    });
    it('has "success" function', () => {
        expect(enhancer.success).toBeDefined();
    });
    it('"success" method functions', () => {
        expect(enhancer.success(item)).toHaveProperty('enhancement', item.enhancement + 1);
        expect(enhancer.success(item2)).toHaveProperty('enhancement', item2.enhancement);
        expect(enhancer.success(item)).toHaveProperty('durability', item.durability);
    });
    it('has "fail" method', () => {
        expect(enhancer.fail).toBeDefined();
    });
    it('"fail" method functions', () => {
        expect(enhancer.fail(item)).toHaveProperty('durability', item.durability - 5);
        expect(enhancer.fail(item2)).toHaveProperty('durability', item2.durability - 10);
        expect(enhancer.fail(item2)).toHaveProperty('enhancement', item2.enhancement - 1);
    });
    it('has "get" method', () => {
        expect(enhancer).toBeDefined();
    });
});