function draw(yourId) {
    return new Promise(resolve => {
        setTimeout(() => {
            window.socket.emit('draw', { yourId: yourId });
            resolve();
        },300);
    });
}

function oppDraw(oppId)  {
    return new Promise(resolve => {
        setTimeout(() => {
            window.socket.emit('oppDraw', { oppId: oppId });
            resolve();
        },300);
    });
}

export {
    draw,
    oppDraw,
}