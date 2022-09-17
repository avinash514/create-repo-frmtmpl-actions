const core = require('@actions/core');
const github = require('@actions/github');
const octokit = require('@octokit/rest')

const targetRepoName = core.getInput('repo-name');
const ghToken = core.getInput('org-admin-token');
const templateRepoName = core.getInput('template-repo-name');
const targetOrgName = github.context.payload.repository.owner.login;

//var targetOrgName = 'avinash514'

//const octokit = new Octokit({});
  
  /*await octokit.request('POST /repos/{template_owner}/{template_repo}/generate', {
    template_owner: targetOrgName,
    template_repo: templateRepoName,
    owner: targetOrgName,
    name: targetRepoName,
    description: 'This is your first repository',
    include_all_branches: false,
    'private': false
  })*/

  // await octokit.rest.repos.createUsingTemplate({
  //   template_owner: targetOrgName,
  //   template_repo: templateRepoName,
  //   name: targetRepoName,
  // });


(async function run(){
  const response = await octokit.rest.repos.createUsingTemplate({
    template_owner: targetOrgName,
    template_repo: templateRepoName,
    name: targetRepoName,
  });
  console.log(response);
})();