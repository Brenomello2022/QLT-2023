not
.should('not.equal', 'Jane')
expect(name).to.not.equal('Jane')

true
.should('be.true')
expect(true).to.be.true

false
.should('be.false')
expect(false).to.be.false

null .should('be.null')
expect(null).to.be.null

undefined
.should('be.undefined')
expect(undefined).to.be.undefined

equal 
.should('equal', 42)
expect(42).to.equal(42)

greaterThan
.should('be.greaterThan', 5)
expect(10).to.be.greaterThan(5)

lessThan
.should('be.lessThan', 10)
expect(5).to.be.lessThan(10)

property
.should('have.property', 'name')
expect(obj).to.have.property('name')

string
.should('have.string', 'test')
expect('testing').to.have.string('test')

within
.should('be.within', 5, 10)
expect(7).to.be.within(5, 10)

lengthOf
.should('have.lengthOf', 4)
expect('test').to.have.lengthOf(4)

keys
.should('have.keys', 'pass', 'fail')
expect({ pass: 1, fail: 2 }).to.have.keys('pass', 'fail')

oneOf
.should('be.oneOf', [1, 2, 3])
expect(2).to.be.oneOf([1,2,3])