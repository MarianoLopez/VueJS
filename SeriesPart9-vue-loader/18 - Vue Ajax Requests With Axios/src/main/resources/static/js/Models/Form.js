class Form{
    constructor(data){
        this.originalData = data;

        for(let field in data){
            this[field] = data[field];
        }
        this.error = new Error();
    }

    data(){
        let data = Object.assign({},this)
        delete data.originalData;
        delete data.error;
        return data;
    }

    submit(url,onSuccess){
        axios.post(url,this.data())
            .then(onSuccess)
            .catch(this.onFail.bind(this))
    }

    onFail(err){
        this.error = new Error(err.response.data)
    }

    clean(){
        for(let field in this.originalData){
            this[field] = ''
        }
    }
}


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
    //any error?
    any(){
        return Object.keys(this.data).length > 0;
    }
    //get field error
    get(field){
        if(this.has(field)){
            return this.data[field].join();
        }
    }
    //has the field error
    has(field){
        return this.data[field];
    }
    //delete field error
    clean(field){
       if(field){
           delete this.data[field];
           return ;
       }
       this.data = {};
    }
}