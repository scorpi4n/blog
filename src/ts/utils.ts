import type { CollectionEntry } from "astro:content";

export function sortPosts(
	posts: CollectionEntry<"blog">[],
	options: {
		byDate?: boolean;
		dateAscending?: boolean;
		hasDrafts?: boolean;
	} = { byDate: true, dateAscending: false, hasDrafts: false }
) {
	const { byDate = true, dateAscending = false, hasDrafts = false } = options;

	if (!hasDrafts) posts = posts?.filter(post => !post.data.draft);

	if (byDate) {
		posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

		if (dateAscending) {
			posts.reverse();
		}
	}

	return posts;
}
