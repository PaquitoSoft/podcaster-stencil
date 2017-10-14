import Episode from './episode';

export default interface Podcast {
	id: string,
	name: string,
	author: string,
	description: string,
	cover: string,
	releaseDate: string,
	lastEpisodeDate: number,
	feedUrl: string,
	episodes: Array<Episode>
}
