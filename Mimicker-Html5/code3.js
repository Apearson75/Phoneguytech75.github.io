gdjs.Level_322Code = {};
gdjs.Level_322Code.GDSkyObjects1= [];
gdjs.Level_322Code.GDSkyObjects2= [];
gdjs.Level_322Code.GDGrassObjects1= [];
gdjs.Level_322Code.GDGrassObjects2= [];
gdjs.Level_322Code.GDArrowLeftObjects1= [];
gdjs.Level_322Code.GDArrowLeftObjects2= [];
gdjs.Level_322Code.GDArrowUpObjects1= [];
gdjs.Level_322Code.GDArrowUpObjects2= [];
gdjs.Level_322Code.GDArrowRightObjects1= [];
gdjs.Level_322Code.GDArrowRightObjects2= [];
gdjs.Level_322Code.GDCharecterObjects1= [];
gdjs.Level_322Code.GDCharecterObjects2= [];
gdjs.Level_322Code.GDMimickerObjects1= [];
gdjs.Level_322Code.GDMimickerObjects2= [];
gdjs.Level_322Code.GDPlatformObjects1= [];
gdjs.Level_322Code.GDPlatformObjects2= [];
gdjs.Level_322Code.GDYellowDoorPieceObjects1= [];
gdjs.Level_322Code.GDYellowDoorPieceObjects2= [];
gdjs.Level_322Code.GDYellowDoorPressurePlateObjects1= [];
gdjs.Level_322Code.GDYellowDoorPressurePlateObjects2= [];
gdjs.Level_322Code.GDExitDoorObjects1= [];
gdjs.Level_322Code.GDExitDoorObjects2= [];
gdjs.Level_322Code.GDLavaObjects1= [];
gdjs.Level_322Code.GDLavaObjects2= [];

gdjs.Level_322Code.conditionTrue_0 = {val:false};
gdjs.Level_322Code.condition0IsTrue_0 = {val:false};
gdjs.Level_322Code.condition1IsTrue_0 = {val:false};


gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDCharecterObjects1Objects = Hashtable.newFrom({"Charecter": gdjs.Level_322Code.GDCharecterObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDExitDoorObjects1Objects = Hashtable.newFrom({"ExitDoor": gdjs.Level_322Code.GDExitDoorObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMimickerObjects1Objects = Hashtable.newFrom({"Mimicker": gdjs.Level_322Code.GDMimickerObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDYellowDoorPressurePlateObjects1Objects = Hashtable.newFrom({"YellowDoorPressurePlate": gdjs.Level_322Code.GDYellowDoorPressurePlateObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDArrowRightObjects1Objects = Hashtable.newFrom({"ArrowRight": gdjs.Level_322Code.GDArrowRightObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDArrowUpObjects1Objects = Hashtable.newFrom({"ArrowUp": gdjs.Level_322Code.GDArrowUpObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDArrowLeftObjects1Objects = Hashtable.newFrom({"ArrowLeft": gdjs.Level_322Code.GDArrowLeftObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMimickerObjects1Objects = Hashtable.newFrom({"Mimicker": gdjs.Level_322Code.GDMimickerObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.Level_322Code.GDLavaObjects1});gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_322Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitDoor"), gdjs.Level_322Code.GDExitDoorObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDCharecterObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDExitDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_322Code.GDMimickerObjects1);
gdjs.copyArray(runtimeScene.getObjects("YellowDoorPressurePlate"), gdjs.Level_322Code.GDYellowDoorPressurePlateObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMimickerObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDYellowDoorPressurePlateObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("YellowDoorPiece"), gdjs.Level_322Code.GDYellowDoorPieceObjects1);
/* Reuse gdjs.Level_322Code.GDYellowDoorPressurePlateObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDYellowDoorPieceObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDYellowDoorPieceObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDYellowDoorPressurePlateObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDYellowDoorPressurePlateObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.Level_322Code.GDArrowRightObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDArrowRightObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_322Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_322Code.GDMimickerObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCharecterObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCharecterObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMimickerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMimickerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Level_322Code.GDArrowUpObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDArrowUpObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_322Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_322Code.GDMimickerObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCharecterObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCharecterObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMimickerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMimickerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.Level_322Code.GDArrowLeftObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDArrowLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_322Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_322Code.GDMimickerObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCharecterObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCharecterObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMimickerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMimickerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs.Level_322Code.GDLavaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_322Code.GDMimickerObjects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDMimickerObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDLavaObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{


{
}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDSkyObjects1.length = 0;
gdjs.Level_322Code.GDSkyObjects2.length = 0;
gdjs.Level_322Code.GDGrassObjects1.length = 0;
gdjs.Level_322Code.GDGrassObjects2.length = 0;
gdjs.Level_322Code.GDArrowLeftObjects1.length = 0;
gdjs.Level_322Code.GDArrowLeftObjects2.length = 0;
gdjs.Level_322Code.GDArrowUpObjects1.length = 0;
gdjs.Level_322Code.GDArrowUpObjects2.length = 0;
gdjs.Level_322Code.GDArrowRightObjects1.length = 0;
gdjs.Level_322Code.GDArrowRightObjects2.length = 0;
gdjs.Level_322Code.GDCharecterObjects1.length = 0;
gdjs.Level_322Code.GDCharecterObjects2.length = 0;
gdjs.Level_322Code.GDMimickerObjects1.length = 0;
gdjs.Level_322Code.GDMimickerObjects2.length = 0;
gdjs.Level_322Code.GDPlatformObjects1.length = 0;
gdjs.Level_322Code.GDPlatformObjects2.length = 0;
gdjs.Level_322Code.GDYellowDoorPieceObjects1.length = 0;
gdjs.Level_322Code.GDYellowDoorPieceObjects2.length = 0;
gdjs.Level_322Code.GDYellowDoorPressurePlateObjects1.length = 0;
gdjs.Level_322Code.GDYellowDoorPressurePlateObjects2.length = 0;
gdjs.Level_322Code.GDExitDoorObjects1.length = 0;
gdjs.Level_322Code.GDExitDoorObjects2.length = 0;
gdjs.Level_322Code.GDLavaObjects1.length = 0;
gdjs.Level_322Code.GDLavaObjects2.length = 0;

gdjs.Level_322Code.eventsList0(runtimeScene);
return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
