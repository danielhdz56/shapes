var Shape = {
    get_type : function(){
        return this.type; //this will refer to the shape that it is called in
    }
};

module.exports = {Shape};

