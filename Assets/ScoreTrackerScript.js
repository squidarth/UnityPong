#pragma strict

var startTime : System.DateTime;
static var elapsedTimeStr : String;

function Start () {
	startTime = System.DateTime.Now;
	
}

function Update () {
	var elapsedTime : System.TimeSpan = System.DateTime.Now - startTime;
	elapsedTimeStr = String.Format("{0:mm}:{1:ss}", elapsedTime.Minutes.ToString("00"), elapsedTime.Seconds.ToString("00"));
	guiText.text = elapsedTimeStr;
}