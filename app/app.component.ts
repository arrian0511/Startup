import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app/app.html`,
})
export class AppComponent {
	private 		mIsCollapse: 	boolean;
	private			mRenderer:		Renderer;

	@ViewChild("menuToggle")
	private 	_menuToggle: ElementRef;

	constructor (_renderer: Renderer)
	{
		/// Initialize Member Variables
		this.mIsCollapse = true;
		this.mRenderer = _renderer;
	}

	private OnClickToggleBtn () {
		this.mIsCollapse = !this.mIsCollapse;
		if (this.mIsCollapse == true) {
			this.mRenderer.setElementClass (this._menuToggle.nativeElement, "topbar-responsive", false);
		}
		else {
			this.mRenderer.setElementClass (this._menuToggle.nativeElement, "topbar-responsive", true);
		}
	}
}

