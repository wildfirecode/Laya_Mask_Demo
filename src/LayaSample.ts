// 程序入口
class GameMain{
    constructor()
    {     
        Laya.init(1920,950,Laya.WebGL);
        Laya.Stat.show();

        const container = new Laya.Sprite();
        Laya.stage.addChild(container);        

        const mask = new Laya.Sprite();        
        mask.graphics.drawPoly(0, 0, [0, 0, 484, 0, 1483, 950, 0, 950], '#ff0000');
        // container.addChild(mask);
        container.mask = mask;

        const ani = new Laya.Animation();
        container.addChild(ani);
        ani.loadAtlas('1.json');
        ani.play();
        ani.pos(300,0);

        const d1 = 484;
        const d2 = 1438;
        const d3 = 950;
        const d4 = 1920;

        const container2 = new Laya.Sprite();
        Laya.stage.addChild(container2);        

        const mask2 = new Laya.Sprite();        
        mask2.graphics.drawPoly(d1, 0, [0, 0, d4 - d1, 0, d4 - d1, d3, d4 - d1 - d1, d3], '#00ff00');
        // container2.addChild(mask2);
        container2.mask = mask2;

        const ani2 = new Laya.Animation();
        container2.addChild(ani2);
        ani2.loadAtlas('1.json');
        ani2.play();
        ani2.pos(948,479);
        
        
    }
}
new GameMain();