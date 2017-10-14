import { Component, Prop } from '@stencil/core';
import Podcast from '../../../interfaces/podcast';

@Component({
	tag: 'podcast-summary',
	styleUrl: 'podcast-summary.scss'
})
export class PodcastSummary {

	@Prop() podcast: Podcast;

	render() {
		return (
			<div class="podcast-summary">
				<div class="box">
					<stencil-route-link url={`/podcast/${this.podcast.id}`}>
						<div class="box-icon">
							<img src={this.podcast.cover} alt={this.podcast.name} />
						</div>
						<div class="info">
							<h4 class="text-center">{this.podcast.name}</h4>
							<p>
								<span class="text-center">
									<span>Author:</span>
									<span>{this.podcast.author}</span>
								</span>
							</p>
						</div>
					</stencil-route-link>
				</div>
			</div>
		);
	}
}
