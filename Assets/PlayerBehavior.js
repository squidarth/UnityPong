#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;

var speed : float = 10;
var recordingTouch : boolean;
var currentTouchPosition : Vector2;
var mainCam : Camera;

var touchPos : Vector2;

var aTouch : boolean;

var Player01 : Transform;
var Player01Collider : BoxCollider2D;

var pixelsPerUnit : float = 100f;

function Start () {

}

function isInPlayer(playerSize : Vector2, playerPosition : Vector3, mousePosition: Vector3) {
  var valid : boolean = true;
  
  if (mousePosition.x > playerPosition.x + playerSize.x/2f) {
    valid = false;
  } 
  if (mousePosition.x < playerPosition.x - playerSize.x/2f) {
    valid = false;
  } 
  
  if (mousePosition.y > playerPosition.y + playerSize.y/2f) {
    valid = false;
  }
  
  if (mousePosition.y < playerPosition.y - playerSize.y/2f) {
    valid = false;
  }
  
  return valid;
}


function Update () {

/*
	if (Input.GetMouseButton(0)){
	  print(isInPlayer(Player01Collider.size, Player01.position, mainCam.ScreenToWorldPoint (Input.mousePosition)));
	  
	  Player01.position.x  = mainCam.ScreenToWorldPoint (Input.mousePosition).x;
	  Player01.position.y  = mainCam.ScreenToWorldPoint (Input.mousePosition).y;
	}
*/	


	if (Input.touchCount > 0 ) {
	  var touch = Input.GetTouch(0);
	  Player01.position.y  = mainCam.ScreenToWorldPoint (touch.position).y;
	
	}
	  /*           
  if (Input.touchCount > 0) {
  	
  
  	var touch = Input.GetTouch(0);
  	
  	switch (touch.phase) {
  		case TouchPhase.Began:
  		  currentTouchPosition = touch.position;
  		  //check if the position overlaps with player
  		  //Player01.position.x
  		  //Player01.position.y
  		  print (Player01.localScale);
  		  
  		case TouchPhase.Moved:
  		  print ("moved");
  		case TouchPhase.Ended:
  			print("ended");
  		
  	}
  
  }
*/
  if(Input.GetKey(moveUp)) {
    rigidbody2D.velocity.y = speed;
  } else if (Input.GetKey(moveDown)) {
    rigidbody2D.velocity.y = speed *-1;
  } else {
  	rigidbody2D.velocity.y = 0;
  }
}