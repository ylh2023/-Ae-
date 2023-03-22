function AddValueLoop(layerName,effectName,propertyName,minValue,maxValue,increment,isAdd) {
    var curComp = app.project.activeItem;
    var curTime = curComp.time;
    var theLayer = curComp.layer(layerName);
    var theProp = theLayer.effect(effectName).property(propertyName);
    var thePropValue = theProp.valueAtTime(curTime,true);
    if (!theLayer) {
        alert("未找到指定图层");
    } else if (!theProp) {
        alert("未找到指定属性")
    } else if (isAdd && thePropValue >= maxValue) {
        theProp.setValueAtTime(curTime, minValue);
    } else if (!isAdd && thePropValue <= minValue) {
        theProp.setValueAtTime(curTime, maxValue);
    } else {
        theProp.setValueAtTime(curTime, thePropValue + increment);
    }
    return theProp.valueAtTime(curTime,true);
}//每使用一次增加或减少一次属性值，超出极限时回到最小或最大值,并返回此时的属性值

AddValueLoop("Ctrl_wrist_L","Customize","Sabun",2,5,-1,false);