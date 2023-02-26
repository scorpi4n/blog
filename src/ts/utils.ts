import type { CollectionEntry } from "astro:content";

export function filterPosts(
	posts: CollectionEntry<"blog">[],
	options: {
		removeDrafts?: boolean;
	} = {}
) {
	// defualt options
	const { removeDrafts = true } = options;

	if (removeDrafts) posts = posts.filter(post => !post.data.draft);

	return posts;
}

export function sortPosts(
	posts: CollectionEntry<"blog">[],
	options: {
		byDate?: boolean;
		dateAscending?: boolean;
	} = {}
) {
	// defualt options
	const { byDate = true, dateAscending = false } = options;

	if (byDate) {
		posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

		if (dateAscending) {
			posts.reverse();
		}
	}

	return posts;
}
