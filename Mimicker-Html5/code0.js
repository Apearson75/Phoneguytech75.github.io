gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDSkyObjects1= [];
gdjs.Start_32ScreenCode.GDSkyObjects2= [];
gdjs.Start_32ScreenCode.GDTitleScreenObjects1= [];
gdjs.Start_32ScreenCode.GDTitleScreenObjects2= [];
gdjs.Start_32ScreenCode.GDNewObjectObjects1= [];
gdjs.Start_32ScreenCode.GDNewObjectObjects2= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Start_32ScreenCode.GDNewObjectObjects1});gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Start_32ScreenCode.GDNewObjectObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDSkyObjects1.length = 0;
gdjs.Start_32ScreenCode.GDSkyObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTitleScreenObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTitleScreenObjects2.length = 0;
gdjs.Start_32ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.Start_32ScreenCode.GDNewObjectObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
