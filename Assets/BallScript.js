#pragma strict

var speedx: float = 4;
var speedy: float = 0;

var initPosx: float = -5.452366f;
var initPosy: float = -1.37369f;

function Start () {
	transform.position.x = initPosx;
	transform.position.y = initPosy;
	rigidbody2D.velocity.y = speedy;
	rigidbody2D.velocity.x = -1*speedx;
}
/*
function OnCollisionEnter2D (collision: Collision2D) {
	print("on collision2D enter triggered");
}


function OnCollisionStay2D (collision: Collision2D) {
	print(rigidbody2D.velocity.y);
	print(rigidbody2D.velocity.x);
	rigidbody2D.velocity.y = -1*speedy;
	rigidbody2D.velocity.x = -1*speedx;
	print("on collision2D stay triggered");
}
function OnCollisionExit2D (collision: Collision2D) {
	print(rigidbody2D.velocity.y);
	print(rigidbody2D.velocity.x);
	rigidbody2D.velocity.y = -1*speedy;
	rigidbody2D.velocity.x = -1*speedx;
	print("on collision2D exit triggered");
}
*/