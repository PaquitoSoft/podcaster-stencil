import { Component, State } from '@stencil/core';
import { getAllPodcasts } from '../../api/podcaster';
import Podcast from '../../interfaces/podcast';

@Component({
	tag: 'home-view',
	styleUrl: 'home-view.scss'
})
export class HomeView {

	@State() podcasts: Array<Podcast> = [];

	componentDidLoad() {
		getAllPodcasts()
			.then(podcasts => {
				this.podcasts = podcasts;
			});
	}

	createPodcastSmumary(podcast) {
		return (<podcast-summary podcast={podcast} />);
	}

	render() {
		return (
			<div class="home-view">
				<div class="podcasts-grid">
					<div class="filter-container">
						<span class="badge">100</span>
						<input
							type="text"
							name="filter-value"
							placeholder="Filter podcasts..."
							autofocus
						/>
					</div>

					<div class="podcasts-list">
						{this.podcasts.map(this.createPodcastSmumary)}
					</div>
				</div>
			</div>
		);
	}
}
