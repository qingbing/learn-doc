let name;

function setName(name) {
    this.name = name;
}

function getName() {
    return this.name
}

exports.setName = setName;
exports.getName = getName;