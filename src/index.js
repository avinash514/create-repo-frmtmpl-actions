const core = require('@actions/core');
const github = require('@actions/github');
const targetRepoName = core.getInput('repo-name');
const ghToken = core.getInput('org-admin-token');
const templateRepoName = core.getInput('template-repo-name');
const targetOwner = core.getInput('owner');
const description = core.getInput('description');
var include_all_branches = new Boolean(core.getInput('include_all_branches'));
var private = new Boolean(core.getInput('private'));
const octokit = github.getOctokit(ghToken);
const targetOrgName = github.context.payload.repository.owner.login;


async function run() {
  const response = await octokit.rest.repos.createUsingTemplate({
    template_owner: targetOrgName,
    template_repo: templateRepoName,
    owner: targetOwner,
    name: targetRepoName,
    description: description,
    include_all_branches: include_all_branches,
    private: private,
  });
  //console.log(response)
  console.log("Repo "+response.data.name+' created successfully!');
  core.setOutput("repo-url", "https://github.com/"+response.data.full_name);
}

run();
