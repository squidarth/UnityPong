#pragma strict

static var currentText : String = "Current Lives: 5";

static function updateCurrentText(score : int) {
  currentText = String.Concat("Current Lives: ", score.ToString());
}

function Update () {
	guiText.text = currentText;
}