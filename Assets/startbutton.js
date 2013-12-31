#pragma strict

function Update () {

	if (Input.touchCount > 0) {
	
	
	}
	if (Input.GetMouseButton(0)) {
	  print("found test");
	  if(guiTexture.HitTest(Input.mousePosition)) {
	  	print("hello, hittest");
	  	Application.LoadLevel("pong1");
	  }
	}
}