module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://billblog.development-server.info',
                changeOrigin: true,
            }
        }
    }
}