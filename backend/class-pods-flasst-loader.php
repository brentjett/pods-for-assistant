<?php
class PodsFLAsstLoader {
	
	static public function init() {
		
		add_action( 'fl_assistant_enqueue', 'PodsFLAsstLoader::enqueue' );
	}
	
	static public function enqueue() {
		
		$url = PODS_FLASST_URL;
		$ver = PODS_FLASST_VERSION;
		wp_enqueue_style( 'pods-flasst-app', $url . 'build/main.css', [ 'fl-assistant' ], $ver, null );
		wp_enqueue_script( 'pods-flasst-app', $url . 'build/main.js', [ 'fl-assistant' ], $ver, true );
	}
}