var React = require('react/addons')
var TestUtils = React.addons.TestUtils

jest.dontMock('../facePanel.jsx')
var FacePanel = require('../facePanel.jsx')

describe('FacePanel', () => {

	var render = TestUtils.renderIntoDocument(<FacePanel />)

	it('should be a React Component', () => {
		expect(TestUtils.isCompositeComponent(render)).toEqual(true)
	})

	describe('#animate', () => {
		expect(render.animate()).toEqual('hey')
	})
})