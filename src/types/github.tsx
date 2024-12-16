export interface FormattedRepo {
	license: RepoLicense | null;
	description: string | null;
	openIssues: number;
	fullName: string;
	watchers: number;
	stars: number;
	forks: number;
	url: string;
    id: number;
}

export interface RepoLicense {
	name: string | undefined;
	key: string | undefined;
	url: string | undefined;
}

export interface ScoredFormattedRepo extends FormattedRepo {
    score: number;
}
