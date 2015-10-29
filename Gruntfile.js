module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      target: ['lib/*.js'],

      options: {
        quiet: true,
        fix: true
      }
    },
    js_beautify: {
      options: {
        end_with_newline: false,
        indent_size: 2,
        indent_char: ' ',
        eol: '\n',
        indent_level: 0,
        indent_with_tabs: false,
        preserve_newlines: true,
        max_preserve_newlines: 0,
        jslint_happy: false,
        space_after_anon_function: false,
        brace_style: 'collapse',
        keep_array_indentation: false,
        keep_function_indentation: false,
        space_before_conditional: true,
        break_chained_methods: false,
        eval_code: false,
        unescape_strings: false,
        wrap_line_length: 0,
        wrap_attributes: 'auto',
        wrap_attributes_indent_size: 2
      },
      files: ['lib/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-js-beautify');
  grunt.registerTask('default', ['eslint', 'js_beautify']);
};
