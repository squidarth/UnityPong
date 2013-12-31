#pragma strict

function Start () {
	print (PlayerPrefs.GetString("HighScore"));
	guiText.text = String.Format("Last Score: {0}", PlayerPrefs.GetString("HighScore"));
}
