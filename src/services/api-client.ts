import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
         key: '4bd58049030140ca838f372ff706bae8'
    }
})