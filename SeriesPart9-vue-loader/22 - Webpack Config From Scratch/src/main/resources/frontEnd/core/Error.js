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
export default Error;