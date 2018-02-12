import Error from './Error';
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
export default Form;