import GitHubWatchersSVG from "@/components/images/github-watchers";
import ExternalLinkSVG from "@/components/images/external-link";
import GitHubIssueSVG from "@/components/images/github-issue";
import GitHubForkSVG from "@/components/images/github-fork";
import GitHubStarSVG from "@/components/images/github-star";
import Link from "next/link";

import type { ScoredFormattedRepo } from "@/types/github";

interface Data {
	repo: ScoredFormattedRepo;
}

export default function GitHubRepoDisplay({ repo }: Data) {
	return (
		<div className="w-full mb-4 overflow-hidden rounded-lg shadow-md bg-[rgb(75_85_99_/0.3)] text-white">
			<div className="p-4">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-lg md:text-xl font-bold">
						<Link href={repo.url} className="hover:underline">
							{repo.fullName}
						</Link>
					</h2>
					<Link href={repo.url} target="_blank" rel="noopener noreferrer">
						<ExternalLinkSVG
							className="h-5 w-5 text-blue-300 hover:text-blue-400"
							alt="Open Repo"
						/>
					</Link>
				</div>
				{repo.description && (
					<p className="text-sm mb-4 text-gray-300">{repo.description}</p>
				)}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
					<div className="flex items-center">
						<GitHubStarSVG
							className="h-4 w-4 mr-2 text-yellow-400"
							alt="Repo Stars"
						/>
						<span>{repo.stars} stars</span>
					</div>
					<div className="flex items-center">
						<GitHubForkSVG
							className="h-4 w-4 mr-2 text-green-400"
							alt="Repo Forks"
						/>
						<span>{repo.forks} forks</span>
					</div>
					<div className="flex items-center">
						<GitHubIssueSVG
							className="h-4 w-4 mr-2 text-red-400"
							alt="Repo Issues"
						/>
						<span>{repo.openIssues} issues</span>
					</div>
					<div className="flex items-center">
						<GitHubWatchersSVG
							className="h-4 w-4 mr-2 text-purple-400"
							alt="Repo Watchers"
						/>
						<span>{repo.watchers} watchers</span>
					</div>
				</div>
			</div>
			{repo.license?.name && repo.license?.url && (
				<div className="px-4 py-2 bg-[rgb(75_85_99_/0.4)] mt-2">
					<span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
						<Link
							href={repo.license.url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							License: {repo.license.name}
						</Link>
					</span>
				</div>
			)}
		</div>
	);
}
