var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Public Properties
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        StartScene.prototype._startButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        // Public Methods
        // Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            this._titleImg = new objects.titleImg(this.assetManager);
            this._startButton = new objects.Button(this.assetManager, "playNowButton", 400, 400);
            this._startBackground = new objects.StartBackground(this.assetManager);
            this.Main();
        };
        StartScene.prototype.Update = function () {
        };
        // This is where the fun happens
        StartScene.prototype.Main = function () {
            // add background of this page
            this.addChild(this._startBackground);
            // add title image
            this.addChild(this._titleImg);
            // add the startButton to the scene
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map