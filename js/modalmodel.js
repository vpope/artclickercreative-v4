/**
 * @constructor
 * @param {jQuery} parentNode
 * @param {jQuery} modalParentNode
 * @returns {ModalModel}
 */
function ModalModel(parentNode, modalParentNode) {
    this.parentNode = parentNode;
    this.modelParentNode = modalParentNode;
}

/**
 * Adds collection data and prepares render
 * @param {Array} array
 * @returns {undefined}
 */
ModalModel.prototype.addCollection = function(array) {
    this.data = array;
    this.render();
};

/**
 * Returns a section from the data array when a given index
 * @param {Number} index
 * @returns {Object}
 */
ModalModel.prototype.getItemByIndex = function(index) {
    return this.data[index];
};

ModalModel.prototype.render = function() {
    var _this = this;

    // renders thumbnails
    this.data.forEach(function(data) {
        var imageTemplate = '<div class="image ' + (data.wide === true ? 'image-horizontal' : 'image-vertical') + '"><img src="' + data.thumbnail + '" alt="" /></div>',
                item = $(imageTemplate);

        // add click handler to update data in modal
        item.on('click', function() {
            $('.description-block').hide();
            if (data.price === undefined) {
                $('.non-price-text').show();
            } else if (data.maxdimension === undefined){
                $('.graphic-text').show();
            } else {
                $('.price-text').show();
            }

            $('.imagebig', this.modelParentNode).html('<img src="' + data.thumbnail + '" />');
            $('.description', this.modelParentNode).html(data.description);
            $('.medium', this.modelParentNode).html(data.medium);
            $('.maxdimension', this.modelParentNode).html(data.maxdimension);
            $('.price', this.modelParentNode).html(data.price);
            $('.animatic', this.modelParentNode).html(data.animatic);
        });

        // append image thumbnail to the `pictures` element
        _this.parentNode.append(item);
    });

    // initiates model code
    modal('.image', '.modal-picture');
};
