const middleware = {}

middleware['checkAuth'] = require('../middleware/checkAuth.js')
middleware['checkAuth'] = middleware['checkAuth'].default || middleware['checkAuth']

middleware['checkLogin'] = require('../middleware/checkLogin.js')
middleware['checkLogin'] = middleware['checkLogin'].default || middleware['checkLogin']

middleware['checkRegister'] = require('../middleware/checkRegister.js')
middleware['checkRegister'] = middleware['checkRegister'].default || middleware['checkRegister']

export default middleware
