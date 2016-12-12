export default (data, target) => {
    console.log(document);
    const sourceTemplate = document.getElementById('listItem').innerHTML,
        list = document.getElementById(target),
        compile = Handlebars.compile(sourceTemplate);

    list.innerHTML = compile({list: data});
}
