var Shape = function() {
    this.type = 'shape'  
}
Shape.prototype.get_type = function(){
    return this.constructor;
}
module.exports = {Shape};