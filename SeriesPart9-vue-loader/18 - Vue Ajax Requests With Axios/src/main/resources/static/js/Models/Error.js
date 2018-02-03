class Error{
    constructor(json){
        if(json) {
            this.message = json.message;
            this.date = json.date;
            this.data = json.data;
        }else{
            this.message = '';
            this.date = new Date();
            this.data = {};
        }
    }

    any(){
        return Object.keys(this.data).length > 0;
    }
    get(field){
        if(this.has(field)){
            return this.data[field].join();
        }
    }

    has(field){
        return this.data[field];
    }

    clean(field){
        delete this.data[field];
    }
}