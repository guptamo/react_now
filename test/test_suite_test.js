const React = require('react')
const {expect} = require('chai')
const {shallow, mount, render} = require('enzyme')

class TestComponent extends React.Component {
    render() {
        return (
            <div className="test">
                Tests Passed!
            </div>
        )
    }
}

describe("This test suite", function() {
    let wrapper

    beforeEach(function() {
        wrapper = shallow(<TestComponent />)
    })

    it("can render test components", function() {
        expect(wrapper.is('.test')).to.equal(true)
    })

    it("can test assertions", function() {
        expect(mount(<TestComponent />).find('.test').length).to.equal(1)
    })
})
