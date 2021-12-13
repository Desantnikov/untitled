module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://192.168.0.188:8081/',
                ws: true,
                changeOrigin: true
            },
        }
    }
}