import type { FormattedRepo, ScoredFormattedRepo } from "@/types/github";

import { Octokit } from "octokit";

const octokit = new Octokit({});

function rankRepositories(
	repos: Array<FormattedRepo>,
): Array<ScoredFormattedRepo> {
	const reposWithScores = repos.map((repo) => ({
		...repo,
		score: calculateScore(repo),
	}));

	return reposWithScores.sort((a, b) => b.score - a.score);
}

function calculateScore(repo: FormattedRepo): number {
	const stars = repo.stars || 0;
	const forks = repo.forks || 0;
	const watchers = repo.watchers || 0;
	const openIssues = repo.openIssues || 0;

	return stars * 2 + forks * 1.5 + watchers * 1 - openIssues * 0.5;
}

export async function getRankedRepos(): Promise<Array<ScoredFormattedRepo>> {
	const data = await octokit.paginate("GET /users/{username}/repos", {
		username: "Stef-00012",
		per_page: 100,
	});

	const repos: Array<FormattedRepo> = data
		.filter((repo) => !repo.archived && !repo.fork)
		.map((repo) => {
			return {
				id: repo.id,
				stars: repo.stargazers_count || 0,
				forks: repo.forks_count || 0,
				watchers: repo.watchers_count || 0,
				openIssues: repo.open_issues_count || 0,
				fullName: repo.full_name,
				url: repo.html_url,
				description: repo.description,
				license: {
					key: repo.license?.key,
					name: repo.license?.name,
					url: repo.license?.url,
				},
			};
		});

	const top5Repos = rankRepositories(repos).splice(0, 5);

	for (const repo of top5Repos) {
		if (repo.license?.key) {
			const licenseData = await octokit.request("GET /licenses/{license}", {
				license: repo.license.key,
			});

			repo.license.url = licenseData.data.html_url;
		}
	}

	return top5Repos;
}
