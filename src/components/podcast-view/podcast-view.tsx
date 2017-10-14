import { Component, Prop, State } from '@stencil/core';
import { getPodcastDetail } from '../../api/podcaster';
import Podcast from '../../interfaces/podcast';

@Component({
  tag: 'podcast-view',
  styleUrl: 'podcast-view.scss'
})
export class PodcastView {

	@Prop() podcastId: string;

	@Prop() match: any;

	@State() podcast: Podcast;

	componentDidLoad() {
		console.log('PodcastId:', this.podcastId);
		console.log('Match:', this.match);
		getPodcastDetail(this.podcastId)
			.then(podcast => {
				this.podcast = podcast;
			});
	}

	render() {
		if (!this.podcast) return null;

		return (
			<div class="podcast-view">
				<section class="sidebar-section">
					Sidebar
				</section>

				<section class="podcast-episodes section">
					<div class="podcast-episodes-count section">
						<span>Episodes: this.podcast.episodes.length</span>
					</div>

					<table class="table table-hover table-striped">
						<thead>
							<tr>
								<th>Title</th>
								<th>Date</th>
								<th>Duration</th>
							</tr>
						</thead>
						<tbody>
							this.podcast.episodes.map(renderEpisode)
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}
