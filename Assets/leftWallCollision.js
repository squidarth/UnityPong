#pragma strict

var ball : GameObject;
private var GameSetupScript : GameSetup;
private var Lives : ScoreScript;

function Start () {
	GameSetupScript  = GetComponent(GameSetup);
	Lives = GetComponent(ScoreScript);
	Lives.updateCurrentText(GameSetupScript.score);
}

function Update () {

}

function OnCollisionEnter2D (collision: Collision2D) {
	var oldBall : GameObject = ball;
	
	ball = Instantiate(ball);
	Destroy(oldBall);
	GameSetupScript.score -= 1;
	
	if (GameSetupScript.score == 0) {
	  Application.LoadLevel("mainMenu");
	  PlayerPrefs.SetString("HighScore", GetComponent(ScoreTrackerScript).elapsedTimeStr);
	} else { 
	  Lives.updateCurrentText(GameSetupScript.score);
	}
}