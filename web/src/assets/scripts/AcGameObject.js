const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        // 这一帧执行的时刻距离上一帧执行的时刻 距离间隔
        this.timedelta = 0;
        this.has_called_start = false; // 标记函数是否执行过
    }

    start() { // 只执行一次 创建时执行
    }

    update() { // 每一帧执行一次，除了第一帧之外
    }

    on_destory() { // 删除前执行

    }

    destory() {
        this.on_destory();

        // 将当前对象从AC_GAME_OBJECTS中删除
        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj == this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; // 上一次执行的时刻
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) { // js中of遍历的是值 in是下标
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step)

}
requestAnimationFrame(step)