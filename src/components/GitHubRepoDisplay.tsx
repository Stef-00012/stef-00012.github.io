import Image from "next/image";
import Link from "next/link";

import type { ScoredFormattedRepo } from "@/types/github";

import externalLinkImage from "#/images/github/external-link.svg";
import forkImage from "#/images/github/fork-icon.svg";
import issueImage from "#/images/github/issue-icon.svg";
import starImage from "#/images/github/star-icon.svg";
import watchersImage from "#/images/github/watchers-icon.svg";

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
						<Image
							src={externalLinkImage}
							className="h-5 w-5"
							alt="Open Repo"
						/>
					</Link>
				</div>
				{repo.description && (
					<p className="text-sm mb-4 text-gray-300">{repo.description}</p>
				)}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
					<div className="flex items-center">
						<Image className="h-4 w-4 mr-2" alt="Repo Stars" src={starImage} />
						<span>{repo.stars} stars</span>
					</div>
					<div className="flex items-center">
						<Image className="h-4 w-4 mr-2" alt="Repo Forks" src={forkImage} />
						<span>{repo.forks} forks</span>
					</div>
					<div className="flex items-center">
						<Image
							className="h-4 w-4 mr-2"
							alt="Repo Issues"
							src={issueImage}
						/>
						<span>{repo.openIssues} issues</span>
					</div>
					<div className="flex items-center">
						<Image
							className="h-4 w-4 mr-2"
							alt="Repo Watchers"
							src={watchersImage}
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
