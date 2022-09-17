const core = require('@actions/core');
const github = require('@actions/github');




const targetRepoName = core.getInput('repo-name');
const ghToken = core.getInput('org-admin-token');
const templateRepoName = core.getInput('template-repo-name');
const octokit = github.getOctokit(ghToken);

const targetOrgName = github.context.payload.repository.owner.login;

  
/*const response = await octokit.request('POST /repos/{template_owner}/{template_repo}/generate', {
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

/*(async function run(){
  const response = await octokit.rest.repos.createUsingTemplate({
    template_owner: targetOrgName,
    template_repo: templateRepoName,
    name: targetRepoName,
  });
  console.log(response);
})();*/

async function run() {
  const response = await octokit.rest.repos.createUsingTemplate({
    template_owner: targetOrgName,
    template_repo: templateRepoName,
    name: targetRepoName,
    include_all_branches: true,
  });
  console.log(response)
  console.log("Repo "+response.data.name+' created successfully!');
  core.setOutput("repo-url", "https://github.com/"+response.data.full_name);
}

run();
