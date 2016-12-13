import renderList from './renderList';

export default (data, source, target) => {
    const inputEl = document.getElementById(source);

    inputEl.addEventListener('input', (e) => {
        let pattern = e.target.value.toLowerCase().trim();
        if (pattern) {
            let output = data.filter((user) => {
                return (user.first_name.toLowerCase().includes(pattern) ||
                user.last_name.toLowerCase().includes(pattern));
            });

            renderList(output, target);
        } else {
            renderList(data, target);
        }
    });
}
