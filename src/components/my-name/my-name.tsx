import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

	@Prop() first: string;

	@Prop() last: string;

	@Prop() foo: boolean;

	render() {
		console.log('1.-', this.foo);
		return (
			<div>
				Hello, my awesome name is {this.first} {this.last} - {this.foo.toString()}
			</div>
		);
	}
}
