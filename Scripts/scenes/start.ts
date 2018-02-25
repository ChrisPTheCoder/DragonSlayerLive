module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _startBackground: objects.StartBackground;
    private _titleImg: objects.titleImg;
    private _startButton: objects.Button;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      objects.Game.currentScene = config.Scene.PLAY;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._titleImg = new objects.titleImg(this.assetManager);
      this._startButton = new objects.Button(this.assetManager, "playNowButton", 400, 400);
      this._startBackground = new objects.StartBackground(this.assetManager);
      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
      // add background of this page
      this.addChild(this._startBackground);

      // add title image
      this.addChild(this._titleImg);

      // add the startButton to the scene
      this.addChild(this._startButton);

      this._startButton.on("click", this._startButtonClick);
    }
  }
}
