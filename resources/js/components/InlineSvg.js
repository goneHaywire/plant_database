class Svg {
    constructor(name) {
        let div = document.createElement('div');
        div.innerHTML = require('../../../public/assets/images/' + name + '.svg'); // change to wherever your svg files are

        let fragment = document.createDocumentFragment();
        fragment.appendChild(div);

        this.svg = fragment.querySelector('svg');
    }

    classes(classes) {
        if (classes) {
            this.svg.classList = '';

            classes.split(' ').forEach(className => {
                this.svg.classList.add(className);
            });
        }

        return this;
    }

    width(width) {
        if (width) {
            this.svg.setAttribute('width', width);
        }

        return this;
    }

    height(height) {
        if (height) {
            this.svg.setAttribute('height', height);
        }

        return this;
    }

    toString() {
        return this.svg.outerHTML;
    }
}

export default {
    props: ['name', 'classes', 'width', 'height'],

    render(h) {
        return h('div', {
            domProps: {
                classList: 'flex items-center',
                innerHTML: new Svg(this.name)
                    .classes(this.classes)
                    .width(this.width)
                    .height(this.height)
            }
        });
    }
};
