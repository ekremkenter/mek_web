/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "https://ekremkenter.com/*",
    toPath: "https://mek.app/:splat",
    isPermanent: true,
    force: true
  });
  createRedirect({
    fromPath: "https://www.ekremkenter.com/*",
    toPath: "https://mek.app/:splat",
    isPermanent: true,
    force: true
  });
};