module.exports = {

    folder: {
        tasks: 'tasks',
        src: 'src',
        build: 'assets',
        production: 'production',
    },
    file: {
        mainHtml: 'index.html',
        mainJs: 'app.js',
        vendorJs: 'vendor.js',
        vendorJsMin: 'vendor.min.js',
        mainScss: 'styles.scss',
        mainScssMin: 'styles.min.scss',
        vendorScss: 'vendor.scss',
        vendorScssMin: 'vendor.min.scss',
    },
    fileIncludePug: {
        pages: 'src/templates/pages',
        dest: './',
    },
    task: {
        fileIncludepug: 'gulp-pug',
    },
    getPathesForSassCompiling: function () {
        return {
            files: [],
        };
    },
}
