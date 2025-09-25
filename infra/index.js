import * as pulumi from "@pulumi/pulumi";
import * as netlify from "@pulumi/netlify";

const blog = new netlify.SiteBuildSettings("blog", {
  siteId: data.netlify_site.blog.id,
  buildCommand: "npm run build",
  publishDirectory: ".",
  productionBranch: "index",
  branchDeployBranches: ["preview", "staging"],
});
