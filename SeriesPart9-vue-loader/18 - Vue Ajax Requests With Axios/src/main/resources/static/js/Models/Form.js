class Form{
    constructor(data){
        this.originalData = data;

        for(let field in data){
            this[field] = data[field];
        }
        this.error = new Error();
    }
    /**
     * Fetch all relevant data for the form
     */
    data(){
        let data = {};
        for(let property in this.originalData){
            data[property] = this[property];
        }
        return data;
    }
    /**
     * Make a submit post to the url
     * @param {url} server url
     * @return {Promise}
     */
    submit(url){
        return new Promise((resolve,reject)=>{
            axios.post(url,this.data())
                .then(response=>resolve(response))
                .catch(err=>{
                    this.onFail(err.response.data);
                    reject(err.response.data);
                })
        });

    }
    /**
     * Set this.error with the json data
     * @param {err} error json
     */
    onFail(err){
        this.error = new Error(err)
    }
    /**
     * Clean all the relevant data form
     */
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
    /**
     * Check if there any error
     * @return  {boolean}
     */
    any(){
        return Object.keys(this.data).length > 0;
    }
    /**
     * get error String description by name
     * @param {field} field error name
     * @return  {String}
     */
    get(field){
        if(this.has(field)){
            return this.data[field].join();
        }
    }
    /**
     * check if the field has error
     * @param {field} field error name
     * @return  {boolean}
     */
    has(field){
        return this.data.hasOwnProperty(field);
    }
    /**
     * Delete the error by field name
     * @param {field} field error name
     */
    clean(field){
       if(field){
           delete this.data[field];
           return ;
       }
       this.data = {};
    }
}