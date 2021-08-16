gdjs.Level_323Code = {};
gdjs.Level_323Code.GDSkyObjects1= [];
gdjs.Level_323Code.GDSkyObjects2= [];
gdjs.Level_323Code.GDGrassObjects1= [];
gdjs.Level_323Code.GDGrassObjects2= [];
gdjs.Level_323Code.GDArrowLeftObjects1= [];
gdjs.Level_323Code.GDArrowLeftObjects2= [];
gdjs.Level_323Code.GDArrowUpObjects1= [];
gdjs.Level_323Code.GDArrowUpObjects2= [];
gdjs.Level_323Code.GDArrowRightObjects1= [];
gdjs.Level_323Code.GDArrowRightObjects2= [];
gdjs.Level_323Code.GDCharecterObjects1= [];
gdjs.Level_323Code.GDCharecterObjects2= [];
gdjs.Level_323Code.GDMimickerObjects1= [];
gdjs.Level_323Code.GDMimickerObjects2= [];
gdjs.Level_323Code.GDPlatformObjects1= [];
gdjs.Level_323Code.GDPlatformObjects2= [];
gdjs.Level_323Code.GDYellowDoorPieceObjects1= [];
gdjs.Level_323Code.GDYellowDoorPieceObjects2= [];
gdjs.Level_323Code.GDYellowDoorPressurePlateObjects1= [];
gdjs.Level_323Code.GDYellowDoorPressurePlateObjects2= [];
gdjs.Level_323Code.GDExitDoorObjects1= [];
gdjs.Level_323Code.GDExitDoorObjects2= [];
gdjs.Level_323Code.GDLavaObjects1= [];
gdjs.Level_323Code.GDLavaObjects2= [];
gdjs.Level_323Code.GDPurpleDoorPieceObjects1= [];
gdjs.Level_323Code.GDPurpleDoorPieceObjects2= [];
gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects1= [];
gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects2= [];

gdjs.Level_323Code.conditionTrue_0 = {val:false};
gdjs.Level_323Code.condition0IsTrue_0 = {val:false};
gdjs.Level_323Code.condition1IsTrue_0 = {val:false};


gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMimickerObjects1Objects = Hashtable.newFrom({"Mimicker": gdjs.Level_323Code.GDMimickerObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.Level_323Code.GDLavaObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDArrowLeftObjects1Objects = Hashtable.newFrom({"ArrowLeft": gdjs.Level_323Code.GDArrowLeftObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDArrowUpObjects1Objects = Hashtable.newFrom({"ArrowUp": gdjs.Level_323Code.GDArrowUpObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDArrowRightObjects1Objects = Hashtable.newFrom({"ArrowRight": gdjs.Level_323Code.GDArrowRightObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMimickerObjects1Objects = Hashtable.newFrom({"Mimicker": gdjs.Level_323Code.GDMimickerObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDYellowDoorPressurePlateObjects1Objects = Hashtable.newFrom({"YellowDoorPressurePlate": gdjs.Level_323Code.GDYellowDoorPressurePlateObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDCharecterObjects1Objects = Hashtable.newFrom({"Charecter": gdjs.Level_323Code.GDCharecterObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDExitDoorObjects1Objects = Hashtable.newFrom({"ExitDoor": gdjs.Level_323Code.GDExitDoorObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMimickerObjects1Objects = Hashtable.newFrom({"Mimicker": gdjs.Level_323Code.GDMimickerObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPurpleDoorPressurePlateObjects1Objects = Hashtable.newFrom({"PurpleDoorPressurePlate": gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects1});gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs.Level_323Code.GDLavaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_323Code.GDMimickerObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMimickerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDLavaObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.Level_323Code.GDArrowLeftObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDArrowLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_323Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_323Code.GDMimickerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDCharecterObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDCharecterObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMimickerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMimickerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowUp"), gdjs.Level_323Code.GDArrowUpObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDArrowUpObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_323Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_323Code.GDMimickerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDCharecterObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDCharecterObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMimickerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMimickerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.Level_323Code.GDArrowRightObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDArrowRightObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_323Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_323Code.GDMimickerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDCharecterObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDCharecterObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMimickerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMimickerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_323Code.GDMimickerObjects1);
gdjs.copyArray(runtimeScene.getObjects("YellowDoorPressurePlate"), gdjs.Level_323Code.GDYellowDoorPressurePlateObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMimickerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDYellowDoorPressurePlateObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("YellowDoorPiece"), gdjs.Level_323Code.GDYellowDoorPieceObjects1);
/* Reuse gdjs.Level_323Code.GDYellowDoorPressurePlateObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDYellowDoorPieceObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYellowDoorPieceObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDYellowDoorPressurePlateObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYellowDoorPressurePlateObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Charecter"), gdjs.Level_323Code.GDCharecterObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitDoor"), gdjs.Level_323Code.GDExitDoorObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDCharecterObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDExitDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mimicker"), gdjs.Level_323Code.GDMimickerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurpleDoorPressurePlate"), gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDMimickerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPurpleDoorPressurePlateObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PurpleDoorPiece"), gdjs.Level_323Code.GDPurpleDoorPieceObjects1);
/* Reuse gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDPurpleDoorPieceObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPurpleDoorPieceObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDSkyObjects1.length = 0;
gdjs.Level_323Code.GDSkyObjects2.length = 0;
gdjs.Level_323Code.GDGrassObjects1.length = 0;
gdjs.Level_323Code.GDGrassObjects2.length = 0;
gdjs.Level_323Code.GDArrowLeftObjects1.length = 0;
gdjs.Level_323Code.GDArrowLeftObjects2.length = 0;
gdjs.Level_323Code.GDArrowUpObjects1.length = 0;
gdjs.Level_323Code.GDArrowUpObjects2.length = 0;
gdjs.Level_323Code.GDArrowRightObjects1.length = 0;
gdjs.Level_323Code.GDArrowRightObjects2.length = 0;
gdjs.Level_323Code.GDCharecterObjects1.length = 0;
gdjs.Level_323Code.GDCharecterObjects2.length = 0;
gdjs.Level_323Code.GDMimickerObjects1.length = 0;
gdjs.Level_323Code.GDMimickerObjects2.length = 0;
gdjs.Level_323Code.GDPlatformObjects1.length = 0;
gdjs.Level_323Code.GDPlatformObjects2.length = 0;
gdjs.Level_323Code.GDYellowDoorPieceObjects1.length = 0;
gdjs.Level_323Code.GDYellowDoorPieceObjects2.length = 0;
gdjs.Level_323Code.GDYellowDoorPressurePlateObjects1.length = 0;
gdjs.Level_323Code.GDYellowDoorPressurePlateObjects2.length = 0;
gdjs.Level_323Code.GDExitDoorObjects1.length = 0;
gdjs.Level_323Code.GDExitDoorObjects2.length = 0;
gdjs.Level_323Code.GDLavaObjects1.length = 0;
gdjs.Level_323Code.GDLavaObjects2.length = 0;
gdjs.Level_323Code.GDPurpleDoorPieceObjects1.length = 0;
gdjs.Level_323Code.GDPurpleDoorPieceObjects2.length = 0;
gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects1.length = 0;
gdjs.Level_323Code.GDPurpleDoorPressurePlateObjects2.length = 0;

gdjs.Level_323Code.eventsList0(runtimeScene);
return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;
