export const addData = (target, source, id) => {
    if (id) {
        let i = source.findIndex((item) => item.id === +id);

        if (i > -1) {
            target.push(source[i]);
        }
    } else {
        Object.assign(target, source);
    }
};

export const removeData = (target, id) => {
    let i = target.findIndex((item) => item.id === +id);

    if (i > -1) {
        target.splice(i, 1);
    }
};
