gdjs.Level_32SelectCode = {};
gdjs.Level_32SelectCode.GDSkyObjects1= [];
gdjs.Level_32SelectCode.GDSkyObjects2= [];
gdjs.Level_32SelectCode.GDLevelBoxObjects1= [];
gdjs.Level_32SelectCode.GDLevelBoxObjects2= [];
gdjs.Level_32SelectCode.GDOneObjects1= [];
gdjs.Level_32SelectCode.GDOneObjects2= [];
gdjs.Level_32SelectCode.GDTwoObjects1= [];
gdjs.Level_32SelectCode.GDTwoObjects2= [];
gdjs.Level_32SelectCode.GDThreeObjects1= [];
gdjs.Level_32SelectCode.GDThreeObjects2= [];
gdjs.Level_32SelectCode.GDCompletion2Objects1= [];
gdjs.Level_32SelectCode.GDCompletion2Objects2= [];
gdjs.Level_32SelectCode.GDCompletion3Objects1= [];
gdjs.Level_32SelectCode.GDCompletion3Objects2= [];
gdjs.Level_32SelectCode.GDCompletionObjects1= [];
gdjs.Level_32SelectCode.GDCompletionObjects2= [];

gdjs.Level_32SelectCode.conditionTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition0IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition1IsTrue_0 = {val:false};


gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDOneObjects1Objects = Hashtable.newFrom({"One": gdjs.Level_32SelectCode.GDOneObjects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDTwoObjects1Objects = Hashtable.newFrom({"Two": gdjs.Level_32SelectCode.GDTwoObjects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDThreeObjects1Objects = Hashtable.newFrom({"Three": gdjs.Level_32SelectCode.GDThreeObjects1});gdjs.Level_32SelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("One"), gdjs.Level_32SelectCode.GDOneObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDOneObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Two"), gdjs.Level_32SelectCode.GDTwoObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDTwoObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Three"), gdjs.Level_32SelectCode.GDThreeObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDThreeObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Completion"), gdjs.Level_32SelectCode.GDCompletionObjects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletionObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletionObjects1[i].setColor("3;255;0");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletionObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletionObjects1[i].setString("Completed");
}
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Completion"), gdjs.Level_32SelectCode.GDCompletionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Completion2"), gdjs.Level_32SelectCode.GDCompletion2Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletionObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletionObjects1[i].setString("Completed");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletionObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletionObjects1[i].setColor("3;255;0");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletion2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletion2Objects1[i].setColor("3;255;0");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletion2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletion2Objects1[i].setString("Completed");
}
}}

}


{


gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if (gdjs.Level_32SelectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Completion"), gdjs.Level_32SelectCode.GDCompletionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Completion2"), gdjs.Level_32SelectCode.GDCompletion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Completion3"), gdjs.Level_32SelectCode.GDCompletion3Objects1);
{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletion2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletion2Objects1[i].setString("Completed");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletion2Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletion2Objects1[i].setColor("3;255;0");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletionObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletionObjects1[i].setColor("3;255;0");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletionObjects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletionObjects1[i].setString("Completed");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletion3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletion3Objects1[i].setString("Completed");
}
}{for(var i = 0, len = gdjs.Level_32SelectCode.GDCompletion3Objects1.length ;i < len;++i) {
    gdjs.Level_32SelectCode.GDCompletion3Objects1[i].setColor("3;255;0");
}
}}

}


};

gdjs.Level_32SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32SelectCode.GDSkyObjects1.length = 0;
gdjs.Level_32SelectCode.GDSkyObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevelBoxObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevelBoxObjects2.length = 0;
gdjs.Level_32SelectCode.GDOneObjects1.length = 0;
gdjs.Level_32SelectCode.GDOneObjects2.length = 0;
gdjs.Level_32SelectCode.GDTwoObjects1.length = 0;
gdjs.Level_32SelectCode.GDTwoObjects2.length = 0;
gdjs.Level_32SelectCode.GDThreeObjects1.length = 0;
gdjs.Level_32SelectCode.GDThreeObjects2.length = 0;
gdjs.Level_32SelectCode.GDCompletion2Objects1.length = 0;
gdjs.Level_32SelectCode.GDCompletion2Objects2.length = 0;
gdjs.Level_32SelectCode.GDCompletion3Objects1.length = 0;
gdjs.Level_32SelectCode.GDCompletion3Objects2.length = 0;
gdjs.Level_32SelectCode.GDCompletionObjects1.length = 0;
gdjs.Level_32SelectCode.GDCompletionObjects2.length = 0;

gdjs.Level_32SelectCode.eventsList0(runtimeScene);
return;

}

gdjs['Level_32SelectCode'] = gdjs.Level_32SelectCode;
