module.exports = {
  folder: {
    tasks: 'tasks',
    src: 'src',
    build: 'production'
  },
  file: {
    mainHtml: 'production/index.html',
    mainJs: 'app.js',
    vendorJs: 'vendor.js',
    vendorJsMin: 'vendor.min.js',
    mainScss: 'styles.scss',
    mainScssMin: 'styles.min.css',
    vendorScss: 'vendor.scss',
    vendorScssMin: 'vendor.min.css',
  },
  fileIncludepug: {
    templates: 'src/pug/templates',
    dest: 'production',
  },
  task: {
    fileIncludepug: 'gulp-pug',
    esLint: 'es-lint',
    buildCustomJs: 'build-custom-js',
    buildJsVendors: 'build-js-vendors',
    buildSass: 'build-sass',
    buildSassCustom: 'build-sass-custom',
    buildStylesVendors: 'build-styles-vendors',
    imageMin: 'image-min',
    imageWebP: 'image-webp',
    svgSprite: 'svg-sprite',
    cleanProd: 'clean-production',
    copyFoldersProduction: 'copy-folders-production',
    browserSync: 'browser-sync-server',
    watch: 'watch',
  },
  autoprefixer: {
    browserslist: ['.browserslistrc'],
  },
  imageExtensions: 'jpg|jpeg|png|svg|gif|ico|tiff',
  getPathesForSassCompiling: function () {
    return {
      files: [],
      isGcmq: false,
    };
  },
  getPathesToCopyForProduction: function () {
    return [
      './**/*',
      '!.*',
      '!.*/**',
      '.htaccess',
      `!${this.folder.prod}`,
      `!{${this.folder.src},${this.folder.src}/**}`,
      '!{tasks,tasks/**}',
      '!{node_modules,node_modules/**}',
      '!CONTRIBUTING.md',
      '!gulpfile.js',
      '!gulp-config.js',
      '!LICENSE',
      '!package.json',
      '!package-lock.json',
      '!README.md',
      '!readme.txt',
      '!{sys_icon,sys_icon/**}',

      `./${this.folder.src}/**`,
      `!{${this.folder.src}/icon-svg,${this.folder.src}/icon-svg/**}`,
      `!{${this.folder.src}/images,${this.folder.src}/images/**}`,
      `!{${this.folder.src}/js,${this.folder.src}/js/**}`,
      `!{${this.folder.src}/html,${this.folder.src}/html/**}`,
      `!{${this.folder.src}/scss,${this.folder.src}/scss/**}`,
      `!{${this.folder.src}/vendor_entries,${this.folder.src}/vendor_entries/**}`,
    ];
  }
};
