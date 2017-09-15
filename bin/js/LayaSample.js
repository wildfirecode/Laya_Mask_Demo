// 程序入口
var GameMain = (function () {
    function GameMain() {
        Laya.init(1920, 950, Laya.WebGL);
        Laya.Stat.show();
        var container = new Laya.Sprite();
        Laya.stage.addChild(container);
        var mask = new Laya.Sprite();
        mask.graphics.drawPoly(0, 0, [0, 0, 484, 0, 1483, 950, 0, 950], '#ff0000');
        // container.addChild(mask);
        container.mask = mask;
        var ani = new Laya.Animation();
        container.addChild(ani);
        ani.loadAtlas('1.json');
        ani.play();
        var d1 = 484;
        var d2 = 1438;
        var d3 = 950;
        var d4 = 1920;
        var container2 = new Laya.Sprite();
        Laya.stage.addChild(container2);
        var mask2 = new Laya.Sprite();
        mask2.graphics.drawPoly(d1, 0, [0, 0, d4 - d1, 0, d4 - d1, d3, d4 - d1 - d1, d3], '#00ff00');
        // container2.addChild(mask2);
        container2.mask = mask2;
        var ani2 = new Laya.Animation();
        container2.addChild(ani2);
        ani2.loadAtlas('1.json');
        ani2.play();
        ani2.pos(1148, 479);
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map