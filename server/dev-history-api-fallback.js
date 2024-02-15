const path = require('path')

module.exports = (webpackDevMiddleware, webpackConfig) => (req, res, next) => {
	const reqPath = req._parsedUrl.pathname
	const file = reqPath.split('/').pop()
	if (file.endsWith('.js')) {
		res.end(
			webpackDevMiddleware.context.outputFileSystem.readFileSync(
				path.join(webpackConfig.output.path, file)
			)
		)
	} else if (file.indexOf('.') === -1) {
		res.end(
			webpackDevMiddleware.context.outputFileSystem.readFileSync(
				path.join(webpackConfig.output.path, 'index.html')
			)
		)
	} else {
		next()
	}
}
