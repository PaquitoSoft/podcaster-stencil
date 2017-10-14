import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'podcaster-app',
  styleUrl: 'podcaster-app.scss'
})
export class PodcasterApp {

  @Prop() isLoading: boolean;

  render() {
    return (
		<div>
			<app-header />

			<div class="main-content">
				<stencil-router>
					<stencil-route url="/" component="home-view" exact={true} />
					<stencil-route url="/podcast/:podcastId" component="podcast-view" />
				</stencil-router>
			</div>
		</div>
    );
  }
}
