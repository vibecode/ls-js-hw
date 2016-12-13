export default (data, target) => {
    if (data) {
        const sourceTemplate = document.getElementById('listItem').innerHTML,
            list = document.getElementById(target),
            compile = Handlebars.compile(sourceTemplate);

        list.innerHTML = compile({list: data});
    }
}
