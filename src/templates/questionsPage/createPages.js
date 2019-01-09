const { resolve } = require('path');
const parseData = require('./parseData');
const { param } = require('change-case');

const languages = require('../../config/languages.json');
const query = require('./query');


const buildPages = ({ reject, createPage }) => ({ data: rawData, errors }) => {
  if (errors) {
    reject(errors)
  }

  const { edges } = rawData.allMarkdownRemark;
  const getUrl = title => (language) => {
    return `${param(language)}/questions/${param(title)}/index.html`;
  }

  edges.forEach(({ node }) => {
    const data = parseData({ node });
    const { title, language, questions } = data;
    const getLanguageSpecificUrl = getUrl(title);

    if (language === 'english') {
       languages
        .filter(language => language !== 'english')
        .forEach(language => {
          createPage({
            path: getLanguageSpecificUrl(language),
            component: resolve('./src/templates/questionsPage/index.jsx'),
            context: {
              language,
              title,
              questions,
              fallback: true,
            }
          });
        })
    }

    createPage({
      path: getLanguageSpecificUrl(language),
      component: resolve('./src/templates/questionsPage/index.jsx'),
      context: {
        language,
        title,
        questions,
        fallback: false,
      }
    });
  });
};


const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(query).then(buildPages({ reject, createPage }))
    );
  })
};


module.exports = createPages;