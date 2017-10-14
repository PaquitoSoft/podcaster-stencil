import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {

  @Prop() loading: boolean;

  render() {
	console.log('2.-', this.loading);
	return (
		<div class="header">
			<h1>
			<a class="logo" href="/">Podcaster</a>
			<div class={`spinner ${this.loading ? '' : 'hidden'}`}>
				<div class="double-bounce1"></div>
				<div class="double-bounce2"></div>
			</div>
			</h1>
		</div>
	);
  }
}
