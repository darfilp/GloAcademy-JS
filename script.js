const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;


    if (this.selector[0] === '#') {
        const p = document.createElement('p');
        this.DomElement = function() {
            p.id = selector.slice(1);
            p.style.cssText=`
            background-color: ${bg};
            width: ${width};
            height: ${height};
            font-size: ${fontSize};
            `;
            p.textContent = 'Получилось с #'
            document.querySelector('.container').append(p);
        }()
    } 
    
    if (this.selector[0] === '.') {
        const div = document.createElement('div');
        this.DomElement = function() {
            div.classList.add(selector.slice(1));
            div.style.cssText=`
            background-color: ${bg};
            width: ${width};
            height: ${height};
            font-size: ${fontSize};
            `;
            div.textContent = 'Получилось'
            document.querySelector('.container').append(div);
        }()
    } 
}


const elem1 = new DomElement('.best', '50px', '50px', 'red', '19px');
const elem2 = new DomElement('#add', '50px', '50px', 'green', '19px');


